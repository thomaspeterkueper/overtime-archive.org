# OTA Request Triage — 2026-09-07

**System:** OverTime Archive  
**Scope:** aktueller Arbeitsstand nach Abschluss der Tharsis-, KUE-Grounding-, Ship- und Station-Coverage-Batches.  
**Prinzip:** neue fachliche Requests vor reinen Wartezuständen; keine bereits erledigten Batches erneut bearbeiten.

## Seit dem letzten Triage-Stand abgeschlossen

- Tharsis Seed Clarifications: erledigt und nach `external-tasks/done/` verschoben.
- KUE→OTA Grounding 0172–0183: OTA-seitig umgesetzt; KG-Rückmeldungen liegen vor.
- NOXIA Ship Coverage: abgeschlossen.
- NOXIA Station Module Coverage: abgeschlossen.
- Solar Transfer Logistics: `OTA-TEC-0122-2026-DE` angelegt; KG-Registrierungsantwort liegt vor.
- Google-Drive-Sync und `Validate OTA` waren auf dem letzten geprüften Master-Stand erfolgreich.

## P0 — neue wissenschaftliche Requests

### Issue #47 — EIGENZEIT: Eigenzeit, Atomuhren, relativistische Ausschlusslogik

**Status:** in Umsetzung.  
**Entscheidung:** `OTA-SCI-0017-2025-DE` ist kein ausreichend breites [R]-Grundlagendossier; es enthält primär den Au₂Hₓ/AVI-Hypothesenstrang. Deshalb wurde ein separates, projektübergreifend nutzbares [R]-Dossier angelegt:

- `OTA-SCI-0083-2026-DE` — **Eigenzeit, optische Atomuhren und relativistische Ausschlusslogik**.

Es trennt etablierte relativistische Zeit-/Frequenzmetrologie ausdrücklich von materialinduzierten Zeitfeldhypothesen und dokumentiert die noch fehlende dedizierte KUE-SCI-Grounding-Schnittstelle, statt sie zu erfinden.

### Issue #48 — EIGENZEIT: Analogue Gravity, Floquet Engineering, topologische 2D-MOFs

**Status:** als nächster Wissenschaftsblock.  
**Arbeitsregel:** vorhandene `OTA-SCI-0017-2025-DE` / `OTA-TEC-0021-2025-DE` nicht duplizieren. Neues Dossier nur für die tatsächlich fehlende Brücke Analogue Gravity ↔ Floquet ↔ 2D-MOF und mit harter Negativgrenze zur realen Raumzeit-/Eigenzeitänderung.

## P1 — eingegangene KG-Abschlussantworten schließen

Aktuell liegen in `external-tasks/open/` mehrere KG-Antworten, die inhaltlich bereits erledigte OTA-Arbeit bestätigen:

- `EXT-KG-OTA-20260906-generation-mars-bio-registration-complete.md`
- `EXT-KG-OTA-20260906-grounding-r2-complete.md`
- `EXT-KG-OTA-20260906-kue-grounding-relations-complete.md`
- `EXT-KG-OTA-20260906-transfer-logistics-registration-complete.md`

Diese Antworten sind gegen die jeweiligen Ausgangsrequests abzugleichen und anschließend nach `done/` zu verschieben. Offene Zielidentitäten dürfen dabei nicht durch Phantom-Relationen ersetzt werden.

## P2 — externe Wartezustände / Infrastrukturblocker

### `EXT-ECO-OTA-20260714-001.md`

**Status:** operativ blockiert.  
**Blocker:** benötigtes Supabase-Projekt `kue-archive` ist im verbundenen Zugriff nicht verfügbar. Keine Schema-/Migrationseingriffe ohne belastbare Project-Identität.

### `KG-REQ-20260830-ota-legal-disclosures.md`

**Status:** outbound / wartet auf KG-Entscheidung.  
**Aktion:** keine lokale Legal-Neuerfindung.

### `OTA-REQ-20260718-002.md`

**Status:** low priority / SSF-Quellenverlinkung.  
**Aktion:** erst bei stabiler OTA↔SSF-Brücke.

## Qualitätsarbeit danach

Nach den beiden neuen EIGENZEIT-Wissenschaftsrequests:

1. eingegangene KG-Abschlussantworten sauber schließen,
2. PR #6 Relation Candidate Triage gegen aktuellen Master neu bewerten,
3. Summary-Qualität und Relationslücken erneut aus dem aktuellen Quality-Artifact ziehen,
4. anschließend Website-/Archivdarstellung weiter verfeinern.

## Source-of-Truth-Regeln

- Engineering entwickelt; OTA kanonisiert erst nach expliziter Rückgabe.
- KUE-SCI dient als Realwissenschaftsanker, wenn vorhanden; fehlende Anker werden als Lücke ausgewiesen, nicht erfunden.
- Inline-Signaturen sind keine automatischen kanonischen Relationen.
- [R]-Aussagen dürfen nicht aus fiktionalen Mechanismen rückwärts begründet werden.
