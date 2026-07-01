# OTA Document Frontmatter

Updated: 2026-07-01

This document defines the minimum metadata model for OTA documents that reference the Kueper Knowledge Graph.

## Principle

OTA is not the source of truth for shared knowledge records.

OTA documents may reference Knowledge Graph IDs, but they must not redefine graph-owned records such as entities, knowledge domains, learning modules, or global relations.

## Required sections

Every OTA document should include these metadata sections:

- document identity
- KG reference block
- knowledge prerequisites
- mentioned entities
- document relations
- sync information

## Minimal structure

```yaml
id: OTA-SCI-0083-2026-DE
title: Example OTA document
language: de
status: draft

kg:
  schema: KXF-0.1
  master: kueper-knowledge-graph
  documentId: OTA-SCI-0083-2026-DE
  graphId: DOC:OTA:OTA-SCI-0083-2026-DE
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

## Field notes

### kg

The `kg` block connects the OTA document to the Kueper Knowledge Graph.

`sourceOfTruth` must be `false`, because OTA consumes shared knowledge records instead of owning them.

### knowledge.domains

Use this section for required knowledge domains.

Allowed levels:

- `N1` basic orientation
- `N2` competent reading
- `N3` advanced creation or review
- `N4` expert-level work

Allowed purposes:

- `read`
- `create`
- `review`

### entities.mentions

Use Knowledge Graph IDs only.

Examples:

- `PLC:AST:mars`
- `CON:L1:gravitation`
- `ORG:SSF`

If an entity is missing, do not create it locally. Create an External Task for `kueper-knowledge-graph`.

### relations

Relations should reference existing IDs.

If the needed relation is not yet available in the Knowledge Graph, create an External Task.

### sync

The sync block records which Knowledge Graph export/version the OTA document metadata was aligned with.

## External task trigger

Create an External Task when:

- a required entity does not exist
- a required knowledge domain does not exist
- a relation belongs in the Knowledge Graph
- a learning module belongs in SSF
- an unlock belongs in NOXIA
- publication behavior belongs in kueper.com
