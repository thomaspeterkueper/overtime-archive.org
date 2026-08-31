# EXT-KG-OTA-20260831 — Audited technical alignment: OTA-TEC-0019, 0029, 0085

Requester: `SYS:KUEPER:knowledge-graph`
Recipient: `SYS:KUEPER:ota`
Type: evidence_alignment
Status: open
Date: 2026-08-31

## Context

KG research candidates expose corrections that belong to OTA content ownership. KG does not edit OTA source documents directly. For OTA-TEC-0029 the authoritative research state is now the R1 critical-review replacement of `RES-20260831-4CE6D2E5`.

## OTA-TEC-0085-2026-DE

Evidence: `RES-20260830-TEC0085A`.

- Keep the dossier `ENTWURF` / KG `draft_productive` until OTA accepts the component schema and evidence closure.
- Replace `kg.system: SYS:OTA:overtimearchive` with canonical `SYS:KUEPER:ota`.
- `KD:SPACE-PROPULSION:N2` is canonical in KG and may remain referenced.
- Refine real Hydrolox range and distinguish real single-value anchors from the fictional 450 kN @ 465 s combination.
- Treat external plausibility of the combination as `[H]`, while the actual CYGNUS value remains `[F]` / combination closure `[OFFEN]`.
- Add cycle/nozzle/packaging constraints and restart/lifetime evidence from the audit; preserve the vehicle-dependent Engine-out caveat.

## OTA-TEC-0019-2091-DE

Evidence: `RES-20260831-C1748BD0` plus the later dedicated R1 survival-SOP request.

- Replace `kg.system: SYS:OTA:overtimearchive` with canonical `SYS:KUEPER:ota`.
- Correct Survival Mode wording: `>15 mmHg` is `SCHWARZ`, not `ROT`.
- Do not present a 30–60 s oxygen-candle spacing as externally validated unless future KITE hardware defines it.
- Keep pressure/O2 thresholds coupled to oxygen fraction, duration and system context rather than presenting isolated universal NASA limits.

## OTA-TEC-0029-2048-DE

Evidence: `RES-20260831-4CE6D2E5`, **R1 critical-review replacement**.

- Replace `kg.system: SYS:OTA:overtimearchive` with canonical `SYS:KUEPER:ota`.
- Correct stale frontmatter title/summary/tags if they still describe thermal diodes although the body is Quantensensorik/LOD validation.
- Correct Bothwell citation year to **2019**.
- Do not publish institution-wide clock tables as directly comparable `[R]` facts without measurement context. Separate systematic uncertainty, stability/noise, integration time, uptime and cost.
- Remove/correct the misattributed `3.2e-18` Yb value; it is not a generic RIKEN Yb lattice-clock value. Bind every institutional number to the concrete clock/system and source.
- Treat SQUID noise floors as configuration/bandwidth dependent. Remove any universal `10^7` SQUID-vs-Hall factor.
- Atom-interferometer sensitivity values require averaging/integration-time context; do not present long-integration resolution as single-shot performance.
- Do not state that a SQUID directly measures Dst. Dst is a derived multi-observatory geomagnetic index.
- Bind LOD precision to concrete IERS products and measurement regimes; do not assign one universal precision/TRL number to VLBI/GNSS/SLR as a class.
- Keep fictional AVI network, validation thresholds and LLM performance projections explicitly separated from `[R]` hardware/evidence claims.

## KG state

Registered:
- `DOC:OTA:OTA-TEC-0085-2026-DE` — `draft_productive`
- `DOC:OTA:OTA-TEC-0019-2091-DE` — `canonical`
- `DOC:OTA:OTA-TEC-0029-2048-DE` — `canonical`
- `KD:SPACE-PROPULSION:N2` — `canonical`

## Acceptance criteria

1. OTA source documents incorporate evidence corrections without overwriting fictional canon with real-world values.
2. All three headers use `SYS:KUEPER:ota`.
3. OTA-TEC-0085 remains non-canonical until its own OTA schema/canon decision is complete.
4. OTA-TEC-0019 terminology/procedures remain internally consistent with the dedicated R1 request.
5. OTA-TEC-0029 frontmatter matches its actual subject and every `[R]` performance claim is tied to the correct observable, instrument, source and integration regime.
