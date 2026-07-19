#!/usr/bin/env python3
"""Validate OTA metadata conventions."""
from __future__ import annotations

import argparse
import pathlib
import re
import sys

OTA_ID = re.compile(r"OTA-[A-Z]+-[0-9]{4}-(?:[0-9]{4}|[0-9]+BCE|MULTI)-[A-Z]{2}")
KD_ID = re.compile(r"KD:[A-Z]+-[A-Z0-9-]+:N[1-4]")
PRIMARY_KNOW = re.compile(r"^\s*-?\s*id\s*:\s*KNOW:", re.MULTILINE)
LOCAL_DOMAINS = re.compile(r"^\s*knowledgeDomains\s*:", re.MULTILINE)
BAD_PURPOSE = re.compile(r"purpose\s*:\s*(?!(read|create|review)\b)(\S+)")


def frontmatter(text: str) -> str:
    if not text.startswith("---\n"):
        return text[:4000]
    end = text.find("\n---", 4)
    return text[4:end] if end != -1 else text[:4000]


def validate(path: pathlib.Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    meta = frontmatter(text)
    errors: list[str] = []
    warnings: list[str] = []

    if path.name.startswith("OTA-") and not OTA_ID.search(text):
        errors.append("filename looks like OTA document but no canonical OTA signature was found")
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
    for match in BAD_PURPOSE.finditer(meta):
        errors.append(f"invalid purpose: {match.group(2)}")
    if "knowledge:" in meta and not KD_ID.search(meta):
        warnings.append("knowledge block found but no KD:*:* reference detected")

    return [f"ERROR: {path}: {e}" for e in errors] + [f"WARNING: {path}: {w}" for w in warnings]


def collect(items: list[str]) -> list[pathlib.Path]:
    files: list[pathlib.Path] = []
    for item in items:
        p = pathlib.Path(item)
        if p.is_dir():
            files.extend(p.rglob("*.md"))
            files.extend(p.rglob("*.yml"))
            files.extend(p.rglob("*.yaml"))
        elif p.suffix.lower() in {".md", ".yml", ".yaml"}:
            files.append(p)
    return sorted(set(files))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="*", default=["."])
    args = parser.parse_args()
    messages: list[str] = []
    for file in collect(args.paths):
        messages.extend(validate(file))
    for message in messages:
        print(message)
    if any(message.startswith("ERROR:") for message in messages):
        return 1
    print("OTA metadata validation passed." if not messages else "OTA metadata validation completed with warnings.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
