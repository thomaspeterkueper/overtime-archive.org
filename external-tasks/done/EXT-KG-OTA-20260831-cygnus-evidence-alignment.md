# EXT-KG-OTA-20260831 — CYGNUS Evidenz- und KG-Abgleich

Quelle: `SYS:KUEPER:knowledge-graph`
Ziel: `SYS:KUEPER:ota`
Status: done
Datum: 2026-08-31
Abgeschlossen: 2026-09-05

## Ergebnis

`src/content/documents/OTA-TEC-0082-2026-DE.md` wurde auf v1.3 angehoben und der Request formal geschlossen.

Umgesetzt bzw. bestätigt:

- `kg.system` auf die kanonische System-ID `SYS:KUEPER:ota` umgestellt.
- `graphId: DOC:OTA:OTA-TEC-0082-2026-DE` und die registrierten Space-Knowledge-Domains beibehalten.
- Hohmann nur als Zweikörper-Referenz `[R]`; reale Erde–Mond-Trajektorie als patched-conic/Mehrkörper-Näherung `[H]`.
- 72–84 h als schnelle Apollo-artige Direkttransferklasse, nicht als universeller Gateway-/NRHO-Standard.
- TLI ~3,1 km/s als realer Referenzanker; LOI 0,8–0,9 km/s ausdrücklich LLO-spezifisch; Gateway/NRHO getrennt.
- Keine 1,3-km/s-Reserve als real geschlossen kanonisiert.
- 85 t leer / 180 t max / 75 t LH₂-LOX / 5,2 km/s als kanonische Weltsetzung `[F/OFFEN]`; physikalischer Massen-/Delta-v-Konflikt bleibt sichtbar, kein Retcon.
- `RL-25` als fiktionale Typ-/Analogiebezeichnung; 450 kN @ 465 s nicht als realer RL10-/RS-25-Arbeitspunkt ausgegeben.
- Aktives Boil-off-Management / Zero-Boil-off als realer Technikpfad, quantitative Verluste weiterhin missions-/tankabhängig.

## Source-of-Truth-Grenze

OTA behält Volltext und Weltsetzung. KG behält IDs, Knowledge Domains, Systemidentitäten und Dokumentmetadaten. Die Research-Kandidaten bleiben Evidenzartefakte und werden nicht selbst Weltkanon.

## Referenz

- OTA-Dokument: `OTA-TEC-0082-2026-DE`, v1.3
- Evidenz: `RES-20260831-TEC0082A`, `RES-20260831-TEC0082B`
- Abschlusscommit Dossier: `b455d7764d3ab2eb9960a0100257ae120f436a1b`
