---
id: NOX-OTA-REQ-20260831-THARSIS-SEED-REVIEW-CLARIFICATIONS
requester: SYS:KUEPER:noxia
target: SYS:KUEPER:ota
priority: high
type: architecture-clarification
created: 2026-08-31
status: open
affects: [OTA, NOXIA, SSF]
requires:
  - OTA-TEC-0038-2026-DE
  - OTA-TEC-0094-2026-DE
  - OTA-TEC-0095-2026-DE
  - OTA-TEC-0096-2026-DE
  - OTA-TEC-0097-2026-DE
  - OTA-TEC-0100-2026-DE
  - OTA-TEC-0104-2026-DE
  - OTA-TEC-0105-2026-DE
---

# Tharsis Hub — Rückfragen aus dem NOXIA Implementierungs-/Layout-Review

NOXIA hat den bestehenden Start-Seed gegen den OTA-Handoff geprüft. Die Objektklassen und Grundzonierung sind weitgehend konsistent, aber mehrere Punkte müssen vor der Layout-Korrektur technisch/kanonisch präzisiert werden.

NOXIA-Review: `noxiagame/docs/reviews/2026-08-31-tharsis-hub-seed-implementation-layout-review.md`

## 1. Utility A/B — Redundanz pro Medium präzisieren

Der aktuelle Seed interpretiert A/B als zwei physisch getrennte Utility-Ringe. Ring A trägt `power,data,water,o2,gas`; Ring B `power,data,water,o2,wastewater,thermal`.

Bitte für die kritischen Objektklassen festlegen:

- welche Medien zwingend zwei unabhängige physische Pfade benötigen;
- welche Medien bewusst nur einfach bzw. lokal redundant geführt werden dürfen;
- ob thermische Hauptkreise als Teil derselben A/B-Topologie oder als eigenständiges Netz zu behandeln sind;
- ob Prozessgase, Abwasser und Thermik jeweils N-1 über zwei Backbones geführt werden sollen.

NOXIA wird danach mediumspezifisch validieren, nicht nur „Link zu A + Link zu B“.

## 2. Fahrweg-N-1 vs. Medien-N-1

Der OTA-Handoff fordert, dass die Sperrung eines einzelnen Ring-/Korridorsegments nicht gleichzeitig sämtliche Wege zu Energie und Wasser abschneidet.

Die aktuelle NOXIA-Implementierung interpretiert dies als **Straßengraph**: Nach Ausfall eines beliebigen Road-Tiles muss jeder Habitatcluster weiterhin per Fahrweg ein Energie- und ein Wasserobjekt erreichen. Dadurch entstehen 111 Fahrweg-Tiles und ein sehr dominantes Netz.

Bitte präzisieren:

- Ist die N-1-Anforderung hier tatsächlich für Fahrzeug-/Wartungszugang gemeint?
- Oder gehört die eigentliche Energie-/Wasser-Kontinuität in die Utility-Netze, während Fahrwege nur alternative Rettungs-, Wartungs- und Frachtzugänge sicherstellen müssen?

Ziel ist weiterhin die Leitregel: keine Stadtstraßen, keine zukünftigen Trassen, nur aktuell erforderliche Infrastruktur.

## 3. ECLSS 2-von-3-Failover

OTA verlangt: Zwei der drei regionalen ECLSS-Hubs können im degradierten Betrieb den kolonieweiten Mindest-O2-/CO2-Bedarf tragen.

Bitte präzisieren, ob dies bedeutet:

- jeder Hub besitzt nominal zwei Cluster, aber über Cross-Feed können die verbleibenden zwei Hubs alle sechs Cluster erreichen;
- welche Mindestfunktion im degradierten Modus erhalten werden muss (Atmosphäre/Druck/CO2/O2/Feuchte/Spurengase);
- ob dafür separate Cross-Ties/Absperrungen als physische Objekt-/Netzeigenschaft erforderlich sind.

NOXIA wird danach echten N-1-Failover statt nur `servesClusters = 2` modellieren.

## 4. 504 nominale Plätze vs. Safe-Haven-/Evakuierungskapazität

6 × 84 = 504 Plätze für 497 Bewohner lässt nur sieben freie nominale Plätze. Beim Verlust eines kompletten Clusters bleiben 420 reguläre Plätze.

Bitte unterscheiden:

- nominale Wohnkapazität;
- temporäre Safe-Haven-/Evakuierungskapazität;
- zulässige Notüberbelegung während Isolation/Reparatur.

Es soll ausdrücklich **kein siebter Wohncluster** aus dieser Rückfrage entstehen, sofern die Resilienz über temporäre Safe-Haven-Funktion plausibel abgebildet werden kann.

## 5. Frischproduktions-/Pflanzenmodul im staatlichen Minimal-Startbestand

Der OTA-Handoff fordert ein Pflanzenmodul, bezeichnet es zugleich als nicht überlebenskritisch. Die Leitregel für Tharsis Hub lautet jedoch, nur technisch/sicherheitsbedingt notwendige Startinfrastruktur zu bauen.

Bitte entscheiden:

- **Startbestand beibehalten**, wenn das Modul für Gesundheit, Kreislaufführung, Langzeitbetrieb oder Missionsfähigkeit technisch notwendig ist; dann Begründung explizit ergänzen.
- **In erste Ausbauphase verschieben**, wenn es primär Komfort, Frische oder Importreduktion liefert und nicht für den Minimum-Viable-Betrieb notwendig ist.

## 6. Energie-Epistemik

NOXIA hat aus dem Handoff sechs Module à 1,25 MW = 7,5 MW Nennleistung modelliert. SSF führt die Lastbänder weiterhin als Architekturannahme, nicht als realwissenschaftlich gesicherten Koloniewert.

Bitte bestätigen, dass 7–8 MW **OTA-Weltarchitekturannahme / Designreserve** bleibt und nicht als [R]-Realreferenz behandelt werden darf. Falls OTA inzwischen eine Bottom-up-Bilanz besitzt, bitte diese stattdessen referenzieren.

## Erwartete Rückgabe

Bitte eine kurze kanonische Entscheidung zu den sechs Punkten liefern und betroffene OTA-Dossiers nur dort ändern, wo nötig. Danach kann NOXIA Issue #52 umsetzen und das tatsächliche Layout vereinfachen/härten.