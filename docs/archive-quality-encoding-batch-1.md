# Archive quality — Encoding repair batch 1

Review timestamp: 2026-09-25T09:22:21+02:00

This pass handles five documents whose archive-quality flags and raw body text show the same systematic UTF-8-through-Windows-1252/Latin-1 mojibake mechanism previously repaired in `OTA-RED-0022-MULTI-DE`.

## Reviewed documents

- `OTA-TEC-0029-2026-DE`
  - title: `Thermische Dioden und nichtreziproke Wärmeströme — Gerichtete Energieflüsse durch gebrochene Lorentz-Reziprozität`
  - preserve 2 existing legacy relations; promote 4 explicit relations.
- `OTA-SCI-0035-2026-DE`
  - title: `Hybride Aggregatzustände in Metall-Nanopartikeln — Wenn fest und flüssig zur selben Zeit existieren: Die Entdeckung eingesperrter unterkühlter Flüssigkeiten`
  - preserve 1 existing legacy relation; promote 3 explicit relations.
- `OTA-SCI-0034-2026-DE`
  - title: `MoM-z14 — Die älteste Galaxie`
  - preserve 1 existing legacy relation; promote 3 explicit relations.
- `OTA-SCI-0030-2025-DE`
  - title: `HD 20794 d — Die episodische Supererde`
  - preserve 2 existing legacy relations; promote 3 explicit relations.
- `OTA-FND-0012-2026-DE`
  - title: `Resonanz-Level-Analyse extragalaktischer organischer Chemie — IRAS 07251-0248 als empirisches Modell für kosmische Informations-Modulierung`
  - preserve 2 existing legacy relations; promote 3 explicit relations.

Total: five source-backed titles, eight preserved legacy relations, sixteen promoted explicit relations, twenty-four canonical relation objects after normalization.

## Repair mechanism

The deterministic runner reverses only character sequences that can be mapped back to bytes and decoded as valid UTF-8. It covers the observed corruption families such as `â€“`, `â€”`, `â†’`, `ÃŸ`, `Îµ`, `Ï‡`, `Âµ` and the corrupted `noχ¹ᐃ` marker. It runs to convergence with a strict pass limit and then verifies that no further recoverable sequence remains.

Each document also has repaired-text sentinels for representative domain symbols/names. The runner refuses changed titles, epistemic status, relation source states or non-canonical relation targets.

## Editorial boundaries

- No scientific, theoretical or fictional claims are rewritten.
- `epistemicStatus` remains unchanged per document.
- Existing relations are preserved, not reinterpreted.
- Only analyzer candidates classified `explicit-related-section` are newly promoted.
- Unsafe shorthand, inline-only and bibliography-only references remain unpromoted.
- Historical archive dates and KG identifiers remain unchanged.

This is a repair/metadata pass, not a scientific fact review.
