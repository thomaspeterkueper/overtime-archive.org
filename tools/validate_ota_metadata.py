#!/usr/bin/env python3
"""Validate OTA metadata conventions.

This validator is intentionally lightweight and dependency-free. It checks OTA
Markdown files and YAML-like frontmatter for the governance rules that can be
verified safely inside this repository.
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys
from dataclasses import dataclass, field

OTA_ID_RE = re.compile(r"^OTA-[A-Z]+-[0-9]{4}-[0-9]{4}-[A-Z]{2}$")
ANY_OTA_ID_RE = re.compile(r"OTA-[A-Z]+-[0-9]{4}-[0-9]{4}-[A-Z]{2}")
KNOW_RE = re.compile(r"KNOW:[A-Z]+-[A-Z0-9-]+")
LOCAL_KNOW_DOMAIN_RE = re.compile(r"^\s*knowledgeDomains\s*:", re.MULTILINE)
SOURCE_OF_TRUTH_TRUE_RE = re.compile(r"sourceOfTruth\s*:\s*true\b", re.IGNORECASE)
KG_MASTER_RE = re.compile(r"master\s*:\s*kueper-knowledge-graph\b")
KG_SYSTEM_RE = re.compile(r"system\s*:\s*SYS:OTA:overtimearchive\b")
LEVEL_RE = re.compile(r"level\s*:\s*(N[1-4])\b")
BAD_LEVEL_RE = re.compile(r"level\s*:\s*(?!N[1-4]\b)(\S+)")
PURPOSE_RE = re.compile(r"purpose\s*:\s*(read|create|review)\b")
BAD_PURPOSE_RE = re.compile(r"purpose\s*:\s*(?!(?:read|create|review)\b)(\S+)")
EXTERNAL_SYSTEMS = [
    "kueper-knowledge-graph",
    "solarsciencefoundation",
    "noxiagame",
    "kueper.com",
]


@dataclass
class ValidationIssue:
    path: pathlib.Path
    severity: str
    message: str


@dataclass
class ValidationResult:
    issues: list[ValidationIssue] = field(default_factory=list)

    def add(self, path: pathlib.Path, severity: str, message: str) -> None:
        self.issues.append(ValidationIssue(path=path, severity=severity, message=message))

    @property
    def has_errors(self) -> bool:
        return any(issue.severity == "error" for issue in self.issues)


def read_text(path: pathlib.Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def extract_frontmatter(text: str) -> str | None:
    if not text.startswith("---\n"):
        return None
    end = text.find("\n---", 4)
    if end == -1:
        return None
    return text[4:end]


def validate_file(path: pathlib.Path, result: ValidationResult) -> None:
    text = read_text(path)
    frontmatter = extract_frontmatter(text)
    searchable = frontmatter if frontmatter is not None else text[:4000]

    ids = ANY_OTA_ID_RE.findall(text)
    if ids:
        for doc_id in sorted(set(ids)):
            if not OTA_ID_RE.match(doc_id):
                result.add(path, "error", f"Invalid OTA document ID: {doc_id}")
    elif path.name.startswith("OTA-"):
        result.add(path, "error", "Filename looks like an OTA document but no OTA ID was found.")

    if LOCAL_KNOW_DOMAIN_RE.search(searchable):
        result.add(path, "error", "Local knowledgeDomains definition found. OTA must reference KG domains, not redefine them.")

    if SOURCE_OF_TRUTH_TRUE_RE.search(searchable):
        result.add(path, "error", "kg.sourceOfTruth must be false for OTA documents.")

    if "kg:" in searchable:
        if not KG_MASTER_RE.search(searchable):
            result.add(path, "error", "kg.master must be kueper-knowledge-graph.")
        if not KG_SYSTEM_RE.search(searchable):
            result.add(path, "error", "kg.system must be SYS:OTA:overtimearchive.")

    for bad in BAD_LEVEL_RE.findall(searchable):
        result.add(path, "error", f"Invalid knowledge level: {bad}. Allowed values: N1, N2, N3, N4.")

    for bad in BAD_PURPOSE_RE.findall(searchable):
        result.add(path, "error", f"Invalid knowledge purpose: {bad}. Allowed values: read, create, review.")

    if "knowledge:" in searchable and not KNOW_RE.search(searchable):
        result.add(path, "warning", "knowledge block found but no KNOW:* reference detected.")

    lower = searchable.lower()
    if "authority" in lower or "owned" in lower:
        for system in EXTERNAL_SYSTEMS:
            pattern = f"{system}: owned"
            if pattern in lower:
                result.add(path, "error", f"External system must not be marked as OTA-owned: {system}")


def collect_files(paths: list[str]) -> list[pathlib.Path]:
    files: list[pathlib.Path] = []
    for item in paths:
        path = pathlib.Path(item)
        if not path.exists():
            continue
        if path.is_dir():
            files.extend(sorted(path.rglob("*.md")))
            files.extend(sorted(path.rglob("*.yml")))
            files.extend(sorted(path.rglob("*.yaml")))
        elif path.suffix.lower() in {".md", ".yml", ".yaml"}:
            files.append(path)
    return sorted(set(files))


def print_result(result: ValidationResult) -> None:
    if not result.issues:
        print("OTA metadata validation passed.")
        return

    for issue in result.issues:
        print(f"{issue.severity.upper()}: {issue.path}: {issue.message}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate OTA metadata and governance conventions.")
    parser.add_argument("paths", nargs="*", default=["."], help="Files or directories to validate")
    args = parser.parse_args()

    files = collect_files(args.paths)
    result = ValidationResult()

    for path in files:
        validate_file(path, result)

    print_result(result)
    return 1 if result.has_errors else 0


if __name__ == "__main__":
    sys.exit(main())
