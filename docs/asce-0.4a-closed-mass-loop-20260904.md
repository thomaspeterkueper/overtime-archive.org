# ASCE 0.4A – Geschlossene Massen-, Volumen- und RFT-Schleife

**Arbeitsstand:** 2026-09-04  
**Bezug:** ASCE 0.3P / OTA-TEC-0027-2091-DE  
**Status:** Engineering Study / vorläufig, nicht kanonisch  
**Ziel:** Die 0.3P-Architektur nach der Werkstoff-/TPS-Korrektur erstmals mit konsistenter Endmasse, Raketenmassenverhältnis und RFT-Systemmasse schließen.

---

## 1. Ausgangspunkt

Die frühere 0.3P-Referenz mit 55 t Dry Mass, 5 t Betriebs-/Reserveanteil und 10 t Nutzlast ergab 70 t Endmasse. Die Werkstoff-/TPS-Betrachtung macht deutlich, dass 55 t als Referenz zu optimistisch ist. Für die geschlossene Iteration wird deshalb zunächst mit einem **68-t-ASCE-C-Orbiter** gerechnet. Dieser Wert ist kein Kanon, sondern ein belastbarer konservativer Arbeitspunkt innerhalb des derzeit diskutierten Bereichs von etwa 66–72 t.

Referenzmission:

| Parameter | 0.4A Arbeitswert |
| --- | ---: |
| Orbiter Dry Mass ASCE-C | 68 t |
| Betriebsmedien / Residuen / Reserven | 5 t |
| Orbitalnutzlast | 10 t inkl. Modul |
| Endmasse nach Hauptaufstieg | **83 t** |
| SABRE-XII Vakuum-Isp | 465 s |
| Raketenphasen-Δv Referenz | 6,4 km/s |
| Sensitivität | 6,0 / 6,4 / 6,7 km/s |
| LOX/LH₂-Mischungsverhältnis Raketenphase | 5,5:1, vorläufig |

## 2. Geschlossene Raketenphase

Mit

\[
R = \exp\left(\frac{\Delta v}{I_{sp} g_0}\right)
\]

folgen für 83 t Endmasse:

| Raketen-Δv | Massenverhältnis R | Mode-Switch-Masse | Raketenpropellant |
| ---: | ---: | ---: | ---: |
| 6,0 km/s | 3,728 | ~309,4 t | ~226,4 t |
| **6,4 km/s** | **4,069** | **~337,8 t** | **~254,8 t** |
| 6,7 km/s | 4,346 | ~360,7 t | ~277,7 t |

Damit ist die frühere 285-t-Mode-Switch-Masse des 70-t-Endmassenfalls für den korrigierten 68-t-Dry-Mass-Arbeitspunkt nicht mehr gültig.

### 2.1 Propellantaufteilung im 6,4-km/s-Fall

Bei O/F = 5,5 ergibt sich aus ~254,8 t Raketenpropellant näherungsweise:

- **LH₂ Raketenphase:** ~39,2 t
- **LOX Raketenphase:** ~215,6 t

Flüssigkeitsvolumen bei 70,8 kg/m³ LH₂ und 1,14 t/m³ LOX:

- LH₂ Raketenphase: ~553 m³
- LOX Raketenphase: ~189 m³
- Summe reine Raketenphasen-Flüssigkeit: ~742 m³

Der Luftphasen-Wasserstoff kommt zusätzlich hinzu.

---

## 3. Luftphasen-LH₂ ist jetzt eine offene Variable

Die früheren ~30 t LH₂ für die gesamte luftatmende Phase stammen aus dem leichteren 0.3P-Arbeitspunkt und dürfen nicht unverändert übernommen werden. Für 0.4A wird deshalb bewusst ein **Verbrauchsband von 30–40 t** verwendet, bis ein Trajektorien-/SABRE-Modell vorliegt.

Für Pure SSTO ergibt sich beim 6,4-km/s-Fall:

| Luftphasen-LH₂ | Startmasse Orbiter | gesamtes LH₂ | internes Flüssigkeitsvolumen LH₂ + LOX |
| ---: | ---: | ---: | ---: |
| 30 t | ~367,8 t | ~69,2 t | ~1.166 m³ |
| 35 t | ~372,8 t | ~74,2 t | ~1.237 m³ |
| 40 t | ~377,8 t | ~79,2 t | ~1.307 m³ |

Die Volumenwerte sind reine Flüssigkeitsvolumina. Mit Ullage, Isolation, Tankböden, Leitungen und geometrischer Packeffizienz liegt der erforderliche interne Kryobauraum deutlich darüber. Damit wird Study A in der 68-t-Dry-Mass-Welt geometrisch erheblich schwieriger als in 0.3P.

---

## 4. RFT-Grundgleichung: Was B25 tatsächlich leisten muss

Die Reusable Flight Tanks verändern die Raketenphase **nur dann**, wenn ihre Nutzung die am Mode Switch verbleibende Orbiter-Endmasse reduziert. Das reine Verschieben von 25 t LH₂ von innen nach außen reduziert die Mode-Switch-Masse nicht.

Für B25 gilt näherungsweise:

\[
M_{start,sys} = R\,(m_{dry,B25}+m_{ops}+m_{payload}) + m_{H2,air,total} + m_{RFT,dry}
\]

während Pure SSTO näherungsweise ist:

\[
M_{start,A} = R\,(m_{dry,A}+m_{ops}+m_{payload}) + m_{H2,air,total}
\]

Damit gewinnt B25 auf System-Startmasse genau dann, wenn

\[
R\,\Delta m_{dry,orbiter} > m_{RFT,dry}.
\]

Bei R = 4,069 bedeutet das:

- 8,75 t RFT-Trockenmasse benötigen > **2,15 t** Orbiter-Dry-Mass-Ersparnis.
- 10,0 t RFT-Trockenmasse benötigen > **2,46 t** Orbiter-Dry-Mass-Ersparnis.
- 11,25 t RFT-Trockenmasse benötigen > **2,76 t** Orbiter-Dry-Mass-Ersparnis.

**Das ist das zentrale 0.4A-Ergebnis:** B25 muss den Orbiter nur um rund 2,2–2,8 t trockener machen, um seine eigene konservativ angesetzte Rückkehrhardware auf Startmassenebene zu kompensieren. Alles darüber ist ein realer Systemmassengewinn.

---

## 5. B25-Sensitivität bei konservativer RFT-Masse

Für zwei RFT mit zusammen 25 t LH₂ wird zunächst eine Trockenmasse von **35–45 % der transportierten LH₂-Masse** angesetzt:

- RFT dry low: 8,75 t gesamt
- RFT dry reference: 10,0 t gesamt
- RFT dry high: 11,25 t gesamt

Als Referenz wird 35 t gesamter Luftphasen-LH₂-Verbrauch verwendet. Davon liegen bei B25 25 t extern und 10 t intern.

| B25 Orbiter Dry | Dry-Ersparnis ggü. A68 | Endmasse | Mode-Switch | System-Startmasse mit 10 t RFT dry | Differenz zu A68 / 35 t Air-H₂ |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 68 t | 0 t | 83 t | ~337,8 t | ~382,8 t | +10,0 t |
| 66 t | 2 t | 81 t | ~329,6 t | ~374,6 t | +1,9 t |
| **65 t** | **3 t** | **80 t** | **~325,5 t** | **~370,5 t** | **−2,3 t** |
| 64 t | 4 t | 79 t | ~321,5 t | ~366,5 t | −6,3 t |
| 62 t | 6 t | 77 t | ~313,3 t | ~358,3 t | −14,5 t |

Pure SSTO A68 mit 35 t Air-H₂ liegt bei ~372,8 t Startmasse.

Damit ist eine B25-Variante mit **65 t Orbiter Dry Mass bereits systemisch konkurrenzfähig**, selbst wenn die beiden wiederverwendbaren Tanks zusammen 10 t trocken wiegen. Bei 64 t Dry entsteht ein klarer Startmassenvorteil.

### 5.1 Einfluss der RFT-Trockenmasse bei 65 t Orbiter Dry

| RFT dry gesamt | System-Startmasse B25 | Vorteil/Nachteil ggü. A68 |
| ---: | ---: | ---: |
| 8,75 t | ~369,3 t | −3,5 t |
| **10,0 t** | **~370,5 t** | **−2,3 t** |
| 11,25 t | ~371,8 t | −1,0 t |

Bei 3 t Orbiter-Dry-Mass-Ersparnis bleibt B25 selbst am oberen RFT-Massenrand noch knapp leichter als A68.

---

## 6. Packaging-Effekt B25 bei 65 t Orbiter Dry

Bei 80 t Endmasse und 6,4 km/s gilt:

- Mode-Switch-Masse: ~325,5 t
- Raketenpropellant: ~245,5 t
- davon bei O/F 5,5:
  - LH₂: ~37,8 t
  - LOX: ~207,7 t

Wenn von 35 t Luftphasen-LH₂ 25 t extern liegen, verbleiben intern:

- ~37,8 t LH₂ Raketenphase
- ~10 t LH₂ restliche Luftphase
- **~47,8 t internes LH₂ gesamt**
- ~207,7 t LOX

Volumina:

- internes LH₂: ~675 m³
- LOX: ~182 m³
- **reines internes Flüssigkeitsvolumen: ~857 m³**

Gegenüber A68 / 35 t Air-H₂ mit ~1.237 m³ reiner Flüssigkeit spart B25 damit ungefähr **380 m³ internes Flüssigkeitsvolumen** bzw. rund 31 %. Dieser Volumengewinn ist unabhängig davon wertvoll, ob der Startmassenvorteil groß oder klein ausfällt.

Mit Packaging-Aufschlägen liegt für B25 nun ein interner Kryobauraum grob im Bereich **950–1.050 m³** näher als die früheren 750–875 m³. Der endgültige Wert hängt stark von Tankform, Isolation und Packeffizienz ab.

---

## 7. Konsequenz für die Geometriesuche

Die geschlossene Schleife rechtfertigt noch **keine Festlegung auf P65**, verschiebt aber die Prioritäten.

Zu vergleichen sind ab jetzt:

| Envelope | Rolle |
| --- | --- |
| **P62** | aggressiv kompakt/breit; TPS- und Biegemassenminimum, Packaging-Risiko hoch |
| **P65** | bevorzugter kompakter Referenzfall |
| **P69** | volumetrisch entspannter Kontrollfall |
| P73 | nur noch schlanker Grenz-/Aerodynamikfall |

Entscheidend ist nicht Länge allein, sondern die gekoppelte Größe aus:

- benetzter Fläche und TPS-Masse,
- Struktur-/Biegemasse,
- Tankpackeffizienz,
- transsonischem/hypersonischem Widerstand,
- Schwerpunkt-/Neutralpunktlage,
- MPI-2-Türflächen und Lastpfaden,
- RFT-Anbindung und Separation.

Ein kürzerer, breiterer Körper gewinnt nur dann, wenn die zusätzlich benötigte Oberfläche/Querschnittsstruktur nicht den TPS- und Biegevorteil wieder aufzehrt.

---

## 8. Schwerpunkt und RFT-Separation werden eigenes Gate

Für jede Geometrie müssen mindestens folgende Zustände als diskrete Massenzustände modelliert werden:

1. Start – RFT voll, interne Tanks voll.
2. Luftphase – RFT teilweise entleert.
3. unmittelbar vor Separation.
4. unmittelbar nach Separation.
5. Mach-5-Mode-Switch.
6. mittlere Raketenphase.
7. MECO / Orbit.
8. Wiedereintritt mit Rest-/Reservepropellant und jeweiliger Nutzlastkonfiguration.

Für jeden Zustand sind zu bestimmen:

- Längsschwerpunkt \(x_{CG}\),
- vertikaler Schwerpunkt,
- aerodynamischer Neutralpunkt,
- statische Marge,
- erforderliches Trimmoment,
- Tankentnahmereihenfolge,
- zulässige asymmetrische Restmassen,
- RFT-Separationsimpuls und Mindestabstand zur Orbiterkontur.

Die RFT sollen deshalb konstruktiv möglichst nahe am zulässigen Gesamtschwerpunkt liegen. Ihre Position darf nicht allein aus Außenform oder Tankvolumen gewählt werden.

---

## 9. Thermostrukturelle Knoten: CFK/Titan nicht starr voraussetzen

Ein CFK-Fachwerk mit Titan-/Metallknoten darf bei den extremen Temperaturgradienten zwischen Kryotanks und heißer Außenstruktur nicht als starrer Verbund modelliert werden. Für 0.4B sind mindestens folgende Konzepte zu vergleichen:

- gleitende/verschiebliche Knoten in einer Achse,
- sphärische bzw. gelenkige Lagerung ausgewählter Streben,
- thermisch niedrigleitende Zwischenstücke,
- lokale metallische Hot Structures mit isoliertem CFK-Kern,
- geometrisch definierte Dehnpfade/Flexures.

Die zusätzliche Masse dieser Entkopplung ist explizit in das Strukturmodell aufzunehmen. Die globale Längendifferenz darf nicht einfach als lokale Titan-vs-CFK-Dehnung über die gesamte Fahrzeuglänge interpretiert werden; entscheidend sind lokale Temperaturfelder, Segmentlängen und Zwängungen. Trotzdem ist thermische Ermüdung an den Knoten ein primäres Lebensdauer-Risiko.

---

## 10. Startinfrastruktur und Missionsklasse

Eine elektromagnetische Startassistenz im Bereich mehrerer hundert Tonnen Fahrzeugmasse ist keine gewöhnliche Runway-Erweiterung, sondern Starport-Kerninfrastruktur mit hoher kurzfristiger Leistungsabgabe und Energiespeicherbedarf. Für die Architektur bedeutet das:

- wenige hochspezialisierte ASCE-Starports sind plausibler als ein dichtes Flughafennetz,
- Energie wird lokal gespeichert und gepulst abgegeben; die Spitzenleistung ist nicht mit kontinuierlicher Kraftwerksleistung gleichzusetzen,
- Rampenazimut und Zielinklination werden zu einem Flotten-/Netzwerkproblem,
- polare/sonnensynchrone Missionen dürfen nicht mit der äquatorialen Oststart-Baseline vermischt werden.

Die frühere konkrete Behauptung, eine Polarbahn koste exakt 31,6 t zusätzlich, bleibt **nicht kanonisch**, solange kein missionsspezifisches Trajektorienmodell vorliegt. Sicher ist nur die Richtung: Der Verlust des äquatorialen Rotationsvorteils und die abweichende Bahngeometrie reduzieren Nutzlast bzw. erhöhen Propellantbedarf deutlich.

---

## 11. Neue 0.4A-Arbeitsbaseline

Die Studie legt noch keinen finalen ASCE-Entwurf fest. Für die nächste Iteration gilt jedoch folgende belastbarere Referenz:

| Parameter | 0.4A Referenz |
| --- | ---: |
| Architektur | ASCE-C / MPI-2, B25 ernsthafter Referenzkandidat |
| Pure-SSTO-Kontrollfall Dry | 68 t |
| B25 Ziel-Dry für Konkurrenzfähigkeit | **≤65–66 t** |
| Nutzlast | 10 t inkl. Modul |
| Betriebs-/Reserveanteil | 5 t |
| Raketen-Δv | 6,4 km/s Referenz |
| Isp | 465 s |
| gesamter Air-Breathing-LH₂-Verbrauch | vorläufig 30–40 t, Referenz 35 t |
| RFT | 2 × 12,5 t LH₂ |
| RFT dry gesamt | 8,75–11,25 t, Referenz 10 t |
| B25 internes Flüssigkeitsvolumen bei 65 t Dry / 35 t Air-H₂ | ~857 m³ |
| B25 System-Startmasse bei 65 t Dry / 10 t RFT dry | ~370,5 t |
| Pure SSTO A68 System-Startmasse bei 35 t Air-H₂ | ~372,8 t |
| Geometriesuche | P62 / P65 / P69; P73 Grenzfall |

**Wichtig:** B25 ist damit nicht „bewiesen“, aber erstmals quantitativ an eine klare Bedingung gebunden. Wenn die RFT-Architektur mindestens etwa 3 t Orbiter-Trockenmasse gegenüber dem vergleichbaren Pure-SSTO-Körper spart, ist sie selbst mit konservativer RFT-Rückkehrhardware bereits auf Startmassenebene konkurrenzfähig und hat zusätzlich einen sehr großen internen Volumenvorteil.

---

## 12. Nächstes Gate: 0.4B

Die nächste Iteration soll keine weitere freie Massenschätzung sein, sondern vier gekoppelte Teilmodelle schließen:

1. **Geometrisches Tankmodell P62/P65/P69** mit realer Packeffizienz und Oberfläche.
2. **Bottom-up-Struktur/TPS-Masse** für dieselben drei Geometrien.
3. **Schwerpunktmodell über die Massentrajektorie**, einschließlich RFT-Separation.
4. **Einfaches Air-Breathing-Trajektorienmodell**, um den bisher offenen 30–40-t-LH₂-Verbrauch und den sinnvollen RFT-Abwurfpunkt zu bestimmen.

Erst wenn diese vier Modelle zusammenpassen, wird aus B25 oder Pure SSTO die Referenzarchitektur für ASCE 0.4.