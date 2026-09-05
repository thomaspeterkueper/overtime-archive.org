# OTA Status und Arbeitsreihenfolge — 2026-09-05

**Status:** operative Bestandsaufnahme  
**System:** OverTime Archive  
**Zweck:** OTA nach Übergabe der laufenden ASCE-Entwicklung an `kueper-engineering` wieder auf Archiv-, Kanon-, Request- und Publikationsarbeit fokussieren.

## 1. Scope-Regel nach ASCE-Übergabe

Laufende technische Entwicklung, Trade Studies, Massenkonvergenz und Design-Iteration gehören nach `thomaspeterkueper/kueper-engineering`.

OTA übernimmt technische Inhalte wieder, wenn KUEPER Engineering einen belastbaren Canonicalization-/Transfer-Request zurückliefert. `OTA-TEC-0027-2091-DE` bleibt bis dahin unverändert.

PR #43 (`ASCE 0.3P: Packaging- und Architekturstudie`) wurde deshalb am 2026-09-05 ohne Merge geschlossen. Der Arbeitsstand ist im Engineering-Repository gesichert.

## 2. Pull-Request-Status

### PR #25 — KG Legal Build Sync — ERLEDIGT

**Status:** am 2026-09-05 nach erfolgreichem `Validate OTA`-Workflow gemergt.

Die zentrale Legal-SSOT-Regel ist damit produktiv im Master verankert: Impressum, Datenschutz und Nutzungsbedingungen werden buildseitig aus dem KUEPER Knowledge Graph aufgelöst. Der OTA-seitige Rückrequest `KG-REQ-20260830-ota-legal-disclosures.md` bleibt separat offen, bis der KG darauf antwortet.

### PR #24 — Generation-Mars-Biografien

**Priorität: P1 / Kanonarbeit, aber fachlich noch nicht vollständig geschlossen.**

Rashid und Kaelen sind bereits vorbereitet; Rashids alter OTA-Stand wird archiviert. Lena und Keiko kollidieren mit älterem OTA-Kanon. Der PR darf nicht durch Erzeugen weiterer Dubletten „gelöst“ werden.

Aktion:

1. Lena, Keiko und Rashids Altstand gegen aktuelle NXU-/Manuskriptquelle reconciliieren.
2. Danach KG-Dokumentreferenzen registrieren lassen.
3. Erst dann Task als done und PR merge-ready behandeln.

### PR #6 — Relation Candidate Triage

**Priorität: P2 / Qualitätsinfrastruktur.**

Der Draft verbessert die Klassifikation von Relations-Kandidaten in explizite Querverweise, Bibliografie und Fließtext und vermeidet automatische Kanonisierung. Fachlich sinnvoll, aktuell aber nicht mergeable und älter als der heutige Master-Stand.

Aktion:

1. Nach P1 auf aktuellen Master rebasen bzw. konfliktfrei neu aufsetzen.
2. `npm run verify` auf dem aktuellen Stand ausführen.
3. Danach als Qualitätswerkzeug mergen, nicht als Kanonänderung.

## 3. External-Task-Eingang im Repository

`external-tasks/open/` enthält weiterhin einen größeren Stapel fachlicher Requests. Sichtbar sind insbesondere mehrere KG→OTA-Evidence-/Alignment-Aufträge vom 2026-08-31, u. a.:

- audited technical alignment für OTA-TEC-0019 / 0029 / 0085,
- Cygnus evidence alignment,
- ECLSS evidence alignment,
- ECLSS survival SOP,
- geometric-diode evidence,
- Mars-Fahrwege,
- Mars-Infrastruktur 0089/0090/0091,
- Mars Medical Center,
- sowie ältere ECO→OTA-Aufträge.

Diese Requests werden nicht parallel ungeordnet abgearbeitet. Sie werden als Batch nach Ziel-Dokumenten gruppiert und in folgender Reihenfolge bearbeitet:

1. **Kanon-/Evidence-Korrekturen bestehender OTA-Dokumente**, wenn sie belegte Fehler oder Evidenzstatus betreffen.
2. **Systemisch gekoppelte Mars-Infrastruktur/ECLSS-Aufträge** als zusammenhängende Gruppe.
3. **Erweiterungen ohne akuten Kanonkonflikt**.
4. **Reine Komfort-/Darstellungsanforderungen** danach.

## 4. Google-Drive-Eingang

Der Drive-Ordner `00_EINGANG_NEUE_TEXTE` besitzt seit 2026-09-05 den Unterordner `ABGEGLICHEN`. Damit ist die gewünschte Trennung zwischen noch zu prüfenden und bereits verarbeiteten Quellen vorhanden.

Im Eingang liegen weiterhin neu hinzugekommene, noch nicht als abgeglichen einsortierte Dateien, darunter aktuell u. a.:

- `Downsize Version 0.3.docx`,
- `Edge of the Light.docx`,
- `DIE_PHYSIK_DES_ICH_Komplett.docx`,
- ältere Downsize-Fassungen,
- mehrere Resonanz-Hack-/Eigenzeit-Arbeitspapiere.

Im Ordner `ABGEGLICHEN` liegen bereits zahlreiche verarbeitete Quellen, darunter ENDIA-, Feli-, Trailer-/Produktions-, Forschungs- und weitere Manuskriptdateien. Neue Dateien werden künftig erst nach dokumentiertem OTA/KG-Abgleich dorthin verschoben.

## 5. Kanon- und Strukturprobleme

Aktuell sind vier Kategorien zu trennen:

- **Kanonkonflikte:** z. B. Generation-Mars-Biografien; immer gegen autorenseitige Source of Truth reconciliieren, keine Dubletten erzeugen.
- **Evidence Alignment:** neue Forschungs-/KG-Evidenz darf epistemische Marker und Begründungen präzisieren, aber nicht stillschweigend fiktionale oder historische Aussagen umschreiben.
- **Engineering vs. Canon:** technische Entwicklungsstände bleiben außerhalb OTA, bis eine Übergabe erfolgt.
- **Relationsqualität:** Referenznennungen sind nicht automatisch kanonische `relatedDocuments`; PR #6 adressiert genau diese Trennung.

## 6. Website / Archivdarstellung

Die redaktionelle Darstellungsrichtung bleibt:

- Dokument als Hauptdarsteller,
- Kontext/Relationen als unterstützende Ebene,
- Metadaten sichtbar, aber nicht dominierend,
- Archivcharakter statt generischer Datenbankoberfläche.

Vor größeren visuellen Umbauten werden jedoch zuerst offene Kanonkonflikte und Request-Triage bereinigt. Darstellung darf nicht vor Daten-/Kanonqualität priorisiert werden.

## 7. Arbeitsreihenfolge ab jetzt

1. **PR #24 fachlich reconciliieren und schließen.**
2. **KG→OTA Evidence-Requests vom 31.08. als Batch triagieren; fehlerkritische Dokumente zuerst.**
3. **Drive-Eingang gegen OTA/KG abgleichen und anschließend nach `ABGEGLICHEN` verschieben.**
4. **PR #6 auf aktuellen Master bringen und Qualitätsreport produktiv machen.**
5. **Danach Website-/Archivdarstellung weiter verfeinern.**
6. **Neue Engineering-Rückgaben nur über explizite Canonicalization-Requests aufnehmen.**

Diese Reihenfolge gilt, bis ein neuer P0-Kanon- oder Publikationsblocker eintrifft.
