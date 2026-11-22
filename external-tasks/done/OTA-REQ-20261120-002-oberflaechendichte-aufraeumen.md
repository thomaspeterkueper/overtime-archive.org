# OTA-REQ-20261120-002 – OTA-SCI-0095-2026-DE (Galaktische zentrale Oberflächendichte): Quellen ergänzen, Realteil nach KUE kürzen

Status: done
Teilweise erledigt: 2026-11-21 – Punkt A umgesetzt in OTA-SCI-0095-2026-DE v1.1 (Ökosystem-Kreislauf, Claude, Branch `claude/OTA-REQ-20261120-002`); scinexx-Meldung weiter nicht auffindbar, durch CHIP.pl ersetzt. B und C warten auf das KUE-Dokument aus EXT-OTA-KUE-20261120-002.
Datum: 2026-11-20
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-20-OTA-SCI-0095-2026-DE.md`
Zuordnung: Teile nach KUE – Befund und Einordnung (§1–§4) werden per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261120-002.md` zu einem KUE-Dokument. Methodische Bedeutung (§5), AVI-Bezug, State-Completeness-Einordnung und AVI-Regel (§6–§8, eigenes Modell) sowie das OTA-Fazit (§10) bleiben unverändert.
Voraussetzung: Punkt A sofort umsetzbar. Punkte B und C erst, wenn das neue KUE-Dokument aus EXT-OTA-KUE-20261120-002 in `kueper.com/main` gemergt ist (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`, vergeben: `KUE-SCI-0215-2026-DE`).
Erfasst die Punkte zu OTA-SCI-0095 aus `OTA-REQ-20261106-quellenpruefung.md` (Yoon 2026: Band fehlt; scinexx: URL fehlt).

## Anlass

Das Dossier stützt sich auf eine einzige Theoriearbeit. Die Vergleichswerte (grob 90–220 M☉/pc²) und die Aussage, MOND sage ebenfalls eine solche Skala voraus, stehen ohne Beleg. Die Primärquelle ist nur über Sekundärberichte bestätigt (CHIP.pl, 24.09.2026, mit Link auf ScienceDirect, PII S2212686426002499; dort ≈ 170 M☉/pc² vorhergesagt, beobachtet ≈ 90–220 M☉/pc² über Galaxien mit bis zu 400.000-fach verschiedener Leuchtkraft). Band und Artikelnummer konnten nicht geprüft werden; die scinexx-Meldung war nicht auffindbar.

## Gewünschte Änderung

A. **§9 Referenz** – ergänzen bzw. ändern:
   - Yoon-Eintrag ergänzen um „ScienceDirect: https://www.sciencedirect.com/science/article/abs/pii/S2212686426002499 (Band/Artikelnummer noch zu prüfen)“.
   - Neu: „Donato, F. et al. (2009): A constant dark matter halo surface density in galaxies. *MNRAS* 397, 1169–1176.“ (Beleg für die Vergleichsskala in §1).
   - Neu: „Milgrom, M. (2009): The central surface density of ‚dark halos‘ predicted by MOND. *MNRAS* 398, 1023–1026.“ (Beleg für §2, MOND-Vorhersage).
   - „Begleitende Forschungsnachricht: scinexx …“ → „Begleitende Forschungsnachricht: CHIP.pl, 24.09.2026, ‚Nowa teoria grawitacji odtwarza zagadkową właściwość ciemnej materii‘, https://www.chip.pl/2026/09/teoria-grawitacji-wlasciwosc-ciemnej-materii“ – die scinexx-Angabe nur behalten, wenn eine URL gefunden wird.
   Version v1.1, Revisionsvermerk „<Datum>: Quellen ergänzt (OTA-REQ-20261120-002 A).“
B. **Mit KUE-Dokument:** §1–§4 ersetzen durch einen Abschnitt „1. Befund (Grundinformation)“:
   > Youngsub Yoon leitet 2026 in *Physics of the Dark Universe* in einer von Verlindes emergenter Gravitation inspirierten Beschreibung eine charakteristische „Phantom-Halo“-Oberflächendichte von rund 170 M☉/pc² ab – in der Größenordnung der aus Halo-Fits abgeleiteten zentralen Oberflächendichte von grob 90–220 M☉/pc² (Donato et al. 2009). Es ist eine Theoriearbeit, keine neue Messung; auch MOND sagt eine solche Skala voraus, und wie universell sie ist, bleibt offen. `[R]` Publikation, `[H]` Deutung. Daten, Quellen und Einordnung: `DOC:KUE:KUE-SCI-NNNN`.
   Die Abschnitte ab „Methodische Bedeutung“ bleiben wörtlich; Nummerierung anpassen.
C. **Mit B:** §9 Referenz auf „siehe `DOC:KUE:KUE-SCI-NNNN`“ plus Yoon-Eintrag kürzen; Versionssprung v1.2, Revisionsvermerk „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261120-002 B/C).“ Nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261120-002 (neues Dokument).
- `OTA-SCI-0037-2026-DE`, `OTA-SCI-0093-2026-DE`, `OTA-SCI-0094-2026-DE` (verwandte Dossiers) werden bei ihrer eigenen Begutachtung auf denselben KUE-Verweis geprüft.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0095 aktualisiert.

## Erledigt

2026-11-22 – Ökosystem-Kreislauf (Claude), Branch `claude/OTA-REQ-20261120-002-bc` (Punkt A am 2026-11-21 auf `claude/OTA-REQ-20261120-002`).

## Umgesetzt

- A: Quellen in §9 ergänzt (v1.1, 2026-11-21); scinexx-Meldung nicht auffindbar, durch CHIP.pl ersetzt.
- B: §1–§4 durch „1. Befund (Grundinformation)“ mit Verweis auf `DOC:KUE:KUE-SCI-0215-2026-DE` ersetzt (KUE-Dokument aus EXT-OTA-KUE-20261120-002, gemergt in `kueper.com/main` am 2026-11-22); Methodische Bedeutung, AVI-Bezug, State-Completeness, AVI-Regel und Fazit wörtlich, neu nummeriert (§2–§5, §7).
- C: Referenz auf Verweis plus gekürzten Yoon-Eintrag reduziert (§6); v1.2, Revisionsvermerk ergänzt.
- Offen außerhalb OTA: `kueper-ecosystem/status/ota-kue-zuordnung.md`, Zeile OTA-SCI-0095 (Quelle der Wahrheit dort; nicht in diesem Repo geändert).

