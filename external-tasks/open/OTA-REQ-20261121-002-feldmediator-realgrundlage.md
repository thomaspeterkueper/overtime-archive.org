# OTA-REQ-20261121-002 – OTA-SCI-0024-2026-DE und -EN (Skalares Feldmediator-Modell): Zitate korrigieren, Realgrundlage aktualisieren

Status: open
Datum: 2026-11-21
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfberichte: `kueper-ecosystem/reviews/2026-11-21-OTA-SCI-0024-2026-DE.md`, `kueper-ecosystem/reviews/2026-11-21-OTA-SCI-0024-2026-EN.md`
Zuordnung: Entscheidung Thomas – das Dokument ist Thomas' eigener Modellvorschlag (χ-Feld); es wandert nicht nach KUE. Der werkneutrale Forschungsstand zur S₈-Spannung soll per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261121-002.md` in KUE dokumentiert werden.
Voraussetzung: Punkt A sofort umsetzbar (in DE und EN gleich). Punkt C erst, wenn das KUE-Dokument aus EXT-OTA-KUE-20261121-002 in `kueper.com/main` gemergt ist.
Claude-Status: wartet auf Thomas (Punkte B und C – Modellaussagen und Motivation des χ-Feld-Vorschlags)
Erfasst die Punkte zu OTA-SCI-0024 DE/EN aus `OTA-REQ-20261106-quellenpruefung.md`.

## Anlass

Abgleich am 2026-11-21 (Quellen im Prüfbericht):

- Die als „Trojanowski et al. (2026)“ zitierte Arbeit hat als Erstautor Lei Zu: Zu, L., Giarè, W., Zhang, C., Di Valentino, E., Tsai, Y.-L. S. & Trojanowski, S., „A solution to the S8 tension through neutrino–dark matter interactions“, *Nature Astronomy*, DOI 10.1038/s41550-025-02733-1; Preprint arXiv:2501.13785.
- Inhaltlich berichtet die Arbeit eine Präferenz für eine von null verschiedene Wechselwirkung von „knapp 3σ“ nur in der Kombination Planck + BAO + ACT + DES-Y3-Cosmic-Shear (u ≈ 10⁻⁴); mit dem vollen DES-Y3-3×2pt-Datensatz sinkt sie unter 2σ. „> 3σ“ trifft nicht zu.
- Die S₈-Spannung hat sich seit 2025 abgeschwächt: KiDS-Legacy (Wright et al. 2025, A&A, arXiv:2503.19441) findet S₈ = 0,815 (+0,016/−0,021), in Übereinstimmung mit Planck (0,73σ); DES Y6 Cosmic Shear (DES Collaboration, arXiv:2602.10065, Februar 2026) findet S₈ = 0,798 (+0,014/−0,015), 2,0σ zur CMB-Kombination Planck/ACT/SPT. Zu et al. vermerken selbst, dass ihre Präferenz nicht von der globalen S₈-Spannung getragen wird.
- Euclid: DR1-Foundation erschien am 12.11.2026 ohne Kosmologie-Ergebnisse; das vollständige DR1 mit Weak-Lensing-Produkten ist für Mitte 2027 angekündigt (ESA, DR1-Timeline). Der Zeitplan im Dokument („Q2–Q3 2027“) bleibt damit plausibel.

## Gewünschte Änderung

A. **Zitate und Kopf (sofort umsetzbar, DE und EN):**
   1. Alle Stellen „Trojanowski et al. (2026)“ / „Trojanowski et al.“ → „Zu et al. (2026)“ / „Zu et al.“ (DE: Zusammenfassung, I.B Überschrift und Text, VI.A; EN entsprechend).
   2. Am Ende der Zusammenfassung bzw. vor „Verwandte Dokumente“ einen Abschnitt „Literatur“ / „References“ einfügen:
      - Zu, L., Giarè, W., Zhang, C., Di Valentino, E., Tsai, Y.-L. S. & Trojanowski, S. (2026). A solution to the S8 tension through neutrino–dark matter interactions. *Nature Astronomy*. DOI 10.1038/s41550-025-02733-1. arXiv:2501.13785.
      - Planck Collaboration, Aghanim, N. et al. (2020). Planck 2018 results. VI. Cosmological parameters. *A&A* 641, A6. DOI 10.1051/0004-6361/201833910.
      - DES Collaboration: Amon, A. et al. / Secco, L. F. et al. (2022). Dark Energy Survey Year 3 results: Cosmology from cosmic shear … *Phys. Rev. D* 105, 023514 / 023515.
      - Riess, A. G. et al. (2022). A Comprehensive Measurement of the Local Value of the Hubble Constant … *ApJL* 934, L7. DOI 10.3847/2041-8213/ac5c5b.
   3. Kopftabelle: „Status: Kanonisch“ an den Frontmatter-Status angleichen („Aktiv“ bzw. „Active“).
   Versionssprung im Frontmatter (DE v1.0 → v1.1, EN v2.0 → v2.1), Revisionsvermerk „<Datum>: Erstautor der zitierten ν-DM-Arbeit korrigiert, Literatur ergänzt (OTA-REQ-20261121-002 A).“ Modell, Kuratornotiz KN-0.1 und alle Aussagen über das χ-Feld bleiben unverändert.

B. **Claude-Status: wartet auf Thomas** – Modellaussagen:
   1. I.B: „mit > 3σ statistischer Signifikanz auflösen“ → „in der Kombination Planck + BAO + ACT + DES-Y3-Cosmic-Shear eine Präferenz von knapp 3σ für eine Wechselwirkung (u ≈ 10⁻⁴); mit dem vollen DES-Y3-3×2pt-Datensatz unter 2σ“. Die Kennzeichnung [ETABLIERT] für diesen Abschnitt passt dann nicht mehr; Vorschlag [PHÄNOMENOLOGISCH].
   2. I.A.1: Die S₈-Spannung „3,4σ“ (Planck vs. DES Y3) ist überholt; KiDS-Legacy (0,73σ) und DES Y6 (2,0σ zur CMB-Kombination) ergänzen. Das berührt die Motivation des Modells.
   3. II.B: Größenordnung des Wirkungsquerschnitts. Nach der üblichen Definition u = (σ_νDM/σ_Thomson)·(m_DM/100 GeV)⁻¹ entspricht u ≈ 10⁻⁴ bei m_DM = 100 GeV einem σ_νDM ≈ 7 × 10⁻²⁹ cm², nicht 10⁻⁴⁴ cm². Außerdem ergibt (g_νχ · g_χDM)²/(8π m²) mit g_νχ in GeV⁻¹ die Einheit GeV⁻⁴, keine Fläche. Satz „Dies ist präzise die schwache Kopplung, die erforderlich ist, um S₈ aufzulösen“ prüfen.
   4. III.A: Mit ε = 0,30, ω = 9,06, φ = π/2 ergibt sich R(1/1100) ≈ 1,173, nicht 1,136; der Exponent β ist nicht angegeben. Rechnung und Verhältnis 0,940 prüfen.
   5. IV.A: „Operativ seit Juli 2023“ → „Start 1. Juli 2023, Routinebetrieb seit Februar 2024“; „Erste Datenveröffentlichung: erwartet Q2–Q3 2027“ → „DR1-Foundation am 12.11.2026 ohne Kosmologie; vollständiges DR1 mit Weak-Lensing-Produkten Mitte 2027“.

C. **Mit KUE-Dokument (wartet auf Thomas):** Unter I.A einen Satz „Forschungsstand zur S₈-Spannung: `DOC:KUE:KUE-SCI-NNNN`“ ergänzen.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261121-002 (Forschungsstand S₈-Spannung, werkneutral, ohne χ-Feld).
- `OTA-FND-0010-2026-DE` (χ-Feld als Präkursor-Theorie) stützt sich auf dieses Modell; bei seiner Begutachtung auf dieselben Punkte prüfen.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeilen OTA-SCI-0024 DE/EN ergänzt.
