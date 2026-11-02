# EXT-ENG-OTA-20261018 — Geometric / Single-Material Diode 2048 Canonicalization

- **Origin:** KUEPER Engineering
- **Target:** OTA
- **Date:** 2026-10-18
- **Status:** open
- **Engineering source:** `ENG-SYS-GDIODE-0001`
- **Related OTA:** `OTA-TEC-0028-2048-DE`, `OTA-TEC-0029-2048-DE`
- **Research anchor:** `RES-20260831-3DEACC8E` R1

## Request

Review the Engineering device-family closure for canonical adoption into the 2048 technical dossier.

Engineering recommends **not** treating the technology as a universal replacement for doped semiconductor electronics.

### Proposed family

1. `ENG-GD-CRYO` — geometry-driven nonreciprocal specialty device descended from the Birch et al. Co3Sn2S2 helix result.
2. `ENG-GD-RTJ` — thermally programmable single-material junction descended from the Ag18Cu3Te11Cl3 result.
3. `ENG-GD-HYB` — hybrid geometry/phase device; experimental only unless later closed.

## Real vs extrapolated boundary

### [R]

- Co3Sn2S2 FIB helices: micrometre-scale 3D geometries, 10–190 K measurements, switchable nonreciprocal transport at zero externally applied magnetic field.
- Ag18Cu3Te11Cl3: room-temperature-adjacent reversible carrier-type switching and thermally generated single-material pn junction.

### [H]

- miniaturized/faster thermal-junction devices;
- parallel array manufacture using lithography/deposition/template/3D nanofabrication;
- specialty space/cryogenic sensor and signal-electronics applications;
- graceful degradation through test/bin/remap/redundancy.

### [F] until demonstrated

- room-temperature Birch-like geometry-driven nonreciprocity with mature manufacturability;
- hybrid geometry/phase devices with practical performance;
- any claim of broad replacement of conventional semiconductor power/logic devices.

## Canonicalization recommendation

OTA may canonize the **existence and role of the specialty family** while leaving quantitative device metrics open until dedicated Engineering qualification closes them.

Recommended canonical metrics remain fields rather than invented values:

- operating temperature corridor;
- rectification/nonreciprocity metric;
- current density;
- blocking voltage/field;
- switch energy/time;
- retention/endurance;
- radiation tolerance;
- yield/lifetime;
- thermal crosstalk and package burden.

## Risks to retain in canon

- scalable 3D crystal fabrication;
- process/surface damage;
- contacts;
- thermal crosstalk;
- endurance;
- phase stability;
- radiation response;
- real power-density competitiveness.

OTA decides whether and how this maps to existing 2048 dossiers; Engineering IDs are not automatically OTA IDs.
