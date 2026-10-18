# Archive quality — cross-series pass 8

Reviewed on 2026-10-18 against canonical OTA document content.

This pass curates only source-backed frontmatter metadata. It does not rewrite document bodies or change epistemic status.

## Curated documents

- `OTA-CUL-0014-2152-DE`
  - canonical title: **Sprache im Sonnensystem — Solar Standard, SolLex und die Evolution interplanetarer Kommunikation**
  - explicit canonical relations: `OTA-BIO-0016-2123-DE`, `OTA-TEC-0002-2095-DE`, `OTA-CUL-0013-MULTI-DE`
  - `OTA-ORG-0001-2079-DE` is marked **[AUSSTEHEND]** in the archived source and is intentionally not promoted. The current canonical `OTA-ORG-0001-2079-DE` represents Unit-7 rather than the source row's described SCSA founding document, so linking it would create a false historical relation.
  - unresolved `OTA-HIS-[AUSSTEHEND]` and `OTA-TEC-[AUSSTEHEND]` placeholders remain untouched.

- `OTA-LIM-0001-2196-DE`
  - canonical title: **VEX — Kuratorische Beobachtung einer Quasi-Persönlichkeit**
  - explicit canonical relations: `OTA-TEC-0001-2196-DE`, `OTA-SCI-0012-2188-DE`, `OTA-BIO-0003-2195-EN`

## Scope guardrails

- No relations inferred from incidental inline mentions.
- No unresolved or semantically mismatched legacy references promoted to canonical metadata.
- No epistemic markers changed.
- Existing historical/fictive body content remains unchanged.
- The deterministic runner validates relation targets and refuses to overwrite unexpected metadata states.
