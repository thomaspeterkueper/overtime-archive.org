# NOXIA ↔ OTA Building Object Coverage

Stand: 2026-09-01  
Request: `EXT-NOX-OTA-20260901-BUILDING-OBJECT-COVERAGE`  
Status: reconciliation in progress

## Governance

Dieser Abgleich erzeugt **keine neuen technischen Kanonwerte** und **keine erfundenen Fremd- oder Shared-IDs**.

- NOXIA bleibt Source of Truth für Spielobjekte, Kosten, Bauzeiten, Produktionswerte, Unlocks, Progression und Runtime-Verhalten.
- OTA bleibt Source of Truth für technische/technikhistorische Dossiers und Systemgrenzen.
- KUEPER Knowledge Graph bleibt Source of Truth für geteilte Identitäten.
- `sourceDocumentId` verweist auf das zuständige OTA-Dossier.
- `canonicalId` verwendet die bereits vorhandene OTA-Dokumentsignatur, solange keine separat kanonisierte technische Objektidentität existiert.
- `objectId` bleibt `null`, wenn keine bestehende separat kanonisierte Objekt-ID nachgewiesen ist. Eine ID wird nicht nur für diesen Abgleich erfunden.
- `mappingRole: reference` bedeutet: Das NOXIA-Objekt ist eine spielseitige Konkretisierung/Komponente eines breiteren OTA-Systemdossiers. Das Dossier wird dadurch nicht zu einem NOXIA-Balancingdatensatz.

## Tharsis-Hub-Objekte

Die Phase-2-Dossiers `OTA-TEC-0094-2026-DE` bis `OTA-TEC-0107-2026-DE` wurden ausdrücklich als technische Objektgrenzen für Tharsis Hub erstellt. Die folgende Zuordnung ist daher dokumentarischer Provenienzabgleich, keine neue technische Setzung.

| NOXIA key | status | sourceDocumentId | canonicalId | objectId | mappingRole | notes |
|---|---|---|---|---|---|---|
| `habitat_cluster` | mapped | `OTA-TEC-0097-2026-DE` | `OTA-TEC-0097-2026-DE` | null | reference | Habitatcluster und Drucksegmente; sechs Cluster / Safe-Haven-Architektur bereits OTA-seitig gesetzt. |
| `eclss_hub` | mapped | `OTA-TEC-0096-2026-DE` | `OTA-TEC-0096-2026-DE` | null | reference | Drei regionale ECLSS-Knoten; NOXIA-Spielwerte bleiben lokal. |
| `reactor_module` | mapped | `OTA-TEC-0094-2026-DE` | `OTA-TEC-0094-2026-DE` | null | reference | Reaktormodule sind Komponenten des Primärenergie-/Black-Start-Systems. |
| `black_start` | mapped | `OTA-TEC-0094-2026-DE` | `OTA-TEC-0094-2026-DE` | null | reference | Drei getrennte Black-Start-/Speicherknoten im Dossier. |
| `water_isru` | mapped | `OTA-TEC-0095-2026-DE` | `OTA-TEC-0095-2026-DE` | null | reference | Drei unabhängige Wassergewinnungs-/Aufbereitungsstränge. |
| `radiator_field` | mapped | `OTA-TEC-0098-2026-DE` | `OTA-TEC-0098-2026-DE` | null | reference | Thermalkontrolle und verteilte Radiatorfelder. |
| `medical_core` | mapped | `OTA-TEC-0099-2026-DE` | `OTA-TEC-0099-2026-DE` | null | reference | Medizinischer Kern mit getrennten klinischen Zellen. |
| `medical_annex` | mapped | `OTA-TEC-0099-2026-DE` | `OTA-TEC-0099-2026-DE` | null | reference | Emergency Annex ist Bestandteil derselben medizinischen Systemgrenze. |
| `reserve_depot` | mapped | `OTA-TEC-0100-2026-DE` | `OTA-TEC-0100-2026-DE` | null | reference | Nahrung/Vorräte; strategische Lagerdomänen. Für allgemeine Lagertechnik zusätzlich `OTA-TEC-0102`. |
| `plant_module` | mapped | `OTA-TEC-0100-2026-DE` | `OTA-TEC-0100-2026-DE` | null | reference | Frischproduktion; ausdrücklich nicht Überlebensbasis der 30-Tage-Reserve. |
| `logistics_hub` | mapped | `OTA-TEC-0102-2026-DE` | `OTA-TEC-0102-2026-DE` | null | reference | Logistik- und Lagerkern. |
| `workshop_clean` | mapped | `OTA-TEC-0101-2026-DE` | `OTA-TEC-0101-2026-DE` | null | reference | Präzisions-/Elektronik-/ECLSS-Werkstatt als NOXIA-Konkretisierung. |
| `workshop_heavy` | mapped | `OTA-TEC-0101-2026-DE` | `OTA-TEC-0101-2026-DE` | null | reference | Mechanik/Fertigung/Bau als NOXIA-Konkretisierung. |
| `material_complex` | mapped | `OTA-TEC-0107-2026-DE` | `OTA-TEC-0107-2026-DE` | null | reference | Reststoff- und Materialrückgewinnung. |
| `command_node` | mapped | `OTA-TEC-0106-2026-DE` | `OTA-TEC-0106-2026-DE` | null | reference | Lokale Systemkontrolle ohne alleinigen Master. |
| `surface_relay` | mapped | `OTA-TEC-0106-2026-DE` | `OTA-TEC-0106-2026-DE` | null | reference | Kommunikation/Navigation, lokale Relays. |
| `longrange_comms` | mapped | `OTA-TEC-0106-2026-DE` | `OTA-TEC-0106-2026-DE` | null | reference | Redundante Langstreckenkommunikation. |
| `landing_pad` | mapped | `OTA-TEC-0102-2026-DE` | `OTA-TEC-0102-2026-DE` | null | reference | Lande-/Frachtübergang ist Teil der Außenlogistik; Fahrweganbindung zusätzlich durch `OTA-TEC-0104`. |

### Tharsis Querschnittsdossiers

Diese Dossiers werden nicht als einzelnes Gebäude gemappt, bleiben aber verbindliche technische Referenzen des Startlayouts:

- `OTA-TEC-0103-2026-DE` — Oberflächenfahrzeug-Funktionsklassen.
- `OTA-TEC-0104-2026-DE` — Fahrwege und Außenlogistik.
- `OTA-TEC-0105-2026-DE` — redundante Mediennetze und Versorgungskorridore.

## Allgemeine NOXIA-Gebäude

| NOXIA key | status | sourceDocumentId | canonicalId | objectId | mappingRole | notes |
|---|---|---|---|---|---|---|
| `mine` | no_existing_dossier | null | null | null | buildable | Das Dossier-Schema nennt `BLD:NOX:mine-1` ausdrücklich als Kandidaten; ein ausgearbeitetes Mine-Dossier wurde im Bestand nicht nachgewiesen. Nicht mit Materialrückgewinnung (`0107`) gleichsetzen. |
| `solar` | no_existing_dossier | null | null | null | buildable | `0094` erlaubt Solar nur als Ergänzung der Tharsis-Energiearchitektur; es ist kein Solarfeld-Dossier. Schema nennt `BLD:NOX:solarfeld-1` als eigenen Kandidaten. |
| `factory` | ambiguous | `OTA-TEC-0101-2026-DE` | `OTA-TEC-0101-2026-DE` | null | reference | Lokale Fertigung ist technisch abgedeckt, aber eine generische NOXIA-Fabrik ist breiter als die Tharsis-Werkstatt. Vor Buildable-Provenienz eigenes Dossier oder explizite Generalisierung nötig. |
| `laboratory` | no_existing_dossier | null | null | null | buildable | Kein passendes allgemeines Labor-/Analysegebäude-Dossier nachgewiesen. Medizin- oder Werkstattdossiers sind keine semantisch saubere Ersatzidentität. |
| `ice_drill` | ambiguous | `OTA-TEC-0095-2026-DE` | `OTA-TEC-0095-2026-DE` | null | reference | `0095` deckt Wassergewinnung/ISRU ab, aber nicht automatisch jede Mond-/Mars-Eisbohrung als eigenständiges technisches Objekt. |
| `water_recycler` | mapped | `DOC:OTA:OTA-TEC-0034-2026-DE` | `OTA-TEC-0034-WEX-M` | `wasserextraktor-mars-typ-m` | buildable | Bereits im NOXIA-Baukatalog als technische Provenienz hinterlegt. |
| `habitat` | ambiguous | `OTA-TEC-0097-2026-DE` | `OTA-TEC-0097-2026-DE` | null | reference | Tharsis-Habitatcluster sind abgedeckt; das generische NOXIA-`habitat` ist nicht automatisch identisch. Das OTA-Schema führt `BLD:NOX:mars-habitat-1` als eigenen Pilotkandidaten. |
| `residential_block` | ambiguous | `OTA-TEC-0097-2026-DE` | `OTA-TEC-0097-2026-DE` | null | reference | Wohnfunktion ist referenzierbar; ein generischer Erd-/Mars-Wohnblock besitzt kein nachgewiesenes eigenes Dossier. |
| `road` | mapped | `OTA-TEC-0104-2026-DE` | `OTA-TEC-0104-2026-DE` | null | reference | Fahrwege/Außenlogistik technisch abgedeckt; NOXIA-Kosten/Tile-Regeln bleiben lokal. |
| `school` | nontechnical_exception | null | null | null | reference | NOXIA-`school` ist primär Academy-/Wissensinterface. Kein technisches Dossier erforderlich, solange kein konkretes Bauwerks-/Anlagenmodell beansprucht wird. |
| `bank` | nontechnical_exception | null | null | null | reference | Primär Wirtschafts-/Service-Gameplay; kein technischer Kanonanspruch. |
| `scanner` | no_existing_dossier | null | null | null | buildable | Scanner besitzt Gameplay-/Messsemantik, aber kein nachgewiesenes OTA-TEC-Gerätedossier. Ground Truth/Messung/Interpretation dürfen nicht durch ein ad-hoc Dossier vermischt werden. |
| `warehouse` | mapped | `OTA-TEC-0102-2026-DE` | `OTA-TEC-0102-2026-DE` | null | reference | Lager-/Logistikkern bietet eine tragfähige technische Referenz; NOXIA-`warehouse` bleibt generische Spielausprägung. |
| `admin` | nontechnical_exception | null | null | null | reference | Verwaltungsfunktion ist zunächst Governance-/Gameplay-Service, kein technischer Objektkanon. |
| `smelter` | ambiguous | `OTA-TEC-0101-2026-DE` | `OTA-TEC-0101-2026-DE` | null | reference | Fertigung als Kontext vorhanden; metallurgischer Prozess ist nicht ausreichend spezifisch dokumentiert. |
| `bar` | nontechnical_exception | null | null | null | reference | Sozial-/Zufriedenheits-Service; kein technisches Dossier erforderlich ohne konkreten Technikanspruch. |
| `oxygen_recycler` | mapped | `OTA-TEC-0096-2026-DE` | `OTA-TEC-0096-2026-DE` | null | reference | Atmosphären-/ECLSS-Verbund ist sachlich zuständig; konkrete NOXIA-Produktions-/Verbrauchseffekte bleiben Spielwerte. |

## Verifizierte Dossier-Lücken

Folgende technische Buildables dürfen **noch nicht** mit einer erfundenen OTA-Identität versehen werden:

1. `mine` — Rohstoffgewinnungsanlage/Mine.
2. `solar` — Solarfeld/Energieerzeugung.
3. `laboratory` — allgemeines Labor-/Analyse-/Forschungsgebäude.
4. `scanner` — Mess-/Scannergerät bzw. Scanner-Infrastruktur.

Zusätzlich brauchen `factory`, `ice_drill`, `habitat`, `residential_block` und `smelter` eine Governance-Entscheidung, ob ein vorhandenes Systemdossier als allgemeine Referenz genügt oder ein eigenes Dossier angelegt wird.

## Freigabegrenze für NOXIA

**Bereits freigegeben:** Die 18 Tharsis-Startobjekttypen können ihre technische Provenienz auf die oben angegebenen OTA-Dossiers beziehen. Das ändert keine NOXIA-Spielwerte und kanonisiert keine zusätzlichen Detailparameter.

**Noch blockiert:** Für `mine`, `solar`, `laboratory` und `scanner` darf NOXIA keine scheinbar kanonische OTA-ID erfinden. Dasselbe gilt für die als `ambiguous` markierten generischen Klassen, bis die Generalisierung oder ein eigenes Dossier entschieden ist.

## Nächste Governance-Aktion

Für echte Lücken müssen neue OTA-Dossiers erst nach sauberer OTA/KG-Identitätsvergabe angelegt werden. Bis dahin bleibt der Ursprungsrequest offen. Ein Abschluss ist erst zulässig, wenn diese Lücken entweder durch Dossiers geschlossen oder als ausdrücklich nichttechnische Ausnahme entschieden sind.
