---
id: NOX-OTA-REQ-20260830-THARSIS-HUB-PHASE2-OBJECT-DOSSIERS
requester: SYS:KUEPER:noxia
target: SYS:KUEPER:ota
priority: high
type: technical-object-dossiers
created: 2026-08-30
completed: 2026-08-30
status: done
affects: [OTA, NOXIA, KG]
requires: [OTA-TEC-0038-2026-DE]
---

# Tharsis Hub — Phase 2 abgeschlossen

Die Systemarchitektur aus `OTA-TEC-0038-2026-DE` und der auditierte SSF-Handoff wurden in konkrete technische Objektgrenzen überführt.

## Erstellte Dossiers

- `OTA-TEC-0094-2026-DE` — Primärenergie, Speicher und Black Start
- `OTA-TEC-0095-2026-DE` — Wasser-ISRU, Aufbereitung und Reserven
- `OTA-TEC-0096-2026-DE` — Atmosphären- und ECLSS-Verbund
- `OTA-TEC-0097-2026-DE` — Habitatcluster und Drucksegmente
- `OTA-TEC-0098-2026-DE` — Thermalkontrolle und Radiatorfelder
- `OTA-TEC-0099-2026-DE` — Medizinischer Kern und Isolation
- `OTA-TEC-0100-2026-DE` — Nahrung, Vorräte und Frischproduktion
- `OTA-TEC-0101-2026-DE` — Werkstatt, Ersatzteile und lokale Fertigung
- `OTA-TEC-0102-2026-DE` — Logistik- und Lagerkern
- `OTA-TEC-0103-2026-DE` — Oberflächenfahrzeug-Funktionsklassen
- `OTA-TEC-0104-2026-DE` — Fahrwege und Außenlogistik
- `OTA-TEC-0105-2026-DE` — Redundante Mediennetze und Versorgungskorridore
- `OTA-TEC-0106-2026-DE` — Kommunikation, Navigation und Systemkontrolle
- `OTA-TEC-0107-2026-DE` — Reststoff- und Materialrückgewinnung

## Zentrale Architekturentscheidungen

- 6 Habitatcluster mit je 84 Plätzen, getrennten Druck-/Brandzellen und Safe-Haven-Funktion.
- 6 Reaktormodule in 3 räumlich getrennten Erzeugungsdomänen; 3 Black-Start-/Speicherknoten.
- 3 Wassergewinnungs-/Aufbereitungsstränge mit N-1-Fähigkeit und verteilten Reservetanks.
- 3 regionale ECLSS-Knoten; zwei Knoten können im degradierten Betrieb den kolonieweiten Mindestbedarf tragen.
- 5 räumlich getrennte Radiatorfelder mit Staubdegradationsreserve und wartbarer Isolation.
- Medical Core mit zwei klinischen Zellen plus separatem Emergency Annex.
- 3 getrennte Nahrungs-/Strategielagerdomänen; lokale Pflanzenproduktion ist nicht Teil der 30-Tage-Überlebensannahme.
- 2 Werkstattzellen, 1 Logistikhub, 3 strategische Lagerdomänen.
- zwei physisch getrennte Utility-Ringe A/B; Fahrwege und Mediennetze sind nicht identisch.
- zwei lokale Kontrollknoten, drei Oberflächen-Relays und zwei getrennte Langstrecken-Kommunikationsstationen.
- zwei Nassstrom- und zwei Materialrückgewinnungszüge.

## Evidenzgrenzen

- 3–5 MW Mittel / 5–8 MW Peak bleiben [A]-Startband; konkrete NOXIA-Leistungswerte dürfen daraus nicht als Realreferenz abgeleitet werden.
- 0,3–0,8 t/Tag Wasser gilt nur für ECLSS-/Habitat-Nachspeisung; die OTA-Rohwasserarchitektur ist auf größere kolonieweite Prozesslast ausgelegt.
- Radiatorfläche bleibt temperatur-/material-/staubabhängig; OTA setzt Felder und Redundanz, nicht eine universelle m²-Zahl.
- Habitatsegmentierung ist hazard-getrieben, nicht aus einer vermeintlichen NASA-Personenobergrenze abgeleitet.

## Nächster Schritt

Der nachgelagerte NOXIA-Auftrag muss daraus konkrete Startobjekte und Stückzahlen, Tile-Positionierung, notwendige Fahrwege, physisch getrennte Medienleitungen, Fahrzeugbestand, staatliches Eigentum und ein neues Tharsis-Hub-Seed/Startlayout ableiten.
