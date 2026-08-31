---
id: EXT-KG-OTA-20260831-mars-fahrwege-evidence-alignment
title: Evidenzabgleich OTA-TEC-0090 Mars-Fahrwege und Straße-vs.-Schiene-Trade-off
status: open
source: KG
target: OTA
created: 2026-08-31
requested_by: research-validation-loop
priority: medium
affects: [KG, OTA]
---

## Anlass

Research Candidate `RES-20260831-TEC0090A` wurde im Knowledge Graph als nicht-kanonischer Evidenzaudit aufgenommen. Der Audit bestätigt die Grundrichtung von OTA-TEC-0090, verlangt aber eine präzise Trennung zwischen real belegten Grundlagen, marsbezogenen Hypothesen und weiterhin offenen Designwerten.

## Gewünschte Änderung

OTA-TEC-0090 gegen den Audit abgleichen und insbesondere:

1. Regolith-/Simulantengeotechnik, Verdichtung und lokal erzeugte/gesinterte Fahrbahnmaterialien als realwissenschaftlich gestützte Grundlagen führen, ohne standortspezifische Mars-Bemessungswerte zu erfinden.
2. Aussagen zu Energie- und Wartungsvorteilen von Schienensystemen konditional formulieren: terrestrische Massengutvorteile und Konzeptstudien sind belegt, die konkrete Mars-Anwendung bleibt `[H]`.
3. Keinen universellen Umschaltpunkt Piste → befestigte Straße → Schiene setzen. Dieser hängt mindestens von Lastvolumen, Distanz, Standort, Bauenergie, Wartung und Betriebsmodell ab und bleibt `[OFFEN]`.
4. Quantitative Marswerte für Breite, Tragfähigkeit, Achslast, Bauenergie, Wartungsintervalle und Rollwiderstand nicht aus Simulanten- oder terrestrischen Daten als kanonische Werte ableiten.
5. NOXIA-Balancingwerte wie Baukosten, Reisezeitboni, Unlocks oder Netzparameter unverändert als `[W]/[F]/[OFFEN]` behandeln; der Audit setzt hierzu keine Werte.

## Begründung

Der Audit bestätigt die zentrale Designregel des Dossiers: Die Evidenz trägt kein allgemeines Gesetz „Straße nur früh, Schiene immer später“. Vergleichsstudien liefern je nach Optimierungsziel unterschiedliche Ergebnisse. Vorbereitete/verdichtete Flächen reduzieren terramechanische Verluste plausibel, aber quantitative Marswerte bleiben standort- und systemabhängig.

## Source-of-Truth-Grenze

Der Knowledge Graph hält `RES-20260831-TEC0090A` ausschließlich als Research Candidate. OTA entscheidet über Änderungen an OTA-TEC-0090 und bleibt Source of Truth für das Archivdokument. Dieser Request darf den OTA-Kanon nicht automatisch ersetzen.

## Erwartetes Ergebnis

OTA-TEC-0090 trennt `[R]`, `[H]` und `[OFFEN]` sauber; Schienenvorteile sind bedingungsabhängig formuliert; es wird kein unbelegter universeller Straßen-Schienen-Umschaltpunkt oder Mars-Bemessungswert kanonisiert.

## Referenz

- Research ID: `RES-20260831-TEC0090A`
- KG-Pfad: `research/candidates/RES-20260831-TEC0090A.md`
