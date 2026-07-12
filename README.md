# OverTime Archive (overtimearchive)

Werkbezogene Real/Fiction-Schicht des KUEPER-Ökosystems. Dieses Repository
enthält die Archiv- und Anwendungsschicht: In-universe-Archivdokumente,
fiktionale Spiegel realer Grundlagen, temporale Dossiers und narrative
Kontextualisierung. Es ist eine Astro-Site.

## Rolle im Ökosystem

OTA ist Source of Truth ausschließlich für seine eigenen Dokumente, deren
Metadaten, Archivstruktur und Publikationsworkflow. OTA ist **nicht** Source of
Truth für wissenschaftliche Grundlagen, zentrale Rechtstexte oder systemweite
Governance.

Verbindliche systemweite Regeln liegen im Repository `kueper-ecosystem`:

- Repository-Rollen und Zuständigkeiten
- Source-of-Truth-Regeln
- Cross-Repository-Workflow
- Dokument-Architektur (`decisions/ECO-ARC-0007-2026-DE.md`)

Der Kueper Knowledge Graph (`kueper-knowledge-graph`) bleibt Source of Truth für
geteilte Wissens-Records. OTA-Dokumente dürfen Knowledge-Graph-IDs referenzieren,
diese aber nicht verändern.

## Interne Dokumente

- [`GOVERNANCE.md`](GOVERNANCE.md) — Zuständigkeiten und Master-Data-Regeln von OTA
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — Beitragshinweise
- [`AI_RULES.md`](AI_RULES.md) — Regeln für KI-gestützte Bearbeitung

## Cross-Repository-Anforderungen

Änderungswünsche an OTA von anderen Projekten liegen unter `external-tasks/open/`.
Bearbeitete Anforderungen werden nach `external-tasks/done/` bzw. `rejected/`
verschoben. Das verbindliche Task-Format definiert `ECO-ARC-0006` im
`kueper-ecosystem`.

## Entwicklung

```bash
npm install
npm test
```
