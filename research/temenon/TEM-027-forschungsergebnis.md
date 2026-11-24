# TEM-027 — Gemeinsamer Zeitgeber als Scheinnachweis
Datum: 24.11.2026 · Forschungsstatus: simuliertes Negativergebnis, nicht kanonisiert

## Beobachtung
TEM-026 PLV-Schätzer bei Schwelle 0,6: 200/200 einfach konstruierte synthetische Tests richtig. Eine neue Gegenprobe erzeugte 100 **unverbundene, aber vom selben externen Takt getriebene** Signale. In allen 100 Fällen wurde PLV-basierte Synchronisation erkannt (100/100 falsch positive Befunde bezüglich **Temenon-Ursache**).

## Aufbau
- 100 deterministische Varianten, Seeds 20000–20099, je 128 Werte.
- Referenzphase 0,23 rad pro Simulations-Tick.
- Kontrollsignal erhält dieselbe Referenzphase plus einen kleinen sinusförmigen Fehler von 0,15 rad.
- **Kein fiktiver Temenon-Kopplungsparameter wird gesetzt.** Beide Prozesse teilen bloß einen gemeinsamen äußeren Zeitgeber.
- PLV-Prüfung mit festem Schwellenwert 0,6.

## Interpretation
PLV misst eine statistische Phasenbeziehung, nicht deren kausale Herkunft. Ein hoher Wert ist mit Temenon, gemeinsamer Temperatur-/Lichtsteuerung, instrumenteller Kopplung oder mit synthetischer Synchronisation vereinbar. Die gegenwärtige Hypothese „hohe PLV beweist Feldkopplung“ ist damit für den Scanner als Beweiskriterium **widerlegt**; eine feldspezifische Messung bedarf weiterer Observablen.

## Konsequenzen für das Modell
1. `phaseLockDetected` strikt von `temenonFieldInferred` und `verifiedField` trennen.
2. Negative Kontrollen: unabhängige Taktgeber, Sham-Generator, invertierte Referenzphase, abgeschirmter Prüfling.
3. Kausaltest: Vorab festgelegte Intervention und Vergleich mit Umweltkonfundierungen.
4. Zwei weitere unabhängige Modalitäten: spektrale Materialantwort / räumlicher Gradientenverlauf (fiktionales Modell), nicht bloß zwei ähnliche Phasensensoren.
5. Physikalische Parameter dürfen nicht durch dieselbe Formel erzeugt und anschließend per „unabhängigem“ Sensor bestätigt werden.
6. Forschungsausgaben sind Modellprüfungen, nicht Nachweise einer real existierenden Temenon-Technologie.

## Nächster Versuch TEM-028
Präregistrierte gemischte Nullzustände mit gemeinsamen Zeitgebern, Phasendrift, intermittierender Synchronisation, Messfehlern, unbekannten Materialien. Vergleiche einfache PLV gegen Mehrkanal-Schätzer auf vollständig getrennten Geräten/Seeds. Berichte Sensitivität, Spezifität, Konfidenzintervalle und negative Ergebnisse.

## Umsetzung
TEM-026 ist als Draft-PR #921 im NOXIA-Repository angelegt. Dieser Bericht ist eine zusätzliche Forschungsnotiz. Kein Merge und keine Live-Freischaltung.