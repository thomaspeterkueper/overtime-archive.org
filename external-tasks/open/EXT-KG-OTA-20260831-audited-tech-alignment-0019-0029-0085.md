# EXT-KG-OTA-20260831 — Audited technical alignment: OTA-TEC-0019, 0029, 0085

Requester: `SYS:KUEPER:knowledge-graph`
Recipient: `SYS:KUEPER:ota`
Type: evidence_alignment
Status: open
Date: 2026-08-31

## Context

Three new KG research candidates expose corrections that belong to OTA content ownership. KG has registered the stable document identities and the missing advanced propulsion domain, but does not edit OTA source documents directly.

## OTA-TEC-0085-2026-DE

Evidence: `RES-20260830-TEC0085A`.

- Keep the dossier `ENTWURF` / KG `draft_productive` until OTA accepts the component schema and evidence closure.
- Replace `kg.system: SYS:OTA:overtimearchive` with canonical `SYS:KUEPER:ota`.
- `KD:SPACE-PROPULSION:N2` is now canonical in KG and may remain referenced.
- Refine real Hydrolox range and distinguish real single-value anchors from the fictional 450 kN @ 465 s combination.
- Treat the external plausibility of the combination as `[H]`, while the actual CYGNUS value remains `[F]` / combination closure `[OFFEN]`.
- Add cycle/nozzle/packaging constraints and restart/lifetime evidence from the audit; preserve the vehicle-dependent Engine-out caveat.

## OTA-TEC-0019-2091-DE

Evidence: `RES-20260831-C1748BD0`.

- Replace `kg.system: SYS:OTA:overtimearchive` with canonical `SYS:KUEPER:ota`.
- Correct Survival Mode wording: `>15 mmHg` is the `SCHWARZ` CO2 level, not `ROT`.
- Correct oxygen-candle procedure: do not instruct ignition at 30–60 s spacing; use sequential operation after the previous candle has burned out unless OTA intentionally defines different future hardware.
- Clarify that 18 kPa pO2 is an acceptance threshold below the NASA normoxia target band and that `<15 kPa` is a conservative safety-margin line rather than an acute-danger threshold.
- Preserve the canonical numerical bands unless OTA deliberately revises them.

## OTA-TEC-0029-2048-DE

Evidence: `RES-20260831-4CE6D2E5`.

- Replace `kg.system: SYS:OTA:overtimearchive` with canonical `SYS:KUEPER:ota`.
- Correct the stale frontmatter title/summary/tags, which currently describe thermal diodes although the document body is Quantensensorik/LOD validation.
- Correct Bothwell citation year from 2022 to 2019.
- Remove/correct the misattributed RIKEN Yb `3.2e-18` value and unsupported PTB `1.8e-18`, uptime and institution-cost figures unless primary sourcing is added.
- Narrow SQUID-vs-Hall sensitivity claim; `10^7` is not generally supported.
- Remove the practice claim that SQUID directly measures the Dst index; Dst is a derived geomagnetic index.
- Keep fictional AVI network, validation thresholds and LLM performance projections explicitly separated from `[R]` hardware/evidence claims.

## KG state

Registered:
- `DOC:OTA:OTA-TEC-0085-2026-DE` — `draft_productive`
- `DOC:OTA:OTA-TEC-0019-2091-DE` — `canonical`
- `DOC:OTA:OTA-TEC-0029-2048-DE` — `canonical`
- `KD:SPACE-PROPULSION:N2` — `canonical`

KXF: `0.6.6`.

## Acceptance criteria

1. OTA source documents incorporate the evidence corrections without overwriting fictional canon with real-world values.
2. All three headers use `SYS:KUEPER:ota`.
3. OTA-TEC-0085 remains non-canonical until its own OTA schema/canon decision is complete.
4. OTA-TEC-0019 terminology and oxygen-candle procedure are internally consistent.
5. OTA-TEC-0029 frontmatter matches its actual document subject and unsupported `[R]` claims are corrected or downgraded.
