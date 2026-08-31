# EXT-KG-OTA-20260831 — CYGNUS Evidenz- und KG-Abgleich

Quelle: `SYS:KUEPER:knowledge-graph`
Ziel: `SYS:KUEPER:ota`
Status: open
Datum: 2026-08-31

## Anlass

Der Knowledge Graph hat auf Basis des aktiven Dossiers `OTA-TEC-0082-2026-DE` und des Evidenzaudits `RES-20260831-TEC0082A` die fehlenden kanonischen Identitäten registriert:

- `DOC:OTA:OTA-TEC-0082-2026-DE`
- `KD:SPACE:N1`
- `KD:SPACE-ORBITAL-MECHANICS:N2`
- `KD:SPACE-PROPULSION:N1`

Kanonische KG-System-ID für OTA ist `SYS:KUEPER:ota`.

## Anforderung an OTA

Bitte `src/content/documents/OTA-TEC-0082-2026-DE.md` fachlich und metadatenseitig an den geprüften Stand angleichen, ohne die fiktionalen Setzungen des Dossiers eigenmächtig umzuschreiben.

### 1. KG-Metadaten

Im `kg`-Block:

- `graphId: DOC:OTA:OTA-TEC-0082-2026-DE` beibehalten.
- `system` von `SYS:OTA:overtimearchive` auf `SYS:KUEPER:ota` umstellen oder den alten Wert nur explizit als Legacy-Alias führen.
- Knowledge-Domain-IDs beibehalten; sie sind jetzt im KG kanonisch registriert.

### 2. Hohmann-/Transferformulierung

Gemäß `RES-20260831-TEC0082A` die Kurzform „Hohmann-Transfer“ in §2 und den entsprechenden Standardflugprofil-Stellen so qualifizieren, dass klar bleibt:

- Zweikörper-Hohmann = realer Referenzfall `[R]`.
- Erde–Mond-Flugbahn = patched-conic/Mehrkörper-Näherung `[H]`.
- 72–84 h = schneller Apollo-artiger Direkttransfer, nicht generischer Gateway-/NRHO-Standard.

### 3. Delta-v und Zielorbit

- `3,1 km/s` TLI als realistischen Referenzanker beibehalten.
- LOI-/Insertionswerte explizit nach Zielorbit trennen; etwa 0,8–0,9 km/s ist LLO-spezifisch und nicht pauschal für Gateway/NRHO gültig.
- Eine angebliche `1,3 km/s` Reserve nicht als real geschlossen darstellen.

### 4. Massen-/Treibstoff-/Delta-v-Kombination

Die geerbten Setzungen `85 t leer / 180 t max / 75 t LH2-LOX / 5,2 km/s` bleiben Weltkanon, aber ausdrücklich `[F/OFFEN]`.

Der Evidenzaudit zeigt, dass diese Kombination mit Hydrolox-Isp 450–465 s physikalisch nicht schließt. Keine Umklassifikation zu `[R]` und keine Scheingenauigkeit ergänzen.

### 5. Triebwerksbezeichnung

`RL-25` als fiktionale Typbezeichnung/Analogie behandeln. Nicht als reales Triebwerk behaupten. Die Kombination 450 kN / 465 s entspricht keinem realen RL10-/RS-25-Arbeitspunkt.

### 6. Kryotechnik

Aktives Boil-off-Management / Zero-Boil-off als realen technischen Anker zulassen; quantitative Verlustwerte nur dort übernehmen, wo sie im Dossier sauber als Bandbreite und missions-/tankabhängig markiert werden.

## Source-of-Truth-Grenze

OTA besitzt den Volltext und die Weltsetzung des Dossiers. KG besitzt IDs, Knowledge Domains, Systemidentitäten und Dokumentmetadaten. Der Research-Kandidat bleibt Evidenzartefakt und wird nicht selbst zum Weltkanon.

## KG-Referenzen

- `docs/KG-0018-SPACE-DOMAINS-CYGNUS.md`
- `exports/knowledge-domains-space-0.1.json`
- `exports/entity-registry-space-0.1.json`
- `exports/document-references-space-0.1.json`
- `exports/kxf-0.6.json` ab Version `0.6.5`
