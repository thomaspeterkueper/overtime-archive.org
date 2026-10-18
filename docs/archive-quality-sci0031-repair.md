# Archive quality — SCI-0031 encoding and metadata repair

Reviewed on 2026-10-18 against `OTA-SCI-0031-2024-DE` on canonical `master`.

## Problem

The document combines three independent archive-quality issues:

1. systematic mojibake/encoding corruption throughout the body,
2. a legacy inline `relatedDocuments` list in frontmatter,
3. generic title and stale frontmatter version metadata.

These are repaired together in a dedicated deterministic pass rather than mixed into routine title/relation curation.

## Deterministic encoding repair

Review of the source file found:

- 70 reversible UTF-8 sequences recoverable through the existing Windows-1252/Latin-1 reverse-byte method,
- 15 reviewed orphan `Ÿ → ß` repairs,
- 38 reviewed orphan `—“ → –` repairs,
- 10 reviewed orphan `—” → —` repairs.

After those transformations the candidate has no remaining recoverable mojibake sequence, no Unicode replacement character, and no reviewed orphan marker.

Sentinel checks include:

- `Größe vergleichbar mit der Venus`
- `außergewöhnlich`
- `R☉`
- `M⊕`
- `O₂`
- `χ-Feld-Theorie`
- `0,71–0,95 M⊕`
- `— ENDE DOKUMENT —`
- `ᐃ`

## Metadata normalization

- canonical title:
  **Gliese-12b — Die stille Exo-Venus**
- frontmatter version:
  - reviewed source: `v1.0`
  - body revision history explicitly records **Version 1.1**
  - canonical result: `v1.1`
- epistemic status remains exactly `["R","T","S"]`

### Preserved legacy frontmatter relation

- `OTA-SCI-0044-2026-DE`

### Promoted explicit related-document relations

- `OTA-SCI-0030-2025-DE`
- `OTA-SCI-0007-2026-Cuancoa`
- `OTA-SCI-0019-2025-DE`
- `OTA-RED-0012-2171-DE`

All five targets exist canonically.

## Deliberately unresolved historical mismatch

The body lists `OTA-SCI-0032-2025-DE`, but no canonical document with that signature exists. The repository contains `OTA-SCI-0032-2024-DE`.

The repair **does not infer that these are the same target** and does not create a relation to the 2024 document. The historical body reference remains preserved for later source-level review.

## Guardrails

- No scientific claims, numerical values, citations, or narrative content are editorially rewritten.
- Encoding repair must converge deterministically.
- Expected title/version/epistemic/legacy-relation states are checked before mutation.
- All promoted relation targets must already exist canonically.
- A generated relation to `OTA-SCI-0032-2024-DE` is explicitly rejected.
