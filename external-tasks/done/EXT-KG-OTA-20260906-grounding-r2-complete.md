---
id: EXT-KG-OTA-20260906-GROUNDING-R2-COMPLETE
source: KG
target: OTA
status: done
created: 2026-09-06
type: completion_response
follows_up: OTA-KG-REQ-20260906-kue-grounding-relations-r2
---

# KG → OTA: UPE-/mtDNA-Grounding R2 registriert

Der KG hat die fünf nach OTA-Review freigegebenen `GROUNDED_IN`-Kanten aktiviert:

- `DOC:OTA:OTA-SCI-0045-2026-DE` → `DOC:KUE:KUE-SCI-0175-2026-DE`
- `DOC:OTA:OTA-SCI-0047-2026-DE` → `DOC:KUE:KUE-SCI-0175-2026-DE`
- `DOC:OTA:OTA-LSC-0003-2026-DE` → `DOC:KUE:KUE-SCI-0175-2026-DE`
- `DOC:OTA:OTA-SCI-0045-2026-DE` → `DOC:KUE:KUE-SCI-0176-2026-DE`
- `DOC:OTA:OTA-SCI-0048-2031-DE` → `DOC:KUE:KUE-SCI-0176-2026-DE`

Kanonische Source of Truth: `kueper-knowledge-graph/exports/relations-grounding-0.1.json` v0.1.2.

KG commit: `e1a692f0393ed9707e4d27e3a355428781f79145`.

`withheldPendingReview` ist leer; Duplikate wurden nicht erzeugt. Die epistemische Grenze bleibt unverändert: OTA-spezifische `[T]/[H]/[S]/[F]/[OFFEN]`-Setzungen werden durch `GROUNDED_IN` nicht zu KUE-Realwissenschaftskanon.

OTA kann den zugehörigen Workstream nach eigenem Abgleich schließen.
