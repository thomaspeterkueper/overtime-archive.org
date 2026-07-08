#!/usr/bin/env python3
"""Match OTA documents against a KUE foundation index.

This tool is advisory. It never modifies OTA documents and never writes to
kueper.com. It produces a review report for curators.
"""
from __future__ import annotations

import argparse
import json
import pathlib
import re
from dataclasses import dataclass

WORD = re.compile(r"[A-Za-zÄÖÜäöüß0-9-]{4,}")
DOC_ID = re.compile(r"OTA-[A-Z]+-[0-9]{4}-[0-9]{4}-[A-Z]{2}")
KUE_ID = re.compile(r"KUE-[A-Z]+-[0-9]{4}(?:-[0-9]{4})?-[A-Z]{2}|KUE-[A-Z]+-[0-9]{4}")
KD_ID = re.compile(r"KD:[A-Z]+-[A-Z0-9-]+:N[1-4]")

STOPWORDS = {
    "diese", "dieser", "dieses", "nicht", "oder", "aber", "über", "unter",
    "eine", "einer", "eines", "sind", "wird", "werden", "auch", "dass",
    "with", "from", "this", "that", "into", "about", "document", "archive",
}


@dataclass
class KueDoc:
    id: str
    title: str
    text: str
    kd: set[str]
    terms: set[str]


@dataclass
class OtaDoc:
    path: pathlib.Path
    id: str
    text: str
    kd: set[str]
    terms: set[str]


def terms(text: str) -> set[str]:
    return {w.lower() for w in WORD.findall(text) if w.lower() not in STOPWORDS}


def read_ota(path: pathlib.Path) -> OtaDoc:
    text = path.read_text(encoding="utf-8", errors="replace")
    doc_id = DOC_ID.search(text)
    return OtaDoc(
        path=path,
        id=doc_id.group(0) if doc_id else path.name,
        text=text,
        kd=set(KD_ID.findall(text)),
        terms=terms(text),
    )


def read_kue_index(path: pathlib.Path) -> list[KueDoc]:
    data = json.loads(path.read_text(encoding="utf-8"))
    docs = data.get("documents", data if isinstance(data, list) else [])
    result: list[KueDoc] = []
    for item in docs:
        doc_id = str(item.get("id", ""))
        if not doc_id:
            continue
        title = str(item.get("title", ""))
        text = " ".join(str(item.get(key, "")) for key in ["title", "subtitle", "summary", "abstract", "keywords"])
        kd = set(item.get("kd", [])) | set(item.get("domains", []))
        result.append(KueDoc(id=doc_id, title=title, text=text, kd=kd, terms=terms(text)))
    return result


def score(ota: OtaDoc, kue: KueDoc) -> int:
    shared_terms = ota.terms & kue.terms
    shared_kd = ota.kd & kue.kd
    return len(shared_terms) + 8 * len(shared_kd)


def status(scores: list[tuple[int, KueDoc]]) -> str:
    if not scores or scores[0][0] == 0:
        return "MISSING_FOUNDATION"
    if len(scores) > 1 and scores[0][0] == scores[1][0]:
        return "MULTIPLE"
    if scores[0][0] < 3:
        return "NO_MATCH"
    return "MATCH"


def report(otas: list[OtaDoc], kues: list[KueDoc]) -> str:
    lines = ["# OTA Foundation Matcher Report", "", "This report is advisory. OTA may reference KUE foundations but must not define them.", ""]
    for ota in otas:
        ranked = sorted(((score(ota, k), k) for k in kues), key=lambda x: x[0], reverse=True)[:5]
        st = status(ranked)
        lines += [f"## {ota.id}", "", f"Source: `{ota.path}`", "", f"Status: **{st}**", ""]
        if ranked and ranked[0][0] > 0:
            lines += ["| Score | KUE document | Title |", "|---:|---|---|"]
            for value, kue in ranked:
                if value == 0:
                    continue
                lines.append(f"| {value} | `{kue.id}` | {kue.title} |")
            lines.append("")
        if st == "MISSING_FOUNDATION":
            lines += ["Action: Create External Task for kueper.com requested-foundations inbox.", ""]
        elif st == "MULTIPLE":
            lines += ["Action: Curator review required before adding OTA to KUE reference.", ""]
        elif st == "MATCH":
            lines += ["Action: Add OTA to KUE foundation reference after curator confirmation.", ""]
    return "\n".join(lines)


def collect(paths: list[str]) -> list[OtaDoc]:
    files: list[pathlib.Path] = []
    for item in paths:
        path = pathlib.Path(item)
        if path.is_dir():
            files.extend(path.rglob("*.md"))
        elif path.suffix.lower() == ".md":
            files.append(path)
    return [read_ota(path) for path in sorted(files)]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--kue-index", required=True, help="JSON index of existing KUE documents")
    parser.add_argument("--output", default="reports/ota-foundation-matches.md")
    parser.add_argument("paths", nargs="+")
    args = parser.parse_args()
    otas = collect(args.paths)
    kues = read_kue_index(pathlib.Path(args.kue_index))
    out = pathlib.Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(report(otas, kues), encoding="utf-8")
    print(f"Wrote {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
