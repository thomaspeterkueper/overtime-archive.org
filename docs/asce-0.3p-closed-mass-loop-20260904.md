# ASCE 0.3P-A – Geschlossene Massenschleife

**Arbeitsstand:** 2026-09-04  
**Bezug:** ASCE 0.3P Packaging- und Architekturstudie / OTA-TEC-0027-2091-DE  
**Status:** Engineering Correction / vorläufig, nicht kanonisch  
**Zweck:** Rückkopplung höherer Bottom-up-Trockenmassen in Raketenphase, RFT-Systemmasse und Packaging schließen.

## 1. Anlass

Die bisherige Baseline 0.3P verwendete 55 t Dry Mass, 10 t Orbitalnutzlast und 5 t Betriebs-/Reststoffe, also 70 t Endmasse nach dem Hauptaufstieg. Neuere werkstoff- und wartungsorientierte Abschätzungen deuten darauf hin, dass ein hoch wiederverwendbarer ASCE-Orbiter deutlich schwerer werden kann. Die 50–55-t-Werte werden deshalb ab jetzt nur noch als **optimistische Bounding Cases** geführt und nicht mehr als bevorzugte Baseline behandelt.

Der zentrale Kopplungsfaktor bleibt für den Referenzfall

\[
R = \exp\left(\frac{6400}{465\,g_0}\right) \approx 4{,}069.
\]

Damit muss jede Änderung der Masse, die am Ende der Raketenphase noch vorhanden ist, unmittelbar in die Mode-Switch-Masse zurückgerechnet werden.

## 2. Geschlossene Referenzrechnung

Für 10 t Orbitalnutzlast und 5 t Betriebs-/Reststoffe ergeben sich folgende Fälle:

| Orbiter Dry Mass | Endmasse | Mode-Switch-Masse bei 6,4 km/s | Raketenpropellant | LOX bei O/F 5,5 | LH₂ Raketenphase |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 66 t | 81 t | ~329,6 t | ~248,6 t | ~210,4 t | ~38,2 t |
| **68 t** | **83 t** | **~337,8 t** | **~254,8 t** | **~215,6 t** | **~39,2 t** |
| 72,6 t | 87,6 t | ~356,5 t | ~268,9 t | ~227,5 t | ~41,4 t |

Der 68-t-Fall ist ein sinnvoller vorläufiger Mittelpunkt für die nächste Iteration, solange die Werkstoffstudie noch keine endgültige Bottom-up-Masse liefert.

## 3. Konsequenz für Study A – Pure SSTO

Wenn für die gesamte luftatmende Phase weiterhin rund 30 t LH₂ als Arbeitswert gelten, ergibt der 68-t-Dry-Mass-Fall zunächst:

- Mode-Switch-Masse: ~337,8 t
- vor dem Mode-Switch verbrauchtes LH₂: ~30 t
- reine Orbiter-Startmasse: ~367,8 t

Dieser Wert enthält noch keine zusätzlichen Designreserven, keine eventuelle Mehrmasse aus vergrößerten Tanks und keine Rückkopplung einer größeren Außenfläche auf TPS und Struktur.

Damit ist die alte 315-t-Baseline nicht mehr tragfähig, sobald Dry Mass in die Größenordnung von 68 t steigt.

## 4. Konsequenz für Study B – B25 RFT

Ein wesentlicher Punkt wird präzisiert: Die RFT verlagern primär **Volumen und früh abwerfbare Startmasse**, sie reduzieren nicht automatisch die für 6,4 km/s erforderliche Mode-Switch-Masse. Die Mode-Switch-Masse sinkt nur, wenn die RFT-Architektur den Orbiter selbst leichter macht, die Trajektorie verbessert oder andere bis zum Mode-Switch mitgeführte Masse eliminiert.

Für B25 werden 25 t der ca. 30 t LH₂ der luftatmenden Phase extern geführt. Bei einem konservativeren RFT-Trockenmassenbereich von 35–45 % der transportierten LH₂-Masse ergibt sich für beide RFT zusammen:

- externes LH₂: 25 t
- RFT-Trockenmasse gesamt: ~8,75–11,25 t
- verbleibendes internes LH₂ für die Luftphase: ~5 t

Bleibt die Orbiter-Dry-Mass bei 68 t unverändert, beträgt die Systemmasse am Start damit näherungsweise:

\[
337{,}8 + 30 + (8{,}75\ldots11{,}25) \approx 376{,}5\ldots379{,}0\ \mathrm{t}.
\]

Das ist **mehr** Gesamtmasse am Boden als bei Pure SSTO. Study B gewinnt also nicht automatisch über MTOW. Ihr primärer Nutzen ist:

1. drastisch kleineres internes LH₂-Volumen,
2. potenziell kürzerer/kompakterer Orbiter,
3. potenziell geringere interne Tank-, TPS- und Strukturmasse,
4. früh abwerfbare RFT-Struktur, die die Raketenphase nicht belastet.

Der Vergleich A/B25 muss daher über **Orbiter-Dry-Mass + internes Volumen + Rampenmasse + Separation + Turnaround** geschlossen werden, nicht über Startmasse allein.

## 5. Neuer RFT-Break-even

Für den 6,4-km/s-Referenzfall ist jede dauerhaft bis zum Ende der Raketenphase eingesparte Tonne Orbiter-Masse rund 4,07 t Mode-Switch-Masse wert. Das erlaubt eine klare Break-even-Frage:

> Wie viel Orbiter-Trockenmasse spart B25 tatsächlich durch kleinere interne LH₂-Tanks, kürzere Hülle, geringere TPS-Fläche und vereinfachte interne Struktur?

Erst wenn dieser Gewinn gegen RFT-Trockenmasse, Zusatzwiderstand, Separationstechnik und Starport-Infrastruktur gerechnet ist, kann Study B zum Referenzsystem erklärt werden.

Die RFT sind deshalb **ernsthaft aussichtsreich, aber noch nicht verpflichtend**.

## 6. Geometrie – P65 nicht vorzeitig kanonisieren

Eine kürzere Hülle kann TPS-Fläche, Biegemomente und Strukturmasse reduzieren. Der Schluss „kürzer ist immer leichter“ ist jedoch nicht automatisch gültig, weil das erforderliche Kryovolumen dann über größere Breite/Höhe zurückgewonnen werden muss. Das kann benetzte Fläche, Wellenwiderstand, Stirnfläche und thermische Lasten wieder erhöhen.

Daher werden P69 und P73 noch nicht verworfen. Der Suchraum wird aber in Richtung **P62–P69** verschoben; P73 bleibt nur als schlanker Kontrollfall bestehen.

Für jede Hülle ist nicht Länge allein, sondern mindestens zu vergleichen:

- nutzbares internes Kryovolumen,
- benetzte TPS-Fläche,
- Querschnittsflächenverlauf,
- Biegemomente,
- Transsonik-/Hyperschallwiderstand,
- Neutralpunkt und Schwerpunktverlauf,
- MPI-2-Türlastpfade,
- RFT-Integration.

## 7. Thermische Strukturkopplung

Die Kombination aus kryogenen Tanks, CFK-lastigen Strukturen und metallischen Knoten darf nicht als starr verbundene Struktur behandelt werden. Unterschiedliche Wärmeausdehnung und große Temperaturgradienten erfordern gezielt nachgiebige bzw. thermisch entkoppelte Lastpfade.

Für die nächste Strukturstudie sind daher als eigene Massenposten vorzusehen:

- thermisch entkoppelte Knoten,
- Gleit-/Flexurverbindungen,
- lokale Kugel-/Gelenklager nur dort, wo kinematisch sinnvoll,
- kryogene Isolationsabstände,
- Hot-Structure-zu-Cold-Structure-Interfaces,
- Lebensdauer-/Ermüdungsmarge über viele thermische Zyklen.

Die zusätzliche Masse dieser Interfaces darf nicht implizit im bisherigen Fachwerkbudget verschwinden.

## 8. Schwerpunkt und RFT-Separation

Schwerpunktwanderung wird zu einem eigenen Gate. Für Study A und B sind mindestens vier diskrete Zustände zu rechnen:

1. Start voll betankt,
2. unmittelbar vor RFT-Separation,
3. unmittelbar nach RFT-Separation,
4. Mode-Switch und Raketenphase bis MECO.

Für jeden Zustand sind x_CG, Neutralpunkt, statische Marge und notwendiger Trimmaufwand zu bestimmen. Die RFT sollen möglichst nahe am Gesamtschwerpunkt angebunden werden. Ein geometrisch günstiger, aber trimmdynamisch ungünstiger Montagepunkt ist nicht akzeptabel.

## 9. Starport und Magnetrampe

Eine Systemmasse nahe 380 t macht die Startinfrastruktur selbst zu einem Hauptsystem. Hohe kurzzeitige elektrische Leistung bedeutet jedoch nicht, dass ein Starport permanent einen Gigawatt-Kraftwerksblock benötigt. Entscheidend sind Impulsenergie, Startfrequenz und Speicher-/Netzarchitektur. Schwungräder, Kondensator-/SMES-Systeme oder andere 2091er Pufferspeicher müssen getrennt von der mittleren Netzleistung dimensioniert werden.

Die Rampe wird für die nächste Studie vorläufig auf **400 t Systemmasse mit Reserve** ausgelegt. Dieser Wert ist ein Infrastruktur-Designpunkt, keine kanonisierte ASCE-MTOW.

## 10. Orbit-Inklination

Ein fester Ost-Azimut darf nicht mit einem späteren großen Plane-Change verwechselt werden. Polar- oder sonnensynchrone Missionen benötigen geeignete Startazimute bzw. geeignete Starports und verlieren dabei den vollen äquatorialen Rotationsbonus. Eine pauschale zusätzliche Treibstoffmasse wird deshalb noch nicht kanonisiert.

Für die Missionsarchitektur sind getrennt zu rechnen:

- äquatornaher Oststart,
- mittlere Inklination,
- Polar/SSO von einem dafür geeigneten Korridor,
- eventuelle Dogleg-Verluste.

## 11. Gate 0.4A – erzwungene Reihenfolge

Vor einer Festlegung der ASCE-0.4-Außenform müssen nun folgende Schleifen geschlossen werden:

1. Bottom-up-Dry-Mass einschließlich TPS und thermischer Interfaces.
2. Endmasse = Dry + Betriebs-/Reststoffe + reale Nutzlast.
3. Raketen-Massenverhältnis und Mode-Switch-Masse neu integrieren.
4. Luftphasen-LH₂ aus einem konsistenten Trajektorien-/Triebwerksmodell bestimmen.
5. Study A und B25 mit identischem Missionsziel vergleichen.
6. B25-RFT-Masse, Separation und Rückkehr in die Startinfrastruktur einbeziehen.
7. P62/P65/P69/P73 über Volumen, benetzte Fläche und Aerodynamik vergleichen.
8. Schwerpunkt-/Neutralpunktverlauf schließen.
9. Erst danach Schub, Fahrwerk, Magnetrampe und endgültige Außenform dimensionieren.

## 12. Vorläufiges Urteil

Die neue Massenschätzung zerstört nicht die ASCE-Architektur, aber sie beendet die 55-t-/315-t-Arbeitsbaseline als bevorzugten Entwurf. Ein 68-t-Dry-Mass-Orbiter mit 10 t Nutzlast liegt bei etwa 83 t Endmasse und rund 338 t Mode-Switch-Masse. Pure SSTO läge mit dem bisherigen Luftphasen-LH₂ bereits bei ungefähr 368 t Orbiter-Startmasse. B25 kann das interne Packaging massiv verbessern, muss aber seine zusätzliche RFT-Hardware am Boden tragen und gewinnt erst dann systemisch, wenn es ausreichend Orbiter-Dry-Mass bzw. Betriebsaufwand einspart.

Der nächste ASCE-Schritt ist daher keine neue Zeichnung, sondern die **geschlossene Massen-/Volumen-/Schwerpunktiteration 0.4A**.