---
id: EXT-NOX-OTA-20260831-SHIP-OBJECT-DOSSIERS
title: OTA-TEC-Dossiers für bestehende NOXIA-Schiffsrahmen und technische Schiffsmodule
status: done
source: NOXIA
target: OTA
created: 2026-08-31
completed: 2026-09-06
priority: high
affects: [NOXIA, OTA, KG, SSF]
---

# Abschluss — NOXIA-Schiffsrahmen und technische Schiffsmodule

Der Coverage-Abgleich ist abgeschlossen. Die operative Entscheidung liegt unter `docs/noxia-ship-object-coverage-20260906.md`.

## Schiffsrahmen

Für alle fünf bestehenden NOXIA-Rahmen wurden neue technische OTA-Typidentitäten angelegt:

- `mk1` → `OTA-TEC-0112-2026-DE`, `OTA-TEC-0112-NOX-SHIP-MK1`, `noxia-ship-frame-mk1`
- `fast` → `OTA-TEC-0113-2026-DE`, `OTA-TEC-0113-NOX-SHIP-FAST`, `noxia-ship-frame-fast`
- `heavy` → `OTA-TEC-0114-2026-DE`, `OTA-TEC-0114-NOX-SHIP-HEAVY`, `noxia-ship-frame-heavy`
- `scout` → `OTA-TEC-0115-2026-DE`, `OTA-TEC-0115-NOX-SHIP-SCOUT`, `noxia-ship-frame-scout`
- `pioneer` → `OTA-TEC-0116-2026-DE`, `OTA-TEC-0116-NOX-SHIP-PIONEER-CONSTRUCTOR`, `noxia-ship-frame-pioneer-constructor`

Empfohlene `mappingRole` ist jeweils `ship-frame`. Alle fünf Dossiers bleiben bewusst `ENTWURF`, bis die quantitative Fahrzeugarchitektur durch KUEPER Engineering geschlossen ist.

`pioneer` / `OTA-TEC-0116` ist ausdrücklich nicht identisch mit `OTA-TEC-0092-2026-DE` (cislunares Frühphase-Kombifahrzeug der Pioneer-Klasse).

## Module

Bewusst **nur NOXIA-/Interface-Abstraktion** bis zu gegenteiliger Engineering-Entscheidung:

- `cargo`
- `tank`
- `scanner`
- `drive_booster`

Als **technisch eigenständige Kandidaten mit neuem Dossierbedarf** klassifiziert:

- `habitat_pod`
- `deep_scanner`
- `survey_drone`
- `construction_rig`
- `colony_pod`

Für diese Kandidaten wurden noch keine OTA-IDs reserviert, weil zunächst Systemgrenze und technische Eigenidentität durch Engineering geschlossen werden sollen.

## Governance

- NOXIA `ShipInstance`-/`ModuleInstance`-UUIDs bleiben Runtime-Instanzen und werden nicht als OTA-Typidentität verwendet.
- Kosten, Slots, `baseSpeed`, Gameplay-Flugzeiten, aktuelle Kapazitäten/Massen und Unlockzustände wurden nicht rückwärts kanonisiert.
- Fehlende SSF-Lerninhalte wurden nur als Themenlücken markiert, nicht erfunden.

## Weiterleitungen

- KUEPER Engineering: `external-tasks/open/EXT-OTA-ENG-20260906-noxia-ship-frame-and-module-architecture.md`
- NOXIA Entity Notice: `external-tasks/open/EXT-OTA-NOXIA-20260906-ship-frame-entity-notice.md`

Damit sind die Abnahmekriterien erfüllt: Jeder Rahmen und jedes aktuelle Modul ist eindeutig als gemapptes OTA-Objekt, neues Dossiererfordernis oder bewusste Spielabstraktion klassifiziert; für alle bereits gemappten Rahmen liegen stabile Provenienzdaten vor.
