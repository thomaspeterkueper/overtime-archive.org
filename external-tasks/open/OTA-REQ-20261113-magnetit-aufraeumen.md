# OTA-REQ-20261113-001 – OTA-SCI-0060-2026-DE (Biogenes Magnetit, Alpha-ERD): Realteil korrigieren und auf Verweis nach KUE-SCI-0170 kürzen

Status: open
Datum: 2026-11-13
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-13-OTA-SCI-0060-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden – `DOC:KUE:KUE-SCI-0170-2026-DE` („Menschliche Magnetorezeption und Magnetit im Gehirn“, v0.1, Status Reviewfähig). Die Inventur führte das Dokument in Gruppe A; das Gegenstück existiert aber bereits und behandelt genau die Realaussagen dieses Dokuments (einschließlich der 19–24-nm-Angabe). Werkbezug (Die Kette vom Hexenteich, Hüter-der-Schwellen; Entzugsprofil, Zeitdehnung) bleibt in OTA.
Voraussetzung: `KUE-SCI-0170-2026-DE` in mindestens v0.1 in `kueper.com/main` – erfüllt (Stand 2026-11-13). Punkte A–D sind umsetzbar; Punkt E wartet auf Thomas.

## Anlass

Abgleich mit den Primärquellen am 2026-11-13:

- Kirschvink et al. 1992 (PNAS 89:7683) nennen mindestens 5 Mio. Einzeldomänenkristalle pro Gramm Hirngewebe und über 100 Mio. pro Gramm in den Hirnhäuten; die vermessenen Kristalle lagen überwiegend bei 10–70 nm (Mittel etwa 33 nm). Die Angaben „19–24 nm“, „in Neuronen und Astrozyten“, die Arealliste und „Faktor 10–100 zwischen Individuen“ sind dort nicht belegt. Die regionale Verteilung (höher in Kleinhirn und Hirnstamm) stammt aus Gilder et al. 2018 (Sci Rep 8:11363).
- Ein Teil des Hirnmagnetits ist nach Maher et al. 2016 (PNAS 113:10797) verbrennungsbedingt und exogen – „biogen“ gilt nicht für alle Partikel.
- Wang et al. 2019 (eNeuro 6(2), DOI 10.1523/ENEURO.0483-18.2019): 36 rekrutierte Erwachsene (ausgewertet 29/26/16 je Experiment), nicht 34; Abnahme der Alpha-**Power** um etwa 50 %, bei starken Respondern bis etwa 60 % (nicht „Amplitude“); Beginn ab etwa 100 ms, individuelle ERD meist 0,25–0,75 s; wirksam nur bei nach unten geneigtem Feld und gegen den Uhrzeigersinn rotierter Deklination. Der Mechanismus-Vorschlag stammt aus derselben Arbeit, nicht aus einer eigenen „Kirschvink et al. 2019“.
- Eine unabhängige Replikation durch andere Labore ist bis heute nicht publiziert (Recherche 2026-11-13); ein magnetitbasierter Rezeptor beim Menschen ist nicht identifiziert. KUE-SCI-0170 führt die Mechanismusfrage deshalb als [H], die Trigeminus-Rolle als unbelegt.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

Die Abschnittsnummern I–III bleiben erhalten, weil `OTA-TEC-0035-2026-DE` auf „OTA-SCI-0060, Abschn. II“ verweist. Die kuratorischen Notizen [KN-1.2], [KN-2.2] und [KN-3.3] bleiben wörtlich an ihrer Stelle.

A. **Abschnitt I:** Überschrift „I. BIOGENES MAGNETIT IM MENSCHLICHEN GEHIRN“ bleibt. Die Unterabschnitte 1.1 und 1.2 (Text und Tabelle) ersetzen durch diese Grundinformation:
   > In menschlichem Hirngewebe sind nanoskalige magnetische Eisenoxidkristalle (Magnetit/Maghemit) nachgewiesen – nach Kirschvink et al. (1992) mindestens etwa 5 Millionen Einzeldomänenkristalle pro Gramm, in den Hirnhäuten deutlich mehr. `[R]` Ein Teil der Partikel ist nach Maher et al. (2016) verbrennungsbedingt und stammt aus der Umwelt. `[R]` Größen, Verteilung und Herkunft: `DOC:KUE:KUE-SCI-0170-2026-DE`.
   [KN-1.2] folgt unverändert.
B. **Abschnitt II:** Überschrift „II. ALPHA-ERD: MAGNETFELDWAHRNEHMUNG IM EEG“ bleibt. 2.1 (mit Tabelle) und 2.2 ersetzen durch:
   > Wang et al. (2019, eNeuro) berichteten bei einem Teil ihrer Versuchspersonen eine Abnahme der EEG-Alpha-Power – bei starken Respondern bis etwa 60 % – kurz nach bestimmten Rotationen eines erdstarken, nach unten geneigten Magnetfelds; die Personen bemerkten die Feldänderung nicht. `[R]` Eine unabhängige Replikation durch andere Labore steht aus. `[H]` Studiendesign und Einordnung: `DOC:KUE:KUE-SCI-0170-2026-DE`.
   [KN-2.2] folgt unverändert.
C. **Abschnitt III:** Überschrift ändern in „III. MECHANISMUS: MAGNETIT-HYPOTHESE (OFFEN)“. 3.1, 3.2 (Tabelle) und 3.3 ersetzen durch:
   > Wang et al. halten einen ferromagnetischen Wandler wie Magnetit für vereinbar mit ihren Daten. Ein solcher Rezeptor ist beim Menschen aber nicht identifiziert; welche Strukturen beteiligt wären und wie stark die Reaktion individuell schwankt, ist offen. `[H]` Siehe `DOC:KUE:KUE-SCI-0170-2026-DE`.
   [KN-3.3] folgt unverändert. Abschnitt IV (4.1, 4.2) bleibt unverändert.
D. **Abschnitt V (Tabelle), Literatur, Metadaten:**
   - Tabellenzeilen ersetzen: „~5 Mio. Magnetit-Nanokristalle/g Hirngewebe (Kirschvink 1992)“ → „≥ 5 Mio. Magnetitkristalle/g Hirngewebe, teils exogen (Kirschvink 1992; Maher 2016)“ `[R]`; „Alpha-ERD nach Magnetfeldrotation (Caltech 2019)“ bleibt `[R]`; „Unbewusste Magnetfeldverarbeitung als sensorischer Input“ `[R]` → `[H]`; „Magnetit-Hypothese als theoretischer Mechanismus“ `[T]` → `[H]`; „Individuelle Variabilität der Reaktionsstärke“ `[R]` → „Individuelle Unterschiede der Reaktionsstärke (Wang 2019)“ `[R]`. Die übrigen Zeilen (Konditionierung, Entzugsprofil, Zeitdehnung) bleiben.
   - Literatur ergänzen: „Maher, B.A. et al. (2016). Magnetite pollution nanoparticles in the human brain. PNAS, 113(39), 10797–10801.“ und „Weiterführend: DOC:KUE:KUE-SCI-0170-2026-DE.“
   - Frontmatter `relatedDocuments` um `"KUE-SCI-0170-2026-DE"` nur ergänzen, wenn das Schema KUE-Ziele zulässt (sonst weglassen). Versionssprung auf v1.1 (Frontmatter und Kopfzeile/Endzeile), Revisionsvermerk am Ende: „2026-11-13: Realteil korrigiert und nach DOC:KUE:KUE-SCI-0170-2026-DE ausgelagert (OTA-REQ-20261113-001)“. Nicht stärker kennzeichnen als KUE-SCI-0170.

## Wartet auf Thomas

E. Claude-Status: wartet auf Thomas
   - Kopftabelle: „Status: Kanonisch“ und „kueper.com-Status: Publikationsfaehig (Abschnitte I–IV)“ widersprechen Frontmatter `status: AKTIV` und dem Umstand, dass KUE-SCI-0170 diese Rolle inzwischen übernimmt. Vorschlag: „Status: Aktiv“, Zeile „kueper.com-Status“ ersetzen durch „Realgrundlage: DOC:KUE:KUE-SCI-0170-2026-DE“.
   - Marker: Kopfzeile „[R] [T] [S]“, Frontmatter `["R", "T", "H"]`; die Werkteile (4.2, Zeitdehnung) sind [S]/[F]. Vorschlag: Frontmatter `["R", "H", "S", "F"]` – welche Marker, entscheidet Thomas.
   - Titel im Frontmatter ist nur die Signatur; Vorschlag `title: "Biogenes Magnetit im menschlichen Gehirn"`.

## Nicht Teil dieses Requests

Abschnitt IV, die kuratorischen Notizen, die Werkzuordnung (Serie „Die Kette vom Hexenteich“) und alle Fiktionszeilen bleiben wörtlich. Andere OTA-Dokumente mit Verweis auf OTA-SCI-0060 (OTA-TEC-0035, OTA-FND-0024/-0025, OTA-BIO-0027/-0028, OTA-NAR-0005, OTA-SCI-0117/-0119/-0062) werden nicht angefasst.

## Wirkung

- `kueper.com/external-tasks/open/EXT-OTA-KUE-20261113-001.md`: Ergänzungen für KUE-SCI-0170 (konkurrierende Radikalpaar-Befunde beim Menschen).
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0060 aktualisiert; die Inventurgruppe A ist hier faktisch K.
