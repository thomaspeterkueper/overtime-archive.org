# TEM-026 — Vom Feldsensor zur überprüfbaren Temenon-Forschung

**24.11.2026 · nichtkanonischer Forschungsentwurf, Bezug: NOXIA #920 / TEM-025**

## Was der Sensor tatsächlich misst

Der TEM-025-Prototyp ist ein **reines Auswertungsmodul**: Er übernimmt `betaEff`, `coherence`, Referenzphase und Gradienten aus einer extern bereitgestellten autoritativen Simulationsprobe. Damit misst er im physikalischen Sinn **nicht unabhängig**; er zeigt und klassifiziert nur Werte der fiktiven Modellwelt. Dies ist richtig für einen ersten Gameplay-Adapter, aber es reicht nicht für eine wissenschaftliche Prüfung von Temenon.

## Forschungsfrage

**Kann ein Beobachter das Feld aus voneinander unabhängigen Rohsignalen schätzen, ohne den internen Reglerwert `betaCommand` oder `betaEff` zu kennen?**

### Nullhypothese H0

Die Rohsignale erlauben keine zuverlässigere Erkennung des fiktiven Feldzustands als ein blindes Kontrollmodell mit denselben Umweltschwankungen.

### Gegenhypothese H1

Über einen vorab festgelegten Testbereich unterscheiden phasen- und frequenzbasierte Beobachtungen Feld- und Nullzustände reproduzierbar; selbst unter Materialdefekten, Sensorrauschen, Temperaturdrift und Verdeckung.

## Experiment TEM-026A: Doppelblinde Messung

1. Ein Generator erzeugt mit festem Seed im *Simulationsmodell* Phasenverläufe und experimentelle Zustände. Der Reglerwert bleibt dem Sensor verborgen.
2. Der Sensor erhält nur separat verrauschte zeitgestempelte Signalreihen mit Instrumenten-ID und Kalibrierhistorie.
3. Ein unabhängiger Schätzer ermittelt Phasenbindung, Unsicherheitsbereich, Erkennungsrate und Fehlalarmrate.
4. Negative Kontrollen: Generator aus, Referenztakt geändert, Schichtung deaktiviert, thermische Störung, Placebo-Rohsignal.
5. Train-/Test-Trennung über Seeds, Materialien und Umweltparameter. Keine nachträgliche Zielwertoptimierung.

## Messgrößen

- **Referenzphasendifferenz:** `delta_phi_i(t) = wrap(phi_i(t) - phi_reference(t))`.
- **Phasenverriegelung (PLV):** `PLV = abs(mean(exp(1j * delta_phi_i(t))))` über Fenster mit genügend Stichproben.
- **Geschätzte Kopplung:** `beta_est` aus unabhängigen Sensorparametern, getrennt von `betaCommand` und `betaEff`.
- **Kalibrierung:** Bias, Streuung, Drift, Messunsicherheit und Wiederholbarkeit.
- **Klassifikation:** Precision/Recall, Fehlalarmrate, Konfidenzintervalle, Baselinevergleich.

Ein hoher PLV beweist *nicht* biologische Verjüngung. Selbst ein positiver Befund wäre zunächst nur eine erfolgreiche **Simulation des angenommenen Kopplungsmechanismus**.

## Experiment TEM-026B: Wissenschaftler-, Erfinder-, Techniker-Kette

- Wissenschaftler-NPC entwirft Blindtest und bewertet nach festgelegtem Protokoll Resultate.
- Erfinder-NPC schlägt aus Messanforderungen das Design eines tragbaren Feldsensors vor.
- Techniker-NPC setzt Stückliste, Fertigungsrezept, Kalibrierung, Batterie und Wartungsplan um.
- Erst nach Replikation, Fertigung und Core-Abnahme entsteht ein echtes Inventarobjekt mit Scan-Capability.
- Bei negativen Ergebnissen wird der Entwicklungsstand nicht freigeschaltet, sondern der Hypothese widersprochen.

## Die entdeckten technischen Lücken

1. **Weltzustand:** Ein autoritativer Temenon-Feldzustand fehlt derzeit als belegte Integration.
2. **Messprozess:** Sensor muss aus Rohdaten schätzen; direkte Anzeige des Modellwerts ist keine unabhängige Messung.
3. **Core-Kommandos:** Besitzprüfung, Entfernung, Ladung und idempotente Scan-Abbuchung fehlen im isolierten Modul.
4. **Persistenz:** ObservationSet mit Provenienz, Modellversion, Gerätezustand und Replay-Seed muss an die bestehende Forschungsschicht angebunden werden.
5. **Produktpipeline:** Werkstatt, Rohstoffe, Fertigungsqualität, Reparatur, NPC-Arbeit, Vertrieb und Spielerinteraktion müssen bestehende Systeme wiederverwenden.
6. **Ethik/Kanon:** Daten aus fiktiver Simulation sind nicht empirische Physik und dürfen OTA/KG-Kanon nicht ohne Review verändern.

## Priorität der nächsten Arbeiten

**P0:** Vorhandenen NOXIA-Core-Workflow für Geräte, Energie, Forschung und Inventar identifizieren.
**P1:** TEM-026A als isolierten blinden Experimenttest implementieren, getrennt vom Regler.
**P2:** TEM-025 über bestehende Core-Befehle als herstellbares, tragbares Scannergerät anbinden.
**P3:** TEM-026B über bestehende NPC-Aufgaben und Forschungsergebnisse bis zu einem tatsächlich verwendbaren Produkt durchführen.

**Quelle:** Benutzerseitige Temenon-Referenz v2.1 und Hayashi-Okonkwo-Monographie v2.1; ausführbare TEM-025-Sensorprojektion. Nichts davon ist ein Nachweis für reale Temenon-Technologie.