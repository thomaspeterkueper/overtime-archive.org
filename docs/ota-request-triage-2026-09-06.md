# OTA Request Triage — 2026-09-06

**System:** OverTime Archive  
**Scope:** verbliebener Inhalt von `external-tasks/open/` nach Abschluss des großen Evidence-Batches vom 31.08.  
**Prinzip:** zuerst aktive Kanon-/Implementierungsblocker, dann Grounding/Coverage, danach externe Wartezustände und Infrastrukturblocker.

## P0 — jetzt bearbeiten

### 1. `NOX-OTA-REQ-20260831-tharsis-seed-review-clarifications.md`

**Status:** actionable / blockiert konkrete NOXIA-Layoutarbeit.  
**Warum zuerst:** Der Request verlangt sechs kanonische Architekturentscheidungen für Utility-N-1, Fahrweg-vs.-Medien-Redundanz, ECLSS-Failover, Safe-Haven-Kapazität, Pflanzenmodul und Energie-Epistemik. Diese Punkte wirken direkt auf NOXIA Issue #52 und mehrere bereits vorhandene Tharsis-Dossiers (`0094`–`0105`).

**Arbeitsregel:** OTA kann qualitative Kanonentscheidungen treffen; sobald quantitative Netz-, ECLSS-, Safe-Haven- oder Energiedimensionierung nötig wird, Request an KUEPER Engineering.

## P1 — danach als Grounding-/Kanonbatch

### 2. `EXT-KUE-OTA-20260831-001.md`

**Status:** actionable, teilweise durch die inzwischen abgeschlossenen Evidence-Revisionsarbeiten vorbereitet.  
**Aufgabe:** KUE-SCI-0172 bis 0182 als `GROUNDED_IN`/Realwissenschaftsanker in den betroffenen OTA-Dossiers referenzieren. Der wissenschaftliche Inhalt soll nicht dupliziert werden. `KUE-SCI-0174` ist inzwischen durch den Folgerequest freigegeben.

### 3. `EXT-KUE-OTA-20260831-002.md`

**Status:** actionable / numerische Korrektur.  
**Aufgabe:** `OTA-SCI-0080-2026-DE` an den verifizierten KUE-SCI-0174-Anker rückbinden; insbesondere den ppm→radiogene-Wärme-Rechenfehler korrigieren und Geochemie nicht überverallgemeinern.

### 4. `EXT-KUE-OTA-20260901-001.md`

**Status:** actionable / fachlich klar abgegrenzt.  
**Aufgabe:** `OTA-TEC-0021-2025-DE` an `DOC:KUE:KUE-SCI-0183-2026-DE` rückbinden; reale Au₂Hₓ-Extrembedingungen von hypothetischer MOF-/Konfinement-Stabilisierung trennen.

## P1 — NOXIA Coverage, danach

### 5. `EXT-NOX-OTA-20260831-ship-object-dossiers.md`

**Status:** actionable, größerer Modellierungsblock.  
**Aufgabe:** fünf Schiffsrahmen und technisch eigenständige Module gegen vorhandene OTA-Objekte mappen; echte Lücken identifizieren; keine Slot-/Balancing-Abstraktionen künstlich kanonisieren. Neue technische Dossiers nur nach nachgewiesener Lücke. Engineering-Projekte nur bei echter Fahrzeug-/Modulauslegung.

### 6. `EXT-NOX-OTA-20260901-station-module-coverage.md`

**Status:** actionable, ähnlich wie Schiff-Coverage.  
**Aufgabe:** Stationsmodule gegen bestehende OTA-TEC-Dossiers abgleichen; `water_recycler` nicht mit Regolith-Wasserextraktion vermischen; `reactor` nicht aus NOXIA-Spielbezeichnung physikalisch kanonisieren.

## P2 — externe Wartezustände / nachgelagerte Abschlüsse

### 7. `EXT-NXU-OTA-20260830-001.md`

**Status:** OTA-Inhalt abgeschlossen; wartet auf bestätigte KG-Registrierung der vier Generation-Mars-Profile.  
**Aktion:** nicht erneut Biografien bearbeiten. Nach KG-Bestätigung nach `done/` verschieben.

### 8. `KG-REQ-20260830-ota-legal-disclosures.md`

**Status:** outbound request / wartet auf KG-Entscheidung.  
**Aktion:** OTA rendert lokale OTA-spezifische Hinweise weiter; keine weitere lokale Legal-Umschreibung erforderlich, bis KG antwortet.

### 9. `EXT-ECO-OTA-20260714-001.md`

**Status:** operativ blockiert.  
**Blocker:** benötigtes Supabase-Projekt `kue-archive` ist im verbundenen Zugriff nicht verfügbar. Fachliche KUE-Voraussetzung ist erfüllt.  
**Aktion:** erst fortsetzen, wenn `kue-archive`/Project-Ref verfügbar ist; vorher keine Schema-/Migrationseingriffe.

### 10. `OTA-REQ-20260718-002.md`

**Status:** low priority / nachgelagerte SSF-Quellenverlinkung.  
**Aktion:** erst nach bestätigter OTA↔SSF-Brücke bzw. wenn die dort genannten Dokument-IDs stabil verfügbar sind. Kein aktueller Kanonblocker.

## Neue NOXIA-Notification-Arbeit vom 2026-09-06

Die neue OTA→NOXIA-Entity-Notification-Regel wurde rückwirkend angewendet. Im `noxiagame` liegen nun neben `EXT-OTA-NOXIA-20260906-entity-notice-batch-01.md` zusätzlich:

- `EXT-OTA-NOXIA-20260906-retro-entity-notice-tech-batch.md`
- `EXT-OTA-NOXIA-20260906-retro-entity-notice-generation-mars-bios.md`
- `EXT-OTA-NOXIA-20260906-retro-entity-notice-tharsis-hub.md`

Die Notices melden Existenz, OTA-Kanonstatus und Provenienz. Sie importieren keine Gameplaywerte.

## Arbeitsreihenfolge

1. Tharsis Seed Clarifications entscheiden und, wo nötig, Engineering-Follow-ups erzeugen.
2. KUE→OTA Grounding 0172–0183 als konsolidierten Referenz-/Korrekturbatch abarbeiten.
3. NOXIA Ship Coverage.
4. NOXIA Station Module Coverage.
5. Wartezustände regelmäßig nur auf eingegangene Antworten prüfen; keine Doppelarbeit erzeugen.
6. Danach Drive-Eingang und PR #6 Relation Candidate Triage gemäß bestehendem OTA-Arbeitsplan.
