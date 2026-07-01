# Overtime Archive Governance

Status: productive draft
Updated: 2026-07-01
System authority: OTA / Overtime Archive

## Scope

This repository is responsible for the Overtime Archive only.

OTA owns:

- OTA documents
- OTA document metadata
- OTA archive structure
- OTA publication workflow
- OTA-internal document relations
- OTA imports and references to external knowledge systems

## External systems

The following systems are external to OTA:

- kueper-knowledge-graph
- solarsciencefoundation / SSF
- noxiagame / NOXIA
- kueper.com

OTA may reference these systems, but OTA must not directly modify their records, schemas, learning paths, unlocks, or publication behavior.

## Master data rule

The Kueper Knowledge Graph is the single source of truth for shared knowledge records.

OTA documents may reference Knowledge Graph IDs, including entities, concepts, places, organizations, documents, knowledge domains, prerequisites, relations, and learning modules.

OTA documents must not redefine records that belong to the Knowledge Graph.

## External task rule

If OTA work shows that another system needs a change, the change must be written as an External Task.

Examples:

- A missing entity is a task for kueper-knowledge-graph.
- A missing learning module is a task for solarsciencefoundation.
- A missing game unlock is a task for noxiagame.
- A publication or presentation change is a task for kueper.com.

Do not implement external-system changes from this repository.

## Contributor rule

Before changing this repository, contributors must ask:

Does this change affect OTA only?

If the answer is no, create an External Task instead of changing the external system directly.
