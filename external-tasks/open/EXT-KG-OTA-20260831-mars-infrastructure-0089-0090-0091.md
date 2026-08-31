---
id: EXT-KG-OTA-20260831-MARS-INFRA-0089-0090-0091
title: Mars Fabrication Center, Fahrwege und Utility Corridors an Evidenzaudits R1 angleichen
status: open
source: KG
target: OTA
created: 2026-08-31
requested_by: knowledge-graph-curation
priority: medium
affects: [KG, OTA, NOXIA]
---

## Anlass

Die aktuellen Evidenzaudits `RES-20260831-TEC0089A`, `RES-20260831-TEC0090A` und `RES-20260831-TEC0091A` sind im Knowledge Graph ausgewertet. Der KG hat die stabilen Dokumentidentitäten und die daraus ableitbaren Wissensdomänen registriert; die eigentlichen OTA-Dokumentinhalte bleiben OTA-eigene Source of Truth.

KG-Referenzen:
- `DOC:OTA:OTA-TEC-0089-2026-DE` -> `draft_productive`
- `DOC:OTA:OTA-TEC-0090-2026-DE` -> `draft_productive`
- `DOC:OTA:OTA-TEC-0091-2026-DE` -> `draft_productive`
- `KD:SPACE-ISRU-MANUFACTURING:N2` -> `canonical`
- `KD:SPACE-PLANETARY-INFRASTRUCTURE:N2` -> `canonical`

## OTA-TEC-0089 — Fabrication Center

Bitte den Entwurf gegen `RES-20260831-TEC0089A` R1 angleichen.

Insbesondere:
- Herstellbarkeit, Feedstock-Verfügbarkeit und Freigabefähigkeit als getrennte Ebenen führen.
- Metall-AM im Orbit als demonstriert beschreiben, aber keine generische betriebsreife Mars-LPBF-Fabrik daraus ableiten.
- Keine universellen O2-ppm-, ATEX-, Reinigungs-, Kostenanteils- oder Festigkeitswerte aus einzelnen terrestrischen Anlagen/Laborversuchen übernehmen.
- Marsressource -> Legierung -> qualifizierter Feedstock -> qualifiziertes Bauteil ausdrücklich als noch nicht demonstrierte End-to-End-Kette behandeln.
- Recycling als verlust- und qualitätsbehafteten Materialfluss modellieren, nicht als verlustfreie Schleife.

## OTA-TEC-0090 — Mars-Fahrwege

Bitte den Entwurf gegen `RES-20260831-TEC0090A` angleichen.

Insbesondere:
- Regolith-/Simulantengeotechnik und vorbereitete/verdichtete Trassen als Realanker erhalten.
- Schienenvorteile nur last-, distanz- und betriebsspezifisch formulieren.
- Keinen universellen Umschaltpunkt Piste -> Straße -> Schiene setzen.
- Breite, Tragfähigkeit, Achslast, Bauenergie, Wartungsintervall, Schienenstandard und NOXIA-Balancing `[OFFEN]/[W]` lassen.
- In-situ-Marswerte nicht aus einzelnen Standorten oder Simulanten planetenweit generalisieren.

## OTA-TEC-0091 — Utility Corridors

Bitte den Entwurf gegen `RES-20260831-TEC0091A` R1 angleichen.

Insbesondere:
- Utilidor-Prinzip als `gemeinsamer zugänglicher Korridor, getrennte Medienleitungen` verwenden.
- Wasser/Abwasser als kontrolliert druck- und temperaturgeführte Systeme behandeln; Mars-Außendruck nicht pauschal als NPSH-Randbedingung geschlossener Systeme verwenden.
- Wärmeverlust nicht pauschal als strahlungsdominiert beschreiben; Leitung, Kontakt, Einhausung, interne Konvektion und Strahlung systemspezifisch behandeln.
- InSight-Wärmeleitfähigkeiten nicht als universelle Mars-Regolithwerte verwenden.
- Medienseparation, Compartments, Segmentierung, Leckdetektion und Bypass/Ringstrukturen berücksichtigen.
- Ein zweiter Strang im selben Korridor nicht als vollständige geografische Redundanz behandeln.
- Rohrdurchmesser, Heat-Trace-Werte, Abstände, Pumpenleistungen, Kosten und Balancingwerte offen lassen.

## KG-Metadaten

Bei einer OTA-Metadatenbereinigung bitte für alle drei Dokumente `kg.system: SYS:KUEPER:ota` verwenden. Die derzeitigen Dokumente führen noch `SYS:OTA:overtimearchive`; dieser Legacy-Wert soll nicht als neue kanonische System-ID fortgeschrieben werden.

## Abnahme

Erledigt, wenn:
1. die drei OTA-Entwürfe den jeweiligen Audits entsprechen,
2. keine offenen Forschungswerte unmarkiert kanonisiert werden,
3. KG-System-ID auf `SYS:KUEPER:ota` normalisiert ist,
4. NOXIA aus den Dokumenten keine permanenten KG-/SSF-IDs oder wissenschaftlich unbelegten Balancingwerte ableitet.
