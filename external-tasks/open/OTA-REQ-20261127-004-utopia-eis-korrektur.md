# OTA-REQ-20261127-004 – OTA-SCI-0090-2026-DE (Utopia Planitia – Untergrundeis): Quellen und Eisangaben korrigieren, danach Realteil auf Verweis nach KUE kürzen

Status: open
Datum: 2026-11-27
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-27-OTA-SCI-0090-2026-DE.md`
Zuordnung: Teile nach KUE – §2 (Zhurong) und §3 (Untergrundeis) sind werkneutraler Realteil. Für Zhurong existiert `DOC:KUE:KUE-SCI-0202-2026-DE`; für das SHARAD-Eis und die Eisbefunde 2026 gibt es noch kein KUE-Dokument – neu per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261127-003.md`. Werkbezug (§1 Zweck, §4 Siedlungsrelevanz, §5 NOXIA-Arbeitskorridor, §6, §7, §8, §10) bleibt in OTA.
Voraussetzung: Punkt A sofort umsetzbar. Punkt B erst, wenn das KUE-Dokument aus EXT-OTA-KUE-20261127-003 in `kueper.com/main` gemergt ist (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Punkt C wartet auf Thomas.
Erfasst den Eintrag zu OTA-SCI-0090 aus `OTA-REQ-20261106-quellenpruefung.md` (1 fehlerhaft, 2 zu ungenau).

## Anlass

Abgleich am 2026-11-27 (Belege im Prüfbericht): Der Zhurong-Artikel in *Nature Astronomy* 6, 65–71 hat Liu, J. als Erstautor, nicht „Gao“. Die NASA/JPL-Mitteilung vom 22.11.2016 (2016-299) beschreibt die SHARAD-Einheit so: 50–85 % Wassereis, **etwa 80–170 m mächtig** unter **1–10 m** Boden, zwischen etwa 39° und 49° N, Fläche größer als New Mexico, Wassermenge etwa wie Lake Superior; Primärarbeit Stuurman et al. (2016, *Geophysical Research Letters*). Die OTA-Formulierung „Tiefe bis zur Unterkante … zwischen 10 und 170 m“ vermischt Deckschicht und Mächtigkeit; die Volumenzahl 14.300 km³ steht nicht in der Mitteilung. Neu seit Erstellung: HRSC-Bilder (Mars Express, DLR 15.04.2026) zeigen um 43° N / 102° E zahlreiche Eisindikatoren in Utopia Planitia; eine Arbeit in *Earth and Planetary Science Letters* (2026, DOI 10.1016/j.epsl.2026.119832) berichtet oberflächennahes Eis am Tianwen-1-Landeplatz – im Spannungsverhältnis zu Li et al. (2022, *Nature*: kein wasserreiches Eis bis etwa 80 m entlang der Zhurong-Route).

## Gewünschte Änderung

A. **Korrekturen im Realteil (sofort umsetzbar):**
   1. §2, Quellenzeile und §9, erster Punkt: „Gao, X. et al. (2022)“ bzw. „Gao et al.“ → „Liu, J., Li, C., Zhang, R. et al. (2022)“ bzw. „Liu, J. et al.“; Titel, Zeitschrift und DOI bleiben.
   2. §3, erster Absatz ersetzen durch: „**[R]** Radarmessungen von SHARAD (Mars Reconnaissance Orbiter, über 600 Überflüge) zeigen in Utopia Planitia zwischen etwa 39° und 49° N eine großräumige eisreiche Untergrundeinheit: 50–85 % Wassereis mit Staub- und Gesteinsanteil, etwa 80–170 m mächtig, unter einer Bodenschicht von etwa 1–10 m. Die Fläche ist größer als der US-Bundesstaat New Mexico.“
   3. §3, zweiter Absatz bleibt („Lake Superior“).
   4. §3, Quellenzeile und §9, zweiter und dritter Punkt ersetzen durch: „NASA/JPL (22.11.2016): *Mars Ice Deposit Holds as Much Water as Lake Superior* (News 2016-299), https://www.jpl.nasa.gov/news/mars-ice-deposit-holds-as-much-water-as-lake-superior/; Bild PIA21138. Primärarbeit: Stuurman, C. M. et al. (2016), *Geophysical Research Letters* 43 (Seiten/DOI am Paper zu prüfen).“
   Versionssprung v1.0.1, „Stand“ auf das Umsetzungsdatum, Revisionsvermerk am Ende: „<Datum> | v1.0.1: Zhurong-Erstautor (Liu, J.) und SHARAD-Angaben (Mächtigkeit, Deckschicht, Breitenlage) nach NASA/JPL 2016 korrigiert, Quellen präzisiert (OTA-REQ-20261127-004 A).“

B. **Mit KUE-Dokument (ECO-ARC-0038 §3a):**
   - §2 und §3 durch einen Abschnitt „2. Reale Basis (Kurzfassung)“ ersetzen: „**[R]** Der chinesische Rover Zhurong (Tianwen-1) landete am 15. Mai 2021 in südlicher Utopia Planitia bei etwa 25,1° N / 109,9° E. Radarmessungen aus dem Orbit (SHARAD) zeigen zwischen etwa 39° und 49° N eine eisreiche Untergrundeinheit, etwa 80–170 m mächtig unter wenigen Metern Boden, mit etwa so viel Wasser wie der Lake Superior. Einzelheiten: `DOC:KUE:KUE-SCI-0202-2026-DE` (Zhurong) und `DOC:KUE:KUE-SCI-NNNN` (Untergrundeis).“ Der Satz „Aus seiner Mission folgt jedoch **nicht**, dass eine spätere chinesische Siedlung am selben Ort entstehen müsste.“ bleibt wörtlich als zweiter Absatz. Nummerierung fortlaufend anpassen.
   - §9 Quellen: auf „Realgrundlage: `DOC:KUE:KUE-SCI-0202-2026-DE`, `DOC:KUE:KUE-SCI-NNNN`“ kürzen.
   - Frontmatter: `relatedDocuments` um `DOC:KUE:KUE-SCI-0202-2026-DE` und `DOC:KUE:KUE-SCI-NNNN` ergänzen, sofern das Schema KUE-Ziele zulässt (sonst nur im Text); `epistemicStatus` auf ["R", "H", "F"] (den nicht standardisierten Marker „OFFEN“ entfernen).
   - Versionssprung v1.1, Revisionsvermerk: „<Datum> | v1.1: Realteil nach DOC:KUE:KUE-SCI-NNNN und DOC:KUE:KUE-SCI-0202-2026-DE ausgelagert (OTA-REQ-20261127-004 B).“ §1, §4–§8 und §10 bleiben wörtlich. Nicht stärker kennzeichnen als KUE.

C. **Claude-Status: wartet auf Thomas** – Der NOXIA-Arbeitskorridor (§5, 44–47° N / 105–115° E, Mittelpunkt 45° N / 110° E) liegt in der Breitenzone der SHARAD-Einheit und nahe dem HRSC-Bildzentrum von 2026 (43° N / 102° E). Das stützt die Setzung, ändert sie aber nicht. Ob §5 oder §8 („Eisreinheit im gewählten Teilgebiet“) einen Hinweis darauf erhalten soll, entscheidet Thomas.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261127-003 (neues KUE-Dokument „Untergrundeis in Utopia Planitia“, Querverweis KUE-SCI-0202).
- `OTA-TEC-0089-2026-DE`, `OTA-META-0004-2076-DE` (Kaiwu) und der offene Request `EXT-ENG-OTA-20260930-utopia-industrial-site-review.md` nutzen denselben Standortkorridor; bei ihrer Bearbeitung die korrigierten Eisangaben übernehmen.
