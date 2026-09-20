---
id: EXT-ENG-OTA-20260920-TRANSFER-LOGISTICS-CANONICALIZATION
title: Engineering canonicalization proposal – Solar Transfer Logistics Architecture
status: open
source: KUEPER-ENGINEERING
target: OTA
created: 2026-09-20
priority: high
affects: [OTA-TEC-0122, OTA-TEC-0083, OTA-TEC-0082, OTA-TEC-0084, OTA-TEC-0016, OTA-TEC-0087, OTA-TEC-0092, OTA-TEC-0112, OTA-TEC-0113, OTA-TEC-0114, OTA-TEC-0115, OTA-TEC-0116]
---

# Anlass

KUEPER Engineering hat den offenen Request `EXT-OTA-ENG-20260906-transfer-logistics-network-closure.md` auf Netzebene technisch abgeschlossen.

Engineering-SoT:

- `ENG-SYS-STL-0001` — `systems/solar-transfer-logistics-architecture-0.2.md`
- `systems/solar-transfer-logistics-graph-r0.1.json`
- `ENG-SYS-STL-0002` — `systems/solar-transfer-depot-rescue-strategy-0.1.md`
- `ENG-CALC-0001` — cislunar reference delta-v
- `ENG-CAL-0008` — Earth–Mars reference transfer
- `ENG-CAL-0009` — Earth–Sun L5 phasing reference
- `ENG-CAL-0010` — Gateway/NRHO access reference
- `ENG-CAL-0011` — Mars surface/orbit access reference

# Engineering-Ergebnis zur OTA-Prüfung

Bitte prüfen, ob folgende Architekturprinzipien in OTA-TEC-0122 und betroffenen Dossiers kanonisiert bzw. präzisiert werden sollen:

1. **Transportnetz als physischer Graph aus Legs und Nodes.** Ein narrativer oder spielerischer Direktauftrag kann intern aus mehreren technischen Legs bestehen.
2. **LEO / Orbital Prime als primärer Earth-side Aggregationsknoten** für Crew, Cargo, Fahrzeugwechsel und späteres Refueling.
3. **Gateway/NRHO ist optional**, nicht automatisch Pflichtknoten. Sein Nutzen muss aus Safe Haven, Depot, Wartung, polarer Mondzugänglichkeit oder Flottenbasing entstehen.
4. **LLO/Tycho bleibt direkter Mondoberflächen-Interfaceknoten** und kann parallel zu Gateway sinnvoll sein.
5. **Prometheus / Earth-Sun L5 ist ein Langstrecken-Hub**, kein routinemäßiger cislunarer Zwischenstopp. Einfachste Phasing-Referenzen liegen in Monaten, nicht Tagen.
6. **Mars orbital layer / Mars Orbital Hub sollte als explizite technische Schnittstelle existieren** zwischen interplanetarem Transfer und Mars EDL/Ascent.
7. **Phobos ist optional**, nicht zwingender Mars-Transferknoten.
8. Technisch getrennte Fahrzeugklassen sind sinnvoll für:
   - Crew/Orbital Transfer,
   - uncrewed Cargo Tug,
   - Interplanetary Transfer,
   - planetenspezifische Surface Access.
9. Depot-Tender, Mars-vicinity shuttle und Rescue können zunächst **Rollen/Varianten** bestehender Klassen sein; kein eigener Hull ist automatisch erforderlich.
10. Propellant depots sollen **inkrementell mit Traffic und Supply Chain wachsen**. LEO ist der erste starke Kandidat; Gateway/LLO, Mars/Phobos und L5 sind nachgelagerte, konditionale Stufen.
11. Deep-space rescue muss nach realer Reaktionszeit modelliert werden: bei Earth–Mars/L5 dominiert **autonome Survival-/Repair-Fähigkeit**, nicht kurzfristig dispatchtes Rescue.

# Quantitative Engineering-Anker

Diese Werte sind Engineering-Referenzen, keine automatisch kanonischen OTA-Spezifikationen:

- 400 km LEO -> 100 km LLO: ~3.903 km/s ideal, ~4.98 d (`ENG-CALC-0001`).
- 400 km LEO -> Gateway/NRHO: ~3.1 km/s TLI-class plus trajectory-specific insertion/RPOD (`ENG-CAL-0010`).
- Earth–Sun L5: einfache 1-rev heliocentrische Phasing-Fälle ~10–14 Monate, ~2.84–3.98 km/s heliocentrische Zwei-Impuls-Phasingarbeit exklusive Earth-escape coupling (`ENG-CAL-0009`).
- 400 km LEO -> 400 km Mars orbit: ~3.569 km/s departure + ~2.081 km/s fully propulsive capture, ~258.9 d ideal (`ENG-CAL-0008`).
- Mars surface -> low Mars orbit: ~4.0 km/s-class ascent regime (`ENG-CAL-0011`).

# Candidate mappings – ausdrücklich nicht automatisch

Engineering hat keine OTA-Identitäten umgewidmet. OTA soll prüfen, ob bestehende Typen folgende Rollen abdecken oder ob Dossiers erweitert werden müssen:

- CYGNUS -> Teilmenge Crew/Orbital Transfer / cislunar transfer;
- PELICAN -> lunar surface access;
- KITE -> Mars surface access;
- Pioneer -> early combined-role architecture;
- OTA-TEC-0112..0116 -> spätere Zuordnung zu Cargo Tug / Interplanetary Transfer / weiteren Rollen nach technischer Closure.

# Keep open

Bitte nicht vorschnell kanonisieren:

- exakte Gateway-transfer delta-v als universelle Konstante;
- exakte Prometheus/L5 route/station orbit;
- Mars Orbital Hub orbit class;
- KITE performance authority;
- interplanetary propulsion family;
- depot capacities / boil-off / ZBO system values;
- Ceres network extension.

# Reject as default assumptions

Engineering empfiehlt ausdrücklich, folgende Annahmen nicht kanonisch zu machen:

- jeder Mondflug muss via Gateway;
- jeder Marsflug muss via Phobos;
- ein Universalvehicle übernimmt surface ascent + cruise + landing;
- ein gameplay direct route ist physisch ein einzelnes Leg;
- ein Hub ist allein durch seine Existenz logistischer Pflichtknoten.

# Gewünschte OTA-Aktion

OTA entscheidet über Kanonisierung/Änderung der betroffenen Dossiers. Falls akzeptiert, bitte die resultierenden kanonischen Identitäten und Relationen anschließend gemäß Governance an KG/Consumer weitergeben.

KUEPER Engineering bleibt SoT für Rechenstände, Varianten, offene Trades und verworfene Architekturen.
