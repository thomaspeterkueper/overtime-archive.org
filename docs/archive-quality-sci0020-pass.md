# SCI/FND quality pass — OTA-SCI-0020-2026-DE

Review date: 2026-09-21

## Scope

This pass curates `OTA-SCI-0020-2026-DE` without changing its scientific body text or epistemic frontmatter.

Source-backed title:

- `Relikt-Fenster — Spätaktive Wasser- und Eisdynamik auf Mars und Erde`

Seven explicit relations are promoted from the document's `VERWANDTE DOKUMENTE` section:

- `OTA-SCI-0019-2025-DE`
- `OTA-TEC-0022-2025-DE`
- `OTA-TEC-0026-2091-DE`
- `OTA-RED-0012-2171-DE`
- `OTA-ORG-0002-2091-DE`
- `OTA-ORG-0003-2089-DE`
- `OTA-HIS-0004-2085-DE`

## Deliberately excluded relation

The same table contains `OTA-BIO-0010-2025-DE`, but labels that signature as `Mars-Kolonisation Demographie 2042-2092`. The canonical signature currently identifies the Keiko Nakamura biography instead. Because signature and displayed title conflict, this row is treated as unresolved source metadata rather than promoted into canonical `relatedDocuments`.

No replacement target is inferred.

## Guardrails

- no scientific claim text is rewritten;
- no `epistemicStatus` value is changed;
- no historical archive timestamp is invented;
- all promoted relation targets must exist as canonical OTA signatures;
- PR mode only checks the deterministic plan; `master` applies it after the normal validation and site/link build, then revalidates and syncs Drive.
