# OTA-REQ-20261120-001 – OTA-SCI-0084-2026-DE (Kryoporöse Oberflächen auf Eiswelten): Realanker korrigieren und auf KUE verweisen

Status: open
Datum: 2026-11-20
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-20-OTA-SCI-0084-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden – `DOC:KUE:KUE-SCI-0013-2026-DE` (v1.1, Erstautoren und Versuchsangaben dort bereits korrigiert). Der Realanker in §1 ist schon kurz und bleibt als Grundinformation; Hazard-Klasse KPÜ, Hazard-Modi, Sensorik, Engineering-Anforderungen und NOXIA-Systemwirkung (§2–§15) bleiben unverändert.
Voraussetzung: `KUE-SCI-0013-2026-DE` in mindestens v1.1 in `kueper.com/main` – erfüllt (Stand 2026-11-20). Punkte A–D sind umsetzbar.
Erfasst die Punkte zu OTA-SCI-0084 aus `OTA-REQ-20261106-quellenpruefung.md` (Choukroun 2026, McKinnon 2026, Choukroun 2020/2021).

## Anlass

Der Realanker nennt falsche Erstautoren (die EPSL-Arbeit stammt von Patočka et al., die Juno-Arbeit von Levin et al.) und „40 kg“ statt rund 40 Liter Wasser. KUE-SCI-0013 v1.1 führt die geprüften Angaben (Quellenprüfung 2026-11; Pressemitteilung Karls-Universität 17.04.2026; Bericht Gizmodo 15.05.2026 zur EPSL-Arbeit von Patočka).

## Gewünschte Änderung

Nur Realanker und Quellen; §2–§15 bleiben wörtlich.

A. **§1 Realanker** – den ersten Satz ersetzen durch:
   > [R] Patočka et al. (2026) beobachteten in der Vakuumkammer GEORGE der Open University an rund 40 Litern niedrig salinem Wasser unter Nahe-Vakuum-Bedingungen millimeterdünne Eislamellen, die durch zentimeterdicke, flache Dampfhohlräume getrennt waren.
   Die drei folgenden Sätze bleiben. Die Zeile „**Primärer wissenschaftlicher Bezug:** KUE-SCI-0013-2026-DE.“ ersetzen durch „Daten, Quellen und Einordnung: `DOC:KUE:KUE-SCI-0013-2026-DE`.“
B. **§6 Europa-Profil** – Aufzählungspunkt „nach Juno-Mikrowellendaten plausible Poren/Risse/Streuer bis in große Tiefen.“ → „nach Juno-Mikrowellendaten plausible Poren/Risse/Streuer bis in einige hundert Meter Tiefe (Levin et al. 2026).“ (entspricht KUE-SCI-0013 §4).
C. **§16 Quellen** – ersetzen:
   - Choukroun 2026 → „Patočka, V.; Brož, P.; Chan, K.; Biju Sindhu, P.; Fox-Powell, M. G.; Sylvest, M.; Emerland, Z.; Patel, M. R. (2026): *Layered bubble-rich structures on icy worlds: near-vacuum experiments with large volumes of low-salinity water*. Earth and Planetary Science Letters 685, 119999. DOI: 10.1016/j.epsl.2026.119999.“
   - McKinnon 2026 → „Levin, S. M. et al. (2026; online 17.12.2025): *Europa’s ice thickness and subsurface structure characterized by the Juno microwave radiometer*. Nature Astronomy 10, 84–91.“
   - „Choukroun, M. et al. (2020/2021): Arbeiten zu …“ → „Choukroun, M.; Molaro, J. L.; Hodyss, R. et al. (2020): *Strength evolution of ice plume deposit analogs of Enceladus and Europa*. Geophysical Research Letters 47(15). DOI: 10.1029/2020GL088953.“
   - Neu als erste Zeile: „Wissenschaftliche Grundlage mit allen Angaben: `DOC:KUE:KUE-SCI-0013-2026-DE`.“
D. **Version** v1.1 (Frontmatter), am Dokumentende Abschnitt „Revisionsvermerk“ anlegen: „<Datum>: Realanker und Quellen korrigiert (Patočka et al. statt Choukroun et al.; Levin et al. statt McKinnon et al.; 40 Liter), Verweis auf DOC:KUE:KUE-SCI-0013-2026-DE (OTA-REQ-20261120-001).“ Nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: `EXT-OTA-KUE-20261120-001` – neue Befunde zu porösem Eisregolith (Mergny et al. 2026; Gundlach et al., EPSC 2026) für KUE-SCI-0013.
- Das Dokument fordert in §15 einen Engineering-Request „Cryoporous Terrain Interaction & Landing Architecture“; die Begutachtung legt ihn nicht an (keine neue Sachlage, Entscheidung beim Kurator).
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0084 aktualisiert.
