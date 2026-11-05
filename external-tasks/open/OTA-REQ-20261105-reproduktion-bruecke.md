# OTA-REQ-20261105-002 – OTA-SCI-0086-2026-DE (Reproduktion in Mikro- und Teilgravitation): Realteil auf Verweis nach KUE-SCI-0187 kürzen

Status: open
Datum: 2026-11-05
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-05-OTA-SCI-0086-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0187-2026-DE`; §19 (Kanonregel, Engineering-Schnittstelle, NOXIA-Grenze) bleibt vollständig in OTA.
Voraussetzung: KUE-SCI-0187 v0.2 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-05`).

## Anlass

Die Abschnitte 1–15 und 18 von OTA-SCI-0086 decken sich mit KUE-SCI-0187. Was KUE fehlte (systematische Übersichten Gimunová 2024, Lung 2026, Ferraz 2026; mütterliche Physiologie; Reversibilität in Entwicklungsphasen; assistierte Reproduktion), ist in KUE-SCI-0187 v0.2 übernommen. KUE enthält zusätzlich die neuen RR-20-Generationenbefunde (PNAS 2026) und die Klinostat-Studie zur Spermiennavigation (Commun. Biol. 2026) – die OTA-Fassung kennt sie nicht.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

1. **Evidenzregel am Anfang behalten**, ergänzt um einen Satz:
   > Erste Mausdaten (RR-20, 2026) zeigen zudem, dass 42 Tage Raumflug vor der Empfängnis die Fruchtbarkeit der Töchter und die ovarielle Reserve der Enkelinnen mindern können; für Menschen ist das ungeprüft. `[R/H]`
2. **Abschnitte 1–15 ersetzen** durch diese Grundinformation:
   > Fortpflanzung und Entwicklung sind eine Kette getrennter Stufen – Gameten, Befruchtung, Implantation, Schwangerschaft, Geburt, neonatale Transition, Kindheit, Pubertät, Fertilität der nächsten Generation. Ein Nachweis auf einer Stufe belegt keine spätere. `[R]` Für Menschen fehlen Daten zu jeder Stufe ab der Befruchtung unter 0 g, 0,16 g oder 0,38 g; 1/6 g mildert bei adulten Mäusen einzelne Mikrogravitationsfolgen nur organspezifisch ab. `[R]` Gravitation und Strahlung sind unabhängige Risikoachsen. `[R]` Künstliche Gravitation ist ein plausibler, aber biologisch nicht dosierter Gegenmaßnahmenpfad. `[H/OFFEN]` Evidenz, Quellen und Einzelheiten: `DOC:KUE:KUE-SCI-0187-2026-DE`.
3. **Abschnitte 16–17** (Mars, Mond, Stationen; Engineering-Grenze) bleiben – sie verbinden mit OTA-TEC-0088/0093/0119 und KUEPER Engineering –, die biologischen Begründungen darin durch Verweis auf KUE-SCI-0187 ersetzen.
4. **Vollständig erhalten:** Dossier-Status und **§19** mit 19.1–19.3 (Fähigkeitsklassen als `[F/Kanonregel]`, Engineering-Schnittstelle `[H]`, Parametergrenze, Strahlenschutz, NOXIA-Grenze) – ohne inhaltliche Änderung.
5. **§18 Quellenanker:** auf `DOC:KUE:KUE-SCI-0187-2026-DE` umstellen; die Quellen dürfen als Kurzliste bleiben.
6. `summary` auf die Brückenfunktion umstellen; Versionssprung auf v1.3, Revisionsvermerk „2026-11-05: Realteil nach DOC:KUE:KUE-SCI-0187-2026-DE ausgelagert“. Kennzeichnung nicht stärker als KUE.

## Wirkung

- `noxia-universe`/`noxiagame`: §19.3 (NOXIA-Grenze) bleibt unverändert; die neuen Generationenbefunde ändern die Regel „keine Geburtenraten oder Entwicklungsabzüge“ nicht, stützen sie eher. Kein eigener Request.
- OTA-SCI-0089-2026-DE (Human Adaptation by Gravity Environment) ist noch nicht begutachtet.
