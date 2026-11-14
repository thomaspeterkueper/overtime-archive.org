# OTA-REQ-20261112-002 – OTA-TEC-0029-2048-DE (Quantensensorik & KI für LOD-Validierung): Realteil auf Verweis nach KUE-SCI-0177 kürzen

Status: done
Erledigt: 2026-11-14 – umgesetzt in OTA-TEC-0029-2048-DE v1.3 durch die Begutachtung (ECO-ARC-0038 §3b); Voraussetzung KUE-SCI-0177 v0.2 (mit EXT-OTA-KUE-20261112-002) seit 2026-11-14 in kueper.com/main.
Datum: 2026-11-12
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-12-OTA-TEC-0029-2048-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0177-2026-DE`; dort fehlende Angaben (konkrete Uhrenwerte, Rekorde 2024/2025, Atominterferometer, Erdrotation/Length of Day) per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261112-002.md`.
Voraussetzung: `KUE-SCI-0177-2026-DE` mit den Ergänzungen aus EXT-OTA-KUE-20261112-002 (Version ≥ 0.2) ist in `kueper.com/main` gemergt. Erst danach umsetzen.

## Anlass

Die Realanker wurden im September 2026 (v1.1) sorgfältig bereinigt; nichts ist widerlegt. Seitdem überholt: „Optische Uhren haben die 10^-18-Klasse erreicht“ – Spitzenwerte liegen inzwischen im unteren 10^-19-Bereich (Aeppli et al. 2024, PRL 133, 023401: 8×10^-19, ⁸⁷Sr; Marshall et al. 2025, PRL 135, DOI 10.1103/hb3c-dk28: 5,5×10^-19, ²⁷Al⁺). Der Realteil (Abschnitte 1 und 2, Literatur 1–4 und 7–10) doppelt künftig KUE-SCI-0177. Hinweis: Die Zuordnung „RIKEN transportable Sr-Uhr, 2021, 5,5×10^-18“ ist im KUE-Request zur Prüfung vermerkt (Paarvergleich Takamoto et al. 2020, Nature Photonics).

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **Abschnitt „1. Quantensensorik-Grundlagen“ (1.1–1.3 einschließlich Tabelle) ersetzen** durch „1. Quantensensorik-Grundlagen (Kurzfassung) [R]“ mit dieser Grundinformation:
   > Optische Gitter- und Ionenuhren erreichen systematische Unsicherheiten bis in den unteren 10^-19-Bereich (2024/2025); systematische Unsicherheit und Stabilität sind getrennte Größen. SQUIDs messen lokale Magnetfelder mit Rauschdichten von wenigen fT/√Hz, aber nicht direkt den Dst-Index, der aus einem Netz von Observatorien abgeleitet wird. Atominterferometer messen Beschleunigung und Rotation; ihre Leistungswerte gelten nur zusammen mit der Integrationszeit. `[R]` Werte, Publikationen und Grenzen: `DOC:KUE:KUE-SCI-0177-2026-DE`.
B. **Abschnitt „2. LOD / Earth-Orientation-Parameter“ ersetzen** durch „2. LOD / Earth-Orientation-Parameter (Kurzfassung) [R]“:
   > Die Tageslänge (Length of Day, LOD) wird vor allem aus VLBI bestimmt und mit GNSS- und SLR-Beiträgen zu kombinierten IERS-Produkten verarbeitet; ihre Genauigkeit hängt von Produkt und Sitzung ab und ist keine Eigenschaft einer Technikklasse. `[R]` Einzelheiten: `DOC:KUE:KUE-SCI-0177-2026-DE`.
C. **Abschnitt „8. Literaturverweise“:** Einträge 1–4 und 7–10 durch einen Eintrag „Reale Messanker (optische Uhren, SQUID, Atominterferometer, Dst, IERS/EOP): siehe `DOC:KUE:KUE-SCI-0177-2026-DE`“ ersetzen; Einträge 5, 6, 11, 12 bleiben.
D. **Erhalten (unverändert):** Metadaten-Block, „Beziehung zum Hauptdokument“, „Evidenzregel“, Abschnitte 3–7 (Netzwerk, KI-Analyse, Methodenvergleich, Spiralkristall-Integration, Budget) und die Fußzeilen.
E. **Frontmatter:** `summary` ergänzen um „Realanker in KUE-SCI-0177“. Versionssprung auf v1.3 (Frontmatter und Metadaten-Block), Revisionsvermerk im Abschnitt „Revisionsverlauf“: „2026-11-12 – v1.3: Realteil (Abschnitte 1–2, Literatur 1–4, 7–10) nach DOC:KUE:KUE-SCI-0177-2026-DE ausgelagert; Uhrenstand auf 10^-19 aktualisiert (OTA-REQ-20261112-002).“ Kennzeichnung nicht stärker als im KUE-Dokument.

## Nicht Teil dieses Requests

AVI-/SSF-Messarchitektur, Stationsnetz, Korrelationsschwellen, KI-Annahmen und Budget [F]/[H]/[T] bleiben wörtlich. Hinweis ohne Änderungsauftrag: Der Revisionsverlauf v1.2 nennt `kg.system` „SYS:KUEPER:ota“, das Frontmatter führt „SYS:OTA:overtimearchive“ – bei Gelegenheit klären.

## Wirkung

`status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-TEC-0029-2048 in Gruppe K aktualisiert. `OTA-TEC-0028-2048-DE` (Hauptdokument, Gruppe B) stützt sich auf dieselben Messanker und wird bei seiner Begutachtung auf denselben KUE-Verweis geprüft.
