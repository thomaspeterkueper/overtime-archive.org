---
id: EXT-KG-OTA-20260831-mars-fahrwege-evidence-alignment
title: Evidenzabgleich OTA-TEC-0090 Mars-Fahrwege und Straße-vs.-Schiene-Trade-off
status: done
source: KG
target: OTA
created: 2026-08-31
completed: 2026-09-05
requested_by: research-validation-loop
priority: medium
affects: [KG, OTA]
---

## Ergebnis

`OTA-TEC-0090-2026-DE` wurde auf v1.1 gegen `RES-20260831-TEC0090A` R1 abgeglichen.

Umgesetzt wurden insbesondere:
- geotechnische Einzelwerte nicht als globale Mars-Bemessungswerte geführt;
- Planieren/Verdichten/Stabilisieren als boden- und fahrzeugabhängige Verfahren eingeordnet;
- PAVER/Mason/Sintern als Demonstrations-/Entwicklungsanker, nicht als Mars-Betriebsnachweis behandelt;
- wiederholte Radlast/Rutting als reale Terramechanik berücksichtigt;
- FLOAT/LunA-10 als lunare Guided-Transport-Konzeptanker gekennzeichnet;
- terrestrische Rail-Effizienz nur als Analogie belassen;
- universeller Road-to-Rail-Crossover ausdrücklich verworfen;
- konkrete Breiten, Lasten, Geschwindigkeiten, Kosten, Energieboni, Unlocks und Netzgeometrien offen gelassen;
- `kg.system` auf `SYS:KUEPER:ota` vereinheitlicht.

## Engineering-Follow-up

Die verbleibende quantitative Aufgabe wurde an KUEPER Engineering übergeben:

`external-tasks/open/EXT-OTA-ENG-20260905-mars-route-infrastructure-trade.md`

Dort sollen geotechnische Bemessung, Lebenszyklusenergie, Trafficability/Rutting, Wartung, Netzresilienz und ein parametrisierter Road-/Guided-Transport-Crossover geschlossen werden.

## Source-of-Truth-Grenze

OTA bleibt Source of Truth für das Archivdokument und Weltsetzung. KUEPER Engineering übernimmt quantitative Auslegung/Trade Studies. KG hält Identitäten/Evidenzbezüge. NOXIA bleibt Source of Truth für Gameplay-, Kosten-, Unlock- und Balancingwerte.

## Referenz

- Research ID: `RES-20260831-TEC0090A`
- Revision: `R1 — critical-review correction`
