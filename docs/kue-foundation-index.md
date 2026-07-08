# KUE Foundation Index Contract

Updated: 2026-07-08

The KUE foundation index is a read-only input for OTA tools.

OTA consumes this index to identify possible scientific foundation links from OTA documents to KUE documents.

## Ownership

The source of truth for KUE documents remains `kueper.com`.

OTA may store an imported or example index for testing and matching, but OTA must not treat this index as the canonical KUE document registry.

## Schema

Schema file:

```text
schema/kue-foundations-index.schema.json
```

Example file:

```text
examples/kue-foundations.index.example.json
```

## Required fields

At minimum, each KUE document entry should provide:

- `id`
- `title`

Recommended fields:

- `subtitle`
- `summary`
- `keywords`
- `kd`
- `legacyKnowledgeIds`
- `status`
- `path`

## Knowledge IDs

Use canonical KD identifiers in `kd`.

`KNOW:*` may appear only in `legacyKnowledgeIds`.

## Usage with matcher

```bash
python tools/ota_foundation_matcher.py \
  --kue-index examples/kue-foundations.index.example.json \
  content \
  --output reports/ota-foundation-matches.md
```

## Result handling

- `MATCH`: curator may add an OTA to KUE reference after review.
- `MULTIPLE`: curator review required.
- `NO_MATCH`: weak signal, review manually.
- `MISSING_FOUNDATION`: create an External Task for `kueper.com` requested-foundations inbox.
