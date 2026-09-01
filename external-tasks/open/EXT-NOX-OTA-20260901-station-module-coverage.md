---
id: EXT-NOX-OTA-20260901-STATION-MODULE-COVERAGE
title: OTA-Abgleich und technische Dossiers für NOXIA-Stationsmodule
status: open
source: NOXIA
target: OTA
created: 2026-09-01
priority: high
affects: [OTA, NOXIA, KG, SSF]
---

## Anlass

NOXIA hat seine technischen Coverage-Quellen um den bisher nur im UI definierten Stationsmodul-Katalog erweitert. Die Stationsmodule sind nun als NOXIA-eigene Gameplay-Typen in `lib/game/stationModules.ts` explizit erfasst und erscheinen im technischen Coverage-Report.

OTA bleibt Source of Truth für kanonische technische Wahrheit. NOXIA darf daher keine OTA-`objectId`, `canonicalId` oder technische Dossierwahrheit erfinden.

## Zu prüfende NOXIA-Typen

- `command_center` — Kommandozentrum
- `solar_array` — Solar-Array
- `docking_bay` — Andockbucht
- `habitat_module` — Wohnmodul
- `research_lab` — Forschungslabor
- `water_recycler` — Wasserrecycler
- `storage_bay` — Lagerbay
- `observatory` — Observatorium
- `reactor` — Fusionsreaktor

Kontext: L4/L5- und Orbit-Stationen; aktuell insbesondere PROMETHEUS L5.

## Auftrag an OTA

1. Für jeden Typ zuerst prüfen, ob bereits ein passendes kanonisches OTA-TEC-Dossier existiert.
2. Bei bestehendem Dossier das belastbare NOXIA-Mapping liefern: OTA-Dokument-ID, `canonicalId`, stabile `objectId`, Mapping-Rolle.
3. Nur bei nachgewiesener kanonischer Lücke ein neues OTA-TEC-Dossier nach dem eingefrorenen Typ-Schema anlegen.
4. Prüfen, ob einzelne NOXIA-Typen nur Gameplay-Aggregate sind und technisch auf mehrere OTA-Objekte/Subsysteme verweisen sollten; in diesem Fall keine künstliche 1:1-Kanonisierung erzwingen.
5. Insbesondere `water_recycler` nicht automatisch mit dem Mars-Regolith-Wasserextraktor OTA-TEC-0034 gleichsetzen: Stations-Kreislaufwasseraufbereitung und Regolith-Sublimation sind technisch unterschiedliche Funktionen.
6. `reactor` als NOXIA-Bezeichnung "Fusionsreaktor" zunächst als zu verifizierende Spielbezeichnung behandeln; keine physikalische/kanonische Technologie aus dem Spielwert ableiten.
7. Eventuelle fehlende Lernmodule anschließend über den KG/SSF-Request-Workflow an SSF übergeben, nicht im OTA oder NOXIA duplizieren.

## Nicht übernehmen

NOXIA-Werte wie Credits-Kosten, `buildTicks`, Produktion pro Tick, Lagerkapazität, Besatzungsbonus sowie UI-Beschreibungen, Icons und Farben sind Gameplay/Balance und kein OTA-Kanon.

## Rückgabe an NOXIA

Für belastbar gemappte Typen bitte eine eindeutig übernehmbare Mapping-Antwort bereitstellen, damit NOXIA die read-only Provenienz anbinden und Coverage-Einträge auf `mapped` setzen kann.
