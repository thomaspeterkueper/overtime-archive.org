---
id: EXT-NOX-OTA-20260901-BUILDING-OBJECT-COVERAGE
title: NOXIA-Gebäude gegen OTA-TEC-Objektdossiers abgleichen und Provenienz-Mappings liefern
status: done
source: NOXIA
target: OTA
created: 2026-09-01
completed: 2026-09-01
requested_by: noxiagame
priority: high
affects: [NOXIA, OTA, KG]
result: docs/noxia-building-object-coverage-20260901.md
kg_resolution: "kueper-knowledge-graph#102"
ota_implementation: "overtime-archive.org#38"
---

# Abschluss

Der technische Gebäude-Abgleich ist abgeschlossen.

## Tharsis Hub

Die 18 Tharsis-Hub-Startobjekttypen bleiben auf die bestehenden technischen Systemdossiers `OTA-TEC-0094-2026-DE` bis `OTA-TEC-0107-2026-DE` bezogen. Es wurden dafür keine neuen technischen Leistungs- oder Balancingwerte erfunden.

## Neue generische technische Dossiers

Nach der KG-Identitätsentscheidung in PR #102 wurden die vier nachgewiesenen Dossierlücken in OTA PR #38 geschlossen:

- `mine` → `OTA-TEC-0108-2026-DE` — Rohstoffgewinnungsanlage / Mine
- `solar` → `OTA-TEC-0109-2026-DE` — Solarfeld / photovoltaische Energieerzeugung
- `laboratory` → `OTA-TEC-0110-2026-DE` — generische Laborgrundklasse
- `scanner` → `OTA-TEC-0111-2026-DE` — Oberflächen-Scanner / lokale Fernerkundung

Der Scanner verwendet die stabile KG/NOXIA-Identität `BLD:NOX:scanner-1`; Ground Truth, Messung, Interpretation und Discovery bleiben getrennte Ebenen.

## Generalisierungsfälle

KG PR #102 hat die zuvor ambigen Fälle als explizite Spezialisierungs-/Referenzbeziehungen geklärt, statt sie still mit Tharsis-Objekten gleichzusetzen:

- `factory` — generische Gameplay-/Fertigungsklasse; keine Identitätsgleichsetzung mit Werkstatt oder Materialkomplex
- `ice_drill` — Spezialisierung der Gewinnung mit zusätzlicher Wasser-/Volatilprozesskette
- `habitat` — Habitatklasse/Implementierung, nicht identisch mit einem Tharsis-Habitatcluster
- `residential_block` — Spezialisierung der Habitation
- `smelter` — bestehende `BLD:NOX:schmelze-1`-Identität; Materialverarbeitung als Systemreferenz

## Governance

KG bleibt Source of Truth für gemeinsame Identitäten und Relationen. OTA bleibt Source of Truth für technische Dossiers. NOXIA bleibt Source of Truth für Kosten, Build-Ticks, Produktionswerte, Population-Boni, Unlocks, UI, konkrete Scanradien und Spielbalance.

**Implementation:** KG PR #102, OTA PR #38. Beide validiert und gemergt.