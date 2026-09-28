---
signature: "OTA-META-0007-2091-DE"
title: "Iterius Prime Spatial Graph v0.1"
series: "META"
seriesNumber: 7
year: 2091
language: "DE"
version: "v0.1"
status: "ENTWURF"
accessLevel: 0
epistemicStatus: ["F", "W", "OFFEN"]
universe: ["NOXIA", "Generation Mars"]
tags: ["Iterius Prime", "Mars", "Spatial Graph", "Lavatubes", "2091", "Knowledge Graph"]
relatedDocuments: ["OTA-META-0006-2091-DE", "OTA-HIS-0010-2040-DE", "OTA-META-0005-2091-DE", "OTA-HIS-0009-2091-DE"]
summary: "Erster quellennaher räumlicher Graph von Iterius Prime 2091 mit kanonischen Romanankern und minimalen provisorischen Verbindungsknoten."
---

# Iterius Prime Spatial Graph v0.1

**Stand:** 28. September 2026  
**Zielzustand:** Iterius Prime, 2091  
**Umfang:** 32 Knoten  
**Regel:** Romanbeleg vor OTA-Arbeitsmodell; notwendige Ergänzungen bleiben [P].

## 1. Quellenkorrekturen vor dem Graph

Die aktuelle Fassung von *Generation Mars* setzt:

- Iterius Prime: ca. 5.000 Einwohner und ein Labyrinth über Dutzende Ebenen [K].
- öffentliche Querschnittsklassifikation: Level 1–4 Wohnen; 5–8 Arbeit/Bildung/Verwaltung; 9–12 Infrastruktur; 13–15 Spezialsektoren; Level 16+ ausgegraut/klassifiziert [K].
- Mars-Akademie / Mars-Earth Joint Curriculum Institute: Sektor E-3, ca. 180 m [K].
- Beobachtungsplattform: Level 2, ca. 80 m [K].
- Sektor C-7, Unit 23-B, Level 14: ca. 820 m; Hauptkorridor 8 m breit, 3 m hoch, natürliche Basaltdecke [K].
- natürliche Hohlräume/Lavaröhren wurden 2072 entdeckt; das Geflecht zieht durch diese alten Lavaröhren [K im aktuellen Manuskript].
- B-8-Wohnung Dela Cruz: **Level 12**, nicht Level 8 [K]. Frühere OTA-Angabe „B-8/Level 8“ ist zu korrigieren.
- Alpha = Oberfläche; Beta und Gamma werden im Text als Hauptsektoren beschrieben [K].
- Omega-7 = altes Sektor-7-Tief, nach 2087 umklassifiziert [K].
- öffentlich zugängliche Pläne reichen bis Level 12; darunter werden offiziell u. a. Geothermie, Wasseraufbereitung und Wartungstunnel genannt; Level 16+ Forschungsanlagen [K als In-Universe-Auskunft, nicht automatisch vollständige Wahrheit].

## 2. Knotenschema

Jeder Knoten erhält:
`id | name | layer | sector | level/depth | type | origin | access | status`

Origin:
- ARTIFICIAL
- NATURAL
- HYBRID

Status:
- [K] direkt im Roman beziehungsweise expliziter Weltenkanon
- [P] notwendige räumliche Rekonstruktion
- [O] offen

## 3. Knoten

| ID | Name | Layer | Sektor / Tiefe | Typ | Origin | Zugang | Status |
|---|---|---|---|---|---|---|---|
| IP-001 | Iterius Prime Alpha | L0 | Oberfläche | SURFACE_PORT | ARTIFICIAL | kontrolliert | [K/P] |
| IP-002 | Landing Pad 3 | L0 | Alpha | SURFACE_PORT | ARTIFICIAL | kontrolliert | [K] |
| IP-003 | Empfangshalle | L1 | nahe Ankunftssystem | TRANSIT_NODE | ARTIFICIAL | öffentlich | [K] |
| IP-004 | Alpha Fracht-/Logistikknoten | L0/L1 | Alpha | FREIGHT_NODE | ARTIFICIAL | Betrieb | [P] |
| IP-005 | Alpha Robotik-/Außenservice | L0/L1 | Alpha | ROBOTICS | ARTIFICIAL | Betrieb | [P] |
| IP-006 | Beobachtungsplattform | L1 | Level 2 / ~80 m | PUBLIC/OBSERVATION | HYBRID | öffentlich | [K] |
| IP-007 | Hauptaufzugsknoten Alpha | L1–L5 | vertikal | TRANSIT_NODE | ARTIFICIAL | öffentlich/gestuft | [P] |
| IP-008 | B-8 Wohncluster | L2 | Level 12 | RESIDENTIAL_CLUSTER | ARTIFICIAL/HYBRID | Bewohner/Gäste | [K] |
| IP-009 | Dela-Cruz-Wohnung | L2 | B-8 / Level 12 | HABITAT | ARTIFICIAL | privat | [K] |
| IP-010 | B-12 Wohncluster | L2 | Sektor B-12 | RESIDENTIAL_CLUSTER | ARTIFICIAL/HYBRID | Bewohner | [K] |
| IP-011 | Keiko-Wohnraum | L2 | B-12 | HABITAT | ARTIFICIAL | privat | [K] |
| IP-012 | C-4 Wohn-/Gastbereich | L2 | Sektor C-4 | RESIDENTIAL_CLUSTER | HYBRID | Bewohner/Gäste | [K] |
| IP-013 | C-7 Tiefenwohnsektor | L4/L5 | Level 14 / ~820 m | RESIDENTIAL_CLUSTER | HYBRID | Bewohner | [K] |
| IP-014 | C-7 Unit 23-B | L4/L5 | Level 14 / ~820 m | HABITAT | ARTIFICIAL in NATURAL | privat | [K] |
| IP-015 | C-7 Hauptkorridor | L4/L5 | Level 14 / ~820 m | LAVA_TUBE_SEGMENT | HYBRID | öffentlich | [K] |
| IP-016 | D-2 Gast-/Wohncluster | L2 | Sektor D-2 / ~420-m-Kontext | RESIDENTIAL_CLUSTER | HYBRID | Bewohner/Gäste | [K/P] |
| IP-017 | Kimura–Obi-Quartier | L2 | D-2 | HABITAT | ARTIFICIAL | privat | [K] |
| IP-018 | Mars-Earth Joint Curriculum Institute | L2 | E-3 / ~180 m | EDUCATION | ARTIFICIAL/HYBRID | öffentlich | [K] |
| IP-019 | Akademie-Verkehrsknoten E-3 | L2 | ~180 m | TRANSIT_NODE | ARTIFICIAL | öffentlich | [P] |
| IP-020 | Iterius Prime Medical Center | L2/L3 | Tiefe offen | MEDICAL | ARTIFICIAL | öffentlich/kontrolliert | [K] |
| IP-021 | 1-g-Trainingszentrifuge | L3 | Medical Center | MEDICAL | ARTIFICIAL | medizinisch | [K] |
| IP-022 | Hydroponik-Dome 5 | L2/L3 | Lage offen | FOOD/HYDROPONICS | ARTIFICIAL | Betrieb | [K] |
| IP-023 | Infrastrukturband Level 9–12 | L3 | Level 9–12 | LIFE_SUPPORT/UTILITY | ARTIFICIAL/HYBRID | kontrolliert | [K/P] |
| IP-024 | Wasseraufbereitung | L3/L5 | unter Level 12, genaue Lage offen | WATER | ARTIFICIAL | Betrieb | [K: öffentlich ausgewiesen] |
| IP-025 | Geothermie-Anlagen | L5 | unter Level 12, genaue Lage offen | ENERGY | ARTIFICIAL | Betrieb/gesperrt | [K: öffentlich ausgewiesen] |
| IP-026 | Wartungstunnelnetz | L3/L5 | unter Level 12 | SERVICE | HYBRID | Betrieb | [K] |
| IP-027 | Lavatube-Hauptgeflecht | L4 | mehrere Tiefen | LAVA_TUBE_NETWORK | NATURAL/HYBRID | gemischt | [K] |
| IP-028 | Lavatube-Werkstattzone | L4 | genaue Lage offen | WORKSHOP | HYBRID | Betrieb | [K: Weltenkanon / O Geometrie] |
| IP-029 | Lavatube-Laborzone | L4/L5 | genaue Lage offen | LAB | HYBRID | kontrolliert | [K: Weltenkanon / O Geometrie] |
| IP-030 | Sektor-7-Tief | L5/L6 | tiefer Spezialbereich | RESTRICTED_FACILITY | HYBRID | historisch/gesperrt | [K] |
| IP-031 | Omega-7 | L6 | ehemaliges Sektor-7-Tief | RESTRICTED_FACILITY | HYBRID | klassifiziert | [K] |
| IP-032 | Level-16+-Forschungszone | L6 | Level 16+ | RESTRICTED_FACILITY | HYBRID | klassifiziert | [K: Existenz/Forschungsangabe; O Inhalt] |

## 4. Kernkanten v0.1

| Von | Nach | Relation | Status |
|---|---|---|---|
| IP-002 | IP-001 | PART_OF | [K/P] |
| IP-001 | IP-003 | CONNECTED_TO | [P] |
| IP-001 | IP-004 | CONNECTED_TO | [P] |
| IP-004 | IP-005 | SERVES | [P] |
| IP-003 | IP-007 | CONNECTED_TO | [P] |
| IP-007 | IP-006 | CONNECTED_TO | [P] |
| IP-007 | IP-018 | CONNECTED_TO | [P] |
| IP-018 | IP-019 | PART_OF | [P] |
| IP-019 | IP-012 | PERSON_ROUTE | [K/P: ~5 min Lift vs ~20 min Fußweg E-3↔C-4-Kontext] |
| IP-007 | IP-008 | CONNECTED_TO | [P] |
| IP-008 | IP-009 | CONTAINS | [K] |
| IP-007 | IP-010 | CONNECTED_TO | [P] |
| IP-010 | IP-011 | CONTAINS | [K] |
| IP-007 | IP-016 | CONNECTED_TO | [P] |
| IP-016 | IP-017 | CONTAINS | [K] |
| IP-020 | IP-021 | CONTAINS | [K] |
| IP-023 | IP-024 | SERVES | [K/P] |
| IP-023 | IP-025 | SERVES | [K/P] |
| IP-023 | IP-026 | CONNECTED_TO | [K/P] |
| IP-027 | IP-013 | CONTAINS/INTERSECTS | [K] |
| IP-013 | IP-014 | CONTAINS | [K] |
| IP-013 | IP-015 | CONTAINS | [K] |
| IP-027 | IP-028 | CONTAINS | [K/O geometry] |
| IP-027 | IP-029 | CONTAINS | [K/O geometry] |
| IP-026 | IP-027 | CONNECTED_TO | [P] |
| IP-027 | IP-030 | GEOLOGICAL_CONTINUATION | [P] |
| IP-030 | IP-031 | REPURPOSED_AS | [K] |
| IP-031 | IP-032 | CONNECTED_TO | [P/O] |

## 5. Semantische Regeln

### 5.1 Level ≠ Tiefe

Levelnummern dürfen nicht linear in Meter umgerechnet werden. Der Roman kombiniert Level 2/~80 m, E-3/~180 m, einen 420-m-Wohnkontext und C-7 Level 14/~820 m. Das ist als sektorabhängiges 3D-Netz zu behandeln.

### 5.2 Lavatube ≠ vollständig druckbeaufschlagte Höhle

Ein natürlicher Tube-Abschnitt kann:
- einen eingestellten Druckkörper enthalten;
- als ausgekleideter Druckabschnitt dienen;
- Werkstatt/Lager/Labor aufnehmen;
- lediglich als geschützter Trassenraum dienen;
- unerschlossen bleiben.

### 5.3 Sektoren und Level sind orthogonal

B-8, B-12, C-4, C-7, D-2 und E-3 werden nicht als „Levelnummern“ gelesen. Die Sektorbezeichnung beschreibt einen räumlich-administrativen Bereich; Level beschreibt eine lokale vertikale/operative Einordnung.

### 5.4 Alpha/Beta/Gamma/Omega

Der Roman sagt aus Figurenperspektive: Alpha = Oberfläche, Beta/Gamma = Hauptsektoren, Omega = tief/Forschung. Daraus wird noch keine vollständige A–E-Nomenklatur konstruiert. B/C/D/E sind belegt; ihre Gesamtfunktion bleibt teilweise offen.

## 6. Konflikte und Korrekturen

### B-8
Aktueller Manuskriptbeleg: **Sektor B-8, Level 12**. Alle OTA-Stellen mit „B-8 / Level 8 / 420 m“ müssen getrennt geprüft werden. Die 420-m-Angabe ist im aktuellen Manuskript für Kaelens Quartier-/Korridorkontext belegt, aber nicht im gefundenen Text eindeutig B-8 zugeordnet.

### Lavatubes 2072
Das Manuskript sagt ausdrücklich, dass die natürlichen Hohlräume 2072 entdeckt wurden und das Tunnelgeflecht durch alte Lavaröhren verläuft. Diese Aussage kollidiert mit älteren Audits, die eine pauschale 2069/2072-Lavatube-Historie aus OTA-ORG-0002 zunächst zurückgestuft hatten. Für v0.1 gilt der aktuelle Romantext als stärkere Quelle; die genaue Entdeckungsgeschichte wird separat geprüft.

### Geothermie
Die Existenz von als Geothermie-Anlagen bezeichneten unteren Anlagen ist im Roman belegt. Daraus folgt **keine** Übernahme der alten OTA-Behauptung „70 % Geothermie“.

## 7. Noch absichtlich nicht erfunden

v0.1 legt nicht fest:
- genaue Position des Medical Centers;
- Lage von Hydroponik-Dome 5;
- genaue Tube-Topologie;
- Zahl/Volumen bewohnter Tubes;
- zusätzliche Landing Pads;
- Energieanteile;
- konkrete Personentransporttechnik;
- Lage des Mars Council;
- exakte Verbindung Omega-7 ↔ Level 16+;
- globale Sektorgrenzen.

## 8. Nächste Version v0.2

v0.2 soll:
1. sämtliche Ortsnennungen in *Generation Mars Band 1* vollständig extrahieren;
2. Knoten mit Kapitel-/Szenenprovenienz versehen;
3. Lauf-/Liftzeiten als Graphrestriktionen nutzen;
4. Lavatube-Segmente als echte natürliche Geometrieebene ergänzen;
5. Konflikte gegen OTA-BIO/RED/TEC/ORG prüfen;
6. erst danach fehlende Werkstatt-, Lager-, Versorgungs- und Wohnknoten ergänzen.

## 9. Kanonregel

Der Graph ist ein **Konsistenzmodell**, keine vollständige Stadtbeschreibung. Ein [P]-Knoten darf nicht allein deshalb Roman-Kanon werden, weil er für die Graphverbindung praktisch ist.
