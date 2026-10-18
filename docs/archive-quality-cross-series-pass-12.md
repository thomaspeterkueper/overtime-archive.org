# Archive quality — cross-series pass 12

Reviewed on 2026-10-18 against canonical OTA document content.

This pass curates only source-backed frontmatter metadata. It does not rewrite document bodies or change epistemic status.

## Curated documents

- `OTA-FND-0007-2025-DE`
  - canonical title: **noχ¹ᐃ: GENERATION MARS — Serienkonzept der Junior-Saga**
  - explicit canonical relations: `OTA-FND-0006-2025-DE`, `OTA-BIO-0006-2025-DE`, `OTA-BIO-0010-2025-DE`, `OTA-RED-0016-2091-DE`
  - `OTA-BIO-0008` is explicitly marked **[AUSSTEHEND]** in this archived document state and is intentionally not promoted, even though a canonical document exists today.

- `OTA-BIO-0009-2025-DE`
  - canonical title: **Dr. Tayo Dela Cruz — Der Beobachter in der Tiefe**
  - explicit canonical relations: `OTA-BIO-0008-2025-DE`, `OTA-BIO-0007-2025-DE`

- `OTA-BIO-0006-2025-DE`
  - canonical title: **Lena Kowalski — Frequenz-Sensitive der Zweiten Generation**
  - existing canonical successor relation to `OTA-BIO-0036-2092-DE` is preserved
  - explicit historical relations: `OTA-NAR-0001-2087-DE`, `OTA-RED-0016-2091-DE`, `OTA-SCI-0013-2025-DE`, `OTA-BIO-0007-2025-DE`
  - `OTA-LOC-0001-2091-DE` is present in the archived source but has no canonical OTA document today and is not promoted.

- `OTA-RED-0020-2091-DE`
  - canonical title: **Solar Student Exchange 2091 — Medizinische Disqualifikationen & Anomalie-Bericht**
  - no relations are added because the document has no explicit related-document section; inline references remain non-canonical metadata candidates only.

## Scope guardrails

- No relations inferred from incidental inline mentions.
- No unresolved placeholders or noncanonical IDs promoted.
- Archived historical/fictive body content remains unchanged.
- No epistemic markers changed.
- Existing successor metadata is preserved.
- The deterministic runner validates relation targets and refuses to overwrite unexpected metadata states.
