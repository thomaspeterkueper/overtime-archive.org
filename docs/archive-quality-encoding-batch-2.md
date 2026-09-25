# Archive quality — Encoding repair batch 2

Review timestamp: 2026-09-25T09:31:12+02:00

This pass handles the next five prioritized archive documents whose raw text shows the same reversible UTF-8-through-Windows-1252/Latin-1 mojibake mechanism as RED-0022 and Encoding Batch 1.

## Reviewed documents

- `OTA-SCI-0030-2090-DE`
  - title: `Λ_Struktur und Gold-Geometrie: Korngrenzenkontrollierte χ-Feld-Kopplung`
  - preserve 1 existing legacy relation; no new relation is promoted because the current analyzer exposes no safe explicit candidate.
- `OTA-CUL-0013-MULTI-DE`
  - title: `Emotionale Lexika — Mars vs. Erde — Unbeschreibliche Sehnsucht über planetare Grenzen hinweg`
  - no existing or newly safe relations; `relatedDocuments: []` remains empty.
- `OTA-INDEX-RKF-2026-DE`
  - title: `Resonanzklassifikations-Formalismus (RKF) — Vollständiger Dokumentationsindex`
  - preserve and structurally normalize 4 existing legacy relations; no new relation is inferred from the index body.
- `OTA-SCI-0032-2024-DE`
  - title: `GJ 251 c — Die kosmische Nachbarin in der habitablen Zone`
  - preserve 2 existing legacy relations; promote 2 analyzer candidates with evidence `explicit-related-section`.
- `OTA-FND-0013B-2026-DE`
  - title: `Π-BIO-Addendum: Bioenergetische Fenster — SOL-HELIO-01 Kampagne: Europa, Enceladus, Titan`
  - preserve and structurally normalize 3 existing legacy relations; no unsafe shorthand/reference is promoted.

## Repair mechanism

The runner reverses only character sequences that map back to bytes and decode as valid UTF-8. It covers the observed corruption families in text, Greek variables, mathematical symbols, superscripts/subscripts, arrows, box-drawing characters and the `noχ¹ᐃ` marker. It runs to convergence and rejects any remaining recoverable sequence or Unicode replacement character.

Representative post-repair sentinels include `Λ_Struktur`, `χ-Feld-Kopplung`, `γ_eff`, `noχ¹ᐃ`, `└──`, `CH₃`, `ζ_H₂`, `M☉`, `M⊕`, `Π-BIO`, `Φ`, `Ψ_growth` and `D→E`.

## Editorial boundaries

- No scientific, theoretical or fictional claim is rewritten.
- `epistemicStatus` is checked and kept unchanged for every document.
- Existing relation targets must remain canonical and are not semantically reinterpreted.
- Only the two safe explicit relation candidates from `OTA-SCI-0032-2024-DE` are newly promoted.
- Historical archive dates and KG identifiers remain unchanged.

This is an encoding and metadata-normalization pass, not a scientific fact review.
