# EXTERNAL TASK — Mars Fabrication Center canonicalization review

- **Origin:** KUEPER Engineering
- **Target:** OTA
- **Date:** 2026-09-28
- **Status:** open
- **References:** `OTA-TEC-0089-2026-DE`, `ENG-SYS-MFC-0001`

## Request
Review Engineering closure `ENG-SYS-MFC-0001` for canonicalization into the OTA Mars Fabrication Center dossier.

## Proposed canon candidates
- fabrication center is a portfolio of qualified process cells, not a universal printer;
- distinguish manufacturability, feedstock availability and release/qualification authority;
- part criticality classes require escalating inspection/release evidence;
- feedstock states retain batch pedigree, contamination/process history and qualification state;
- recycling is lossy and quality-dependent;
- ISRU feedstock requires the explicit chain `raw material -> beneficiation -> refining -> alloying -> feedstock forming -> qualification`;
- early architecture prioritizes polymer AM, machining, joining, electrical/cable repair and metrology before advanced metal powder processes;
- power/heat/gas/water capacity is process-cell/configuration dependent, not a universal Mars-factory constant.

## Remain Engineering/open
Exact installed power, area, throughput, process gas inventory, machine set, mass and local-alloy closure remain configuration-specific `[S/H]` outputs.

OTA remains sole authority for any canonical identity/value changes.
