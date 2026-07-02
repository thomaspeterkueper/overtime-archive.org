#!/usr/bin/env python3
from __future__ import annotations

import argparse
import pathlib
import re

OTA = re.compile(r"OTA-[A-Z]+-[0-9]{4}-[0-9]{4}-[A-Z]{2}")
KNOW = re.compile(r"KNOW:([A-Z]+-[A-Z0-9-]+)")
KD = re.compile(r"KD:([A-Z]+-[A-Z0-9-]+):(N[1-4])")
LEVEL = re.compile(r"\bN[1-4]\b")


def scan(text: str) -> list[tuple[str, str]]:
    items = set()
    for line in text.splitlines():
        for code, level in KD.findall(line):
            items.add((code, level))
        m = LEVEL.search(line)
        level = m.group(0) if m else "N1"
        for code in KNOW.findall(line):
            items.add((code, level))
    return sorted(items)


def render(doc_id: str, domains: list[tuple[str, str]]) -> str:
    rows = []
    req = []
    for code, level in domains:
        kd = f"KD:{code}:{level}"
        rows += [f"    - id: {kd}", f"      legacyId: KNOW:{code}", "      purpose: read"]
        req.append(f"    - {kd}")
    return "\n".join([
        "---",
        f"id: {doc_id}",
        "title: TODO",
        "language: de",
        "status: draft",
        "kg:",
        "  schema: KXF-0.1",
        "  master: kueper-knowledge-graph",
        f"  documentId: {doc_id}",
        f"  graphId: DOC:OTA:{doc_id}",
        "  system: SYS:OTA:overtimearchive",
        "  sourceOfTruth: false",
        "knowledge:",
        "  domains:",
        *(rows or ["    []"]),
        "entities:",
        "  mentions: []",
        "relations:",
        "  requires:",
        *(req or ["    []"]),
        "  teaches: []",
        "  expands: []",
        "  cites: []",
        "sync:",
        "  graphVersion: \"0.2\"",
        "  graphUpdated: \"2026-07-02\"",
        "  exportedFrom: kueper-knowledge-graph",
        "---",
        "",
    ])


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("files", nargs="+")
    args = parser.parse_args()
    for name in args.files:
        path = pathlib.Path(name)
        text = path.read_text(encoding="utf-8", errors="replace")
        doc = OTA.search(text)
        if not doc:
            continue
        out = path.with_suffix(".frontmatter.yml")
        out.write_text(render(doc.group(0), scan(text)), encoding="utf-8")
        print(f"Created {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
