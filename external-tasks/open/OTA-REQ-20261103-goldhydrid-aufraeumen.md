# OTA-REQ-20261103-001 – OTA-SCI-0017-2025-DE (Goldhydrid als Resonanzanker): Realteil korrigieren und auf Verweis nach KUE-SCI-0183 kürzen

Status: open
Datum: 2026-11-03
Claude-Status: wartet auf Thomas
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-03-OTA-SCI-0017-2025-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0183-2026-DE`; AVI-Teil: Entscheidung Thomas (eigenes Modell, bleibt in OTA)
Voraussetzung: KUE-SCI-0183 v0.2 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-03`).

## Warum Thomas entscheiden muss

Abschnitt I ist die Realgrundlage der AVI-Erweiterung (Gl. G.1–G.3, Vorhersagen P1–P5). Die vorgeschlagenen Korrekturen schwächen zwei Prämissen ab (Stabilität der Phase, „Gold-Problem“) und ändern die Kennzeichnung einer Modellgröße. Das AVI-Modell selbst wird nicht verändert.

## Gewünschte Änderung

1. **§1.1 ersetzen (§3a)** durch eine kurze Grundinformation, z. B.:
   > 2025 erzeugten Frost u. a. am European XFEL erstmals ein binäres Goldhydrid Au₂Hₓ – oberhalb von etwa 40 GPa und 2200 K, mit hexagonalem Goldgitter und sehr beweglichem (superionischem) Wasserstoff. Die Phase ist nur bei hoher Temperatur stabil und zerfällt beim Abkühlen auf Raumtemperatur wieder zu reinem Gold. Belege und Einzelheiten: `DOC:KUE:KUE-SCI-0183-2026-DE`.
   Damit entfallen die beiden sachlich unscharfen Angaben „erste Synthese einer **stabilen** Gold-Wasserstoff-Verbindung“ (die Phase ist nicht stabil bei Normalbedingungen) und „T ≈ 2000 °C“ (Quelle: etwa 2200 K). Die [H]-Arbeitsabschätzung Δt_phase bleibt als eigener Satz erhalten.
2. **§1.2 „Das kosmologische Gold-Problem“ – Kennzeichnung abschwächen:** [ETABLIERT] ist zu stark. „Übersteigt alle bekannten Produktionsmechanismen um Faktoren von 2–10“ und „Neutronenstern-Kollisionen … nur 1 beobachtet“ sind in dieser Form nicht belegt. Vorschlag mit Marker [R/OFFEN]:
   > Neutronensternverschmelzungen sind ein belegter Entstehungsort schwerer r-Prozess-Elemente (Kilonova nach GW170817). Ob sie allein die beobachteten Häufigkeiten und deren zeitliche Entwicklung erklären, ist offen. 2025 wurde zudem ein r-Prozess-Signal in einem Magnetar-Riesenflare (SGR 1806-20, 2004) berichtet; solche Flares könnten mindestens 1–10 % der galaktischen r-Prozess-Elemente beitragen (Patel u. a. 2025, arXiv:2501.09181). Grundlagen: `DOC:KUE:KUE-SCI-0195-2026-DE`.
   Folge für P2: Die Vorhersage bleibt als [H] möglich, ihre Prämisse heißt dann „offene Produktionsbilanz“ statt „etablierter Überschuss“.
3. **§1.3 relativistische Effekte:** inhaltlich korrekt; auf zwei Sätze kürzen und auf `DOC:KUE:KUE-SCI-0195-2026-DE` (Abschnitt relativistische Effekte) verweisen. Die Pyykkö-Referenz bleibt.
4. **Gl. G.1, Kennzeichnung von S_H:** „superionischer Ordnungsparameter S_H ∈ [0,1] [ETABLIERT]“ – eine solche normierte Größe ist in Frost u. a. nicht definiert; etabliert ist nur die hohe H-Diffusivität in DFT-MD. Vorschlag: [T/H – Modellgröße, angelehnt an die Diffusivität].
5. **Vollständig erhalten:** Abschnitte II–V (AVI-Hypothese, Vorhersagen, Gleichungen, Fazit) und das Falsifikationskriterium.
6. Versionssprung auf v1.2, Revisionsvermerk „2026-11-03: Realteil nach DOC:KUE:KUE-SCI-0183-2026-DE ausgelagert, Kennzeichnung §1.2 und S_H angepasst“; `summary` entsprechend.

## Quellen

- Frost u. a., *Angew. Chem. Int. Ed.* 64, e202505811 (2025), DOI 10.1002/anie.202505811 (freie Fassung OSTI 2589240) – Zerfall beim Abkühlen auf 295 K, „nur bei hoher Temperatur stabil“.
- Patel, Metzger, Cehula, Burns, Goldberg, Thompson, *Direct evidence for r-process nucleosynthesis in delayed MeV emission from the SGR 1806-20 magnetar giant flare*, arXiv:2501.09181 (v3, 29.04.2025).

## Wirkung

- `kueper.com`: Magnetar-Befund fehlt in KUE-SCI-0195 – Request `kueper.com/external-tasks/open/EXT-OTA-KUE-20261103-001.md`.
- OTA-TEC-0021-2025-DE (MOF-Hypothesendossier, ebenfalls Gruppe K zu KUE-SCI-0183) ist noch nicht begutachtet.
