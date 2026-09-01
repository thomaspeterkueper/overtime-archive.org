---
id: EXT-OTA-KG-20260901-BUILDING-OBJECT-IDENTITY-GAPS
requester: SYS:KUEPER:ota
target: SYS:KUEPER:kg
priority: high
type: identity-governance
created: 2026-09-01
completed: 2026-09-01
status: done
affects: [OTA, NOXIA, KG]
implementation: "kueper-knowledge-graph#102"
---

# Abschluss

Die Identitäts- und Generalisierungsfragen wurden in KG PR #102 entschieden und nach erfolgreicher Source-of-Truth-Prüfung gemergt.

## Ergebnis

- Bestehende Identitäten `BLD:NOX:mine-1`, `BLD:NOX:solarfeld-1`, `BLD:NOX:biolabor-1`, `BLD:NOX:mars-habitat-1` und `BLD:NOX:schmelze-1` bleiben erhalten.
- Für den Scanner wurde `BLD:NOX:scanner-1` als stabile gemeinsame Gebäudeidentität registriert.
- Gebäudeidentitäten und OTA-Dokumentidentitäten werden nicht gleichgesetzt.
- Für Beziehungen gelten die expliziten Semantiken `implements`, `specializes`, `partOf` und `references`.
- Mine, Solarfeld, generisches Labor und Scanner wurden als eigenständige Dossierbedarfe bestätigt und anschließend in OTA PR #38 als `OTA-TEC-0108` bis `OTA-TEC-0111` umgesetzt.
- Factory, Ice Drill, Habitat, Residential Block und Smelter werden über Spezialisierung/Referenz statt durch künstliche Identitätsgleichsetzung behandelt.

NOXIA-Balancing- und Runtimewerte wurden nicht in KG oder OTA übernommen.