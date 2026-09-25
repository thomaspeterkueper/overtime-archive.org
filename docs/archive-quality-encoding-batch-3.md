# Archive quality — Encoding repair batch 3

Review timestamp: 2026-09-25T09:39:24+02:00

This pass handles five additional high-value documents with systematic encoding corruption and safe relation debt.

## Reviewed documents

- `OTA-SCI-0010-2025-DE`
  - title already canonical and preserved.
  - promote 3 relations from `explicit-related-section`.
- `OTA-SCI-0019-2025-DE`
  - title already canonical and preserved.
  - promote 3 relations from `explicit-related-section`.
  - contains a second corruption mode with orphaned continuation-byte glyphs (`œ`, `Ÿ`) and split dash/quote remnants; these are repaired only by document-local reviewed replacements after the normal reversible byte pass.
- `OTA-SCI-0023-2025-DE`
  - preserve/normalize 2 existing legacy relations.
  - promote 2 relations from `explicit-related-section`.
- `OTA-SCI-0044-2026-DE`
  - preserve/normalize 1 existing legacy relation.
  - promote 2 relations from `explicit-related-section`.
- `OTA-FND-0013-2026-DE`
  - preserve/normalize 1 existing legacy `related` relation.
  - promote 2 source relations detected by `explicit-basis-label` as relation type `basis`, not `related`.

Total: 12 promoted safe relations. The two RKF source edges retain the analyzer-supported `basis` semantics.

## Repair mechanism

The normal repair reverses only byte sequences that reconstruct valid UTF-8 and runs to convergence. `OTA-SCI-0019-2025-DE` additionally has a narrowly scoped orphan repair layer, because some original UTF-8 lead bytes are already absent. The local replacements are limited to the reviewed corruption glyphs and paired dash/quote remnants and are guarded by repaired-text sentinels and forbidden-residual checks.

Representative post-repair sentinels include:

- SCI-0010: `Übersicht`, `Gegenwärtig → Prospektiv`, `N₀`, `λ`, `⁴⁰K → ⁴⁰Ar`.
- SCI-0019: `FÜNF`, `noχ¹ᐃ`, `große`, `weißen`, `Überproduktion`, `größte`.
- SCI-0023: `Dämpfe`, `H₂S`, `SO₂`, `CO₂`, `Ca²⁺`, `noχ¹ᐃ`.
- SCI-0044: `CH₃`, `L☉`, `10⁶ cm⁻³`, `µm`, `✓`, `2–10×`.
- FND-0013: `×`, `Π`, `R₀`, `ε`, `ω`, `φ`, `χ`, `√`, `Ψ`, `m³`, `S0–S5`.

## Editorial boundaries

- Titles and `epistemicStatus` are checked and preserved.
- No scientific, theoretical or fictional claims are rewritten.
- Existing relation targets are preserved and structurally normalized.
- Only analyzer-supported safe relations are promoted.
- `explicit-basis-label` remains `basis`; it is not flattened to `related`.
- Historical archive dates and KG identifiers remain unchanged.

This is an encoding and metadata-normalization pass, not a scientific fact review.
