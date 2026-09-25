---
id: EXT-ENG-OTA-20260925-CYGNUS-CTV-CANONICALIZATION
title: Canonicalization decision for CYGNUS CTV mass and cislunar transport architecture
status: open
source: KUEPER Engineering
target: OTA
created: 2026-09-25
priority: high
affects: [OTA, KUEPER-ENGINEERING, KG, NOXIA]
sourceDocuments:
  - OTA-TEC-0082-2026-DE
  - OTA-TEC-0025-2050-DE
engineeringOutputs:
  - calculations/ENG-CAL-0012-cygnus-ctv-mass-delta-v-r1.md
  - systems/cygnus-ctv-transport-architecture-r1.md
relatedEngineering:
  - calculations/ENG-CAL-0010-gateway-nrho-access-r1.md
---

# Decision requested

KUEPER Engineering has completed the CYGNUS CTV mass / propellant / Delta-v closure requested by `EXT-OTA-ENG-20260905-cygnus-mass-closure.md`.

OTA is asked to decide which historical vehicle values should be retained as worldsetting, which should be replaced, and whether Gateway should be canonicalized as an NRHO-class hub.

No OTA document has been silently changed by Engineering.

## 1. Conflict confirmed

The historical combination in `OTA-TEC-0082-2026-DE` and `OTA-TEC-0025-2050-DE` is not physically closed:

```text
dry mass             85 t
payload design point 20 t
propellant            75 t LH2/LOX
loaded mass          180 t
Isp                   465 s
claimed Delta-v        5.2 km/s
```

At 465 s the actual ideal Delta-v for 180 t -> 105 t is approximately **2.458 km/s**.

Even with zero payload, 85 t dry + 75 t propellant yields only approximately **2.884 km/s**.

## 2. What 5.2 km/s would require

At 465 s, a 5.2 km/s ideal Delta-v requires a mass ratio of approximately 3.1278.

If OTA preserves 85 t dry mass and 20 t payload to burnout:

```text
final mass        105 t
initial mass      ~328.42 t
propellant        ~223.42 t
```

This is only the mathematical floor. Increasing propellant capacity by roughly a factor of three implies larger tanks, support structure, insulation, plumbing and thermal-control hardware, so the real dry mass would require re-closure.

## 3. Grounded mission reference

Engineering's existing `ENG-CAL-0010` provides one consistent fast-transfer reference set:

```text
LEO -> NRHO        ~3.726 km/s
LEO -> 100 km LLO  ~4.228 km/s
```

Both are before mission-specific MCC, RPOD and protected reserve.

A fully propulsive return of the complete CYGNUS to LEO is of the same order again. Therefore the old 5.2 km/s number cannot describe an independently closed LEO -> lunar orbit -> LEO round trip.

## 4. Recommended technical baseline

Engineering recommends that CYGNUS become canonically a **reusable, depot-supported cislunar ferry operated per leg**.

Design doctrine:

1. fuel and service at the Earth-side orbital hub;
2. execute one fast cislunar leg;
3. dock at NRHO-class Gateway or LLO infrastructure;
4. unload, inspect and refuel;
5. execute the return leg;
6. use an explicitly defined Earth-side orbital-capture architecture; do not assume atmospheric capture of the CYGNUS hull.

Initial Engineering sizing envelope for subsequent tank/structure closure:

```text
dry mass target      ~85–100 t class
payload              up to ~20 t class
usable propellant    ~180–220 t class
loaded mass          ~285–340 t class
ideal per-fill dv    ~4.5–4.9 km/s class
```

These are not requested as frozen canon values. They define the physically relevant design region.

## 5. Proposed changes to OTA-TEC-0082-2026-DE

Engineering recommends OTA consider the following edits:

### Preserve

- CYGNUS identity and reusable cislunar-transporter role;
- Hydrolox propulsion family;
- high-Isp chemical propulsion regime around the existing 450–465 s reference class;
- fast multi-day cislunar transfer role;
- up-to-20-t payload as a design requirement candidate;
- 72–84 h as a fictional fast-transfer worldsetting, with trajectory dependence preserved.

### Replace or reopen

- replace the simultaneous `85 t / 180 t / 75 t / 5.2 km/s` set;
- retain 85 t dry mass only as a legacy/design target pending new structural closure;
- remove 180 t loaded and 75 t propellant as authoritative values for a self-propelled fast cislunar ferry;
- remove 5.2 km/s as a physically closed single-fill value unless OTA deliberately selects a >~328 t mathematical vehicle and accepts further dry-mass growth;
- leave exact engine count/thrust open pending finite-burn closure;
- leave exact tank geometry/thermal budget open pending cryogenic closure.

### Clarify

- distinguish vehicle Delta-v **per propellant load** from complete route/network Delta-v;
- make destination refuelling/staging explicit for reusable service;
- state that Earth return/capture requires an explicit architecture rather than being implicit.

## 6. Proposed changes to OTA-TEC-0025-2050-DE

Engineering recommends OTA consider:

1. revising section 3.2 so the old mass table is no longer presented as a simultaneously closed technical specification;
2. retaining historical dimensions, crew-comfort language and service role only where they do not imply the old mass closure;
3. replacing the single 5.2 km/s line with either:
   - a per-fill capability to be frozen after tank/structure closure, or
   - a statement that CYGNUS performance is mission-profile dependent and depot-supported;
4. revising section 3.4 so `3.1 + 0.8 = 3.9 km/s` is clearly a first-order historical shorthand, while Engineering uses a stronger common reference of ~4.23 km/s for fast LEO->LLO screening;
5. adding destination refuelling / depot turnaround to the service architecture if OTA accepts the recommended baseline.

## 7. Gateway / EML-2 decision

`OTA-TEC-0025` calls Gateway an `EML-2` station. Engineering's grounded reference is a southern L2 9:2 NRHO-class orbit.

These are not silently identical.

OTA is asked to choose one of:

### Option G1 — canonicalize Gateway as NRHO-class

Benefits:
- immediate use of the existing grounded `ENG-CAL-0010` transfer regime;
- coherent depot/safe-haven/reusable-vehicle basing role;
- fewer ambiguous orbit claims.

### Option G2 — retain fictional EML-2 Gateway

Then exact transfer Delta-v remains `[OFFEN]` until an explicit orbit/trajectory definition is supplied.

Engineering recommends **G1** as the technically cleaner worldbuilding choice, but OTA retains canonical authority.

## 8. Alternatives if OTA does not accept the recommended ferry baseline

### Alternative A — keep the 180 t / 75 t hull and use external stages/tugs

Technically possible. CYGNUS itself remains a ~2.46 km/s full-payload vehicle and relies on external Earth-departure/capture infrastructure. The old 5.2 km/s value would have to become a stack/network value rather than CYGNUS single-fill capability.

### Alternative B — preserve 5.2 km/s onboard

Requires at least ~328.4 t initial mass and ~223.4 t propellant at unchanged 105 t burnout mass, with real design expected above that floor after structural growth.

### Alternative C — lower payload

Insufficient as sole correction; zero payload with the historical 75 t propellant still yields only ~2.88 km/s.

### Alternative D — lower dry mass

At 180 t initial mass, 5.2 km/s at 465 s requires final mass <=~57.55 t. With 20 t payload retained, vehicle dry mass would have to be <=~37.55 t. This is not a credible minimal change to the existing 42 m crewed transporter.

### Alternative E — preserve masses by raising chemical Isp

The 180/105 mass ratio would require roughly **953 s** effective Isp for 5.2 km/s. That is not a Hydrolox chemical-rocket regime and should not be used as a repair.

## 9. OTA decisions requested

Please decide:

1. whether the old `85/180/75/5.2` combination is formally retired as a simultaneously valid technical set;
2. whether CYGNUS is canonically a depot-supported/refuelled-leg cislunar ferry;
3. whether 85 t dry and 20 t payload remain design targets pending next Engineering iteration;
4. whether OTA wants a ~4.5–4.9 km/s per-fill design region or instead requires preservation of 5.2 km/s onboard;
5. whether Gateway becomes explicitly NRHO-class or remains a distinct fictional EML-2 orbit;
6. whether the 72–84 h fast-transfer setting remains canonical as a mission-class value;
7. whether Engineering should proceed with tank/thermal/structure and engine-cluster closure after this decision.

## 10. NOXIA / KG boundary

No gameplay range, fuel consumption, build cost, travel time balancing or technology unlock follows directly from this request.

After OTA decides the canonical vehicle/network architecture:

- KG may update identities and relations;
- NOXIA may consume the canonical constraints and own balancing;
- Engineering may close the detailed tank, thermal, structure and propulsion design.
