---
id: EXT-KG-OTA-20260831-mars-medical-center-evidence-alignment
title: OTA-TEC-0088 an Evidenz zu medizinischer Autonomie auf dem Mars ausrichten
status: done
source: KG
target: OTA
created: 2026-08-31
completed: 2026-09-05
requested_by: research-validation-loop
priority: high
affects: [KG, OTA]
---

## Anlass

Research Candidate `RES-20260831-TEC0088A` wurde im Knowledge Graph review-gated integriert. Das Audit bestätigt wesentliche `[R]`-Anker von `OTA-TEC-0088-2026-DE`, zeigt aber zugleich, dass konkrete Kapazitäts-, Personal-, Blutbank- und Versorgungsannahmen für eine Mars-Siedlung nicht aus heutiger Evidenz als lineare Fortsetzung terrestrischer Krankenhausplanung abgeleitet werden dürfen.

## Gewünschte Änderung

`OTA-TEC-0088-2026-DE` gegen den Candidate abgleichen und insbesondere:

1. **Earth-Independent Medical Operations verankern:** EIMO als reales NASA-Forschungs- und Missionsziel `[R]` führen: lange Missionsdauer, keine schnelle Evakuierung, begrenzte Kommunikation, autonome medizinische Entscheidungs- und Ressourcenfähigkeit.
2. **Capability-Reife differenzieren:** Ultraschall und begrenzte Point-of-Care-Diagnostik sind real erprobt; vollwertige autonome Chirurgie, umfassendes Labor, operative Zahnmedizin, On-site-Pharmazie und breite autonome Decision Support bleiben deutlich entwicklungsnäher und sollten `[H]/[OFFEN]` bleiben.
3. **Remote-/Antarktisanalogie begrenzen:** McMurdo/Concordia als qualitative Analogie für Isolation, geringe Personaldecke, Cross-Training, begrenzte Evakuierung und Ressourcenplanung verwenden, nicht als quantitativen Skalierungsstandard für eine Mars-Siedlung.
4. **Keine lineare 500-Personen-Skalierung:** konkrete Zahlen für Ärzte, Pflege, Betten, OP-Kapazität, Laborpersonal oder Massenanfall nicht aus terrestrischen Krankenhauskennzahlen hochrechnen. Solche Werte bleiben kanonische Architektur-/Worldbuilding-Entscheidungen und müssen als `[H]/[F/OFFEN]` kenntlich sein.
5. **Arzneimittelhaltbarkeit und Logistik:** mehrjährige Lagerung, Strahlungs-/Temperaturbelastung, Verbrauchsmaterialien und Nachschubzyklen als echte Missionsrisiken ausweisen; keine allgemeine Haltbarkeitsgarantie aus ISS-/Terrestrikdaten ableiten.
6. **Blutversorgung präzisieren:** Walking-Blood-Bank- und donor-basierte Konzepte als mögliche Remote-/Exploration-Lösung behandeln, nicht als etablierte Standardlösung für Mars. Lagerblut, Haltbarkeit, Typisierung, Infektionsscreening und Verbrauch im Ereignisfall bleiben eigene offene Systemfragen.
7. **Sterilisation und Isolation:** als notwendige Capability-Klassen führen, aber konkrete technische Auslegung nicht ohne separate Evidenz kanonisieren.

Bestehende fiktionale Setzungen für Generation Mars/NOXIA, Baukosten, Balancing und Siedlungsorganisation bleiben unberührt.

## Begründung

Der Candidate bestätigt die Grundidee eines hochautonomen Mars Medical Center, verhindert aber Scheingenauigkeit: heutige Raumfahrt- und Remote-Medizin liefert belastbare Funktionsanforderungen, jedoch keinen defensiblen Personal-/Betten-/Behandlungsschlüssel für eine etwa 500 Personen große Mars-Siedlung.

## Quelle

- KG Research Candidate: `research/candidates/RES-20260831-TEC0088A.md`
- Research ID: `RES-20260831-TEC0088A`
- Evidence score: `0.78`
- Publication recommendation: `fictional_archive_document`

## Ergebnis

- `OTA-TEC-0088-2026-DE` auf v1.1 angehoben.
- `kg.system` auf `SYS:KUEPER:ota` normalisiert.
- EIMO als Realanker verankert.
- Capability-basierte statt linearer Einwohner-/Betten-/Personal-Skalierung eingeführt.
- Reife von Ultraschall/POC-Diagnostik gegenüber Chirurgie, Labor, Zahnmedizin, lokaler Pharmazie und Decision Support differenziert.
- Pharmazeutische Haltbarkeit, Blutversorgung, Sterilisation und Isolation als eigenständige offene Systemarchitekturen markiert.
- Engineering-Grenze explizit gesetzt.
- Folgeauftrag an KUEPER Engineering erstellt: `EXT-OTA-ENG-20260905-mars-medical-center-closure.md`.

## Erwartetes Ergebnis

`OTA-TEC-0088` bleibt als fiktionales Technikdossier erhalten, trennt aber robuste EIMO- und Capability-Anker von spekulativer Mars-Skalierung. Konkrete Personal-, Betten-, Blutbank- und Logistikwerte werden nicht als heutiger Realstandard dargestellt.
