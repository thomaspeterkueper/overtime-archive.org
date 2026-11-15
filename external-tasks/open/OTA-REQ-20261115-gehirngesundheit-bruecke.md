# OTA-REQ-20261115-001 – OTA-SCI-0103-2026-DE (Longitudinale Gehirngesundheit): nach Umzug nach KUE zum schlanken Brückendokument kürzen

Status: open
Datum: 2026-11-15
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-15-OTA-SCI-0103-2026-DE.md`
Zuordnung: ganz nach KUE (Inventur Gruppe A). Reines Realdossier ohne Setzung (`universe: []`, keine [F]/[W]/[S], keine eigene Hypothese von Thomas); einziger System-/Werkbezug ist Abschnitt 19 (Anschluss an OTA-SCI-0019, OTA-SCI-0102 und KG-Kandidatenclaims). Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261115-001.md`.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261115-001 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen (Punkte A–C).

## Anlass

Abgleich am 2026-11-15: Lancet-Commission-2024-Rahmen (14 Faktoren, ≈ 45 % PAF) und WHO-Leitlinien 2026 (2. Aufl., 15.07.2026) korrekt wiedergegeben. Vor dem Umzug korrigiert das KUE-Dokument u. a. den Erstautor der J-Neurol-Metaanalyse (Zhang J. et al., nicht Liu Y.), ergänzt die WHO-Aussagen zu unzureichender Evidenz (Sehverlust, Schlaf-Wach-Störungen, Depression) und die seit 2025 zugelassenen Blut-Biomarker (p-tau217). Details im KUE-Request.

## Gewünschte Änderung (ECO-ARC-0038 §3a, vollständiger Umzug)

A. **Abschnitte 1–18, 20 und 21 ersetzen** durch einen Abschnitt „1. Realgrundlage (Kurzfassung)“:
   > Die Lancet Commission 2024 nennt 14 potenziell modifizierbare Risikofaktoren für Demenz über den Lebenslauf; ihr gemeinsamer Anteil wird populationsbezogen auf etwa 45 % geschätzt – eine Planungsgröße, keine individuelle Prognose. `[R]` Die WHO-Leitlinien 2026 (2. Aufl.) empfehlen Risikoreduktion über Lebenslauf und mehrere Bereiche, überwiegend als bedingte Empfehlungen; für Interventionen bei Sehverlust und Schlaf-Wach-Störungen hält die WHO die Evidenz für unzureichend. `[R]` Sprach- und Blutmarker gelten als Hilfsmittel der Früherkennung, nicht als Ursachen oder eigenständige Diagnosen. `[R]` Befunde, Quellen und Evidenzgrenzen: `DOC:KUE:KUE-SCI-NNNN`.
B. **Abschnitt 19** („Anschluss an OTA und Knowledge Graph“) bleibt wörtlich und wird zu Abschnitt 2. Am Ende ergänzen: „Realgrundlage dieser Kandidatenclaims ist künftig `DOC:KUE:KUE-SCI-NNNN`.“
C. **Frontmatter und Kopf:** `summary` ersetzen durch „Brückendokument: longitudinale Gehirngesundheit als OTA-Anschlussknoten zu OTA-SCI-0019 und OTA-SCI-0102; Realteil in KUE-SCI-NNNN.“ `relatedDocuments` und `review` bleiben. Versionssprung auf v1.1, Stand auf das Umsetzungsdatum, Revisionsvermerk am Ende: „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261115-001); Langfassung über Git v1.0.“ Nicht archivieren. Kennzeichnung nicht stärker als im KUE-Dokument.

## Wirkung

- `external-tasks/open/OTA-KG-REQ-20261006-longitudinal-brain-health.md`: Kandidatenclaims sollen nach dem Umzug auf das KUE-Dokument als Quelle zeigen; Hinweis dort ergänzt.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0103 aktualisiert.
