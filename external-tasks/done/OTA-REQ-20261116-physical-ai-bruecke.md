# OTA-REQ-20261116-002 – OTA-SCI-0110-2026-DE (Adaptive Fertigung und Physical AI): nach Umzug nach KUE zum Brückendokument kürzen

Status: done
Erledigt: 2026-11-28 – Punkte A–D umgesetzt in OTA-SCI-0110 v1.1 durch die Begutachtung (ECO-ARC-0038 §3b; KUE-SCI-0229-2026-DE v0.1 in `kueper.com/main`, `KUE-SCI-NNNN` = KUE-SCI-0229). §12 „Distributed Robotics / MiniNodes“ nach Punkt B erhalten (Punkt A nannte ihn im Ersetzungsbereich 9–13). Abschnitte neu nummeriert (1 Realgrundlage, 2 NOXIA-Anschluss, 3 Autoritätsstufen, 4 MiniNodes, 5 NOXIA-Ableitungen, 6 Quellen, 7 Archivregel, 8 Versionshistorie).
Datum: 2026-11-16
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-16-OTA-SCI-0110-2026-DE.md`
Zuordnung: ganz nach KUE (Realteil; Inventur Gruppe A). Werkneutrales Evidenzdossier ([R]/[I]/[H]), `universe: []`, keine [F]/[W]/[S]. In OTA bleiben der NOXIA-Anschluss, das OTA-Arbeitsmodell der Autoritätsstufen A0–A5, die NOXIA-Ableitungen und die Archivregel. Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261116-002.md`.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261116-002 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen (Punkte A–D).

## Anlass

Abgleich am 2026-11-16: Siemens/Humanoid-Test (16.04.2026), NIST-Roadmap (IOP, 03.07.2026, DOI 10.1088/3049-4761/ae5967) und PepsiCo-Angaben bestätigt; Herstellerkennzahlen des Erlangen-Tests, die revidierten Normen ISO 10218-1/-2:2025 und fehlende Quellenangaben ergänzt das KUE-Dokument.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **Abschnitte 1–6, 7 (bis vor „NOXIA-Anschluss“), 8.1–8.2, 9–13, 15–18 ersetzen** durch einen Abschnitt „1. Realgrundlage (Kurzfassung)“ (Kernregel-Zitat am Anfang bleibt):
   > Digital Twins, Machine Vision, Zustandsüberwachung und KI-gestützte Planung sind 2026 in Teilanwendungen der Fertigung industriell im Einsatz; humanoide und generalisierte Physical-AI-Robotik ist in realen Fabriken erprobt, aber nicht als Standard etabliert. `[R]` Eine vollständig selbstführende Fabrik ohne menschliche Autorität ist nicht belegt; Sicherheitsfunktionen bleiben außerhalb lernender Modelle, und Simulation ersetzt die reale Validierung nicht. `[R/H]` Befunde, Herstellerangaben und Quellen: `DOC:KUE:KUE-SCI-NNNN`.
B. **Unverändert bleiben:** der Teil „NOXIA-Anschluss“ aus §7 (Restriktionsformel und Anschluss an OTA-SCI-0109), §8.3 „Autoritätsstufen“ (A0–A5 mit dem Satz „Die Tabelle ist ein OTA-Arbeitsmodell, keine etablierte Norm.“), §12 „Distributed Robotics / MiniNodes“ (Anschluss an OTA-TEC-0126), §14 „Was NOXIA daraus ableiten darf“ und §19 „Archivregel“. Nummerierung fortlaufend anpassen.
C. **Quellen (§18):** nur die Quellen behalten, auf die die verbleibenden Abschnitte direkt Bezug nehmen (keine); sonst durch den Satz „Quellen im KUE-Dokument `DOC:KUE:KUE-SCI-NNNN`.“ ersetzen.
D. **Frontmatter und Kopf:** `summary` ersetzen durch „Brückendokument: NOXIA-Ableitungen, Autoritätsstufen A0–A5 (OTA-Arbeitsmodell) und Archivregel für adaptive Fabriken; Realteil (Digital Twins, industrielle KI, Physical AI 2026) in KUE-SCI-NNNN.“ `relatedDocuments`, `tags` und `review` bleiben; `epistemicStatus` auf ["R", "I", "H"] (den nicht standardisierten Marker „OFFEN“ entfernen). Versionssprung auf v1.1, Stand auf das Umsetzungsdatum, Revisionsvermerk am Ende (§20): „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261116-002); Langfassung über Git v1.0.“ Nicht archivieren. Kennzeichnung nicht stärker als im KUE-Dokument.

## Wirkung

- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0110 aktualisiert.
- `OTA-TEC-0126-2026-DE` und `OTA-SCI-0109-2026-DE` bleiben verknüpft.
