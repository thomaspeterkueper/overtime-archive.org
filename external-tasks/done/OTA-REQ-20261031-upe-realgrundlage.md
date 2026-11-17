# OTA-REQ-20261031-001 – OTA-LSC-0003-2026-DE (UPE): Realgrundlage ergänzen

Status: done
Erledigt: 2026-11-17 – Ökosystem-Kreislauf (Claude), Branch `claude/OTA-REQ-20261031-001`; Voraussetzung KUE-SCI-0175 v0.2.1 seit 2026-11-17 in kueper.com/main (EXT-OTA-KUE-20261031-001 erledigt).
Datum: 2026-10-31
Quelle: Begutachtung nach ECO-ARC-0037 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-10-31-OTA-LSC-0003-2026-DE.md`
Betrifft: nur [R]/[T]/[H]-Abschnitte (I–III, VI). Weltsetzung (IV, BRS, Λ-Profile) bleibt unberührt.

## Befunde und Änderungsvorschlag

1. **Entwicklungspfad (III, Zeile „2055–2080 räumlich aufgelöste UPE-/Redox-Bildgebung [S]“):** Räumlich aufgelöste UPE-*Bildgebung* gibt es in der Forschung bereits: Kobayashi et al. (2009, PLOS ONE, Human-CCD) und Salari et al. (2025, *J. Phys. Chem. Lett.*, DOI 10.1021/acs.jpclett.4c03546; EMCCD/CCD an lebenden vs. frisch getöteten Mäusen bei gleicher Körpertemperatur sowie an verletzten Pflanzen). Vorschlag: Zeile teilen – „UPE-Bildgebung im Labor (Tier, Pflanze, kleine Humanstudien)“ [R] seit 2009; „klinisch validierte Redox-Bildgebung“ bleibt [S]. Herkunftsebene `quelle`/`forschung`.
2. **2.1 Evidenz:** Salari et al. (2025) als Beleg ergänzen, dass UPE mit Vitalität (Tier) und Verletzung/Stress (Pflanze) korreliert – Mechanismus über ROS weiterhin nur [T]; kleine Stichproben, keine Spezifität. [R] Messung, [T] Deutung.
3. **Kopf-/Hirn-UPE (VI, Hinweis auf „Human-, pEEG-Arbeiten“):** Salari, Seshan, Rishabh, Oblak & Simon, „Revisiting claims of extracranial biophoton detection from the human brain“, arXiv:2603.26630 (v2 26.05.2026, Preprint, nicht begutachtet): unter streng dunklen Bedingungen ist die Kopf-UPE viel schwächer als in früheren Studien; große Signale sind wahrscheinlich Streulicht; Kopfhaut/Schädel absorbieren < 600 nm stark, gemessene Emission stammt eher aus der Kopfhaut als aus dem Gehirn. Vorschlag: Satz ergänzen, dass extrakranielle „Gehirn“-UPE-Befunde methodisch umstritten sind [H]; Preprint-Status kennzeichnen.

## Wirkung

- `kueper.com`: `KUE-SCI-0175-2026-DE` ist SSOT für die UPE-Grundlage – Request `kueper.com/external-tasks/open/EXT-OTA-KUE-20261031-001.md`.
- OTA-intern: `OTA-SCI-0047-2026-DE` (Kopf-/Gesichtsmessungen, Halo-Brücke) bei seiner Begutachtung gegen Punkt 3 prüfen.

## Umgesetzt

OTA-LSC-0003-2026-DE v1.3: Punkt 1 – Entwicklungspfad geteilt (Labor-UPE-Bildgebung seit 2009 [R], klinisch validierte Redox-Bildgebung 2055–2080 [S]); Punkt 2 – Salari et al. 2025 in 2.1 als [R]-Messung mit [T]-Deutung und Grenzen; Punkt 3 – Kopf-/Hirn-UPE in VI als methodisch umstritten [H] mit Preprint-Kennzeichnung, Verweis auf KUE-SCI-0175 Abschnitt IVa; Literaturanker in VI ergänzt. Weltsetzung (IV, BRS, Λ-Profile) unverändert. Kennzeichnung nicht stärker als in KUE.

Offen bleibt der Hinweis zu `OTA-SCI-0047-2026-DE` (Punkt 3 bei dessen nächster Begutachtung prüfen) – kein Handlungsauftrag dieses Requests.
