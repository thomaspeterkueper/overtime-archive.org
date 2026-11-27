# OTA-REQ-20261124-001 – OTA-SCI-0083-2026-DE (Eigenzeit, optische Atomuhren, Ausschlusslogik): Quelle präzisieren, danach zum Brückendokument kürzen

Status: done
Erledigt: 2026-11-27 – Punkte A und B umgesetzt in OTA-SCI-0083 v1.1/v1.2 durch die Begutachtung (ECO-ARC-0038 §3b; KUE-SCI-0177-2026-DE v0.3 mit Abschnitt VI c in `kueper.com/main`).
Datum: 2026-11-24
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-24-OTA-SCI-0083-2026-DE.md`
Zuordnung: ganz nach KUE (Realteil) – reines [R]-Dossier ohne Setzung; der Werkbezug liegt in §8 (Schnittstelle OTA-SCI-0017/OTA-TEC-0021) und §9 (Trennlinie EIGENZEIT/AVI/NOXIA). Der Realteil soll per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261124-001.md` als Abschnitt VII in `KUE-SCI-0177-2026-DE` (v0.3) aufgehen.
Voraussetzung: Punkt A sofort umsetzbar. Punkt B erst, wenn `KUE-SCI-0177-2026-DE` in mindestens v0.3 (mit dem Abschnitt aus EXT-OTA-KUE-20261124-001) in `kueper.com/main` gemergt ist.

## Anlass

Abgleich am 2026-11-24: Die Sachaussagen in §2–§7 sind korrekt (1 cm ≈ 1,1 × 10⁻¹⁸ nachgerechnet; Bothwell et al. 2022, *Nature* 602, 420–424, Unsicherheit 7,6 × 10⁻²¹ bestätigt). Die Quellenprüfung 2026-11 meldet die Angabe „NIST/JILA documentation …“ als zu ungenau. Seit Erstellung neu (nur in KUE aufzunehmen): europäischer Glasfaser-Uhrenvergleich (Pizzocaro et al. 2026, *Phys. Rev. Research* 8, 033250), Yb/Sr-Vergleich über 1350 km mit 2,2 × 10⁻¹⁸ (Hou et al., arXiv:2610.34250) und PTB-Rotverschiebungstest über Breitengrade (Nosske et al., arXiv:2611.27588, 20.11.2026).

## Gewünschte Änderung

A. **Quelle präzisieren (sofort umsetzbar):** In §10 den dritten Eintrag ersetzen durch:
   „- **[R] JILA/NIST (2022):** *JILA Atomic Clocks Measure Einstein's General Relativity at Millimeter Scale*, Pressemitteilung vom 16.02.2022, https://www.colorado.edu/jila/2022/02/16/jila-atomic-clocks-measure-einsteins-general-relativity-millimeter-scale – institutioneller Hintergrund zu Bothwell et al. (2022).“
   Versionssprung v1.1 (Frontmatter `version`), Revisionsvermerk am Dokumentende: „2026-xx-xx: Quelle NIST/JILA präzisiert (OTA-REQ-20261124-001 A).“

B. **Mit KUE-Dokument (ECO-ARC-0038 §3a, Realteil vollständig umgezogen):**
   1. §2–§7 ersetzen durch einen Abschnitt „2. Realgrundlage (Kurzfassung)“ mit genau diesem Text:
      > **[R]** Eigenzeit ist nach spezieller und allgemeiner Relativität eine Eigenschaft von Weltlinien in der Raumzeit, keine einstellbare Materialeigenschaft: Auf der Erde entstehen Gangunterschiede von Uhren durch Bewegung und durch Unterschiede des Schwerepotentials (rund 10⁻¹⁸ pro Zentimeter Höhe). Optische Atomuhren lösen solche Unterschiede heute bis in den Millimeterbereich auf (Bothwell et al., Nature, 2022). Eine behauptete lokale Uhrenanomalie gilt deshalb erst dann als Kandidat für neue Physik, wenn Potential-, Bewegungs-, Transfer- und Uhrensystematik nach einem gestuften Prüfpfad ausgeschlossen und das Ergebnis unabhängig repliziert ist. Einzelheiten, Prüfpfad und Quellen: `DOC:KUE:KUE-SCI-0177-2026-DE`.
   2. §1 bleibt (Zweck und Negativgrenze), §8 und §9 bleiben wörtlich; Abschnittsnummern anpassen.
   3. §10 Quellen: Bothwell et al. (2022) behalten, Denker et al. (2018) und den JILA/NIST-Eintrag durch „Realgrundlage: `DOC:KUE:KUE-SCI-0177-2026-DE`“ ersetzen.
   4. §11 („Offene Grounding-Schnittstelle“) ersetzen durch: „Der Realwissenschaftsanker zu Eigenzeit und Frequenzmetrologie ist `DOC:KUE:KUE-SCI-0177-2026-DE` (ab v0.3).“
   5. `summary`: „Brückendokument: [R]-Trennlinie für behauptete lokale Eigenzeitanomalien (AVI/Au₂Hₓ, EIGENZEIT, NOXIA); Realteil in KUE-SCI-0177.“ Kopfzeile „Dokumenttyp“: „Brückendokument zur relativistischen Zeitmetrologie“.
   6. Versionssprung v1.2, Revisionsvermerk „<Datum>: Realteil nach DOC:KUE:KUE-SCI-0177-2026-DE ausgelagert (OTA-REQ-20261124-001 B).“ Nicht archivieren; nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261124-001 (Ergänzung KUE-SCI-0177).
- `OTA-SCI-0017-2025-DE`, `OTA-TEC-0021-2025-DE` verweisen inhaltlich auf dieses Dossier; bei ihrer nächsten Begutachtung den KUE-Anker mitprüfen. Keine Änderung an deren Setzung.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0083 aktualisiert.
