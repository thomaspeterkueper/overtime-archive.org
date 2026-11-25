# TEM-028 — Zweikanal-Messung und Grenzen der Ursachenzuschreibung
Status: Forschungsentwurf, nichtkanonisch, keine Live-Integration · 25.11.2026

## Forschungsfrage
TEM-027 demonstrierte: Ein gemeinsamer äußerer Zeitgeber erzeugt hohe Phasenverriegelung (PLV), ohne Temenon-Kopplung. Kann eine **differenzielle** Zweikanal-Messung (Phasenkohärenz plus Materialantwort) falsche Temenon-Befunde reduzieren?

## Verfahren
Für denselben Sensor und dasselbe Simulationsmodell werden Kontroll- und Interventionsphasen aufgezeichnet. Aus unabhängigen Rohsignalen wird die Phasenverriegelung (PLV) geschätzt. Ein zweiter Messkanal liefert eine Materialresonanz-Amplitude. Vor dem Test fixierte Schwellen: PLV-Differenz >=0,5 und Materialantwort-Differenz >=0,25. Beides muss positiv sein. Mindestens 64 Proben/Arm. Es werden KEIN betaCommand oder betaEff eingelesen. Kein Weltzeit-/Inventar-/NPC-Eingriff.

## Synthetisches Holdout-Protokoll
100 Seeds je Klasse, 128 Proben/Arm, Seeds 30000–30099, vier Klassen: Null, Signal, gemeinsamer äußerer Takt, gekoppelte Störursache. Fixture und Schwellwerte sind ausdrücklich nur ein leichtes, modelliertes Testbett; keine unabhängige Validierung und kein realistischer Detektornachweis.

Ergebnis (lokal ausgeführt): Signal 100/100 Kandidaten, Null 0/100, gemeinsamer Takt 0/100, **gekoppelte Störursache 100/100 falsch-positive** Kandidaten. 13/13 Verhaltenstests grün.

## Erkenntnis
Eine Mehrkanalmessung kann den *spezifischen* Fehler des TEM-027-Tests vermeiden, ist aber **kein kausaler Beweis**. Ein anderer Mechanismus, der beide Kanäle beeinflusst, imitiert das gewünschte Muster. Ein "candidate-intervention-effect ist daher kein "verified-temenon-field und darf weder automatisch den Kanon ändern noch ein Produkt freischalten.

## TEM-029
Mehrere unabhängige Sensorgeräte, Blind-Randomisierung, Sham-Interventionen, getrennte Umwelt-/Instrumentenvariablen, Cross-site-Replications, vorregistrierte Entscheidungsregeln, Unsicherheits- und Driftmessung. Die Bedingungen für die Kontrolle sind experimentell und in der fiktionalen Simulationswelt zu spezifizieren.

## NOXIA-Anbindung
Kompatibel nur als reine Forschungsauswertung. Für ein wirklich benutzbares Produkt fehlen autoritative Inventar-, Energie-, Herstellung-, UI- und persistente Beobachtungs-Commands; daraus entsteht kein paralleles Simulationssystem.

Referenzen: NOXIA #920, NOXIA PR #921, OTA PR #232, TEM-025/026/027.
