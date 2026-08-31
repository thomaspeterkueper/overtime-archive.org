---
id: EXT-NOX-OTA-20260831-SHIP-OBJECT-DOSSIERS
title: OTA-TEC-Dossiers für bestehende NOXIA-Schiffsrahmen und technische Schiffsmodule
status: open
source: NOXIA
target: OTA
created: 2026-08-31
priority: high
affects: [NOXIA, OTA, KG, SSF]
---

## Anlass

Der NOXIA↔OTA-Coverage-Abgleich zeigt eine klare Lücke: Die Explorationsassets `rover_p` und `vex_47` besitzen bereits read-only OTA-Provenienzbindungen, die bestehende Schiffsarchitektur in `noxiagame/lib/game/ships.ts` dagegen noch nicht.

NOXIA ist Source of Truth für Spielwerte, Unlocks, Runtime-Instanzen und Balancing. OTA ist Source of Truth für die kanonische technische Beschreibung. Deshalb dürfen fehlende technische Wahrheiten nicht in NOXIA erfunden oder aus aktuellen Balancingwerten rückwärts kanonisiert werden.

## Bestehende NOXIA-Objekte

### Schiffsrahmen

- `mk1` — Frachter Mk.I
- `fast` — Schnellfrachter
- `heavy` — Schwerfrachter
- `scout` — Erkundungsschiff
- `pioneer` — Pionier-Konstrukteur

### Technische Schiffsmodule

- `cargo` — Frachtmodul
- `tank` — Tankmodul
- `habitat_pod` — Wohncontainer
- `scanner` — Sensorausleger
- `drive_booster` — Schubverstärker
- `deep_scanner` — Tiefen-Scanner
- `survey_drone` — Kartierungsdrohne
- `construction_rig` — Bau-Ausrüstung
- `colony_pod` — Kolonisierungsmodul

Referenz: `thomaspeterkueper/noxiagame`, `lib/game/ships.ts`.

## Anforderung

1. Prüfen, welche der genannten Objekte bereits durch vorhandene OTA-TEC-Dossiers oder hinreichend präzise kanonische Technikobjekte abgedeckt sind.
2. Bestehende Dossiers bevorzugt wiederverwenden und stabile `objectId`-/`canonicalId`-Zuordnungen zurückmelden; keine Dubletten erzeugen.
3. Für echte Coverage-Lücken passende OTA-TEC-Objektdossiers nach dem eingefrorenen Objekt-Dossier-Schema v1.5 anlegen bzw. zur Anlage vorbereiten.
4. Typ und Instanz strikt trennen. Die NOXIA-Schiffsrahmen sind Typ-/Bauplanebene; lebende `ShipInstance`-UUIDs sind NOXIA-Runtime-Instanzen und dürfen nicht als OTA-Typidentität verwendet werden.
5. Technische Module als eigenständige OTA-Objekte nur dort modellieren, wo sie technisch/kannonisch genügend Eigenidentität besitzen. Reine NOXIA-Balancing-/Slot-Abstraktionen dürfen nicht künstlich kanonisiert werden.
6. Für jedes verwendbare OTA-Objekt die für NOXIA nötigen read-only Mappingdaten liefern:
   - `sourceDocumentId`
   - `canonicalId`
   - stabile `objectId`
   - empfohlene `mappingRole`
7. NOXIA-Kosten, Slotzahlen, `baseSpeed`, Kapazitäten, Unlock-Zustände, Flugzeiten und andere Spielwerte sind ausdrücklich keine OTA-Kanonwerte und dürfen nicht ungeprüft in Dossiers übernommen werden.
8. Wenn für ein Objekt wissenschaftliche Lernabhängigkeiten fehlen, diese als SSF-Lücken kennzeichnen; SSF-Inhalte nicht im OTA neu erfinden.
9. Relevante KG-Relationen wie `REQUIRES`, `BUILT_FROM`, `ENABLED_BY`, `TAUGHT_BY`, `USED_IN`, `UPGRADE_OF`, `SUCCEEDED_BY` und `FUNCTIONAL_ANALOG_TO` entsprechend v1.5 ausweisen, sofern fachlich belegt.

## Priorität

Zuerst die fünf Schiffsrahmen prüfen, da sie die tragende Typstruktur der NOXIA-Schiffsschicht bilden. Danach Module nach technischer Eigenständigkeit priorisieren. Besonders relevant für die nächste Spielentwicklung sind `scout`, `pioneer`, `deep_scanner`, `survey_drone`, `construction_rig` und `colony_pod`.

## Abnahme

Erledigt, wenn NOXIA für jeden bestehenden Schiffsrahmen und jedes technisch eigenständige Modul eindeutig weiß, ob

- ein vorhandenes OTA-Objekt gemappt werden kann,
- ein neues OTA-Dossier erforderlich ist,
- oder das NOXIA-Element lediglich eine Spielabstraktion bleibt,

und für alle gemappten Objekte stabile OTA-Provenienzdaten vorliegen.