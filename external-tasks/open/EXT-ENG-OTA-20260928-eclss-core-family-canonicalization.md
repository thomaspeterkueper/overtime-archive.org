# External Task — ECLSS Core Family Canonicalization Review

- **Origin:** KUEPER Engineering
- **Target:** OTA
- **Date:** 2026-09-28
- **Status:** open
- **Reference:** `OTA-TEC-0093-2026-DE`
- **Engineering authority:** `ENG-SYS-ECLSS-0001` / `ENG-ECLSS-FAMILY-r1`

## Request

Review the Engineering closure in:
- `systems/eclss/eclss-core-family-architecture-r1.md`
- `systems/eclss/eclss-core-family-interface-r1.json`

## Proposed canon candidates

- four mission variants: `ECLSS-SR`, `ECLSS-TR`, `ECLSS-ST`, `ECLSS-CV`;
- common core standardized at function/interface level rather than identical hardware;
- explicit non-perfect closure and loss terms;
- mission-specific closure degree and consumable strategy;
- redundancy assigned by function criticality rather than blanket 'triple redundancy';
- long-duration systems use maintainable ORU architecture and explicit power/water/thermal interfaces;
- scaling reference cases 2 / 4–6 / 20 / 200 crew without assuming linear hardware scaling.

## Keep engineering-specific/open

Do not canonize universal values for mass, volume, power, recovery fraction, tank size, train count or consumable reserve duration without mission-specific closure.
