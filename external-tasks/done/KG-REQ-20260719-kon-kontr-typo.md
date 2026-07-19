# KG-REQ-20260719-kon-kontr-typo — Frontmatter-Tippfehler korrigieren

ID: REQ:L3:PENDING
Requester: SYS:KUEPER:knowledge-graph
Recipient: SYS:KUEPER:ota
Request Type: correction
Status: done
Created: 2026-07-19
Completed: 2026-07-19
Resolution Commit: f0e21b1ba5f5feea91e1fedadbb9347f29981137

## Anlass

`src/content/documents/OTA-BIO-0032-2026-DE.md` referenzierte im `knowledge.domains`-Block `KD:KON-KONTR:N1`. Diese ID existiert im KG nicht und soll dort auch nicht neu registriert werden — sie ist der bekannte Tippfehler für `KD:KON:N1`.

## Umgesetzte Änderung

In `OTA-BIO-0032-2026-DE.md` wurde `KD:KON-KONTR:N1` durch `KD:KON:N1` ersetzt. Level `N1` und Purpose `read` bleiben unverändert.

## Ergebnis

`OTA-BIO-0032-2026-DE.md` referenziert jetzt die kanonische Domain `KD:KON:N1`.
