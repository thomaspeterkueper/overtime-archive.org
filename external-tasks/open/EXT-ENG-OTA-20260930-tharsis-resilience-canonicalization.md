---
id: EXT-ENG-OTA-20260930-tharsis-resilience-canonicalization
source: KUEPER Engineering
target: OTA
status: open
created: 2026-09-30
type: canonicalization-review
related:
  - OTA-TEC-0038-2026-DE
  - OTA-TEC-0094-2026-DE
  - OTA-TEC-0096-2026-DE
  - OTA-TEC-0097-2026-DE
  - OTA-TEC-0104-2026-DE
  - OTA-TEC-0105-2026-DE
engineering:
  - ENG-SYS-THARSIS-RES-0001
  - ENG-THARSIS-RESILIENCE-r1
---

# Engineering → OTA: Tharsis Hub Resilience Canonicalization Review

KUEPER Engineering hat den quantitativen Resilience-Closure für den 497-Personen-Tharsis-Hub abgeschlossen.

## Engineering-Ergebnisse zur Prüfung

### Power

Empfohlener Engineering-Envelope:
- normale gleichzeitige Last: 4.5–6.0 MW;
- kurzzeitige Peaks: 6.5–8.0 MW;
- geschützte L0+L1-Last: 2.8–3.8 MW;
- 72-h-degradierter Zielbetrieb: 3.2–4.2 MW;
- bevorzugte installierte Erzeugung: **8–10 MW**;
- minimale N-1 firm generation: >=4.5 MW, bevorzugt 5–6 MW;
- geschützter Black-start/Ride-through-Speicher: **8–12 MWh**.

Die bisherigen 7–8 MW werden nicht als unplausibel verworfen, aber als untere Architekturklasse mit geringerer Wartungs-/Wachstumsreserve bewertet.

6–10 MWh Kurzzeitspeicher dürfen nicht als 72-h-Autonomie interpretiert werden. 72 h erfordern weiter verfügbare Erzeugung plus Lastabwurf und lokale Puffer.

### ECLSS

- drei regionale Hubs bleiben sinnvoll;
- je zwei gesunde Hubs müssen zusammen 100% der kritischen Atmosphäre-Regenerationslast tragen können;
- Cluster bleiben atmosphärisch isolierbar; Cross-feed erzeugt keinen kolonieweiten gemeinsamen Luftkreislauf;
- erster Screening-Envelope für 497 Personen: O2 ~373–447 kg/Tag, CO2-Removal ~422–522 kg/Tag.

### Safe Haven

497 Personen auf fünf verbleibende Cluster ergeben 99.4 Personen je Cluster. Das OTA-Ziel 100 Personen/Cluster für bis zu 72 h wird technisch beibehalten, sofern die Cluster bewusst für ca. 18% temporäre Überbelegung ausgelegt sind.

Empfohlener Emergency-Water-Planungswert:
- 4–6 kg supplied water/person/day für Trinken, Nahrungszubereitung und stark rationierte Hygiene;
- 72-h-Bruttoinventar für 497 Personen: ca. 6.0–8.9 t vor Recovery-Credits.

### Utilities

N-1 für Strom, Daten/Steuerung, Trink-/ECLSS-Nachspeisewasser und O2/kritische Atemgas-Nachspeisung soll echte Common-Mode-/Routen-Trennung berücksichtigen. Zwei Leitungen im selben verletzlichen Korridor sind keine vollständige geografische Redundanz.

Abwasser bleibt segmentiert + gepuffert; ein voll dupliziertes Abwasserbackbone ist nicht erforderlich. Thermik bleibt lokal/regional redundant.

## Nicht zur Kanonisierung vorgeschlagen

Noch offen bleiben:
- exakter Erzeugungsmix;
- endgültige Spannungsebenen/Feederdimensionen;
- exakte Tankvolumina;
- finale ECLSS-Maschinengrößen;
- Radiator-/Heat-sink-Flächen;
- konkrete Site-Geometrie und Trassenabstände.

OTA soll diese Werte nicht mit Scheingenauigkeit ergänzen.

## Requested OTA action

Bitte prüfen, welche der obigen Envelopes/Relationen in OTA-TEC-0038/0094/0096/0097/0104/0105 übernommen oder als Architekturgrenzen verlinkt werden sollen. Engineering-IDs werden nicht automatisch zu OTA-Identitäten.
