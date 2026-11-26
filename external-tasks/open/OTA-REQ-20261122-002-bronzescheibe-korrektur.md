# OTA-REQ-20261122-002 – OTA-SCI-0081-2026-DE (Bronzescheibe): Frequenzrechnung und Quellen korrigieren, Realteile nach KUE kürzen

Status: open
Datum: 2026-11-22
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-22-OTA-SCI-0081-2026-DE.md`
Zuordnung: Teile nach KUE – Plattenakustik (§1.1, §1.2) und Lapis-lazuli-Mineralogie/Lumineszenz (§2.1, §2.2 ohne „Narrativer Anker“) werden per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261122-002.md` zu KUE-Dokumenten; Astronomie (§5.1) hat mit `DOC:KUE:KUE-SCI-0207-2026-DE` bereits ein KUE-Gegenstück. §1.3, „Narrativer Anker“ in §2.2, §2.3, §III, §IV, §5.2, alle KN-Notizen und §VI bleiben in OTA.
Voraussetzung: Punkt A sofort umsetzbar. Punkt C erst, wenn die KUE-Dokumente aus EXT-OTA-KUE-20261122-002 in `kueper.com/main` gemergt sind (Signaturen dort vergeben: `KUE-SCI-0221-2026-DE` für Plattenakustik und `KUE-SCI-0222-2026-DE` für Lapis lazuli, beide in `main` seit 2026-11-25). Punkt B wartet auf Thomas.
Teilweise erledigt: 2026-11-24 – Punkt A umgesetzt in OTA-SCI-0081 v1.3 durch die Begutachtung (ECO-ARC-0038 §3b); bei A.3 die Variante „Absatz streichen“ gewählt (keine Quelle für die Tingsha-Werte gefunden). Hinweis: Die alte Frequenzangabe „~1.000–3.000 Hz“ steht weiter in §3.3 (Teil von B.2) und in der Tabelle von §VI (Zeile Eigenfrequenz) – von A nicht erfasst. Offen: B (wartet auf Thomas), C (wartet auf die KUE-Dokumente aus EXT-OTA-KUE-20261122-002).
Teilweise erledigt: 2026-11-26 – Signaturen KUE-SCI-0221-2026-DE und KUE-SCI-0222-2026-DE eingetragen, C.2 bei der Lumineszenz nach KUE-SCI-0222 Abschnitt III präzisiert (EXT-KUE-OTA-20261125-003); Punkt C umgesetzt in OTA-SCI-0081 v1.4 (Ökosystem-Kreislauf, Claude). Offen: B (wartet auf Thomas).
Erfasst die Punkte zu OTA-SCI-0081 aus `OTA-REQ-20261106-quellenpruefung.md`.

## Anlass

Nachrechnung am 2026-11-22: Mit den im Dokument genannten Werten (E ≈ 110 GPa, h = 3,5 mm, ν ≈ 0,34, ρ ≈ 8400 kg/m³, a = 35 mm) gilt f ≈ λ² × 505 Hz. Die angesetzte Spanne λ² ≈ 6–9 ergibt daher etwa 3,0–4,5 kHz, nicht „1.500–4.000 Hz“. Tiefster Modus der freien Kreisplatte ist (2,0) mit λ² ≈ 5,25, also rund 2,7 kHz; der axialsymmetrische Modus (0,1) liegt mit λ² ≈ 9,08 bei rund 4,6 kHz (Eigenwerte für ν ≈ 0,33 nach Leissa 1969). Der Modus mit drei Knotenkreisen (λ² ≈ 87,8) läge bei rund 44 kHz – im Ultraschall. Daneben sechs fehlerhafte oder nicht auffindbare Quellen (Quellenprüfung 2026-11) und Abweichungen zu KUE-SCI-0207 bei MUL.APIN und Thuban.

## Gewünschte Änderung

A. **Realgrundlage und Quellen korrigieren (sofort umsetzbar):**
   1. §1.2, vom Absatz „Für den ersten axialsymmetrischen Modus (0,1) …“ bis einschließlich „… für eine idealisierte, frei gelagerte Scheibe mit konstantem Querschnitt.“ ersetzen durch:
      > Bei der freien Kreisplatte ist nicht der axialsymmetrische Modus (0,1) der tiefste, sondern der Modus mit zwei Knotendurchmessern (2,0). Für ν ≈ 0,33 gilt λ²(2,0) ≈ 5,25 und λ²(0,1) ≈ 9,08 (Leissa 1969). Mit √(D/ρh) ≈ 3,9 m²/s und a = 35 mm folgt f ≈ λ² × 505 Hz, also f(2,0) ≈ 2,7 kHz und f(0,1) ≈ 4,6 kHz. `[T — Kirchhoff-Plattentheorie]`
   2. §1.2, Absatz „Daraus folgt: Die reale Grundmode …“ ersetzen durch:
      > Daraus folgt: Mit h/a = 0,1 liegt die Scheibe an der Grenze der dünnen Platte; Schubverformung, Gravuren, Einlagen und Dickenschwankungen senken die realen Frequenzen eher um einige bis etwa zehn Prozent. Ein Arbeitsbereich von **etwa 2–3 kHz** für den tiefsten Modus ist damit die vorsichtige Größenordnung. `[T]`
      Den zweiten Punkt unter „Methodische Einschränkung“ („Näherungsmethoden liefern erfahrungsgemäß eine obere Schranke …“) ersetzen durch: „Rayleigh-Ritz-Näherungen liefern obere Schranken; die Kirchhoff-Theorie überschätzt bei dicken Platten die höheren Moden.“
   3. §1.2, Absatz „Vergleich mit kleinen Bronzebecken …“: Die Angabe „Tingsha … 800–2.000 Hz“ ist unbelegt. Absatz streichen oder mit Quelle belegen.
   4. §5.1, Mesopotamien-Punkt ersetzen durch: „**Mesopotamien:** Das Kompendium MUL.APIN ordnet Sterne und Sternbilder mit Aufgangsdaten in Listen; älteste Abschrift 686 v. Chr., Kompilation meist um 1000 v. Chr. datiert, die astronomischen Daten passen nach Schaefer zu etwa 1370 ± 100 v. Chr. (siehe `DOC:KUE:KUE-SCI-0207-2026-DE`) `[R]`“
   5. §5.1 Tabelle, Zeile Thuban: Relevanz ersetzen durch „Polstern etwa 3940–1790 v. Chr.; engste Polnähe um 2830 v. Chr. (< 10′), um 2700 v. Chr. noch unter etwa 1° vom Pol (`DOC:KUE:KUE-SCI-0207-2026-DE`) `[R]`“. §VI Tabelle, Zeile „Thuban als Polarstern ~2700 BCE“: Mechanismus ersetzen durch „Engste Polnähe um 2830 v. Chr.; um 2700 v. Chr. noch Polstern – Datierungsanker mit einer Spanne von mehreren Jahrhunderten“.
   6. Quellen:
      - „Fraysse, V. et al. (2014) …“ streichen (nicht auffindbar). Ersatz zur Prüfung: „Lo Giudice, A. et al. (2009): Multitechnique characterization of lapis lazuli for provenance study. *Analytical and Bioanalytical Chemistry* 395, 2211–2217 (Lumineszenz unter Ionen- und Elektronenanregung, nicht UV; Fundstelle nicht online bestätigt).“
      - „Harlow, G.E. (1994) … *Elements* 10 …“ streichen (Zeitschrift erscheint erst seit 2005).
      - Lilyquist → „Lilyquist, C. (1979): *Ancient Egyptian Mirrors from the Earliest Times through the Middle Kingdom*. Münchner Ägyptologische Studien 27. Berlin/München: Deutscher Kunstverlag.“
      - Pernier → „Pernier, L. (1908): Un singolare monumento della scrittura pittografica cretese. *Rendiconti della Reale Accademia dei Lincei*, Cl. Sc. mor., stor. e filol., Ser. V, 17, 642–651.“
      - Fischer → „Fischer, S. R. (1988): *Evidence for Hellenic Dialect in the Phaistos Disk*. Bern: Peter Lang.“
      - Ribichini → „Ribichini, S. (1999): Baetyl. In: van der Toorn, K., Becking, B. & van der Horst, P. W. (Hg.): *Dictionary of Deities and Demons in the Bible*, 2. Aufl. Leiden: Brill, 157–159 (Fundstelle nicht online bestätigt).“
   7. Metadaten: Frontmatter `version: v1.0`, Kopf „Version 1.0“ und Fußzeile „v1.0“, der Revisionsverlauf führt bereits v1.2. Mit dieser Korrektur einheitlich auf v1.3; Revisionsvermerk „2026-xx-xx: v1.3: Frequenzrechnung §1.2 korrigiert, MUL.APIN/Thuban an KUE-SCI-0207 angeglichen, Quellen korrigiert (OTA-REQ-20261122-002 A).“
   KN-Notizen, §1.3, §III, §IV.2 und §5.2 bleiben unverändert.

B. **Claude-Status: wartet auf Thomas** – berührt Werkbezug und kuratorische Notizen:
   1. **§1.3 und KN-1.3:** Die drei Kreise als „Chladni-n=3-Mode“: Für die Scheibe läge dieser Modus bei rund 44 kHz, nicht hörbar und mit Sand bei Handanregung praktisch nicht sichtbar zu machen. Hypothese A („Handwerker sieht die Knotenkreise“) bräuchte einen hörbaren Modus mit Knotenkreisen – nächstliegend (0,1) mit einem Kreis bei rund 4,6 kHz. Vorschlag: In §1.3 einen Satz ergänzen („Der Modus mit drei Knotenkreisen läge bei dieser Scheibe im Ultraschall, um 40 kHz.“) und KN-1.3 entsprechend anpassen – Entscheidung Thomas.
   2. **§3.3 und §VI (Scheibe/Schlüssel):** Mit dem tiefsten Scheibenmodus bei etwa 2–3 kHz überlappt der Radialmodus des Schlüssels (1,2–2,0 kHz) nur am Rand; Kopplung eher über Obertöne des Schlüssels. Formulierung der Überlappungsanalyse anpassen.
   3. **KN-5.1-Astronomie:** „nur in einem engen Zeitfenster um ~2700 BCE“, „um ~1700 BCE … Kochab dem Pol am nächsten“ und „schmales Fenster von wenigen Jahrhunderten“ widersprechen KUE-SCI-0207 (Thuban Polstern etwa 3940–1790 v. Chr.; Kochab erst um 1100 v. Chr. am polnächsten). Anpassen.
   4. Kopfzeile „Status: Entwurf“ gegenüber Frontmatter `status: AKTIV` und Kopfzeile „kueper.com-Kandidat: Ja — Abschnitte I–IV vollständig übertragbar“ (nach dieser Prüfung nur I.1–I.2 und II.1–II.2) klären.

C. **Mit KUE-Dokumenten (ECO-ARC-0038 §3a):**
   1. §1.1 und §1.2 (nach Punkt A) ersetzen durch:
      > `[R]` Eine freie Kreisplatte schwingt in Moden mit Knotendurchmessern und Knotenkreisen; aufgestreuter Sand macht sie als Chladni-Figuren sichtbar. `[T]` Für eine Scheibe aus Arsenbronze von etwa 7 cm Durchmesser und 3,5 mm Dicke liegt der tiefste Modus nach der Plattentheorie bei etwa 2–3 kHz, der Modus mit einem Knotenkreis bei etwa 4–5 kHz. Rechnung, Eigenwerte und Grenzen: `DOC:KUE:KUE-SCI-0221-2026-DE`.
   2. §2.1 und §2.2 bis vor „**Narrativer Anker**“ ersetzen durch:
      > `[R]` Lapis lazuli ist ein Gestein aus Lazurit (blau, Farbe durch Schwefelradikalanionen wie S₃⁻), Calcit und Pyrit, dazu Diopsid und weitere Begleitminerale; Hauptquelle der Antike war Badachschan in Afghanistan. Unter UV-, Elektronen- oder Ionenanregung leuchten Proben uneinheitlich und überwiegend über die Begleitminerale: in der Kathodolumineszenz Calcit orange-rot, Diopsid und Wollastonit weiß-gelb; blaue Emission (Kalifeldspat) ist Merkmal bestimmter Lagerstätten (Sibirien), Lazurit selbst leuchtet kaum. Eine deutlich blaue Emission ist damit nicht der Normalfall. Einzelheiten und Quellen: `DOC:KUE:KUE-SCI-0222-2026-DE`.
      „Narrativer Anker“ und die beiden folgenden Absätze bleiben wörtlich.
   3. §5.1, Aufzählung „Navigation nach Sternen …“ und Thuban-Zeile: Verweis „Einzelheiten: `DOC:KUE:KUE-SCI-0207-2026-DE`“ ergänzen; die Tabelle bleibt (Werkanker Amara/Qatna).
   4. Quellen „Plattenakustik“ und „Lapis lazuli“ durch „Realgrundlage: `DOC:KUE:KUE-SCI-0221-2026-DE`, `DOC:KUE:KUE-SCI-0222-2026-DE`“ ersetzen; die übrigen Quellenblöcke bleiben.
   Versionssprung v1.4, Revisionsvermerk „<Datum>: Realteile nach DOC:KUE:KUE-SCI-0221-2026-DE und DOC:KUE:KUE-SCI-0222-2026-DE ausgelagert (OTA-REQ-20261122-002 C).“ Nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261122-002 (zwei neue Dokumente oder ein Dokument mit zwei Teilen).
- `OTA-TEC-0081-2026-DE` (fiktionale Anwendung der Scheibe) und `OTA-SCI-0080-2026-DE` (Schlüssel-Akustik): bei ihrer Begutachtung die korrigierten Frequenzen prüfen – Entscheidung über die Werkfolgen bei Thomas.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0081 aktualisiert.
