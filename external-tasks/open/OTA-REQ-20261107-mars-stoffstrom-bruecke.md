# OTA-REQ-20261107-002 – OTA-SCI-0112-2026-DE (Mars-Siedlungen als Stoffstromsystem): nach KUE-Umzug zum Brückendokument kürzen

Status: open
Datum: 2026-11-07
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-07-OTA-SCI-0112-2026-DE.md`
Zuordnung: ganz nach KUE (Gruppe A) – Realdossier; Werkbezug nur über die NOXIA-Regeln §21, §24, §27, den MiniNode-Pfad §18 und die Archivregel §30
Voraussetzung: das neue KUE-Dokument aus `kueper.com/external-tasks/open/EXT-OTA-KUE-20261107-001.md` ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen.

## Anlass

OTA-SCI-0112 ist ein werkneutrales Evidenzdossier (ISS-ECLSS, Pflanzenproduktion, MELiSSA, Biosphere 2, MOXIE, Energie, Ersatzteile, Robotik). Nach ECO-ARC-0038 gehört dieser Teil nach kueper.com. Die Quellenprüfung 2026-11 meldet fünf zu ungenaue Angaben (Wheeler, LMLSTP, „Solar vs. Fission“, ISS-Supportability, Beyond-LEO-Supportability); die präzisierten Angaben gehen mit dem Umzug nach KUE.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **§§ 1–17, 19, 20, 22, 23, 25, 26, 28 und 29 ersetzen** durch diese Grundinformation (Abschnitt „Grundinformation“ direkt nach der Kernregel):
   > Auf der ISS sind rund 98 % Wasserrückgewinnung (NASA, 2023) und physikalisch-chemische Sauerstoffregeneration im Betrieb demonstriert; MOXIE hat auf dem Mars Sauerstoff aus atmosphärischem CO₂ gewonnen. Vollständige Ernährung durch Pflanzenanbau, großskalige Wassergewinnung auf dem Mars, Energieversorgung im Siedlungsmaßstab und lokale Ersatzteilversorgung sind nicht demonstriert. „Geschlossen“ gilt deshalb immer nur je Stoffstrom, mit Verlusten, Energiebedarf und Wartung. Belege und Einzelheiten: `DOC:KUE:KUE-SCI-NNNN-2026-DE`.
B. **Vollständig erhalten:** Kernregel (Zitatblock), §21 Game-Physics-Sperren, §24 Kalibrierwerte für NOXIA, §27 Closure-Check, §30 Archivregel, §18 MiniNodes (OTA-Pfad aus OTA-TEC-0126), `relatedDocuments` (OTA-SCI-0109, OTA-TEC-0126). In §24 bleiben die Zahlen als Kalibrierwerte stehen; Herkunft künftig über den KUE-Verweis.
C. **Formelzeichen:** In der jetzigen Fassung sind Backslashes verloren gegangen (Steuerzeichen statt `\frac`, `\rightarrow`, `\text`; `mathrm` ohne Backslash; `[ … ]` statt Display-Math). Nur betroffen, soweit Formeln in den erhaltenen Abschnitten verbleiben; die Formeln in §§1, 3, 14, 20 gehen mit dem Umzug nach KUE.
D. `summary` auf Brückendokument kürzen, z. B.: „Brückendokument: NOXIA-Regeln für Stoff- und Energiebilanz von Mars-Siedlungen (Game-Physics-Sperren, Kalibrierwerte, Closure-Check, Archivregel); reale Evidenzbasis in KUE-SCI-NNNN.“ Versionssprung auf v1.1, Revisionsvermerk „Realteil nach DOC:KUE:KUE-SCI-NNNN-2026-DE ausgelagert (OTA-REQ-20261107-002)“.

Nicht stärker kennzeichnen als KUE. Nicht archivieren – das Dokument bleibt als schlankes Brückendokument bestehen.

## Wirkung

`noxiagame`: keine Änderung nötig, solange NOXIA auf OTA-SCI-0112 verweist; die Kalibrierwerte bleiben in OTA.
