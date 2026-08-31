# EXT-KG-OTA-20260831 — ECLSS Evidenz- und KG-Abgleich für OTA-TEC-0093

Quelle: `SYS:KUEPER:knowledge-graph`
Ziel: `SYS:KUEPER:ota`
Status: open
Datum: 2026-08-31

## Anlass

Der Evidenzaudit `RES-20260831-TEC0093A` bestätigt die realen Grundfunktionen des Life-Support-Kernmoduls, ohne die NOXIA-/Weltsetzungswerte zu kanonisieren. Der Knowledge Graph hat die stabile Dokumentidentität `DOC:OTA:OTA-TEC-0093-2026-DE` als `draft_productive` registriert, passend zum OTA-Status `ENTWURF`.

## Anforderung an OTA

Bitte `src/content/documents/OTA-TEC-0093-2026-DE.md` an den Evidenzstand angleichen, ohne den Entwurfsstatus eigenmächtig auf kanonisch zu setzen.

### 1. KG-Metadaten

- `graphId: DOC:OTA:OTA-TEC-0093-2026-DE` beibehalten.
- `system` auf die kanonische Ökosystem-ID `SYS:KUEPER:ota` umstellen; `SYS:OTA:overtimearchive` höchstens als Legacy-Alias führen.
- Dokumentstatus bleibt bis zur OTA-Freigabe `ENTWURF`; der KG-Record bleibt entsprechend `draft_productive`.

### 2. Reale ECLSS-Anker

Als `[R]` belastbar sind insbesondere:

- regenerative Sauerstofferzeugung per Wasserelektrolyse,
- regenerative CO2-Entfernung,
- Sabatier-Wasserrückgewinnung,
- Feuchte-/Temperatur- und Spurengaskontrolle,
- die Aussage, dass reale ECLSS nicht vollständig stofflich geschlossen sind.

Konkrete ISS-Einzelwerte dürfen nur mit sauberer Quellenbindung und als System-/Betriebsfallwerte übernommen werden.

### 3. Skalierung

Die vorhandene Kombinationsregel beibehalten und schärfen:

- Einzelwerte verschiedener Subsysteme ergeben nicht automatisch ein gemeinsam realistisches Gesamtsystem.
- Crew-Skalierung 6 → 20 → 200 Personen ist nicht linear.
- Masse, Volumen, elektrische Leistung, Abwärme, Ersatzteile, Redundanz und Transportlogistik müssen gekoppelt betrachtet werden.

Konkrete NOXIA-Skalierung bleibt `[OFFEN]` bzw. NOXIA-eigene Ableitung.

### 4. Varianten statt identischer Hardware

Die gemeinsame ECLSS-Basis als Technologiefamilie behandeln, nicht als identische Hardware für alle Objekte:

- Kurzstrecken-/Rover-Variante: stärker verbrauchsbasiert bzw. station-gekoppelt,
- Transit-Variante: teilweise regenerativ,
- Stations-/Dauerbetriebs-Variante: stärker regenerativ,
- Kombifahrzeug: separat zu prüfen.

`CANDIDATE_COMPONENT_OF` darf diese funktionale/technologische Verwandtschaft ausdrücken. Eine Hochstufung zu `COMPONENT_OF` oder `USES_COMPONENT` bleibt objektspezifisch offen.

### 5. Redundanz

„Dreifach redundant“ nicht als reale ECLSS-Standardarchitektur behaupten. Reale Fehlertoleranz, Safe-Haven-Konzept, Wartbarkeit und Notreserven getrennt beschreiben. Eine konkrete Redundanzklasse des NOXIA-Kernmoduls bleibt `[F/OFFEN]`.

### 6. Verbrauch, Wartung und Stoffschließung

- Wasser-/Sauerstoffrückgewinnung als unvollständig kennzeichnen.
- Verbrauchsmaterialien, Pumpen, Ventile, Sensorik, Sorbentien/Katalysatoren und Ersatzteile als reale Betriebsgrenzen berücksichtigen.
- Keine aus einzelnen ISS-Komponenten abgeleitete pauschale „Effizienz“ für das Gesamtsystem kanonisieren.

## Source-of-Truth-Grenze

OTA besitzt Volltext und Weltsetzung. KG besitzt Dokumentidentität und Metadaten. NOXIA besitzt Gameplay-, Kosten-, Unlock- und Balancingwerte. Der Research-Kandidat bleibt Evidenzartefakt und wird nicht selbst zum Weltkanon.

## KG-Referenzen

- `exports/entity-registry-space-0.1.json`
- `exports/document-references-space-0.1.json`
- `exports/kxf-0.6.json`
- Research: `RES-20260831-TEC0093A`
