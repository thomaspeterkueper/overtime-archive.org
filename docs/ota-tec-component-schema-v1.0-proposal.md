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
2. **Merksatz: Plausible Einzelwerte machen keine plausible Kombination.** Konkrete Kenndatenkombinationen werden als gemeinsames System geprüft. Einzeln realistische Werte dürfen nicht allein deshalb gemeinsam als `[R]` gelten.
3. Fehlende reale Serienreferenz führt **nicht automatisch zu `[F]`**. Die Evidenzklassifikation unterscheidet mindestens:
   - `[R]`: die konkrete Aussage oder Kenndatenkombination ist real belegt;
   - `[H]`: die konkrete Realisierung ist nicht belegt, aber innerhalb bekannter Physik und belastbarer technischer Randbedingungen nachvollziehbar extrapolierbar;
   - `[F]`: die Setzung wird für den Werkkanon benötigt, lässt sich aber derzeit nicht als belastbare technische Extrapolation begründen oder ist ausdrücklich fiktional gesetzt.
   `[OFFEN]` bleibt zusätzlich bestehen, wenn die vorhandene Evidenz eine Einordnung noch nicht trägt.
4. Eine `[H]`-Einordnung muss die tragende physikalisch-technische Handlungsschiene nennen, z. B. Zyklus, Kammerdruck, Expansionsverhältnis, Werkstoff-, Thermik-, Leistungs- oder Lebensdauergrenzen. „Zukünftige Technik“ allein ist keine Begründung.
5. Ein eigenes Komponentendossier ist sinnvoll, wenn eine Komponente mehrfach verwendet wird oder technisch/epistemisch komplex genug ist, um eine gesonderte Evidenz- und Konsistenzprüfung zu rechtfertigen.
6. Einfache, einmalig verwendete und unstrittige Bauteile bleiben im Objekt-Dossier.
7. `mappings.noxia.role: component` kennzeichnet die Consumer-Rolle; NOXIA bleibt Eigentümer seiner Spiel- und Balancingwerte.

## Testfall

Erster Testfall ist `OTA-TEC-0085-2026-DE` — RL-25-Triebwerksklasse. Das Schema wird erst nach erfolgreicher Metadaten-/Build-Validierung, Evidenzaudit und Prüfung der CYGNUS-Entduplizierung eingefroren oder überarbeitet.
