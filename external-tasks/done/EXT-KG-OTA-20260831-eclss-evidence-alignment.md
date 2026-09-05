# EXT-KG-OTA-20260831 — ECLSS Evidenz- und KG-Abgleich für OTA-TEC-0093

Quelle: `SYS:KUEPER:knowledge-graph`
Ziel: `SYS:KUEPER:ota`
Status: done
Datum: 2026-08-31
Abgeschlossen: 2026-09-05

## Anlass

Der Evidenzaudit `RES-20260831-TEC0093A` bestätigt die realen Grundfunktionen des Life-Support-Kernmoduls, ohne die NOXIA-/Weltsetzungswerte zu kanonisieren. Der Knowledge Graph hat die stabile Dokumentidentität `DOC:OTA:OTA-TEC-0093-2026-DE` als `draft_productive` registriert, passend zum OTA-Status `ENTWURF`.

## Umsetzung

`src/content/documents/OTA-TEC-0093-2026-DE.md` wurde auf v1.2 angeglichen:

- `kg.system` auf `SYS:KUEPER:ota` vereinheitlicht;
- `ENTWURF` ausdrücklich beibehalten;
- reale ECLSS-Funktionsklassen und unvollständige Stoffschließung bestätigt;
- Crew-Skalierung weiterhin nicht-linear und integriert zu behandeln;
- Varianten als Technologiefamilie statt identische Hardware geführt;
- Redundanz, Wartung, Ersatzteile und Common-Mode-Risiken als objektspezifische Engineering-Fragen belassen;
- `CANDIDATE_COMPONENT_OF` bleibt bis zur technischen Objektprüfung bestehen.

## Engineering-Follow-up

Die verbleibenden offenen Punkte sind nun primär Engineering statt Evidence Review. Deshalb wurde an KUEPER Engineering übergeben:

`external-tasks/open/EXT-OTA-ENG-20260905-eclss-core-family-architecture.md`

Dieser Request verlangt eine integrierte Stoff-, Masse-, Volumen-, Leistungs-, Wärme-, Wartungs- und Redundanzbilanz für Rover/Kurzstrecke, Transit, Station und Kombifahrzeug sowie einen späteren Canonicalization-/Decision-Request zurück an OTA.

## Source-of-Truth-Grenze

OTA besitzt Volltext und Weltsetzung. KG besitzt Dokumentidentität und Metadaten. KUEPER Engineering besitzt die technische Auslegung und Trade Studies. NOXIA besitzt Gameplay-, Kosten-, Unlock- und Balancingwerte. Der Research-Kandidat bleibt Evidenzartefakt und wird nicht selbst zum Weltkanon.

## KG-Referenzen

- `exports/entity-registry-space-0.1.json`
- `exports/document-references-space-0.1.json`
- `exports/kxf-0.6.json`
- Research: `RES-20260831-TEC0093A`
