# ASCE 0.3P – Packaging- und Architekturstudie

**Arbeitsstand:** 2026-09-04  
**Bezug:** OTA-TEC-0027-2091-DE  
**Status:** Engineering Study / vorläufig, nicht kanonisch  
**Zweck:** Physikalisch und konstruktiv belastbare Neuauslegung der ASCE-Klasse vor einer Revision von OTA-TEC-0027.

## 1. Architekturentscheidung

Die weitere ASCE-Entwicklung folgt einer gemeinsamen Orbiter-Grundarchitektur mit zwei Zertifizierungsständen und modularen Missionsnutzlasten.

- **Gemeinsamer ASCE-Bus:** Primärarchitektur, Tankgeometrie, SABRE-XII, TPS, Fahrwerk, Avionikplattform, RCS und MPI-2-Schnittstelle.
- **ASCE-C (Cargo):** primär unbemannter Betrieb, höhere zulässige Lastvielfache, geringere Human-Rating-Masse; Arbeitspferd der Flotte.
- **ASCE-P (Personnel):** menschenzertifiziert, zusätzliche Redundanz, Druck-/Sicherheitsfunktionen und strengere Beschleunigungsgrenzen.
- **MPI-2:** physische Nutzlastschnittstelle mit zwei Anschlusszonen. Sie kann zwei kurze Module oder ein langes Verbundmodul aufnehmen. Die beiden Positionen besitzen kein starres Einzelmassenbudget; maßgeblich ist das gemeinsame Orbitalnutzlastbudget.
- Labor-, Medizin-, Bergungs-, Inspektions-, Versorgungs- und Satellitenmissionen werden über Module realisiert, nicht über zusätzliche Baureihen.

Die Architektur vermeidet sowohl eine Vielzahl teurer Zellvarianten als auch den unnötigen Transport aller Human-Rating-Systeme auf reinen Frachtmissionen.

## 2. Baseline 0.3P

Die Werte in diesem Abschnitt sind **Arbeitsannahmen**. Sie ersetzen noch nicht den Kanon von OTA-TEC-0027.

| Parameter | Arbeitswert / Suchraum |
| --- | ---: |
| Referenzrolle | vollständig wiederverwendbarer orbitaler Transporter |
| Personenbetrieb | 12 Personen nominal |
| Orbitalnutzlast Baseline | 10 t gesamt, inklusive Modulmasse |
| Nutzlastsystem | MPI-2, zwei Anschlusszonen |
| Dry-Mass-Ziel Referenz | 55 t |
| Dry-Mass-Prüfbereich | 50–60 t |
| Reserven/Betriebsmedien | ca. 5 t |
| Referenz-Endmasse nach Hauptaufstieg | 70 t |
| Referenz-Δv Raketenphase | 6,4 km/s |
| Sensitivität | 6,0 / 6,4 / 6,7 km/s |
| SABRE-XII Vakuum-Isp | ca. 465 s |
| Mode-Switch | Mach ~5, ca. 25–28 km |
| Raketen-Gesamtschub | 3,6–4,0 MN Ziel; 3,2 MN Untergrenze der Untersuchung |
| Zielbahn | typische Einsatzbahn 200–400 km LEO |
| Geometrischer Suchraum | ca. 60–75 m Länge, breiter Lifting Body |

### 2.1 Raketenphasen-Massenverhältnis

Für den Referenzfall gilt näherungsweise:

\[
R = \exp\left(\frac{6400}{465\,g_0}\right) \approx 4{,}07
\]

Damit ist jedes Kilogramm, das bis zum Ende der Raketenphase mitgeführt werden muss, besonders teuer. Eine Verringerung der Endmasse um 1 t reduziert die erforderliche Mode-Switch-Masse im Referenzfall um ungefähr 4,1 t.

### 2.2 Δv-Sensitivität bei 70 t Endmasse

| Raketen-Δv | Mode-Switch-Masse | Raketenpropellant | MTOW mit ca. 30 t LH₂ für Luftphase |
| ---: | ---: | ---: | ---: |
| 6,0 km/s | ~261 t | ~191 t | ~291 t |
| **6,4 km/s** | **~285 t** | **~215 t** | **~315 t** |
| 6,7 km/s | ~304 t | ~234 t | ~334 t |

Die 6,4-km/s-Zeile ist der derzeitige Referenzentwurf. 6,0 und 6,7 km/s bleiben als optimistische bzw. konservative Sensitivitätsfälle bestehen, bis ein Trajektorienmodell belastbarere Werte liefert.

## 3. Study A – Pure SSTO

Study A behält alle Aufstiegspropellants im Orbiter.

Für 70 t Endmasse und 6,4 km/s Raketen-Δv ergeben sich ungefähr 215 t Raketenpropellant. Bei einem vorläufigen LOX/LH₂-Mischungsverhältnis von 5,5:1 entspricht dies rund:

- **LOX:** ~182 t
- **LH₂ Raketenphase:** ~33 t
- **LH₂ Luftphase:** ~30 t
- **LH₂ gesamt:** ~63 t

Mit Arbeitsdichten von ungefähr 70,8 kg/m³ für LH₂ und 1,14 t/m³ für LOX ergibt sich grob:

| Medium | Masse | Flüssigkeitsvolumen |
| --- | ---: | ---: |
| LH₂ | ~63 t | ~890 m³ |
| LOX | ~182 t | ~160 m³ |
| **Summe** | **~245 t** | **~1.050 m³** |

Mit Ullage, Isolation, Tankböden, Leitungen, Befestigungen und konstruktivem Freiraum sind für Study A derzeit ungefähr **1.150–1.250 m³ Brutto-Kryotankraum** anzusetzen.

### Konsequenz

Die ASCE darf nicht als proportional verlängerte Version des bisherigen 35-m-Entwurfs verstanden werden. Das LH₂-Volumen erzwingt einen voluminösen Mittelrumpf bzw. Lifting Body. Ein sinnvoller erster Geometriesuchraum liegt eher bei etwa 65–72 m Länge, 8,5–11 m maximaler Rumpfbreite und 6,5–8 m maximaler Rumpfhöhe; Spannweite und Außenkontur werden erst aus Packaging, Aerodynamik und Rückkehrlasten abgeleitet.

## 4. Study B – Reusable Flight Tanks (RFT)

Study B untersucht zwei symmetrische, aerodynamisch integrierte und wiederverwendbare **LH₂-Starttanks ohne eigene Haupttriebwerke**. Die SABRE-XII bleiben die einzigen Haupttriebwerke der ASCE.

Die RFT speisen die SABRE-XII während der frühen luftatmenden Beschleunigungsphase. Nach Entleerung werden sie deutlich vor dem Mach-5-Mode-Switch abgetrennt. Die ASCE setzt den luftatmenden Flug mit internem LH₂ fort und schaltet später auf den internen LOX/LH₂-Raketenbetrieb um.

Das Gesamtsystem ist damit streng genommen kein reines SSTO mehr, sondern ein **reusable drop-tank assisted SSTO / 1½-Stufen-System**. Der Orbiter selbst bleibt einstufig und benutzt vom Start bis zum Orbit dieselben Haupttriebwerke.

### 4.1 Zu untersuchende Tankvarianten

| Variante | Externes LH₂ | RFT-Anordnung |
| --- | ---: | --- |
| B20 | 20 t | 2 × 10 t LH₂ |
| B25 | 25 t | 2 × 12,5 t LH₂ |

Vorläufiger Trockenmassen-Suchraum der wiederverwendbaren RFT: etwa **20–30 % der transportierten LH₂-Masse**. Daraus ergeben sich als reine Designannahme ungefähr 2,5–3,5 t pro 10-t-RFT bzw. 3–4 t pro 12,5-t-RFT. Diese Werte sind nicht kanonisiert und müssen aus Tankdruck, Material, Isolation, Aerodynamik, Steuerflächen, Energieversorgung, Separation und Rückkehrkonzept abgeleitet werden.

### 4.2 Trennpunkt

Zu rechnen sind mindestens drei Separationen:

- Mach 1,5
- Mach 2,5
- Mach 3,5

Der optimale Punkt ist ein Kompromiss aus maximaler externer LH₂-Nutzung und wachsender thermischer, aerodynamischer und rückkehrtechnischer Belastung. Der derzeit erwartete Sweet Spot liegt ungefähr im Bereich Mach 2–2,5, ist aber noch nicht belegt.

### 4.3 Rückkehrkonzept

Bevorzugt wird eine autonome aerodynamische Rückkehr statt Fallschirmbergung. Die RFT sollen nach Separation zunächst Energie abbauen und anschließend zu einem Starport oder einem vorgelagerten **Tank Recovery Field** gleiten. Ein eigenes Rückkehrtriebwerk ist zunächst nicht vorgesehen.

### 4.4 Packaging-Wirkung

Die Verlagerung von 20–25 t LH₂ aus dem Orbiter reduziert das interne Volumen erheblich. Zusätzlich kann ein kompakterer Orbiter kleinere interne Tankstrukturen, weniger Isolation und geringere Strukturflächen ermöglichen. Dieser Sekundäreffekt ist aufgrund des Raketenphasen-Massenverhältnisses besonders wertvoll.

Vorläufige Optimierungsziele:

| Fall | Externes LH₂ | Orbiter-Dry-Mass-Ziel | Endmasse inkl. 10 t Nutzlast + 5 t Betriebsmasse | Mode-Switch-Masse bei 6,4 km/s |
| --- | ---: | ---: | ---: | ---: |
| A – Pure SSTO | 0 t | 55 t | 70 t | ~285 t |
| B20 konservativ | 20 t | 53 t | 68 t | ~277 t |
| B20 optimiert | 20 t | 52 t | 67 t | ~273 t |
| B25 optimiert | 25 t | 51 t | 66 t | ~269 t |
| B25 ambitioniert | 25 t | 50 t | 65 t | ~265 t |

Diese Tabelle definiert **Zielwerte**, keine bereits nachgewiesenen Strukturmassen.

In optimierten B20/B25-Fällen fällt das interne Flüssigkeitsvolumen grob in die Größenordnung von etwa **670–750 m³** statt ~1.050 m³ bei Study A. Unter Einschluss von Packaging- und Strukturzuschlägen ist zunächst ein interner Kryobauraum von ungefähr **750–875 m³** zu untersuchen.

## 5. Vorläufiges Trockenmassenmodell

Die größte offene Frage der Baseline ist, ob eine robuste, hoch wiederverwendbare ASCE tatsächlich im Bereich 50–60 t trocken realisierbar ist. Statt einen Einzelwert zu kanonisieren wird zunächst mit Baugruppen-Korridoren gearbeitet.

| Baugruppe | vorläufiger Suchraum |
| --- | ---: |
| Primär-/Sekundärstruktur, Flügel, Lastpfade | 14–17 t |
| interne Kryotank-Strukturen | 7–10 t |
| 2 × SABRE-XII inkl. Nacelles, Precooler, Feed | 9–12 t |
| TPS / Hot Structure | 5–7 t |
| Fahrwerk, Bremsen, Aktuation | 3,5–4,5 t |
| Avionik, GNC, EPS, RCS | 2,5–3,5 t |
| Leitungen, Isolation, Thermal Control | 2,5–3,5 t |
| MPI-2, Türen, Verriegelungen, lokale Verstärkung | 1,5–2,5 t |
| Human-Rating-Delta ASCE-P gegenüber ASCE-C | +2,5 bis +4 t |

Die Bereiche dürfen nicht einfach zu einem sicheren Gesamtwert addiert werden: mehrere Posten überlappen konstruktiv, und integrierte Tanks/Lastpfade verschieben Masse zwischen Kategorien. Das Ziel der nächsten Iteration ist deshalb ein konsistentes Bottom-up-Modell statt einer Summierung unabhängiger Schätzwerte.

### 5.1 Arbeitskorridor der Baureihen

Bis zur Bottom-up-Prüfung gelten lediglich folgende Designziele:

| Parameter | ASCE-C | ASCE-P |
| --- | ---: | ---: |
| Dry Mass Zielkorridor | ~50–53 t | ~54–57 t |
| Orbitalnutzlast Zielkorridor | ~12–14 t | ~8–10 t |
| Human Rating | nein / unbemannt | vollständig |
| zulässige Beschleunigung | höher | nominal ~3 g begrenzt |
| MPI-2 | gemeinsam | gemeinsam |

Die tatsächliche Nutzlastdifferenz muss später mit identischer Trajektorie, Propellantreserve und RFT/SSTO-Konfiguration neu integriert werden.

## 6. Werkstoff- und Fertigungsannahmen

ASCE wird als industrielle Kleinserie mit gemeinsamen Fertigungswerkzeugen betrachtet, nicht als Einzelstück und nicht als Massenprodukt. Eine Flotte von vielen Dutzend bis einigen hundert Zellen über Jahrzehnte rechtfertigt unter anderem automatisierte Faserablage, große Formen/Autoklaven, gefräste oder additiv/integriert hergestellte Metallstrukturen und automatisierte Fügeverfahren.

Die Optimierung erfolgt nicht auf minimale Herstellmasse um jeden Preis. Bei hoher Wiederverwendungsrate sind **Inspektierbarkeit, Austauschbarkeit und kurze Wartungszeit** gleichrangige Konstruktionsziele. Dies gilt insbesondere für TPS, Triebwerkszugang, kryogene Leitungen und strukturelle Befestigungspunkte.

## 7. Packaging-Arbeitsraum

Für die nächste geometrische Iteration werden mindestens drei Grundkörper verglichen:

1. **Kompakt/breit:** ca. 65 m
2. **Ausgewogen:** ca. 69 m
3. **Schlanker:** ca. 73 m

Für jede Geometrie sind mindestens zu prüfen:

- internes LH₂- und LOX-Bruttovolumen
- Lage der Tankgruppen und Schwerpunktwanderung
- MPI-2-Modulzugang und Türlastpfade
- Position der SABRE-XII/Nacelles und Feed-Längen
- Fahrwerkspositionen und Bodenfreiheit
- Wiedereintrittsunterseite / TPS-Kontinuität
- Schwerpunkt und Neutralpunkt mit voller, teilweiser und asymmetrischer Nutzlast
- Schwerpunktverlauf während Luft- und Raketenphase
- RFT-Anbindung und sichere Separation bei Study B

## 8. Entscheidungs-Gates vor ASCE 0.4

Die Außenabmessungen und eine neue maßstäbliche ASCE-Grafik werden erst festgelegt, wenn folgende Punkte ausreichend geschlossen sind:

1. Bottom-up-Dry-Mass für ASCE-C und ASCE-P.
2. Konsistente Tankgeometrie mit realem Bruttovolumen und Schwerpunktlage.
3. Raketenphasen-Δv durch ein einfaches, aber konsistentes Trajektorienmodell.
4. Erforderlicher SABRE-XII-Schub und Drosselbereich bei C/P und verschiedenen Nutzlasten.
5. Vergleich Study A versus B20 versus B25 inklusive RFT-Trockenmasse und Separation.
6. Aerodynamische Plausibilität der Rückkehr des Orbiters und der RFT.
7. Nutzlast-/Modulgeometrie und MPI-2-Strukturmassen.
8. Wartungs- und Turnaround-Annahmen als Gegenprüfung der Materialwahl.

## 9. Konsequenzen für OTA-TEC-0027

OTA-TEC-0027 enthält derzeit mehrere Werte, die nach Abschluss dieser Studie revidiert werden müssen. Bis dahin bleiben sie historischer Dokumentstand und dürfen nicht als Ergebnis der 0.3P-Studie gelesen werden.

Voraussichtlich zu ändern sind insbesondere:

- 35 × 18 × 6 m Abmessungen
- 42 t Leermasse und 180 t MTOW
- 20 Personen / 15 t Fracht als starre Nutzlastdefinition
- 68 t LOX / 22 t LH₂
- 800 kN Luftmodus / 900 kN Raketenmodus
- 8–10 Minuten Raketenbrenndauer
- reine SSTO-Klassifikation, falls Study B gewinnt
- alte Darstellung der internen Tankvolumina
- Flugprofil und Zeitangaben
- Kuratornotiz zum vermeintlich „doppelten Schub“ gegenüber dem Space Shuttle
- Flotten- und Startfrequenzen, sofern sie nicht mit Turnaround und Flottengröße vereinbar sind
- TPS-Massen- und Wartungsbehauptungen, sobald die Werkstoffstudie vorliegt

## 10. Vorläufige Bewertung

Study A bleibt die einfachere Referenzarchitektur und dient als Kontrollfall. Study B ist ernsthaft aussichtsreich, weil sie gezielt das dominierende Volumenproblem des LH₂ aus dem Orbiter verlagert und zugleich potenziell strukturelle Orbiter-Masse aus der gesamten Raketenphase entfernt.

Der derzeit wichtigste technische Prüfpunkt ist **nicht die endgültige Außenform**, sondern das gekoppelte Problem aus Trockenmasse, Kryovolumen, Schwerpunkt und Massentrajektorie. Erst danach wird die ASCE 0.4 geometrisch festgelegt.
