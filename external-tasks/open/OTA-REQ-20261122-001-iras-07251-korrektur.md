# OTA-REQ-20261122-001 – OTA-SCI-0044-2026-DE (IRAS 07251−0248): Quellen und unbelegte Zahlen korrigieren, danach zum Brückendokument kürzen

Status: open
Datum: 2026-11-22
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-22-OTA-SCI-0044-2026-DE.md`
Zuordnung: ganz nach KUE – reines Realdossier ([R]/[T]) ohne Setzung; der Werkbezug liegt nur in der kuratorischen Notiz (AVI-Übertragung in OTA-FND-0012) und in den OTA-internen Referenzen. Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261122-001.md`.
Voraussetzung: Punkt A sofort umsetzbar. Punkt C erst, wenn das neue KUE-Dokument aus EXT-OTA-KUE-20261122-001 in `kueper.com/main` gemergt ist (Signatur dort vergeben: KUE-SCI-0218-2026-DE, im Folgenden `KUE-SCI-NNNN`). Punkt B wartet auf Thomas.
Teilweise erledigt: 2026-11-24 – Punkt A umgesetzt in OTA-SCI-0044 v1.1 durch die Begutachtung (ECO-ARC-0038 §3b). A.11: die Formulierung in §2.2 und im zweiten Evidenzpunkt von §3.1 eingesetzt; §7.1 Punkt 3 enthielt keinen Koeffizienten und blieb unverändert. Hinweis: §7.1 Punkt 2 („um Faktor 2–10“) und §1.1/§6.1 („> 500 K“) sind von A nicht erfasst und stehen weiter im Text – bei der Kürzung (C) entfallen sie. 2026-11-25 – Punkt C umgesetzt in OTA-SCI-0044 v1.2 (Ökosystem-Kreislauf, Claude; EXT-KUE-OTA-20261124-001): Realteil nach `DOC:KUE:KUE-SCI-0218-2026-DE` ausgelagert, `KUE-SCI-NNNN` = KUE-SCI-0218-2026-DE. Offen: nur noch B (wartet auf Thomas).
Erfasst die Punkte zu OTA-SCI-0044 aus `OTA-REQ-20261106-quellenpruefung.md`.

## Anlass

Abgleich am 2026-11-22 mit dem Preprint arXiv:2602.04967v1 (García-Bernete et al.) und der Mitteilung der University of Oxford (Feb. 2026). Erstautor, Programmnummer, Entfernung, Staubtemperatur, Häufigkeitstabelle, „2–10× über Modellen“, Korrelationskoeffizient „r ~ 0,85“ und der Benzol-Vorbefund in NGC 253 stehen so nicht in der Primärquelle.

## Gewünschte Änderung

A. **Quellen und [R]-Angaben korrigieren (sofort umsetzbar):**
   1. Quellenverzeichnis Nr. 1 ersetzen durch: „García-Bernete, I., Pereira-Santaella, M., González-Alfonso, E. et al. (2026): Abundant hydrocarbons in a buried galactic nucleus with signs of carbonaceous grain and polycyclic aromatic hydrocarbon processing. *Nature Astronomy*, online 06.02.2026. DOI 10.1038/s41550-025-02750-0 (aus dem Verlagslink erschlossen); arXiv:2602.04967.“
   2. Nr. 2: „Spilker et al.“ streichen; ersetzen durch „(2026): JWST reveals hydrocarbon-rich material in a buried galactic nucleus. *Nature Astronomy* 10, 347–348 (News & Views; Autorenschaft nicht geprüft). DOI 10.1038/s41550-025-02768-4.“
   3. Nr. 3 ersetzen durch: „Speranza, G., Pereira-Santaella, M. et al. (2025): JWST reveals cosmic ray dominated chemistry in the local ULIRG IRAS 07251−0248. *MNRAS Letters* 542(1), L117–L125. DOI 10.1093/mnrasl/slaf079; arXiv:2506.17390.“
   4. Nr. 5 ersetzen durch: „Jones, B. M., Zhang, F., Kaiser, R. I. et al. (2011): Formation of benzene in the interstellar medium. *PNAS* 108(2), 452–457 (PMC3021054).“
   5. Nr. 6: Titel vervollständigen: „Interstellar Benzene Formation Mechanisms via Acetylene Cyclotrimerization Catalyzed by Fe⁺ Attached to Water Ice Clusters: Quantum Chemistry Calculation Study“ (Autorenschaft „Sun et al.“ nicht geprüft – so kennzeichnen).
   6. Nr. 7 (Phys.org) streichen – Titel und URL nicht auffindbar. Nr. 11: URL ersetzen durch `https://astrobiology.com/2026/02/06/abundant-hydrocarbons-in-a-buried-galactic-nucleus-with-signs-of-carbonaceous-grain-and-polycyclic-aromatic-hydrocarbon-processing/`.
   7. §1.2 „Beobachtungsmethode“: die vier Aufzählungspunkte ersetzen durch:
      - „**NIRSpec** IFU, Gitter G395H/F290LP: 2,87–5,27 µm, R ≈ 2700“
      - „**MIRI** MRS: 4,9–28,1 µm, R ≈ 3700–1300“
      - „**Programm:** JWST GO 3368 (PIs L. Armus, A. Evans); Vergleichs-ULIRGs aus GTO 1267“
   8. §1.1 „Grunddaten“, Zeile Entfernung: „~700 Mpc (lokales Universum, z ≈ 0.08)“ → „z = 0,0878; Leuchtkraftentfernung rund 400 Mpc (eigene Abschätzung mit H₀ ≈ 70 km/s/Mpc)“. Block „Physikalische Bedingungen im Kern“: Zeile „Staubtemperaturen: T_dust > 500 K“ ersetzen durch „Rotationstemperaturen der Gasmoleküle: etwa 150–250 K“; die Zeilen zu Gasdichte, Ionisationsrate und Extinktion mit dem Zusatz „(Wert nicht an der Primärquelle geprüft)“ versehen.
   9. §2.1 Tabelle: Spalte „Häufigkeit (relativ zu H₂)“ streichen (Werte in der Primärquelle nicht gefunden). Unter der Tabelle ergänzen: „Außerdem in der Gasphase: HCN, H₂O, CO₂. Im Festkörper: wasserstoffhaltiger amorpher Kohlenstoff (a-C:H) und Wassereis; Methaneis nur als Obergrenze.“
   10. §2.2 „Beobachtung“: Satz „… liegen **2–10× höher** als in Standard-Modellen …“ ersetzen durch: „Die gemessenen Häufigkeiten übertreffen Modellrechnungen deutlich: CH₄ etwa 100-fach gegenüber einem Modell heißer Gaschemie; selbst ein kohlenstoffreiches Modell (C/O = 1,30) unterschätzt CH₄, HCN und CH₃ um Faktoren von etwa 3600, 40 und 15.“
   11. §2.2 „Empirische Korrelation“, §3.1 „Evidenz“ (zweiter Punkt) und §7.1 Punkt 3: den Korrelationskoeffizienten streichen; Formulierung: „In einer Vergleichsstichprobe von ULIRGs steigt das Verhältnis C₂H₂/H₂O mit der Äquivalentbreite der H₃⁺-Linie – einem Indikator für Ionisation durch kosmische Strahlung (Trend, ohne Korrelationskoeffizient angegeben).“
   12. §3.3: „v_out ≈ 160 km/s“ → „v_out ≈ 160 ± 35 km/s (alle Gasphasenmoleküle)“.
   13. §5.2 „Konfidenz“: die S/N-Angaben mit „(nicht an der Primärquelle geprüft)“ kennzeichnen. §5.1: Satz ergänzen: „Bandenzuordnung am Paper prüfen; CH₃ wird spektroskopisch üblicherweise über die ν₂-Bande bei etwa 16,5 µm nachgewiesen.“
   14. §6.2, Zeile Benzol: „nachgewiesen in wenigen nahegelegenen Galaxien (z.B. NGC 253)“ → „außerhalb der Milchstraße zuvor nur im Planetarischen Nebel SMP LMC 11 (Große Magellansche Wolke) berichtet“.
   Versionssprung v1.1 (Frontmatter und Kopf), Revisionsvermerk: „2026-xx-xx: Quellen und unbelegte Zahlen korrigiert (OTA-REQ-20261122-001 A).“ Kuratorische Notiz und OTA-interne Referenzen bleiben unverändert.

B. **Claude-Status: wartet auf Thomas**
   - Kopfzeile „**Status:** Kanonisch“ gegenüber Frontmatter `status: AKTIV` klären.
   - Ob die OTA-interne Referenz Nr. 13 (OTA-SCI-0019, χ-Feld-Theorie) in der Brückenfassung bleibt.

C. **Mit KUE-Dokument (ECO-ARC-0038 §3a, vollständiger Umzug):** Abschnitte 1–7 ersetzen durch einen Abschnitt „1. Realgrundlage (Kurzfassung)“ mit genau diesem Text:
   > `[R]` Das James-Webb-Weltraumteleskop hat im staubverhüllten Kern der ultraleuchtkräftigen Infrarotgalaxie IRAS 07251−0248 (z ≈ 0,088) ein ungewöhnlich reiches Inventar kleiner Kohlenwasserstoffe in der Gasphase nachgewiesen – Benzol, Acetylen, Di- und Triacetylen, Methan und, erstmals außerhalb der Milchstraße, das Methylradikal CH₃ –, dazu kohlenstoffreiche Staubkörner und Wassereis (García-Bernete et al., Nature Astronomy, 2026). `[T]` Die Autoren deuten die Moleküle als Bruchstücke von Staubkörnern und PAH, die durch kosmische Strahlung zerlegt werden; die Gase strömen mit rund 160 km/s aus dem Kern. Ein Lebensnachweis ist das nicht. Einzelheiten und Quellen: `DOC:KUE:KUE-SCI-NNNN`.
   „Epistemologische Gewichtung“ auf „[R] Beobachtung, [T] Deutung – Einzelheiten in KUE-SCI-NNNN“ kürzen. Zusammenfassung auf den ersten Absatz kürzen, die kuratorische Notiz bleibt wörtlich. Quellenverzeichnis: Primär- und Presseliteratur durch „Realgrundlage: `DOC:KUE:KUE-SCI-NNNN`“ ersetzen; OTA-interne Referenzen und „Verwandte Dokumente“ bleiben. `summary`: „Brückendokument: JWST-Befund organischer Moleküle in IRAS 07251−0248 als Realanker für die AVI-Übertragung in OTA-FND-0012; Realteil in KUE-SCI-NNNN.“ Versionssprung v1.2, Revisionsvermerk „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261122-001 C).“ Nicht archivieren; nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261122-001 (neues Dokument).
- `OTA-FND-0012`, `-0013`, `-0013A`, `-0014`, `-0015` und `OTA-INDEX-RKF` nennen IRAS 07251−0248; bei ihrer Begutachtung auf die korrigierten Angaben (Erstautor, keine Korrelationszahl) prüfen. Die AVI-Übertragung selbst bleibt unberührt.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0044 aktualisiert.
