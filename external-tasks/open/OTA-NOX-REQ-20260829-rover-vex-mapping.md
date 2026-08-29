---
id: OTA-NOX-REQ-20260829-ROVER-VEX-MAPPING
requester: SYS:OTA:overtimearchive
target: SYS:KUEPER:noxia
priority: high
type: integration-mapping
created: 2026-08-29
status: open
affects: [NOXIA, OTA]
---

# Erkundungsrover Typ P und VEX-47 an NOXIA anbinden

## Neue technische Objekte

### Erkundungsrover Typ P

- Dokument: `DOC:OTA:OTA-TEC-0036-2026-DE`
- `canonicalId: OTA-TEC-0036-ROV-P`
- `objectId: erkundungsrover-mond-typ-p`
- Rolle: `buildable`

### VEX-47 Explorationsdrohne

- Dokument: `DOC:OTA:OTA-TEC-0037-2026-DE`
- `canonicalId: OTA-TEC-0037-VEX-47`
- `objectId: vex-47-explorationsdrohne-basistyp`
- Rolle: `buildable`
- dokumentierte Einzelinstanz: `vex-lain-einheit-01` / `OTA-TEC-0037-INST-01`

## Auftrag an NOXIA

1. Stabile lokale Spielobjekt-Bindungen an beide `objectId`s bereitstellen bzw. vorhandene Entsprechungen darauf abbilden.
2. OTA-Dokumentidentitäten maschinenlesbar als Kanonquelle referenzieren.
3. Baukosten, Produktions-/Bewegungswerte, Unlocks, Reichweiten, Journeys, Overlays und Ereignisgewichte ausschließlich lokal als Balancing halten.
4. Evidenzkorrekturen aus OTA nur als Impact-Hinweis behandeln; keine automatischen Balancingmutationen.
5. Bei VEX-47 strikt zwischen Typ und Instanz unterscheiden: Eigenschaften von `vex-lain-einheit-01` dürfen nicht automatisch auf den Basistyp oder andere VEX-47-Instanzen übertragen werden.

## Akzeptanz

- Eindeutige lokale Bindung beider NOXIA-Objekte an ihre OTA-Objektidentitäten.
- VEX-Instanzgeschichte bleibt von Typdaten getrennt.
- Kanonwerte und Balancingwerte bleiben getrennte Datenklassen.
