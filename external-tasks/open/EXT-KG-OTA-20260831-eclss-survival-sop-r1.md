---
id: EXT-KG-OTA-20260831-eclss-survival-sop-r1
title: OTA-TEC-0019 ECLSS Survival-SOP nach kritischem R1-Evidenzaudit korrigieren
status: open
source: KG
target: OTA
created: 2026-08-31
requested_by: research-validation-loop
priority: high
affects: [KG, OTA]
---

## Anlass

Der korrigierte Research Candidate `RES-20260831-C1748BD0` (Revision R1) ersetzt die zu starke Interpretation des vorherigen Audits zu OTA-TEC-0019. NASA-Quellen liefern belastbare Realanker, validieren aber **nicht** die komplette konkrete KITE-Alarmleiter als universelle reale SOP.

## Anforderung an OTA

`src/content/documents/OTA-TEC-0019-2091-DE.md` gegen R1 prüfen und die Realstatus-Zuordnung korrigieren:

1. **CO2:** nominal `ppCO2 <= 3 mmHg` kann als aktueller NASA-[R]-Anker geführt werden. Off-nominale Schwellen sind programm-/missionsspezifisch. Historische ISS-Werte 5,3 / 6,0 / 7,6 mmHg nur als Analoganker verwenden.
2. **7,6 mmHg:** nicht als zwingende LiOH-Aktivierung darstellen. Belegt ist eine historische Schwelle für Maßnahmen zur CO2-Senkung; die konkrete Gegenmaßnahme ist systemabhängig.
3. **Interne KITE-Tabelle:** prüfen/korrigieren, dass `>15 mmHg` nach der eigenen Tabelle SCHWARZ und nicht ROT ist.
4. **O2/Gesamtdruck:** 60–65 kPa nicht isoliert als NASA-bestätigten Survival-Grenzwert führen. Gesamtdruck mit O2-Fraktion/PIO2, Diluent, Expositionsdauer und Brandrisiko koppeln. Die KITE-pO2-Bänder bleiben `[H]`, sofern sie nicht separat geschlossen werden.
5. **Leckraten:** 50/150/400 Pa/min als KITE-Designwerte `[H]/[T]` führen, nicht als universelle reale Grenzwerte. Für die Plausibilisierung Kabinenvolumen, Gasinventar, Druckabfall, Detektions-/Isolationszeit und Safe-Haven-Zeit koppeln.
6. **Wasser:** 2 L/Person/Tag nicht als NASA-konformes reguläres Hydrationsminimum bezeichnen. Der aktuelle Audit nennt 2,5 L/Tag als NASA-Anker; 2 L höchstens als zeitlich begrenztes, medizinisch bewertetes Survival-Konzept `[H]`.
7. **SFOG/Vika:** Technologie und Brand-/Thermikrisiko sind real belegt. Die konkrete Anweisung `30–60 s Abstand` ist nicht source-pinned und darf nicht als reale Standardpraxis ausgegeben werden.
8. **Scrubber-Regeneration:** nur für tatsächlich regenerative KITE-Sorbentensysteme behaupten; LiOH ist Verbrauchsmaterial.

## Source-of-Truth-Grenze

KG hält den korrigierten Audit als nicht-kanonischen Research Candidate. OTA bleibt Source of Truth für OTA-TEC-0019 und entscheidet über die konkrete KITE-SOP. NOXIA-/Kanonwerte werden durch diesen Request nicht gesetzt.

## Erwartetes Ergebnis

OTA-TEC-0019 unterscheidet klar zwischen NASA-/ISS-Realankern und KITE-eigenen Operationsschwellen. Die konkrete Alarmleiter wird nicht mehr pauschal als extern validierte Standard-SOP dargestellt, und die genannten internen bzw. evidenziellen Inkonsistenzen sind behoben.

## Referenz

- Research ID: `RES-20260831-C1748BD0`
- Revision: `R1 — critical-review correction`
- KG-Pfad: `research/candidates/RES-20260831-C1748BD0.md`
