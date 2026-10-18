---
id: EXT-ENG-OTA-20260928-kite-eclss-survival-canonicalization
status: done
resolved: 2026-10-18
resolution: PR #211
source: KUEPER Engineering
target: OTA
---

# Completion — KITE ECLSS Survival canonicalization

Resolved by merged PR #211.

Canonicalized across OTA-TEC-0019 v1.3 and OTA-TEC-0016 v1.1:
- KITE inherits the `ECLSS-SR` family architecture.
- Nominal regenerative atmosphere control is separated from independent survival fallback paths.
- Stored gaseous O2 is the preferred independent reserve; chemical oxygen generators remain an optional trade.
- Protected survival paths cover sensing, minimum ventilation, hydration and survival power.
- 16-person emergency occupancy is a separate engineering load case.
- 50 / 150 / 400 Pa/min remain KITE-specific design/response triggers, not universal physical safety thresholds.
- Safe-haven validity requires simultaneous positive pressure, O2, CO2-removal, ventilation, thermal, power and water margins.
- Blanket hardware triplication was replaced by function-based fault tolerance.

Still open at vehicle-detail level: cabin/safe-haven volumes, final leak-threshold validation, fallback CO2 capacity, stored-O2 mass, survival battery energy and absolute endurance.
