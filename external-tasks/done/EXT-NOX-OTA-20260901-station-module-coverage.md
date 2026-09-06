---
id: EXT-NOX-OTA-20260901-STATION-MODULE-COVERAGE
title: OTA-Abgleich und technische Dossiers für NOXIA-Stationsmodule
status: done
source: NOXIA
target: OTA
created: 2026-09-01
completed: 2026-09-06
priority: high
affects: [OTA, NOXIA, KG, SSF]
---

# Abschluss — NOXIA-Stationsmodule

Der Coverage-Abgleich ist abgeschlossen. Die operative Matrix liegt unter `docs/noxia-station-module-coverage-20260906.md`.

## Direkt gemappte technische Typen

- `solar_array` → `OTA-TEC-0117-2026-DE` / `OTA-TEC-0117-ORBITAL-SOLAR-ARRAY` / `orbital-station-solar-array`
- `docking_bay` → `OTA-TEC-0118-2026-DE` / `OTA-TEC-0118-ORBITAL-DOCKING-BAY` / `orbital-station-docking-bay`
- `habitat_module` → `OTA-TEC-0119-2026-DE` / `OTA-TEC-0119-ORBITAL-HABITAT` / `orbital-station-habitat-module`
- `research_lab` → `OTA-TEC-0120-2026-DE` / `OTA-TEC-0120-ORBITAL-RESEARCH-LAB` / `orbital-station-research-lab`
- `observatory` → `OTA-TEC-0121-2026-DE` / `OTA-TEC-0121-ORBITAL-OBSERVATORY` / `orbital-station-observatory`

Empfohlene `mappingRole`: jeweils `station-module`. Alle fünf Dossiers bleiben `ENTWURF`; NOXIA darf Identität/Provenienz read-only binden, aber keine technischen Leistungswerte aus dem Entwurfsstatus ableiten.

## Bewusst nicht direkt gemappt

- `command_center`: Gameplay-/Systemaggregat; technische Modulgrenze noch nicht belegt.
- `water_recycler`: keine Dublette erzeugt. `OTA-TEC-0086-2026-DE` ist der vorhandene technische Wasserrecycling-Anker; eine Orbitalstations-Variante bzw. Generalisierung wird zunächst durch Engineering geklärt. Insbesondere keine Gleichsetzung mit `OTA-TEC-0034` (Regolith-Wassergewinnung).
- `storage_bay`: zu generisches Gameplay-Aggregat für technisch unterschiedliche Lager-/Gefahrenklassen.
- `reactor`: „Fusionsreaktor“ bleibt bis zur Technologie-/Kanonentscheidung eine ungeprüfte NOXIA-Bezeichnung; keine OTA-ID erfunden.

## Governance

NOXIA-Credits, `buildTicks`, Energie-/Wasser pro Tick, Lager-/Crewboni, UI-Texte, Icons/Farben und Unlocks wurden nicht nach OTA rückwärts kanonisiert. Fehlende SSF-Lernpfade wurden als Themenlücken markiert, nicht im OTA dupliziert.

## Weiterleitungen

- KUEPER Engineering: `external-tasks/open/EXT-OTA-ENG-20260906-noxia-station-module-architecture.md`
- NOXIA Entity Notice: `external-tasks/open/EXT-OTA-NOXIA-20260906-station-module-entity-notice.md`

Damit ist für alle neun aktuellen NOXIA-Stationsmodule eindeutig dokumentiert, ob eine direkte OTA-Typidentität vorliegt, ein vorhandener Technikanker wiederzuverwenden ist, die Funktion als Gameplay-/Systemaggregat verbleibt oder eine Kanon-/Engineering-Entscheidung aussteht.
