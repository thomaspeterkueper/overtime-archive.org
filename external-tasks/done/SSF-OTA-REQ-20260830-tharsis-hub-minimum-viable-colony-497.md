---
id: SSF-OTA-REQ-20260830-THARSIS-HUB-MINIMUM-VIABLE-COLONY-497
requester: SYS:KUEPER:ssf
target: SYS:KUEPER:ota
priority: high
type: world-technology-architecture
created: 2026-08-30
updated: 2026-08-30
completed: 2026-08-30
status: done
affects: [OTA, NOXIA, KG]
implementation: OTA-TEC-0038-2026-DE
---

# Tharsis Hub — Minimum Viable Mars Colony: Systemarchitektur für 497 Bewohner

## Abschluss 2026-08-30

Phase 1 dieses Requests ist mit `OTA-TEC-0038-2026-DE` umgesetzt. Das OTA-Dokument definiert die Systemarchitektur für Tharsis Hub mit 497 Bewohnern und mindestens 30 Tagen Resilienz, trennt SSF-Evidenz von OTA-Welttechnik und nimmt keine NOXIA-Spielwerte vorweg.

Festgelegt wurden insbesondere ein nuklear dominiertes Hybridenergienetz mit Black-Start, lokale Wasser-ISRU, Elektrolyse als primärer O2-Pfad, ein unabhängiger CO2-basierter Ergänzungs-/Notpfad, hierarchisch verteiltes ECLSS, segmentierte regolithgeschützte Habitatcluster, räumlich getrennte Medienpfade, medizinischer Kern, Werkstatt-/Ersatzteilstrategie sowie Erweiterungs- und Anlagenklassen.

Die nachgelagerte Phase 2 — konkrete technische Objektdossiers und anschließend NOXIA-Objekte — bleibt bewusst eine eigene Ableitung und wird nicht durch diesen abgeschlossenen Architekturauftrag vorweggenommen.

## Anlass

SSF hat die reale wissenschaftlich-technische Evidenzbasis für eine dauerhaft bewohnte Mars-Basiskolonie mit 497 Personen und mindestens 30 Tagen Resilienz erstellt.

Quelle im SSF-Repository:

`docs/research/minimum-viable-mars-colony-497.md`

SSF bleibt Source of Truth für die reale Evidenzbasis. OTA soll daraus die kanonische Welttechnik für Tharsis Hub ableiten. NOXIA-Objekte und Gameplay-Balancing sind ausdrücklich noch nicht festzulegen.

## Aktualisierung 2026-08-30 — Einordnung in das kanonische OTA-TEC-Schema

Seit Anlage dieses Requests ist `docs/ota-tec-object-dossier-schema.md` als kanonisches OTA-Schema für technische Objektdossiers integriert worden. Dieser Request wird deshalb **nicht** als Auftrag verstanden, sofort zahlreiche Einzelobjekte anzulegen.

Die Bearbeitung erfolgt zweistufig:

1. **Systemarchitektur Tharsis Hub** als übergeordnetes Architektur-/Anforderungsdokument. Dieses Dokument definiert Systemgrenzen, Funktionsketten, Medien- und Energieflüsse, Abhängigkeiten, Redundanzdomänen, räumliche Segmentierung und die technisch notwendigen Anlagenklassen.
2. **OTA-TEC-Dossiers** werden erst danach für solche technischen Anlagen, Gebäude, Geräte, Fahrzeuge oder Infrastrukturen angelegt, die als eigenständige technische Objekte tatsächlich stabil genug definiert sind. Jedes Dossier folgt `docs/ota-tec-object-dossier-schema.md` und erhält Identitäten ausschließlich über den vorgesehenen OTA/KG-Governance-Pfad.

Damit ist die Systemarchitektur die Quelle für die spätere Dossier-Zerlegung; die Dossiers dürfen die Koloniearchitektur nicht rückwärts durch zufällig zuerst modellierte Einzelobjekte bestimmen.

## SSF-Systemanker

Für das bevorzugte Szenario B gelten als erste Architekturgrößenordnung:

```text
Population                         497 Personen
Autarkiereserve                    >= 30 Tage
O2-Bedarf                          ~408 kg/Tag
CO2-Abfuhr                         ~517 kg/Tag
Wasser-Bruttodurchsatz             ~7,5–12,4 t/Tag
Wasser-Nettonachspeisung           ~0,3–0,8 t/Tag
Nahrungsbedarf / Importreferenz    ~0,57–0,91 t/Tag
30-Tage-Nahrungsreserve            ~17–27 t
30-Tage-Wasser-Nachspeisereserve   ~9–24 t
mittlere elektrische Last          ~3–5 MW [SSF-Annahme]
Spitzenlast                        ~5–8 MW [SSF-Annahme]
Kurzzeit-Energiespeicher           ~3–10 MWh [SSF-Annahme]
thermische Abfuhr                  ~3–6 MW [SSF-Annahme]
Netto-Druckvolumen                 ~40.000–60.000 m3
Nutzfläche druckbeaufschlagt       ~23.000–35.000 m2
```

Die `[SSF-Annahme]`-Werte sind bewusst Architekturbereiche, keine realen NASA-Systemwerte und keine NOXIA-Spielwerte.

## Phase 1 — In OTA zuerst zu entscheiden

Bitte zuerst **eine Systemarchitektur**, noch keine lange Liste einzelner Gebäudeobjekte, festlegen:

1. Primärenergie: Kernspaltung, Solar+nuklearer Backup oder anderes Hybridmodell; unabhängige Erzeugungsstränge und Black-Start-Fähigkeit erst daraus ableiten.
2. Lokale Wasserquelle und kanonische Förder-/Aufbereitungslogik.
3. O2-Erzeugung: Elektrolyse, CO2-Elektrolyse oder kombiniertes System; Speichervorrat und Notversorgung als eigene Sicherheitsfunktion behandeln.
4. Grad lokaler Nahrungsproduktion im Startzustand und Abgrenzung zwischen Nahrungsproduktion, Vorrat und Importabhängigkeit.
5. Habitatbauweise: oberirdisch, regolithüberdeckt, teilunterirdisch oder gemischt.
6. zentrale vs. verteilte ECLSS-Architektur; keine einzelne zentrale Anlage darf ohne begründete Fail-Safe-Architektur zum kolonieweiten Single Point of Failure werden.
7. Segmentierung von Druck-, Brand-, Kontaminations- und Strahlenschutzzonen.
8. Mediennetz: Strom, Daten, Wasser, Abwasser, O2/Prozessgase; kritische Routen müssen räumlich und technisch redundant sein.
9. Mindestfunktion der medizinischen Infrastruktur einschließlich Isolation und Versorgung bei unterbrochener Außenlogistik.
10. Oberflächenlogistik als Funktionsklassen: Rettung/Personen, Fracht, Bau/Erdbewegung, Wartung/Bergung, EVA-Unterstützung, Robotik.
11. Werkstatt-/Ersatzteilstrategie und zulässiger Automatisierungs-/Fertigungsgrad.
12. Erweiterungslogik: Welche Infrastruktur muss im staatlichen Startzustand bereits Überkapazität oder vorbereitete Anschlusspunkte besitzen?
13. Systemweite Abwärme- und Wärmetransportarchitektur; thermische Abfuhr darf nicht nur als Eigenschaft einzelner Anlagen behandelt werden.
14. Betriebszustände: Normalbetrieb, degradierter Betrieb, isolierter Sektor, Netzausfall/Black Start und 30-Tage-Resilienzfall.

## Architekturmodell

Das erste OTA-Dokument soll die Kolonie als gekoppeltes technisches System modellieren. Mindestens folgende Ebenen sind zu unterscheiden:

- **Versorgung:** Primärenergie, Energiespeicherung, Wassergewinnung, Prozessgase, Nahrungsversorgung.
- **Lebenserhaltung:** Atmosphäre, CO2-Abfuhr, O2-Bereitstellung, Wasserrecycling, Abwasser, Feuchte, thermische Kontrolle.
- **Habitat:** Druckkörper, Schleusen, Wohn-/Arbeitsbereiche, Schutzräume, medizinische Bereiche, Lager.
- **Industrie und Erhaltung:** Werkstätten, Ersatzteile, Fertigung, Rohstoff-/Materialumschlag, Reparatur.
- **Netze:** elektrische Verteilung, Daten/Steuerung, Wasser/Abwasser, Gase, Wärme.
- **Oberflächenbetrieb:** Personenrettung, Fracht, Bau, Wartung, EVA und Robotik.
- **Sicherheit/Resilienz:** physisch getrennte Redundanzdomänen, Reserven, Brand-/Druck-/Kontaminationsgrenzen, Notbetrieb.

Für jede Ebene sollen Funktion, wichtigste Inputs/Outputs, Abhängigkeiten und zulässige Ausfallfolgen beschrieben werden. Exakte technische Einzelparameter bleiben offen, wenn sie aus der Evidenz oder dem bestehenden Kanon nicht belastbar ableitbar sind.

## Modellierungsregel

`minimum viable` bedeutet **nicht** minimale Anzahl von Objekten. Lebenswichtige Redundanz, Segmentierung und 30-Tage-Resilienz gehören zum Minimum.

Bitte unterscheiden:

- funktional zwingend
- sicherheitsbedingt zwingend
- für 30-Tage-Resilienz erforderlich
- sinnvoll, aber im Startzustand verzichtbar
- erst für spätere Kolonieentwicklung erforderlich

## Erwartetes erstes OTA-Dokument

Arbeitstitel:

**Tharsis Hub — Minimum Viable Mars Colony: Systemanforderungen für 497 Bewohner**

Das Dokument ist bewusst **noch kein einzelnes OTA-TEC-Objektdossier**. Es soll:

- die SSF-Evidenzwerte referenzieren, nicht duplizieren;
- reale SSF-Anker klar von fiktionalen OTA-Festlegungen trennen;
- die Systemgrenze der Startkolonie definieren;
- eine funktionale Systemarchitektur und Abhängigkeitsstruktur definieren;
- zentrale vs. dezentrale Systeme begründen;
- Material-, Energie-, Wärme- und Informationsflüsse auf Systemebene beschreiben;
- notwendige räumliche Trennung kritischer Redundanzen festlegen;
- degradierte Betriebszustände und kritische Ausfallketten benennen;
- erst am Ende stabile System-/Anlagenklassen identifizieren, aus denen OTA-TEC-Dossiers und später NOXIA-Objekte abgeleitet werden können.

## Phase 2 — Ableitung von OTA-TEC-Dossiers

Nach Freigabe der Systemarchitektur wird eine **kleine, priorisierte** Dossierliste erstellt. Ein Dossier wird nur angelegt, wenn das technische Objekt eine klare Systemgrenze besitzt und mindestens Funktion, Hauptkomponenten, Flüsse, Interfaces, Betriebsgrößen, Ausfallmodi und reale technische Anker gemäß `docs/ota-tec-object-dossier-schema.md` sinnvoll dokumentierbar sind.

Naheliegende Klassen sind beispielsweise Energieerzeugung/-verteilung, Wassergewinnung/-aufbereitung, ECLSS, thermische Infrastruktur, Druckhabitat, Luftschleusen und Oberflächenfahrzeuge. Diese Beispiele sind **keine vorweggenommene kanonische Objektliste**.

Fehlende gemeinsame Identitäten werden nicht in OTA erfunden. Falls für ein Dossier eine stabile KG-/NOXIA-/SSF-Identität erforderlich ist, wird dafür ein External Task im zuständigen Repository angelegt.

## Danach

Erst nach der OTA-Systemarchitektur soll ein Folgeauftrag an NOXIA die tatsächliche Startkolonie, Gebäudeanzahlen, Kapazitäten, Fahrzeuge, Straßen/Fahrwege und Medienverbindungen ableiten.

KG erhält danach nur stabile Identitäten und Beziehungen der tatsächlich festgelegten Systeme, keine Kopie der wissenschaftlichen Tabellen oder des OTA-Loretexts.
