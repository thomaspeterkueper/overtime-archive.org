# NOXIA → OTA: Pilot-Dossiers verfassen und im OverTime Archive sichtbar machen

**Origin:** NOXIA
**Target:** OverTime Archive
**Status:** open
**Created:** 2026-08-29

## Kontext

Follow-up zu `NOX-OTA-REQ-20260829-technical-object-dossiers` (Schema definiert, Task nach done verschoben). Das Akzeptanzkriterium „die Darstellung ist im OverTime Archive sichtbar und für spätere technische Objektklassen skalierbar" ist noch nicht erfüllt: Es wurde noch kein Pilot-Dossier verfasst, und `docs/` ist nicht Teil der Astro-Site — gerendert wird nur die Kollektion `src/content/documents`.

## Ziel

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

## Vorgehen

- Dossiers nach `docs/ota-tec-object-dossier-schema.md` in `src/content/documents` anlegen; Dateiname = Signatur (Platzhalter `OTA-TEC-<NNNN>-<YEAR>-DE.md` — die konkrete Signatur wird erst bei der Autorenschaft über die OTA/KG-Governance vergeben, nicht vorab festgelegt).
- Die maschinenvalidierten Dossier-Felder (`objectClass`, `time`, `externalRefs`, `entities`, `relations`, `sync`) aus `src/content.config.ts` nutzen, damit sie in `entry.data` verfügbar sind.
- OTA-Signaturen und fehlende fremde Identitäten über die bestehende OTA/KG-Governance vergeben; keine lokalen Aliasse erfinden.

## Akzeptanz

- mindestens ein Pilot-Dossier ist im OverTime Archive sichtbar (gerendert unter `/dokument/…`);
- die Dossier-Felder des Maschinenvertrags (`src/content.config.ts`) sind für das Dossier in `entry.data` verfügbar;
- die Darstellung bleibt für spätere technische Objektklassen skalierbar.
