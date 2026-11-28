# OTA-REQ-20261128-002 – OTA-TEC-0087-2026-DE (Gateway-Station EML-2): realen Programmstand nachtragen, Quellen vervollständigen

Status: open
Datum: 2026-11-28
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-28-OTA-TEC-0087-2026-DE.md`
Zuordnung: bleibt OTA – NOXIA-Objektdossier; die Realanker (NRHO, Kryotechnik) dienen der Setzung und sind bereits knapp. KUE-Gegenstück für die Grundlagen vorhanden: `KUE-SCI-0173-2026-DE` (Erde–Mond-Transfers, NRHO, Gateway-Programmstand, Kryotechnik). Kein Umzug, nur Verweis ergänzen; fehlender Messwert per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261128-001.md` nach KUE.
Voraussetzung: Punkte A und B sofort umsetzbar (nur [R]-Realanker und Quellenliste). Punkt C erst, wenn KUE-SCI-0173 in der Fassung aus EXT-OTA-KUE-20261128-001 in `kueper.com/main` gemergt ist. Setzungen [F] (8 Dock-Slots, 500 t Depot, LH₂/LOX, Bezeichnung „EML-2“), alle [OFFEN]-Punkte und der Dossier-Status bleiben unverändert.
Erfasst den Eintrag zu OTA-TEC-0087-2026-DE aus `OTA-REQ-20261106-quellenpruefung.md` (Folgelauf: 1 „nicht auffindbar“, 2 „zu ungenau“).

## Anlass

Abgleich am 2026-11-28 (Belege im Prüfbericht):

- NASA hat Gateway am 24.03.2026 „in seiner bisherigen Form“ pausiert und Mittel und Hardware auf eine Infrastruktur auf der Mondoberfläche umgelenkt (Ankündigung Administrator Isaacman; u. a. The Register, Space.com, NASASpaceflight, 24./25.03.2026). Das Dossier beschreibt die „reale NASA-Gateway-Baseline“ im Präsens. Die Orbitalmechanik der 9:2-NRHO bleibt davon unberührt; KUE-SCI-0173 v0.2 führt den Programmstand bereits.
- „NASA-TM-104476“ ist korrekt (die Quellenprüfung meldete „nicht auffindbar“): Stochl & Knoll 1991, NTRS 19910015845; die Werte 2,3 / 1,3 / 0,2 %/Tag stehen dort für warme Randtemperaturen von 630, 530 und 152 °R.
- Starship Flight 3 am 14.03.2024 ist richtig datiert; Quelle fehlt.

## Gewünschte Änderung

A. **Programmstand (sofort umsetzbar):**
   1. §2, „[R] Realanker“: nach dem ersten Satz einfügen: „Das Gateway-Programm selbst ist seit dem 24. März 2026 in seiner bisherigen Form pausiert; NASA lenkt Mittel und Hardware auf eine Infrastruktur auf der Mondoberfläche um. Die Bahnangaben beschreiben die bis dahin geplante Referenzbahn. `[R]` Programmstand: `DOC:KUE:KUE-SCI-0173-2026-DE`.“ „nutzt“ im ersten Satz → „sah … vor“ („Die reale NASA-Gateway-Baseline sah eine südliche Earth-Moon-L2-NRHO in 9:2-Resonanz … vor.“).
   2. §3, dritter Punkt: „Die reale Gateway-Referenzbahn ist“ → „Die für Gateway geplante Referenzbahn ist“.
   3. §6, „[R] Kommunikationsanker“: „ist … ausgelegt“ → „war … ausgelegt“.

B. **Quellen §23 (sofort umsetzbar):**
   1. „NASA-TM-104476 — …“ ersetzen durch: „Stochl, R. J. & Knoll, R. H. (1991): *Thermal Performance of a Liquid Hydrogen Tank Multilayer Insulation System at Warm Boundary Temperatures of 630, 530 and 152 °R.* NASA TM-104476 (AIAA-91-2400), NASA Lewis Research Center – Boil-off-Äquivalente 2,3 / 1,3 / 0,2 % pro Tag bei Atmosphärendruck. https://ntrs.nasa.gov/api/citations/19910015845/downloads/19910015845.pdf“
   2. „NASA, *Gateway: Frequently Asked Questions*“: Zusatz „(Stand vor der Pause vom 24.03.2026)“.
   3. Neue Zeile: „Programmstand Gateway: Pause seit 24.03.2026 – Einzelheiten und Quellen in `DOC:KUE:KUE-SCI-0173-2026-DE`.“
   4. „NASA CFM / Starship Flight 3“: konkrete Quelle nachtragen (NASA-Mitteilung zum Kryotransfer-Demonstrator auf Flight 3 oder SpaceX-Flugbericht vom 14.03.2024) oder Zusatz „(Quelle nicht nachgewiesen)“. In diesem Lauf nicht gesucht.

   Versionssprung v1.1 → v1.2, Revisionsvermerk in §18: „**v1.2 (2026-xx-xx):** Realen Gateway-Programmstand (Pause seit 24.03.2026) nachgetragen, NASA TM-104476 vollständig zitiert, Verweis auf DOC:KUE:KUE-SCI-0173-2026-DE (OTA-REQ-20261128-002 A/B). Keine fiktionalen Infrastrukturwerte geändert.“

C. **Nach KUE-Merge:** In §5, „[R] Quantitative Verlustanker“, am Absatzende ergänzen: „Messreihe und Quelle: `DOC:KUE:KUE-SCI-0173-2026-DE`.“ Revisionsvermerk mit Verweis auf diesen Request.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261128-001 (Messwert TM-104476 in KUE-SCI-0173 §XI).
- `OTA-TEC-0025-2091-DE` und `OTA-TEC-0022-2025-DE` nennen Gateway ebenfalls; bei ihrer Begutachtung auf den realen Programmstand prüfen (nur, wo sie Realanker führen).
- `noxiagame`: keine Wirkung – `gateway-station-eml2` ist Setzung; die reale Programmpause ändert keine Spielwerte.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-TEC-0087 ergänzt.
