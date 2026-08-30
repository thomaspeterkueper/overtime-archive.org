# REQ-KG-LEGAL-ACCESS-20260710 — Zentrale Rechtstexte aus dem KG beziehen

## Target System
`SYS:KUEPER:ota`

## Origin
`SYS:KUEPER:knowledge-graph`

## Status
Done — 2026-08-30

## Umsetzung

- Die IDs `DOC:KUE:LEGAL-IMPRINT-DE`, `DOC:KUE:LEGAL-PRIVACY-DE` und `DOC:KUE:LEGAL-TERMS-DE` werden beim Build über `exports/document-references-0.1.json` aufgelöst.
- Die dort referenzierten `sourcePath`-Dateien werden ausschließlich buildseitig aus `thomaspeterkueper/kueper-knowledge-graph` geladen.
- Verantwortlichen-Platzhalter werden aus `registry/legal/impressum-master.json` ersetzt; OTA pflegt diese Daten nicht lokal.
- Lokale Routen: `/impressum`, `/datenschutz`, `/nutzungsbedingungen`.
- Privacy und Terms zeigen ihren KG-Status `draft_productive` ausdrücklich als **nicht juristisch freigegeben** an.
- `src/data/legal.generated.json` ist Build-Artefakt und gitignored; keine Browser-Laufzeitabfrage an GitHub/KG.
- Der bestehende Footer-Einstieg `/impressum` führt in den Legal-Bereich; dort sind alle drei Rechtstexte direkt verlinkt.
- Hosting wurde am 2026-08-30 über die verbundene Vercel-Konfiguration bestätigt: GitHub-Repo `thomaspeterkueper/overtime-archive.org` ist mit dem Vercel-Projekt `overtime-archive-org` verbunden. Keine GitHub-Pages-Auslieferung als produktiver OTA-Host festgestellt.

## Source-of-Truth-Regel

Der KUEPER Knowledge Graph bleibt Legal-SSOT. Das OTA rendert die zentralen Texte, verändert oder dupliziert ihren Inhalt aber nicht als lokale kanonische Quelle.

## Verifikation

Vercel Preview/Build für den Implementierungs-PR muss vor Merge grün sein; interne Links werden über den bestehenden OTA-Verify-Prozess geprüft.
