# TEM-025 — Resonanz-Feldsensor (isolierter Core-Vertical-Slice)

**Status:** Forschungsprototyp, kein Produkt- oder Kanon-Unlock. **Issue:** #920. **Voraussetzung:** reine, autoritative Feldproben aus bestehender noχ¹ᐃ-Weltsimulation. Die Simulation der Temenon-Wechselwirkung ist fiktiv.

## Nutzung
`scanResonanceField({ device, field, sensorPositionMeters, currentTick })` liefert eine unveränderliche, versionierte Beobachtung mit Quell-ID, Modellversion, Beta-Messwert, Phasen- und Kohärenzwert, Feldgradient, Fehlerwarnungen und kalkulierter Ladungsänderung. Keine Datenbank-, Besitz-, Weltzeit- oder NPC-Mutation. Berechtigter Command-Handler muss Besitz, Position, Geräteverfügbarkeit, vorhandene Ladung und Autorisierung **vor** Aufruf nachweisen und die Ladungsabbuchung genau einmal persistieren; nicht aus der Messausgabe automatisch eine Entdeckung konstruieren.

## Warum der Slice wertvoll ist
Er trennt vorhandene Zuständigkeiten: `laboratory` (Gebäude), `scanner` (Geräte-/Sensorfunktion), Weltzustand (Feldprobe), Core Commands (Besitz/Energie/autoritative Nutzung), Forschungs-Pipeline (ObservationSet), KG/OTA (Provenienz/Kanon) und NPC-Forscher (Interpretation). Das Modul liefert nur die deterministische **Messfunktion** dazwischen.

## G0-Lücken vor nutzbarer Spielausrüstung
- Wo liegen Geräte-/Inventar- und Autorisierungs-Commands? Nur dort darf der Scan ausgelöst/bezahlt werden.
- Wo läuft TEM-SIM v0.1, und wie wird dort die Feldprobe synchron zum autoritativen Tick bereitgestellt? Der angehängte Forschungsprototyp ist noch nicht integriert.
- Wie werden `ObservationSet` und Forschungsprovenienz persistent gespeichert, ohne eine zweite Forschungsdatenbank anzulegen?
- Welche vorhandene Geräteinteraktion in der UI ist für Scanner nutzbar?
- Wie werden Werkstatt, Fertigungsrezept, Materialbedarf, Techniker-Skills und Qualitätsprüfung an bestehende Produktionssysteme angebunden?
- Wie koppeln Gebäude/Innenraum, positionierte Geräte und NPC-Aufgaben auf denselben persistierten Zustand?

## Nächste Forschungsfragen (TEM-026)
1. Feldmessung versus unabhängige Phasenverriegelung: `betaEff` misst Controller-Ausgang, nicht automatisch biologische Wirkung.
2. Referenz-Phasendifferenz und räumliche Gradientmessung mit echten Stichproben statt Eingabewert.
3. Kalibrierung und Unsicherheit mit Blindproben; False-Positive-Rate.
4. Minimalenergie: wiederaufladbare Batterie, Sensorrauschen, Kosten je Messung und Quench-Grenzwerte.
5. Technologischer Entstehungsweg: Hypothese → reproduzierbares Resultat → Erfinderentwurf → Technikerprototyp → Rezept → autorisierte Produktion → reales benutzbares Objekt.

## Lokale Tests
`tsc lib/game/temenon/resonanceFieldSensor.ts lib/game/temenon/resonanceFieldSensor.test.ts --target ES2022 --module commonjs --moduleResolution node --skipLibCheck --types node --outDir .temenon-sensor-test && node --test .temenon-sensor-test/resonanceFieldSensor.test.js`

**Keine** Migration, Tick-Schleife, aktive Spielregel oder OTA-Kanon-Datei wurde verändert.
