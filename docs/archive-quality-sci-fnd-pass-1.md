# OTA archive quality — SCI/FND curation pass 1

Date: 2026-09-08

This pass applies only metadata decisions that were reviewed against the document body and the explicit-relation evidence generated after PR #55.

## Curated documents

### OTA-FND-0005-2025-DE

Canonical title: `AVI-Modell — Axiomatisches Vakuum-Integral`

Explicit relations to canonicalize:

- `OTA-FND-0002-2025-DE`
- `OTA-SCI-0012-2188-DE`

The historical AVI argument and revision history remain unchanged. The 2026 canonical AVI correction already present in the document is preserved as history rather than used to rewrite older passages.

### OTA-FND-0006-2025-DE

Canonical title: `Das noχ¹ᐃ-Universum — Serienarchitektur & kanonische Struktur`

No explicit-relation candidate from the conservative detector is applied in this pass.

### OTA-SCI-0013-2025-DE

Canonical title: `Frequenz-Sensitivität bei Mars-Kindern der zweiten Generation`

Explicit relations to canonicalize:

- `OTA-RED-0017-2091-DE`
- `OTA-SCI-0009-2025-DE`
- `OTA-BIO-0006-2025-DE`
- `OTA-SCI-0008-2096-DE`

Epistemic metadata is deliberately not changed here. The document combines real audiology, speculative extrapolation, fictional Mars observations and older archive/framework markers. That mixture requires a taxonomy-level review rather than a local guess.

### OTA-SCI-0014-2025-DE

Canonical title: `Harmonische Frequenzsysteme in Baumeister-Strukturen`

Explicit relations to canonicalize:

- `OTA-SCI-0008-2096-DE`
- `OTA-SCI-0009-2025-DE`
- `OTA-RED-0016-2091-DE`
- `OTA-BIO-0012-2087-DE`

Epistemic metadata remains untouched. The body explicitly marks central Baumeister-frequency measurements as fictional while also containing real/theoretical resonance context; the legacy frontmatter uses a broader marker mixture.

### OTA-SCI-0015-2025-DE

Canonical title: `Schumann-Resonanz: Biologische Relevanz und ISS-Referenzdaten`

Explicit relations to canonicalize:

- `OTA-SCI-0009-2025-DE`
- `OTA-SCI-0014-2025-DE`
- `OTA-TEC-0019-2095-DE`
- `OTA-SCI-0016-2150-DE`

The current R/T/S framing is not changed in this metadata pass.

### OTA-SCI-0024-2026-DE

Canonical title: `Ein skalares Feldmediator-Modell für Neutrino-Dunkle-Materie-Wechselwirkungen`

Explicit relations to canonicalize:

- `OTA-SCI-0024-2026-EN`
- `OTA-FND-0010-2026-DE`
- `OTA-SCI-0009-2025-DE`

This document remains the highest-priority epistemic review candidate. Its frontmatter and internal status legend currently use different marker sets, and the document explicitly separates the core model from excluded speculative extensions. No epistemic marker is added or removed until that distinction is reviewed end-to-end.

## Lifecycle treatment

All six documents receive a real metadata-review timestamp for this pass and `provenance.reviewStatus: metadata-reviewed`. No `archivedAt` value is reconstructed.

## Scope

This pass therefore contains:

- 6 source-backed canonical titles
- 17 explicit relations
- 6 real metadata-review lifecycle records
- 0 invented KG mappings
- 0 inferred historical archive dates
- 0 automatic epistemic reclassification

The next SCI/FND pass should define the current OTA epistemic taxonomy and a migration rule for legacy markers before changing mixed-status documents.