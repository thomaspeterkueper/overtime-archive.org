#!/usr/bin/env python3
"""Generate a simple OTA to KG migration report.

The tool scans Markdown documents for OTA document IDs and knowledge-domain
references. It does not modify source documents and does not write to external
systems.
"""

from __future__ import annotations

import argparse
import datetime as dt
import pathlib
import re
from dataclasses import dataclass, field

OTA_ID_RE = re.compile(r"OTA-[A-Z]+-[0-9]{4}-[0-9]{4}-[A-Z]{2}")
DOMAIN_RE = re.compile(
    r"(?<![A-Z0-9:-])(?:KNOW:)?"
    r"((?:PHY|PHYS|GEO|AST|ASTRO|MATH|BIO|CHEM|HIS|PHIL|LANG|TOOL)-[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*)"
    r"(?![A-Z0-9:-])"
)
KD_RE = re.compile(r"KD:([A-Z]+-[A-Z0-9-]+):(N[1-4])")
LEVEL_RE = re.compile(r"\bN[1-4]\b")

KNOWN_PREFIXES = {
    "PHY": "PHYS",
    "PHYS": "PHYS",
    "GEO": "GEO",
    "ASTRO": "ASTRO",
    "AST": "ASTRO",
    "MATH": "MATH",
    "BIO": "BIO",
    "CHEM": "CHEM",
    "HIS": "HIS",
    "PHIL": "PHIL",
    "LANG": "LANG",
    "TOOL": "TOOL",
}


@dataclass
class DomainRef:
    domain_code: str
    level: str = "N1"
    purpose: str = "read"

    @property
    def kd_id(self) -> str:
        return f"KD:{self.domain_code}:{self.level}"

    @property
    def legacy_id(self) -> str:
        return f"KNOW:{self.domain_code}"


@dataclass
class DocumentReport:
    path: pathlib.Path
    document_id: str | None
    domains: dict[str, DomainRef] = field(default_factory=dict)


def normalize_domain_code(raw: str) -> str | None:
    value = raw.strip().upper()
    if value.startswith("KNOW:"):
        value = value.removeprefix("KNOW:")
    if value.startswith("KD:"):
        parts = value.split(":")
        if len(parts) >= 2:
            value = parts[1]
    if "-" not in value:
        return None
    prefix = value.split("-", 1)[0]
    if prefix not in KNOWN_PREFIXES:
        return None
    return value.replace(prefix + "-", KNOWN_PREFIXES[prefix] + "-", 1)


def purpose_for_line(line: str, current_section: str) -> str:
    if "erstellen" in current_section.lower() or "create" in current_section.lower():
        return "create"
    if "review" in current_section.lower() or "prüfen" in current_section.lower():
        return "review"
    return "read"


def extract_document(path: pathlib.Path) -> DocumentReport:
    text = path.read_text(encoding="utf-8", errors="replace")
    doc_match = OTA_ID_RE.search(text)
    report = DocumentReport(path=path, document_id=doc_match.group(0) if doc_match else None)

    current_section = ""
    for line in text.splitlines():
        if line.startswith("#"):
            current_section = line.strip("# ").strip()

        kd_matches = KD_RE.findall(line)
        for domain_code, level in kd_matches:
            normalized = normalize_domain_code(domain_code)
            if normalized:
                purpose = purpose_for_line(line, current_section)
                key = f"{normalized}:{level}:{purpose}"
                report.domains[key] = DomainRef(domain_code=normalized, level=level, purpose=purpose)

        candidates = DOMAIN_RE.findall(line)
        if not candidates:
            continue
        level_match = LEVEL_RE.search(line)
        level = level_match.group(0) if level_match else "N1"
        purpose = purpose_for_line(line, current_section)
        for candidate in candidates:
            domain_code = normalize_domain_code(candidate)
            if not domain_code:
                continue
            key = f"{domain_code}:{level}:{purpose}"
            if key not in report.domains:
                report.domains[key] = DomainRef(domain_code=domain_code, level=level, purpose=purpose)
    return report


def build_report(reports: list[DocumentReport]) -> str:
    today = dt.date.today().isoformat()
    lines: list[str] = []
    lines.append("# OTA to KG Migration Report")
    lines.append("")
    lines.append(f"Generated: {today}")
    lines.append("")
    lines.append("This report is OTA-only. It reports canonical KD IDs and keeps KNOW IDs only as legacy aliases.")
    lines.append("")
    lines.append("## Documents")
    lines.append("")

    for report in sorted(reports, key=lambda r: str(r.path)):
        title = report.document_id or report.path.name
        lines.append(f"### {title}")
        lines.append("")
        lines.append(f"Source: `{report.path}`")
        lines.append("")
        if not report.document_id:
            lines.append("Warning: no OTA document ID found.")
            lines.append("")
        if report.domains:
            lines.append("| Canonical KD | Legacy alias | Purpose |")
            lines.append("|---|---|---|")
            for domain in sorted(report.domains.values(), key=lambda d: (d.kd_id, d.purpose)):
                lines.append(f"| `{domain.kd_id}` | `{domain.legacy_id}` | {domain.purpose} |")
        else:
            lines.append("No knowledge-domain references found.")
        lines.append("")

    all_domains = sorted({d.kd_id for r in reports for d in r.domains.values()})
    lines.append("## Canonical KD Inventory")
    lines.append("")
    for domain in all_domains:
        lines.append(f"- `{domain}`")
    lines.append("")
    lines.append("## Next Curator Checks")
    lines.append("")
    lines.append("- Verify every detected `KD:*:*` ID against the Knowledge Graph export.")
    lines.append("- Keep `KNOW:*` only as legacy aliases during migration.")
    lines.append("- Create an External Task for each missing KG record.")
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate an OTA to KG migration report from Markdown files.")
    parser.add_argument("paths", nargs="+", help="Markdown files or directories to scan")
    parser.add_argument("--output", "-o", default="reports/ota-kg-migration-report.md", help="Output report path")
    args = parser.parse_args()

    files: list[pathlib.Path] = []
    for item in args.paths:
        path = pathlib.Path(item)
        if path.is_dir():
            files.extend(sorted(path.rglob("*.md")))
        elif path.suffix.lower() == ".md":
            files.append(path)

    reports = [extract_document(path) for path in files]
    output = pathlib.Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(build_report(reports), encoding="utf-8")
    print(f"Wrote {output} for {len(reports)} Markdown file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
