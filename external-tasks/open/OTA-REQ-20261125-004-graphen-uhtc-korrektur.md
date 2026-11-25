# OTA-REQ-20261125-004 – OTA-SCI-0027-2025-DE (Graphen-Keramik-Verbundwerkstoffe, GCV-7): Realteil bereinigen, fingierte Quelle und Fiktion-als-Befund klären

Status: open
Datum: 2026-11-25
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-25-OTA-SCI-0027-2025-DE.md`
Zuordnung: Teile nach KUE – aber erst nach Bereinigung (ECO-ARC-0038 §3 Nr. 3). Realteil sind 1.1 (Tabelle „Klassische Lösungen“), 2.1, 2.2, 3.1 (Fourier-Teil) und 8.1 Punkt 2; Setzung/Spekulation sind 1.2, 2.3, 3.2, IV, V, VI (ASCE-Wertung), VII, 8.1 Punkt 3, 8.2. Ein KUE-Request wird erst nach Umsetzung von A und Entscheidung C gestellt (Vorschlag im Prüfbericht: gemeinsames KUE-Dokument „Wiederverwendbare Hitzeschilde und Ultra-Hochtemperatur-Keramiken – Stand 2026“, ggf. zusammen mit dem Realteil von OTA-SCI-0026/0028).
Voraussetzung: Punkt A sofort umsetzbar. Punkt B wartet auf Thomas.
Erfasst den Eintrag zu OTA-SCI-0027 aus `OTA-REQ-20261106-quellenpruefung.md` (3 nicht auffindbar).

## Anlass

Abgleich am 2026-11-25 (Belege im Prüfbericht): Drei der vier als `[R]` geführten Quellen sind auch nach zweiter gezielter Suche nicht nachweisbar; die Nummer „NASA/TM-2023-20230012345“ ist nach Muster und Fehlen in NTRS als fingiert anzusehen. Damit sind die FEM-Werte in 3.2 (GCV-7) und „TRL 3 – Erreicht (NASA)“ in 4.1 als realer Befund ausgewiesen, obwohl GCV-7 eine OTA-Setzung ist (ECO-ARC-0037 §3: Fiktion nie als Befund). Außerdem mehrere sachliche Fehler im Realteil (Shuttle- und Starship-Kacheln, SiC-Zersetzung, Graphen-Kennwerte).

## Gewünschte Änderung

A. **Korrekturen im Realteil (sofort umsetzbar):**
   1. 2.1, Tabelle: „| **Thermische Leitfähigkeit** | 5.000 W/(m·K) |“ → „bis ca. 5.300 W/(m·K) (suspendiertes Einzellagen-Graphen, Raumtemperatur; Balandin et al. 2008), spätere Messungen eher 2.000–4.000“; „| **Elektrische Leitfähigkeit** | 10⁶ S/m | Besser als Silber |“ → „| … | ca. 10⁶ S/m (Schicht) | Silber: 6,3 × 10⁷ S/m |“.
   2. 2.1, Punkt „2025 kostet 1 Gramm Hochqualitäts-Graphen ~100 USD“: Zusatz „`[S]` – Preis stark formabhängig (Nanoplättchen unter 1 USD/g, CVD-Monolagen pro Fläche), nicht belegt“.
   3. 2.2, Tabelle: „| **Schmelzpunkt** | 2.730°C |“ → „| **Zersetzung** | ab ca. 2.700 °C (kein Schmelzen bei Normaldruck) |“.
   4. 2.2, Liste: „Space Shuttle: SiC-Fliesen (weiß)“ → „Space Shuttle: Silica-Fliesen (LI-900/LI-2200; HRSI schwarz beschichtet, LRSI weiß), an Bugnase und Flügelvorderkanten RCC mit SiC-Schutzschicht“; „Starship: SiC-Fliesen (schwarz, reaktiv)“ → „Starship: silicabasierte Sechseckfliesen mit schwarzer Beschichtung“.
   5. 1.1, Tabelle „Klassische Lösungen“: „Fragil, 48h Wartung, 50 Flüge max.“ → „Fragil, aufwendige Fliesenwartung zwischen Flügen (Auslegung 100 Missionen)“; „| **Metallische TPS** | X-37B |“ → „| **Keramikfliesen/TUFROC** | X-37B |“ (Problemspalte: „klein, Wiederverwendung nur in Langzeitintervallen erprobt“). Zeile ergänzen: „| **Fliesen-TPS mit Schnellwiederverwendung** | Starship | Bei Testflügen bis 2026 wiederholt Fliesenverluste und Rissbildung; schnelle Wiederverwendung noch nicht erreicht |“.
   6. VI, Tabelle: „| **Carbon-Carbon-Komposit** | Bewährt (Shuttle) | Ablativ, Oxidation-anfällig |“ → „… | Nicht ablativ, aber oxidationsanfällig (SiC-Schutzschicht nötig) |“; „| **Hafniumcarbid (HfC)** | Höchster Schmelzpunkt (3.900°C) |“ → „Einer der höchsten Schmelzpunkte (ca. 3.950 °C) |“.
   7. X, Quellen 3 und 4 (Zhang 2022, Hu 2022) **nicht entfernen**, aber jeweils mit „– nicht nachweisbar (Quellenprüfung 2026-11, Begutachtung 2026-11-25)“ kennzeichnen. Als belegte Arbeiten zum gleichen Gegenstand ergänzen:
      - Balandin, A.A. et al. (2008). Superior thermal conductivity of single-layer graphene. *Nano Letters*, 8(3), 902–907. DOI 10.1021/nl0731872.
      - Lee, C., Wei, X., Kysar, J.W. & Hone, J. (2008). Measurement of the elastic properties and intrinsic strength of monolayer graphene. *Science*, 321, 385–388. DOI 10.1126/science.1157996.
      - Zhou, B.-Y. et al. (2020). Recent progress in ceramic matrix composites reinforced with graphene nanoplatelets. *Rare Metals*, 39, 513–528. DOI 10.1007/s12598-019-01306-2.
      - Broniszewski, K. et al. (2024). Effect of anisotropy of reduced graphene oxide on thermal and electrical properties in silicon carbide matrix composites. *Nanomaterials*, 14(6), 555. DOI 10.3390/nano14060555.
      - Ni, D. et al. (2022). Advances in ultra-high temperature ceramics, composites, and coatings. *Journal of Advanced Ceramics*, 11(1), 1–56. DOI 10.1007/s40145-021-0550-6.
   8. Frontmatter `epistemicStatus`: „F“ ergänzen (der Marker `[F]` wird in 4.1 verwendet).
   Versionssprung v1.1, Revisionsvermerk: „2026-xx-xx | v1.1: Realteil korrigiert (Graphen-, SiC- und TPS-Angaben), nicht nachweisbare Quellen gekennzeichnet, belegte Arbeiten ergänzt (OTA-REQ-20261125-004 A).“

B. **Claude-Status: wartet auf Thomas** – Fiktion als Befund:
   1. 3.2: „**[R] Real — NASA Glenn Research Center, 2023** / NASA führte FEM-Simulationen für Graphen-SiC-Komposite durch:“ → „**[F] OTA-Setzung** – In der OTA-Welt durchgeführte FEM-Simulationen für GCV-7:“. Die „**Quelle:** NASA/TM-2023-20230012345 …“-Zeile streichen. Tabellenwerte und [KN-02] bleiben.
   2. X: Quelle 2 und Quelle 7 (dieselbe Nummer) aus „[R] Real“ bzw. „[T]“ herausnehmen und als „fingiert – nicht in NASA NTRS nachweisbar“ kennzeichnen oder streichen.
   3. 4.1: „| **2025** | 3 | Laborproben (1 cm²) | [R] Erreicht (NASA) |“ → „| **2025** | 2–3 | Laborproben graphenverstärkter UHTC an Hochschulen | [R] (Zhou 2020, Broniszewski 2024) |“.
   4. V: „| **Graphen-SiC-Komposit (Labor)** | [R] | NASA 2023 | 10/10 — Gemessen |“ → „| … | [R] | Hochschul-Laborstudien (Zhou 2020, Broniszewski 2024) | 10/10 — Gemessen |“; Zeile „500 Flüge Lebensdauer | [T] | Simulation zeigt 500+“ → „[S] | OTA-Simulation (Setzung)“. Gesamtbewertung und Revisionsverlauf (40/60 bzw. 40/30/30) angleichen.
   5. 4.2: „**Roll-to-Roll CVD** (2035)“ – Roll-to-Roll-CVD gibt es seit 2010 (Bae et al., *Nature Nanotechnology* 5, 574–578, DOI 10.1038/nnano.2010.132); Vorschlag: „Roll-to-Roll-CVD defektarmer Großflächen (2035)“.

## Wirkung

- `OTA-TEC-0027-2091-DE` (ASCE-Hitzeschild) stützt sich auf GCV-7; nach Entscheidung B bei dessen Begutachtung die Kennzeichnung mitprüfen.
- `OTA-SCI-0026-2025-DE`, `OTA-SCI-0028-2025-DE` (gleiche Serie): bei ihrer Begutachtung auf dieselben Muster (fingierte NASA/TM-Nummern) prüfen; vgl. `OTA-REQ-20261030-sabre-realgrundlage.md`.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0027 aktualisiert.
