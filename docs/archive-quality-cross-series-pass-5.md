# Archive quality — Cross-series pass 5

Review timestamp: 2026-09-25T09:11:03+02:00

This pass curates four non-encoding-warning documents with source-backed body titles and only relations already detected as `explicit-related-section` by the archive-quality analyzer.

## Reviewed documents

- `OTA-OBS-0002-2026-DE` — `60.000 Jahre alte Giftpfeile — Die Umhlatuzana-Entdeckung und ihre Implikationen`; 4 explicit relations.
- `OTA-SCI-0018-60000BCE-DE` — `Biotechnologische Grundlagen der Altsteinzeit — Eine wissenschaftliche Bewertung realer biologischer Phänomene`; 4 explicit relations.
- `OTA-TEC-0022-2025-DE` — `Solare Antriebssysteme — Ein technologischer Atlas der interplanetaren Ära`; 4 explicit relations. Two additional inline references remain intentionally unpromoted because the analyzer does not classify them as safe explicit relations.
- `OTA-LSC-0004-2026-DE` — `Mitochondriale Basistherapie bei Λ-FSS — Lebensstil · Ernährung · Supplementierung`; 4 explicit relations. Short-form/incomplete inline references remain unpromoted.

Total: 4 titles and 16 explicit canonical relations.

## Guardrails

- No `epistemicStatus` changes.
- No body-claim or historical archive-date changes.
- No KG IDs are invented or rewritten.
- Every promoted target must exist as a canonical OTA document.
- Existing reviewed metadata remains idempotent.

## Deferred legacy case

`OTA-SCI-0048-NACHTRAG-2026-DE` also has four safe explicit relation candidates, but its current `relatedDocuments` value is still a legacy inline YAML list. It is deliberately excluded from this routine pass and should be normalized in a separate legacy-metadata pass so list migration and ordinary curation remain independently auditable.
