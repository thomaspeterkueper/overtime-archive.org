# OTA archive quality — SCI/FND pass 2

Reviewed on 2026-09-19 against the canonical `master` state after PR #72.

This pass is deliberately narrow: only source-backed titles, relations that are explicitly listed in related/cross-reference sections, and one epistemic correction whose status is stated unambiguously by the document itself.

## Curated documents

| Signature | Canonical title | Explicit relations |
| --- | --- | ---: |
| OTA-SCI-0025-2091-DE | Solare Demographie 2091 — Kanonische Bevölkerungszahlen des Sonnensystems | 3 |
| OTA-SCI-0026-2026-DE | Interstellare Schwefelchemie — Die Entdeckung von 2,5-Cyclohexadien-1-thion | 3 |
| OTA-SCI-0009-2025-DE | Planetare Schumann-Resonanzen und AVI-Kopplung | 6 |
| OTA-FND-0009-2026-DE | Biotechnologie vs. Metallurgie — Zwei paradigmatische Pfade der Zivilisation | 4 |
| OTA-FND-0010-2026-DE | Das χ-Feld als Präkursor-Theorie | 4 |

Total: **5 titles and 20 explicit relations**.

## Epistemic correction: OTA-FND-0010-2026-DE

The frontmatter previously declared `T/H/S/W`, but the document itself explicitly says that its epistemic status is **throughout** `[I] Interpretation` and `[S] Spekulativ`, and that the parallels it draws are not scientific claims. The `R/T/H/F` markers appearing later describe source material or referenced model layers, not the epistemic status of this foundational document itself.

Therefore this pass changes only this document's frontmatter to `epistemicStatus: ["I", "S"]`.

## Exclusions

- Inline mentions are not canonicalized merely because they contain an OTA-like identifier.
- Placeholder references such as `OTA-BIO-XXXX`, `OTA-TEC-XXXX`, truncated signatures, and unlabelled mentions remain review-only.
- No historical `archivedAt` value is inferred.
- No KG relation or graph identifier is invented.
- No other epistemic frontmatter is changed in this pass.

The KUEPER Knowledge Graph remains the ecosystem source of truth; OTA relations are archival/document-level projections backed by explicit source evidence.
