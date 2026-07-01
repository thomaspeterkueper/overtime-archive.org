# OTA KG Report Tool

Updated: 2026-07-01

The script `tools/ota_kg_report.py` scans OTA Markdown documents and creates a simple migration report for Knowledge Graph alignment.

It is OTA-only. It does not modify the Kueper Knowledge Graph, SSF, NOXIA, or kueper.com.

## Purpose

The tool helps curators detect:

- OTA document IDs
- knowledge-domain references
- `KNOW:*` references
- prerequisite-domain candidates such as `GEO-SEISM`, `MATH-STAT`, or `PHIL-EPIST`

The output is a Markdown report for review.

## Usage

From the repository root:

```bash
python tools/ota_kg_report.py content --output reports/ota-kg-migration-report.md
```

For a single batch folder:

```bash
python tools/ota_kg_report.py path/to/batch --output reports/batch-01.md
```

For individual files:

```bash
python tools/ota_kg_report.py OTA-SCI-0043-2026-DE.md OTA-SCI-0044-2026-DE.md
```

## Output

The generated report contains:

- one section per scanned document
- detected knowledge domains
- detected levels where available
- a domain inventory
- next curator checks

## Curator rule

If the report reveals a missing KG record, do not create the record in OTA. Create an External Task for `kueper-knowledge-graph`.
