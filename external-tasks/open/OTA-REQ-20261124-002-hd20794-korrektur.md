# OTA-REQ-20261124-002 – OTA-SCI-0030-2025-DE (HD 20794 d): Realangaben korrigieren, danach Realteil auf Verweis kürzen

Status: open
Datum: 2026-11-24
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-24-OTA-SCI-0030-2025-DE.md`
Zuordnung: Teile nach KUE – I, II.1, 3.1 (HZ-Grenzen), V (Instrumente) und VIII sind werkneutrales Realwissen; III–VII (episodische Habitabilität, NOXIA-Hypothesen, χ-Feld, GENERATION MARS) und die Kuratornotizen bleiben. Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261124-002.md`.
Voraussetzung: Punkt A sofort umsetzbar. Punkt C erst, wenn das neue KUE-Dokument aus EXT-OTA-KUE-20261124-002 in `kueper.com/main` gemergt ist (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Punkt B wartet auf Thomas.
Erfasst den Punkt zu OTA-SCI-0030-2025 aus `OTA-REQ-20261106-quellenpruefung.md` (Pressequellen).

## Anlass

Abgleich am 2026-11-24 mit Nari et al. 2025 (*A&A* 693, A297; arXiv:2501.17092) und Kane 2026 (arXiv:2605.26217). Masse, Periode, Exzentrizität, Entfernung und Datenbasis stimmen im Kern. Falsch oder ungenau: Einstrahlung im Perihel/Aphel, Winkelabstand („~80 mas“ statt 124–322 mas), Planetenhistorie 2011 (drei Signale, 40-d-Signal ist Sternaktivität), HZ-Grenzen, Masse ohne Hinweis auf Mindestmasse, TMT-Perspektive. Pressequellen ohne Datum/Titel.

## Gewünschte Änderung

A. **[R]-Angaben korrigieren (sofort umsetzbar):**
   1. §1.1, zweiter Absatz, ersetzen durch: „Bereits 2011 meldeten Pepe et al. drei Radialgeschwindigkeitssignale bei 18, 40 und 90 Tagen. Nari et al. (2025) bestätigen die Planeten b (18,3 Tage) und c (89,7 Tage), beide zu nahe am Stern, um habitabel zu sein; das 40-Tage-Signal wird der Sternaktivität zugeschrieben.“
   2. §1.2, erster Satz: „unter Leitung von Nicola Nari (Instituto de Astrofísica de Canarias)“ → „um Nicola Nari und Xavier Dumusque (Universität Genf)“; nach der DOI „, Band 693, Artikel A297“ ergänzen.
   3. §1.2 Tabelle: Masse → „m sin i = 5,82 ± 0,57 M⊕ (Mindestmasse)“; Umlaufzeit → „647,6 Tage (~1,77 Jahre)“; Semi-Major Axis → „1,354 AU“; Exzentrizität → „0,45 (+0,10/−0,11)“; Aphel → „~1,96 AU“; Equilibrium-Temperatur: Zusatz „(Wert nicht an der Primärquelle geprüft)“.
   4. §2.1: „→ Einstrahlung ~1,8× Erde“ → „→ Einstrahlung ~1,24× Erde (Kane 2026)“; „→ Temperatur wie Venus ohne Atmosphäre (~+40°C bei albedo 0,3)“ → „→ Gleichgewichtstemperatur etwa 270 K (−3 °C) bei Albedo 0,3 (eigene Abschätzung)“; „→ Einstrahlung ~0,25× Erde“ → „→ Einstrahlung ~0,18× Erde (Kane 2026)“; „→ Temperatur wie Mars (~-70°C)“ → „→ Gleichgewichtstemperatur etwa 165 K (−108 °C) bei Albedo 0,3 (eigene Abschätzung)“. Nach „Umlaufzeit: 647 Tage …“ ergänzen: „Zeitgemittelt erhält der Planet etwa 0,42-mal die Einstrahlung der Erde (Kane 2026).“
   5. §2.2: unter die Überschrift „**[T] Modellannahme – die Phasendauern sind schematisch; nach dem zweiten Keplerschen Gesetz ist die Perihelphase kürzer als die Aphelphase.**“ einfügen.
   6. §3.1: „Für HD 20794 (0,8 M☉) liegt die HZ zwischen etwa 0,7–1,5 AU.“ → „Für HD 20794 (0,79 M☉, 0,69 L☉) liegt die HZ konservativ bei 0,83–1,45 AU, optimistisch bei 0,63–1,52 AU (Nari et al. 2025). HD 20794 d verbringt etwa 32 % (konservativ) bzw. 45 % (optimistisch) seiner Bahn darin (Kane 2026).“
   7. §5.1 Tabelle: ANDES „~2030“ → „ab Anfang der 2030er (wissenschaftliches First Light des ELT geplant für Dezember 2030)“; TMT „~2032“ → „ungewiss (Standort und Finanzierung offen)“; HWO „~2040“ → „2040er (in Planung)“.
   8. §5.2: „einer Winkelseparation von ~80 mas (milliarcseconds)“ → „einer Winkelseparation von etwa 124–322 mas (Periastron bis Apastron)“; „Der Planet ist ~10⁹-mal lichtschwächer als sein Stern.“ → „Im reflektierten Licht erreicht der Planet nur etwa 3–4 × 10⁻¹⁰ der Helligkeit seines Sterns (Nari et al. 2025).“
   9. Quellen: Nr. 1 um „Hara, N. C.“ nicht ergänzen (Autorenliste bleibt „et al.“), aber Untertitel „Confirmation of a low-mass planet in the habitable zone of a nearby G-dwarf“ und „arXiv:2501.17092“ anfügen. Nr. 2 ersetzen durch „Université de Genève (28.01.2025): A super-Earth laboratory for searching life elsewhere in the Universe (Medienmitteilung zu Nari et al.)“. Nr. 3 und 4 mit „(Titel und Datum nicht geprüft)“ kennzeichnen. Neu als Nr. 1a: „Kane, S. R. (2026): Dynamical Stability and Habitability in the HD 20794 System. arXiv:2605.26217 (Preprint).“
   Versionssprung v1.2 (Frontmatter v1.0 und Revisionsverlauf 1.1 stimmen nicht überein; mit v1.2 aufgelöst), Revisionsvermerk: „2026-xx-xx: Realangaben nach Nari et al. 2025 und Kane 2026 korrigiert, Quellen präzisiert (OTA-REQ-20261124-002 A).“ Kuratornotizen, Abschnitte III.2–VII und die Kernaussagen bleiben unverändert.

B. **Claude-Status: wartet auf Thomas** – berührt Kuratornotizen und Werkbezug:
   - Kopfzeile „**Status:** Kanonisch“ gegenüber Frontmatter `status: AKTIV` klären.
   - Kuratoranmerkung: „geschätzte Masse von etwa 6 Erdmassen“ ist eine Mindestmasse; „Mit 19,7 Lichtjahren … erdnächste bekannte Planet in der habitablen Zone eines sonnenähnlichen Sterns“ trifft zu.
   - KN-01: „e ≈ 0,4–0,45“ → „e ≈ 0,45 (±0,1)“; „HD 20794 d transitiert nicht“ → „ein Transit ist nicht bekannt“.
   - IX Kernaussage 6: „ANDES, TMT, HWO“ → „ANDES, HWO, ggf. LIFE“.

C. **Mit KUE-Dokument (ECO-ARC-0038 §3a):**
   1. §I (1.1, 1.2 mit Tabelle; KN-01 bleibt) ersetzen durch „I. Realgrundlage (Kurzfassung)“ mit genau diesem Text:
      > `[R]` HD 20794 d umkreist einen nahen, sonnenähnlichen G-Zwerg in 6 pc (≈ 19,7 Lichtjahren) Entfernung alle 648 Tage auf einer stark exzentrischen Bahn (e ≈ 0,45, 0,75–1,96 AE) und durchquert dabei die habitable Zone. Bekannt ist nur seine Mindestmasse von rund 5,8 Erdmassen; Radius und Natur (Gesteinsplanet oder Mini-Neptun) sind offen. Das System hat zwei weitere, innere Planeten (Nari et al., A&A, 2025). Einzelheiten und Quellen: `DOC:KUE:KUE-SCI-NNNN`.
   2. §2.1: Bahnwerte behalten, Satz „Einzelheiten zur Einstrahlung: `DOC:KUE:KUE-SCI-NNNN`“ anfügen. §2.2 und KN-02 bleiben.
   3. §3.1: auf den ersten Absatz und den Satz „Problem: …“ kürzen, HZ-Zahlen durch „(Grenzen: `DOC:KUE:KUE-SCI-NNNN`)“ ersetzen. 3.2–3.3 bleiben.
   4. §5.1/5.2: Tabelle und Zahlen durch „Beobachtungsperspektive und Instrumente: `DOC:KUE:KUE-SCI-NNNN`“ ersetzen; KN-05 bleibt.
   5. §VIII: Tabelle behalten (Werkbezug „20-Lichtjahre-Kohorte“), Satz „Realdaten: `DOC:KUE:KUE-SCI-NNNN`“ anfügen; KN-07 bleibt.
   6. Quellen: Primärliteratur und institutionelle Quellen durch „Realgrundlage: `DOC:KUE:KUE-SCI-NNNN`“ ersetzen; OTA-interne Referenzen bleiben.
   7. Versionssprung v1.3, Revisionsvermerk „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261124-002 C).“ Nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261124-002 (neues Dokument).
- `OTA-SCI-0031-2024-DE`, `OTA-SCI-0032-2024-DE` (20-Lj-Kohorte): bei ihrer Begutachtung die Kohortentabelle angleichen.
- NOXIA-Bezüge zu HD 20794 nur prüfen, falls dort Realdaten übernommen wurden (nicht geprüft).
