# OTA archive governance

The Overtime Archive separates three kinds of time and authority that must not be conflated.

## 1. Document time

`year` and the year segment of `signature` describe the document's in-universe or subject chronology. They are not repository timestamps.

## 2. Archive lifecycle

The optional lifecycle fields describe real archive provenance:

- `archivedAt`: first canonical admission to the OTA archive, ISO-8601 with timezone.
- `updatedAt`: last deliberate canonical metadata/content revision, ISO-8601 with timezone.
- `provenance.source`: origin of the archived material when known.
- `provenance.importedAt`: real import timestamp when known.
- `provenance.reviewedAt`: timestamp of the latest explicit editorial review.
- `provenance.reviewStatus`: `unreviewed`, `metadata-reviewed`, `content-reviewed`, or `canonical-reviewed`.

Legacy documents may omit these fields. Missing lifecycle data must remain missing; it must never be reconstructed from fictional document years or guessed from filenames.

## 3. Authority and KUEPER Knowledge Graph

OTA is an archive/projection, not the ecosystem-wide source of truth. If a `kg` block is present:

- `master` must be `kueper-knowledge-graph`.
- `system` must be `SYS:OTA:overtimearchive`.
- `sourceOfTruth` must never be `true`.
- `documentId`, when present, must equal the OTA `signature`.
- `knowledge.domains` references KUEPER knowledge-domain IDs; OTA must not define competing local knowledge domains.

A missing KG projection is a migration gap, not permission to invent graph IDs. Graph/entity relations should only be added from an actual KUEPER mapping or a reviewed source.

## 4. Epistemic metadata

`epistemicStatus` is descriptive metadata and must preserve the document's actual epistemic framing. Historical/speculative material must not be silently promoted to established research. A later review may clarify or downgrade metadata, but it must not rewrite the document's intellectual history without an explicit revision note.

Short epistemic markers must not be migrated solely by letter. The archive contains legacy and document-local marker vocabularies; a marker is only globally interpretable after its definition and usage have been reviewed. Generated epistemic audits therefore report observed frontmatter markers, body markers and local legend evidence before any migration is attempted.

## 5. Relation policy

Inline mentions of another OTA signature are candidates for relations, not automatically canonical relations. `relatedDocuments` should be added only when the semantic relation is clear enough to classify as `references`, `basis`, `prerequisite`, `extends`, `contradicts`, `supersedes`, `clarifies`, or `related`.

The quality report distinguishes free inline mentions from explicit relation evidence such as source/basis labels and related-document sections. Even explicit candidates remain editorial review input rather than permission for blind automatic mutation.

## 6. Governance introduction baseline (2026-09-08)

When archive governance was introduced, the successful `Validate OTA` quality artifact reported:

- 273 canonical documents
- 155 substantial, 86 short, 32 fragments
- 149 generic titles
- 46 generic summaries
- 239 documents with relation gaps
- 1,188 relation candidates, none then marked safe for automatic application

These figures are a historical baseline, not live documentation. Curated passes intentionally change them. The current state is always the latest generated `archive-quality.generated.json` artifact; epistemic usage is tracked separately in `epistemic-quality.generated.json`.

Review order is:

1. structural consistency and lifecycle schema,
2. highest-priority metadata defects,
3. epistemic review of scientific/foundational material,
4. semantic relation review,
5. KUEPER KG projection once graph mappings are available,
6. only then use `archivedAt` for a genuine “recently archived” view.

## 7. CI invariants

`tools/validate_ota_metadata.py` enforces machine-checkable invariants for canonical documents, including filename/signature agreement, series/number/language agreement with the signature, and KUEPER authority constraints. Editorial judgments remain review work and are not auto-corrected.