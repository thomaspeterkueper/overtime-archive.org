# OTA-TEC-Komponentenschema v1.0 — Vorschlag

Status: **Vorschlag, nicht eingefroren.**

Komponentendossiers bleiben in derselben fortlaufenden `OTA-TEC-XXXX`-Serie wie reguläre technische Objektdossiers. Der Unterschied liegt in der internen Struktur und in der Rolle des beschriebenen Gegenstands: Komponenten sind wiederverwendbare Bauteile oder Subsysteme, die nicht als eigenständiges Fahrzeug, Gebäude oder Gerät eingesetzt werden.

## 14-Punkte-Struktur

1. Identität
2. Zweck
3. Physikalische / technische Grundlage
4. Aufbau
5. Leistungsdaten / Kenndaten
6. Inputs / Outputs
7. Grenzen und Betriebsfenster
8. Störungen
9. Sicherheit & Risiko
10. Varianten
11. Verwendung
12. Weiterentwicklung
13. NOXIA-Referenz
14. Relationen

## Relationen

- `COMPONENT_OF`: Komponente → Objekt
- `USES_COMPONENT`: Objekt → Komponente
- `ENABLED_BY`
- `TAUGHT_BY`
- `BUILT_FROM`
- `UPGRADE_OF`
- `SUCCEEDED_BY`
- `FUNCTIONAL_ANALOG_TO`

## Grundregeln

1. Nach Kanonisierung einer Komponente werden ihre technischen Kenndaten nicht dauerhaft in mehreren Objekt-Dossiers dupliziert. Objekt-Dossiers referenzieren stattdessen über `USES_COMPONENT`.
2. Konkrete Kenndatenkombinationen werden gemeinsam geprüft. Plausible Einzelwerte machen eine Kombination nicht automatisch realistisch oder intern geschlossen.
3. Ein eigenes Komponentendossier ist sinnvoll, wenn eine Komponente mehrfach verwendet wird oder technisch/epistemisch komplex genug ist, um eine gesonderte Evidenz- und Konsistenzprüfung zu rechtfertigen.
4. Einfache, einmalig verwendete und unstrittige Bauteile bleiben im Objekt-Dossier.
5. `mappings.noxia.role: component` kennzeichnet die Consumer-Rolle; NOXIA bleibt Eigentümer seiner Spiel- und Balancingwerte.

## Testfall

Erster Testfall ist `OTA-TEC-0085-2026-DE` — RL-25-Triebwerksklasse. Das Schema wird erst nach erfolgreicher Metadaten-/Build-Validierung, Evidenzaudit und Prüfung der CYGNUS-Entduplizierung eingefroren oder überarbeitet.
