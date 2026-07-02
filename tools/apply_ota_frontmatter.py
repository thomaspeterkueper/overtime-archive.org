#!/usr/bin/env python3
"""Generate OTA frontmatter templates from migration reports.

This tool does not modify documents. It creates suggested frontmatter blocks
that curators can review before applying them.
"""

from __future__ import annotations

import argparse
import pathlib
import re

OTA_ID_RE = re.compile(r"OTA-[A-Z]+-[0-9]{4}-[0-9]{4}-[A-Z]{2}")
KNOW_RE = re.compile(r"KNOW:[A-Z]+-[A-Z0-9-]+")


def build_template(doc_id: str, domains: list[str]) -> str:
    domain_lines = []
    for domain in sorted(set(domains)):
        domain_lines.append(f"    - id: {domain}")
        domain_lines.append("      level: N1")
        domain_lines.append("      purpose: read")

    return f"""---
id: {doc_id}
title: TODO
language: de
status: draft

kg:
  schema: KXF-0.1
  master: kueper-knowledge-graph
  documentId: {doc_id}
  graphId: DOC:OTA:{doc_id}
  system: SYS:OTA:overtimearchive
  sourceOfTruth: false

knowledge:
  domains:
{chr(10).join(domain_lines) if domain_lines else '    []'}

entities:
  mentions: []

relations:
  requires: []
  teaches: []
  expands: []
  cites: []

sync:
  graphVersion: \"0.2\"
  graphUpdated: \"2026-07-01\"
  exportedFrom: kueper-knowledge-graph
---
"""


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument('files', nargs='+')
    args = parser.parse_args()

    for item in args.files:
        path = pathlib.Path(item)
        text = path.read_text(encoding='utf-8', errors='replace')
        match = OTA_ID_RE.search(text)
        if not match:
            continue
        doc_id = match.group(0)
        domains = sorted(set(KNOW_RE.findall(text)))
        output = path.with_suffix('.frontmatter.yml')
        output.write_text(build_template(doc_id, domains), encoding='utf-8')
        print(f'Created {output}')

    return 0


if __name__ == '__main__':
    raise SystemExit(main())
