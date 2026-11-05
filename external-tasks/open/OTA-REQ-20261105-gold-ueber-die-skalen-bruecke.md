# OTA-REQ-20261105-001 – OTA-SCI-0106-2026-DE (Gold über die Skalen): Realteil auf Verweis nach KUE-SCI-0195 kürzen, schlankes Brückendokument

Status: open
Datum: 2026-11-05
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-05-OTA-SCI-0106-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0195-2026-DE`; das Dokument ist faktisch ein reines Realdossier ohne Werkbezug (`universe: []`) und wird nach §3a zum schlanken Brückendokument.
Voraussetzung: KUE-SCI-0195 v0.4 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-05`).

## Anlass

Die Abschnitte 2–6, 9 und 10 von OTA-SCI-0106 decken sich jetzt mit KUE-SCI-0195 v0.4 (Abschnitte 2–7). Lagerstätten, Recycling, Minamata und Provenienz (OTA §§ 5, 9, 10) wurden dabei nach KUE übernommen und mit USGS MCS 2026 aktualisiert; KUE ergänzt außerdem Magnetar-r-Prozess, Überhitzung, STAR BES-II und ALICE. OTA-SCI-0106 enthält keinen Werkbezug und keine Setzung.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

1. **Abschnitte 2–6 ersetzen** durch diese Grundinformation:
   > Gold (Au, Ordnungszahl 79) kommt natürlich als stabiles ¹⁹⁷Au vor. Seine Kerne entstehen im r-Prozess; Neutronensternverschmelzungen sind als Quelle belegt, Magnetar-Riesenflares und weitere Quellen werden diskutiert – die Bilanz ist offen. `[R/OFFEN]` Die gelbe Farbe des Metalls ist wesentlich relativistisch bedingt. `[R]` Die STAR-Befunde an Au+Au-Kollisionen betreffen heiße QCD-Materie, keine Eigenschaft von makroskopischem Gold; ein kritischer Punkt ist nicht nachgewiesen. `[R/I]` Zahlen, Quellen und Einzelheiten: `DOC:KUE:KUE-SCI-0195-2026-DE`.
2. **Abschnitte 9 und 10** (Provenienz, Umwelt) auf je einen Satz mit Verweis auf KUE-SCI-0195 §7 kürzen.
3. **Erhalten:** §1 (Evidenzsprache und kritische Trennung), §11 (Vergleichsmatrix, dient der Trennregel), §12 (Retrospektive und Übergabe – OTA-interner Index, siehe `OTA-REQ-20261006-gold-across-scales.md`). §7 und §8 (Folgedossier, Arbeitspakete) auf das verkürzen, was OTA noch selbst leisten soll (Index früherer OTA-Gold-Einträge, Werkbezug); die Grundlagen-Arbeitspakete 1–3 liegen jetzt bei KUE.
4. **Quellenanker:** auf `DOC:KUE:KUE-SCI-0195-2026-DE` umstellen; STAR-Primärquelle darf bleiben.
5. **Werkbezug:** Das Dokument hat keinen. KUE-SCI-0195 nennt *Eigenzeit* als Anwendungsfeld, OTA-SCI-0017 (Goldhydrid, AVI) und OTA-TEC-0021 berühren Gold. Vorschlag: im Brückendokument diese Bezüge nennen (`relatedDocuments`), ohne neue Setzung. Falls Thomas keinen Werkbezug sieht, bleibt es ein reines Verweisdokument.
6. `summary` auf die Brückenfunktion umstellen; Versionssprung auf v0.3, Revisionsvermerk „2026-11-05: Realteil nach DOC:KUE:KUE-SCI-0195-2026-DE ausgelagert“. Kennzeichnung nicht stärker als KUE.

## Wirkung

- Keine weiteren Repositories. Der KG-Hinweis in §8 Punkt 6 (KG-Kandidaten nur als Vorschläge) gilt künftig für KUE-SCI-0195.
