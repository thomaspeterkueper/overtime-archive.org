# KG-REQ-20260719-kon-kontr-typo — Frontmatter-Tippfehler korrigieren

ID: REQ:L3:PENDING
Requester: SYS:KUEPER:knowledge-graph
Recipient: SYS:KUEPER:ota
Request Type: correction
Status: open
Created: 2026-07-19

## Anlass

`src/content/documents/OTA-BIO-0032-2026-DE.md` referenziert im `knowledge.domains`-Block
`KD:KON-KONTR:N1`. Diese ID existiert im KG nicht und soll dort auch nicht neu registriert
werden — sie ist der bekannte Tippfehler für `KD:KON:N1` (kanonisch registriert, „gleiche
Aussage, kürzer" — Kuratorentscheidung vom 2026-07-12, seinerzeit bereits in der
relation-registry normalisiert).

Aufgefallen bei der Bearbeitung von `KG-REQ-20260718-004` (unregistrierte KD-IDs):
`KD:KON-KONTR:N1` ist die einzige verbleibende unregistrierte Referenz im gesamten
OTA-Dokumentenbestand.

## Gewünschte Änderung

In `OTA-BIO-0032-2026-DE.md`, im `knowledge.domains`-Block: `KD:KON-KONTR:N1` →
`KD:KON:N1` (Level bleibt `N1`, unverändert).

## Begründung

Verhindert eine Dublette im KG (zwei IDs für dieselbe Domäne) und hält den
OTA-Dokumentenbestand konsistent mit der kanonischen Domain-Registrierung.

## Betroffene Repositories

- `overtime-archive.org` (Textkorrektur, 1 Datei)

## Erwartetes Ergebnis

`OTA-BIO-0032-2026-DE.md` referenziert `KD:KON:N1`; keine unregistrierten KD-Referenzen
mehr im OTA-Bestand.

## Hinweise

Nicht blockierend. Rein redaktionelle Korrektur, keine inhaltliche Änderung.
