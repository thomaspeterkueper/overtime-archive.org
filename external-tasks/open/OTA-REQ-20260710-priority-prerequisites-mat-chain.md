# OTA-REQ-20260710-priority-prerequisites-mat-chain

Status: open
Origin: Solar Science Foundation - LearnMap content gap review (2026-07-10)
Origin System: SYS:KUEPER:ssf
Target repository: overtime-archive.org
Target System: SYS:OTA:overtimearchive
Created: 2026-07-10
Type: content_request
Priority: high

## Purpose

Only 1 of 212 OTA documents has a `## PREREQUISITES` section (`OTA-SCI-0083-2026-DE`). Per `OTA-ARC-0005-2026-DE` section 1.4, retroactive completion was never meant to happen for all 212 at once - "wichtige Grundlagendokumente" get it "prioritaer nachgepflegt". This request proposes a concrete first batch of three, chosen specifically because they connect to SSF's already-built Mathematics foundation tree (`KG-0010`), rather than an arbitrary selection.

## Requested content

PREREQUISITES sections (format per `OTA-ARC-0005-2026-DE` section 1.2) for:

**OTA-SCI-0036-2026-DE** ("Mathematische Fundamente"). Already named in `OTA-ARC-0005-2026-DE`'s own taxonomy table as the `PHYS-MECH` and `MATH-DIFF`/`TOOL-DATASCI` example document. Natural target for both the `PHY-1101` -> `PHY-2201` branch and the `MAT-2101` (Analysis) -> `MAT-2103` (Differentialgleichungen) branch of the existing MAT tree.

**OTA-SCI-0043-2026-DE** ("LLSVPs und die Kern-Mantel-Grenze: Strukturelle Grundlage der Geodynamo-Stabilitaet"). Already listed as a recommended predecessor document to `OTA-SCI-0083` in that document's own PREREQUISITES. Deepens the existing `GEO-SEISM`/`GEO-PLANET`/`GEO-DYNA` branch rather than opening an unrelated one.

**OTA-SCI-0009-2025-DE** ("Planetare Schumann-Resonanzen"). Named in `OTA-ARC-0005-2026-DE`'s taxonomy table as the `ASTRO-BASIC`/`PHYS-WAVE` example. Candidate target for the `AST-1101` branch - flagging honestly that its actual content (planetary electromagnetic resonance comparisons) reads closer to N2 than a true beginner document, so its PREREQUISITES level should reflect that rather than be forced to N1.

## Not requested here

A general chemistry-basics OTA document does not appear to exist (checked via keyword search across all 212 documents - only advanced/niche chemistry topics found, e.g. interstellar sulfur chemistry, hydrothermal neurotoxicology). Filing separately as a Knowledge Graph question (`KG-REQ-20260710-che-1101-source-gap.md`) rather than requesting OTA write new foundational content here - OTA is a research archive, not a textbook source, and kueper-com's already-established MINT-plus role (`KG-0011`) may be the better fit for that gap.

## Blocking

Without this, SSF's `MAT-1101` and `MAT-2101` branches have no Archivmodul-style destination once a learner completes them - the learning path currently only terminates meaningfully at `OTA-SCI-0083` via the `MAT-1102` branch.
