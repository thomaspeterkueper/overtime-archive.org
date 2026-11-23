# OTA-TEC-Objekt-Dossier-Schema v1.5 – FROZEN

```
Status:   kanonisch, FROZEN (Schema-Inhalt unverändert v1.5)
Version:  1.5.1 (Repo-Fassung)
Quelle:   Google Drive, OTA_TEC_OBJEKT_DOSSIER_SCHEMA_v1_5_FREEZE.md
          https://drive.google.com/file/d/12StEuDx5KbyDpWp9qz-8tf38uGDY-rYw/view
```

**Revisionsvermerk 1.5.1 (23.11.2026, Claude, Request `EXT-ECO-OTA-20261030-001`):** Aus dem Drive-Altbestand ins Repo übernommen, weil kanonische Dossiers sich darauf berufen (`OTA-TEC-0034`, `OTA-TEC-0036`, `OTA-TEC-0037`). Redaktionell geändert sind nur die Signaturverweise auf die heute gültigen Nummern: Erkundungsrover `OTA-TEC-0035` → `OTA-TEC-0036`, VEX-47 `OTA-TEC-0036` → `OTA-TEC-0037`; `OTA-TEC-0034` (Wasserextraktor) bleibt. Die 22 Punkte, die Zwei-Fälle-Regel und die Relationen sind unverändert.

**Verhältnis zu `docs/ota-tec-object-dossier-schema.md`:** Jenes englische Dokument regelt Frontmatter, Objektklassen und die maschinelle Prüfung durch `src/content.config.ts`; dieses Schema regelt den inhaltlichen 22-Punkte-Aufbau und den Metadaten-Header im Dokumenttext. Für Instanzen eines Typs gilt ergänzend `docs/ota-tec-instance-schema.md` (Instanzschema v1.0).

---

**Basis:** v1.4 RC → v1.5 Freeze Candidate → v1.5 FROZEN (kanonisiert)
**Änderungen in v1.5:**
- **Variantenfrage entschieden.** Zwei-Fälle-Regel für Punkt 15 (Varianten):
  1. **Gleiche Physik, andere Parameter** → bleibt Unterabschnitt im selben Dossier (Beispiel: Wasserextraktor Mars/Mond – Sublimation funktioniert in beiden Fällen, nur Temperatur/Druck unterscheiden sich).
  2. **Anderes Wirkprinzip** → eigenes Dossier mit eigener `objectId`, verknüpft über die neue Relation `FUNCTIONAL_ANALOG_TO` (Beispiel: Mond-Rover mit Rädern vs. Asteroiden-Fahrzeug mit Greif-/Ankertechnik – beide lösen "Mobilität", aber mit grundlegend anderem Mechanismus). `FUNCTIONAL_ANALOG_TO` wurde bewusst statt `VARIANT_OF` gewählt, weil letzteres eine Abstammungsbeziehung suggeriert, die hier nicht vorliegt – es handelt sich um parallele Lösungen, nicht um Weiterentwicklung.
- **`FUNCTIONAL_ANALOG_TO` neu in Punkt 22 (Relationen)** aufgenommen.
- **Status: Freeze Candidate.** Zwei strukturell unterschiedliche Objektfamilien (stationär/prozesshaft: Wasserextraktor; mobil/bemannt: Rover) wurden ohne erzwungene Abschnitte validiert. Offene Punkte sind keine Schema-Lücken mehr, sondern SSF-Modul-Lücken (siehe gesonderte KG-Request-Liste) – das Schema selbst gilt als tragfähig.

---

## Metadaten-Header (überarbeitet in v1.4)

Jedes Objekt-Dossier erhält vor Punkt 1 einen kompakten Metadatenblock. Dieser ersetzt keine der 22 Punkte, sondern macht das Objekt maschinenlesbar referenzierbar – Grundlage für den späteren Knowledge Graph.

```yaml
objectId: wasserextraktor-mars-typ-m   # stabil, KG-taugliche Integrations-ID, NICHT gleichzusetzen mit canonicalId
series: TEC                             # bestimmt durch Gegenstand des Dokuments
signature: OTA-TEC-0034                 # reguläre OTA-Signatur, KEIN NOX-Bestandteil (Beispielwert, jeweils fortlaufend)
canonicalId: OTA-TEC-0034-WEX-M         # OTA-Dossier-Identität, siehe Punkt 1 – eigenständig von objectId
contexts:
  - noxia
mappings:
  noxia:
    objectId: wasserextraktor-mars-typ-m   # identisch mit objectId oben, keine Zweitwahrheit
    role: buildable
    # weitere Spielwerte NICHT hier, sondern im NOXIA-eigenen System,
    # das per objectId auf dieses Dossier zurückverweist
```

**Regel:** `objectId` ist die stabile Integrations-ID für den Knowledge Graph und für NOXIA-Mappings – sie überlebt auch Dossier-Überarbeitungen. `canonicalId` ist die OTA-interne Dossier-Identität (Signatur + Objektkürzel) und kann sich bei Dossier-Versionswechseln ändern. Beide Felder dürfen nicht synonym verwendet werden.

---

```text
OTA-TEC-XXXX
Objekt: [Name]

1. Identität
   - canonicalId (Dossier-Identität, z. B. OTA-TEC-0034-WEX-M – NICHT zu verwechseln mit objectId im Header)
   - Bezeichnung
   - Objektklasse
   - Epoche / Tech-Level
   - Einsatzorte

2. Zweck
   - welche Aufgabe löst das Objekt?
   - warum braucht eine Kolonie es?

3. Physikalische / technische Grundlage
   - relevante reale Wissenschaft [R]
   - verwendete Verfahren
   - Grenzen des Systems
   - fiktionale Setzungen klar markiert [H]/[S]/[F]

4. Aufbau
   - Hauptbaugruppen
   - Materialien (Referenz auf Material-OTA, kein Duplikat)
   - Komponenten
   - Schnittstellen

5. Inputs
   - Energie
   - Rohstoffe
   - Kühlung
   - Personal
   - Daten
   - Wartung

6. Outputs
   - Produkte
   - Nebenprodukte
   - Wärme
   - Abfall
   - Daten

7. Abhängigkeiten
   - benötigte Technologien
   - notwendige Infrastruktur
   - vorgelagerte Gebäude
   - Materialien
   - Transport

8. Umgebung & Standortbedingungen  *(neu in v1.2)*
   - Gravitation
   - Atmosphäre / Druck
   - Temperaturbereich
   - Strahlungsumgebung
   - Staub / Regolith
   - verfügbare Ressourcen am Standort
   - Gelände / Untergrund
   - erforderliche Distanz zu anderer Infrastruktur
   - Standortkriterien
   - Ausschlusskriterien

9. Lernabhängigkeiten
   - welche SSF-Module erklären das Objekt?
   - welches Wissen sollte der Spieler besitzen?
   - welche Module werden durch Nutzung relevant?

10. Bau
    - Bauphasen
    - Bauzeit
    - benötigte Komponenten
    - benötigte Maschinen
    - mögliche Vorfertigung

11. Betrieb
    - Normalbetrieb
    - Leistungsbereiche
    - Effizienz
    - Bedienung

12. Sensorik & Monitoring
    - Telemetrie / Überwachungsumfang
    - Automatisierungsgrad (autonom vs. personalintensiv)
    - Failsafe-Systeme
    - narrative Dimension: prägt Automatisierungsgrad die Kolonie-Kultur?

13. Störungen
    - erwartbare Abweichungen innerhalb des beherrschbaren Betriebs- und Wartungsmodells
    - typische Fehler (z. B. defektes Pumpenlager)
    - Verschleiß
    - Umweltprobleme
    - Reparatur

14. Sicherheit & Risiko
    - Ereignisse, deren Folgen über die betroffene Komponente hinausgehen können,
      oder die besondere Schutz-, Redundanz-, Evakuierungs- oder Containmentmaßnahmen erfordern
      (z. B. Sauerstoffbrand)
    - Gefahrenklasse
    - Worst-Case-Szenarien
    - Redundanzanforderungen
    - Risiko-Kennzeichnung [R]/[H]/[S]/[F] – wie realistisch ist das Risiko?

    **Abgrenzung 13 vs. 14:**
    Störungen = erwartbare Abweichungen innerhalb des beherrschbaren Betriebs- und
    Wartungsmodells. Sicherheit & Risiko = Ereignisse, deren Folgen über die betroffene
    Komponente hinausgehen können oder besondere Schutz-, Redundanz-, Evakuierungs- oder
    Containmentmaßnahmen erfordern. Beispiel: defektes Pumpenlager → 13. Sauerstoffbrand → 14.

15. Varianten
    - Erde
    - Mond
    - Mars
    - Asteroiden
    - spätere Generationen

    **Zwei-Fälle-Regel (v1.5, präzisiert beim Freeze):**
    - Gleiche Physik, andere Parameter → bleibt Unterabschnitt hier im selben Dossier
    - Anderes Wirkprinzip → eigenes Dossier mit eigener `objectId`,
      verknüpft über Relation `FUNCTIONAL_ANALOG_TO` (siehe Punkt 22)

    **Normative Klarstellung:** Diese Regel definiert eine *Mindesttrennung*, keine
    Obergrenze. "Gleiches Wirkprinzip" bedeutet nicht automatisch "gleiches Dossier" –
    entscheidend ist die technische Identität des Objekts. Wenn Aufbau, Betrieb oder
    technologische Linie zweier Varianten mit demselben Wirkprinzip so weit auseinanderlaufen,
    dass sie faktisch eigenständige Objekte sind (z. B. ein Mars- und ein Mond-Rover, beide
    radbasiert, aber mit grundlegend unterschiedlicher Konstruktion/Versionshistorie), können
    sie trotz gleichen Wirkprinzips als eigene Dossiers geführt werden – ebenfalls über
    `FUNCTIONAL_ANALOG_TO` verknüpft, nicht zwingend als Unterabschnitt desselben Dossiers.

16. Skalierbarkeit & Mengenlogik
    - eine große vs. mehrere kleine Einheiten
    - Schwellenwerte für Zentralisierung vs. Dezentralisierung
    - Abhängigkeit von Kolonie-Größe/-Phase
    - Verhältnis zu Punkt 15 (Varianten = Ort, hier = Menge)

17. Weiterentwicklung
    - Upgradepfade
    - Nachfolgesysteme
    - alternative Technologien

18. Versionshistorie
    - frühere Generationen des Objekts
    - was hat sich geändert und warum
    - Relevanz v.a. bei Grundinfrastruktur (Temenon, Reaktoren, Baumeister-Technologie)
    - dient der Kontinuitätssicherung über den 500-Bände-Zeitraum

19. Rückbau & Recycling
    - Stilllegungsprozess
    - Rückgewinnung von Material in den Kreislauf
    - was bleibt zurück (Ruine, Point-of-Interest, Kontamination)?
    - narrative Nutzung: verlassene/obsolete Anlagen als Schauplätze

20. Ökonomie
    - Baukosten
    - Betriebskosten
    - Personalbindung (Arbeitsstunden)
    - Grundlage für Spiel-Balancing

21. NOXIA-Referenz
    - Verweis auf `mappings.noxia` im Metadaten-Header (objectId, role)
    - KEINE Spielwerte, Balancing-Zahlen oder Produktionsregeln im Dossier selbst
    - Die kanonische technische Wahrheit steht ausschließlich in den Punkten 3, 5, 6, 20
      dieses Dossiers. NOXIA liest diese Werte über die `objectId` und leitet daraus
      eigene Spielwerte ab – dieser Ableitungsschritt findet im NOXIA-System statt,
      nicht im OTA-Dossier.
    **Regel:** Ein Objekt hat genau eine kanonische Beschreibung (dieses Dossier).
    Jedes referenzierende System (NOXIA, Roman-Kanon-Erwähnungen, spätere Dossiers)
    verweist über die `objectId` zurück, statt eigene Parallelwerte zu führen.

22. Relationen
    - REQUIRES
    - PRODUCES
    - CONSUMES
    - BUILT_FROM
    - ENABLED_BY      # zeigt auf ermöglichende Technologie/Fähigkeit, NIEMALS auf SSF-Modul
    - TAUGHT_BY       # Wissensrelation, zeigt AUSSCHLIESSLICH auf SSF-Module
    - USED_IN
    - UPGRADE_OF
    - SUCCEEDED_BY
    - DECOMMISSIONED_INTO
    - FUNCTIONAL_ANALOG_TO   # neu in v1.5: verknüpft Objekte mit gleicher Funktion,
                              # aber unterschiedlichem Wirkprinzip (keine Abstammung!)
```

---

## Status

**Schema v1.5 – FROZEN, kanonisch.** Zwei strukturell unterschiedliche Objektfamilien erfolgreich validiert:
- **OTA-TEC-0034 (Wasserextraktor)** – stationär, prozesshaft.
- **OTA-TEC-0036 (Erkundungsrover)** – mobil, bemannt.

Kein drittes Validierungsdossier mehr nötig. Ab sofort ist v1.5 die verbindliche Vorlage für alle neuen OTA-TEC-Objektdossiers.

**Repository-Regel (bestätigt beim Freeze):** OTA/KG definiert die kanonischen Objekte und Relationen; NOXIA bleibt Source of Truth für seine Spielrepräsentation; SSF bleibt Source of Truth für Lerninhalte. Fehlende SSF-Module werden als Anforderungen an SSF gemeldet (siehe KG-Request-Mechanismus), nicht kurzerhand im NOXIA- oder OTA-Kontext erfunden.

**Nächster Schritt:** Systemarbeit statt weiterer Einzeldossiers:
`Schema v1.5 FROZEN → maschinenlesbare Schema-Definition → NOXIA-Objektinventar ermitteln → OTA-Dossier-Backlog → KG-Relationen → SSF-Lücken als KG-Requests`

---

## Vorbehalt für künftige Weiterentwicklung: TAUGHT_BY-Präzisierung

Der VEX-47-Test (OTA-TEC-0037) zeigt einen Grenzfall: `TAUGHT_BY` kann auf ein SSF-Modul zeigen, das reale Physik erklärt (z. B. "Casimir-Effekt und Vakuumenergie, Grundlagen" – `[R]`), während das Objekt selbst eine fiktive Technologie nutzt, die diese reale Physik nur als Ausgangspunkt nimmt (Casimir-Drift-Antrieb – `[F]`). Ohne weitere Kennzeichnung besteht das Risiko, dass ein SSF-Modul unbeabsichtigt den fiktiven Antrieb wissenschaftlich legitimiert. Für eine spätere, nicht-brechende Erweiterung sollte geprüft werden, ob `TAUGHT_BY` um eine Angabe ergänzt wird, welchen Wissensaspekt ein Modul konkret vermittelt (reale Grundlage vs. fiktive Anwendung). Dies betrifft ausschließlich die Formatierung der Relation, nicht die 22 Kernpunkte, und bleibt bewusst offen für spätere Klärung – v1.5 bleibt bis dahin unverändert FROZEN.
