# OTA-REQ-20261030-001 – OTA-SCI-0026-2025-DE (SABRE-Vorkühler): Realgrundlage aktualisieren

Status: open
Datum: 2026-10-30
Quelle: Begutachtung nach ECO-ARC-0037 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-10-30-OTA-SCI-0026-2025-DE.md`
Betrifft: [R]/[T]-Abschnitte (I, II, III, V, VI, Quellen). Die 2091-Extrapolationen (SABRE-XII, Inconel-X, VII) sind Setzung und bleiben unberührt; Punkt 1 berührt aber die Weltlinie.
Claude-Status: wartet auf Thomas

## Befunde und Änderungsvorschlag

1. **Reaction Engines insolvent (neu, Weltlogik):** Reaction Engines Ltd. und die US-Tochter sind am 31. Oktober 2024 in die Administration gegangen und haben den Betrieb eingestellt; SABRE wurde nicht weiterentwickelt, ein Käufer für die Technologie ist nicht belegt (Stand Recherche 2026-10-30). – Quellen: PwC, Administrator-Seite „Reaction Engines Limited“; The Register, 01.11.2024; FlightGlobal (2024). [R]. Das Dokument (Stand Januar 2026) erwähnt das nicht; die Tabelle 4.1 nennt „SABRE-4 · 2025 · TRL 5“ als Gegenwart und VII.2 „Skylon (UK) Prototyp 2050er“. Vorschlag: Abschnitt „Stand 2026: Programm nach Insolvenz eingestellt“ in [R] ergänzen. **Entscheidung für Thomas:** Wie kommt SABRE in der OTA-Weltlinie trotzdem zu Skylon/ASCE (z. B. Übernahme der Rechte, staatliches Programm)? Das ist Setzung und gehört nicht in die Realgrundlage.
2. **Kühlmedium (1.2, 2.1):** Im SABRE-Vorkühler zirkuliert gasförmiges Helium im geschlossenen Kreislauf, das seine Wärme an den Flüssigwasserstoff abgibt; „Flüssiges Helium (−253 °C)“ ist falsch (−253 °C ist die Siedetemperatur von H₂; Helium siedet bei −269 °C). – Quelle: Varvill & Bond, JBIS 61 (2008), bereits im Quellenverzeichnis. [R].
3. **HTX-Test 2019 (3.1):** Es war ein Bodentest in Colorado (Colorado Air and Space Port) mit Luftstrom über 1.000 °C, der Mach-5-Bedingungen *simuliert*; gekühlt wurde in weniger als 1/20 s (≈ 50 ms), nicht „< 10 ms“, und es war kein Windkanal mit Mach-5-Luftgeschwindigkeit. Endtemperatur „−150 °C“ und „Anti-Icing durch Helium-Warmzone“ in den öffentlichen Mitteilungen nicht belegt. Quelle „HTX Ground Test Campaign Final Report, 2019“ nicht auffindbar – durch die Mitteilung der UK-Regierung „Reaction Engines precooler test hits Mach 5“ (Okt. 2019, 2022 zurückgezogen) bzw. Pressemitteilungen von Reaction Engines ersetzen. Tabelle 5 („< 10 ms gemessen“, „Mach 5 luftatmend erreicht“) entsprechend korrigieren. [R].
4. **Rechnung 2.2:** Mit p₂/p₁ = 28 ergibt die Adiabatengleichung T₂ ≈ 570 K, nicht 1.273 K. Die ~1.000 °C sind die Staupunkttemperatur bei Mach 5: T₀ = T(1 + 0,2·M²) ≈ 220 K · 6 ≈ 1.320 K. Vorschlag: Rechnung über T₀ führen. Außerdem widersprechen sich 1.200 MW (Tabelle 1.2) und 520 MW (2.2) – auf einen belegten Wert vereinheitlichen (Literaturwerte für den Vorkühler liegen in der Größenordnung von einigen hundert MW; am Original prüfen).
5. **Schub-Widerspruch:** Tabelle 4.2 nennt 400 kN je SABRE-XII, Tabelle V „800 kN (2091)“ (= zwei Triebwerke, VII.1). Einheitlich kennzeichnen.
6. **Zitat Alan Bond 2019 (Kopf):** In der Recherche nicht belegbar. Als Kuratorparaphrase kennzeichnen oder streichen. Grammatik „ein thermisches Todeslotterie“.
7. **Status-Feld im Kopf:** „Status: Kanonisch“ vs. Frontmatter `AKTIV` – angleichen.

## Wirkung

- `OTA-SCI-0029-2025-DE` (SSTO-Massenbudget) und `OTA-TEC-0027-2091-DE` (ASCE-Shuttle) stützen sich auf SABRE – bei deren Begutachtung Punkt 1 und 2 mitprüfen.
- Andere Repositories: keine direkte Wirkung erkannt.
