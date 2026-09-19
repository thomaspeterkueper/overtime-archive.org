# OTA build and audit artifact retention

This policy separates canonical repository content from generated CI artifacts.

## Canonical source

GitHub contains the canonical source files, schemas, governance documents, validation scripts, and reproducible analysis logic. Generated ZIP archives are not canonical source and must not be committed to the repository.

## GitHub Actions artifacts

Routine CI artifacts such as `ota-archive-quality` and `ota-epistemic-quality` remain ephemeral GitHub Actions outputs. The current workflow retention window is 30 days. They exist for review, debugging, and short-term comparison, not as a long-term archive.

## Long-term milestone archive

Selected audit snapshots are retained in Google Drive under:

`OTA/_GITHUB/overtime-archive/_artifacts/archive-quality/YYYY-MM-DD/`

Keep a ZIP only when it represents a meaningful milestone, for example:

- the baseline before a governance or schema change,
- the result after a curated migration,
- a new audit/taxonomy introduction,
- a release-quality validation snapshot,
- a before/after state needed to reconstruct a consequential editorial decision.

Do not retain every routine workflow run.

## Naming

Use names that preserve date, PR or milestone, and purpose, for example:

`2026-09-08_PR57_epistemic-quality-audit.zip`

## Reproducibility principle

The repository must contain everything necessary to reproduce the current reports. Drive ZIPs are historical evidence only. If a ZIP and the current repository disagree, the repository plus its commit history and governance rules are authoritative for the current state.
