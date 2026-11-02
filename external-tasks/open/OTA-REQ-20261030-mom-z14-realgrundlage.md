# OTA-REQ-20261030-002 – OTA-SCI-0034-2026-DE (MoM-z14): Realgrundlage aktualisieren

Status: open
Datum: 2026-10-30
Quelle: Begutachtung nach ECO-ARC-0037 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-10-30-OTA-SCI-0034-2026-DE.md`
Betrifft: nur [R]/[T]/[S]-Abschnitte (Metadaten, I–V, VII, IX, Quellen). Fiktion (5.3, VI, VIII) bleibt unberührt.

## Befunde und Änderungsvorschlag

1. **Publikation (1.1, Quellen):** Naidu, R. P. et al., „A Cosmic Miracle: A Remarkably Luminous Galaxy at z_spec = 14.44 Confirmed with JWST“, *The Open Journal of Astrophysics* 9 (30. Jan. 2026); Preprint arXiv:2505.11263 (Mai 2025). Der Titel in Quelle 1 ist nicht der Originaltitel. Programm: „Mirage or Miracle“ (MoM, JWST GO-5224), Felder COSMOS und UDS. [R].
2. **Masse und Größe (Metadaten, 2.1):** Stellare Masse log M*/M☉ ≈ 8,1 (+0,3/−0,2), also ≈ 10⁸ M☉ – passt; Effektivradius aber ≈ 74 pc (+15/−12), nicht „~500 pc“. „Extrem kompakt“ stimmt. [R].
3. **Leuchtkraft (2.2):** M_UV ≈ −20,2 stimmt. Die Vergleichszeile „SMC M_UV ≈ −16, 40× heller“ ist eine eigene, unbelegte Rechnung – als [I]/`rekonstruktion` kennzeichnen oder streichen. SFR laut Paper ≈ 13 M☉/a (über 5 Myr), nicht „> 100 M☉/a“; Hinweis auf jüngsten Sternentstehungsausbruch (≈ 10-facher Anstieg in 5 Myr).
4. **Stickstoff (3.1, Kernaussage 3) – sachlich falsch:** Stickstoff stammt nicht vor allem aus Supernovae, sondern aus dem CNO-Zyklus und wird über Sternwinde massereicher bzw. sehr massereicher Sterne freigesetzt. Nachgewiesen sind N IV] λ1487 und N III] λ1747–1754 (je ≈ 3σ), [N/C] ≈ 0,9 bis 1,7. Die Autoren deuten das – vorläufig – über sehr massereiche oder supermassive Sterne in dichten Sternhaufen, analog zu Kugelsternhaufen; „mehrere Generationen von Supernovae“ ist nicht ihre Deutung. [R] Messung, [H] Deutung, `forschung`.
5. **Vergleichstabellen (3.2, VII):** JADES-GS-z14-0: spektroskopisch z = 14,32 (NIRSpec, 2024), präzisiert durch ALMA-[O III] auf z = 14,18 (2025); ausgedehnt und stickstoffarm mit starker Lyα-Dämpfung – also gerade *kein* Gegenstück zur N-Anomalie. „JADES-z14 · 14,2“ in 3.2 und „JADES-GS-z14-0 · 14,32“ in VII vereinheitlichen. „GLASS-z13 · 13,0“ ist veraltet: als GHZ2/GLASS-z12 bei z = 12,33 bestätigt. GN-z11: Entdeckung 2016 mit Hubble, spektroskopisch z = 10,6 (JWST 2023). Neu ergänzen: PAN-z14-1 (z ≈ 13,53, 2026). [R].
6. **Rekordstatus:** Stand 2026-10-30 ist MoM-z14 weiterhin die am weitesten entfernte spektroskopisch bestätigte Galaxie; Kandidaten mit höherem z sind nur photometrisch. [R].
7. **„NASA/STScI, 30. Januar 2026“:** Das Datum ist die Journalpublikation; eine NASA-Mitteilung mit diesem Datum ist nicht belegt – Quelle 2 mit URL belegen oder durch die Mitteilung der Universität Genf / MIT ersetzen.
8. **Modell 2 (4.2):** „Schwarzes Loch verschmutzt Spektrum mit schweren Elementen“ ist physikalisch unzutreffend – AGN ändern Anregung und Linienverhältnisse, erzeugen aber keine Elemente. Umformulieren. [T].
9. **Status-Feld im Kopf:** „Status: Kanonisch“ vs. Frontmatter `AKTIV` – angleichen.

## Wirkung

Keine Wirkung auf andere Repositories erkannt. `OTA-SCI-0044-2026-DE` (verwandt) bei dessen Begutachtung auf dieselbe Vergleichstabelle prüfen.
