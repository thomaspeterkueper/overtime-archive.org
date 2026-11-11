# OTA-REQ-20261111-001 – OTA-SCI-0021-2025-DE (Mikrogravitation und Gehirnarchitektur): Realanker nach KUE auslagern, g-Profil-Matrix behalten

Status: open
Datum: 2026-11-11
Entschieden: 2026-11-11 (Thomas) – OTA-SCI-0021 wird ergänzt, nicht auf OTA-KARTE-0002 verwiesen: Abschnitte II–IV und Matrixzeilen IV–V umgesetzt in v1.1 (Branch `claude/ota-sci-0021-ergaenzung`). Dieser Request ist entsprechend angepasst.
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-11-OTA-SCI-0021-2025-DE.md`
Zuordnung: Teile nach KUE – die raumfahrtmedizinische Realgrundlage (1.1) wird als neues KUE-Dokument aufgebaut (`kueper.com/external-tasks/open/EXT-OTA-KUE-20261111-002.md`); Kuratoranmerkung, Matrix V und KN-5.1 bleiben in OTA. Die Inventur führte das Dokument in Gruppe A (ganz nach KUE) – wegen des klaren Werkbezugs (noχ¹ᐃ-/Mars-Narrative, Mousley-Epochen × g-Profile) ist es aber ein Brückendokument.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261111-002 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen.

## Anlass

Der Realteil besteht nur aus einem allgemeinen Absatz (1.1) ohne eine einzige Quelle; die Kopfzeile verspricht „ISS-Studien [R]“. Die Abschnitte II–IV fehlen, und die Matrix V führt nur die Epochen I–III. Das ist kein Umwandlungsfehler: Die Ausgangsfassung (`OTA-SCI-0021-2025-DE.docx`, Drive, 09.01.2026) ist genauso unvollständig. Die Primärliteratur (Roberts et al. 2017 bis Wang/Seidler et al. 2026) wird im KUE-Dokument aufgebaut; OTA übernimmt danach nur die Grundinformation.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **Abschnitt „I. ÜBERBLICK / 1.1 Kontext“ und Abschnitt „II. RAUMFAHRTMEDIZINISCHE BEFUNDE“ (2.1–2.5) ersetzen** durch diese Grundinformation (Abschnittstitel „I. Realgrundlage (Kurzfassung)“); die Quellenliste VI auf den KUE-Verweis, Wang/Seidler et al. 2026 und Mousley et al. 2025 kürzen:
   > MRT-Studien an Raumfahrerinnen und Raumfahrern zeigen nach Langzeitaufenthalten auf der ISS, dass das Gehirn im Schädel nach oben (und hinten) rückt, die Hirnventrikel sich erweitern und sich sensomotorische Netzwerke verändern; viele Effekte bilden sich nach der Rückkehr über Monate zurück, einige nur teilweise. `[R]` Für Teilgravitation wie auf dem Mars (0,38 g) gibt es keine Messdaten. `[R]` Studien, Zahlen und Quellen: `DOC:KUE:KUE-SCI-NNNN-2026-DE`.
B. **Erhalten (unverändert):** Anmerkung des Kurators, III (Anpassung oder Verschiebung?), IV (Vom Orbit zum Mars), „V. OTA-KARTE: GEHIRN-EPOCHEN × g-PROFILE“ samt Matrix (Epochen I–V), KN-5.1, Revisionsvermerk.
C. **Kopf und Frontmatter:** Kopfzeile „Status: Kanonisch“ an den Frontmatter-Status (AKTIV) angleichen; Kopfzeile „Quellenmarker“ beibehalten. `summary` auf die Brückenfunktion umstellen („Gehirn-Epochen × g-Profile für noχ¹ᐃ- und Mars-Narrative [S]; Realgrundlage Raumflug und Gehirn in KUE-SCI-NNNN“). (`relatedDocuments` zu OTA-KARTE-0002 ist mit v1.1 bereits ergänzt.) Versionssprung auf v1.2, Revisionsvermerk (Abschnitt VII) „2026-11-11: Realgrundlage nach DOC:KUE:KUE-SCI-NNNN-2026-DE ausgelagert (OTA-REQ-20261111-001)“. Kennzeichnung nicht stärker als im KUE-Dokument.

## Nicht Teil dieses Requests

- Matrix V und KN-5.1 sind Setzung bzw. Spekulation [S] und bleiben wörtlich.
- Fehlende Abschnitte II–IV und Matrixzeilen IV–V: entschieden und erledigt (v1.1, siehe oben).
- Die KG-Domain `KD:PHYS-THERM:N1` passt inhaltlich nicht (Neurowissenschaft/Raumfahrtmedizin) – im KG prüfen, nicht hier.

## Wirkung

- `OTA-SCI-0019-2025-DE` (OTA-REQ-20261109-002, Punkt C) verweist für den Realanker „Langzeitaufenthalte im All zeigen messbare Effekte“ auf OTA-SCI-0021; nach Umsetzung beider Requests besser direkt auf `DOC:KUE:KUE-SCI-NNNN-2026-DE`.
- `OTA-KARTE-0002-Epochen-g-Profile-DE` nennt als Basis „Raumfahrtmedizin (2014–2025)“ ohne Quellen; bei ihrer eigenen Begutachtung auf denselben KUE-Verweis prüfen.
