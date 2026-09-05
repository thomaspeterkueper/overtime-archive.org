# OTA Status und Arbeitsreihenfolge — 2026-09-05

**Status:** operative Bestandsaufnahme  
**System:** OverTime Archive  
**Zweck:** OTA nach Übergabe der laufenden ASCE-Entwicklung an `kueper-engineering` wieder auf Archiv-, Kanon-, Request- und Publikationsarbeit fokussieren.

## 1. Scope-Regel nach ASCE-Übergabe

Laufende technische Entwicklung, Trade Studies, Massenkonvergenz und Design-Iteration gehören nach `thomaspeterkueper/kueper-engineering`.

OTA übernimmt technische Inhalte wieder, wenn KUEPER Engineering einen belastbaren Canonicalization-/Transfer-Request zurückliefert. `OTA-TEC-0027-2091-DE` bleibt bis dahin unverändert.

PR #43 (`ASCE 0.3P: Packaging- und Architekturstudie`) wurde deshalb am 2026-09-05 ohne Merge geschlossen. Der Arbeitsstand ist im Engineering-Repository gesichert.

### Engineering-Eskalationsregel

Wenn bei OTA-Kanon-, Evidence- oder Archivarbeit ein Problem nicht mehr nur redaktionell oder evidenziell ist, sondern eine echte technische Auslegung, Massen-/Energiebilanz, Systemdimensionierung, Trade Study, Performance-Rechnung oder Designentscheidung erfordert, erzeugt OTA einen expliziten Request an `thomaspeterkueper/kueper-engineering`.

Jeder solche Request muss mindestens enthalten:

- die betroffenen OTA-Signaturen und, soweit vorhanden, KG-/Research-IDs,
- den dokumentierten technischen Konflikt bzw. die offene Designfrage,
- die unveränderlichen Weltsetzungen und die noch offenen Parameter,
- konkrete Engineering-Deliverables und Akzeptanzkriterien,
- die Source-of-Truth-Grenze: Engineering entwickelt, OTA kanonisiert,
- die Pflicht zur Rückgabe über einen Canonicalization-/Decision-Request statt direkter Änderung des OTA-Kanons.

Am 2026-09-05 wurden aus der laufenden Evidence-Arbeit bereits drei Engineering-Projekte abgeleitet:

- `EXT-OTA-ENG-20260905-cygnus-mass-closure.md` — Massen-/Treibstoff-/Delta-v-Schließung für `OTA-TEC-0082-2026-DE` / `OTA-TEC-0025-2050-DE`.
- `EXT-OTA-ENG-20260905-rl25-propulsion-closure.md` — technische Schließung der RL-25-Klasse aus `OTA-TEC-0085-2026-DE` mit Kopplung an CYGNUS.
- `EXT-OTA-ENG-20260905-kite-eclss-survival-architecture.md` — quantitative ECLSS-/Survival-Architektur für `OTA-TEC-0019-2091-DE` / `OTA-TEC-0016-2063-DE`.

## 2. Pull-Request-Status

### PR #25 — KG Legal Build Sync — ERLEDIGT

Am 2026-09-05 nach erfolgreichem `Validate OTA`-Workflow gemergt. Die zentrale Legal-SSOT-Regel ist damit produktiv im Master verankert. Der OTA-seitige Rückrequest `KG-REQ-20260830-ota-legal-disclosures.md` bleibt separat offen, bis der KG darauf antwortet.

### PR #24 — Generation-Mars-Biografien — ERLEDIGT

Am 2026-09-05 nach erfolgreichem `Validate OTA`-Workflow gemergt.

Ergebnis:

- Rashid: `OTA-BIO-0035-2092-DE` aktuell; `OTA-BIO-0008-2025-DE` archiviert.
- Kaelen: `OTA-BIO-0014-2092-DE`, bewusst `ENTWURF`/partial.
- Lena: `OTA-BIO-0036-2092-DE` aktuell; `OTA-BIO-0006-2025-DE` archiviert.
- Keiko: `OTA-BIO-0037-2092-DE` aktuell; `OTA-BIO-0010-2025-DE` archiviert.

Damit existieren keine konkurrierenden aktiven Lena-/Keiko-Dossiers mehr. Alte Dezember-2025-Angaben bleiben als historische Entwicklungsstände erhalten.

Cross-System-Follow-up:

- KG: `external-tasks/open/OTA-KG-REQ-20260905-generation-mars-bios.md`
- NXU: `external-tasks/open/EXT-OTA-NXU-20260905-generation-mars-canon-alignment.md`

Der ursprüngliche OTA-Task bleibt bis zur bestätigten KG-Registrierung formal `in_progress`, obwohl der OTA-Inhaltsschritt abgeschlossen ist.

### PR #6 — Relation Candidate Triage

**Priorität: späterer Qualitätsinfrastruktur-Schritt.**

Der Draft verbessert die Klassifikation von Relations-Kandidaten in explizite Querverweise, Bibliografie und Fließtext und vermeidet automatische Kanonisierung. Fachlich sinnvoll, aktuell aber nicht mergeable und älter als der heutige Master-Stand.

Nach Abschluss des Evidence-/Request-Batches wird er auf aktuellen Master gebracht, verifiziert und als Qualitätswerkzeug integriert.

## 3. External-Task-Eingang im Repository — JETZT AKTIV

`external-tasks/open/` enthält weiterhin einen größeren Stapel fachlicher Requests. Besonders relevant sind mehrere KG→OTA-Evidence-/Alignment-Aufträge vom 2026-08-31, u. a.:

- audited technical alignment für OTA-TEC-0019 / 0029 / 0085,
- Cygnus evidence alignment,
- ECLSS evidence alignment,
- ECLSS survival SOP,
- geometric-diode evidence,
- Mars-Fahrwege,
- Mars-Infrastruktur 0089/0090/0091,
- Mars Medical Center,
- sowie ältere ECO→OTA-Aufträge.

Diese Requests werden als fachlicher Batch nach Ziel-Dokumenten gruppiert. Reihenfolge innerhalb des Batches:

1. **Kanon-/Evidence-Korrekturen bestehender OTA-Dokumente**, wenn belegte Fehler, falsche Evidenzstufen oder widersprechende technische Aussagen betroffen sind.
2. **Systemisch gekoppelte Mars-Infrastruktur/ECLSS-Aufträge** als zusammenhängende Gruppe.
3. **Erweiterungen ohne akuten Kanonkonflikt**.
4. **Reine Komfort-/Darstellungsanforderungen** danach.

## 4. Google-Drive-Eingang

Der Drive-Ordner `00_EINGANG_NEUE_TEXTE` besitzt den Unterordner `ABGEGLICHEN`. Damit ist die gewünschte Trennung zwischen noch zu prüfenden und bereits verarbeiteten Quellen vorhanden.

Im Eingang liegen weiterhin neu hinzugekommene Quellen, darunter `Downsize Version 0.3.docx`, `Edge of the Light.docx`, `DIE_PHYSIK_DES_ICH_Komplett.docx`, ältere Downsize-Fassungen sowie mehrere Resonanz-Hack-/Eigenzeit-Arbeitspapiere.

Neue Dateien werden erst nach dokumentiertem OTA/KG-Abgleich nach `ABGEGLICHEN` verschoben.

## 5. Kanon- und Strukturregeln

- **Kanonkonflikte:** immer gegen die zuständige Source of Truth reconciliieren; keine aktiven Dubletten erzeugen.
- **Evidence Alignment:** neue Forschung/KG-Evidenz darf epistemische Marker und Begründungen präzisieren, aber historische oder fiktionale Aussagen nicht stillschweigend umschreiben.
- **Engineering vs. Canon:** technische Entwicklungsstände bleiben außerhalb OTA, bis eine formale Übergabe erfolgt. Konkrete Engineering-Probleme werden aktiv an `kueper-engineering` eskaliert.
- **Relationsqualität:** Referenznennungen sind nicht automatisch kanonische `relatedDocuments`.

## 6. Website / Archivdarstellung

Die redaktionelle Richtung bleibt: Dokument als Hauptdarsteller, Kontext/Relationen unterstützend, Metadaten sichtbar aber nicht dominant, Archivcharakter statt generischer Datenbankoberfläche.

Größere visuelle Umbauten folgen erst nach Request-/Kanonbereinigung.

## 7. Arbeitsreihenfolge ab jetzt

1. **KG→OTA Evidence-Requests vom 31.08. als Batch triagieren; fehlerkritische Dokumente zuerst.**
2. **Den priorisierten Evidence-Batch umsetzen und erledigte Requests sauber schließen/verschieben.**
3. **Bei technisch offenen Entwurfsfragen Engineering-Requests mit OTA-/KG-/Research-Verknüpfung erzeugen.**
4. **Drive-Eingang gegen OTA/KG abgleichen und anschließend nach `ABGEGLICHEN` verschieben.**
5. **PR #6 auf aktuellen Master bringen und Qualitätsreport produktiv machen.**
6. **Danach Website-/Archivdarstellung weiter verfeinern.**
7. **Neue Engineering-Rückgaben nur über explizite Canonicalization-Requests aufnehmen.**

Diese Reihenfolge gilt, bis ein neuer P0-Kanon- oder Publikationsblocker eintrifft.
