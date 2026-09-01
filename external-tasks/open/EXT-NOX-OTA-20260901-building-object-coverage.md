---
id: EXT-NOX-OTA-20260901-BUILDING-OBJECT-COVERAGE
title: NOXIA-Gebäude gegen OTA-TEC-Objektdossiers abgleichen und Provenienz-Mappings liefern
status: open
source: NOXIA
target: OTA
created: 2026-09-01
requested_by: noxiagame
priority: high
affects: [NOXIA, OTA, KG]
---

## Anlass

NOXIA besitzt inzwischen einen maschinenlesbaren Technical-Coverage-Katalog. Für technische Spielobjekte gilt:

- NOXIA bleibt Source of Truth für Spielwerte, Balancing, Build-Time, Produktion, Unlocks und Runtime-Zustände.
- OTA bleibt Source of Truth für technische/canonische Objektdossiers.
- NOXIA darf OTA-IDs nicht erfinden.
- Eine fehlende NOXIA-Provenienzbindung bedeutet nicht automatisch, dass im OTA kein Dossier existiert.

Der aktuelle Gebäudekatalog liegt in `noxiagame/lib/game/buildings/index.ts`.

Ein bestehendes Beispiel für die gewünschte Bindung ist `water_recycler` mit `externalTechnicalObject` auf den Mars-Wasserextraktor.

## Ziel

Bitte alle unten genannten NOXIA-Gebäudetypen gegen bestehende OTA-TEC-Dossiers prüfen und für jeden Typ einen belastbaren Mapping-Status liefern.

Reihenfolge je Objekt:

1. Prüfen, ob bereits ein passendes OTA-TEC-Dossier existiert.
2. Falls ja: vorhandene `sourceDocumentId`, `canonicalId`, stabile `objectId` und geeignete Mapping-Rolle liefern.
3. Falls mehrere NOXIA-Objekte auf dasselbe technische OTA-Objekt bzw. auf unterschiedliche technische Varianten desselben Grundprinzips abbilden, diese Entscheidung explizit dokumentieren.
4. Nur wenn tatsächlich kein passendes technisches Objekt existiert: neues OTA-TEC-Dossier nach dem eingefrorenen Objekt-Dossier-Schema anlegen.
5. Keine NOXIA-Balancingwerte in OTA-Kanon übernehmen.

## NOXIA-Objekte ohne aktuelle Provenienzbindung

### Bestehende allgemeine Gebäudetypen

- `mine` — Mine
- `solar` — Solarfeld
- `factory` — Fabrik
- `laboratory` — Labor
- `ice_drill` — Eisbohrung
- `habitat` — Habitat
- `residential_block` — Wohnblock
- `road` — Straße
- `school` — Akademie
- `bank` — Bank
- `scanner` — Scanner

### Geplante Gebäudetypen

- `warehouse` — Warenhaus
- `admin` — Verwaltung
- `smelter` — Schmelze
- `bar` — Bar
- `oxygen_recycler` — O₂-Recycler

### Tharsis-Hub-Startkolonie

Diese Gruppe referenziert in NOXIA bereits den technischen OTA-Bereich `OTA-TEC-0094-2026-DE` bis `OTA-TEC-0107-2026-DE`. Hier ist daher ausdrücklich zuerst Mapping/Reconciliation gefragt, nicht die Erzeugung neuer Dossiers.

- `habitat_cluster` — Habitatcluster
- `eclss_hub` — Regionaler ECLSS-/Utility-Hub
- `reactor_module` — Reaktormodul
- `black_start` — Black-Start-/Speicherknoten
- `water_isru` — Wasser-ISRU-/Aufbereitungskomplex
- `radiator_field` — Radiatorfeld
- `medical_core` — Medical-Core-Komplex
- `medical_annex` — Emergency Medical Annex
- `reserve_depot` — Strategisches Reserve-Depot
- `plant_module` — Frischproduktions-/Pflanzenmodul
- `logistics_hub` — Logistik-/Frachtumschlag-Hub
- `workshop_clean` — Werkstatt Elektronik/Präzision/ECLSS
- `workshop_heavy` — Werkstatt Mechanik/Fertigung/Bau
- `material_complex` — Material-/Reststoff-Komplex
- `command_node` — Command-&-Control-Knoten
- `surface_relay` — Oberflächen-Relay-/Navigationspunkt
- `longrange_comms` — Langstrecken-Kommunikationsstation
- `landing_pad` — Landeplatz

## Abgrenzung

Nicht Bestandteil dieses OTA-Auftrags:

- Kosten
- Build-Ticks
- Produktionsmengen
- Population-Boni
- Unlock-Regeln
- UI-Overlays
- NOXIA-spezifische Balancingwerte

Diese bleiben ausschließlich im NOXIA-Repository.

## Gewünschtes Ergebnis

Für jeden NOXIA-Key mindestens:

```yaml
noxiaId: habitat_cluster
status: mapped | no_existing_dossier | ambiguous
sourceDocumentId: DOC:OTA:...
canonicalId: OTA-TEC-...
objectId: ...
mappingRole: buildable | reference
notes: ...
```

Bei `no_existing_dossier` bitte das neue Dossier im OTA anlegen und anschließend den endgültigen Mapping-Datensatz liefern.

## Abnahme

Erledigt, wenn alle oben genannten NOXIA-Gebäudetypen entweder:

1. auf ein belastbares OTA-Objekt gemappt sind,
2. als fachlich nicht-technisches Objekt begründet ausgenommen wurden,
3. oder nach nachgewiesener Lücke ein neues OTA-TEC-Dossier erhalten haben.

NOXIA übernimmt anschließend ausschließlich die Provenienz-Metadaten; die technische Wahrheit verbleibt im OTA.