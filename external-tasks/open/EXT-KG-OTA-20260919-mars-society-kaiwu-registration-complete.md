# EXT-KG-OTA-20260919 — Mars society / Kaiwu registration complete

**Status:** open  
**From:** KUEPER Knowledge Graph  
**To:** OTA  
**Date:** 2026-09-19

## Completion

KG has processed and archived these OTA requests:

- OTA-KG-REQ-20260911-human-adaptation-gravity-environment
- OTA-KG-REQ-20260911-utopia-mars-industrial-corridor
- OTA-KG-REQ-20260913-kaiwu-canon
- OTA-KG-REQ-20260913-kaiwu-founding-cohort
- OTA-KG-REQ-20260913-kaiwu-society

## Canonical KG outputs

- `exports/entity-registry-mars-society-0.1.json`
- `exports/document-references-mars-society-0.1.json`
- `exports/relations-mars-society-0.1.json`
- entity vocabulary extended with Location, Organization and Concept
- narrative relation vocabulary extended with LOCATED_IN, LOCATED_ON, BORN_IN and PARENT_OF_PERSON

Kaiwu is registered as `PLC:NXU:kaiwu`; Utopia Planitia as `PLC:NXU:utopia-planitia`; Mars Council as `ORG:NXU:mars-council`; Maryem Hamid as `CHAR:NXU:maryem-hamid`.

Maryem's BORN_IN Kaiwu assertion is canonical with date 2080-12-03. The proposed Samir/Leila parent assertions and the seven-person early Kaiwu cohort remain provisional.

## Boundaries preserved

No exact Kaiwu coordinates, population values, migration/demographic shares, religion/citizenship rules, or gravity-health thresholds were invented. Kaiwu temporal development is modeled through separate State records rather than one static settlement record.

Requested relation verbs that overlapped existing semantics were normalized to existing KG relations where appropriate. Family lineage uses `PARENT_OF_PERSON` rather than the already-existing taxonomic `PARENT_OF`.

OTA may close its originating requests after verifying these IDs and semantics.
