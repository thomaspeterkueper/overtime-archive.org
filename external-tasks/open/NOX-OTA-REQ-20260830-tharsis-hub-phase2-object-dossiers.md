---
id: NOX-OTA-REQ-20260830-THARSIS-HUB-PHASE2-OBJECT-DOSSIERS
requester: SYS:KUEPER:noxia
target: SYS:KUEPER:ota
priority: high
type: technical-object-dossiers
created: 2026-08-30
updated: 2026-08-30
status: open
affects: [OTA, NOXIA, KG]
requires: [OTA-TEC-0038-2026-DE]
---

# Tharsis Hub — Phase 2: technische Objektdossiers für die staatliche Basiskolonie

## Anlass

`OTA-TEC-0038-2026-DE` hat die kanonische Systemarchitektur für Tharsis Hub mit 497 Bewohnern und mindestens 30 Tagen Resilienz festgelegt. Jetzt müssen daraus die technischen Anlagen- und Infrastrukturklassen abgeleitet werden, bevor NOXIA konkrete Spielobjekte, Stückzahlen, Straßen und Layout festlegt.

Die Dossiers sind nach dem kanonischen `docs/ota-tec-object-dossier-schema.md` zu erstellen. SSF bleibt Source of Truth für reale Evidenzwerte; OTA dokumentiert die Welttechnik; NOXIA bleibt Source of Truth für Spielobjekte und Balance; KG erhält stabile gemeinsame Identitäten und Beziehungen.

## Evidenz-Update 2026-08-30

Eine zusätzliche externe Recherche hat neue Anker und zugleich offene Diskrepanzen zu Energie, Thermalkontrolle, Habitat-NHV, O2/CO2 und Wasser-ISRU geliefert. Diese Angaben sind noch nicht kanonisch.

SSF prüft sie im Auftrag:

`thomaspeterkueper/solarsciencefoundation/external-tasks/open/NOX-SSF-REQ-20260830-external-mars-evidence-audit.md`

Für die betroffenen Dossiers gilt: externe Zahlen nicht ungeprüft als OTA-Parameter übernehmen. Insbesondere Energie-Gesamtlast, Radiatorfläche/-temperatur, NHV vs. Bruttodruckvolumen, Wasser-ISRU-Systemgrenzen und maximale Druck-/Brandsegmentgröße bleiben bis zum SSF-Audit offen bzw. als Annahme gekennzeichnet. Dossiers dürfen parallel strukturell vorbereitet werden; die entsprechenden Dimensionierungswerte sollen nach dem Audit eingesetzt bzw. revidiert werden.

## Leitregel

Die staatliche Startkolonie ist kein fertiger Ort und kein vorgebautes Stadtviertel. Sie enthält nur die technisch und sicherheitsbedingt notwendige Infrastruktur, damit 497 Bewohner unter der in OTA-TEC-0038 festgelegten Architektur funktionieren und mindestens 30 Tage resilient bleiben können.

Keine dekorativen oder nur für späteres Wachstum sinnvollen Objekte als Startbestand festlegen. Notwendige Redundanz ist dagegen Teil des Minimums.

## Phase-2-Dossiers / Anlagenklassen

Bitte die folgenden technischen Klassen zunächst als System-/Objektdossiers ausarbeiten. Mehrere Funktionen dürfen in einem realen Objekt zusammengefasst werden, wenn das technisch plausibler und für die minimale Basiskolonie sinnvoller ist. Die Liste ist daher funktional und ausdrücklich keine Vorgabe für die spätere Gebäudezahl.

1. **Primärenergie- und Black-Start-System**
   - nuklear dominierte Grundlast gemäß OTA-TEC-0038
   - unabhängige Erzeugungsstränge
   - Black-Start, Lastabwurf, kritische Inselnetze
   - Speicher-/Pufferfunktion und optionale solare Ergänzung

2. **Wasser-ISRU und Wasseraufbereitung**
   - lokale Gewinnung/Förderung
   - Rohwasserbehandlung
   - Trink-/Prozesswasser
   - Rückgewinnung und gesicherte Nachspeisung
   - Lager-/Notreserve

3. **Atmosphäre / ECLSS**
   - O2-Erzeugung primär durch Elektrolyse
   - CO2-Abfuhr
   - unabhängiger CO2-basierter O2-Ergänzungs-/Notpfad
   - Feuchte-, Druck- und Spurengaskontrolle
   - hierarchisch verteilte Architektur statt eines einzigen zentralen Lebenserhaltungskerns

4. **Habitatcluster / Drucksegmente**
   - Wohnen, Gemeinschaft, notwendige Arbeitsbereiche
   - regolithgeschützte Bauweise
   - unabhängig isolierbare Druck-/Brandsegmente
   - Storm-Shelter-Funktion
   - Schleusen und sichere Übergänge

5. **Thermisches Kontrollsystem**
   - Wärmesammlung, Transport und Abfuhr
   - räumliche/technische Segmentierung
   - Radiator-/Wärmesenkenlogik
   - Fehlerfallbetrieb kritischer Habitatsegmente

6. **Medizinischer Kern**
   - 24/7 Notfallversorgung
   - Diagnostik, Isolation, chirurgische Stabilisierung, Zahnmedizin, Apotheke
   - technisch notwendige Autonomie bei fehlender Evakuationsmöglichkeit
   - keine Personal-/Sozialarchitektur in diesem Dossier

7. **Nahrung und Vorratssystem**
   - vollständige lagerfähige 30-Tage-Notreserve
   - Grad lokaler Frisch-/Pflanzenproduktion gemäß OTA-TEC-0038
   - Kühl-/Trockenlager, Wasser-/Nährstoffschnittstellen
   - lokale Produktion darf nicht alleinige Kalorienquelle sein

8. **Werkstatt, Ersatzteile und lokale Fertigung**
   - Reparatur kritischer Systeme
   - Ersatzteilbevorratung
   - Metall-/Polymerbearbeitung und plausibler additiver Fertigungsgrad
   - Dekontamination und getrennte technische Abfallströme

9. **Logistik- und Lagerkern**
   - 30-Tage-Reserven
   - Importfracht, Ersatzteile, Verbrauchsstoffe
   - druckbeaufschlagte und unpressurisierte Lagerbereiche
   - Frachtumschlag zwischen Außenbereich und Drucksystem

10. **Oberflächenfahrzeug-Funktionsklassen**
    - druckbeaufschlagter Personen-/Rettungstransport
    - unbemannter Frachttransport
    - Bau-/Erdbewegung
    - Wartung/Bergung
    - EVA-Unterstützung
    - Inspektionsrobotik
    Noch keine NOXIA-Stückzahlen festlegen. Prüfen, welche Funktionen technisch in Mehrzweckfahrzeugen zusammengelegt werden können.

11. **Straßen-, Fahrweg- und Außenlogistiksystem**
    - nur technisch erforderliche befestigte/markierte Fahrwege
    - Lastklassen und Anforderungen durch Fracht-, Rettungs- und Baufahrzeuge
    - Staub, Regolith, Gefälle, Wartung und Kreuzungen
    - keine Stadtstraßenlogik und kein dekoratives Straßennetz
    - Erweiterbarkeit der Basiskolonie berücksichtigen, ohne zukünftige Straßen vorab zu bauen

12. **Mediennetz / Versorgungskorridore**
    - Strom, Daten, Wasser, Abwasser, O2 und Prozessgase
    - räumlich getrennte redundante Pfade
    - Segmentierung/Absperrung und Reparierbarkeit
    - Verhältnis von unterirdischen, oberirdischen und geschützten Trassen
    - ausdrücklich nicht automatisch deckungsgleich mit dem Fahrwegenetz

13. **Kommunikation, Navigation und Systemkontrolle**
    - lokale Kommunikation und Datenrückgrat
    - Außenanlagen-/Fahrzeugnavigation
    - Erde-Mars-Kommunikation als verzögerte externe Verbindung
    - lokale Betriebsfähigkeit ohne Echtzeitunterstützung von der Erde

14. **Reststoff- und Materialrückgewinnung**
    - Grau-/Schwarzwasser
    - organische Stoffe
    - technische Filter/Harze
    - Verpackungen, Metalle, Polymere
    - medizinisch kontaminierte Stoffe
    - Rückgewinnung vor Entsorgung, soweit technisch sinnvoll

## Für jedes Dossier zusätzlich beantworten

- Welche Funktion ist zwingend, welche sicherheitsbedingt redundant?
- Welche Kapazitätsgröße lässt sich bereits aus SSF/OTA ableiten, welche bleibt offen?
- Welche anderen Dossiers sind harte Abhängigkeiten?
- Welche räumliche Distanz oder Trennung ist aus Sicherheitsgründen erforderlich?
- Welche Funktionen können sinnvoll in einem physischen Objekt kombiniert werden?
- Was wäre ein Single Point of Failure und wie wird er vermieden?
- Welche Wartungs- und Ersatzteilanforderungen beeinflussen das spätere NOXIA-Layout?
- Welche Anschlusspunkte/Reserven müssen für spätere Erweiterung vorhanden sein, ohne dafür bereits zusätzliche Anlagen zu bauen?

## Keine vorzeitigen Identitäten

Fehlende KG- oder NOXIA-IDs nicht lokal erfinden. Neue stabile Identitäten gegebenenfalls über den zuständigen KG-/NOXIA-Request anfordern. OTA-Signaturen nach der bestehenden OTA/KG-Governance vergeben.

## Erwartete Rückgabe an NOXIA

Nach Abschluss der Dossiers bitte einen kompakten Ableitungsauftrag an NOXIA erstellen mit:

1. minimal erforderlichen physischen Objekten/Anlagen,
2. technisch notwendigen Stückzahlen bzw. Redundanzgruppen,
3. Kapazitätsbereichen,
4. zwingenden Abständen und räumlichen Trennungen,
5. benötigten Fahrzeug-Funktionsklassen,
6. minimalem Fahrwegenetz,
7. getrenntem Mediennetz,
8. Abhängigkeiten zwischen den Objekten,
9. Kennzeichnung dessen, was im staatlichen Startzustand **nicht** gebaut wird.

Erst diese Rückgabe wird zur Grundlage für den Neuaufbau der NOXIA-Tharsis-Hub-Startkolonie.