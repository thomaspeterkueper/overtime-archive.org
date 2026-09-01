# Tharsis Hub — Engineering Release für NOXIA

**Stand:** 2026-09-01  
**Status:** freigegeben für NOXIA-Ableitung  
**Basis:** OTA-TEC-0094, OTA-TEC-0096, OTA-TEC-0097, OTA-TEC-0098, OTA-TEC-0100, OTA-TEC-0105; SSF Evidenzaudit Minimum Viable Mars Colony 497

## Zweck

Dieses Dokument schließt die fünf noch offenen Engineering-Entscheidungen, die NOXIA nach Phase 2 nicht selbst erfinden soll. Es präzisiert bestehende OTA-Architektur; Spielkosten, Bauzeiten, Tile-Footprints und Balancing bleiben NOXIA-eigen.

## 1. Safe Haven / Evakuierung

**Entscheidung:** Jeder der sechs Habitatcluster erhält einen eigenen geschützten Safe-Haven-/Storm-Shelter-Bereich. Zusätzlich muss die Kolonie eine **clusterübergreifende Evakuierungsreserve von mindestens 84 Personen** besitzen, sodass der vollständige Verlust eines Habitatclusters nicht voraussetzt, dass dessen Bewohner in einen beschädigten Bereich zurückkehren.

Die Reserve darf verteilt realisiert werden. Sie ist keine Forderung nach einem siebten normalen Wohncluster. Zulässig sind freie Notliegeplätze in den fünf übrigen Clustern, Medical/Emergency Annex und dafür ausgewiesene druckfeste Mehrzweckräume.

Für den lokalen Safe Haven gilt: Er muss die jeweilige Clusterbelegung während eines kurzfristigen Strahlungs-/Druck-/Brandereignisses aufnehmen können. Für länger dauernde Evakuierung gilt die kolonieweite 84-Personen-Reserve.

**NOXIA:** `evacuation_capacity >= 84` kolonieweit zusätzlich zur normalen Belegung; Safe-Haven-Funktion an allen sechs Clustern modellieren. Keine zusätzlichen 84 permanenten Wohnplätze erzwingen.

## 2. ECLSS 2-von-3

**Entscheidung:** Die drei regionalen ECLSS-Knoten werden als **2-von-3-Überlebensarchitektur** behandelt.

- Zwei beliebige Regionalstränge müssen gemeinsam den kolonieweiten **kritischen degradierten Betrieb für 497 Personen** tragen können.
- Daraus folgt als Engineering-Untergrenze je Regionalstrang eine Auslegung von **mindestens 50 % des kolonieweiten kritischen Bedarfs**, sinnvoller Zielwert **55–60 %**, damit Alterung, Regelreserve und ungünstige Lastverteilung nicht exakt auf der mathematischen Grenze liegen.
- Die 55–60 % sind eine OTA-Auslegungsreserve, kein heutiger NASA-Leistungswert.
- Lokale Cluster-ECLSS bleiben für Umwälzung, Druckregelung, Sensorik, Isolation und kurzfristigen Inselbetrieb zuständig. Sie ersetzen die Regionalstränge nicht dauerhaft.

**NOXIA:** Drei regionale ECLSS-Objekte; Ausfall eines beliebigen Knotens darf nicht unmittelbar Colony Failure auslösen. Zwei verbleibende Knoten + lokale Clustertechnik ergeben degradierte Betriebsfähigkeit.

## 3. Prozessgase, Abwasser und Thermik

**Entscheidung:** Die bisherige A/B-Logik wird mediumspezifisch präzisiert. Nicht jedes Medium braucht dieselbe physische Topologie.

### Prozessgase / O2

Lebenswichtiges O2 erhält **zwei physisch getrennte Hauptpfade A/B** zu jedem Habitatcluster, mit lokalen Puffern und Absperrung. Andere reaktive oder industrielle Prozessgase dürfen stern-/zonenförmig geführt werden, sofern ein Ausfall nicht kolonieweite Lebenserhaltung beendet. Keine pauschale Dualisierung jeder Industriegasleitung.

### Abwasser

Abwasser erhält **segmentierte Sammelpfade mit mindestens zwei unabhängigen Verarbeitungs-/Umleitungsoptionen**, aber keinen Zwang zu zwei permanent parallel gefüllten Vollringen. Jeder Habitatcluster muss bei Ausfall seines normalen Abwasserpfads isolierbar sein und für einen definierten Notzeitraum lokal puffern können; ein zweiter Transportpfad oder mobile/temporäre Übernahme muss erreichbar sein.

### Thermik

Thermik bleibt **funktional redundant**, aber nicht als identische Kopie jeder Rohrleitung. Kritische Verbraucher besitzen zwei isolierbare Wärmeabfuhrpfade zu getrennten thermischen Domänen. Die fünf Radiatorfelder werden so verschaltet, dass der Verlust eines Feldes und die Isolation eines Leitungssegments bei Lastabwurf beherrscht werden. Niedertemperatur-Habitatwärme und höher temperierte Prozesswärme bleiben getrennte Kreise mit kontrollierten Wärmetauschern.

**NOXIA:** `power`, `data`, `water`, `o2` dürfen als echte duale A/B-Backbones modelliert werden. `wastewater` und `thermal` benötigen explizite Graphredundanz und Bypass/Alternative, aber nicht zwingend zwei geometrisch identische Ringe. Nichtlebenswichtige Prozessgase werden nach Gefahren-/Funktionsklasse modelliert.

## 4. Pflanzenmodul

**Entscheidung:** Das Pflanzenmodul gehört zum staatlichen Startbestand, ist aber **nicht survival-critical**.

Zweck der Startanlage:
- Frischkost und Ernährungsdiversität,
- agronomische Erfahrung und Saatgutpflege,
- psychologische/soziale Funktion,
- kontrollierte Kopplung an CO2-, Wasser- und Wärmeströme.

Die Kolonie muss 30 Tage ohne Ernte des Pflanzenmoduls überleben können. Die strategische Nahrungsreserve bleibt mindestens 27 t lagerfähige Nahrung in drei getrennten Lagerdomänen. Pflanzenwasser/Nährstoffe sind vom Trinkwasser hygienisch getrennt und nur über kontrollierte Schnittstellen rückgekoppelt.

**NOXIA:** Ein staatliches Start-Pflanzenmodul bauen. Ausfall reduziert Frischproduktion/Komfort/Forschung, löst aber innerhalb der 30-Tage-Reserve keinen unmittelbaren Colony-Failure aus.

## 5. Bottom-up-Energieband

**Entscheidung:** Das bestehende OTA-Band wird für NOXIA als **Engineering-Enveloppe**, nicht als wissenschaftlich exakt hergeleiteter Verbrauchswert freigegeben:

- **kritische/degradierte Dauerlast:** 1,5–2,5 MW
- **normaler mittlerer Betriebsbereich:** 3–5 MW
- **betriebliche Spitzen:** 5–8 MW
- **installierte elektrische Nennleistung:** 7–8 MW über sechs Reaktormodule in drei Erzeugungsdomänen
- **Kurzzeitspeicher/Black Start:** 6–10 MWh verteilt auf drei Knoten

Die Last wird in NOXIA nicht aus `Einwohner × kW` berechnet. Verbraucher werden bottom-up in Lastklassen aggregiert:

A. ECLSS, kritische Kühlung, Wasser, Kommunikation, Medizin, Steuerung  
B. Habitat-Grundbetrieb, Lager/Kühlung, normale Logistik  
C. Fertigung, Pflanzenlicht, schwere ISRU-Chargen, nichtkritische Fahrzeugladung

Klasse C ist zuerst abwerfbar, Klasse B teilweise, Klasse A muss im N-1-/degradierten Zustand weiterlaufen. Neue Großverbraucher erweitern die Lastbilanz explizit und dürfen nicht still in einer Pro-Kopf-Pauschale verschwinden.

## Freigabe für NOXIA

Mit diesen Entscheidungen sind die fünf von NOXIA gemeldeten OTA/SSF-Blocker geschlossen.

NOXIA darf jetzt:
1. Safe-Haven-/Evakuierungskapazität modellieren;
2. ECLSS-Ausfalllogik 2-von-3 implementieren;
3. mediumspezifische Utility-Redundanz statt pauschaler Doppelringe verwenden;
4. das Pflanzenmodul als nichtkritisches staatliches Startobjekt setzen;
5. eine bottom-up Lastbilanz innerhalb der freigegebenen Engineering-Enveloppe implementieren.

Weiter offen bleiben nur Detailengineering und Spielbalance: konkrete Rohrdurchmesser, Pumpenleistungen, Radiatorflächen, Reaktormodulleistungen im Einzelnen, Tile-Abstände, Kosten, Bauzeiten und Progression. Diese Punkte blockieren den spielbaren Tharsis-Start nicht.