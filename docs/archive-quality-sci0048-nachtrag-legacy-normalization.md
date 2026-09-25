# Archive quality — SCI-0048 Nachtrag legacy normalization

Review timestamp: 2026-09-25T09:16:33+02:00

`OTA-SCI-0048-NACHTRAG-2026-DE` is handled separately from the routine cross-series pass because its `relatedDocuments` field is still a legacy inline YAML list.

## Reviewed source state

- Generic frontmatter title: `OTA-SCI-0048-NACHTRAG-2026-DE`.
- Body-backed title: `Λ-HAPLOGRUPPE: DREI ERGÄNZUNGSMODULE` with the explicit subtitle `UPE-FSS-Detektionsprotokoll · LHON/FSS-Differentialdiagnose · Zweiter-Schlag-Pharmakologie`.
- Existing inline relations that must be preserved:
  - `OTA-SCI-0048-2031-DE`
  - `OTA-LSC-0004-2026-DE`
- Four additional safe candidates detected as `explicit-related-section`:
  - `OTA-LSC-0003-2026-DE`
  - `OTA-TEC-0032-2091-DE`
  - `OTA-SCI-0045-2026-DE`
  - `OTA-BIO-0020-2026-DE`

## Target state

- Source-backed canonical title: `Λ-Haplogruppe: Drei Ergänzungsmodule — UPE-FSS-Detektionsprotokoll · LHON/FSS-Differentialdiagnose · Zweiter-Schlag-Pharmakologie`.
- Legacy inline list normalized to six relation objects.
- The two existing relations are preserved as existing metadata; the four newly promoted relations receive `descriptionStatus: explicit`.
- `epistemicStatus`, summary, tags, body claims, historical dates and KG identifiers remain unchanged.

The deterministic normalizer refuses to run if the legacy relation list or title state has changed since review, and becomes idempotent after normalization.
