# OTA-REQ-20261106-002 – OTA-SCI-0047-2026-DE (Biophotonen im Kopfbereich): Quellen und Halo-Geschichte korrigieren, Realteil auf Verweis nach KUE-SCI-0175 kürzen

Status: done
Erledigt: 2026-11-10 – umgesetzt in OTA-SCI-0047 v1.3 durch die Begutachtung (ECO-ARC-0038 §3b), Punkte A–C. A4: Elsner (2006) per Websuche nicht verifizierbar, im Literaturverzeichnis so vermerkt. Tabelle 2.3 entfällt mit der Kürzung nach C; die Markeraufteilung aus B ist in Tabelle 6.1 umgesetzt.
Entschieden: 2026-11-06 (Thomas) – Punkt B: pEEG bleibt im Kanon als künftige Technik [S→F], nicht als Fortsetzung eines heutigen Befunds.
Datum: 2026-11-06
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-06-OTA-SCI-0047-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0175-2026-DE`. Teil III (Halo-Ikonographie), Teil IV (Brücke) und Teil V (Λ-Emissionsprofile) bleiben in OTA.
Voraussetzung für Punkt C: KUE-SCI-0175 v0.2 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-06`).

Punkt B berührte die Weltlogik (pEEG als Λ-Monitoring-Kanal in OTA-SCI-0046, OTA-LSC-0003); Thomas hat am 2026-11-06 entschieden (siehe oben). Alle Punkte sind damit umsetzbar.

## A. Quellen und Fakten (Marker R/R-hist.)

1. **pEEG-Quelle falsch:** „Sun Y. et al. (2025) … iScience“ gibt es so nicht. Richtig: Casey H., DiBerardino I., Bonzanni M., Rouleau N., Murugan N. J. (2025): *Exploring ultraweak photon emissions as optical markers of brain activity.* iScience 28(3), 112019, DOI 10.1016/j.isci.2025.112019 (20 Probanden, Photomultiplier, schwache Korrelation mit EEG-Rhythmen).
2. **Kobayashi 2009:** Titel lautet „… Displaying Diurnal Rhythm“; Autoren Kobayashi, Kikuchi, Okamura; DOI 10.1371/journal.pone.0006256 ergänzen.
3. **§3.1 Halo-Ursprung:** Die Aussage, die ältesten eindeutig datierbaren Scheiben-Halos stammten aus dem 4. Jh. v. Chr. in zoroastrischen Mithra-Darstellungen, ist nicht belegt. Belegt sind: ägyptische Sonnenscheiben (Ra) deutlich früher; griechisch-hellenistische Strahlenkränze (Helios, Koloss von Rhodos, hellenistische Herrscher); Nimben auf Münzen der Kuschan-Herrscher und in der buddhistischen Kunst seit dem 1. Jh. n. Chr. (Bimaran-Reliquiar um 60 n. Chr., Kanischka-Reliquiar 127 n. Chr.); Übernahme ins Christentum im 4. Jh. n. Chr. Khvarenah ist ein zoroastrisches Konzept göttlichen Glanzes; eine Verbindung zum Halo gilt als möglich, nicht als Ursprung. Vorschlag: §3.1 und die erste Tabellenzeile in 3.3 entsprechend umformulieren (Marker [R-hist.] für die belegten Stationen, [T] für die Khvarenah-Verbindung).
4. **Elsner A. (2006): Nimbus, Grove Art Online** – Autor und Jahr bibliographisch prüfen.

## B. Kopf-UPE und pEEG – neue Gegenposition (entschieden 2026-11-06)

Eine Gegenanalyse (Salari, Seshan, Rishabh, Oblak, Simon 2026, arXiv:2603.26630, Preprint, nicht begutachtet) argumentiert, dass unter wirklich dunklen Bedingungen deutlich weniger UPE vom Kopf ankommt als berichtet, dass Hintergrundlicht die großen Signale erklären kann und dass Kopfhaut und Schädel Licht unter etwa 600 nm stark dämpfen – Kopf-UPE stamme mit Photomultipliern gemessen vermutlich überwiegend aus der Kopfhaut. Vorschlag:
- Teil II (2.1–2.3) und Tabelle 6.1 „pEEG bietet zusätzliche Messparameter [R→T]“ um den Satz ergänzen: „Ob am Kopf gemessene UPE Hirnaktivität abbildet, ist umstritten; eine Gegenanalyse (2026, Preprint) führt die Signale überwiegend auf Kopfhaut und Hintergrundlicht zurück. `[H]`“
- Marker der pEEG-Zeilen von [R→T] auf [R] (Messung) / [H] (Hirnbezug) aufteilen.
- **Entscheidung Thomas (2026-11-06):** pEEG bleibt als Λ-Tracking-Kanal im Kanon (OTA-SCI-0046, OTA-LSC-0003 ab 2083), getragen als künftige Technik [S→F], nicht als Fortschreibung eines heutigen Realbefunds. Umsetzung: In Teil II 2.2 (Λ-Brücke) einen Satz ergänzen: „Im Kanon ist pEEG eine künftige Messtechnik, deren Hirnbezug im Universum gesetzt ist `[S→F]`; heute ist dieser Bezug offen `[H]`.“ Teil V (Λ-Emissionsprofile) wird nicht geändert. In OTA-SCI-0046 und OTA-LSC-0003 dieselbe Einordnung bei deren Begutachtung prüfen.

## C. Kürzung nach ECO-ARC-0038 §3a (nach Merge von KUE-SCI-0175 v0.2)

- Teil I (1.1–1.3) ersetzen durch diese Grundinformation:
  > Menschen emittieren wie alle lebenden Systeme ultraschwaches Licht aus oxidativen Stoffwechselreaktionen – weit unter der Sichtbarkeit und nur mit sehr empfindlichen Detektoren messbar. `[R]` In einer kleinen Kamerastudie (Kobayashi et al. 2009, fünf Probanden) war das Gesicht zu bestimmten Tageszeiten besonders emissionsstark; eine allgemeine Kopfdominanz folgt daraus nicht. `[R]`/`[T]` Spektren, Mechanismen, Intensitäten und die Studienlage 2025–2026: `DOC:KUE:KUE-SCI-0175-2026-DE`.
- Teil II auf die für das Λ-Tracking nötige Brücke kürzen (2.1 Passivität, 2.2 letzter Absatz zur Λ-Brücke [S/F]), die realen Aussagen durch Verweis auf KUE-SCI-0175 §IVa ersetzen.
- **Vollständig erhalten:** Zusammenfassung des Kurators, alle kuratorischen Notizen, Teil III (nach Korrektur A3), Teil IV, Teil V, Querverweise 6.2.
- Versionssprung auf v1.3, Revisionsvermerk „2026-11-06: Quellen korrigiert (Casey 2025, Kobayashi 2009), Halo-Ursprung präzisiert; Realteil nach DOC:KUE:KUE-SCI-0175-2026-DE ausgelagert“. Kennzeichnung nicht stärker als KUE.

## Wirkung

- OTA-SCI-0046-2026-DE (EEG/pEEG Dual-System) zitiert vermutlich dieselbe pEEG-Quelle – bei dessen Begutachtung Quelle und Gegenposition prüfen.
- OTA-SCI-0045-2026-DE und OTA-LSC-0003-2026-DE: nur bei Entscheidung zu B betroffen.
- Keine anderen Repositories betroffen.
