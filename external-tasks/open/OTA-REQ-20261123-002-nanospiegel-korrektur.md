# OTA-REQ-20261123-002 – OTA-TEC-0028-2025-DE (Nanospiegel-Metamaterial-Systeme): Realgrundlage korrigieren, nach KUE kürzen

Status: open
Datum: 2026-11-23
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-23-OTA-TEC-0028-2025-DE.md`
Zuordnung: Teile nach KUE – die [R]-Teile von §II (2.1–2.4) werden per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261123-002.md` zu einem KUE-Dokument (aus Primärquellen neu aufgebaut). Die [S→T]-/[S]-Blöcke in §II, §III–§VI, alle Kuratornotizen KN-01 bis KN-06 und das Zitat bleiben in OTA.
Voraussetzung: Punkt A sofort umsetzbar. Punkt C erst, wenn das KUE-Dokument aus EXT-OTA-KUE-20261123-002 in `kueper.com/main` gemergt ist (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Punkt B wartet auf Thomas.
Teilweise erledigt: 2026-11-27 – Punkte A und C umgesetzt in OTA-TEC-0028-2025 v1.1/v1.2 durch die Begutachtung (ECO-ARC-0038 §3b; KUE-SCI-0224-2026-DE v0.1 in `kueper.com/main`, `KUE-SCI-NNNN` = KUE-SCI-0224). Die A-Korrekturen in §2.2–2.4 sind durch C wieder entfallen; erhalten bleiben die Revisionsvermerke. Offen bleibt nur Punkt B (wartet auf Thomas).
Erfasst die Punkte zu OTA-TEC-0028-2025 aus `OTA-REQ-20261106-quellenpruefung.md` (Alam et al. 2020, Yang et al. 2025).

## Anlass

Abgleich am 2026-11-23: Die Schaltzeit-Quelle „Alam et al. 2020, Nature Photonics“ ist nicht auffindbar; gemeint ist offenbar Alam, De Leon & Boyd (2016), *Science* (ITO). Primärbefunde: ITO – Indexänderung 0,72 ± 0,025, Rückkehr in etwa 360 fs, ENZ um 1,2 µm (OPN 05.05.2016; Univ. Rochester 28.04.2016); AZO – Reflexionsänderung bis 40 %, Transmission 30 %, Erholung < 1 ps, Relaxation < 500 fs, ENZ 1,1–1,5 µm (Kinsey et al. 2015, arXiv:1503.07832). „> 80 % Transmissionsänderung“ und „0 % ↔ 100 %“ sind damit nicht gedeckt. Die Koordinatentransformation in §2.4 ist falsch wiedergegeben (Pendry et al. 2006: r′ = a + r(b − a)/b), und eine Tarnkappe braucht keine Materialien mit ε < 0 und μ < 0, sondern anisotrope ε, μ mit Werten nahe null am Innenrand.

## Gewünschte Änderung

A. **Realgrundlage korrigieren (sofort umsetzbar):**
   1. §2.1, Tabelle: Zeile „Schaltzeit“ → Wert „einige hundert fs bis ~1 ps (Relaxation)“, Quelle „Alam et al. 2016 (ITO); Kinsey et al. 2015 (AZO)“. Zeile „Modulationstiefe“ → Wert „bis ~40 % Reflexions-, ~30 % Transmissionsänderung“, Quelle „Kinsey et al. 2015 (AZO)“. Zeile „Lebensdauer“ → Quelle „unbelegt“.
   2. §2.1, Diagramm: „Transmissionsänderung (0% ↔ 100%)“ → „Transmissions-/Reflexionsänderung (einige 10 %)“.
   3. §2.1, „Quellen“ ersetzen durch:
      - „Alam, M. Z., De Leon, I. & Boyd, R. W. (2016): Large optical nonlinearity of indium tin oxide in its epsilon-near-zero region. *Science* 352, 795–797. DOI 10.1126/science.aae0330“
      - „Kinsey, N. et al. (2015): Epsilon-near-zero Al-doped ZnO for ultrafast switching at telecom wavelengths. *Optica* 2(7), 616–622. arXiv:1503.07832“
      - „Yang, Y., Jeon, Y., Dong, Z. et al. (2025): Nanofabrication for Nanophotonics. *ACS Nano* 19, 12491–12605. DOI 10.1021/acsnano.4c10964“
   4. §2.2, Absatz unter „**Definition:**“ ersetzen durch: „Femtosekunden-Laser schreiben dreidimensionale Strukturen in transparente Dielektrika (Glas, Saphir); in Quarzglas entstehen u. a. selbstorganisierte Nanogitter, deren Orientierung und Doppelbrechung Daten kodieren können. Das Ausfällen von Metall-Nanopartikeln in Glas durch Laserbestrahlung ist ein eigenes Verfahren; „plasmonische Codes“ sind kein etabliertes Speicherverfahren. `[R]`“ Unter die Parametertabelle den Satz „Werte unbelegt; belegte Werte siehe Punkt C.“ setzen.
   5. §2.3, Tabelle „Realweltwerte (2025)“: ITO-Schaltzeit „~100 fs“ → „Rückkehr ~360 fs (Alam et al. 2016)“; AZO-Zeile → ENZ „1100–1500 nm“, Schaltzeit „Relaxation < 500 fs, Erholung < 1 ps (Kinsey et al. 2015)“; Kadmiumoxid-Zeile: Werte als „unbelegt“ kennzeichnen. Im „Mechanismus“-Block „(E² um Faktor 10³)“ streichen und „in <100 fs“ durch „in einigen hundert fs“ ersetzen.
   6. §2.4: „Optisches Cloaking für mm-Objekte bei spezifischen Wellenlängen“ → „„Teppich“-Tarnkappen für sichtbares Licht bis in den Zentimeterbereich (doppelbrechende Kristalle, 2011), nur für bestimmte Richtungen und Polarisationen“. Formel „r' = a + (b-a)·(r-a)/b“ → „r' = a + r·(b-a)/b   (0 ≤ r ≤ b)“. Erster Punkt unter „Realwelt-Constraints“ → „Erforderlich sind anisotrope, ortsabhängige ε und μ mit Komponenten nahe null am Innenrand – nur resonant und damit schmalbandig erreichbar“. Nach „(Pendry et al. 2006)“ die Fundstelle ergänzen: „*Science* 312, 1780–1782“.
   7. Metadaten: Frontmatter `version: "v1.1"`, Kopftabelle „Version: 1.1“; Revisionsvermerk „<Datum> | v1.1: Realgrundlage §II korrigiert (Schaltzeiten, Modulationstiefe, Quellen Alam 2016/Kinsey 2015/Yang 2025, Femtosekunden-Laserschreiben, Pendry-Transformation) (OTA-REQ-20261123-002 A).“
   Die Blöcke „Beispiel: Monolith-Gravuren als Nanolithographie [S→T]“, „In-Universe-Extrapolation [S]“, KN-01 bis KN-06, §III–§VI und das Eingangszitat bleiben unverändert.

B. **Claude-Status: wartet auf Thomas** – berührt Kuratornotizen, Markerschema und Werkbezug:
   1. **KN-01:** „Reale Nanolithographie (2025) schreibt maximal ~1 cm³ in Stunden“ ist unbelegt. Nach Vorliegen des KUE-Dokuments angleichen.
   2. **§3.2 Tabelle „Speicherdichte“:** „Moderne SSD (2025) ~10¹²“ unterschätzt (eine 2-TB-microSD mit rund 0,17 cm³ entspricht etwa 10¹⁴ bit/cm³ als Gerätewert); „Optische Holographie ~10¹⁵“ überschätzt die übliche Grenze von etwa 1/λ³ (rund 10¹²–10¹³ bit/cm³ bei sichtbarem Licht). Der Werkanker „10²¹ Bits im Monolithen“ [F] bleibt Setzung; die Vergleichszeilen anpassen oder als grobe Schätzung kennzeichnen.
   3. **§5.1:** „2025 – Labor-Nanospiegel (1 cm²) [R] Demonstriert“: „Nanospiegel“ ist keine etablierte Bauteilklasse; Vorschlag „ENZ-/plasmonische Schaltflächen im Labor (mm² bis cm²) [R]“.
   4. **§I Markerschema:** [T] ist hier als „NOXIA-Framework-spezifisch“ definiert, im OTA-Standard steht [T] für gut begründete Theorie. Klären, ob das Dokument das Standardschema übernehmen soll.
   5. **Kopftabelle „Status: Kanonisch“** gegenüber Frontmatter `status: AKTIV` klären.

C. **Mit KUE-Dokument (ECO-ARC-0038 §3a):**
   1. In §2.1 alles von „**Was sind Nanospiegel?**“ bis vor „### 2.2“ ersetzen durch:
      > `[R]` Plasmonische Nanostrukturen und Materialien mit Permittivität nahe null (ENZ, etwa ITO und AZO im nahen Infrarot) ändern ihre optischen Eigenschaften nach einem Laserpuls binnen einiger hundert Femtosekunden bis etwa einer Pikosekunde; der Schalthub liegt bei einigen zehn Prozent. Femtosekunden-Laser schreiben dauerhafte dreidimensionale Strukturen in Glas, die als Langzeit-Datenspeicher erprobt werden. Tarnkappen nach der Transformationsoptik funktionieren bisher nur schmalbandig, für bestimmte Richtungen und kleine Objekte. Einzelheiten und Quellen: `DOC:KUE:KUE-SCI-NNNN`.
   2. In §2.2 Definition und Parametertabelle, in §2.3 alles vor „**In-Universe-Extrapolation [S]:**“ und §2.4 vollständig entfernen; „Beispiel: Monolith-Gravuren als Nanolithographie [S→T]“, KN-01 und „In-Universe-Extrapolation [S]“ bleiben unter ihren Überschriften (2.2, 2.3) stehen; §2.4 entfällt.
   Versionssprung v1.2, Revisionsvermerk „<Datum> | v1.2: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261123-002 C).“ Nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261123-002 (neues KUE-Dokument).
- `OTA-TEC-0027-2091-DE` und `OTA-ART-0001-2087-DE` (Nanospiegel/AXIS): bei ihrer Begutachtung auf übernommene Realwerte (Schaltzeiten, Speicherdichten) prüfen.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-TEC-0028-2025-DE aktualisiert.
