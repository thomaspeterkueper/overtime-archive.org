---
signature: "OTA-META-0009-2091-DE"
title: "Iterius Prime — Legacy-Quellenaudit für Spatial Graph"
series: "META"
seriesNumber: 9
year: 2091
language: "DE"
version: "v1.0"
status: "ENTWURF"
universe: ["NOXIA", "Generation Mars"]
relatedDocuments: ["OTA-META-0005-2091-DE", "OTA-META-0007-2091-DE", "OTA-META-0008-2091-DE"]
---

# Iterius Prime — Legacy-Quellenaudit für Spatial Graph

**Stand:** 28. September 2026

## 1. Methode

Priorität:
1. aktuelles Manuskript *Generation Mars Band 1*;
2. konsolidierte aktuelle OTA-HIS/META-Dokumente;
3. ältere OTA-BIO/RED/TEC/ORG-Dossiers nur als Legacy-Quelle.

Ein altes Dokument kann räumlich brauchbare Angaben enthalten, obwohl Chronologie, Bevölkerung oder institutionelle Einordnung inzwischen überholt sind. Solche Angaben werden einzeln bewertet statt das ganze Dokument pauschal zu übernehmen.

## 2. Gefundene Legacy-Dokumentfamilien

Der ältere Archivindex weist u. a. aus:
- OTA-BIO-0009 — Dr. Tayo Dela Cruz; Observatorium Sektor-7-Tief; Gastfamilienkontext.
- OTA-BIO-0010 — Keiko Nakamura; Geburtsort Iterius Prime, Sektor B-12.
- OTA-BIO-0013 — späteres Austausch-/Biografie-Dossier mit Referenzen auf ORG-0002/RED-0020.
- OTA-TEC-0025 — cislunares/Ankunfts- und Transportsystem; referenziert ORG-0002 und RED-0017.
- OTA-ORG-0002 — älteres Iterius-Prime-Dossier.
- OTA-RED-0017 — ältere Omega-7-/Ausfall-Narrativschicht.

Die vollständigen Legacy-DOCX-Inhalte liegen im aktuellen GitHub-Textbestand nicht direkt vor; der Audit trennt deshalb Indexbeleg von Manuskriptbeleg.

## 3. Behalten / bestätigen

### Sektor-7-Tief / Observatorium
Legacy-BIO-0009 verbindet Tayo Dela Cruz mit dem Observatorium Sektor-7-Tief. Das aktuelle Manuskript bestätigt unabhängig Observatorium und Kommunikations-/Relay-Funktion in Sektor-7-Tief. **Räumlicher Kern bleibt [K].**

### B-12 / Keiko
Legacy-BIO-0010 setzt Keiko nach B-12. Das aktuelle Manuskript bestätigt B-12 als Wohnsektor und lokalisiert ihn bei ca. 420 m. **Bleibt [K].**

### Omega-7 als funktional genutzter Bereich
Aktuelles Manuskript: Tayo Dela Cruz arbeitet 2091 für Mars Council Medical Division, Omega-7. Damit darf Omega-7 nicht als vollständig aufgegebener/versiegelter Raum modelliert werden. **[K].**

## 4. Verwerfen oder quarantänisieren

### OTA-ORG-0002
Bereits im META-0005-Audit als veraltet erkannt:
- 30.000 Einwohner 2091 [D];
- Mars Federation als ungeprüfte institutionelle Setzung [C/P];
- Valles-Marineris-Lage [O/C];
- pauschale Lava-Tube-Entdeckung 2069 und systematische Besiedlung 2072 [C/D];
- alte Energieanteile 70/20/10 [D/P];
- drei aktive Pads [P];
- pauschales Maglev-Netz [P/O];
- Medical Center „im Dome“ [C/O].

Keine dieser Angaben darf allein aus ORG-0002 in den Spatial Graph übernommen werden.

### RED-/BIO-Zeitdaten Große Stille
Ältere Fassungen im Manuskript-/Legacy-Komplex verwenden Juni 2087 und 72 Stunden. Der aktuelle Historienkanon hat andere Daten/Dauer. Für den Spatial Graph dürfen aus diesen Fassungen nur räumliche Aussagen extrahiert werden. **Historische Datums-/Dauerwerte [C/D].**

### Sektor A als sozialer Elitensektor
Eine ältere Generation-Mars-Fassung beschreibt Sektor A als Bereich der Ingenieure/Wissenschaftler und Omega-7 als sozial benachteiligten Tiefenraum. Diese Aussage stammt aus einer älteren Romanversion und wird nicht in den aktuellen Graphen übernommen, solange die aktuelle Bandfassung sie nicht bestätigt. **[D/P].**

## 5. Offene räumliche Angaben

### Medical Center
Belegt, aber keine belastbare Lage. Alte Dome-Zuweisung reicht nicht. **[K Existenz / O Lage].**

### Hydroponik-Dome 5
Belegt als Arbeitsplatz Maya Dela Cruz, aber keine belastbare Lage. **[K Existenz / O Lage].**

### Iterius Prime Alpha
Landing Pad 3 und Alpha-Bezeichnung belegt. Umfang des Alpha-Komplexes offen. **[K/P].**

### Omega-7-Zugang
Existenz, Funktion und Klassifikation belegt; konkreter Zugangsweg im bisher geprüften Text nicht. **[O].**

## 6. Lavatube-Audit

Das aktuelle Manuskript ist hier stärker als die alte ORG-Zusammenfassung:
- C-7/Level 14 liegt ca. 820 m tief;
- Hauptkorridor mit natürlicher Basaltdecke;
- das Geflecht verläuft durch alte Lavaröhren;
- Manuskript nennt Entdeckung natürlicher Hohlräume 2072.

Daher gilt:
- **Lavatube-Nutzung [K]**;
- **2072 als Manuskriptangabe [K-source]**, aber historische Einordnung muss gegen Alpha-7-Chronologie geprüft werden;
- alte ORG-Behauptung „Lava tubes discovered 2069, systematically settled 2072“ wird nicht übernommen.

## 7. Konsequenz für Spatial Graph

Der aktuelle 45-Knoten-Graph bleibt bestehen. Keine Legacy-Quelle rechtfertigt derzeit:
- zusätzliche feste Koordinaten;
- Medical-Center-Lage;
- Hydroponik-Dome-Lage;
- Maglev;
- Energieanteile;
- zusätzliche Landing Pads;
- Valles Marineris als Standort;
- 30.000 Einwohner.

Bestätigt werden dagegen B-12, Sektor-7-Tief/Observatorium, Omega-7 als weiterhin funktional genutzter Bereich und die starke Lavatube-Integration.

## 8. Nächster Schritt

Der nächste sinnvolle Schritt ist kein weiteres Auffüllen des Graphen, sondern ein **geometrischer Querschnitt v0.1**, der ausschließlich die belastbaren Tiefen- und Wegeconstraints darstellt. Offene Orte werden darin als unpositionierte Funktionsknoten geführt. Dadurch wird sichtbar, welche Geometrien möglich sind, ohne offene Fragen künstlich zu schließen.
