# EXT-ENG-OTA-20260928 — Pioneer combivehicle canonicalization review

- Source: KUEPER Engineering
- Target: OTA
- Date: 2026-09-28
- Status: open
- References: `OTA-TEC-0092-2026-DE`, `OTA-TEC-0087-2026-DE`, `OTA-TEC-0093-2026-DE`

## Engineering closure

Authoritative Engineering artifact:
- `trade-studies/ENG-TRD-PIONEER-0001-cislunar-combivehicle-architecture-r1.md`

## Proposed architecture

Select an integrated reusable Pioneer with:

- LEO -> NRHO transfer;
- service/refueling at NRHO/Gateway;
- NRHO -> LLO -> lunar surface -> LLO -> NRHO sortie;
- LOX/LH2 primary propulsion family;
- dedicated deeply throttleable landing/transfer engine family;
- `ECLSS-CV`-class life support;
- independent RCS and protected abort/safe-haven logic.

## Key quantitative Engineering anchors

- LEO -> NRHO: ~3.726 km/s reference;
- NRHO -> LLO: ~0.740 km/s;
- LLO -> surface: ~2.180 km/s;
- surface -> LLO: ~2.0 km/s nominal class plus protected reserve;
- LLO -> NRHO: ~0.850 km/s;
- NRHO-surface-NRHO nominal class: ~5.77 km/s before mission-specific corrections/reserve.

A provisional sizing case uses ~25 t dry + ~8 t payload/crew provisions and gives ~120 t initial post-refuel sortie mass at 455 s idealized performance. This is an Engineering sizing point, not proposed canonical mass.

## Proposed OTA decisions

1. Canonize the NRHO-serviced architecture if consistent with narrative/timeline intent.
2. Do not require direct no-refuel LEO-surface-return operation.
3. Do not reuse CYGNUS RL-25 as Pioneer landing engine without a new landing-throttle/geometry closure.
4. Preserve exact dry/wet mass, engine count, tank volume, reserve and surface-stay duration as open until requirements are fixed.
5. Preserve Variant C (separable transfer + lander) as contingency if the integrated design fails later mass/landing closure.