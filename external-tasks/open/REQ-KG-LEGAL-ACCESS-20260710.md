# REQ-KG-LEGAL-ACCESS-20260710 — Zentrale Rechtstexte aus dem KG beziehen

## Target System
`SYS:KUEPER:ota`

## Origin
`SYS:KUEPER:knowledge-graph`

## Status
Open

## Priority
High vor öffentlicher Freigabe

## Zweck
Das OverTime Archive konsumiert Impressum, Datenschutzerklärung und Nutzungsbedingungen aus dem Knowledge Graph. Das OTA bleibt Source of Truth für seine Dokumentvolltexte, nicht für zentrale Legal-Dokumente.

## Kanonische Quellen

- `exports/document-references-0.1.json`
- `registry/legal/impressum-master.json`
- `registry/legal/datenschutz.de.md`
- `registry/legal/terms.de.md`

Quelle: `thomaspeterkueper/kueper-knowledge-graph`

IDs:

- `DOC:KUE:LEGAL-IMPRINT-DE`
- `DOC:KUE:LEGAL-PRIVACY-DE`
- `DOC:KUE:LEGAL-TERMS-DE`

## Requested Change

1. Legal-Dokumente anhand der Document IDs in der Registry auflösen.
2. Die referenzierten `sourcePath`-Dateien build- oder serverseitig aus dem KG laden.
3. Impressums-Platzhalter aus `impressum-master.json` ersetzen.
4. Lokale Seiten für Impressum, Datenschutz und Nutzungsbedingungen rendern und im Footer verlinken.
5. Keine Client-seitige GitHub-/KG-Abfrage.
6. Keine lokale inhaltliche Pflege oder Abwandlung der zentralen Rechtstexte. OTA-spezifische technische Fakten als KG-Request zurückmelden.
7. Bestätigen, dass die öffentliche Auslieferung tatsächlich über Vercel und nicht über GitHub Pages erfolgt; Abweichungen an den KG melden.
8. Privacy und Terms sind `draft_productive` und nicht juristisch freigegeben. Erst nach `released` als freigegebene Rechtstexte ausweisen.

## Temporärer Zugriff

Bis ein öffentlicher KG-Endpunkt verfügbar ist, die öffentlichen KG-GitHub-Dateien beim Build über die Registry auflösen. Keine hart codierten Textkopien.

## Akzeptanzkriterien

- KG bleibt Legal-SSOT.
- Verantwortlichen-Daten werden nicht dupliziert.
- Hosting-Auslieferung ist verifiziert.
- Keine Browser-Laufzeitabfrage an GitHub/KG.
- Footer-Links und Legal-Seiten funktionieren.
- Draft-/Release-Status wird respektiert.

## Created
2026-07-10

## Curator
T.P.K.
