# SCI/FND quality pass — OTA-SCI-0020-2026-DE

Review date: 2026-09-21

## Scope

This pass curates `OTA-SCI-0020-2026-DE` without changing its scientific body text or epistemic frontmatter.

Source-backed title:

- `Relikt-Fenster — Spätaktive Wasser- und Eisdynamik auf Mars und Erde`

Six explicit relations are promoted from the document's `VERWANDTE DOKUMENTE` section:

- `OTA-SCI-0019-2025-DE`
- `OTA-TEC-0022-2025-DE`
- `OTA-RED-0012-2171-DE`
- `OTA-ORG-0002-2091-DE`
- `OTA-ORG-0003-2089-DE`
- `OTA-HIS-0004-2085-DE`

## Deliberately excluded relations

Two rows in the same table cannot safely be promoted:

- `OTA-BIO-0010-2025-DE` is labelled there as `Mars-Kolonisation Demographie 2042-2092`, while the canonical signature currently identifies the Keiko Nakamura biography. Signature and displayed title conflict.
- `OTA-TEC-0026-2091-DE` is labelled `Bewusstseins-Technologie-Schnittstellen (Omega-System)`, but no canonical OTA document with that signature exists in the repository, and repository search did not establish an unambiguous replacement target.

Both rows remain unresolved source metadata. No replacement target is inferred.

## Parallel-master recheck

Before merge, the branch base was rechecked against the then-current `master`. Parallel commits affected only an archived KG request and `OTA-TEC-0027-2091-DE`; neither `OTA-SCI-0020-2026-DE`, the SCI/FND runner nor this review note was touched.

## Guardrails

- no scientific claim text is rewritten;
- no `epistemicStatus` value is changed;
- no historical archive timestamp is invented;
- all promoted relation targets must exist as canonical OTA signatures;
- PR mode only checks the deterministic plan; `master` applies it after the normal validation and site/link build, then revalidates and syncs Drive.
