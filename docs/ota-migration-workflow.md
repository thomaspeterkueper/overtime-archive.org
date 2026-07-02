# OTA Migration Workflow

Updated: 2026-07-02

This workflow standardizes migration of legacy OTA documents into the Knowledge Graph reference model.

## Principle

OTA may add references and metadata.

OTA must not redefine Knowledge Graph records.

If a required entity, relation, or knowledge domain is missing, create an External Task for `kueper-knowledge-graph`.

## Migration steps

1. Run the KG migration report tool.
2. Review detected `KNOW:*` domains.
3. Verify domains against the current KG export.
4. Generate a frontmatter proposal.
5. Review entities and relations manually.
6. Insert approved metadata into the OTA document.
7. Run the validator.
8. Commit the migration.

## Tools

Generate migration report:

```bash
python tools/ota_kg_report.py content
```

Generate frontmatter proposals:

```bash
python tools/apply_ota_frontmatter.py content/*.md
```

Validate results:

```bash
python tools/validate_ota_metadata.py .
```
