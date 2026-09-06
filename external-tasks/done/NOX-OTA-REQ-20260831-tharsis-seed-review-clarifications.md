---
id: NOX-OTA-REQ-20260831-THARSIS-SEED-REVIEW-CLARIFICATIONS
requester: SYS:KUEPER:noxia
target: SYS:KUEPER:ota
priority: high
type: architecture-clarification
created: 2026-08-31
status: done
resolved: 2026-09-06
affects: [OTA, NOXIA, SSF, ENG]
requires:
  - OTA-TEC-0038-2026-DE
  - OTA-TEC-0094-2026-DE
  - OTA-TEC-0095-2026-DE
  - OTA-TEC-0096-2026-DE
  - OTA-TEC-0097-2026-DE
  - OTA-TEC-0100-2026-DE
  - OTA-TEC-0104-2026-DE
  - OTA-TEC-0105-2026-DE
---

# Tharsis Hub — Rückfragen aus dem NOXIA Implementierungs-/Layout-Review

## Auflösung 2026-09-06

Die sechs Rückfragen wurden OTA-seitig entschieden und in den kanonischen Architekturstand eingearbeitet. Die ausführliche Rückmeldung an NOXIA liegt in:

`thomaspeterkueper/noxiagame/external-tasks/open/EXT-OTA-NOXIA-20260906-tharsis-seed-review-resolution.md`

### 1. Utility A/B

Kritische A/B- bzw. Cross-Feed-Pfade sind zwingend für Strom, Leit-/Steuerdaten, Trink-/ECLSS-Nachspeisewasser und O2/kritische Atemgas-Nachspeisung. Prozesswasser/-gase werden funktionsabhängig redundant. Abwasser benötigt Segmentierung/Puffer statt zwingend doppeltem Vollbackbone. Thermik wird lokal/regional redundant, nicht als universeller kolonieweiter A/B-Wärmering modelliert. Eingearbeitet in `OTA-TEC-0105-2026-DE` v1.1.

### 2. Fahrweg-N-1 vs. Medien-N-1

Energie-/Wasser-Kontinuität gehört in den Utility-Graphen. Fahrweg-N-1 verlangt alternative Rettungs-, Wartungs-, Bergungs- und Frachtzugänge, aber nicht nach jedem Road-Tile-Ausfall eine Straßenerreichbarkeit eines Energie- und Wasserobjekts von jedem Cluster aus. Eingearbeitet in `OTA-TEC-0104-2026-DE` v1.1.

### 3. ECLSS 2-von-3

Drei Regionalhubs versorgen normal je zwei Cluster. Beim Verlust eines Hubs müssen die zwei verbleibenden Hubs alle sechs Cluster im degradierten Mindestbetrieb über absperrbare Cross-Feed-Verbindungen erreichen. Mindestfunktionen: O2, CO2, Feuchte, Druck-/Gasnachspeisung und notwendige Spurengas-/Kontaminationskontrolle. Kein kolonieweiter gemeinsamer Luftkreislauf. Eingearbeitet in `OTA-TEC-0096-2026-DE` v1.1.

### 4. 504 nominale Plätze vs. Safe Haven

504 = 6 × 84 nominale Wohnplätze, nicht Evakuierungsreserve. Für den Verlust eines Clusters müssen fünf verbleibende Cluster die gesamte Population temporär tragen. OTA-Planungswert: mindestens 100 Personen je verbleibendem Cluster, insgesamt 500 temporäre Plätze, zunächst bis zu 72 h. Kein siebter regulärer Habitatcluster. Eingearbeitet in `OTA-TEC-0097-2026-DE` v1.1.

### 5. Pflanzenmodul

Aktives Pflanzen-/Frischproduktionsmodul wird aus dem Minimum-Viable-Startbestand in Ausbauphase 1 verschoben. Startbestand: 30-Tage-Vollreserve, drei getrennte Lagerdomänen, vorbereitete Fläche/Medienanschlüsse sowie Saatgut-/Nährstoffbestand. Eingearbeitet in `OTA-TEC-0100-2026-DE` v1.1 und `OTA-TEC-0038-2026-DE` v0.2.

### 6. Energie-Epistemik

7–8 MW Gesamt-Nennleistung bleiben `[A/F]` OTA-Weltarchitekturannahme/Designreserve, kein `[R]`-Realwert. Gleiches gilt vorläufig für 6–10 MWh Kurzzeitspeicher. Eine Bottom-up-Lastbilanz ist noch offen. Präzisiert in `OTA-TEC-0094-2026-DE` v1.1.

## Engineering-Folgeauftrag

Quantitative Closure für Energie, ECLSS 2-von-3, 5-Cluster-Safe-Haven und mediumspezifische Utility-/Thermiktopologie wurde an KUEPER Engineering übergeben:

`thomaspeterkueper/kueper-engineering/external-tasks/open/EXT-OTA-ENG-20260906-tharsis-resilience-closure.md`

Dieser Engineering-Auftrag blockiert NOXIA Issue #52 nicht; die topologische/spielerische Umsetzung kann mit den oben gesetzten Architekturentscheidungen fortgesetzt werden.

## Abschluss

OTA-seitig ist der Clarification-Request erledigt.