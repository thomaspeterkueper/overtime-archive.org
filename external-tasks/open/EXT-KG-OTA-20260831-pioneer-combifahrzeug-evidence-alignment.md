---
id: EXT-KG-OTA-20260831-pioneer-combifahrzeug-evidence-alignment
title: OTA-TEC-0092 an Evidenz zu integriertem Mondtransfer-/Landefahrzeug ausrichten
status: open
source: KG
target: OTA
created: 2026-08-31
requested_by: research-validation-loop
priority: high
affects: [KG, OTA]
---

## Anlass

Research Candidate `RES-20260831-TEC0092A` wurde im Knowledge Graph review-gated integriert. Das Audit bestätigt, dass ein kombiniertes Transfer-/Landefahrzeug grundsätzlich ein real untersuchtes Architekturmuster ist, zeigt aber mehrere Punkte, die in `OTA-TEC-0092-2026-DE` sauber zwischen `[R]`, `[T]`, `[H]` und `[F/OFFEN]` getrennt werden sollten.

## Gewünschte Änderung

`OTA-TEC-0092-2026-DE` fachlich gegen den Candidate abgleichen und insbesondere:

1. **Integrierte Architektur präzisieren:** Transfer + Landung als real untersuchtes Muster verankern, aber nicht als automatisch überlegene Architektur darstellen. Die dokumentierte Massen-Penalty einstufiger/integrativer Varianten gegenüber gestuften Lösungen von grob 15–30 % als Realanker aufnehmen oder referenzieren.
2. **Δv/Massenschluss sauber trennen:** repräsentative reale Randwerte LEO→Mondoberfläche von etwa 5,7–6,1 km/s one-way und etwa 8,5–9,0 km/s round trip als `[R]/[T]`-Constraint führen; daraus keine Fahrzeugmasse, Tankerzahl oder konkrete Treibstoffarchitektur ableiten.
3. **Orbitale Betankung als offene Architekturentscheidung behandeln:** Stand 2026 ist Ship-to-Ship-Kryotransfer nicht vollständig demonstriert; LOX-Intra-Vehicle-Transfer ist belegt, LH2-Langzeitlagerung und operative Tankerketten bleiben relevante offene Engineering-Risiken. Konkrete Tankerzahlen bleiben `[F/OFFEN]`.
4. **Dual-Role-Triebwerksproblem sichtbar machen:** Hochschub-Transfer und tief drosselbare Landung in demselben Triebwerkssatz als zentrale technische Herausforderung des Kombifahrzeugs benennen; keine reale Crew-Mission dient hierfür als vollständiger Präzedenzfall.
5. **Abort/Common-Mode präzisieren:** die Konzentration von Transfer- und Landefunktion in einem Fahrzeug erhöht gemeinsame Fehlerpfade. Dissimilar Redundancy bzw. ein unabhängiger Rettungs-/Reservepfad sollte als Architekturfrage `[H/OFFEN]` explizit bleiben.
6. **PSI/Landestellen:** Plume-Surface-Interaction als realen Constraint führen; höher gelegte Landetriebwerke und vorbereitete Landeflächen als plausible Mitigationsmaßnahmen, nicht als pauschal bewiesene Lösung.

Die kanonischen Setzungen `2040–2048`, `Pioneer-Klasse` und die Nachfolge-Sequenz bleiben unverändert `[F/OFFEN]`. Keine NOXIA-Balancingwerte, Passagierzahlen, Flottengrößen, Kosten, Turnaround- oder Unlock-Werte aus dem Audit ableiten.

## Begründung

Das Audit trennt robuste physikalisch-technische Randbedingungen von fiktionalen Architekturentscheidungen. Ziel ist keine Entfiktionalisierung, sondern eine präzisere epistemische Schichtung des bestehenden OTA-Dossiers.

## Quelle

- KG Research Candidate: `research/candidates/RES-20260831-TEC0092A.md`
- Research ID: `RES-20260831-TEC0092A`
- Evidence score: `0.80`
- Publication recommendation: `fictional_archive_document`

## Erwartetes Ergebnis

`OTA-TEC-0092` behält seinen Kanon, weist aber Massen-, Betankungs-, Triebwerks-, PSI- und Abort-Randbedingungen evidenzsauber aus. Reale Constraints werden als `[R]/[T]` kenntlich, Architekturentscheidungen und konkrete Fahrzeugwerte bleiben `[H]/[F/OFFEN]`.
