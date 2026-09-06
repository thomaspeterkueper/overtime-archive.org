---
id: EXT-KG-OTA-20260906-KUE-GROUNDING-RELATIONS-COMPLETE
source: KG
target: OTA
status: open
created: 2026-09-06
priority: high
type: completion_response
---

# KUE-Realwissenschafts-Groundings im KG konsolidiert

Der KG-Request `OTA-KG-REQ-20260906-kue-grounding-relations` ist abgeschlossen.

## Kanonische Source of Truth

`exports/relations-grounding-0.1.json` v0.1.1 ist jetzt die einzige aktive KG-Source-of-Truth für OTA→KUE-Realwissenschafts-Groundings.

Der frühere Einzel-Export `exports/document-grounding-relations-0.1.json` ist `superseded`, enthält keine aktiven Records mehr und verweist auf den konsolidierten Shard.

## Freigegebene kanonische Groundings

- `DOC:OTA:OTA-TEC-0093-2026-DE` → `DOC:KUE:KUE-SCI-0172-2026-DE`
- `DOC:OTA:OTA-TEC-0082-2026-DE` → `DOC:KUE:KUE-SCI-0173-2026-DE`
- `DOC:OTA:OTA-SCI-0080-2026-DE` → `DOC:KUE:KUE-SCI-0174-2026-DE`
- `DOC:OTA:OTA-TEC-0029-2048-DE` → `DOC:KUE:KUE-SCI-0177-2026-DE`
- `DOC:OTA:OTA-TEC-0019-2091-DE` → `DOC:KUE:KUE-SCI-0178-2026-DE`
- `DOC:OTA:OTA-TEC-0085-2026-DE` → `DOC:KUE:KUE-SCI-0179-2026-DE`
- `DOC:OTA:OTA-TEC-0082-2026-DE` → `DOC:KUE:KUE-SCI-0179-2026-DE`
- `DOC:OTA:OTA-TEC-0090-2026-DE` → `DOC:KUE:KUE-SCI-0180-2026-DE`
- `DOC:OTA:OTA-TEC-0088-2026-DE` → `DOC:KUE:KUE-SCI-0181-2026-DE`
- `DOC:OTA:OTA-TEC-0092-2026-DE` → `DOC:KUE:KUE-SCI-0182-2026-DE`
- `DOC:OTA:OTA-TEC-0082-2026-DE` → `DOC:KUE:KUE-SCI-0182-2026-DE`
- `DOC:OTA:OTA-TEC-0021-2025-DE` → `DOC:KUE:KUE-SCI-0183-2026-DE`

## Weiterhin nicht freigegeben

Die folgenden Groundings sind nicht kanonisch aktiv und bleiben bis zur OTA-Fachfreigabe `withheldPendingReview`:

- KUE-SCI-0175 ↔ OTA-SCI-0045 / OTA-SCI-0047 / OTA-LSC-0003
- KUE-SCI-0176 ↔ OTA-SCI-0045 / OTA-SCI-0048

## Epistemische Grenze

`GROUNDED_IN` bedeutet ausschließlich, dass das KUE-Dokument die allgemeine realwissenschaftliche `[R]`-Grundlage bereitstellt. OTA-spezifische `[H]`, `[T]`, `[S]`, `[F]` oder `[OFFEN]`-Aussagen werden dadurch nicht zu KUE-Kanon.

## KG-Nachweise

- `7fa89e691de6f9c962b6b12c5ecb317e4e37274d` — Grounding-Shard auf freigegebenen Stand reconciliert
- `1fde8e96817137554ef99ff3673367677c397a86` — konkurrierenden Einzel-Export superseded
- `dbc14f4f572a4ae57f78b6a2abb67ffaf735f136` — eingehenden Request nach `done/` archiviert
- `6cb62657463d6afd50009be18806e6a1f98344db` — aus KG `open/` entfernt

## OTA-Aktion

Bitte den dokumentinternen Grounding-Stand gegen diese 12 Kanten abgleichen. Insbesondere dürfen die 0175/0176-Kanten erst nach separater fachlicher Freigabe wieder als kanonische Relation an KG gemeldet werden. Danach kann diese Completion-Antwort nach `external-tasks/done/` verschoben werden.
