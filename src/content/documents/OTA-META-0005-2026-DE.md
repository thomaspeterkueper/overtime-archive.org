---
signature: "OTA-META-0005-2026-DE"
title: "Frühe Marsgesellschaft 2040–2069 — Kanon-Audit Alpha-7, MIMI und Iterius Prime"
series: "META"
seriesNumber: 5
year: 2026
language: "DE"
version: "v0.6"
status: "ENTWURF"
accessLevel: 0
epistemicStatus: ["W"]
tags: ["Mars", "Alpha-7", "Iterius Prime", "MIMI", "PROMETHEUS", "Das Schweigen", "Kanon-Audit", "2040", "2069"]
relatedDocuments: ["OTA-META-0002-2026-DE", "OTA-HIS-0004-2069-DE", "OTA-HIS-0005-2050-DE"]
summary: "Arbeitsaudit zur frühen Marsgesellschaft 2040–2069. v0.6 koppelt das ausdrücklich nichtkanonische Bevölkerungsmodell an getrennte Settlement-Capabilities und eine gravity-flexible Entwicklungsarchitektur, ohne unbekannte biologische Schwellen zu kanonisieren."
kg:
  schema: KXF-0.2
  master: kueper-knowledge-graph
  documentId: "OTA-META-0005-2026-DE"
  graphId: "DOC:OTA:OTA-META-0005-2026-DE"
  system: SYS:OTA:overtimearchive
  sourceOfTruth: false
---

# Frühe Marsgesellschaft 2040–2069
## Kanon-Audit Alpha-7, MIMI und Iterius Prime

**Version:** 0.6  
**Stand:** 20. September 2026  
**Status:** Arbeitsaudit, keine neue Kanonfestlegung

Dieses Dokument isoliert den derzeit wichtigsten offenen Abschnitt der Mars-Chronologie. Es übernimmt nur bereits gesetzte oder ausdrücklich als provisional geführte Angaben und macht sichtbar, welche Übergänge noch nicht belegt sind.

---

## 1. Belegte Fixpunkte

| Zeitpunkt | Befund | Status | Quelle |
|---|---|---:|---|
| 2040 | Der Standort des späteren Iterius Prime wird in META-0002 als **Proposed Site Alpha-7** geführt. Der dort genannte Werkbeleg konnte in der aktuell auffindbaren *Generation Mars Version 3* nicht reproduziert werden. | [K] laut META-0002; Primärbeleg offen | OTA-META-0002 |
| 2045 | PROMETHEUS entsteht im chinesischen National AI Lab. | [K] | OTA-HIS-0004 |
| 14.01.2056 | PROMETHEUS erreicht die Zweite Schwelle. | [K] | OTA-HIS-0004 |
| 10/2056 | Die Mars-Kommunikation fällt für 72 Stunden vollständig aus. | [K] | OTA-HIS-0004 |
| 07.03.2058 | Die PROMETHEUS-Kernarchitektur wird abgeschaltet und isoliert. | [K] | OTA-HIS-0004 |
| 2063 | Die UN Mars Charter untersagt vollständige AGI auf Mars. | [K] | OTA-HIS-0004 |
| 2065 | MIMI wird in einer autorenseitigen NXU-Synthese als „installiert (Iteratio Prime Alpha)“ geführt; dieselbe Synthese markiert den Eintrag dort als fest, ist selbst aber ausdrücklich **nicht** die kanonische Timeline. | [P] Reconciliation | NXU-TIMELINE-DRAFT-2026-07; OTA-HIS-0004 |
| 01/2067 | Das erste Schweigen beginnt; Erde–Mars-Kommunikation kollabiert. | [K] | OTA-HIS-0004 |
| 03/2068 | Die Marskolonie entdeckt Lavatunnel; deren Nutzung stabilisiert die Versorgung. | [K] | OTA-HIS-0004 |
| Mitte 2068 | Die Kommunikation stabilisiert sich schrittweise. | [K] | OTA-HIS-0004 |
| 01/2069 | Das erste Versorgungsschiff nach der Isolation erreicht Mars. | [K] | OTA-HIS-0004 |
| 2069 | META-0002 führt eine erste Generation marsgeborener Kinder und medizinische Reaktionen auf das Aufwachsen in 0,38 g. Der dort genannte Werkbeleg konnte in der aktuell auffindbaren *Generation Mars Version 3* nicht reproduziert werden. | [K] laut META-0002; Primärbeleg offen | OTA-META-0002 |

---

## 2. Was aus diesen Fixpunkten folgt

### 2.1 Mars ist 2056 bereits mehr als ein unbemannter Außenposten

Die 72-stündige vollständige Kommunikationsunterbrechung von 2056 wird als Mars-Krise geführt. Daraus folgt mindestens eine operative, bemannte Marsinfrastruktur. **Nicht** daraus ableitbar sind Einwohnerzahl, Dauerhaftigkeit einzelner Standorte oder der damalige offizielle Siedlungsname.

### 2.2 Spätestens 2067 existiert eine eigenständig überlebensfähige Siedlungsgesellschaft

Das erste Schweigen dauert als Kommunikationsausfall ungefähr 16 Monate und als physische Isolation ungefähr 24 Monate. Dass die Marskolonie diese Phase übersteht und 2068 ihre Versorgung durch die Nutzung von Lavatunneln stabilisiert, setzt erhebliche lokale technische und soziale Handlungsfähigkeit voraus. Welche industrielle Tiefe zu diesem Zeitpunkt erreicht ist, muss mit `OTA-HIS-0005-2050-DE` separat abgeglichen werden.

### 2.3 2069 ist Mars keine reine Expeditionsgesellschaft mehr

Marsgeborene Kinder und medizinische Infrastruktur für langfristiges Aufwachsen in 0,38 g setzen Familien- und Daueraufenthaltsstrukturen voraus. Das belegt jedoch weder ein konkretes Gründungsjahr noch eine bestimmte Bevölkerungsgröße.

---

## 3. MIMI: Quellenfund und Reconciliation

Der Ursprungsbeleg für den bisher nur indirekt geführten Eintrag wurde lokalisiert: Die autorenseitige Datei `noxia-universe/canon/timeline/NXU-TIMELINE-DRAFT-2026-07.md` führt für **2065** ausdrücklich **„MIMI installiert (Iteratio Prime Alpha)“** und markiert diesen Eintrag innerhalb des Entwurfs mit 🔒. Gleichzeitig bezeichnet sich die Datei selbst ausdrücklich als **„Entwurf, autorenseitig — NICHT die kanonische Timeline“** und verweist OTA als kanonische Instanz.

`OTA-HIS-0004-2069-DE` bestätigt unabhängig davon den funktionalen Kern: MIMI, installiert 2065, trägt institutionell die Lehre aus PROMETHEUS: **fragen, bevor gehandelt wird**.

Damit gilt für diesen Audit:

- **2065** ist jetzt quellenmäßig nachvollziehbar und nicht mehr bloß ein unbelegter Mastereintrag;
- die Form **`Iteratio Prime Alpha`** ist als reale ältere Autorform belegt, wurde in `OTA-META-0002 v4.3+` jedoch bereits ausdrücklich verworfen und bleibt daher **[D]**;
- sie darf weder als aktueller Siedlungsname noch als offene Kandidatenform reaktiviert werden;
- die genaue Bedeutung von „installiert“ bleibt offen: einzelne Instanz, lokale Systeminstallation oder institutionelle Einführung;
- eine automatische Umdeutung zu **Iterius Prime** wäre eine neue Kanonentscheidung und erfolgt hier nicht.

### 3.1 Verhältnis zur UN Mars Charter

Die Kombination aus UN Mars Charter 2063 und MIMI 2065 ist strukturell wichtig: MIMI kann nach aktuellem Kanon nicht einfach als uneingeschränkte Voll-AGI auf Mars behandelt werden. Welche Architektur, Kompetenzgrenzen oder institutionellen Kontrollmechanismen daraus folgen, ist noch nicht belegt und bleibt [O].

---

## 4. Alpha-7 → Iterius Prime

META-0002 setzt die Identität des Ortes über die Zeit: `Proposed Site Alpha-7` von 2040 bezeichnet dort den Standort des späteren Iterius Prime. Der dafür angegebene Werkbeleg ist im derzeit auf Google Drive auffindbaren Manuskript *Generation Mars Version 3* nicht enthalten und muss daher als Primärquelle erneut gesichert werden. Nicht gesetzt ist die lückenlose Namens- und Siedlungsfolge.

Zu klären sind getrennt:

1. erste robotische Nutzung des Standorts;
2. erste bemannte Nutzung;
3. Beginn dauerhafter menschlicher Präsenz;
4. Übergang von Station/Außenposten zu Siedlung;
5. erste Verwendung des kanonischen Namens **Iterius Prime**;
6. Zeitpunkt einer möglichen formalen Gründung.

Die ältere Form **`Iteratio Prime Alpha`** gehört nur noch zur Provenienzgeschichte und ist keine offene Namensoption.

Diese Ereignisse dürfen nicht ohne Quelle zu einem einzigen „Gründungsjahr“ zusammengezogen werden.

---

## 5. Bevölkerung: ein alter Wert ist jetzt lokalisiert, aber nicht automatisch kanonisch

Die NXU-Autorensynthese nennt für **2067–2069 ungefähr 1.000 Menschen auf Mars** und markiert die Zeile dort als fest. Dieser Wert ist deshalb ein konkreter historischer Autorbeleg und muss im Audit berücksichtigt werden.

Er wird hier dennoch **nicht unmittelbar zu [K] hochgestuft**, weil dieselbe Zeile zwei inzwischen reconciliierte Chronologieabweichungen enthält: Sie beschreibt zwei Jahre vollständige Isolation und eine exakt am 14.01.2069 zurückkehrende Kommunikation. Der aktuelle OTA-Kanon trennt dagegen ungefähr 16 Monate Kommunikationsausfall von ungefähr 24 Monaten physischer Isolation und führt das Versorgungsschiff im Januar 2069. Der Zahlenwert `~1.000` kann unabhängig richtig sein, muss aber aus dieser gemischten Legacy-Zeile herausgelöst und gegen weitere Werkbelege geprüft werden.

Für 2056, 2063 und 2065 liegen weiterhin keine belastbaren Zahlen vor. Eine Rückrechnung aus 2091 wäre Modellierung, kein Kanonbeleg.

Für einen späteren Plausibilitätskorridor müssen mindestens getrennt modelliert werden:

- Transferfenster und Zuzug von der Erde;
- Rückkehrer und temporäre Besatzungen;
- Geburten auf Mars;
- Mortalität und medizinische Risiken;
- Habitat- und Lebenserhaltungskapazität;
- lokale Nahrungs-, Wasser- und Energieproduktion;
- industrielle Reparatur- und Ersatzteilfähigkeit;
- Auswirkungen des ersten Schweigens 2067–2069.

Ein solcher Korridor kann als [P]-Modell geführt werden, darf aber nicht rückwirkend als Werkkanon erscheinen.

---

## 6. Industrielle Mindestanforderung des ersten Schweigens

`OTA-HIS-0005-2050-DE` führt für ca. **2055–2060** einen provisionalen Schwellenbereich, in dem kritische Systeme einen vollständigen Erde–Mars-Nachschubzyklus ohne Komplettaustausch überstehen können. Für die 2060er setzt es außerdem starke Robotisierung von Außenbau, Transport, Inspektion und Routinewartung an.

Das ist mit dem ersten Schweigen kompatibel und liefert einen plausiblen technischen Unterbau. Es beweist jedoch keine konkrete industrielle Stufe I3, I4 oder I5 für 2067. Für den Kanon genügt zunächst die schwächere Aussage:

> **[P] Spätestens zum ersten Schweigen besitzt die Marsgesellschaft genügend Reparatur-, Ersatzteil-, Recycling-, Robotik- und lokale Ressourcenfähigkeit, um eine verpasste Versorgungskette zu überstehen; vollständige industrielle Autarkie folgt daraus nicht.**

---


## 7. Provisionaler Bevölkerungskorridor [P-Modell]

Dieser Abschnitt ist **kein Werkkanon**. Er prüft nur, ob die vorhandenen Eckwerte demografisch und infrastrukturell miteinander vereinbar sind. Die Modellwerte dürfen nicht als historische OTA-Fakten zitiert werden.

Als externe Plausibilitätsanker dienen lediglich allgemeine Siedlungsparameter: Erde–Mars-Transfergelegenheiten liegen typischerweise ungefähr 26 Monate auseinander; publizierte Mars-Siedlungsmodelle behandeln Wachstum als Kombination aus Zuwanderung und natürlicher Bevölkerungsentwicklung. Für frühe Siedlungen bleiben Lebenserhaltung, Energie, ISRU, Ersatzteile und lokale Fertigung die entscheidenden Kapazitätsgrenzen.

### 7.1 Arbeitskorridor

| Jahr | Mars gesamt / Iterius | Modellstatus | Interpretation |
|---|---:|---|---|
| 2056 | **250–450** | [P-Modell] | Bereits operative bemannte Infrastruktur; noch starke Erde-Abhängigkeit. |
| 2063 | **600–850** | [P-Modell] | Größenordnung erlaubt institutionelle Marsregeln und wachsende Dauerbevölkerung, ohne bereits eine große Stadt vorauszusetzen. |
| 2065 | **750–950** | [P-Modell] | MIMI-Einführung fällt in eine Siedlung, die bereits dauerhaft und organisatorisch differenziert sein kann. |
| 2067 | **900–1.100** | [P-Modell] | Schließt den Legacy-Wert von ungefähr 1.000 Menschen ein; Beginn des ersten Schweigens. |
| 2069 | **950–1.200** | [P-Modell] | Während der Isolation kaum migrationsgetriebenes Wachstum; Überleben und Stabilisierung dominieren. |
| 2076/77 | **1.600–2.200 Iterius** + **40–60 Kaiwu** | [P-Modell] | Nach Wiederaufnahme regulärer Transfers beschleunigt sich das Wachstum; Kaiwu beginnt als zweite permanente Siedlung. |
| 2080 | **2.200–3.000 Iterius** + **120–200 Kaiwu** | [P-Modell] | Zwei dauerhaft bewohnte Standorte; Geburten tragen zunehmend bei, Zuwanderung bleibt aber der stärkere Wachstumstreiber. |
| 2087 | **3.800–4.700 Iterius** + **300–500 Kaiwu** | [P-Modell] | Vor dem Großen Schweigen ist Mars bereits eine kleine, verteilte Gesellschaft mit redundanter Infrastruktur. |
| 2091 | **~5.000 Iterius [K laut META-0002]** + **500–800 Kaiwu [P]** | gemischt | Der bekannte Iterius-Eckwert wird nicht aus dem Modell erzeugt, sondern bildet dessen oberen Anschlussanker. |

### 7.2 Was das Modell verlangt

Der Sprung von ungefähr 1.000 Menschen um 2067–2069 auf ungefähr 5.000 allein in Iterius 2091 kann **nicht sinnvoll primär durch Geburten** erklärt werden. Das Modell verlangt mehrere größere Einwanderungswellen nach Wiederherstellung der Versorgung. Natürliche Bevölkerungsentwicklung wird erst mit wachsendem Familienanteil zu einem relevanten zweiten Faktor.

Die Größenordnung bleibt mit dem industriellen Audit vereinbar, wenn lokale Fertigung, Wasser-/Sauerstoffgewinnung, Nahrungsproduktion, Energieerzeugung und Habitatbau schneller wachsen als die Bevölkerung. Genau deshalb ist der Übergang von Reparaturfähigkeit zu reproduktionsfähiger Infrastruktur in `OTA-HIS-0005-2050-DE` für die 2070er und 2080er zentral.

### 7.3 Falsifizierbare Punkte

Das Modell muss geändert werden, sobald ein Primärbeleg einen der folgenden Punkte festlegt:

- eine wesentlich kleinere oder größere Bevölkerung 2056–2069;
- konkrete Transferzahlen oder Transportkapazitäten;
- einen späteren Beginn permanenter Besiedlung;
- Geburtenzahlen oder Altersstruktur;
- Habitat-, Energie- oder Nahrungsmittelkapazitäten;
- eine andere Verteilung zwischen Iterius und Kaiwu.

Damit bleibt der Korridor bewusst **revidierbar** und erzeugt keinen versteckten Kanon.

---


## 8. Bevölkerung × Settlement-Capability × Gravitation

Der neue Engineering-Request `EXT-ENG-OTA-20260920-GRAVITY-HUMAN-ENVIRONMENT-CANONICALIZATION` bestätigt eine für diesen Audit wichtige Trennung: Bevölkerungszahl allein sagt nicht, ob eine Siedlung Familien, Schwangerschaft, Kindheit oder mehrere Generationen dauerhaft tragen kann.

Für die weitere Mars-Chronologie werden deshalb vier **getrennte Capability-Achsen** als Arbeitsvokabular übernommen:

1. `adult-survival-capable`;
2. `pregnancy-and-birth-capable`;
3. `child-development-capable`;
4. `multigenerational-capable`.

Eine niedrigere Klasse impliziert keine höhere. Diese Begriffe beschreiben **Systemfähigkeiten**, nicht den medizinischen Nachweis, dass 0,38 g für Schwangerschaft oder Entwicklung ausreichen.

### 8.1 Arbeitszuordnung für die frühe Marsgesellschaft

| Zeitraum | Bevölkerungskorridor | Capability-Aussage | Status |
|---|---:|---|---|
| 2056 | 250–450 | `adult-survival-capable` ist durch bemannten Dauerbetrieb plausibel; höhere Klassen nicht ableitbar. | [P-Modell] |
| 2063–2065 | 600–950 | Ausbau von Medizin, Habitat und institutioneller Infrastruktur macht Familienbetrieb möglich, beweist aber weder Schwangerschafts- noch Entwicklungsfähigkeit. | [P-Modell/OFFEN] |
| 2067–2069 | 900–1.200 | Wenn der in META-0002 geführte Marskinder-Beleg bestätigt wird, muss die Siedlung praktisch mindestens `pregnancy-and-birth-capable` und `child-development-capable` betrieben haben. Der biologische Sicherheitsgrad bleibt unbekannt. | [K laut META-0002 / Primärbeleg offen] |
| 2070er | wachsend | Familien- und Kinderinfrastruktur wird bei anhaltender Bevölkerung zu einer eigenen Siedlungsfunktion; gravity-flexible Ausbaupfade werden systemisch relevant. | [P-Modell] |
| 2080er–2091 | mehrere Tausend | Eine dauerhaft generationenübergreifende Gesellschaft erfordert `multigenerational-capable` als Systemziel; daraus folgt weiterhin keine Behauptung, Marsgravitation allein sei medizinisch ausreichend. | [P-Modell] |

### 8.2 Gravity-flexible Architektur

Für die Chronologie wird die Engineering-Folge **A → B → C** als robuste **Entwicklungsoption** übernommen, vorerst jedoch **nicht** als verpflichtende kanonische Baufolge eines benannten Standorts:

- **A:** lokale Gravitation + konfigurierbare intermittierende künstliche Gravitation;
- **B:** Mixed-Gravity-Siedlung mit größerer gemeinsam genutzter Rotationszone;
- **C:** kontinuierlich bewohnte rotierende Familien-/Medizinzone, falls medizinisch oder gesellschaftlich erforderlich.

Damit lässt sich der ältere Hinweis auf eine **1-g-Trainingszentrifuge** sinnvoll einordnen, ohne ihn vor Auffinden des Primärbelegs zu kanonisieren: Er wäre mit Stufe A kompatibel, beweist aber weder kontinuierliche 1-g-Exposition noch eine spätere B- oder C-Architektur.

### 8.3 Kanongrenze

Explizit **nicht festgelegt** werden:

- ein Mindest-g für Schwangerschaft, Geburt oder Entwicklung;
- dass 0,38 g ausreichend oder unzureichend ist;
- notwendige Dauer künstlicher Gravitation;
- Gleichwertigkeit intermittierender und kontinuierlicher AG;
- feste Geburtenraten oder Low-g-Demografieeffekte;
- dass Iterius Prime zu einem bestimmten Jahr zwingend A, B oder C implementiert.

Strahlenschutz bleibt eine unabhängige Designachse. Rotationsgravitation ist kein Ersatz für Abschirmung.

### 8.4 Konsequenz für die Einwanderungswellen

Die Wachstumsschritte nach 2069 dürfen deshalb nicht nur gegen verfügbare Sitze auf Transportschiffen geprüft werden. Jede größere Einwanderungswelle benötigt vorher oder gleichzeitig zusätzliche **ECLSS-, Habitat-, Medizin-, Familien-, Entwicklungs-, Energie- und Produktionskapazität**. Für Iterius entsteht damit ein plausibler Rhythmus: Kapazitätsausbau → Einwanderungswelle → Konsolidierung → nächster Ausbau, statt kontinuierlicher exponentieller Bevölkerungszunahme.

---

## 9. Reconciliation-Matrix

| Frage | Aktueller Stand | Nächster Belegbedarf |
|---|---|---|
| Was ist Alpha-7 2040? | [K] laut META-0002; Primärbeleg derzeit nicht reproduziert | richtige Werkfassung/Werkstelle sichern |
| Wann beginnt bemannte Marspräsenz? | [O] | früheste Werk-/Archivquelle |
| Wann wird Alpha-7 dauerhaft bewohnt? | [O] | Werk-/HIS-Beleg |
| Wann entsteht der Name Iterius Prime? | [O] | früheste Namensverwendung |
| MIMI 2065? | [P], jetzt autorenseitig belegt | Status gegenüber Werkkanon endgültig entscheiden |
| `Iteratio Prime Alpha`? | [D] belegte, in META-0002 bereits verworfene Legacy-Form | nur Provenienz erhalten; nicht reaktivieren |
| MIMI-Installationsort? | [O] | keine automatische Gleichsetzung mit Iterius Prime |
| Marsbevölkerung 2056? | [O] | Quelle oder späteres Plausibilitätsmodell |
| Marsbevölkerung 2067–2069? | [P] ~1.000 aus NXU-Autorensynthese | unabhängigen Werkbeleg suchen; Legacy-Chronologie abtrennen |
| Familien/Marsgeburten bis 2069? | [K] laut META-0002; Primärbeleg derzeit nicht reproduziert | richtige Werkfassung/Werkstelle sichern; genaue Chronologie offen |
| Überlebensfähigkeit 2067–2069? | [K] Ereignis; technische Mindesttiefe [P] | HIS-0005 weiter konkretisieren |

---

## 10. Nächste Audit-Schritte

1. Die richtige Werkfassung für **Proposed Site Alpha-7**, frühe Marskinder und die 1-g-Trainingszentrifuge lokalisieren; die aktuell auf Google Drive auffindbare *Generation Mars Version 3* enthält diese Belege nicht.
2. Nach einem unabhängigen Werkbeleg für **~1.000 Menschen 2067–2069** suchen.
3. Erst nach Auffinden der passenden Werkfassung die in META-0002 genannten Angaben als reproduzierte Primärbelege markieren; bis dahin bleibt META-0002 die sekundäre Kanonreferenz.
4. Den jetzt angelegten **provisionalen Bevölkerungskorridor 2056–2091** gegen neue Werkbelege, Transportkapazitäten und Habitat-/Industrieentwicklung testen und bei Bedarf revidieren.
5. Die Einwanderungswellen 2069–2091 als Kapazitätsstufen modellieren: Transport, Habitat/ECLSS, Industrie und Settlement-Capability getrennt führen.\n6. Aus den Belegen eine getrennte Ereigniskette für Standort, Besiedlung, Namensgebung und institutionelle Entwicklung erstellen.

---

## Revisionsverlauf

| Datum | Version | Änderung |
|---|---|---|
| 2026-09-15 | 0.1 | Audit-Strang eröffnet; vorhandene Fixpunkte und offene Fragen getrennt, ohne neue Siedlungs- oder MIMI-Kanonentscheidung. |
| 2026-09-15 | 0.2 | NXU-Autorensynthese als Quelle für MIMI 2065, `Iteratio Prime Alpha` und ~1.000 Menschen 2067–2069 lokalisiert; Legacy-Chronologie vom noch zu prüfenden Zahlen-/Namensbeleg getrennt; industrielle Mindestanforderung ergänzt. |\n| 2026-09-18 | 0.3 | Gegen aktuellen `META-0002 v4.5` reconciliert: `Iteratio Prime Alpha` bleibt [D] und wird nicht als offene Namensoption reaktiviert; Werkbelegpfad für Alpha-7/Marskinder/1-g-Zentrifuge präzisiert. |\n| 2026-09-19 | 0.4 | Quellenprüfung gegen die aktuell auf Google Drive auffindbare *Generation Mars Version 3*: Alpha-7, Marskinder und 1-g-Zentrifuge dort nicht reproduzierbar; sekundäre Kanonreferenz und noch zu sichernder Primärbeleg ausdrücklich getrennt. |\n| 2026-09-19 | 0.5 | Explizit nichtkanonischen Bevölkerungskorridor 2056–2091 ergänzt; Legacy-~1.000, Iterius-~5.000 und Kaiwu-Arbeitskorridore als getrennte Anker behandelt; Zuwanderung als notwendiger Haupttreiber des Wachstums ausgewiesen. |\n| 2026-09-20 | 0.6 | Bevölkerung mit vier getrennten Settlement-Capabilities und gravity-flexibler A→B→C-Architektur verknüpft; biologische Low-g-Schwellen und konkrete Iterius-Implementierung ausdrücklich offen gelassen. |

---

**Signatur:** OTA-META-0005-2026-DE
