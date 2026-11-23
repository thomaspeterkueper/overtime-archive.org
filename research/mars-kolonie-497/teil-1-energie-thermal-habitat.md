<!--
Rohrecherche aus dem Google-Drive-Altbestand, übernommen am 2026-11-23 nach EXT-ECO-OTA-20261030-002.
Drive-Quelle: RECHERCHE_Mars_Kolonie_Systeme_Energie_Thermal_Habitat.md – https://drive.google.com/file/d/1N2VNEp8kVPYRi1zaNqdedgHHXFr5j-Rp/view
-->

> **Archivhinweis (23.11.2026):** Externe Rohrecherche, ausdrücklich **nicht kanonisch** und zur Prüfung durch SSF/OTA bestimmt. Verarbeitet ist sie in `OTA-TEC-0038` (Tharsis Hub) und den Folgedossiers. Die Rohfassung enthielt nur Indexmarken einer Recherche-Ausgabe statt Quellenangaben; diese Marken sind entfernt und an den 15 betroffenen Stellen durch „⟨Quelle nicht erhalten⟩“ ersetzt. Als **[R]** markierte Aussagen sind deshalb vor einer Verwendung in Dossiers an der Primärquelle neu zu belegen. Text sonst unverändert.

# Externe Recherche: Technische Grundlagen für Mars-Kolonie-Systeme (497 Personen)

**Auftrag:** Keine Science-Fiction-Konzeptkunst, keine Gameplay-Werte. Technisch dimensionierbare Systementwürfe auf Basis heutiger NASA/ESA-Raumfahrttechnik plus ausdrücklich gekennzeichneter plausibler Fortschreibung. Referenzwerte, Skalierungen und Zukunftsannahmen getrennt gekennzeichnet. Zur Prüfung durch SSF/OTA vor Übernahme in Dossiers — nichts hiervon ist bereits kanonisch.

**Bearbeitete Prioritäten:** Energie, Thermalkontrolle, Habitatsegmentierung (die drei von Thomas als wichtigste benannt). Zusätzlich als Nebenprodukt: O₂/CO₂-Bilanz und Wasser-ISRU, da bei der Recherche mitanfallend und direkt für Punkt 2/3 der ursprünglichen Liste relevant.

---

## 1. Energieanlage

### Reale Referenztechnik: NASA Kilopower / Fission Surface Power (FSP)
Die Human Spaceflight Architecture von NASA geht von vier 10-kWe-Energiesystemen für den 40-kWe-Bedarf der ersten bemannten Mars-Oberflächenmission aus, mit einer möglichen fünften Einheit als Redundanz. ⟨Quelle nicht erhalten⟩ **[R]**

Stand August 2025 zielt NASAs Fission-Surface-Power-Initiative, aufbauend auf Kilopower, auf mindestens 100-kWe-Systeme auf dem Mond bis 2030, mit vergleichbar skalierbarer Leistung für den Mars zur Unterstützung dauerhafter menschlicher Präsenz. ⟨Quelle nicht erhalten⟩ **[R]**

Kilopower-Missionsarchitekturen sehen eine vergrabene Reaktorplatzierung mehrere Meter im Regolith zur natürlichen Strahlungsabschirmung vor, wobei die Systeme über autonome Lander bis zu 1 km von menschlichen Aktivitätsbereichen entfernt positioniert werden können. ⟨Quelle nicht erhalten⟩ **[R]**

Der Gesamtenergiebedarf für 4–6 Besatzungsmitglieder liegt bei 40–100 kWe, inklusive Redundanz für Umweltrisiken. ⟨Quelle nicht erhalten⟩ **[R]**

### Skalierung auf 497 Personen [H]
Reale NASA-Referenz: 40 kWe für die erste bemannte Mission (Größenordnung 4–6 Personen), 100 kWe als Fission-Surface-Power-Zielgröße. Eine **lineare** Skalierung auf 497 Personen wäre naiv (Grundlast skaliert nicht 1:1 mit Personenzahl — Beleuchtung, Klimatisierung, ISRU-Betrieb haben Fixkosten unabhängig von der Bewohnerzahl), aber als grobe untere Schranke:

- Bei 100 kWe pro ~5–6 Personen (frühe FSP-Zielgröße) ergäbe eine strikt lineare Fortschreibung ca. 8,3–10 MW für 497 Personen — das liegt in derselben Größenordnung wie die bisherige interne Annahme von 3–5 MW Mittel-/5–8 MW Spitzenlast, tendenziell sogar etwas darüber.
- **Realistischere Annahme [H]:** Eine ausgereifte Kolonie mit 497 Personen hat gegenüber einer 5-Personen-Erstmission massive Skaleneffekte (ISRU-Großanlagen statt Kleinreaktor-Pilotsystem, gemeinsame Klimatisierung großer Habitatsegmente statt vieler kleiner Einheiten) — die bisherige interne 3–5-MW-Annahme ist damit **nicht unplausibel**, aber auch nicht aus realer NASA-Dimensionierung direkt ableitbar. Sie bleibt eine Annahme, keine belastbare Berechnung.

### Redundanz und Modularität [R]
Das Prinzip "N+1-Redundanz durch mehrere kleinere Modulreaktoren statt eines Großreaktors" ist bereits in der realen NASA-Planung verankert (vier 10-kWe-Einheiten plus fünfte als Reserve für die 40-kWe-Erstmission) — dieses Muster (mehrere Module statt Einzelanlage) sollte auf 497-Personen-Maßstab übertragen werden: viele MW-Module statt eine Groß-GW-Anlage, was auch Wartung im laufenden Betrieb erlaubt.

**Offene Frage für SSF/OTA:** Reaktorzahl und -abstand vom Habitat (real: bis 1 km) sollten explizit in ein künftiges Energieanlagen-Dossier übernommen werden — das ist eine reale, sicherheitsrelevante Größe, keine Ausschmückung.

---

## 2. Thermalkontrolle / Mars-Radiatoren

### Reale Referenzwerte (ISS, Mond-Patente)
Die ISS verfügt über sechs eingesetzte Radiator-Arrays, die 70 kW Wärmeabfuhr über zwei Ammoniak-Einphasen-Flüssigkeitskreisläufe leisten. Jedes Array besteht aus acht identischen Panelen von je 3,33 × 2,64 m. ⟨Quelle nicht erhalten⟩ **[R]**

Daraus errechnet sich eine reale Flächenausbeute: 6 Arrays × 8 Panele × (3,33×2,64 m²) ≈ 422 m² Gesamtfläche für 70 kW → **ca. 166 W/m²** Wärmeabfuhr bei ISS-typischen Radiatortemperaturen. **[R], eigene Berechnung aus zitierten Werten**

Ein Mond-Radiator-Patent beschreibt eine zweiseitige 10-m²-Radiatorfläche, die 3,7 kW Lebenserhaltungs-Abwärme bei 285 K abführt ⟨Quelle nicht erhalten⟩ — das entspricht **370 W/m²** bei dieser Betriebstemperatur. **[R als Patentangabe, technisch nachvollziehbar über Stefan-Boltzmann]**

### Physikalische Grundlage: Stefan-Boltzmann-Gesetz [R]
Wärmeabfuhr skaliert mit der vierten Potenz der Radiatortemperatur (q ∝ T⁴). Das erklärt, warum die beiden obigen Referenzwerte (166 vs. 370 W/m²) trotz ähnlicher Temperaturbereiche unterschiedlich ausfallen — Emissivität, Zwei- vs. Einseitigkeit der Abstrahlung und exakte Betriebstemperatur machen einen erheblichen Unterschied. **Für ein Mars-Radiator-Dossier ist die Betriebstemperatur die entscheidende Stellschraube, nicht nur die Fläche.**

### Skalierung auf 3–6 MW Abwärme [H]
Bei einer angenommenen Betriebstemperatur ähnlich dem ISS-Bereich (~166 W/m²) ergäbe sich für 3–6 MW Abwärme eine Radiatorfläche von grob **18.000–36.000 m²** — eine erhebliche Fläche (vergleichbar mehreren Fußballfeldern), plausibel groß genug, um die Vermutung zu stützen, dass Thermalkontrolle tatsächlich eine der größten physischen Infrastrukturkomponenten einer Marskolonie wäre.

Bei höherer Betriebstemperatur (näher am Mond-Patent-Wert 370 W/m², falls ein Hochtemperatur-Radiatorkonzept gewählt wird) sänke der Flächenbedarf auf ca. **8.000–16.000 m²** — deutlich kompakter, aber mit höheren Materialanforderungen (Hochtemperaturbeständigkeit).

**Wichtige Erkenntnis für SSF/OTA:** Die Flächenspanne (8.000–36.000 m²) ist so groß, dass die konkrete Betriebstemperatur-Entscheidung im Dossier explizit begründet werden muss — pauschal "3–6 MW Abwärme, X m² Fläche" ohne Temperaturangabe wäre nach der RL-25-Lehre genau die Art unzulässiger Kombinationsbehauptung, die vermieden werden soll.

### Mars-spezifische Staubproblematik [OFFEN]
Keine der gefundenen Quellen behandelt Mars-Staubablagerung auf Radiatoroberflächen quantitativ — das ist eine reale, hier nicht abgedeckte Wissenslücke. Empfehlung: gesonderte Recherche zu Staubablagerungsraten auf geneigten/vertikalen Oberflächen unter Marsbedingungen (evtl. Analogie zu Solarzellen-Staubbelastungsdaten von Perseverance/InSight).

---

## 3. Habitatsegmentierung / Netto-Habitables-Volumen (NHV)

### Reale NASA-Standards
Nach dem NASA Human Integration Design Handbook (HIDH) bezeichnet Net Habitable Volume (NHV) das funktionale Volumen, das der Besatzung nach Abzug von Ausrüstung, Stauraum, Abfall und strukturellen Ineffizienzen zur Verfügung steht. Für einen Mars-Habitat wurde ein Mindestwert von 25 m³ pro Besatzungsmitglied ermittelt (150 m³ für eine 6-köpfige Besatzung), unter Berücksichtigung von Wohnbereich, Arbeitsplätzen, Ess-/Gemeinschaftsbereich, Sportbereich, Hygienebereich, Stauraumzugang und Bewegungswegen. ⟨Quelle nicht erhalten⟩ **[R]**

Eine andere Studie kam für ein Mars-Transit-Habitat auf einen NHV-Bedarf von 28–29 m³ pro Besatzungsmitglied. ⟨Quelle nicht erhalten⟩ **[R]**

Eine frühere NASA-Studie (2007) implizierte für das gesamte habitable Volumen ein absolutes Minimum von etwa 17 m³ pro Person, während der spätere, maßgeblichere 2015er-Bericht 25 m³ pro Person als Mindestwert empfiehlt. ⟨Quelle nicht erhalten⟩ **[R]**

### Skalierung auf 497 Personen [H]
Bei 25 m³/Person (konservativer, aktuellerer NASA-Mindestwert) ergibt sich ein **Mindest-NHV von ca. 12.425 m³** für die gesamte Kolonie. Das ist reine Nutzfläche/-volumen, **exklusive** Strukturwände, Luftschleusen, technische Systeme, Regolithabschirmung und Verbindungstunnel — die tatsächliche Bruttofläche wäre deutlich größer.

Ein Vergleichsprojekt (Deep Space Habitat) kam nach vollständiger Funktionsraum-Berechnung nach HIDH/NASA-STD-3001 zunächst auf eine übergroße Auslegung, die erst durch Aktivitäts-Zeitanteil-Analyse (gemeinsame Nutzung von Räumen zu unterschiedlichen Zeiten) um 24% reduziert werden konnte, zuzüglich 10% Wachstumsreserve — Endergebnis: 268 m³ funktionales Druckvolumen für die dort betrachtete Besatzungsgröße. ⟨Quelle nicht erhalten⟩ **[R]**

**Wichtige Methodik-Erkenntnis für SSF/OTA:** Die reale NASA-Praxis rechnet nicht einfach "Personen × Minimalvolumen", sondern reduziert über Mehrfachnutzung von Räumen (zeitversetzt) um bis zu 24%, plus 10% Wachstumsreserve obendrauf. Ein Mars-Habitat-Dossier für 497 Personen sollte diese Methodik übernehmen, nicht nur eine grobe Multiplikation.

### Segmentgröße 50–150 Personen [OFFEN]
Keine der gefundenen Quellen behandelt direkt die Frage der maximal sinnvollen Größe eines **unabhängigen** Habitatsegments (Druck-/Brandsegmentierung). Das ist eine eigenständige Sicherheitsfragestellung (Redundanz bei Dekompression/Feuer), keine reine Volumenfrage — hierzu wäre eine gesonderte Recherche zu Standards für Druckschottung sinnvoll (die HIDH selbst zieht laut Quelle 46 Unterwasser-/U-Boot-Analogien heran, die hier nicht vertieft wurden).

---

## Bonus: O₂/CO₂-Bilanz (Nebenprodukt, direkt für Punkt 3 der ursprünglichen Liste relevant)

Der reale NASA-Referenzwert (Baseline Values and Assumptions Document, BVAD) liegt bei 0,84 kg Sauerstoffverbrauch und 1,00 kg CO₂-Produktion pro Besatzungsmitglied und Tag, basierend auf einer durchschnittlichen Stoffwechselrate von 136,7 W/Person. ⟨Quelle nicht erhalten⟩ **[R]**

**Abgleich mit der internen Zielgröße:** 0,84 kg × 497 Personen = **417,5 kg O₂/Tag** (interne Annahme: 408 kg/Tag — Abweichung < 3%). 1,00 kg × 497 = **497 kg CO₂/Tag** (interne Annahme: 517 kg/Tag — Abweichung ca. 4%, plausibel durch höhere Aktivitätsannahme oder Sicherheitsmarge erklärbar). **Die bisherigen internen Zielgrößen sind damit gut durch reale NASA-Referenzwerte gedeckt** — anders als bei Energie/Thermalkontrolle ist hier keine grundlegende Neudimensionierung nötig, nur eine Bestätigung.

Reale ISS-Sauerstofferzeugungssysteme (Elektrolyse) liefern 2,3–9 kg O₂/Tag im Dauerbetrieb, üblicherweise ca. 5,4 kg/Tag pro Einheit. ⟨Quelle nicht erhalten⟩ **[R]** Für 417,5 kg/Tag Gesamtbedarf wären das ca. **77 parallele Elektrolyse-Einheiten** bei ISS-Maßstab — spricht stark für ein zentralisiertes Großanlagen-Konzept statt vieler ISS-großer Kleineinheiten. **[H, eigene Berechnung]**

---

## Bonus: Wasser-ISRU (Nebenprodukt, direkt für Punkt 2 der ursprünglichen Liste relevant)

Mars-Missionen (Odyssey, Phoenix, Curiosity) haben bestätigt, dass Wasser global über die Marsoberfläche verteilt vorkommt, mit Regionen von 8–10 Gewichtsprozent Wasser im obersten Meter des Regoliths. ⟨Quelle nicht erhalten⟩ **[R]** — eine wichtige reale Bestätigung für die interne Zielgröße "0,3–0,8 t/Tag Netto-Nachspeisung".

Eine Studie zur Wasserversorgung einer wachsenden Mars-Kolonie schätzt den Gesamtbedarf (Mensch plus Regolithverarbeitung, Fertigung, Perchlorat-Sanierung, Pflanzenanbau, Habitatwartung) auf ca. 1,2 kg/Stunde/Person; bei 90% Wasserrückgewinnungsrate (vergleichbar mit Salut/Mir/ISS) verbleibt ein ISRU-Bedarf von ca. 0,12 kg/Stunde/Person. ⟨Quelle nicht erhalten⟩ **[R]**

Skaliert auf 497 Personen: 0,12 kg/h × 497 × 24h = **ca. 1.430 kg/Tag (1,43 t/Tag)** Netto-ISRU-Bedarf — das liegt **deutlich über** der internen Zielgröße von 0,3–0,8 t/Tag. **[H, eigene Skalierung]** Mögliche Erklärung: Die interne Zielgröße bezieht sich vermutlich auf reinen Trinkwasserbedarf ohne die in der Studie mitgerechneten Industrie-/Landwirtschaftsanteile — diese Diskrepanz sollte SSF/OTA explizit klären, bevor eine Anlagengröße festgelegt wird.

Ein Prozessdesign zur Regolith-Wassergewinnung mittels Mikrowellenerhitzung erreicht bei 385 kg/h Regolith-Durchsatz einen Wasser-Output von 7,7 kg/h pro Verarbeitungseinheit. ⟨Quelle nicht erhalten⟩ **[R]** Bei angenommenem Bedarf von ca. 60 kg/h (1,43 t/Tag ÷ 24h) wären das **ca. 8 parallele Mikrowellen-Verarbeitungseinheiten** dieser Baugröße. **[H, eigene Berechnung]**

---

## Zusammenfassung: Was ist jetzt belastbarer als vorher?

| System | Status vorher | Status nach Recherche |
|---|---|---|
| Energie | reine Annahme (3–5 MW) | reale NASA-Referenzskala (Kilopower/FSP) gefunden, Skalierung auf 497 Pers. bleibt Näherung, aber jetzt an echten Ankerwerten |
| Thermalkontrolle | größte Wissenslücke | reale Flächenwerte (166–370 W/m²) und Stefan-Boltzmann-Grundlage vorhanden, Flächenbedarf grob eingrenzbar (8.000–36.000 m²), Mars-Staub-Frage bleibt offen |
| Habitatsegmentierung | unklare Dimensionierung | reale NASA-NHV-Standards (25 m³/Person) und Mehrfachnutzungs-Methodik gefunden, Segmentgrößen-Sicherheitsfrage bleibt offen |
| O₂/CO₂ (Bonus) | Zielgrößen ungeprüft | Zielgrößen durch BVAD bestätigt (< 5% Abweichung) |
| Wasser-ISRU (Bonus) | Zielgröße ungeprüft | Diskrepanz aufgedeckt (Zielgröße evtl. zu niedrig, falls Industrie-/Landwirtschaftsbedarf mitgemeint ist) |

## Offene Anschlussfragen für SSF/OTA

1. Soll die 3–5-MW-Energieannahme beibehalten oder auf Basis der Skalenrechnung (8–10 MW als obere Näherung) nach oben korrigiert werden?
2. Welche Radiator-Betriebstemperatur wird für das Mars-Thermalkontrolldossier festgelegt — das bestimmt den Flächenbedarf um den Faktor 2–4?
3. Mars-Staubablagerung auf Radiatoren: eigene Recherche nötig, hier nicht abgedeckt.
4. Wasser-ISRU-Zielgröße (0,3–0,8 t/Tag) vs. hier berechnete 1,43 t/Tag: welcher Bedarfsumfang ist tatsächlich gemeint?
5. Maximale Segmentgröße für unabhängige Druck-/Brandabschnitte: eigene Recherche zu Schottungsstandards nötig.

---

*Hinweis: Diese Recherche ersetzt keine OTA-TEC-Dossiers. Sie ist Rohmaterial zur Prüfung durch SSF/OTA vor Übernahme in kanonische Dokumente — analog zum bereits etablierten Evidenzaudit-Prinzip (RL-25-Lehre: Einzelwerte plausibel ≠ Kombination plausibel).*
