# OTA-REQ-20260710-priority-prerequisites-mat-chain

Status: closed - superseded, premise was wrong

## Resolution (2026-07-12)

This request asked OTA to *write* PREREQUISITES sections for three
documents, based on an incomplete check - a body-text search for
"## PREREQUISITES" found only 1 of 212 documents.

Rechecked properly (parsed YAML frontmatter across all 212 documents, not a
text grep): 204 of 212 already carry a structured `knowledge.domains` field
with real prerequisite data - including all three documents this request
named. The data was never missing; it was declared in a different location
than the one originally checked. See `KG-REQ-20260712-import-ota-domain-
prerequisites.md` for what's actually needed now (registering four missing
domain ids, then importing the 204 documents' declared relations into the
Knowledge Graph).

Separately, reading `OTA-SCI-0036` in full (not just its taxonomy-table
listing) found it unsuitable as a Mathematics-foundation-chain target
regardless of the prerequisites question - it is heavily speculative/
fictional theoretical physics (Omnizedenz/AVI framework), explicitly marked
[H]/[S]/[F] throughout, not introductory mathematics. Recommend dropping it
from that chain; `OTA-SCI-0043` (LLSVPs, real Nature/Nature Geoscience
science) is a solid replacement target already declaring both its required
domains as registered entities.
