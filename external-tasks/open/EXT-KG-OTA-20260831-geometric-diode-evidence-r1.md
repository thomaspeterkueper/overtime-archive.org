---
id: EXT-KG-OTA-20260831-geometric-diode-evidence-r1
title: OTA-TEC-0028 an korrigierten Geometrische-Dioden-Audit R1 angleichen
status: open
source: KG
target: OTA
created: 2026-08-31
requested_by: research-validation-loop
priority: high
affects: [KG, OTA]
---

## Anlass

Research Candidate `RES-20260831-3DEACC8E` wurde nach kritischer Prüfung als R1 korrigiert. Der physikalische Kern von OTA-TEC-0028 ist real, mehrere bibliografische und quantitative Angaben der aktuellen OTA-Fassung sind jedoch falsch oder nicht aus den Primärquellen ableitbar.

## Anforderung an OTA

Bitte `src/content/documents/OTA-TEC-0028-2048-DE.md` gegen R1 abgleichen.

### Birch et al.

Als realen Anker verwenden:

- Titel: `Nanosculpted 3D helices of a magnetic Weyl semimetal with switchable non-reciprocal electron transport`
- Journal: `Nature Nanotechnology 21, 352–358 (2026)`
- DOI: `10.1038/s41565-025-02104-x`
- online publiziert am 21.01.2026
- Co3Sn2S2-Helices per FIB
- Länge 3–14 µm
- Durchmesser 1–4 µm
- Pitch 0,5–2 µm
- Messungen 10–190 K
- nichtreziproker Transport bei null angelegtem Magnetfeld

Nicht als `[R]` aus dieser Primärquelle führen:

- 250–500 nm Spiralweite als Helixdurchmesser,
- 800–1200 nm Strukturhöhe,
- 5–8 Windungen,
- Gleichrichtungsverhältnis 50:1–200:1,
- Materialkosten `$5000/cm²`,
- angebliche Demonstrationsgrenze `<77 K`,
- Raumtemperaturbetrieb der Co3Sn2S2-Helix.

Diese Werte entweder entfernen oder als klar fiktionale/hypothetische spätere Gerätegeneration markieren, falls OTA sie aus Weltgründen behalten will.

### Vogel et al.

Als getrennten Mechanismus führen:

- `A Switchable One-Compound Diode`
- Advanced Materials 35(2), 2208698 (2023)
- DOI `10.1002/adma.202208698`
- First Published 25.10.2022
- Ag18Cu3Te11Cl3 als room-temperature pnp-switching material / Einmaterial-Diode.

Die Vogel-Diode nicht als Bestätigung des geometrischen Co3Sn2S2-Mechanismus behandeln. Beide Arbeiten sind unterschiedliche physikalische Anker.

## Source-of-Truth-Grenze

OTA besitzt Volltext und Weltsetzung. KG hält den nicht-kanonischen Research Candidate. Fiktionale Generationen, Kostenprojektionen, AVI-Kopplungen und NOXIA-/Balancingwerte werden durch den Audit nicht validiert.

## Erwartetes Ergebnis

OTA-TEC-0028 trennt das real demonstrierte physikalische Prinzip von fiktiven Gerätekennzahlen; Bibliografie, Geometrie und Temperaturbereich der Birch-Arbeit sind korrekt; Vogel bleibt ein separater Einmaterial-Dioden-Anker.

## Referenz

- Research ID: `RES-20260831-3DEACC8E`
- Revision: `R1 — critical-review correction`
- KG-Pfad: `research/candidates/RES-20260831-3DEACC8E.md`
