# OTA-REQ-20261127-001 – OTA-SCI-0026-2048-DE (AVI-LOD-Index): Literaturangabe kennzeichnen, reale LOD-Anker mit Thomas abgleichen

Status: open
Datum: 2026-11-27
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-27-OTA-SCI-0026-2048-DE.md`
Zuordnung: Entscheidung Thomas – das Dokument ist eine In-universe-Analyse (fiktiver Autor, 2048, Marker T/H/S/W) zum AVI-Modell. Der Realteil (Part I: LOD-Messverfahren, Referenzmodell, historische Ereignisse) hat in KUE bereits Gegenstücke: `DOC:KUE:KUE-SCI-0177-2026-DE` §VI a (Erdrotation, EOP, IERS 20 C04) und `DOC:KUE:KUE-SCI-0169-2026-DE` (LOD-Schwankungen und Seismizität). Fehlendes wird per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261127-001.md` in KUE-SCI-0177 ergänzt.
Voraussetzung: Punkt A sofort umsetzbar (rein bibliographisch). Punkte B und C: **Claude-Status: wartet auf Thomas** (die realen Werte tragen die AVI-Argumentation „beispiellos“ und das Szenario A; Kürzung eines W-Dokuments).
Erfasst den Eintrag zu OTA-SCI-0026-2048 aus `OTA-REQ-20261106-quellenpruefung.md` (1 nicht auffindbar).

## Anlass

Abgleich am 2026-11-27 (Belege im Prüfbericht): Literaturangabe [4] ist nicht nachweisbar (Quellenprüfung 2026-11). Mehrere als real auftretende Werte in Part I/III widersprechen der Messlage:

- Säkularer Trend: Die Tageslänge nimmt im Mittel um etwa **+1,8 ms pro Jahrhundert** zu (beobachtet 720 v. Chr. bis 2015), die Gezeitenreibung allein ergäbe etwa +2,3 ms pro Jahrhundert (Stephenson, Morrison & Hohenkerk 2016). Das Dokument nennt „−0.55 ms/Jahr (Gezeitenreibung)“ – Vorzeichen und Größenordnung (Faktor ≈ 30) falsch.
- Erdbeben: Das Sumatra-Beben 2004 hat die Tageslänge nach Modellrechnung um etwa **2,7 µs verkürzt** (Gross & Chao, NASA/JPL 2005), nicht um +0,7 ms verlängert; solche Sprünge liegen unter der Nachweisgrenze. Gleiches gilt sinngemäß für Tōhoku 2011 und Chile 2010.
- Genauigkeit: Eine LOD-Genauigkeit ist keine Eigenschaft einer Technikklasse (KUE-SCI-0177 §VI a); „Atomuhren ±0.001 ms, TRL 5“ als eigenständiges LOD-Messverfahren ist so nicht belegt.
- Stand seit Erstellung: Seit 2020 dreht sich die Erde schneller als im Jahrzehnt davor; der 9. Juli 2025 war nach IERS-Angaben etwa 1,3–1,6 ms kürzer als 86 400 s und einer der kürzesten gemessenen Tage. Nach Agnew (2024, *Nature* 628, 333) wäre bei Fortsetzung des Trends um 2029 erstmals eine negative Schaltsekunde nötig; das Abschmelzen polarer Eismassen verzögert das um etwa drei Jahre.

## Gewünschte Änderung

A. **Literatur (sofort umsetzbar):** In §13 die Angabe „[4] Chao et al. (2020): "Variations in LOD and Atmospheric Angular Momentum", Surv. Geophys.“ um den Zusatz „[Angabe nicht nachweisbar – Quelle durch Kurator zu klären]“ ergänzen. Sonst nichts ändern. Versionssprung v1.0.1, Revisionsvermerk am Ende: „2026-xx-xx | v1.0.1: Literaturangabe [4] als nicht nachweisbar gekennzeichnet (OTA-REQ-20261127-001 A).“

B. **Claude-Status: wartet auf Thomas** – reale Anker in Part I und III korrigieren oder ausdrücklich als In-universe-Werte kennzeichnen. Vorschlag:
   1. §2.1 Punkt 1: „Säkularer Trend: −0.55 ms/Jahr (Gezeitenreibung)“ → „Säkularer Trend: ≈ +1,8 ms pro Jahrhundert (beobachtet; Gezeitenreibung allein ≈ +2,3 ms pro Jahrhundert, Differenz durch nacheiszeitliche Ausgleichsbewegung und Kernprozesse)“.
   2. §8, Tabelle „Tektonische Aktivität“: Spalte „LOD-Sprung“ für Sumatra 2004 auf „−2,7 µs (berechnet, nicht messbar)“ setzen; Tōhoku 2011 und Chile 2010 entsprechend als berechnete µs-Werte oder ohne Wert führen. Die daraus abgeleiteten Indexwerte (+1.9, +1.7, +0.9) und die Zeilen 4–5 der Top-10-Tabelle in §3.2 entfallen dann oder werden als fiktive SSF-Auswertung markiert.
   3. §1.5: Zeile „Atomuhren“ als Ausblick kennzeichnen („Uhrenvergleich als künftige Ergänzung, kein LOD-Routineverfahren“) oder streichen; Satz unter der Tabelle ergänzen: „Genauigkeiten hängen vom Produkt und Zeitraum ab, nicht von der Technikklasse (vgl. `DOC:KUE:KUE-SCI-0177-2026-DE` §VI a).“
   4. §11 Szenario A: „LOD(2030) = −2.5 ± 0.5 ms (Trend + Saisonalität)“ ist mit dem realen Trend nicht vereinbar (der Überschuss gegenüber 86 400 s liegt in den 2020er Jahren im Bereich von Bruchteilen einer Millisekunde bis gut −1,5 ms an einzelnen Tagen; genaue Spanne an IERS 20 C04 prüfen). Entscheidung Thomas, ob die Szenarien auf reale Werte umgestellt oder als In-universe-Modellwerte stehen bleiben.
   5. Hinweis zur Weltlogik: Die reale Beschleunigung seit 2020 und die diskutierte negative Schaltsekunde um 2029 fallen in das AVI-Prognosefenster 2028–2032 („LOD-Reversal“). Das betrifft auch `OTA-OBS-0005-2026-DE` (LOD-REVERSAL). Ob und wie das in die Setzung eingeht, entscheidet Thomas; die Begutachtung übernimmt es nicht in die Fiktion.

C. **Claude-Status: wartet auf Thomas** – Kürzung nach ECO-ARC-0038 §3a: Part I (§1–§3) könnte auf eine Grundinformation mit Verweis gekürzt werden, z. B. „Die Tageslänge wird aus Radiointerferometrie (VLBI) mit Beiträgen von GNSS und Laserentfernungsmessung bestimmt; der IERS veröffentlicht tägliche Werte ab 1962. Sie schwankt im Millisekundenbereich durch Atmosphäre, Ozean, Gezeiten und Kern und nimmt im Mittel um etwa 1,8 ms pro Jahrhundert zu. `[R]` Einzelheiten: `DOC:KUE:KUE-SCI-0177-2026-DE` §VI a.“ Die Gewichtungsformel (§1.5), §2 als Modellgleichung des fiktiven Autors und Part II–IV blieben unverändert. Nur nach Entscheidung von Thomas umsetzen.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261127-001 (KUE-SCI-0177 §VI a um säkularen Trend, Erdbebeneffekte, Rekord-Kurztage 2020–2025 und negative Schaltsekunde ergänzen).
- `OTA-OBS-0005-2026-DE` (LOD-REVERSAL) und `OTA-TEC-0028-2048-DE` (Abschnitt 8.5) nutzen dieselben Werte; bei ihrer Begutachtung mit Punkt B abgleichen.
