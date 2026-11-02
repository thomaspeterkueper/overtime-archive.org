# Archive quality — cross-series pass 7

Reviewed on 2026-10-18 against canonical OTA document content.

This pass curates only source-backed frontmatter metadata. It does not rewrite document bodies or change epistemic status.

## Curated documents

- `OTA-FND-0008-2025-DE`
  - canonical title: **Solares Finanzsystem: Grundlagen — Die Evolution interplanetarer Ökonomie (2025–2200+)**
  - explicit canonical relations: `OTA-TEC-0023-2091-DE`, `OTA-ORG-0002-2091-DE`, `OTA-SCI-0016-2150-DE`
  - `OTA-HIS-0007-2142-DE` is listed in the body as **[AUSSTEHEND]** and is intentionally not promoted into canonical relation metadata.

- `OTA-BIO-0011-2091-DE`
  - canonical title: **Haruka Nakamura — Die Hüterin der Stille**
  - explicit canonical relations: `OTA-BIO-0010-2025-DE`, `OTA-BIO-0012-2087-DE`, `OTA-HIS-0003-2087-DE`

- `OTA-BIO-0012-2087-DE`
  - canonical title: **James Nakamura — Der Mann, der das Muster verstand**
  - explicit canonical relations: `OTA-BIO-0010-2025-DE`, `OTA-BIO-0011-2091-DE`, `OTA-HIS-0003-2087-DE`

- `OTA-CUL-0002-60000BCE-DE`
  - canonical title: **Die Ära des Lebendigen — Kulturelle Rekonstruktion der Uralten**
  - explicit canonical relations: `OTA-SCI-0018-60000BCE-DE`, `OTA-OBS-0002-2026-DE`, `OTA-TEC-0023-2089-DE`
  - the unresolved `OTA-BIO-[AUSSTEHEND]` placeholder remains untouched.

## Scope guardrails

- No relations inferred from incidental inline mentions.
- No unresolved placeholders promoted to canonical metadata.
- No epistemic markers changed.
- Existing historical/fictive body content remains unchanged.
- The deterministic runner validates relation targets and refuses to overwrite unexpected metadata states.
