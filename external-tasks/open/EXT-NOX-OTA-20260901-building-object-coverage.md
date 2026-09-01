---
id: EXT-NOX-OTA-20260901-BUILDING-OBJECT-COVERAGE
title: NOXIA-Gebäude gegen OTA-TEC-Objektdossiers abgleichen und Provenienz-Mappings liefern
status: in_progress
source: NOXIA
target: OTA
created: 2026-09-01
updated: 2026-09-01
requested_by: noxiagame
priority: high
affects: [NOXIA, OTA, KG]
result: docs/noxia-building-object-coverage-20260901.md
follow_up: EXT-OTA-KG-20260901-BUILDING-OBJECT-IDENTITY-GAPS
---

## Zwischenstand 2026-09-01

Der vollständige Reconciliation-Stand liegt in `docs/noxia-building-object-coverage-20260901.md`.

### Erledigt

- Die 18 Tharsis-Hub-Startobjekttypen wurden gegen `OTA-TEC-0094-2026-DE` bis `OTA-TEC-0107-2026-DE` abgeglichen.
- Die Tharsis-Zuordnung ist dokumentarisch belastbar; es werden keine neuen technischen Leistungs-/Balancingwerte gesetzt.
- `road`, `warehouse` und `oxygen_recycler` besitzen belastbare Systemdossier-Referenzen.
- `water_recycler` besitzt bereits seine explizite technische Objektbindung.
- `school`, `bank`, `admin` und `bar` sind als nichttechnische Gameplay-/Service-Ausnahmen begründet, solange sie keinen konkreten technischen Bauwerksanspruch erheben.

### Verifizierte Lücken

Kein passendes eigenes OTA-TEC-Dossier wurde nachgewiesen für:

- `mine`
- `solar`
- `laboratory`
- `scanner`

Diese erhalten ausdrücklich **keine erfundene OTA-ID**.

### Noch ambig

Technisch verwandte Systemdossiers existieren, eine Generalisierung ist aber noch nicht sauber entschieden für:

- `factory`
- `ice_drill`
- `habitat`
- `residential_block`
- `smelter`

Die Identitäts-/Generalisierungsfrage ist deshalb als `EXT-OTA-KG-20260901-BUILDING-OBJECT-IDENTITY-GAPS` an die KG-Governance geroutet.

## Abgrenzung bleibt verbindlich

NOXIA bleibt Source of Truth für Kosten, Build-Ticks, Produktion, Population-Boni, Unlocks, UI und Balancing. OTA dokumentiert technische Systemgrenzen. KG besitzt geteilte Identitäten.

## Abnahme

Dieser Request bleibt bewusst offen, bis die verifizierten Dossier-Lücken durch die OTA/KG-Governance geschlossen oder ausdrücklich anders klassifiziert sind. Die bereits vorhandene Tharsis-Technik ist dagegen nicht mehr durch diesen Gebäude-Abgleich blockiert.
