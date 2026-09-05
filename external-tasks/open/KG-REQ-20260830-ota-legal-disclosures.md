# KG-REQ-20260830-ota-legal-disclosures — OTA-spezifische Hinweise und technische Fakten zurückmelden

ID: REQ:L3:PENDING
Requester: SYS:KUEPER:ota
Recipient: SYS:KUEPER:knowledge-graph
Request Type: information_report
Status: open
Created: 2026-08-30
Source: REQ-KG-LEGAL-ACCESS-20260710 (Requested Change 6)

## Anlass

Bei der Umsetzung von REQ-KG-LEGAL-ACCESS-20260710 (zentrale Rechtstexte aus
dem KG beziehen) sind OTA-spezifische rechtliche Hinweise und technische Fakten
angefallen, die nicht Teil der zentralen Legal-Dokumente
(`DOC:KUE:LEGAL-IMPRINT-DE`, `DOC:KUE:LEGAL-PRIVACY-DE`, `DOC:KUE:LEGAL-TERMS-DE`)
sind. Requested Change 6 verlangt, OTA-spezifische technische Fakten als
KG-Request zurückzumelden.

## OTA-spezifische Fakten (Bericht)

1. **Fiktivitäts-Haftungsausschluss**: Die Inhalte des OverTime Archive sind —
   sofern nicht anders gekennzeichnet — fiktiver Natur und dienen ausschließlich
   literarischen und künstlerischen Zwecken. Dokumente mit Marker `[F]` (Fiktiv)
   sind erfundene Inhalte des transmedialen Archivprojekts; Dokumente mit
   Marker `[R]` (Real) basieren auf verifizierbaren wissenschaftlichen Quellen.
   Dieser Hinweis wird OTA-seitig lokal gepflegt und auf `/impressum` gerendert;
   er ist OTA-spezifisch und kein zentraler Legal-Text.
2. **Urheberrecht und Lizenz**: Alle OTA-Inhalte (Texte, Dokumente, Grafiken,
   Strukturen) sind urheberrechtlich geschützt; veröffentlichte Archivdokumente
   stehen, sofern nicht anders angegeben, unter CC BY-NC 4.0.
3. **KI-Transparenz**: `/ki-transparenz`
   (ECO:POLICY:PUBLICATION-TRANSPARENCY v1.0.0) ist die OTA-seitige
   Transparenzseite zum Einsatz KI-gestützter Werkzeuge.
4. **Hosting (Requested Change 7)**: Die öffentliche Auslieferung erfolgt über
   Vercel (Projekt `overtime-archive-org`, verbunden mit GitHub-Repo
   `thomaspeterkueper/overtime-archive.org`). Keine GitHub-Pages-Auslieferung
   als produktiver OTA-Host festgestellt — keine Abweichung zu melden.

## Gewünschte Änderung (KG)

Entscheidung, ob die OTA-spezifischen Hinweise (Fiktivitäts-Haftungsausschluss,
`[F]`/`[R]`-Marker-Policy, Urheberrecht, CC BY-NC 4.0, KI-Transparenz) als
OTA-scoped Einträge im Legal-Registry des KG registriert werden sollen. Bis zu
einer Entscheidung hält das OTA diese Hinweise lokal vor (sie sind
OTA-spezifisch und keine zentralen Rechtstexte) und rendert sie auf
`/impressum`; eine lokale inhaltliche Pflege oder Abwandlung der zentralen
Rechtstexte erfolgt nicht.

## Erwartetes Ergebnis

KG-Entscheidung und ggf. Registry-Einträge; das OTA rendert die Hinweise
zwischenzeitlich lokal weiter.
