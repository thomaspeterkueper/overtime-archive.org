# Archive quality — cross-series pass 9

Reviewed on 2026-10-18 against the canonical OTA document tree on `master`.

This pass curates only source-backed frontmatter metadata. Document bodies and epistemic status remain unchanged.

## Curated documents

- `OTA-BIO-0016-2123-DE`
  - canonical title: **Dr. Ayia Al Suri — Linguistin · SCSA Abteilung Lexikographie**
  - explicit canonical relation: `OTA-CUL-0014-2152-DE`
  - the archived `OTA-ORG-0001-2079-DE` row describes an SCSA founding document, while today's canonical ID represents Unit-7; it is therefore deliberately excluded.
  - unresolved `OTA-TEC-[AUSSTEHEND]` remains untouched.

- `OTA-TEC-0001-2196-DE`
  - canonical title: **VEX — Volatile Environment eXplorer: VEX-47 Explorationsdrohne — Technische Spezifikation**
  - explicit canonical relation: `OTA-SCI-0012-2188-DE`
  - `OTA-BIO-HALBWACH-0001` remains unresolved.
  - the archived `OTA-BIO-0010` / `OTA-BIO-0011` rows are marked *Ausstehend* and describe Lain / Elara; today's canonical BIO-0010 / BIO-0011 identify different people, so no relation is created.

- `OTA-SCI-0012-2188-DE`
  - canonical title: **Polare Kohärenz im χ-Feld — Bewusstseinskristalle und Blackpearls als komplementäre Manifestationen der Resonanz-Energie**
  - explicit historical short reference `OTA-BIO-0003-2195` resolves uniquely to canonical `OTA-BIO-0003-2195-EN`
  - `OTA-MON-0001` has no canonical document today and is excluded.
  - `OTA-FND-0001` is not uniquely resolvable because the current tree contains both `OTA-FND-0001-2025-DE` and `OTA-FND-0001-NACHTRAG-2026-DE`; no relation is inferred.

- `OTA-BIO-0003-2195-EN`
  - canonical title: **The Resonance Marriage — A Biographical Note on Dr. Yuki Hayashi-Okonkwo**
  - explicit historical short reference `OTA-SCI-0012-2188` resolves uniquely to canonical `OTA-SCI-0012-2188-DE`
  - `OTA-BIO-0001` and `OTA-BIO-0002` are marked *Pending* in the archived source and are not promoted.

## Scope guardrails

- No incidental inline mentions are promoted.
- Historical short signatures are normalized only when the repository tree yields exactly one canonical match.
- Pending, unresolved, ambiguous, or semantically mismatched references remain excluded.
- No epistemic markers are changed.
- The deterministic runner still validates target existence and aborts on unexpected metadata states.
