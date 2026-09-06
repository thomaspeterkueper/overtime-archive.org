# NOXIA ↔ OTA Station Module Coverage

Stand: 2026-09-06
Status: operative Coverage-Entscheidung für `EXT-NOX-OTA-20260901-station-module-coverage`

## Grundsatz

NOXIA bleibt Source of Truth für Kosten, `buildTicks`, Produktion pro Tick, Lager-/Crewboni, UI-Texte, Icons/Farben und Unlocks. OTA dokumentiert technische Typidentitäten nur dort, wo ein NOXIA-Gameplaytyp eine ausreichend klare technische Systemgrenze besitzt.

## Coverage-Matrix

| NOXIA-Typ | Entscheidung | OTA-Bezug / Mapping | Begründung |
| --- | --- | --- | --- |
| `command_center` | **Gameplay-/Systemaggregat** | kein eigenes OTA-Dossier | „Koordiniert alle Stationssysteme“ ist eine stationsweite Leit-/Avionikfunktion und noch keine klar abgegrenzte technische Modulklasse. Steuerung, Kommunikation, Navigation, Traffic Control und Stationsmanagement können mehrere Systeme umfassen. |
| `solar_array` | **neues OTA-Dossier angelegt** | `OTA-TEC-0117-2026-DE`; `OTA-TEC-0117-ORBITAL-SOLAR-ARRAY`; `orbital-station-solar-array`; `station-module` | klare technische Eigenidentität als Stationsenergie-/PV-Modul. |
| `docking_bay` | **neues OTA-Dossier angelegt** | `OTA-TEC-0118-2026-DE`; `OTA-TEC-0118-ORBITAL-DOCKING-BAY`; `orbital-station-docking-bay`; `station-module` | klare technische Eigenidentität; `OTA-TEC-0087` enthält Docking als Funktion, aber kein generisches Docking-Modul. |
| `habitat_module` | **neues OTA-Dossier angelegt** | `OTA-TEC-0119-2026-DE`; `OTA-TEC-0119-ORBITAL-HABITAT`; `orbital-station-habitat-module`; `station-module` | klare technische Eigenidentität als druckbeaufschlagtes Habitat; Crewwert bleibt NOXIA-only. |
| `research_lab` | **neues OTA-Dossier angelegt** | `OTA-TEC-0120-2026-DE`; `OTA-TEC-0120-ORBITAL-RESEARCH-LAB`; `orbital-station-research-lab`; `station-module` | Laborplattform besitzt eigene Medien-, Daten-, Thermik- und Sicherheitsgrenzen; „Wissenspunkte“ bleiben Spielabstraktion. |
| `water_recycler` | **vorhandene OTA-Technik wiederverwenden; direkte Typbindung noch zurückhalten** | technische Grundlage: `OTA-TEC-0086-2026-DE` | `OTA-TEC-0086` beschreibt bereits Grau-/Kondensat-/Kreislaufwasseraufbereitung und grenzt Regolithgewinnung ausdrücklich aus. Es ist aktuell jedoch auf Mars-/Koloniekontext kuratiert und besitzt noch keine stabile generische `canonicalId`/`objectId` für ein Orbitalstationsmodul. Deshalb kein Dublettendossier; Engineering/OTA sollen die Varianten-/Generalisierungsgrenze schließen. |
| `storage_bay` | **vorerst Gameplay-/Interface-Aggregat** | kein eigenes OTA-Dossier | „200 t für alle Ressourcen“ bündelt technisch sehr verschiedene Lagerklassen. Druckgas, Kryogenika, Schüttgut, Gefahrstoffe, Ersatzteile und normale Fracht benötigen unterschiedliche Containment-/Thermik-/Sicherheitsarchitekturen. |
| `observatory` | **neues OTA-Dossier angelegt** | `OTA-TEC-0121-2026-DE`; `OTA-TEC-0121-ORBITAL-OBSERVATORY`; `orbital-station-observatory`; `station-module` | klare technische Eigenidentität als Beobachtungs-/Sensorplattform; „Orbital-Sicht“ bleibt Gameplaywirkung. |
| `reactor` | **Kanon-/Engineering-Entscheidung erforderlich** | keine OTA-ID | NOXIA nennt den Typ aktuell „Fusionsreaktor“. Diese Bezeichnung wird nicht aus dem Gameplay kanonisiert. Vor einem OTA-Dossier muss geklärt werden, ob Fusion im betreffenden Stations-/Zeitkontext kanonisch ist und welche Reaktorklasse gemeint ist. |

## Read-only Provenienz der direkt gemappten Module

| NOXIA-ID | sourceDocumentId | canonicalId | objectId | mappingRole |
| --- | --- | --- | --- | --- |
| `solar_array` | `OTA-TEC-0117-2026-DE` | `OTA-TEC-0117-ORBITAL-SOLAR-ARRAY` | `orbital-station-solar-array` | `station-module` |
| `docking_bay` | `OTA-TEC-0118-2026-DE` | `OTA-TEC-0118-ORBITAL-DOCKING-BAY` | `orbital-station-docking-bay` | `station-module` |
| `habitat_module` | `OTA-TEC-0119-2026-DE` | `OTA-TEC-0119-ORBITAL-HABITAT` | `orbital-station-habitat-module` | `station-module` |
| `research_lab` | `OTA-TEC-0120-2026-DE` | `OTA-TEC-0120-ORBITAL-RESEARCH-LAB` | `orbital-station-research-lab` | `station-module` |
| `observatory` | `OTA-TEC-0121-2026-DE` | `OTA-TEC-0121-ORBITAL-OBSERVATORY` | `orbital-station-observatory` | `station-module` |

Alle fünf Dossiers sind `ENTWURF`. Die IDs dürfen die Existenz/Typidentität read-only referenzieren; technische Leistungswerte sind noch nicht eingefroren.

## Wasserrecycler

`water_recycler` wird **nicht** mit `OTA-TEC-0034` (Regolith-/Rohwassergewinnung) gleichgesetzt. Der fachlich passende bestehende Anker ist `OTA-TEC-0086`, weil dort Kreislaufwasser aus Grau-/Kondensat-/Prozessströmen behandelt wird. Vor direkter NOXIA-Typbindung soll entschieden werden, ob `OTA-TEC-0086` zur generischen Wasserrecycling-Technologiefamilie erweitert oder eine klar definierte Stationsvariante als eigene technische Identität benötigt wird.

## Reaktor

Der NOXIA-Labelwert „Fusionsreaktor“ ist zunächst nur Spielbezeichnung. Weder Energie/Tick noch die bloße Benennung beweisen eine kanonische Fusionsenergie-Architektur. KUEPER Engineering soll gemeinsam mit OTA/KUE die Technologieklasse und den Zeit-/Stationskontext prüfen, bevor eine `canonicalId` angelegt wird.

## SSF-Lücken

Nur Themenklassen markieren, keine fremden IDs erfinden:

- Photovoltaik und Energieversorgung orbitaler Stationen;
- Docking, Relativnavigation und Druck-/Medienübergabe;
- Habitat-/ECLSS-Systemtechnik;
- Mikrogravitations-/Orbitalforschungslabore;
- Raumobservatorien und Pointing-/Thermikprobleme;
- Wasserrecycling in geschlossenen Habitaten;
- Energieerzeugung/Reaktortechnik nach endgültiger Technologieentscheidung.

## Engineering-Übergabe

Die quantitative Schließung der fünf neuen Modulidentitäten sowie die offenen Entscheidungen zu `command_center`, `water_recycler`, `storage_bay` und `reactor` werden an KUEPER Engineering übergeben. OTA übernimmt spätere technische Werte oder neue Identitäten ausschließlich über Canonicalization-/Decision-Request.
