---
id: EXT-OTA-KG-20260901-BUILDING-OBJECT-IDENTITY-GAPS
requester: SYS:KUEPER:ota
target: SYS:KUEPER:kg
priority: high
type: identity-governance
created: 2026-09-01
status: open
affects: [OTA, NOXIA, KG]
requires: [EXT-NOX-OTA-20260901-BUILDING-OBJECT-COVERAGE]
---

# Technische Objektidentitäten für verifizierte NOXIA/OTA-Lücken klären

## Anlass

Der Abgleich `docs/noxia-building-object-coverage-20260901.md` hat bestehende OTA-Dossiers von echten Lücken getrennt. OTA darf fehlende Shared-/Fremdidentitäten nicht lokal erfinden.

## Verifizierte Lücken

Für folgende technisch eigenständige NOXIA-Buildables wurde kein passendes bestehendes OTA-TEC-Dossier nachgewiesen:

- `mine` — Rohstoffgewinnungsanlage / Mine; im OTA-Dossier-Schema bereits als Kandidat `BLD:NOX:mine-1` benannt.
- `solar` — Solarfeld / Energieerzeugung; im Schema als `BLD:NOX:solarfeld-1` benannt.
- `laboratory` — allgemeines Labor-/Analyse-/Forschungsgebäude.
- `scanner` — Scanner-/Messsystem; die technische Identität muss Ground Truth, Messung und Interpretation sauber trennbar halten.

## Ambige Generalisierungen

Für folgende NOXIA-Klassen existieren technisch verwandte OTA-Systemdossiers, aber noch keine belastbare Entscheidung, ob diese als allgemeine Referenz ausreichen:

- `factory` ↔ `OTA-TEC-0101-2026-DE`
- `ice_drill` ↔ `OTA-TEC-0095-2026-DE`
- `habitat` ↔ `OTA-TEC-0097-2026-DE`
- `residential_block` ↔ `OTA-TEC-0097-2026-DE`
- `smelter` ↔ `OTA-TEC-0101-2026-DE`

## Gewünschte KG-Entscheidung

1. Bestehende Shared-/Objektidentitäten suchen und zurückmelden; keine Dubletten erzeugen.
2. Wo keine Identität existiert, die Identitätsvergabe für ein neues OTA-TEC-Dossier autorisieren bzw. routen.
3. Für die ambigen Klassen entscheiden, ob eine Referenz auf das bestehende Systemdossier semantisch zulässig ist oder ein separates technisches Objekt benötigt wird.
4. Rückgabe pro Eintrag: bestehende/neu vergebene Identität, owning system, gewünschte OTA-Dossierbeziehung und ggf. Alias-/Migrationshinweise.

## Nicht Teil dieses Auftrags

- keine NOXIA-Kosten, Bauzeiten, Tick-Erträge oder Unlocks in KG/OTA übernehmen;
- keine neuen technischen Leistungswerte erfinden;
- keine vorhandenen Tharsis-Dossiers duplizieren.
