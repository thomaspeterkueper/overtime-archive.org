# OTA-REQ-20261116-001 – OTA-SCI-0109-2026-DE (Stromnetz-Engpässe): nach Umzug nach KUE zum schlanken Brückendokument kürzen

Status: open
Datum: 2026-11-16
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-16-OTA-SCI-0109-2026-DE.md`
Zuordnung: ganz nach KUE (Inventur Gruppe A). Werkneutrales Evidenzdossier ([R]/[T]/[H]) ohne Werkbezug (`universe: []`, keine [F]/[W]/[S]); Werkanschluss nur über die NOXIA-Archivregel §14 und den Verweis aus OTA-SCI-0110. Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261116-001.md`.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261116-001 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen (Punkte A–C).

## Anlass

Abgleich am 2026-11-16 mit SMARD/BNetzA (Gesamtjahr 2025, 30.03.2026): alle Mengen- und Kostenwerte in §2 stimmen. Neuere Befunde (Q2 2026: Verteilnetz erstmals größter Engpassverursacher; Speicheranfragen 2025 mit 573,5 GW) und die Quellenergänzungen übernimmt das KUE-Dokument.

## Gewünschte Änderung (ECO-ARC-0038 §3a, vollständiger Umzug)

A. **Abschnitte 1–13 ersetzen** durch einen Abschnitt „1. Realgrundlage (Kurzfassung)“ (Kernregel-Zitat am Anfang bleibt):
   > Erzeugungsleistung, Netzanschlusskapazität, Leitungs- und Transformatorleistung, zeitliche Flexibilität und Speicherenergie sind verschiedene Größen; ein Erzeugungsüberschuss an einem Ort beseitigt keinen Engpass zwischen zwei Orten. `[R]` In Deutschland wurden 2025 rund 30 TWh Netzengpassmaßnahmen durchgeführt und etwa 3,5 % der erneuerbaren Erzeugung abgeregelt; die Engpässe lagen im Übertragungs- und im Verteilnetz. `[R]` Übertragungen auf Mond-, Mars- und Orbitalnetze sind Extrapolation. `[H/T]` Befunde, Quellen und Grenzen: `DOC:KUE:KUE-SCI-NNNN`.
B. **§14 „Archivregel für NOXIA und zukünftige Welten“ bleibt unverändert** und wird zu Abschnitt 2.
C. **Frontmatter und Kopf:** `summary` ersetzen durch „Brückendokument: Grounding-Regel für Stromnetze in NOXIA und zukünftigen Welten; Realteil (Netzengpässe Deutschland 2025/2026, Redispatch, Flexibilität) in KUE-SCI-NNNN.“ `relatedDocuments`, `tags` und `review` bleiben; `epistemicStatus` auf ["R", "H", "T"] (den nicht standardisierten Marker „OFFEN“ entfernen). Versionssprung auf v1.1, Stand auf das Umsetzungsdatum, Revisionsvermerk am Ende (§15): „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261116-001); Langfassung über Git v1.0.“ Nicht archivieren. Kennzeichnung nicht stärker als im KUE-Dokument.

## Wirkung

- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0109 aktualisiert.
- `OTA-SCI-0110-2026-DE` verweist auf 0109 (Energie- und Netzrestriktionen); der Verweis bleibt gültig.
