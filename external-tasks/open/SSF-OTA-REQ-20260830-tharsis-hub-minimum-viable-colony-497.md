---
id: SSF-OTA-REQ-20260830-THARSIS-HUB-MINIMUM-VIABLE-COLONY-497
requester: SYS:KUEPER:ssf
target: SYS:KUEPER:ota
priority: high
type: world-technology-architecture
created: 2026-08-30
status: open
affects: [OTA, NOXIA, KG]
---

# Tharsis Hub — Minimum Viable Mars Colony: Systemarchitektur für 497 Bewohner

## Anlass

SSF hat die reale wissenschaftlich-technische Evidenzbasis für eine dauerhaft bewohnte Mars-Basiskolonie mit 497 Personen und mindestens 30 Tagen Resilienz erstellt.

Quelle im SSF-Repository:

`docs/research/minimum-viable-mars-colony-497.md`

SSF bleibt Source of Truth für die reale Evidenzbasis. OTA soll daraus jetzt die kanonische Welttechnik für Tharsis Hub ableiten. NOXIA-Objekte und Gameplay-Balancing sind ausdrücklich noch nicht festzulegen.

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

Die [SSF-Annahme]-Werte sind bewusst Architekturbereiche, keine realen NASA-Systemwerte und keine NOXIA-Spielwerte.

## In OTA zu entscheiden

Bitte zuerst **eine Systemarchitektur**, noch keine lange Liste einzelner Gebäudeobjekte, festlegen:

1. Primärenergie: Kernspaltung, Solar+nuklearer Backup oder anderes Hybridmodell; Anzahl unabhängiger Erzeugungsstränge erst daraus ableiten.
2. Lokale Wasserquelle und kanonische Förder-/Aufbereitungslogik.
3. O2-Erzeugung: Elektrolyse, CO2-Elektrolyse oder kombiniertes System.
4. Grad lokaler Nahrungsproduktion im Startzustand.
5. Habitatbauweise: oberirdisch, regolithüberdeckt, teilunterirdisch oder gemischt.
6. zentrale vs. verteilte ECLSS-Architektur.
7. Segmentierung von Druck-, Brand- und Strahlenschutzzonen.
8. Mediennetz: Strom, Daten, Wasser, Abwasser, O2/Prozessgase; kritische Routen müssen räumlich/technisch redundant sein.
9. Mindestfunktion der medizinischen Infrastruktur.
10. Oberflächenlogistik als Funktionsklassen: Rettung/Personen, Fracht, Bau/Erdbewegung, Wartung/Bergung, EVA-Unterstützung, Robotik.
11. Werkstatt-/Ersatzteilstrategie und zulässiger Automatisierungs-/Fertigungsgrad.
12. Erweiterungslogik: Welche Infrastruktur muss im staatlichen Startzustand bereits Überkapazität oder vorbereitete Anschlusspunkte besitzen?

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

Das Dokument soll:

- die SSF-Evidenzwerte referenzieren, nicht duplizieren;
- reale SSF-Anker klar von fiktionalen OTA-Festlegungen trennen;
- eine funktionale Systemarchitektur und Abhängigkeitsstruktur definieren;
- zentrale vs. dezentrale Systeme begründen;
- notwendige räumliche Trennung kritischer Redundanzen festlegen;
- erst am Ende System-/Anlagenklassen identifizieren, aus denen später NOXIA-Objekte abgeleitet werden können.

## Danach

Erst nach dieser OTA-Architektur soll ein Folgeauftrag an NOXIA die tatsächliche Startkolonie, Gebäudeanzahlen, Kapazitäten, Fahrzeuge, Straßen/Fahrwege und Medienverbindungen ableiten.

KG erhält danach nur stabile Identitäten und Beziehungen der tatsächlich festgelegten Systeme, keine Kopie der wissenschaftlichen Tabellen oder des OTA-Loretexts.
