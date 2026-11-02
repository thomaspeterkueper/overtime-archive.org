# OTA archive quality — cross-series pass 3

Reviewed on 2026-09-19 against canonical master commit `00ea9bffaa1baea1f5ab99547b29adced3cfe6ff`.

## Curated documents

| Signature | Canonical title | Explicit relations |
| --- | --- | ---: |
| OTA-TEC-0004-2087-DE | GD-9 Seeker — Gravimetrie-Drohne mit AVI-Gegenmaßnahmen | 5 |
| OTA-RED-0003-2091-DE | Monolith-Aktivierungssequenz V41 — Signalanalyse und Musterextraktion | 5 |
| OTA-TEC-0025-2091-DE | Solar Student Exchange Program — Interplanetare Transferlogistik 2091 | 5 |
| OTA-ORG-0004-2075-DE | New Horizons Cluster — Der heliozentrische Freihafen | 4 |
| OTA-RED-0019-2091-DE | Das 03:14-Ereignis — Forensische Rekonstruktion | 4 |

Total: **5 titles and 23 explicit relations**.

## Deliberately deferred: OTA-RED-0022-MULTI-DE

`OTA-RED-0022-MULTI-DE` was a high-ranking relation candidate, but inspection exposed two separate issues that should not be hidden inside a routine metadata pass:

1. The document body contains systematic mojibake/encoding damage such as `â€“`, `Î¨` and `Ã…` sequences.
2. `relatedDocuments` still uses the legacy inline-string list representation rather than the current structured relation objects.

It is therefore deferred to a dedicated encoding + legacy-metadata normalization pass. The present pass does not partially normalize it.

## Preservation rules

- Only relations explicitly listed in related/cross-reference sections are canonicalized.
- Existing relations are preserved; reviewed relations are appended.
- No epistemic frontmatter is changed.
- No historical `archivedAt` value is inferred.
- No KG edge or graph identifier is invented.
- Free inline mentions and shortened signatures remain review-only.

The KUEPER Knowledge Graph remains the ecosystem source of truth; these OTA relations are documentary projections backed by explicit evidence.
