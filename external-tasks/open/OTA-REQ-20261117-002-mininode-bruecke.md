# OTA-REQ-20261117-002 – OTA-TEC-0126-2026-DE (Verteilte Robotik und MiniNode): Realanker nach KUE auslagern

Status: open
Datum: 2026-11-17
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-17-OTA-TEC-0126-2026-DE.md`
Zuordnung: Teile nach KUE (Inventur Gruppe A; nach Prüfung am Dokument abweichend). Die werkneutralen Realanker (Kilobot, DARPA OFFSET, NASA CADRE, MRTA, Lokalisierung, HEAP/Gravis, kooperative Manipulation, EU-Agrarprojekte) gehen nach KUE; die MiniNode-Bewertung bleibt. Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261117-002.md`.
Voraussetzung: das KUE-Dokument (oder der KUE-Abschnitt) aus EXT-OTA-KUE-20261117-002 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen (Punkte A–D).

## Anlass

Abgleich am 2026-11-17: Der Start der CADRE-Rover auf IM-3 ist auf die erste Jahreshälfte 2027 verschoben; die Gravis-Angabe „Dutzende kommerzielle Baustellen laut ETH“ ist nicht belegt (belegt: Einsätze auf vier Kontinenten, Series A im August 2026, Firmenangaben); die MRTA-Übersicht (Quelle 8) ist nicht auffindbar. Korrekturen übernimmt das KUE-Dokument.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **§3–§10 ersetzen** durch einen Abschnitt „3. Realgrundlage (Kurzfassung)“:
   > Die Bausteine, auf die MiniNode aufsetzt, sind getrennt voneinander real gezeigt: Selbstorganisation sehr vieler einfacher Roboter im Labor, Feldversuche mit großen gemischten Luft-/Bodenschwärmen und Human-Swarm-Interfaces, autonome schwere Erdbewegung bis zum kommerziellen Einsatz, kooperative Manipulation als Proof of Concept und heterogene Agrar- und Logistikteams in EU-Projekten. `[R]` Kooperative planetare Kleinrover mit Mesh-Funk (NASA CADRE) sind gebaut, aber noch nicht geflogen. `[P]` Ein heterogener Gesamtschwarm dieser Art ist nicht demonstriert. `[H]` Befunde, Einstufungen und Quellen: `DOC:KUE:KUE-SCI-NNNN`.

   Danach einen Abschnitt „4. MiniNode-Anschlüsse“ mit den bisherigen Textstellen **wörtlich und unverändert**: der Satz „**MiniNode-Anschluss:** Ein Mensch muss nicht jeden Roboter einzeln teleoperieren …“ (bisher §4.1), der Satz zu CADRE als Realanker für Scout, Comms und verteilte Kartierung (bisher §5.1, zweiter Absatz), der Block „MiniNode-Konsequenz“ mit dem Codeblock und dem Folgesatz (bisher §6), der Satz zu `localizationState` (bisher §7, letzter Satz), „**MiniNode-Anschluss:** Mapping → Planung → …“ samt „**Grenze:** Eine einzelne autonome Baumaschine ist kein Roboterschwarm …“ (bisher §8.1), der Grundsatz zur Koalition mehrerer Roboter (bisher §9, Zitat) sowie der Absatz zum Garten-Remodelling-Precursor mit der Liste „Nicht als heutiger Standard …“ und dem Schlusssatz (bisher §10).
B. **Unverändert bleiben:** Kopf mit Abgrenzung, §1, §2, §11–§17 und §19. Nummerierung fortlaufend anpassen. In §15 (Evidenzmatrix) nur die Zeile „Mesh-Kommunikation kleiner Rover“ um „Start frühestens 2027“ ergänzen und bei „schwere autonome Erdbewegung“ die Bewertung nicht stärker fassen als das KUE-Dokument.
C. **Quellen (§18):** durch den Satz „Realanker und Quellen im KUE-Dokument `DOC:KUE:KUE-SCI-NNNN`.“ ersetzen.
D. **Frontmatter und Kopf:** `summary` ersetzen durch „Brückendokument: Bewertung der MiniNode-Architektur (ENG-SYS-MININODE-0001) gegen den realen Stand verteilter Robotik – Anschlüsse, Evidenzmatrix und Reifeweg; Realanker in KUE-SCI-NNNN.“ `relatedDocuments` um `DOC:KUE:KUE-SCI-NNNN` ergänzen; `tags`, `kg`, `knowledge` und `review` bleiben; `epistemicStatus` auf ["R", "H", "T"] (den nicht standardisierten Marker „OFFEN“ entfernen). Versionssprung auf v1.1, „Stand“ auf das Umsetzungsdatum, Revisionsvermerk am Ende: „<Datum>: Realanker nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261117-002); Langfassung über Git v1.0.“ Nicht archivieren. Kennzeichnung nicht stärker als im KUE-Dokument.

## Wirkung

- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-TEC-0126 aktualisiert.
- `OTA-SCI-0110-2026-DE` (§12, Anschluss an OTA-TEC-0126) und `OTA-SCI-0112-2026-DE` bleiben verknüpft.
- KUEPER Engineering: über EXT-OTA-KUE-20261117-002 gemeldet.
