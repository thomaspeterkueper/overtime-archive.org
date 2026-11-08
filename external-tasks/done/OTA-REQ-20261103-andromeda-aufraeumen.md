# OTA-REQ-20261103-002 – OTA-SCI-0116-2026-DE (Andromeda als Welteninsel): zum Brückendokument mit Verweis auf KUE-SCI-0198 verschlanken

Status: done
Erledigt: 2026-11-08 (Umsetzung nach ECO-ARC-0038 §3b; OTA-SCI-0116 v0.2)
Datum: 2026-11-03
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-03-OTA-SCI-0116-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0198-2026-DE`; inhaltlich reines Realdossier, bleibt als schlankes Brückendokument (§3a)
Voraussetzung: KUE-SCI-0198 v0.2 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-03`).

## Anlass

OTA-SCI-0116 enthält keine Setzung [F]/[W] und keinen Werkbezug außer dem Hinweis auf die erzählerische Perspektive. Methode, Erkenntnisgeschichte (Leavitt 1912, Debatte 1920, Hubble 1924/25 und 1929, Baade 1952) und heutige Messwerte stehen seit v0.2 in KUE-SCI-0198, dort mit Primärquellen.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

1. **Abschnitte „Beobachtung und Folgerung“ und „Erkenntnisschichten“ ersetzen** durch:
   > Edwin Hubble fand 1924/25 Cepheiden im Andromedanebel und zeigte mit ihrer Perioden-Leuchtkraft-Beziehung, dass M31 weit außerhalb der Milchstraße liegt. Sein damaliger Wert (rund 900 000 Lichtjahre) beruhte auf einer später korrigierten Kalibration; heute gilt etwa 2,5 Millionen Lichtjahre. Historische und heutige Werte sind deshalb immer mit Epoche und Methode anzugeben. Belege und Einzelheiten: `DOC:KUE:KUE-SCI-0198-2026-DE`.
2. **Erhalten:** Anlass (AstroGeo-Podcast) und aus „Anwendungen“ die Punkte **OTA** (historische/erzählerische Perspektive, Wissensstand und Beobachterstandpunkt nicht vermischen) und **SCION** (Tests historischer vs. aktueller Parameter). Die Punkte KUEPER, KG und SSF auf einen Satz mit Verweis kürzen („KUEPER: erledigt – KUE-SCI-0198“).
3. „Quellen-/Qualitätsstatus“ durch den Verweis auf KUE-SCI-0198 ersetzen; die dort genannten Lücken sind dort geschlossen.
4. `relatedDocuments` bleibt leer (kein OTA-Bezugsdokument); `summary` auf die Brückenfunktion umstellen.
5. Versionssprung auf v0.2, Revisionsvermerk „2026-11-03: Realteil nach DOC:KUE:KUE-SCI-0198-2026-DE ausgelagert“. Kennzeichnung nicht stärker als KUE (dort [R] für Geschichte und Messwerte, [OFFEN] für die Hubble-Spannung).

## Wirkung

Keine auf andere Repositories. Abweichungen, die KUE fehlten (Erkenntnisschichten Kant/Wright), wurden direkt in KUE-SCI-0198 (Entwurf) übernommen.
