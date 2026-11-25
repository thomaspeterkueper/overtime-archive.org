# OTA-REQ-20261029-002 – OTA-SCI-0032-2024-DE (GJ 251 c): Realgrundlage aktualisieren

Status: done
Erledigt: 2026-11-25 – Ökosystem-Kreislauf (Claude), Branch `claude/OTA-REQ-20261029-gj-251-c-realgrundlage`.
Datum: 2026-10-29
Quelle: Begutachtung nach ECO-ARC-0037 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-10-29-OTA-SCI-0032-2024-DE.md`
Betrifft: nur [R]/[T]-Abschnitte (I, II, IV, V, X, Quellen). Fiktion/Setzung (VII, VIII, IX) bleibt unberührt.

## Befunde und Änderungsvorschlag

1. **Entdeckungsdatum und Autorschaft (Kuratoranmerkung, 1.2, Quellen):** Veröffentlicht im Oktober 2025, nicht Oktober 2024: Beard, C. et al. (2025), „Discovery of a Nearby Habitable Zone Super-Earth Candidate Amenable to Direct Imaging“, *The Astronomical Journal* 170, 279, DOI 10.3847/1538-3881/ae0e20 (Erstautor Corey Beard; Mahadevan ist Mitautor). Die Signatur bleibt; nur Datums- und Autorangaben im Text anpassen. Quelle: Sci.News, 23. Okt. 2025; astrobiology.com, 28. Okt. 2025.
2. **Status „Kandidat“:** Die Autoren führen GJ 251 c ausdrücklich als Kandidaten. Kernaussage 1 passt dazu; im Abschnitt I deutlicher machen.
3. **Planet b fehlt:** GJ 251 b (bekannt seit 2020, ≈ 3,85 M⊕, P = 14,2 d) ergänzen – das System hat mindestens zwei Planeten.
4. **Widerspruch Periode:** 1.3 nennt „~80–100 Tage (vorläufig)“, 2.1 nennt 53,6 d. 1.3 an 53,6 d angleichen; Amplitude 2,5 m/s gegen das Paper prüfen.
5. **Falsche Nachbarschaftsaussage (Kuratoranmerkung):** „Nur Proxima Centauri b (4,2 Lj) und HD 20794 d (19,7 Lj) sind näher“ – HD 20794 d ist mit 19,7 Lj weiter entfernt als GJ 251 (≈ 18,2 Lj). Formulierung korrigieren.
6. **TMT-Perspektive (IV, 5.1, X.5):** „TMT ab ~2032“ ist nicht mehr haltbar: Die NSF entschied sich 2025 für das Giant Magellan Telescope; im September 2026 lehnten die TMT-Partner das spanische Angebot für La Palma ab, als Standort bleibt nur Mauna Kea, Finanzierung offen. Quelle: Physics World, 23. Sept. 2026. Vorschlag: „TMT (ungewiss) bzw. andere Extremely Large Telescopes (ESO-ELT, GMT)“; das Paper selbst nennt TMT als Abbildungsoption – als Autorenaussage kennzeichnen.
7. **Metadaten:** Frontmatter `version: v1.0`, Revisionsverlauf nennt Version 1.1 (mit Bezug auf eine Veröffentlichung von 2025 unter Datum 2025-01-30). Version und Datum klären.

## Hinweis

`OTA-SCI-0030-2025-DE` verweist auf `OTA-SCI-0032-2025-DE` (richtig: `-2024-DE`).

Wirkung auf andere Repos: KG-Datensätze zu GJ 251, falls vorhanden; NOXIA-Bezüge („20-Lichtjahre-Kohorte“) nur, falls dort Realdaten übernommen wurden (nicht prüfbar, kein Zugriff in diesem Lauf).

## Umgesetzt

OTA-SCI-0032-2024-DE v1.2 (25.11.2026):

1. Veröffentlichung Oktober 2025 (Kuratoranmerkung, 1.2), Erstautor Beard, Quellenangabe Beard et al. (2025), AJ 170, 279, arXiv:2510.19956 – geprüft an arXiv und Sci.News (23.10.2025). Kopfvermerk „Terrestrische Quellen, Oktober 2024“ und Signatur bleiben als Setzung.
2. Status „Kandidat“ zu Beginn von Abschnitt I und in Kernaussage 1.
3. GJ 251 b (14,24 d, m sin i ≈ 3,85 M⊕, bekannt seit 2020) in 1.2 ergänzt.
4. Periode 1.3 auf 53,647 d; Amplitude nach dem Paper K ≈ 1,2 m/s statt 2,5 m/s (Tabellenwert aus einer Zusammenfassung des PDF, im Dokument als „am Original zu bestätigen“ markiert), KN-01 angepasst.
5. Nachbarschaftsaussage berichtigt (HD 20794 d ist weiter entfernt).
6. TMT-Perspektive in 4.2, KN-04, 5.1 und Kernaussage 5 auf Stand November 2026 (NSF für GMT 2025; TMT-Partner lehnen La Palma ab, Physics World 23.09.2026), TMT als Autorenaussage.
7. Frontmatter-Version auf v1.2 (Revisionsverlauf nannte bereits 1.1).

Hinweis zu OTA-SCI-0030: Der Verweis zeigt auf `main` bereits auf `OTA-SCI-0032-2024-DE`.

Zugleich erledigt: Befunde der Quellenprüfung 2026-11 zu OTA-SCI-0032 (OTA-REQ-20261106-quellenpruefung) – Penn-State-Meldung korrigiert, Grenzwissenschaft Aktuell und UC Irvine als nicht nachweisbar vermerkt.
