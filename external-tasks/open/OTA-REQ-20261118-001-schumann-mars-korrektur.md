# OTA-REQ-20261118-001 – OTA-SCI-0009-2025-DE (Planetare Schumann-Resonanzen und AVI-Kopplung): Realteil korrigieren und nach KUE-Umzug kürzen

Status: open
Datum: 2026-11-18
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-18-OTA-SCI-0009-2025-DE.md`
Zuordnung: Teile nach KUE. Realteile §I (Schumann-Grundlagen), §II (Mars-Forschungsstand) und §IV (Zeitdilatation) gehen in ein neues KUE-Dokument (`kueper.com/external-tasks/open/EXT-OTA-KUE-20261118-001.md`); Erd-Grundlagen stehen schon in `KUE-SCI-0012-2026-DE`. AVI-Modell (§III), χ-Resonanzzeit (§V), Baumeister-Frequenz (§VI) und alle Kuratornotizen bleiben in OTA.
Voraussetzung: Punkte A–C erst, wenn das neue KUE-Dokument aus EXT-OTA-KUE-20261118-001 in `kueper.com/main` gemergt ist (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Punkt D hat keine Voraussetzung.
KUE-Dokument: `KUE-SCI-0223-2026-DE` (Schumann-Resonanzen Mars, Erdorbit, biologische Evidenz; `kueper.com/src/content/kue/sci/kue-sci-0223-2026-de.md`, in `main`) – Signatur eingetragen am 2026-11-26 (EXT-KUE-OTA-20261125-004).
Teilweise erledigt: 2026-11-21 – Punkt D umgesetzt in OTA-SCI-0009 v1.0.1 durch die Begutachtung (ECO-ARC-0038 §3b). Offen: A–C (warten auf das KUE-Dokument aus EXT-OTA-KUE-20261118-001), E (wartet auf Thomas).
Teilweise erledigt: 2026-11-26 – Punkte A–C umgesetzt in OTA-SCI-0009 v1.1 durch die Begutachtung (ECO-ARC-0038 §3b; KUE-SCI-0223-2026-DE v0.1 in `kueper.com/main`, `KUE-SCI-NNNN` = KUE-SCI-0223). `relatedDocuments` um KUE-SCI-0223 und KUE-SCI-0012 ergänzt. Offen bleibt nur Punkt E (wartet auf Thomas).
Bezug: Die Quellenfehler zu Haider et al. 2019 aus `OTA-REQ-20261106-quellenpruefung.md` sind hier mit erfasst.

## Anlass

Die als [R] gekennzeichneten Teile enthalten mehrere falsche Angaben (geprüft 2026-11-18):

- Ruf et al. 2009 fanden Peaks bei etwa 10 Hz und Vielfachen, nicht bei 7,83/14,1/20,3 Hz (das sind Erdwerte); eine Folgesuche mit dem Allen Telescope Array (Anderson et al., arXiv:1111.0685) bestätigte den Befund nicht.
- Toledo-Redondo et al. 2017: 9–14 Hz hängen an der Staubaktivität, nicht an Tag/Nacht.
- Haider et al. 2019: Seiten 2260–2266 (nicht 2275); Modell für die nächtliche Ionosphäre.
- Missionstabelle §2.3: MOXIE ist ein Perseverance-Instrument, nicht Zhurong; InSight- und MAVEN-Zeilen ohne Beleg.
- §1.1: Die ideale Hohlraumformel ergibt für die Erde etwa 10,6 Hz, nicht 7,83 Hz (der Messwert ist wegen der Verluste niedriger, vgl. KUE-SCI-0012 §III).
- §4.2: 477 µs/Tag stammen aus einer Rechnung (Ashby & Patla, Astronomical Journal, Dezember 2025), nicht aus Uhrenexperimenten; 50 Jahre ergeben etwa 8–9 s, nicht 2–3 s.
- §7.2/Anhang: Tianwen-3 ist eine Probenrückführung (Start um 2028), keine Mission zur In-situ-Messung von Schumann-Resonanzen.
- §6.1/Anhang: „Vagus-Nerv/HRV-Fenster 10–15 Hz [R]“ ist falsch – Herzratenvariabilität liegt bei 0,04–0,4 Hz.

## Gewünschte Änderung

A. **§I und §II (bis einschließlich Tabelle 2.3) ersetzen** durch einen Abschnitt „I. Realgrundlage (Kurzfassung)“ mit genau diesem Text:
   > [R] Schumann-Resonanzen sind elektromagnetische Eigenschwingungen des Hohlraums zwischen Planetenoberfläche und unterer Ionosphäre, angeregt durch elektrische Entladungen; auf der Erde liegt die Grundmode bei etwa 7,8 Hz (`DOC:KUE:KUE-SCI-0012-2026-DE`). [T] Für den Mars erwarten Modelle eine Grundmode von etwa 9–14 Hz, je nach Staubbelastung, mit geringer Güte. Gemessen ist sie bisher nicht; der einzige gemeldete indirekte Hinweis (Peaks um 10 Hz während eines Staubsturms 2006) wurde in einer Folgesuche nicht bestätigt. Einzelheiten und Quellen: `DOC:KUE:KUE-SCI-0223-2026-DE`.
   [KN-01] bleibt unverändert stehen (siehe Punkt E).
B. **§IV (4.1 und 4.2) ersetzen** durch:
   > [R/T] Nach einer Rechnung von Ashby & Patla (2025) gehen Uhren auf dem Mars im Mittel etwa 477 Mikrosekunden pro Tag schneller als auf der Erde, mit Schwankungen über das Marsjahr – rund 0,17 Sekunden pro Jahr. Für Biologie ist das bedeutungslos, für Navigation und Zeitstandards nicht. Einzelheiten: `DOC:KUE:KUE-SCI-0223-2026-DE`.
   [KN-02] bleibt unverändert.
C. **Weitere Korrekturen in [R]-Angaben:**
   1. §7.2, erster Punkt: „(Tianwen-3 geplant für 2028)“ ersetzen durch „(bisher keine Mission mit dieser Aufgabe geplant)“.
   2. Anhang, linke Spalte: „Ruf et al. 2009: 7.83, 14.1, 20.3 Hz \[R\]“ → „Ruf et al. 2009: Peaks um 10 Hz, unbestätigt \[R\]“; „NIST optische Gitteruhren (10⁻¹⁸) \[R\]“ → „Ashby & Patla 2025: Rechnung \[R\]“; „Tianwen-3 (geplant 2028) \[R\]“ → „Mars-SR in situ: offen \[R\]“; „InSight/MAVEN: keine glob. SR \[R\]“ → „Mars-SR: keine Messung \[R\]“. Rechte Spalte unverändert.
   3. Revisionsvermerk und Versionssprung auf v1.1: „<Datum>: Realteil §I/§II/§IV nach DOC:KUE:KUE-SCI-0223-2026-DE ausgelagert und Realangaben korrigiert (OTA-REQ-20261118-001); Langfassung über Git v1.0.“ `relatedDocuments` um `DOC:KUE:KUE-SCI-0223-2026-DE` und `DOC:KUE:KUE-SCI-0012-2026-DE` ergänzen. Kennzeichnung nicht stärker als im KUE-Dokument.
D. **AVI-Akronym** – Entschieden: D6 der Kontrakomologie-Kanonisierung (Thomas), umgesetzt in `external-tasks/done/KG-REQ-20260719-avi-akronym-korrektur.md`. In OTA-SCI-0009 wurde die Stelle damals übersehen, weil sie über einen Zeilenumbruch läuft. Ersetzen: Titelblock „der Adaptiven Vakuum-Interaktion“ → „des Axiomatischen Vakuum-Integrals“; Abstract „AVI-Modell (Adaptive Vakuum-Interaktion)“ → „AVI-Modell (Axiomatisches Vakuum-Integral)“; Tabelle „Verwandte Dokumente“, Zeile OTA-FND-0002: „AVI-Modell (Adaptive Vakuum-Interaktion)“ → „AVI-Modell (Axiomatisches Vakuum-Integral)“. Nebenbefund außerhalb dieses Dokuments: Auch OTA-FND-0013-2026-DE (2 Stellen) und OTA-FND-0015-2026-DE (1 Stelle) enthalten noch „Adaptive Vakuum“ – gesondert prüfen, nicht Teil dieses Requests.
E. **Claude-Status: wartet auf Thomas** – Folgende Punkte berühren Setzung, Spekulation oder Kuratornotizen und werden nicht ohne Entscheidung umgesetzt:
   1. [KN-01] nennt Ruf et al. 2009 „den stärksten indirekten Hinweis“. Nach Anderson et al. ist der Befund unbestätigt. Vorschlag: Notiz um einen Satz ergänzen („Eine Folgesuche 2010 fand das Signal nicht.“) oder unverändert lassen.
   2. §6.1-Tabelle und Anhang: Zeile „Vagus-Nerv/HRV-Fenster 10–15 Hz \[R\]“. Vorschlag: „EEG Alpha/SMR-Übergang 10–15 Hz \[R\]“ (Alpha 8–12 Hz, SMR 12–15 Hz sind reale Bänder; HRV liegt bei 0,04–0,4 Hz). Davon hängt Hypothese B in §6.2 ab („autonomes Regulationsfenster (Herzratenvariabilität, Vagustonus)“), die ebenfalls angepasst werden müsste.
   3. §6.1-Tabelle: Zeile „Mars (Ruf et al. 2009) 7.83, 14.1, 20.3 Hz \[R\]“ → „Mars (Ruf et al. 2009) um 10 Hz, unbestätigt \[R\]“. Die Aussage, 12 Hz liege „exakt im Überlappungsbereich“, bleibt mit dem Modellbereich 9–14 Hz gültig.

## Wirkung

- `kueper-ecosystem/status/ota-kue-zuordnung.md`: Zeile OTA-SCI-0009 ergänzt.
- Querverweise in OTA-SCI-0015, OTA-MON-0002 und OTA-RED-0012 bleiben gültig.
