# OTA Reference Registry

`reference-registry.json` contains metadata for document targets that are referenced by the archive but are not currently available as canonical documents in `src/content/documents`.

A registry entry has this shape:

```json
{
  "target": "OTA-TEC-0097-2026-DE",
  "title": "Working title",
  "description": "What the referenced element is known or expected to contain.",
  "status": "unresolved",
  "descriptionStatus": "reconstructed",
  "evidence": [
    {
      "source": "OTA-FND-0034-2026-DE",
      "context": "Why this target is known from the source document."
    }
  ]
}
```

## Status values

- `unresolved`: referenced, but no canonical target document is currently present.
- `planned`: the target is intentionally planned but not yet written/imported.
- `uncertain`: the identity or existence of the target is not yet sufficiently established.
- `resolved` is not stored here; it is derived automatically when a canonical document with the target signature exists.

## Description status

- `explicit`: the description is explicitly stated in a source.
- `reconstructed`: the expected content is inferred from one or more references.
- `planned`: the description is a specification for a document that still has to be created.
- `uncertain`: the description is provisional and weakly supported.

Canonical documents remain authoritative for their own `title` and `summary`. Registry title/description fields are only fallbacks for targets that are not yet present.

The build script `scripts/build-reference-index.mjs` inventories OTA signature mentions across document text and combines them with canonical document metadata and this registry. The generated result is written to `internal-references.generated.json` and rendered at `/referenzen`.
