---
id: EXT-KG-OTA-20260831-mars-fahrwege-evidence-alignment
title: Evidenzabgleich OTA-TEC-0090 Mars-Fahrwege und Straße-vs.-Schiene-Trade-off
status: open
source: KG
target: OTA
created: 2026-08-31
requested_by: research-validation-loop
priority: medium
affects: [KG, OTA]
---

## Anlass

Research Candidate `RES-20260831-TEC0090A` wurde nach kritischer Zweitprüfung als **R1** korrigiert. Die ursprüngliche Grundrichtung bleibt erhalten, aber mehrere Aussagen müssen enger gefasst werden: Mond-Demonstratoren sind keine Mars-Betriebsbelege, Simulanten- und InSight-Werte sind material- bzw. standortspezifisch, und terrestrische Rail-vs.-Truck-Effizienzfaktoren dürfen nicht direkt als Marswerte übernommen werden.

## Gewünschte Änderung

OTA-TEC-0090 gegen den korrigierten Audit R1 abgleichen und insbesondere:

1. Geotechnische Werte aus Mars-Simulanten und InSight nur als konkrete, quellengebundene Einzelbefunde führen. Keine Reibungswinkel-, Kohäsions-, Bearing- oder Penetrationswerte als planetenweit typische Mars-Bemessungswerte darstellen.
2. Planieren, Verdichten und lokale Stabilisierung als plausible bzw. experimentell gestützte Verfahren beschreiben, den tatsächlichen Nutzen aber von Boden, Fahrzeug, Rad-/Kettengeometrie und Verkehrsprofil abhängig lassen.
3. PAVER, Mason, Mikrowellensintern und vergleichbare Demonstratoren als Technologie-/Entwicklungsanker führen. Soweit die Evidenz lunar oder simulantenbasiert ist, darf daraus keine einsatzreife Marsfahrbahn abgeleitet werden.
4. Wiederholte Radlast, Rutting und Trafficability als reale Terramechanik-Anker berücksichtigen. Die im ersten Audit genannte 900-Pass-Angabe nicht GATOR zuschreiben; sie gehört zur separaten SpaceFactory/MTU-Demonstration.
5. FLOAT und LunA-10 als reale Mond-Konzeptstudien für Guided Transport kennzeichnen, nicht als Mars-Betriebsevidenz.
6. Terrestrische Aussagen wie „Schiene ist 3–4× energieeffizienter als LKW“ ausdrücklich nur als Analoganker verwenden. Für Mars müssen Bauenergie, importierte/lokale Komponenten, geringe Gravitation, Traktion, Staub, Wartung, Redundanz, Flexibilität, Frachtvolumen und Netzauslastung neu bilanziert werden.
7. Keinen universellen Umschaltpunkt Piste → befestigte Straße → Schiene setzen. Ein belastbarer Crossover erfordert mindestens Frachtmenge, Distanz, Frequenz, Lebensdauer, Trassenbauenergie, Wartung, Ersatzteile, Energie je Tonnenkilometer, Ausfallfolgen und Flexibilitätswert.
8. Konkrete Breiten, Achslasten, Geschwindigkeiten, Baukosten, Energieboni, Rail-Unlocks, Tonnageschwellen und Netzgeometrien weiterhin als `[OFFEN]` bzw. NOXIA-eigene Werte behandeln.

## Begründung

Die stärkste belastbare Aussage lautet nicht „Straße zuerst, Schiene später“, sondern: **Die optimale Transportinfrastruktur ist eine standort-, fahrzeug-, distanz-, last- und throughputabhängige Systementscheidung. Für Mars existiert 2026 kein belastbarer universeller Road-to-Rail-Crossover.**

Die Revision verhindert insbesondere drei Fehlübertragungen: Mond → Mars, Simulant/Einzelstandort → globaler Marswert und terrestrische Rail-Effizienz → Mars-Systemwert.

## Source-of-Truth-Grenze

Der Knowledge Graph hält `RES-20260831-TEC0090A` ausschließlich als Research Candidate. OTA entscheidet über Änderungen an OTA-TEC-0090 und bleibt Source of Truth für das Archivdokument. NOXIA bleibt Source of Truth für Gameplay-, Kosten-, Unlock- und Balancingwerte.

## Erwartetes Ergebnis

OTA-TEC-0090 trennt `[R]`, `[H]` und `[OFFEN]` sauber; Mond-/Simulantenbelege werden nicht als Mars-Betriebsdaten ausgegeben; Schienenvorteile bleiben bedingungsabhängig; kein unbelegter Mars-Bemessungswert oder universeller Road-to-Rail-Crossover wird kanonisiert.

## Referenz

- Research ID: `RES-20260831-TEC0090A`
- Revision: `R1 — critical-review correction`
- KG-Pfad: `research/candidates/RES-20260831-TEC0090A.md`
