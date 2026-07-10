# KG request: confirm OTA document references

ID: REQ:L3:PENDING
Requester: SYS:KUEPER:knowledge-graph
Recipient: SYS:KUEPER:ota
Request Type: entity_request
Status: open
Created: 2026-07-10

## Purpose

The canonical KG path `PATH:NOXIA:GEN-MARS:SCIENCE-FOUNDATION` references two OTA documents that are not currently resolvable in the OTA repository or KG registries:

- `DOC:OTA:OTA-SCI-0022-2025-DE`
- `DOC:OTA:OTA-SCI-0043-2026-DE`

## Requested Content

Please determine for each ID whether the document:

1. already exists under another canonical ID,
2. is planned and should receive a minimal canonical document record, or
3. should be removed/replaced in the Generation Mars path.

If an existing or new canonical ID is confirmed, return the document title, status and canonical ID to the Knowledge Graph. Do not create duplicate documents solely to satisfy the path reference.

## Blocking

The two unresolved IDs prevent complete validation of `exports/path-registry-0.1.json`.

## Target

OTA document registry / canonical OTA document source.
