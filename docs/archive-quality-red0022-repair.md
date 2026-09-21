# RED-0022 encoding and legacy-metadata repair

Review date: 2026-09-21

Target: `OTA-RED-0022-MULTI-DE`

## Why this is a separate pass

The document contains systematic UTF-8/Windows-1252-style mojibake across prose, mathematical symbols, names and the final archive marker. Examples in the reviewed source include:

- `2024â€“2026` instead of `2024–2026`
- `Ï‡` instead of `χ`
- `Î¨` instead of `Ψ`
- `GaztaÃ±aga` instead of `Gaztañaga`
- `**â€” ENDE DOKUMENT â€”**` instead of `**— ENDE DOKUMENT —**`
- `áƒ` instead of `ᐃ`

This is an encoding defect, not a theory revision. The repair therefore reconstructs only character sequences that map back to valid UTF-8 bytes and leaves the scientific/theoretical claims unchanged.

## Metadata normalization

Source-backed title:

- `AVI und Quantengravitation: Formale Grundlagen`

The legacy inline `relatedDocuments` array is normalized to canonical relation objects.

Two valid relations already present in the original frontmatter are preserved:

- `OTA-SCI-0036-2026-DE`
- `OTA-FND-0030-2026-DE`

Five additional relations are promoted from the explicit `VERWANDTE DOKUMENTE` table:

- `OTA-RED-0012-2171-DE`
- `OTA-SCI-0019-2025-DE`
- `OTA-SCI-0035-2026-DE`
- `OTA-SCI-0030-2025-DE`
- `OTA-FND-0002-2025-DE`

All seven targets were verified as canonical OTA files before this pass.

## Unresolved legacy reference

The same table contains `OTA-FND-0001-noxia` (`NOXIA-Grundlagen`). No canonical OTA file with that signature exists. The historical body reference remains visible, but it is not promoted and no replacement signature is inferred.

## Guardrails

- `epistemicStatus: ["R", "T", "S", "F"]` is preserved.
- No scientific equation, argument, source claim or speculative/fictive classification is rewritten for meaning.
- No historical `archivedAt` value is added.
- The repair script validates known repaired character sentinels and rejects remaining reviewed mojibake sentinels.
- The script is idempotent: PR mode validates the candidate; `master` applies it only after the normal pre-build checks and then runs the full validator/site build again.
- Google Drive refresh remains downstream of the validated bot commit.
