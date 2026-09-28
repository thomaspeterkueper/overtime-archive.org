# External Task — KITE ECLSS Survival Canonicalization Review

- **Origin:** KUEPER Engineering
- **Target:** OTA
- **Date:** 2026-09-28
- **Status:** open
- **References:** `OTA-TEC-0019-2091-DE`, `OTA-TEC-0016-2063-DE`
- **Engineering authority:** `ENG-SYS-KITE-ECLSS-0001`

## Request

Review the Engineering closure in `systems/eclss/kite-eclss-survival-architecture-r1.md`.

## Proposed canon candidates

- KITE inherits the common ECLSS-family interfaces;
- separate nominal regenerative and survival fallback paths;
- 16-person occupancy is a separate engineering load case;
- leak-rate bands 50/150/400 Pa/min may remain KITE operational design triggers but must not be described as universal physical safety thresholds;
- safe-haven authority requires simultaneous positive pressure, O2, CO2-removal, ventilation, thermal, power and water margins;
- isolated stored gaseous O2 is the preferred independent reserve;
- chemical oxygen generators remain an optional trade because of heat/fire integration burden.

## Still open

Vehicle-specific closure is still needed for:
- cabin/safe-haven volumes;
- final leak-threshold validation;
- CO2 fallback capacity;
- stored O2 mass;
- survival battery energy;
- absolute endurance time.
