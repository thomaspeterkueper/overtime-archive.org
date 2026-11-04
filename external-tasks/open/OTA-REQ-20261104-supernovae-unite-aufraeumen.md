# OTA-REQ-20261104-002 – OTA-SCI-0091-2026-DE (Supernovae Unite): Realteil auf Verweis nach KUE-SCI-0191 kürzen, Signifikanz berichtigen

Status: open
Datum: 2026-11-04
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-04-OTA-SCI-0091-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0191-2026-DE`; AVI-Teil (§§ 7, 8, 10, 12) bleibt vollständig in OTA
Voraussetzung: KUE-SCI-0191 v0.2 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-04`).

## Anlass

Die Abschnitte 2–6 und 9 von OTA-SCI-0091 decken sich mit KUE-SCI-0191 (Abschnitte V–XIII). Zusätzlich ist ein Wert veraltet: Die arXiv-Fassung v2 von Camilleri et al. (9. September 2026) nennt für Maximum-a-posteriori **3,3 σ**, nicht 2,5 σ (Maximum-Likelihood 3,1 σ unverändert). KUE-SCI-0191 v0.2 ist entsprechend korrigiert und um die DES-Multiprobe-Analyse und Reanalysen vom Oktober 2026 ergänzt.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

1. **Abschnitte 2–6 ersetzen** durch:
   > Supernovae Unite (Camilleri et al., arXiv:2609.05053, Preprint) vereint Pantheon+ und DES-SN5YR zu 2.884 wahrscheinlichen SN Ia in einem gemeinsamen Analysepfad. Allein bestimmt der Datensatz die Expansionsgeschichte, nicht H₀. Mit CMB und BAO bevorzugt er leicht eine zeitabhängige Dunkle Energie (w₀ ≈ −0,86, w_a ≈ −0,60; frequentistisch 3,1–3,3 σ), die Bayes'sche Evidenz ist aber schwach und prior-abhängig. `[R]` Das ist ein Hinweis, keine Entdeckung. `[OFFEN]` Zahlen, Systematik und Folgeanalysen: `DOC:KUE:KUE-SCI-0191-2026-DE`.
2. **Abschnitt 9 (Offene Prüfungen)** durch einen Satz mit Verweis auf KUE-SCI-0191 ersetzen; dort wird der Prüfstand gepflegt.
3. **Vollständig erhalten:** §1 Zweck (epistemische Trennung), **§7 Bedeutung für AVI**, **§8 Bezug zu AVI-Test B**, **§10 OTA-Entscheidung**, **§12 Kanonregel** – ohne inhaltliche Änderung.
4. §11 Quellen: Verweis auf KUE-SCI-0191 ergänzen, die beiden Unite-Preprints können bleiben.
5. `relatedDocuments` um nichts erweitern (KUE-Verweis steht im Text); `summary` auf Brückenfunktion zu AVI umstellen.
6. Versionssprung auf v1.1, Revisionsvermerk „2026-11-04: Realteil nach DOC:KUE:KUE-SCI-0191-2026-DE ausgelagert; MAP-Signifikanz nach arXiv v2 berichtigt“. Kennzeichnung nicht stärker als KUE.

## Wirkung

Keine auf andere Repositories. Der AVI-Teil wird nicht berührt, daher keine Entscheidung von Thomas nötig. Abweichungen, die KUE fehlten, gab es nicht (KUE-SCI-0191 war vollständiger).
