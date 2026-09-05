---
id: EXT-KG-OTA-20260831-MARS-INFRA-0089-0090-0091
title: Mars Fabrication Center, Fahrwege und Utility Corridors an Evidenzaudits R1 angleichen
status: done
source: KG
target: OTA
created: 2026-08-31
completed: 2026-09-05
requested_by: knowledge-graph-curation
priority: medium
affects: [KG, OTA, NOXIA]
---

## Abschluss

Der R1-Evidenzabgleich für `OTA-TEC-0089-2026-DE`, `OTA-TEC-0090-2026-DE` und `OTA-TEC-0091-2026-DE` ist OTA-seitig abgeschlossen.

Ergebnis:

- `OTA-TEC-0089-2026-DE` auf v1.1: Herstellbarkeit, Feedstock-Verfügbarkeit und Freigabefähigkeit getrennt; Metall-AM-in-space korrekt als Demonstration eingeordnet; universelle terrestrische Maschinen-/Sicherheitswerte nicht übernommen; Marsressource→Legierung→Feedstock→qualifiziertes Bauteil als offene End-to-End-Kette geführt; Recycling als verlust- und qualitätsbehafteter Materialfluss modelliert; `kg.system` auf `SYS:KUEPER:ota` normalisiert.
- `OTA-TEC-0090-2026-DE` auf v1.1: lokale Geotechnik statt globaler Marswerte; Mond-/Simulantenbelege eingegrenzt; kein universeller Road-to-Rail-Crossover; `kg.system` bereits auf `SYS:KUEPER:ota` normalisiert.
- `OTA-TEC-0091-2026-DE` auf v1.1: gemeinsamer zugänglicher Korridor bei getrennten Medienleitungen; geschlossene Druck-/Temperaturführung; NPSH nicht aus Mars-Außendruck; Thermik systemspezifisch; InSight-Werte nicht universalisiert; Segmentierung, Compartments, Leckdetektion, Bypass/Ring und geografische Redundanz präzisiert; `kg.system` auf `SYS:KUEPER:ota` normalisiert.

Keine offenen Forschungswerte wurden als feste Mars-Bemessungs- oder NOXIA-Balancingwerte kanonisiert.

## Engineering-Folgeaufträge

Die verbleibenden quantitativen Designfragen wurden an KUEPER Engineering übergeben:

- `EXT-OTA-ENG-20260905-mars-fabrication-center-closure.md`
- `EXT-OTA-ENG-20260905-mars-route-infrastructure-trade.md`
- `EXT-OTA-ENG-20260905-mars-utility-corridor-closure.md`

KUEPER Engineering liefert nach technischer Schließung Canonicalization-/Decision-Requests zurück an OTA. OTA bleibt Source of Truth für den Volltext und die Weltsetzung; KG bleibt Metadaten-/Identitäts-SoT, NOXIA Gameplay-/Balancing-SoT.

## Referenzen

- `RES-20260831-TEC0089A` R1
- `RES-20260831-TEC0090A` R1
- `RES-20260831-TEC0091A` R1
- `DOC:OTA:OTA-TEC-0089-2026-DE`
- `DOC:OTA:OTA-TEC-0090-2026-DE`
- `DOC:OTA:OTA-TEC-0091-2026-DE`
- `KD:SPACE-ISRU-MANUFACTURING:N2`
- `KD:SPACE-PLANETARY-INFRASTRUCTURE:N2`
