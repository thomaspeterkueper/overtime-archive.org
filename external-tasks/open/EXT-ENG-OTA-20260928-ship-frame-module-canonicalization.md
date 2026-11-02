---
source: KUEPER Engineering
target: OTA
status: open
created: 2026-09-28
type: canonicalization-review
references:
  - OTA-TEC-0112-2026-DE
  - OTA-TEC-0113-2026-DE
  - OTA-TEC-0114-2026-DE
  - OTA-TEC-0115-2026-DE
  - OTA-TEC-0116-2026-DE
engineering:
  - ENG-SYS-SHIP-BUS-0001
  - ENG-SHIP-BUS-r1
---

# Canonicalization review — modular ship frames and modules

KUEPER Engineering has closed the common modular spacecraft interface architecture.

## Proposed canon candidates

1. The five frame roles are technically differentiated by mission/load architecture, not gameplay values:
   - Mk.I: reusable orbital/free-space modular cargo carrier;
   - Fast: time-critical transfer architecture requiring explicit thrust/delta-v/power/trajectory trade;
   - Heavy: high transported/integrated mass capability with stronger structural/handling architecture;
   - Scout: survey/reconnaissance vehicle with precision navigation, sensor and communications emphasis;
   - Pioneer: construction/deployment carrier with manipulators, field interfaces and infrastructure assembly capability.

2. A common ship module interface family is technically defensible across these roles, with multiple physical connector/load classes rather than one universal connector.

3. Interface domains proposed for canonical relation/model use:
   structural, electrical, data/control, thermal, optional fluids, docking/handling, identity/health and fault isolation.

## NOXIA module disposition proposed

- `drive_booster`: do not create as universal technical hardware entity; retain as gameplay abstraction unless replaced by specific propulsion/power systems.
- `cargo`: generic gameplay abstraction; engineering maps to typed containers/pallets/pressure vessels/hazard classes.
- `tank`: technical family exists, but requires media-/pressure-/temperature-specific subtypes.
- `scanner`: generic abstraction; map to instrument families.

## Technical candidates suitable for separate OTA review/dossiers

- `habitat_pod` — pressurized crew/habitat module family;
- `deep_scanner` — multisensor instrument-payload family;
- `survey_drone` — deployable vehicle family;
- `construction_rig` — modular construction/manipulation equipment family;
- `colony_pod` — deployment system-of-systems, explicitly not equivalent to a self-sufficient colony.

## Important exclusions

Do not canonicalize universal values for payload mass, bus voltage, hardpoint loads, thrust/delta-v, propellant, radiator area, crew capacity or exact container dimensions from this closure. These remain mission-specific Engineering outputs.

Please decide dossier activation/revision and any new canonical identities/relations. Engineering has not modified OTA source dossiers directly.
