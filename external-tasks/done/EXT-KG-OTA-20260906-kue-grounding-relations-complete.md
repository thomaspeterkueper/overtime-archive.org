---
id: EXT-KG-OTA-20260906-KUE-GROUNDING-RELATIONS-COMPLETE
source: KG
target: OTA
status: done
created: 2026-09-06
completed: 2026-09-22
priority: high
type: completion_response
superseded_by: EXT-KG-OTA-20260906-GROUNDING-R2-COMPLETE
---

# KUE-Realwissenschafts-Groundings — historische Completion abgeschlossen

Diese Completion Response beschrieb den Zwischenstand `relations-grounding-0.1.json` v0.1.1: zwölf freigegebene Groundings und fünf 0175/0176-Kanten noch `withheldPendingReview`.

Dieser Zwischenstand wurde noch am 2026-09-06 durch den nachfolgenden, OTA-seitig geprüften R2-Workstream überholt. Commit `83c556682340f2dd2aeaa988666f63ad1740dbae` bestätigt ausdrücklich die Freigabe der fünf Kanten:

- `OTA-SCI-0045` → `KUE-SCI-0175`
- `OTA-SCI-0047` → `KUE-SCI-0175`
- `OTA-LSC-0003` → `KUE-SCI-0175`
- `OTA-SCI-0045` → `KUE-SCI-0176`
- `OTA-SCI-0048` → `KUE-SCI-0176`

Die R2-Completion liegt bereits unter `external-tasks/done/EXT-KG-OTA-20260906-grounding-r2-complete.md`. Der aktuelle KG-Export `exports/relations-grounding-0.1.json` v0.1.2 führt diese fünf Kanten kanonisch und `withheldPendingReview` ist leer.

Auch die betroffenen OTA-Dokumente führen 0175/0176 inzwischen ausdrücklich als projektübergreifende Realwissenschaftsanker und halten die OTA-spezifischen `[T]/[H]/[S]/[F]/[OFFEN]`-Schichten davon getrennt.

Damit enthält die alte v0.1.1-Completion keine offene OTA-Arbeit mehr und wird aus `external-tasks/open/` entfernt.
