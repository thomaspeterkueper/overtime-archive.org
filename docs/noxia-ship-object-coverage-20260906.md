# NOXIA ↔ OTA Ship Object Coverage

Stand: 2026-09-06
Status: operative Coverage-Entscheidung für `EXT-NOX-OTA-20260831-ship-object-dossiers`

## Grundsatz

NOXIA bleibt Source of Truth für Runtime, Balancing, Kosten, Slots, `baseSpeed`, Unlocks, aktuelle Kapazitäten und konkrete `ShipInstance`-UUIDs. OTA dokumentiert nur technisch-kanonische Typ-/Objektidentitäten. Eine NOXIA-Spielabstraktion wird nicht allein deshalb zu einem OTA-Objekt, weil sie einen Eintrag in `SHIP_MODULES` besitzt.

## Schiffsrahmen

| NOXIA-ID | Name | OTA-Entscheidung | sourceDocumentId | canonicalId | objectId | mappingRole |
| --- | --- | --- | --- | --- | --- | --- |
| `mk1` | Frachter Mk.I | neues OTA-Rahmendossier angelegt | `OTA-TEC-0112-2026-DE` | `OTA-TEC-0112-NOX-SHIP-MK1` | `noxia-ship-frame-mk1` | `ship-frame` |
| `fast` | Schnellfrachter | neues OTA-Rahmendossier angelegt | `OTA-TEC-0113-2026-DE` | `OTA-TEC-0113-NOX-SHIP-FAST` | `noxia-ship-frame-fast` | `ship-frame` |
| `heavy` | Schwerfrachter | neues OTA-Rahmendossier angelegt | `OTA-TEC-0114-2026-DE` | `OTA-TEC-0114-NOX-SHIP-HEAVY` | `noxia-ship-frame-heavy` | `ship-frame` |
| `scout` | Erkundungsschiff | neues OTA-Rahmendossier angelegt | `OTA-TEC-0115-2026-DE` | `OTA-TEC-0115-NOX-SHIP-SCOUT` | `noxia-ship-frame-scout` | `ship-frame` |
| `pioneer` | Pionier-Konstrukteur | neues OTA-Rahmendossier angelegt | `OTA-TEC-0116-2026-DE` | `OTA-TEC-0116-NOX-SHIP-PIONEER-CONSTRUCTOR` | `noxia-ship-frame-pioneer-constructor` | `ship-frame` |

`pioneer` ist ausdrücklich **nicht** identisch mit `OTA-TEC-0092-2026-DE` (cislunares Frühphase-Kombifahrzeug / Pioneer-Klasse).

Alle fünf Rahmendossiers bleiben `ENTWURF`, bis KUEPER Engineering die tatsächlichen Fahrzeugarchitekturen geschlossen hat. Ihre Existenz und technische Rollenidentität dürfen NOXIA bereits read-only referenzieren; technische Leistungswerte dürfen daraus noch nicht abgeleitet werden.

## Technische Schiffsmodule

### A. Spielabstraktionen / noch keine eigenständige OTA-Identität

| NOXIA-ID | Entscheidung | Begründung |
| --- | --- | --- |
| `cargo` | vorerst Spiel-/Interface-Abstraktion | „Frachtmodul“ beschreibt derzeit primär generischen Ladungsraum. Ohne definiertes gemeinsames mechanisches/thermisches Interface und technische Eigenidentität wäre ein OTA-Dossier künstlich. |
| `tank` | vorerst Spiel-/Interface-Abstraktion | „Tankmodul“ bündelt beliebige Fluide. Kryogene, druckbeaufschlagte und andere Tanks wären technisch verschiedene Systeme; aktueller NOXIA-Eintrag ist zu generisch. |
| `scanner` | vorerst Spielabstraktion | Der Sensorausleger steht derzeit nur für `long_range_scan`. Eigenständige Sensorarchitektur und Messprinzip fehlen. |
| `drive_booster` | vorerst Spielabstraktion | Der Bonus `boosted_drive` bzw. ein Gameplay-Geschwindigkeitsfaktor ist keine technische Komponente. Ein echtes Booster-/Antriebsmodul darf erst nach Propulsion-Engineering kanonisiert werden. |

Diese vier Elemente dürfen in NOXIA weiter existieren. OTA liefert dafür aktuell bewusst **keine** `canonicalId`.

### B. Eigenständige technische Kandidaten — neues Dossier erforderlich

| NOXIA-ID | Entscheidung | vorgesehene technische Identität | Nächster Schritt |
| --- | --- | --- | --- |
| `habitat_pod` | neues Dossier erforderlich | druckbeaufschlagtes transportables Habitat-/Crewmodul | Engineering muss Atmosphären-, ECLSS-, Druckkörper-, Docking- und Evakuierungsgrenze definieren |
| `deep_scanner` | neues Dossier erforderlich | tiefen-/depositorientiertes multisensorisches Survey-Modul | Messprinzip, Reichweite, Auflösung, Energie-/Datenbudget und Geometrie technisch schließen |
| `survey_drone` | neues Dossier erforderlich | autonome Kartierungs-/Survey-Drohne | Mobilität, Sensorpaket, Navigation, Kommunikation, Energie und Recovery klären |
| `construction_rig` | neues Dossier erforderlich | modulare Bau-/Manipulationsausrüstung für Standortgründung | Manipulatoren, Werkzeug-/Materialhandling, Bauverfahren, Leistung und Autonomie klären |
| `colony_pod` | neues Dossier erforderlich | transportierbares Gründungs-/Erstversorgungsmodul | Systemgrenze zu Habitat, Vorräten, Energie, ECLSS und Deployment technisch festlegen |

Für diese fünf Kandidaten wird **nicht** aus den aktuellen NOXIA-Werten rückwärts kanonisiert. Bis Engineering ihre technische Eigenidentität bestätigt und quantitativ schließt, werden keine OTA-Dossiernummern vorreserviert.

## Typ vs. Instanz

- OTA-Identitäten beschreiben Schiffsrahmen- und spätere Modultypen.
- `ShipLoadout` bleibt NOXIA-Bauplan/Loadout.
- `ShipInstance.entityId` und `ModuleInstance.entityId` bleiben NOXIA-Runtime-UUIDs und dürfen nicht als OTA-`objectId`, `canonicalId` oder KG-Typidentität benutzt werden.

## SSF-Lücken

Noch keine SSF-IDs erfinden. Als Lernbedarf sind lediglich Themenklassen markiert:

- modulare Raumfahrzeugarchitektur und Payload-Interfaces;
- Massen-/Delta-v-/Antriebstrades;
- Fernerkundung und multispektrale/depositbezogene Sensorik;
- autonome Survey-Drohnen;
- Baurobotik und extraterrestrische Standortgründung;
- druckbeaufschlagte Crew-/Habitatmodule.

## Übergabe an KUEPER Engineering

Die offenen Architekturfragen werden gebündelt an KUEPER Engineering übergeben. Erst nach Engineering-Rückgabe entscheidet OTA, welche der fünf Modulkandidaten eigenständige technische Dossiers erhalten und welche als Funktion/Subkomponente eines Rahmens oder Systems modelliert werden.
