---
id: EXT-KG-OTA-20260831-eclss-survival-sop-r1
title: OTA-TEC-0019 ECLSS Survival-SOP nach kritischem R1-Evidenzaudit korrigieren
status: done
source: KG
target: OTA
created: 2026-08-31
completed: 2026-09-05
requested_by: research-validation-loop
priority: high
affects: [KG, OTA]
---

## Anlass

Der korrigierte Research Candidate `RES-20260831-C1748BD0` (Revision R1) ersetzt die zu starke Interpretation des vorherigen Audits zu OTA-TEC-0019. NASA-Quellen liefern belastbare Realanker, validieren aber **nicht** die komplette konkrete KITE-Alarmleiter als universelle reale SOP.

## Umgesetzt

`src/content/documents/OTA-TEC-0019-2091-DE.md` wurde am 2026-09-05 auf **v1.1** aktualisiert.

Erledigt wurden insbesondere:

- `kg.system` auf `SYS:KUEPER:ota` korrigiert.
- `>15 mmHg` intern konsistent als **SCHWARZ** geführt.
- nominaler ppCO₂-Realanker (~3 mmHg) von KITE-eigenen Off-nominal-Schwellen getrennt.
- keine pauschale LiOH-Zwangsreaktion aus historischen 7,6-mmHg-Analogwerten abgeleitet.
- KITE-pO₂- und Gesamtdruckwerte als gekoppelte `[H]/[T]`-Operationshülle gekennzeichnet, nicht als universelle NASA-Grenzwerte.
- Leak-Rate-Bänder 50/150/400 Pa/min als KITE-Designwerte `[H]/[T]` eingeordnet.
- 2 L/Pax/Tag als zeitlich begrenzter KITE-Survivalwert eingeordnet; Realanker des Audits separat genannt.
- SFOG/Vika-Technologie und thermisch/brandseitige Realbasis erhalten, aber die nicht source-pinned 30–60-s-Regel entfernt.
- regenerative Sorbentensysteme klar von LiOH-Verbrauchsmaterial getrennt.

Commit: `c31d94b7dab2c821b505a8c734bd480465ff71cc`

## Source-of-Truth-Grenze

KG hält den korrigierten Audit als nicht-kanonischen Research Candidate. OTA bleibt Source of Truth für OTA-TEC-0019. NOXIA-/Kanonwerte wurden durch den Request nicht neu gesetzt; die vorhandene KITE-SOP wurde lediglich evidenziell sauber klassifiziert und intern korrigiert.

## Referenz

- Research ID: `RES-20260831-C1748BD0`
- Revision: `R1 — critical-review correction`
- KG-Pfad: `research/candidates/RES-20260831-C1748BD0.md`
