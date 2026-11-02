# Cross-series quality pass 4

Review date: 2026-09-21

## Scope

Five documents are curated from explicit body titles and explicit related-document sections. No scientific, historical or narrative body claims are rewritten, and no epistemic status is changed.

| Signature | Source-backed title | Explicit relations |
|---|---|---:|
| `OTA-TEC-0030-2091-DE` | `Molekulare Spektroskopie für Mars-Exploration` | 4 |
| `OTA-BIO-0007-2025-DE` | `Marek Kowalski — Der Mann, der den Stein hörte` | 4 |
| `OTA-BIO-0008-2025-DE` | `Rashid Al-Mansouri — Der Junge, der Muster sah` | 4 |
| `OTA-HIS-0004-2085-DE` | `Sol University Initiative — Eine Universität für die Menschheit` | 4 |
| `OTA-LSC-0002-2026-DE` | `Schwefel im Bewusstsein — Von kosmischen Molekülwolken zu neuronaler Signalübertragung` | 4 |

Total: **5 titles and 20 explicit relations**.

## Historical-profile guardrail

`OTA-BIO-0008-2025-DE` is intentionally archived and already contains a canonical successor relation to `OTA-BIO-0035-2092-DE`. The curation runner is append-only for existing relation blocks: this successor relationship must remain untouched while the four explicit historical cross-references are added.

## Guardrails

- only targets classified by the archive analyzer as `explicit-related-section` are promoted;
- every promoted target must exist as a canonical OTA file;
- existing relation objects are retained and only missing reviewed targets are appended;
- no `epistemicStatus`, body claim, historical archive date, KG edge or graph identifier is invented or changed;
- PR mode validates the deterministic plan only; `master` applies it after normal validation/site build and then revalidates before the bot commit and Drive refresh.
