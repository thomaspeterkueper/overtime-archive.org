#!/usr/bin/env python3
"""Validate canonical OTA document metadata conventions.

Repository documentation, reports, examples and external task/request files are
not canonical OTA documents and therefore must not be rejected for using
historical or illustrative metadata conventions.
"""
from __future__ import annotations

import argparse
import pathlib
import re
import sys

OTA_ID = re.compile(r"OTA-[A-Z]+-[0-9]{4}-(?:[0-9]{4}|[0-9]+BCE|MULTI)-[A-Z]{2}")
OTA_PARTS = re.compile(r"^OTA-([A-Z]+)-([0-9]{4})-(?:[0-9]{4}|[0-9]+BCE|MULTI)-([A-Z]{2})$")
KD_ID = re.compile(r"KD:[A-Z]+-[A-Z0-9-]+:N[1-4]")
PRIMARY_KNOW = re.compile(r"^\s*-?\s*id\s*:\s*KNOW:", re.MULTILINE)
LOCAL_DOMAINS = re.compile(r"^\s*knowledgeDomains\s*:", re.MULTILINE)
BAD_PURPOSE = re.compile(r"purpose\s*:\s*(?!(read|create|review)\b)(\S+)")

CANONICAL_ROOT = pathlib.Path("src/content/documents")


def frontmatter(text: str) -> str:
    if not text.startswith("---\n"):
        return text[:4000]
    end = text.find("\n---", 4)
    return text[4:end] if end != -1 else text[:4000]


def scalar(meta: str, key: str) -> str | None:
    match = re.search(rf"^\s*{re.escape(key)}:\s*['\"]?([^'\"\n#]+?)['\"]?\s*$", meta, re.MULTILINE)
    return match.group(1).strip() if match else None


def nested_scalar(meta: str, block: str, key: str) -> str | None:
    lines = meta.splitlines()
    start = next((i for i, line in enumerate(lines) if re.match(rf"^{re.escape(block)}:\s*$", line)), None)
    if start is None:
        return None
    for line in lines[start + 1:]:
        if line and not line[0].isspace():
            break
        match = re.match(rf"^\s+{re.escape(key)}:\s*['\"]?([^'\"#]+?)['\"]?\s*$", line)
        if match:
            return match.group(1).strip()
    return None


def validate(path: pathlib.Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    meta = frontmatter(text)
    errors: list[str] = []
    warnings: list[str] = []

    signature = scalar(meta, "signature")
    series = scalar(meta, "series")
    series_number = scalar(meta, "seriesNumber")
    language = scalar(meta, "language")

    if path.name.startswith("OTA-") and not OTA_ID.search(text):
        errors.append("filename looks like OTA document but no canonical OTA signature was found")
    if signature:
        expected_filename = f"{signature}{path.suffix}"
        if path.name != expected_filename:
            errors.append(f"filename/signature mismatch: expected {expected_filename}")
        parts = OTA_PARTS.fullmatch(signature)
        if parts:
            sig_series, sig_number, sig_language = parts.groups()
            if series and series != sig_series:
                errors.append(f"series/signature mismatch: {series} != {sig_series}")
            if series_number and int(series_number) != int(sig_number):
                errors.append(f"seriesNumber/signature mismatch: {series_number} != {int(sig_number)}")
            if language and language != sig_language:
                errors.append(f"language/signature mismatch: {language} != {sig_language}")

    if LOCAL_DOMAINS.search(meta):
        errors.append("local knowledgeDomains definition is not allowed")
    if PRIMARY_KNOW.search(meta):
        errors.append("primary knowledge IDs must use KD:<DOMAIN-CODE>:<LEVEL>; KNOW:* is legacy only")
    if "sourceOfTruth: true" in meta:
        errors.append("kg.sourceOfTruth must be false")
    if "kg:" in meta and "master: kueper-knowledge-graph" not in meta:
        errors.append("kg.master must be kueper-knowledge-graph")
    if "kg:" in meta and "system: SYS:OTA:overtimearchive" not in meta:
        errors.append("kg.system must be SYS:OTA:overtimearchive")
    if "kg:" in meta:
        document_id = nested_scalar(meta, "kg", "documentId")
        if document_id and signature and document_id != signature:
            errors.append(f"kg.documentId/signature mismatch: {document_id} != {signature}")
        source_of_truth = nested_scalar(meta, "kg", "sourceOfTruth")
        if source_of_truth is None:
            warnings.append("kg block found without explicit sourceOfTruth: false")
    for match in BAD_PURPOSE.finditer(meta):
        errors.append(f"invalid purpose: {match.group(2)}")
    if "knowledge:" in meta and not KD_ID.search(meta):
        warnings.append("knowledge block found but no KD:*:* reference detected")

    return [f"ERROR: {path}: {e}" for e in errors] + [f"WARNING: {path}: {w}" for w in warnings]


def is_canonical(path: pathlib.Path) -> bool:
    try:
        path.resolve().relative_to(CANONICAL_ROOT.resolve())
        return True
    except ValueError:
        return False


def collect(items: list[str]) -> list[pathlib.Path]:
    files: list[pathlib.Path] = []
    for item in items:
        p = pathlib.Path(item)
        if p.is_dir():
            candidates = list(p.rglob("*.md")) + list(p.rglob("*.yml")) + list(p.rglob("*.yaml"))
            files.extend(candidate for candidate in candidates if is_canonical(candidate))
        elif p.suffix.lower() in {".md", ".yml", ".yaml"} and is_canonical(p):
            files.append(p)
    return sorted(set(files))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="*", default=["."])
    args = parser.parse_args()
    files = collect(args.paths)
    messages: list[str] = []
    for file in files:
        messages.extend(validate(file))
    for message in messages:
        print(message)
    if any(message.startswith("ERROR:") for message in messages):
        return 1
    suffix = f" ({len(files)} canonical files checked)"
    print(("OTA metadata validation passed." if not messages else "OTA metadata validation completed with warnings.") + suffix)
    return 0


if __name__ == "__main__":
    sys.exit(main())
