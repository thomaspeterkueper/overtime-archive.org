# Archive quality — cross-series pass 11

Reviewed on 2026-10-18 against canonical OTA document content on `master`.

This pass curates only source-backed frontmatter metadata. Document bodies and epistemic status remain unchanged.

## Curated documents

- `OTA-BIO-0013-2089-DE`
  - canonical title: **Die Karim-Zwillinge — Sol & Maya Karim — Exchange 2089**
  - explicit canonical relations: `OTA-RED-0020-2091-DE`, `OTA-ORG-0002-2091-DE`, `OTA-SCI-0016-2150-DE`

- `OTA-TEC-0020-2091-DE`
  - canonical title: **Tribologie & Staub-Ökonomie — Dichtungs-, Filter- und Lager-Verschleiß für KITE & Tugs**
  - explicit canonical relations: `OTA-TEC-0016-2063-DE`, `OTA-TEC-0019-2091-DE`

- `OTA-SCI-0017-2025-DE`
  - canonical title: **Superionisches Goldhydrid als Resonanzanker — Eine theoretische Erweiterung des AVI-Modells**
  - explicit canonical relations: `OTA-SCI-0008-2096-DE`, `OTA-TEC-0021-2025-DE`
  - archived short reference `OTA-FND-0001` is deliberately excluded because the current tree contains both the main document and a Nachtrag, so the short form is not uniquely resolvable.

- `OTA-OBS-0001-2025-DE`
  - canonical title: **Reale Grundlagen — Maya, Archäoakustik, Resonanzphänomene**
  - explicit canonical relations: `OTA-SCI-0012-2188-DE`, `OTA-SCI-0008-2096-DE`
  - archived short reference `OTA-FND-0001` is deliberately excluded for the same ambiguity.

## Scope guardrails

- No incidental inline mentions are promoted.
- Ambiguous historical short signatures are not resolved by guesswork.
- No epistemic markers are changed.
- Existing body content remains unchanged.
- Every promoted target was verified as a canonical OTA document on the reviewed master state.
- The deterministic runner still aborts on unexpected title, lifecycle, or relation states.

## Deferred

`OTA-SCI-0031-2024-DE` is not included in this routine pass. It combines a generic title with a legacy inline `relatedDocuments` list and systematic mojibake/encoding corruption, so it requires a dedicated deterministic repair pass.
