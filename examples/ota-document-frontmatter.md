# OTA Frontmatter Example

Use this as a copy template for new OTA documents.

```yaml
id: OTA-SCI-0000-2026-DE
title: Example OTA document
language: de
status: draft

kg:
  schema: KXF-0.1
  master: kueper-knowledge-graph
  documentId: OTA-SCI-0000-2026-DE
  graphId: DOC:OTA:OTA-SCI-0000-2026-DE
  system: SYS:OTA:overtimearchive
  sourceOfTruth: false

knowledge:
  domains:
    - id: KNOW:GEO-SEISM
      level: N2
      purpose: read

entities:
  mentions:
    - PLC:AST:mars

relations:
  requires:
    - KNOW:GEO-SEISM
  teaches: []
  expands: []
  cites: []

sync:
  graphVersion: "0.2"
  graphUpdated: "2026-07-01"
  exportedFrom: kueper-knowledge-graph
```
