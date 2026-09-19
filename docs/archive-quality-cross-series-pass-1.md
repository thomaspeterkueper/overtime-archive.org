# OTA archive quality — cross-series pass 1

Reviewed on 2026-09-19 against canonical master commit `f0f919708f7fd03ec588c8f45bdc6e9e06361ea9`.

This pass extends the curated archive-quality process beyond SCI/FND while preserving the same evidence standard: explicit document titles and explicitly labelled related/cross-reference sections only.

## Curated documents

| Signature | Canonical title | Explicit relations |
| --- | --- | ---: |
| OTA-NAR-0002-2025-DE | Saga-Integrationsnotizen — Au₂Hₓ / Gold-AVI in der NOXIA-Saga | 5 |
| OTA-BIO-0010-2025-DE | Keiko Nakamura — Die Navigatorin zwischen den Welten | 4 |
| OTA-RED-0016-2091-DE | Das 432-FREQ-ECHO-Signal — Unidentifizierte Transmission an Lena Kowalski | 4 |
| OTA-RED-0017-2091-DE | Die vier Ausfälle — Untersuchungsbericht zum Solar Student Exchange Program 2091 | 4 |
| OTA-RED-0018-2091-DE | STUFE-OMEGA — Auditive Kontamination & Frequenz-Exposition | 4 |
| OTA-TEC-0019-2095-DE | Künstliche Schumann-Generatoren — Technische Spezifikation | 3 |

Total: **6 titles and 24 explicit relations**.

## Preservation rules

- Existing canonical relations are preserved and new reviewed relations are appended. This matters particularly for `OTA-BIO-0010-2025-DE`, whose successor relation to `OTA-BIO-0037-2092-DE` must remain intact.
- `OTA-BIO-0010-2025-DE` remains an archived historical character state. This pass does not modernize or reconcile its intentionally preserved historical content.
- No epistemic frontmatter is changed. The documents mix fiction/work-setting/theoretical layers intentionally, and none provides a document-wide self-classification strong enough to justify changing the current metadata in this pass.
- No historical `archivedAt` value is inferred.
- No relation is created from a free inline mention alone.
- No KG edge or graph identifier is invented.

## Automation

`scripts/apply-reviewed-cross-series-metadata.mjs` is deterministic and supports `--check` mode. Pull requests only validate the expected source state. Canonical files are changed only on `master` after the normal validator and full site/link build have passed; changes are then revalidated before the bot commit and Google Drive refresh.

The KUEPER Knowledge Graph remains the ecosystem source of truth; these OTA relations are archive-level projections backed by explicit documentary evidence.
