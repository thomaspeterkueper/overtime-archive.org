# OTA-REQ-20261111-002 – OTA-SCI-0107-2026-DE (STAR: Impulskorrelationen in Au+Au): Realteil auf Verweis nach KUE-SCI-0195 kürzen, AVI-P/Omnizedenz behalten

Status: open
Datum: 2026-11-11
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-11-OTA-SCI-0107-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden – `KUE-SCI-0195-2026-DE` (v0.4, Abschnitt „Goldionen am RHIC“) enthält Befund, Einordnung und Literatur; fehlende Angaben (Signifikanzen, arXiv-Kennung, Fixed-Target) per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261111-001.md`.
Voraussetzung: `KUE-SCI-0195-2026-DE` mit den Ergänzungen aus EXT-OTA-KUE-20261111-001 (Version ≥ 0.5) ist in `kueper.com/main` gemergt. Erst danach umsetzen.

## Anlass

Die Beobachtungsnotiz ist inhaltlich zutreffend und vorsichtig formuliert; nichts ist widerlegt. Der Realteil (Primärquelle, Messung, Interpretation) doppelt aber KUE-SCI-0195. Präzisierung nach arXiv:2604.06434 (eingereicht 07.04.2026): In zentralen Stößen bricht der skalierte pT-Korrelator die erwartete 1/√N_part-Skalierung, die Nichtmonotonie wird mit etwa 5σ angegeben; Transportmodelle erreichen nur etwa 2σ, mittelzentrale Daten etwa 1,4σ (laut Kollaboration dort nicht ausreichend). Die Zeitschriftenangabe (PRL 137, 132301; DOI 10.1103/2xsn-rgx3) ließ sich am 2026-11-11 nicht unabhängig bestätigen (arXiv ohne Journal-Ref); im KUE-Request zur Prüfung vermerkt.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **Abschnitte „Primärquelle“, „Messung [R]“ und „Interpretation [I/OFFEN]“ ersetzen** durch diese Grundinformation (Abschnittstitel „Realgrundlage (Kurzfassung)“):
   > STAR hat in Fixed-Target-Kollisionen von Goldkernen bei √s_NN = 3,0–7,7 GeV (Beam Energy Scan II) gemessen, dass die Korrelationen des transversalen Impulses geladener Teilchen in zentralen Stößen nicht glatt mit der Kollisionsenergie verlaufen; die Kollaboration gibt dafür etwa 5σ an. `[R]` Ob dahinter ein kritischer Punkt im QCD-Phasendiagramm oder nichtkritische Dynamik steht, ist offen; ein kritischer Punkt ist damit nicht nachgewiesen. `[I]`/`[OFFEN]` Messung, Zahlen und Quellen: `DOC:KUE:KUE-SCI-0195-2026-DE`.
B. **Erhalten (unverändert):** Kopfzeile „Stand/Status“, „Gegenüberstellung mit OTA-SCI-0105“, „AVI-P und Omnizedenz“, „Wiedervorlage“.
C. **Frontmatter:** `summary` auf die Brückenfunktion umstellen („AVI-P- und Omnizedenz-Einordnung des STAR-Befunds zu Impulskorrelationen; Realteil in KUE-SCI-0195“); `relatedDocuments` unverändert. Versionssprung auf v1.1, Revisionsvermerk (neuer Abschnitt am Ende) „2026-11-11: Realteil nach DOC:KUE:KUE-SCI-0195-2026-DE ausgelagert (OTA-REQ-20261111-002)“. Kennzeichnung nicht stärker als im KUE-Dokument.

## Nicht Teil dieses Requests

Die AVI-P-Bewertung (T1–T4 nicht erfüllt) und der Omnizedenz-Satz sind Thomas' Rahmen und bleiben wörtlich; sie bleiben mit den präzisierten Zahlen gültig.

## Wirkung

`status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0107 in Gruppe K aktualisiert.
