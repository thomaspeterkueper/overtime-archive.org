# EXT-KG-OTA-20260831 — Audited technical alignment: OTA-TEC-0019, 0029, 0085

Requester: `SYS:KUEPER:knowledge-graph`  
Recipient: `SYS:KUEPER:ota`  
Type: evidence_alignment  
Status: done  
Date: 2026-08-31  
Completed: 2026-09-05

## Ergebnis

Der dreiteilige Evidence-Alignment-Auftrag ist OTA-seitig abgeschlossen. Die fiktionalen Kanonwerte wurden nicht durch Realwerte überschrieben; reale Mess-/Technikanker und fiktionale bzw. hypothetische Setzungen sind jetzt explizit getrennt.

### OTA-TEC-0019-2091-DE

- auf v1.1 aktualisiert
- `kg.system` → `SYS:KUEPER:ota`
- `>15 mmHg` konsistent als SCHWARZ geführt
- CO₂-Realanker von KITE-Off-nominal-Schwellen getrennt
- Druck/pO₂/O₂-Fraktion/Dauer/Systemkontext gekoppelt
- Leak-Raten als KITE-[H/T]-Designwerte eingeordnet
- nicht belegte 30–60-s-O₂-Kerzenregel entfernt
- regenerative Sorbentensysteme von LiOH-Verbrauchsmaterial getrennt

Commit: `c31d94b7dab2c821b505a8c734bd480465ff71cc`

Der dedizierte R1-Unterrequest `EXT-KG-OTA-20260831-eclss-survival-sop-r1` wurde separat nach `external-tasks/done/` verschoben.

### OTA-TEC-0029-2048-DE

- auf v1.1 aktualisiert
- stale Thermische-Dioden-Frontmatter auf Quantensensorik/LOD korrigiert
- `kg.system` → `SYS:KUEPER:ota`
- Bothwell-Jahr auf 2019 korrigiert
- 3,2×10^-18-Fehlattribution an RIKEN entfernt; konkrete Uhr-/Publikationskontexte eingeführt
- institutionelle Uptime-/Kosten-/Präzisionsrangliste entfernt
- SQUID-Marketingfaktor und direkte Dst-Messbehauptung entfernt
- Atominterferometer-Leistungswerte an Integrationszeit gebunden
- LOD/EOP-Leistung an konkrete Produkt-/Messregime gekoppelt
- AVI-/KI-Netzwerk- und Korrelationswerte klar als [F/H/T] getrennt

Commit: `c3fa12f6f8d03099d793156e74d5ca351b4c42c4`

### OTA-TEC-0085-2026-DE

- auf v1.1 aktualisiert, Status bleibt `ENTWURF`
- `kg.system` → `SYS:KUEPER:ota`
- reale Hydrolox-Referenzspanne präzisiert
- 465-s-Einzelwert als realer oberer Referenzanker eingeordnet
- kanonische Kombination 450 kN @ 465 s unverändert als [F] erhalten
- externe Plausibilitätsprüfung der Kombination als [H] geführt
- Zyklus-, Kammerdruck-, Düsen- und Packaging-Constraints ergänzt
- Restart-/Reuse-Grenzen ergänzt
- Engine-out als fahrzeug- und missionsphasenabhängig geschärft
- Komponenten-Schema-/SSOT-Entscheidung bewusst offen gelassen

Commit: `b157ffdad4ac421ea6426a40abb01d175ef31b76`

## Acceptance criteria

1. Evidence corrections incorporated without replacing fictional canon with current real-world values: **erfüllt**.
2. Alle drei Header verwenden `SYS:KUEPER:ota`: **erfüllt**.
3. OTA-TEC-0085 bleibt nicht-kanonisch/ENTWURF: **erfüllt**.
4. OTA-TEC-0019 ist mit dem dedizierten R1-Survival-SOP-Request konsistent: **erfüllt**.
5. OTA-TEC-0029 Frontmatter und reale Performanceclaims sind nach Messgröße/Instrument/Quelle/Integrationsregime getrennt: **erfüllt**.

## Referenzen

- `RES-20260831-C1748BD0` — ECLSS Survival-SOP R1
- `RES-20260831-4CE6D2E5` — Quantensensorik/LOD R1
- `RES-20260830-TEC0085A` — RL-25/Hydrolox Audit
