# KG request: canonize MediaAsset model as OTA-ARC-0010

ID: REQ:L3:PENDING
Requester: SYS:KUEPER:knowledge-graph
Recipient: SYS:KUEPER:ota
Request Type: document_request
Status: open
Created: 2026-07-11

## Purpose

The MediaAsset layer already exists in the Knowledge Graph as a complete specification — `docs/MEDIA-ASSETS.md` (prose spec), `schemas/media-asset.schema.json` (schema), `media/README.md` (registry rules) and `media/index.json` (registry, `REG:L3:media`). It is not yet canonized as an ecosystem-level architecture decision. This request asks OTA to elevate the model to the Archive Standards Series as **OTA-ARC-0010-2026-DE**, so that all systems (SSF, NOXIA, OTA, kueper.com, KUE, …) are bound to it.

## Requested Content

A ready-to-place draft is provided: `OTA-ARC-0010-2026-DE.md`, formatted for `src/content/internal/arc/`, matching the house style of ARC-0006 / ARC-0009 (frontmatter, `[W]` sections, Kuratornotiz blocks, revision history).

The draft canonizes, without inventing new rules:

- Principle "a medium is not knowledge"
- ID scheme `MED:L3:<slug>` (semantic slug + 3-digit counter, no domain meaning)
- `mediaType` vocabulary (image, diagram, video, audio, score, animation, interactive, model3d, thumbnail, cover, map)
- Rights / visibility / provenance (owner + license mandatory; narrative assets default `restricted`; owner default `PER:L3:thomas_peter_kueper`, `all_rights_reserved`)
- Storage backends + variants; KXF rule (never transports raw binary)
- Reference direction (normative): the asset declares `usedBy`; consumers reference the `MED:L3:*` id and do not hardcode raw file paths
- Registry `media/index.json` in the KG as single source of truth

It also records two open refinements as `[OFFEN]`: a multi-repo `source.sourceSystem` qualifier, and retirement of the ad-hoc `assets` block on learning modules.

## Requested Action

1. Review the draft.
2. On acceptance, set frontmatter `status: "AKTIV"` and body status to "Kanonisch", assign the next series number (confirmed free: 0010), and commit to `src/content/internal/arc/OTA-ARC-0010-2026-DE.md`.
3. Add `OTA-ARC-0010-2026-DE` to the `relatedDocuments` of ARC-0006 and ARC-0009.
4. Return the canonical status to the Knowledge Graph so the KG can reference ARC-0010 from `docs/MEDIA-ASSETS.md`.

## Blocking

Non-blocking. The KG implementation is functional without canonization; this request formalizes ecosystem-wide authority. The KG-internal wiring (module ↔ registry) and cross-repo notices proceed in parallel.

## Target

OTA Archive Standards Series (`src/content/internal/arc/`).


---

## Erledigt (2026-07-13)

OTA-ARC-0010-2026-DE kanonisiert, Status AKTIV/Kanonisch. Committed unter `src/content/internal/arc/OTA-ARC-0010-2026-DE.md`. Eingetragen in `relatedDocuments` von ARC-0006 und ARC-0009. Die zwei offenen Praezisierungen (Multi-Repo-Speicherqualifier, Ablösung Ad-hoc-assets-Block) bleiben als [OFFEN]/[AUSSTEHEND] im Dokument selbst dokumentiert, nicht Teil dieses Tasks. Bitte KG informieren, dass ARC-0010 kanonisch ist.
