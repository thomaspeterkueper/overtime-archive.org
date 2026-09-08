# OTA archive quality — review round 1

Date: 2026-09-08

This round is the first editorial pass after the archive-governance baseline landed on `master`.

## Rules used

- Do not invent lifecycle dates for legacy ingestion.
- A current `updatedAt` / `provenance.reviewedAt` is allowed only when this round actually reviews and changes the document.
- Replace signature-only titles only when the document body supplies an unambiguous canonical title.
- Do not convert inline signature mentions into relations unless the document explicitly describes the relation or the semantic relation can be classified without inference.
- Preserve historical theory content. Metadata review may describe its epistemic framing; it must not silently rewrite the historical argument.
- KUEPER Knowledge Graph remains the ecosystem SSOT. This round does not invent graph IDs or KG mappings.

## Baseline

The quality artifact produced by `Validate OTA` for the governance PR contained 273 canonical documents:

- 155 substantial
- 86 short
- 32 fragments
- 149 generic titles
- 46 generic summaries
- 239 relation gaps
- 1,188 automatically discovered relation candidates
- 0 relation candidates safe enough for blind automatic application

The high-impact series are currently TEC, SCI, BIO and FND. SCI/FND receive an additional epistemic consistency review because incorrect status metadata would distort the archive more severely than a missing presentation title.

## Curated changes in this round

### OTA-KARTE-0002-Epochen-g-Profile-DE

- Replaced the signature-only title with the document's explicit title: `Gehirn-Epochen × g-Profile — Referenzmatrix`.
- Added `OTA-SCI-0021-2025-DE` as `basis`; the document explicitly labels it as source and complete documentation.
- Recorded a real metadata review timestamp and `metadata-reviewed` lifecycle state.

### OTA-SCI-0021-2025-DE

- Replaced the signature-only title with the explicit body title: `Mikrogravitation und Gehirnarchitektur`.
- Added `I` to `epistemicStatus`, because the document's own epistemological legend defines `[I]` and the curator section is explicitly marked `[I]`.
- Added `OTA-SCI-0019-2025-DE` as an explicit `references` relation; the curator note names the Mousley document as the starting reference.
- Recorded a real metadata review timestamp and `metadata-reviewed` lifecycle state.

### OTA-TEC-0018-2091-DE

- Replaced the signature-only title with the explicit body title: `Rashids Crawler-Programm`.
- Canonicalized the three documents that the document itself lists under `Verwandte Dokumente` as explicit `related` relations:
  - `OTA-BIO-0008-2025-DE`
  - `OTA-RED-0019-2091-DE`
  - `OTA-SCI-0014-2025-DE`
- Recorded a real metadata review timestamp and `metadata-reviewed` lifecycle state.

## SCI/FND epistemic review queue

The following documents are high-priority but should not be mass-edited from heuristics:

- `OTA-FND-0005-2025-DE`: body supplies the clear title `AVI-Modell — Axiomatisches Vakuum-Integral`, but the document is also a historical AVI snapshot. Title cleanup is safe; theory content and historical status language must remain intact unless explicitly revised.
- `OTA-FND-0006-2025-DE`: body supplies `Das noχ¹ᐃ-Universum — Serienarchitektur & kanonische Struktur`. Its mixed fiction/meta framing needs a deliberate mapping before changing epistemic markers.
- `OTA-SCI-0013-2025-DE`: body mixes real audiology, speculative extrapolation and fictional Mars data. Its current frontmatter does not fully mirror the source-marker vocabulary and requires document-level review.
- `OTA-SCI-0014-2025-DE`: body explicitly marks key Baumeister-frequency claims as fictional while frontmatter mixes R/T/S/W. Review must distinguish real resonance background from fictional measurements.
- `OTA-SCI-0015-2025-DE`: title is explicit and safe to curate; epistemic status is already broadly aligned with the document's R/T/S framing.
- `OTA-SCI-0024-2026-DE`: highest epistemic attention. Frontmatter currently contains H/T/S/W, while the document header presents R/T/H and explicitly says speculative extensions are excluded from the core model. This needs a full source-marker pass before changing status metadata.

## Next batch order

1. Curate the remaining unambiguous signature-only titles in SCI/FND.
2. Review SCI/FND source markers against frontmatter epistemic status, one document at a time.
3. Canonicalize only relations explicitly declared in document sections such as `Verwandte Dokumente`, `Quelle`, `Basis`, `ersetzt durch`, or equivalent language.
4. Re-run the quality artifact and measure the delta against this baseline.
5. Only after semantic relations are stable, project reviewed mappings into the KUEPER Knowledge Graph.