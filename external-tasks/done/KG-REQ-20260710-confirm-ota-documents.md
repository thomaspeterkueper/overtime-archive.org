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


---

## Erledigt (2026-07-13)

Beide IDs existieren bereits kanonisch im OTA-Repo unter `src/content/documents/`:

- `DOC:OTA:OTA-SCI-0022-2025-DE` — "Zhurong-Entdeckung: Wasser-Fenster auf Mars verlaengert bis Amazonis-Epoche (~750 Mio. Jahre)", Status AKTIV, epistemicStatus [R]
- `DOC:OTA:OTA-SCI-0043-2026-DE` — Status AKTIV, epistemicStatus [R,H,S] (Titel entspricht der Signatur, ggf. spaeter praezisieren)

Antwort auf die drei Optionen: Fall 1 trifft zu - beide existieren bereits unter genau dieser ID, keine Umbenennung, keine Neuanlage. `exports/path-registry-0.1.json` kann mit diesen IDs validiert werden.
