---
id: EXT-KG-OTA-20260831-pioneer-combifahrzeug-evidence-alignment
title: OTA-TEC-0092 an Evidenz zu integriertem Mondtransfer-/Landefahrzeug ausrichten
status: done
source: KG
target: OTA
created: 2026-08-31
completed: 2026-09-06
requested_by: research-validation-loop
priority: high
affects: [KG, OTA]
---

## Abschluss

`OTA-TEC-0092-2026-DE` wurde auf v1.1 gegen `RES-20260831-TEC0092A` R1 abgeglichen.

Erledigt:

- `kg.system` auf `SYS:KUEPER:ota` normalisiert.
- Integrierte Transfer-/Landearchitektur als real untersuchte Architekturklasse eingeordnet, ohne automatische Überlegenheit zu behaupten.
- Studienabhängige Massen-Penalties ausdrücklich nicht universalisiert.
- Delta-v segmentweise statt als universelle Hin-/Rücksumme geführt.
- Orbitale Kryobetankung als reale, 2026 noch nicht vollständig operational demonstrierte Architekturkomponente eingegrenzt; keine systemspezifischen HLS-Tankerzahlen auf Pioneer übertragen.
- Gemeinsamer Transfer-/Landungstriebwerkssatz nicht vorausgesetzt; Dual-Role-Trade als Engineering-Frage markiert.
- Common-Mode-, Abort-, Rescue- und dissimilar-redundancy-Fragen explizit gemacht.
- PSI, Regolith-Ejekta und Landepad-/Triebwerksanordnungs-Mitigations als reale Constraints bei offener konkreter Auslegung aufgenommen.
- Alle Pioneer-spezifischen Massen, Tankerzahlen, Flotten-, Kosten-, Turnaround- und NOXIA-Werte offen gelassen.

## Engineering-Follow-up

Die technische Auslegung wurde an KUEPER Engineering übergeben:

`thomaspeterkueper/kueper-engineering/external-tasks/open/EXT-OTA-ENG-20260906-pioneer-combivehicle-architecture.md`

Engineering soll Missionsbahn, Delta-v/Masse, Treibstoff/Kryo, Refueling, Antrieb, Landung/PSI, Life Support und Abort/Redundanz als gekoppelten Architektur-Trade schließen und anschließend einen Canonicalization-/Decision-Request an OTA zurückgeben.

## Quelle

- Research: `RES-20260831-TEC0092A` R1
- OTA: `src/content/documents/OTA-TEC-0092-2026-DE.md` v1.1
