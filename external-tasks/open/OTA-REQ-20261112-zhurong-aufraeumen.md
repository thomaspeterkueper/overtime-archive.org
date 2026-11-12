# OTA-REQ-20261112-001 – OTA-SCI-0022-2025-DE (Zhurong, Wasser im Amazonium): Realteil korrigieren und auf Verweis nach KUE kürzen

Status: open
Datum: 2026-11-12
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-12-OTA-SCI-0022-2025-DE.md`
Zuordnung: Teile nach KUE (Inventur Gruppe A; wegen Werkbezug – Relikt-Fenster, GANDHAKA 2070, Utopia Planitia 2091 – kein vollständiger Umzug). Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261112-001.md`.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261112-001 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen (Punkte A–D). Punkt E wartet auf Thomas.

## Anlass

Das Dokument führt nur den Marker [R], nennt aber keine einzige Quelle. Die Recherche am 2026-11-12 ergab:

- Der Befund „Wasser bis vor etwa 750 Mio. Jahren“ stammt aus Liu, Yike; Yan, T.; Qin, X., *National Science Review* (online Dezember 2025, CAS-Mitteilung 08.01.2026) – nicht aus „Januar 2025“.
- Gemessen wurde mit dem hochfrequenten, vierfach polarisierten Bodenradar (450–2150 MHz) bis etwa 7 m Tiefe: eine rund **4 m** mächtige, zentimeterfein geschichtete Lage über begrabenen Kratern – nicht „5–10 m Tiefe“; eine Unsicherheit „±100 Ma“ ist nicht belegt.
- Hydratisierte Minerale (Sulfate/Silica) stammen aus einer anderen Arbeit (Liu, Y. et al. 2022, *Science Advances*, DOI 10.1126/sciadv.abn8555; MarSCoDe/LIBS und Kurzwellen-IR, Presse: etwa 700 Mio. Jahre), nicht von der Kamera „MSCam“ und nicht aus dem Radarbefund.
- „Amazonium: bisher angenommen KEIN flüssiges Wasser“ und „+2,25 Milliarden Jahre“ sind überzogen: Episodische Wasseraktivität im Amazonium wurde schon vorher diskutiert (u. a. Liu et al. 2022; sehr junge Krusten auf Dünen, Qin et al. 2023). Neu ist der Radarnachweis einer sedimentären Lage dieses Alters.
- „Konsens: Kombination aus allen drei Mechanismen“ ist unbelegt; es sind konkurrierende Hypothesen [H].
- Mars Sample Return: Der Kongress hat MSR im NASA-Haushalt FY2026 nicht weiter finanziert (Januar 2026); „Finanzierung gestrichen (2025)“ ist zeitlich ungenau.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **Abschnitte „I. Die Entdeckung“, „II. Wissenschaftliche Befunde“ und „III. Klimamodellierung“ ersetzen** durch einen Abschnitt „I. Realgrundlage (Kurzfassung)“ mit dieser Grundinformation:
   > Der chinesische Rover Zhurong (Tianwen-1, gelandet im Mai 2021 in Utopia Planitia) lieferte zwei Hinweise auf Wasser im Amazonium: hydratisierte Minerale in Krusten (Liu et al. 2022, Alter etwa 700 Mio. Jahre) und, mit Bodenradar, eine rund 4 m mächtige, fein geschichtete Lage in den obersten Metern, die als Ablagerung in flachem Wasser im mittleren bis späten Amazonium gedeutet wird – etwa 750 Mio. Jahre (Liu, Yan & Qin, National Science Review, 2026). `[R]` Messung, `[I]` Deutung. Ursache (Vulkanismus, Geothermie, Bahn- und Achsenschwankungen) und Bedeutung für mögliche Habitabilität sind offen. `[H]` Daten, Quellen und Einordnung: `DOC:KUE:KUE-SCI-NNNN`.
   Die Liste der Mars-Epochen entfällt (steht im KUE-Dokument). Folgende Abschnitte rücken in der Nummerierung nach, falls nötig.
B. **Abschnitt IV (Habitabilität):** nur die Zeilen „Bisherige Annahme: Leben nur bis Ende Hesperian (~3,0 Ga)“ und „Zhurong-Befund: Habitabilitätsfenster bis ~750 Ma“ ersetzen durch: „Zhurong-Befund: In Utopia Planitia ist Wasseraktivität bis ins mittlere–späte Amazonium (etwa 750 Mio. Jahre) belegt `[I]`; ob dort je Leben möglich war, ist offen `[H]`.“ „Implikationen“ und die „Relikt-Fenster-Hypothese (OTA 2070+)“ bleiben unverändert.
C. **Abschnitt V (Politische Dimension):** nur die Sachzeilen korrigieren – „China (2025)“ → „China (2026)“; „Mars Sample Return (MSR): Finanzierung gestrichen“ → „Mars Sample Return (MSR): im NASA-Haushalt FY2026 nicht weiter finanziert (Kongress, Januar 2026)“. „Asymmetrie“ und „Deutungshoheit“ bleiben unverändert.
D. **Frontmatter:** `summary` ersetzen durch „Zhurong-Befunde zu Wasser im Amazonium in Utopia Planitia (Radar 2026: geschichtete Ablagerung, etwa 750 Mio. Jahre) und ihre Nutzung für die Relikt-Fenster-Hypothese und Utopia Planitia im Werk; Realteil in KUE-SCI-NNNN.“ Versionssprung auf v1.1 (Frontmatter und Kopfzeile), Revisionsvermerk am Ende „2026-11-12: Realteil korrigiert und nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261112-001)“. Kennzeichnung nicht stärker als im KUE-Dokument.

## Wartet auf Thomas

E. Claude-Status: wartet auf Thomas
   - **Anmerkung des Kurators** und **Zusammenfassung** enthalten dieselben Sachfehler („Januar 2025“, „750 Millionen Jahre später als bisher angenommen“, „+2,25 Mrd. Jahre“, „China-Dominanz (Daten ohne Validierung)“). Vorschlag: „Januar 2026“; „deutlich länger als bisher für Utopia Planitia belegt“; „+2,25 Mrd. Jahre“ streichen. Kuratorische Texte ändert die Begutachtung nur mit Entscheidung von Thomas.
   - **Marker:** `epistemicStatus: ["R"]` passt nicht zu den Werkteilen (OTA-Modellierung 2070, GANDHAKA-Wahrscheinlichkeiten, Mars-Kolonisation 2091). Vorschlag: um „S“ bzw. „F“ ergänzen – welche Marker, entscheidet Thomas. Ebenso Kopfzeile „Status: Kanonisch“ gegenüber Frontmatter `status: AKTIV`.
   - `relatedDocuments: ["OTA-SCI-0023-2025-DE"]` verweist auf das Schwefel-/Neurotoxikologie-Dossier; ob beabsichtigt (hydrothermale Systeme), bitte bestätigen.

## Nicht Teil dieses Requests

Abschnitt VI (noχ¹ᐃ-Anwendungen), die Relikt-Fenster-Hypothese und die Werkdeutung in V bleiben wörtlich.

## Wirkung

`status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0022 in Gruppe A aktualisiert. Weitere OTA-Dokumente mit Zhurong-Bezug (OTA-HIS-0004-2021, OTA-SCI-0090, OTA-SCI-0030-2025, OTA-SCI-0020) bei ihrer Begutachtung auf denselben KUE-Verweis prüfen; Sammel-Request `OTA-REQ-20261106-quellenpruefung.md` meldet dort bereits den Erstautorfehler zur Zhurong-Arbeit.
