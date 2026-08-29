# OTA-TEC Technical Object Dossier Schema

Updated: 2026-08-29
Status: canonical schema for technical object dossiers

## Purpose and ownership

This schema defines how the OverTime Archive documents technical devices, structures, vehicles, plants and infrastructure as `OTA-TEC` dossiers.

OTA is Source of Truth for the documentary and technikhistorical presentation of these dossiers. It does not take ownership of foreign domain records:

- NOXIA remains Source of Truth for game objects, unlocks, balance and progression.
- SSF remains Source of Truth for learning paths and didactic content.
- KUEPER Knowledge Graph remains Source of Truth for shared entity/module identities and cross-system structural records.

A dossier may reference those IDs but must not redefine them locally.

## Object classes

Every dossier declares exactly one primary object class:

- `device`
- `building`
- `vehicle`
- `plant`
- `infrastructure`

Additional descriptive tags may refine the class without creating new identity systems.

## Required document structure

### 1. Document identity

Use the OTA frontmatter contract: `src/content.config.ts` is the machine-validated contract enforced by `astro build` on every document in `src/content/documents`; `docs/ota-document-frontmatter.md` documents the governance conventions. The dossier-specific fields below extend the base contract additively.

Required dossier-specific metadata:

```yaml
signature: "OTA-TEC-0001-2026-DE"
id: "OTA-TEC-0001-2026-DE"
title: <canonical dossier title>
series: "TEC"
seriesNumber: 1
year: 2026
language: "DE"
version: "v1.0"
status: "ENTWURF"
accessLevel: 0
epistemicStatus: ["R", "H", "S"]
summary: <one-sentence dossier summary>
objectClass: plant

time:
  context: <period / technological horizon>

externalRefs:
  noxiaObjects: []
  noxiaUnlocks: []
  ssfLearningModules: []

kg:
  schema: KXF-0.2
  master: kueper-knowledge-graph
  documentId: "OTA-TEC-0001-2026-DE"
  graphId: "DOC:OTA:OTA-TEC-0001-2026-DE"
  system: SYS:OTA:overtimearchive
  sourceOfTruth: false

knowledge:
  domains:
    - id: "KD:PHYS-THERM:N1"
      level: "N1"
      purpose: read

entities:
  mentions: []

relations:
  requires: []
  teaches: []
  expands: []
  cites: []

sync:
  graphVersion: <version used during preparation>
  graphUpdated: <date>
  exportedFrom: kueper-knowledge-graph
```

Foreign IDs are references only. Missing shared identities are routed to the repository that owns them rather than invented in OTA.

### 2. Function and system boundary

State:

- intended function;
- what belongs to the system;
- what explicitly remains outside the system boundary;
- operational environment and users/operators where relevant.

The boundary must be concrete enough that inputs, outputs, dependencies and failure modes can be evaluated consistently.

### 3. Physical and technical principles

Describe the governing physical, chemical, biological or engineering principles. Separate established real-world principles from extrapolation and fictional setting-specific assumptions using the document's epistemic marking convention.

### 4. Main components

List the principal subsystems/components and their roles. Components should describe technical function, not duplicate NOXIA game balancing or SSF lesson structure.

### 5. Material, energy and information flows

Document the relevant flows through the system:

- material/media;
- energy;
- information/control/signals.

For each important flow identify origin, transformation and destination where known.

### 6. Inputs, outputs and by-products

Record normal inputs and outputs plus waste streams, rejected heat, emissions, concentrates, residues or other by-products where applicable.

### 7. Operating conditions and performance quantities

Use quantities that are technically meaningful for the object class, for example:

- pressure and temperature ranges;
- throughput;
- electrical/thermal power;
- efficiency;
- storage capacity;
- mass/volume;
- duty cycle;
- crew/passenger/load capacity.

Do not invent exact values merely to fill the schema. Unknown or scenario-dependent quantities remain explicitly open.

### 8. Dependencies and interfaces

Describe dependencies on other systems and technical interfaces. Cross-project references use stable foreign IDs where those already exist.

### 9. Failure modes, redundancy and maintenance

Cover credible failure modes, detection, degradation behavior, redundancy, repair/maintenance needs and relevant safety boundaries. Distinguish established engineering practice from extrapolated solutions.

### 10. Materials and manufacturing

Describe important materials, fabrication methods, joining/sealing methods and supply constraints where they materially affect system behavior or historical plausibility.

### 11. Real-world scientific and technical anchors

Provide traceable sources for the real-world basis. The dossier should make clear which statements are directly supported, generalized engineering knowledge, extrapolation, or fictional setting decisions.

### 12. Epistemic separation

Every dossier must keep these layers distinguishable:

- `[R]` / real scientific-technological basis;
- extrapolation derived from that basis;
- fictional/setting-specific implementation;
- open questions or undecided parameters.

The exact marker vocabulary follows the applicable OTA document convention; this schema does not create a competing epistemic taxonomy.

### 13. Relations to NOXIA and SSF

Use a compact relation block or table for existing external references, for example:

```yaml
externalRefs:
  noxiaObjects:
    - BLD:NOX:wasseraufbereitung-1
  noxiaUnlocks:
    - UNL:NOX:water-processing
  ssfLearningModules:
    - LRN:SSF:NOX-WATER-PROCESSING
```

A dossier may explain the technology behind these records, but it does not own their gameplay/didactic semantics.

### 14. Variants and technological development

Where useful, describe variants and their development over the OTA timeline. Variants should be represented as historical/technical dossier content unless a separate canonical identity is already supplied by the responsible Source of Truth.

## Pilot series

The following are dossier candidates under this schema. This plan deliberately does not allocate new OTA signatures or missing foreign identities; those are assigned through the normal OTA/KG governance path when each dossier is authored.

| Candidate | Primary class | Existing NOXIA reference | Main technical focus |
| --- | --- | --- | --- |
| Rohstoffgewinnungsanlage / Mine | plant | `BLD:NOX:mine-1` | extraction chain, separation, power, dust/waste, maintenance |
| Wasseraufbereitungsanlage | plant | `BLD:NOX:wasseraufbereitung-1` | water sources, filtration/separation, sterilisation, recovery loops |
| Solarfeld / Energieerzeugung | plant | `BLD:NOX:solarfeld-1` | irradiance, conversion, storage/interface, dust/thermal effects |
| Druckkabine / Druckkörper | building/device | — | pressure boundary, loads, sealing, leak detection, structural redundancy |
| Luftschleuse | building/device | — | pressure cycling, valves, seals, contamination control, interlocks |
| Lebenserhaltungsmodul | device/plant | — | O2 supply, CO2 removal, circulation, humidity and regeneration loops |
| Thermisches Kontrollsystem | device/plant | — | heat collection, transport, rejection, insulation and control |
| Habitat-Umweltsensorik | device | — | atmosphere/pressure/temperature sensing, calibration and fault detection |
| Strahlenschutzkonzept/-bauteile | infrastructure/building | — | shielding materials, geometry, dose management and operational trade-offs |
| Integriertes Mars-Habitat | building | `BLD:NOX:mars-habitat-1` | system integration, interfaces, redundancy and coupled failure modes |

## Extension to further technical classes

The same schema is intentionally usable for:

- vehicles: add propulsion, navigation, range/endurance and payload interfaces;
- production plants: emphasize process chain, feedstocks, yield and waste streams;
- infrastructure: emphasize network topology, capacity, interfaces and resilience;
- standalone devices: emphasize local function, power/data interfaces and maintainability.

Extensions should add class-specific fields without changing the common core sections above.

## Reference stability

NOXIA/SSF/KG references must use existing stable IDs. If an expected relation or identity is missing, create an external task in the owning repository. OTA does not create a local alias merely to satisfy a dossier.

This keeps the dossier URL/signature stable while allowing foreign systems to evolve independently behind their own canonical identifiers.
