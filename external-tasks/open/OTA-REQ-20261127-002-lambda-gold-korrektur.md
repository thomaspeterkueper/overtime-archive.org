# OTA-REQ-20261127-002 – OTA-SCI-0030-2090-DE (Λ_Struktur und Gold-Geometrie): Literaturangabe und Abhängigkeiten korrigieren

Status: open
Datum: 2026-11-27
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-27-OTA-SCI-0030-2090-DE.md`
Zuordnung: bleibt OTA – das Dokument ist eine Kapitelübersicht ohne ausformulierten Realteil; die realen Anker (Korngrenzen, inverser Hall-Petch-Effekt, Kanazawa-Blattgold, etruskische Granulation, Pedalino et al.) stehen nur als Überschriften im Dienst des χ-Feld-/Λ-Modells (eigenes Modell von Thomas). Keine Abtrennung nach KUE.
Voraussetzung: Punkte A und B sofort umsetzbar (bibliographisch bzw. Querverweise). Punkt C: **Claude-Status: wartet auf Thomas**.
Erfasst den Eintrag zu OTA-SCI-0030-2090 aus `OTA-REQ-20261106-quellenpruefung.md` (1 fehlerhaft).

Bereits direkt korrigiert (Metadaten nach ECO-ARC-0037 §4, 2026-11-27): `summary` und `tags` beschrieben irrtümlich HD 20794 d (aus `OTA-SCI-0030-2025-DE` übernommen) und wurden an den Inhalt angepasst.

## Anlass

Abgleich am 2026-11-27: Die Literaturangabe „Pedalino et al., Nature 634, 340-344 (2026)“ ist fehlerhaft – Band 634 erschien 2024. Die Arbeit lautet: Pedalino, S., Ramírez-Galindo, B. E., Ferstl, R., Hornberger, K., Arndt, M. & Gerlich, S., „Probing quantum mechanics with nanoparticle matter-wave interferometry“, *Nature* (online 2025/2026, laut Quellenprüfung Bd. 649, Heft 8098), DOI 10.1038/s41586-025-09917-9. Gemessen wurde Materiewelleninterferenz von **Natriumclustern** (5 000–10 000 Atome, etwa 8 nm, über 170 000 u; Makroskopizität μ ≈ 15,5) – kein Gold. Die Abhängigkeit „OTA-TEC-0029-0650BCE-DE“ existiert im Bestand nicht; vorhanden sind `OTA-TEC-0029-2026-DE` und `OTA-TEC-0029-2048-DE`.

## Gewünschte Änderung

A. **Literatur (sofort umsetzbar):** Unter „Abhängigkeiten“ die Zeile „Pedalino et al., Nature 634, 340-344 (2026)“ ersetzen durch „Pedalino et al. (2026), Probing quantum mechanics with nanoparticle matter-wave interferometry, Nature, DOI 10.1038/s41586-025-09917-9 (Natriumcluster)“. In §2.3.3 „Metallische Quantenkohärenz (Pedalino et al. 2026) [R]“ → „Materiewelleninterferenz metallischer Nanocluster (Natrium; Pedalino et al. 2026) [R]“.

B. **Abhängigkeiten (sofort umsetzbar):** „OTA-TEC-0029-0650BCE-DE (Etruskische Goldgranulation, parallel)“ – das Dokument existiert nicht. Ersetzen durch „OTA-TEC-0029 (Etruskische Goldgranulation, parallel; Signatur zu klären)“; „Nächste Schritte“ bleibt unverändert. Frontmatter: `relatedDocuments`-Eintrag auf `OTA-SCI-0030-2025-DE` (HD 20794 d, nur gleiche Seriennummer) streichen; Kontext-Zeile entfällt damit. Versionsfeld im Frontmatter `version: "v1.0"` → `"v1.3.1"` (der Text führt v1.3), Revisionsvermerk unter „Revisionshistorie“: „**v1.3.1 (2026-xx-xx, Kuration):** Literaturangabe Pedalino et al. korrigiert, nicht vorhandene Abhängigkeit markiert, irrtümlichen Querverweis auf HD 20794 d entfernt (OTA-REQ-20261127-002 A/B).“

C. **Claude-Status: wartet auf Thomas** – Weltlogik: Die Λ_Struktur-Kurve stützt sich auf den inversen Hall-Petch-Effekt (Härtemaximum bei Korngrößen um etwa 10–30 nm, real für nanokristalline Metalle belegt) und auf Pedalino et al. als „metallische Quantenkohärenz“. Pedalino zeigt Delokalisierung ganzer Natriumcluster im Vakuum, keine Kohärenz im Festkörper und keine Strukturabhängigkeit. Ob das Dokument diesen Anker so behält, entscheidet Thomas.

## Wirkung

- keine anderen Repositories. `OTA-TEC-0029-2048-DE` und `OTA-NAR-0003-2026-DE` (in „Nächste Schritte“ genannt) bei ihrer Begutachtung abgleichen.
