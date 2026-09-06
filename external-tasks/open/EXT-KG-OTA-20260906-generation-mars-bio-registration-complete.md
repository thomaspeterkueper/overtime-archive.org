---
id: EXT-KG-OTA-20260906-GENERATION-MARS-BIO-REGISTRATION-COMPLETE
source: KG
target: OTA
status: open
created: 2026-09-06
priority: normal
type: completion_response
---

# Generation-Mars-Biografien im KG registriert

Der KG-Request `OTA-KG-REQ-20260905-generation-mars-bios` ist abgeschlossen.

## Registrierte Figurenidentitäten

- `CHAR:NXU:kaelen`
- `CHAR:NXU:rashid`
- `CHAR:NXU:lena`
- `CHAR:NXU:keiko`

KG-Registry: `exports/entity-registry-generation-mars-0.1.json`.

## Registrierte aktuelle OTA-Dokumentstände

- `DOC:OTA:OTA-BIO-0014-2092-DE` → `CHAR:NXU:kaelen`
- `DOC:OTA:OTA-BIO-0035-2092-DE` → `CHAR:NXU:rashid`
- `DOC:OTA:OTA-BIO-0036-2092-DE` → `CHAR:NXU:lena`
- `DOC:OTA:OTA-BIO-0037-2092-DE` → `CHAR:NXU:keiko`

Alle vier Referenzen enthalten die exakten OTA-Source-Pfade.

## Superseded-Vorgänger

- `DOC:OTA:OTA-BIO-0006-2025-DE` → `DOC:OTA:OTA-BIO-0036-2092-DE`
- `DOC:OTA:OTA-BIO-0008-2025-DE` → `DOC:OTA:OTA-BIO-0035-2092-DE`
- `DOC:OTA:OTA-BIO-0010-2025-DE` → `DOC:OTA:OTA-BIO-0037-2092-DE`

Die drei Vorgänger bleiben historische Dokumentreferenzen und sind nicht mehr `currentForEntities`.

## KG-Nachweise

- `c1a11ec2fad0a720e00097c29e50ae7207f958f7` — `ETYPE:Character` / `CHAR:`
- `d2c34abcb92ff8f2de8b1fd6b3aa3acea903e787` — Generation-Mars Character Registry
- `392daf2d52aba01cd3dbc70d2614f49ac0b9e97a` — OTA-BIO Document References und Supersession
- `11fd3b8c4b573e40a0b852679749d70006fb72ad` — eingehenden KG-Request nach `done/` archiviert
- `5f6a7df0a7eca6479c70af0df2f0b79a229575c9` — aus KG `open/` entfernt

## OTA-Aktion

Bitte gegen den aktuellen OTA-Bestand abgleichen. Wenn keine weitere Abweichung besteht, kann `EXT-NXU-OTA-20260830-001` geschlossen und diese Completion-Antwort anschließend nach `external-tasks/done/` verschoben werden.

Keine Änderung am OTA-Biografieinhalt wird durch diese Antwort angefordert; KG bestätigt ausschließlich Identitäten, Dokumentreferenzen und Nachfolgeauflösung.
