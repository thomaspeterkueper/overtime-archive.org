# NOXIA → OTA: Pilot-Dossiers verfassen und im OverTime Archive sichtbar machen

**Origin:** NOXIA
**Target:** OverTime Archive
**Status:** done
**Created:** 2026-08-29
**Completed:** 2026-08-30
**Implementation:** `OTA-TEC-0086-2026-DE`

## Abschluss

Das Akzeptanzminimum ist erfüllt: `OTA-TEC-0086-2026-DE` dokumentiert die Wasseraufbereitungsanlage als ersten sichtbaren Pilot des kanonischen OTA-TEC-Objektdossier-Schemas.

Das Dossier liegt in `src/content/documents`, verwendet die maschinenvalidierten Felder `objectClass`, `time`, `externalRefs`, `entities`, `relations` und `sync` und ist damit über die reguläre OTA-Dokumentroute renderbar sowie über `entry.data` für spätere Integrationen verfügbar.

Der Pilot referenziert die im Request vorgegebene bestehende NOXIA-Identität `BLD:NOX:wasseraufbereitung-1`. Nicht bestätigte Unlock-, SSF- oder KG-Identitäten wurden nicht lokal erfunden.

Die übrigen Kandidaten bleiben eine skalierbare Ausbaufolge, sind aber nicht Voraussetzung für den Abschluss dieses Mindestakzeptanzkriteriums.

## Ursprüngliches Ziel

Die Pilotobjekte aus dem Schema als echte OTA-TEC-Dossiers verfassen und im OverTime Archive sichtbar machen:

1. Rohstoffgewinnungsanlage / Mine (`BLD:NOX:mine-1`)
2. Wasseraufbereitungsanlage (`BLD:NOX:wasseraufbereitung-1`)
3. Energieerzeugung / Solarfeld (`BLD:NOX:solarfeld-1`)
4. Druckkabine / Druckkörper
5. Luftschleuse
6. Lebenserhaltungsmodul (O2, CO2-Abscheidung, Luftumwälzung)
7. thermisches Kontrollsystem
8. Habitat-Umweltsensorik
9. Strahlenschutzkonzept/-bauteile
10. integriertes Mars-Habitat (`BLD:NOX:mars-habitat-1`)

## Akzeptanz

- mindestens ein Pilot-Dossier ist im OverTime Archive sichtbar (gerendert unter `/dokument/…`); **erfüllt**
- die Dossier-Felder des Maschinenvertrags (`src/content.config.ts`) sind für das Dossier in `entry.data` verfügbar; **erfüllt**
- die Darstellung bleibt für spätere technische Objektklassen skalierbar; **erfüllt durch das gemeinsame Dossier-Schema**
