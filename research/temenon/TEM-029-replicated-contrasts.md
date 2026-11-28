# TEM-029 – Replikation, Störkanäle und kausale Identifizierbarkeit

**28. November 2026 · Forschungsentwurf · nicht kanonisch · nur fiktive Temenon-Simulation**

## Fragestellung
TEM-028 trennt den gemeinsamen äußeren Takt von interventionsspezifischer Synchronisation, kann aber durch gekoppelte Störungen von Phasen- und Materialmessung getäuscht werden. TEM-029 prüft deshalb Sham-/Aktiv-Kontraste aus **drei separaten Instrumenten in unterschiedlichen Umgebungen**, ergänzt um einen beobachteten Störkanal.

## Festgelegte Auswertungsparameter
- Mindestzahl unabhängiger Instrument-IDs: 3; mindestens 2 unterschiedliche Umgebungs-IDs.
- Mindeständerung der Phasenkohärenz: 0,20.
- Mindeständerung der Materialantwort: 0,25.
- Maximal akzeptierte Änderung im Störkanal: 0,10.
- Maximale relative Streuung der Instrumente: 0,20.
- Jeder Messblock trägt Block-ID, Instrument-ID, Umgebungs-ID, Modellversion und gemeinsame Preregistrierungs-ID.
- Der Schätzer ist eine reine, deterministische Auswertung. Er liest weder betaCommand noch betaEff aus einem Generator.

## Synthetischer Holdout (5 Szenarien, je 200 Seeds = 1000 Fälle)
| Szenario | Modellierte Ursache | Ergebnis |
|---|---|---|
| Zielsignal | Interventionsabhängige Phasen- und Materialänderung ohne gemessene Störung | 200/200: replicated-candidate |
| Nullmodell | Keine Interventionsänderung | 200/200: not-established |
| Gemeinsamer Takt | Phasensignal auch im Sham-Zustand | 200/200: not-established |
| Beobachtbare gemeinsame Störung | Aktivzustand verändert zusätzlich Störkanal | 200/200: confounded-or-inconclusive |
| Verborgene selektive Störung | Nicht gemessene Ursache imitiert beide Zielkanäle | 200/200: replicated-candidate (**200 falsch-positive Ursachenzuschreibungen**) |

Die Fälle sind **künstlich konstruiert und leicht separierbar**, nicht unabhängig beobachtete Naturdaten. Die Ergebnisse belegen ausschließlich das Verhalten dieses Modells. Selbst mehrere übereinstimmende Geräte schließen eine verborgene gemeinsame Störursache nicht logisch aus.

## Technische Dateien
- `lib/game/temenon/causalSensor.ts`: evaluateReplication, fixture, reine Projektion.
- `lib/game/temenon/causalSensor.test.ts`: 15 Verhaltenstests, darunter 1000 synthetische Fälle in fünf Gruppen.
- Forschungsanker: https://github.com/thomaspeterkueper/noxiagame/issues/920
- Entwicklungs-PR: https://github.com/thomaspeterkueper/noxiagame/pull/921

## Wissenschaftliche Konsequenz
**Drei Instrumente und ein Störkanal sind noch kein kausaler Beweis.** In künftigen Experimenten müssen wir einen kontrollierten Mechanismus verändern, der nur bei einer echten Temenon-Kopplung wirken dürfte, und konkurrierende Hypothesen vorab quantitativ spezifizieren. Selbst dann bleibt die Aussage an die geprüfte Modellklasse gebunden.

Ein Spiel-Institut darf `replicated-candidate` nur als vorläufige Evidenz kennzeichnen, nicht als automatischen Tech-Unlock. Negative Resultate und Fehlalarme bleiben persistent und überprüfbar.

## TEM-030 – Mechanismusorientierter Interventionsversuch
1. Blind randomisierte Aktiv-/Sham-Zuteilung auf Geräte- und Umgebungsniveau.
2. Orthogonale Eingriffe: Referenztakt ändern, Resonator-Geometrie ändern, Sensor-Kopplung/Abschirmung ändern.
3. Prädiktionen unter mindestens drei konkurrierenden Modellen: Temenon-Kopplung, gemeinsame Taktquelle, Sensor-/Materialartefakt.
4. Vorab festgelegte Auswertung mit Unsicherheit, Power-/Sample-size-Plan und alternativen Kausalgraphen.
5. Einheitliche ExperimentPlan/ObservationSet/ResearchFinding-Provenienz; keine reale Temenon-Behauptung.

**Status:** Noch keine Spiel-Integration, kein Merge, keine Produktionsmigration, kein Kanon-Commit.

## Spiegelablage
Google Drive: https://docs.google.com/document/d/14CcyvJSeOktEXSrLPISuMDVKmwwWl-qMgeUOZLC8-nU/edit
NOXIA Code: https://github.com/thomaspeterkueper/noxiagame/pull/921
