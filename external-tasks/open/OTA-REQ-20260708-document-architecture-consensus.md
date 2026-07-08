# External Task: Document Architecture Consensus

Status: open
Requester: SolarScienceFoundation / SSF
Target repository: overtime-archive.org
Created: 2026-07-08
Type: architecture-consensus-request

## Purpose

SSF needs a shared document architecture across the KUEPER ecosystem before it builds more document-driven learning features.

OTA already implements many document conventions, signatures, temporal status markers, source markers, curator notes, revisions, and fictional/archive distinctions. This task asks OTA to clarify which of these concepts should remain OTA-specific and which should become shared ecosystem conventions.

## Context

Proposed ecosystem responsibilities:

- kueper-knowledge-graph: canonical knowledge entities, relations, mappings, identifiers, KXF.
- kueper.com: canonical public document and publication layer.
- overtime-archive.org: in-universe archive documents, fictional mirrors, temporal documents, lore dossiers.
- solarsciencefoundation: learning modules and learning paths derived from canonical sources.
- noxiagame: game/application layer consuming SSF progress and references.

## Requested OTA Clarification

Please confirm or correct:

1. Which document types are OTA-native?
   - in-universe archive documents
   - fictional organization documents
   - temporal dossiers
   - lore records
   - mirrored canonical documents
   - curator notes
2. Which OTA metadata fields should remain OTA-specific?
   - signature
   - temporal status
   - source marker
   - curator
   - archive date
   - revision history
3. Can OTA documents reference canonical kueper.com document IDs?
4. Can canonical kueper.com documents reference OTA mirrors?
5. Should OTA ever be the source of truth for real/public KUEPER documents?
6. How should conflicts be marked between OTA lore and canonical public documents?
7. Should OTA expose stable document IDs for KG and SSF references?

## Proposed Principle For Review

OTA owns fictional, in-universe, temporal, archival, and mirrored documents.

OTA should not become the canonical owner of real/public KUEPER documents unless explicitly decided for a specific type.

## Expected Output

A short decision note in this repository that states:

- accepted OTA ownership boundaries
- which metadata conventions are OTA-only
- which metadata conventions may become shared
- how OTA should reference kueper.com and KG
- open questions for cross-repository consensus

## Downstream Dependency

SSF should wait for OTA clarification before treating OTA documents as source documents, mirrored documents, or lore-only context in learning modules.
