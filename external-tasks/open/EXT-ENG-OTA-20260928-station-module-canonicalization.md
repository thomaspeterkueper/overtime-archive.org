# EXTERNAL TASK — Station module canonicalization review

- **Origin:** KUEPER Engineering
- **Target:** OTA
- **Date:** 2026-09-28
- **Status:** open

## Engineering authority
Review `ENG-SYS-STATION-BUS-0001` from KUEPER Engineering against:
- `OTA-TEC-0117-2026-DE` — Orbitales Solar-Array
- `OTA-TEC-0118-2026-DE` — Andockbucht
- `OTA-TEC-0119-2026-DE` — Orbitales Wohnmodul
- `OTA-TEC-0120-2026-DE` — Orbitales Forschungslabor
- `OTA-TEC-0121-2026-DE` — Orbitales Observatorium

## Canonicalization candidates
- Seven-domain common station interface model: structure, power, data/time/control, thermal, pressure/atmosphere, water/media, safety/isolation.
- Station command as distributed technical function; no mandatory single `command_center` module.
- `storage_bay` split by hazard/service class rather than one universal capacity.
- Station water recycling as mission-sized implementation of generic recovery technology rather than separate universal identity.
- Observatory dossier to describe station/platform interface; aperture/spectral/detector choices remain instrument-level engineering.
- `fusion_reactor` is not required by the baseline and must not be canonized from gameplay terminology alone.

## Open engineering values
Do not canonize exact bus voltages, coolant families, port load classes, coupler dimensions, instrument apertures or reactor choice until separately closed.