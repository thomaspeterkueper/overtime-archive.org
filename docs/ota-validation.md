# OTA Metadata Validation

Updated: 2026-07-02

OTA uses a lightweight validator to protect the repository governance rules.

The validator is located at:

```text
tools/validate_ota_metadata.py
```

## What it checks

The validator checks OTA Markdown and YAML files for common metadata and governance problems.

It currently verifies:

- OTA document IDs use the expected format
- `kg.sourceOfTruth` is not set to `true`
- `kg.master` is `kueper-knowledge-graph`
- `kg.system` is `SYS:OTA:overtimearchive`
- `knowledgeDomains:` is not used to redefine KG-owned records locally
- knowledge levels are limited to `N1`, `N2`, `N3`, `N4`
- knowledge purposes are limited to `read`, `create`, `review`
- external systems are not marked as OTA-owned

## Local usage

From the repository root:

```bash
python tools/validate_ota_metadata.py .
```

Validate a single folder:

```bash
python tools/validate_ota_metadata.py content
```

Validate selected files:

```bash
python tools/validate_ota_metadata.py docs/ota-document-frontmatter.md examples/ota-document-frontmatter.md
```

## GitHub Actions

The workflow is located at:

```text
.github/workflows/validate-ota.yml
```

It runs automatically on:

- pull requests
- pushes to `master`

## Important boundary

This validator is OTA-only. It does not verify whether a referenced `KNOW:*` ID actually exists in `kueper-knowledge-graph`.

That cross-repository check must be performed by a later integration step or by a Knowledge Graph export.

If a missing external record is discovered, create an External Task for the correct project.
