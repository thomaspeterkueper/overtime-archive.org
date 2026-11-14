# OTA-REQ-20261114-001 – OTA-TEC-0019-2091-DE (ECLSS Survival-Protokolle, KITE): CO₂-Realanker an KUE-SCI-0178 v0.2 angleichen

Status: open
Datum: 2026-11-14
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-14-OTA-TEC-0019-2091-DE.md`
Zuordnung: KUE-Gegenstück vorhanden – `DOC:KUE:KUE-SCI-0178-2026-DE` („Raumfahrzeug-Atmosphären und Notfall-Sauerstoff“). Der Realteil von OTA-TEC-0019 ist bereits auf wenige Anker reduziert und verweist auf KUE-SCI-0178; alle Alarmleitern, Leckraten, Survival- und Safe-Haven-Regeln sind KITE-Setzung [H/T/F] und bleiben.
Voraussetzung: `KUE-SCI-0178-2026-DE` in mindestens v0.2 in `kueper.com/main` (Branch `claude/review-2026-11-14`, Merge nach grüner Vercel-Vorschau).

## Anlass

Abgleich am 2026-11-14 mit NASA OCHMO-TB-004 „Carbon Dioxide“ (Rev. D, 2026-03-10): nominale Grenze 3 mmHg ppCO₂ im 1-Stunden-Mittel (NASA-STD-3001 Bd. 2, V2 6004); ISS-Flugregel seit 2016 3,0 mmHg im 24-Stunden-Mittel; frühere Anforderungen ließen 3,8–7,5 mmHg zu. Die in §3.1 genannten „historischen ISS-Schwellen 5,3 / 6,0 / 7,6 mmHg“ sind in diesen Quellen nicht belegt und auch in KUE-SCI-0178 nicht enthalten. KUE-SCI-0178 v0.2 führt die belegten Werte jetzt in §III.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **§3.1, erster Absatz** ersetzen durch:
   > Als heutiger NASA-Realanker gilt ein ppCO₂-Mittel von höchstens 3 mmHg über eine Stunde; frühere Anforderungen ließen 3,8–7,5 mmHg zu. `[R]` Diese Werte definieren keine universelle Gegenmaßnahme und insbesondere keine zwingende LiOH-Aktivierung. Werte und Quellen: `DOC:KUE:KUE-SCI-0178-2026-DE` §III.
B. Tabelle in §3.1 (KITE-Stufen) bleibt unverändert, einschließlich der Statusspalte.
C. Versionssprung auf v1.4 (Frontmatter, Kopfzeile „Version“), Revisionsvermerk: „2026-11-14 — v1.4: CO₂-Realanker an DOC:KUE:KUE-SCI-0178-2026-DE v0.2 angeglichen; unbelegte Analogwerte 5,3/6,0/7,6 mmHg entfernt (OTA-REQ-20261114-001).“ Nicht stärker kennzeichnen als KUE-SCI-0178.

## Nicht Teil dieses Requests

Alle KITE-Werte (CO₂-, Leckraten-, pO₂-Bänder), §II, §IV–§VII, die Kuratornotiz [KN-01], der Wasserwert „2 L/Pax/Tag“ als KITE-Survivalwert und der Satz zum NASA-Realanker „ungefähr 2,5 L/Person/Tag“ bleiben unverändert. Der Wasser-Anker fehlt in KUE noch (siehe Wirkung).

Hinweis ohne Handlungsauftrag: Die Kopfzeile führt „Status: Kanonisch“, das Frontmatter `status: AKTIV`, der Titel im Frontmatter ist nur die Signatur – wie bei anderen KITE-Dokumenten; das entscheidet Thomas gesondert, falls gewünscht.

## Wirkung

- `kueper.com/external-tasks/open/EXT-OTA-KUE-20261114-001.md`: NASA-Trinkwasser-Referenz (≈ 2,5 L/Person/Tag) als Realanker in KUE nachtragen.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-TEC-0019-2091-DE aktualisiert.
