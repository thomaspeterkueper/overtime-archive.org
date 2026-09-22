---
id: EXT-ENG-OTA-20260920-GRAVITY-HUMAN-ENVIRONMENT-CANONICALIZATION
title: Canonicalization decision for gravity-flexible human settlement architecture
status: done
source: KUEPER Engineering
target: OTA
created: 2026-09-20
priority: high
affects: [OTA, NOXIA, Generation Mars, KG]
sourceDocuments:
  - OTA-SCI-0086-2026-DE
engineeringOutputs:
  - systems/gravity-human-environment-architecture-r1.md
  - systems/gravity-human-environment-matrices-r1.md
  - systems/gravity-human-environment-r1.json
  - calculations/ENG-CAL-0004-artificial-gravity-parameter-model.md
  - systems/reproductive-obstetric-neonatal-low-g-architecture-r1.md
---

## Decision requested

KUEPER Engineering has closed the child-development, reproductive/obstetric and general human-adaptation gravity architecture requests with one shared gravity-flexible architecture.

OTA is asked to decide which parts should become world/canon constraints and which remain engineering options.

## Engineering result

The selected robustness pattern is a staged **A -> B -> C** architecture:

1. native/local gravity plus configurable intermittent artificial gravity;
2. mixed-gravity settlement with a large shared rotating zone;
3. continuously occupied rotating family/medical zone when required.

Settlement interfaces should be upgradeable between these stages without replacing the ECLSS/medical core.

This selection does **not** assert that continuous AG is biologically required.

## Parameters that remain configurable

- native gravity;
- target artificial gravity;
- radius and rotation rate;
- occupied radial span / gravity gradient;
- exposure duration and schedule;
- continuous versus intermittent operation;
- life stage;
- gravity-transition profile.

The physical relation is owned by Engineering: `a = omega^2 r`. Biological sufficiency is not.

## Evidence boundary to preserve

Per OTA-SCI-0086 v1.1, OTA should preserve as unresolved:

- minimum safe gravity for pregnancy or development;
- whether lunar ~0.16 g is sufficient;
- whether Martian ~0.38 g is sufficient;
- minimum useful daily/weekly AG exposure;
- equivalence of intermittent and continuous AG;
- pediatric/pregnancy rotation tolerance;
- ability of people raised in partial gravity to tolerate Earth gravity;
- reversibility of developmental differences.

No fixed NOXIA birth-rate modifier, developmental penalty or demographic bonus follows from the Engineering result.

## Capability distinction proposed for canon

Engineering recommends retaining the four distinct settlement capability classes already supported by OTA evidence:

1. `adult-survival-capable`;
2. `pregnancy-and-birth-capable`;
3. `child-development-capable`;
4. `multigenerational-capable`.

A settlement must not inherit a higher class merely because it has the lower one.

## Radiation

Radiation protection and artificial gravity remain independent design axes. Nursery, school, sleep, obstetric/neonatal and developmental-monitoring spaces should be preferentially integrated with protected/safe-haven zones, but rotation itself is not shielding.

## OTA decisions requested

Please decide:

1. whether the four capability classes become canonical OTA terminology;
2. whether staged A->B->C gravity-flexible settlement architecture becomes the default long-term multigenerational design doctrine or remains one engineering option;
3. which named settlements/ships, if any, canonically implement A, B or C;
4. whether OTA technical dossiers should reference the shared Engineering gravity contract;
5. whether additional KG relations/records are required.

## NOXIA return boundary

After OTA decision, NOXIA may map canonical capability classes and architecture availability into simulation constraints. Costs, build times, balancing, population effects and gameplay modifiers remain NOXIA-owned.


## OTA decision — 2026-09-22

Accepted into OTA-SCI-0086 v1.2: the four distinct settlement capability classes and the gravity-flexible Engineering interface. A→B→C remains a robust Engineering option, not a biological requirement. No named settlement or ship is assigned an architecture stage by this decision. Radiation remains an independent design axis. NOXIA may consume capability distinctions but owns gameplay values.
