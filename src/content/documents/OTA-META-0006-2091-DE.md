---
signature: "OTA-META-0006-2091-DE"
title: "Iterius Prime — Mehrschichtiger 3D-Stadtgraph"
series: "META"
seriesNumber: 6
year: 2091
language: "DE"
version: "v1.0"
status: "ENTWURF"
accessLevel: 0
epistemicStatus: ["F", "W", "OFFEN"]
universe: ["NOXIA", "Generation Mars"]
tags: ["Iterius Prime", "Mars", "3D-Stadtgraph", "Lavatubes", "Subsurface", "Knowledge Graph"]
relatedDocuments: ["OTA-HIS-0010-2040-DE", "OTA-META-0005-2091-DE", "OTA-SCI-0097-2026-DE", "OTA-HIS-0009-2091-DE"]
summary: "Semantisches Raummodell für Iterius Prime 2091: überlagerte Oberflächen-, Stadt-, Technik-, Lavatube- und Tiefenschichten als Graph statt flacher Karte."
---

# Iterius Prime — Mehrschichtiger 3D-Stadtgraph

**Version:** 1.0  
**Stand:** 28. September 2026  
**Status:** Strukturmodell

## 1. Zweck

Dieses Dokument beschreibt Iterius Prime nicht als Karte, sondern als räumlichen Graphen. Es ist eine kanonnahe Zwischenschicht zwischen Romanwelt, Knowledge Graph und möglichen Projektionen in NOXIAGAME.

Grundregel:

> **Geologie und Geschichte bestimmen die Stadtstruktur; die Darstellung folgt daraus.**

## 2. Schichten

Die Schichten sind semantische Raumklassen, keine gleichmäßig gestapelten Stockwerke.

| ID | Schicht | Typische Nutzung |
|---|---|---|
| L0 | Oberfläche | Landing, Energie, Antennen, Außenlogistik, Robotik |
| L1 | flacher Untergrund | frühe Habitate, öffentliche/medizinische Bereiche, Beobachtung, Verteilung |
| L2 | Stadtgeflecht | Wohnen, Bildung, Verwaltung, Gemeinschaft, Dienstleistungen |
| L3 | technisches Geflecht | Wasser, Luft, Energie, Speicher, Werkstätten, Fracht, Wartung |
| L4 | Lavatube-Geflecht | Wohnen, Labore, Werkstätten, Lager, Technik, natürliche Verbindungen |
| L5 | Tiefengeflecht | Geologie, Tiefenforschung, Spezialanlagen, abgelegene Tube-Systeme |
| L6 | Omega-7 / unbekannte Tiefe | klassifizierte Bereiche, Sektor-7-Erbe, unvollständig erschlossene Räume |

Eine physische Anlage kann mehreren semantischen Schichten angehören.

## 3. Räumliche Koordinaten

Jeder räumliche Knoten soll mindestens tragen:

- lokale/planetare Position, soweit bekannt;
- absolute Elevation, falls bekannt;
- Tiefe unter lokaler Oberfläche;
- Schicht-ID;
- Sektor;
- räumliche Ausdehnung;
- natürlich / künstlich / hybrid;
- Druckzustand;
- Zugangsstatus;
- Bau-/Erschließungszeit;
- Kanonstatus.

**Tiefe unter Oberfläche ist nicht aus Levelnummer abzuleiten.**

## 4. Knotentypen

- SURFACE_PORT
- HABITAT
- RESIDENTIAL_CLUSTER
- MEDICAL
- EDUCATION
- ADMINISTRATION
- LAB
- WORKSHOP
- STORAGE
- LIFE_SUPPORT
- ENERGY
- WATER
- ROBOTICS
- FREIGHT_NODE
- SHAFT
- AIRLOCK
- TRANSIT_NODE
- LAVA_TUBE_CHAMBER
- LAVA_TUBE_SEGMENT
- GEOLOGY_SITE
- RESTRICTED_FACILITY
- UNEXPLORED_VOID

## 5. Kantentypen

- PRESSURIZED_CORRIDOR
- LAVA_TUBE_PASSAGE
- ELEVATOR_SHAFT
- SERVICE_SHAFT
- FREIGHT_ROUTE
- PERSON_ROUTE
- ROBOT_ROUTE
- UTILITY_TRUNK
- AIRLOCK_CONNECTION
- EMERGENCY_ROUTE
- SEALED_CONNECTION
- GEOLOGICAL_CONTINUATION

Kanten besitzen ebenfalls Druckzustand, Kapazität, Zugang, Baujahr und Betriebsstatus.

## 6. Startknoten 2091

### [K] Alpha-7 / Iterius Prime Alpha
Historischer Oberflächen-/Landing-Komplex. Landing Pad 3 ist für das Exchange-Programm belegt. Genaue heutige Ausdehnung offen.

### [K] Mars-Earth Joint Curriculum Institute
Sektor E-3, ca. 180 m unter Oberfläche. Bildungsknoten mit Verbindung zum allgemeinen Stadtverkehr.

### [K] B-8
Wohnbereich, Level 8, ca. 420 m unter Oberfläche.

### [K] B-12
Wohnbereich; Standard-Einzelzimmer 3 × 3 m im Roman belegt.

### [K] D-2
Wohn-/Gastfamilienkontext Dr. Hana Kimura; genaue Funktion des Gesamtsektors offen.

### [K] Beobachtungsplattform
Level 2, ca. 80 m, Ostblick/Glaskuppel.

### [K/P] Omega-7
Nach 2087 umklassifiziertes ehemaliges Sektor-7-Tief. Tatsächliche innere Struktur und Tiefe nur teilweise bekannt.

### [K] Lavatube-System
Unter Iterius existieren natürliche Lavatubes. Erschlossene Segmente gehören zum Stadt- und Lebensraum und enthalten Wohnbereiche, Labore, Werkstätten und technische Infrastruktur. Genaue Topologie offen.

## 7. Lavatube-Typisierung

Lavatubes werden nicht als ein einziger Raum modelliert.

- **LT-U** unerschlossen/vermutet
- **LT-S** vermessen, nicht dauerhaft genutzt
- **LT-T** technisch genutzt
- **LT-I** Industrie/Werkstatt/Lager
- **LT-L** Labor/Forschung
- **LT-R** bewohnt/sozial genutzt
- **LT-X** gesperrt/klassifiziert

Ein Tube-Segment kann seinen Typ historisch ändern.

## 8. Historische Dimension

Jeder Knoten und jede Kante besitzt einen Gültigkeitszeitraum. Dadurch kann derselbe Graph Iterius zu verschiedenen Zeitpunkten darstellen:

2040 → Alpha-7  
2050 → Pionierbasis  
2069 → dauerhafte Familiengesellschaft  
2080 → institutionelle Stadt  
2087 → Great-Silence-/Sektor-7-Zustand  
2091 → aktueller Generation-Mars-Zustand

So bleiben Umbauten, Stilllegungen und Umnutzungen sichtbar.

## 9. Knowledge-Graph-Trennung

Der Knowledge Graph soll nicht die Geometrie rendern. Er hält Identität, Beziehungen, Zeit und Bedeutung.

Beispielrelationen:
- LOCATED_IN
- CONNECTED_TO
- BELOW
- ABOVE
- PART_OF
- BUILT_FROM
- EXPANDED_FROM
- REPURPOSED_AS
- SERVES
- RESTRICTED_AFTER
- AFFECTED_BY
- APPEARS_IN

Eine spätere räumliche Projektion kann daraus Karten-, Schnitt- oder Spielansichten erzeugen.

## 10. NOXIAGAME-Projektion

NOXIAGAME darf aus dem Modell ein mehrschichtiges Spielsystem erzeugen. Die konkrete Tile-/Chunk-/Rendering-Implementierung bleibt Verantwortung des Spiels.

Der Universe-Kanon setzt nur:
- welche Räume existieren;
- wie sie verbunden sind;
- welche Funktion/Geschichte sie besitzen;
- welche Geologie zugrunde liegt;
- welchen Zustand sie zu einem Zeitpunkt haben.

Spielmechanik darf diese Geschichte nicht rückwirkend verändern.

## 11. Nächster Ausbau

Als nächstes sind die heutigen Platzhalter A–E nicht pauschal zu erfinden, sondern aus Roman- und OTA-Belegen zu rekonstruieren. Danach werden fehlende Funktionen als [P] ergänzt.

Ziel ist ein erster **Iterius Prime 2091 Spatial Graph v0.1** mit ungefähr 25–40 Knoten, der genügend Struktur für Konsistenzprüfungen liefert, ohne die Stadt künstlich vollständig festzuschreiben.
