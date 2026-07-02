# KG-0002 Knowledge ID Policy

Updated: 2026-07-02

KG-0002 changes the canonical form for knowledge-domain references.

## Canonical form

Use `KD:<DOMAIN-CODE>:<LEVEL>` as the primary knowledge-domain ID.

Example:

- legacy: `KNOW:GEO-SEISM` plus level `N2`
- canonical: `KD:GEO-SEISM:N2`

## Legacy form

`KNOW:*` is legacy.

It may appear only as:

- `legacyId`
- migration note
- alias mapping
- historical report reference

It must not be used as the primary `knowledge.domains[].id` value.

## Competency form

`CMP:*` is reserved for didactic competencies linked to a canonical `KD:*:*` domain.

OTA may reference CMP IDs where they already exist, but OTA must not define them locally.

## OTA rule

Correct:

```yaml
knowledge:
  domains:
    - id: KD:GEO-SEISM:N2
      legacyId: KNOW:GEO-SEISM
      purpose: read
```

Incorrect:

```yaml
knowledge:
  domains:
    - id: KNOW:GEO-SEISM
      level: N2
      purpose: read
```

## External task rule

If a required KD or CMP record is missing from the Knowledge Graph, create an External Task for `kueper-knowledge-graph`.
