# OTA-TEC-Instanzschema v1.0

```
Status:   gültig (eigenständig, nicht Teil von OTA-TEC-Schema v1.5 FROZEN)
Version:  1.0.1 (Repo-Fassung)
Quelle:   Google Drive, OTA_TEC_INSTANZSCHEMA_v1_0.md (Stand 07.09.2026)
          https://drive.google.com/file/d/1EqPdzcjj-ZdZLt0Fn1KPcEXRsBg5iqJ4/view
```

**Revisionsvermerk 1.0.1 (23.11.2026, Claude, Request `EXT-ECO-OTA-20261029-001`):** Aus dem Drive-Altbestand ins Repo übernommen, weil `OTA-TEC-0037-2026-DE` (Instanzreferenz `OTA-TEC-0037-INST-01`, „nach OTA-TEC-Instanzschema v1.0“) es bereits anwendet. Redaktionell geändert ist nur der Ausgangsfall: VEX-47 `OTA-TEC-0036` → `OTA-TEC-0037` (heutige Signatur). Struktur und Grundregeln sind unverändert. Die Punktverweise auf das Typ-Dossier (Punkt 13, Punkt 18, 22 Punkte) beziehen sich auf `docs/ota-tec-object-dossier-schema-v1.5.md`.

---

**Verhältnis zum Typ-Dossier-Schema:** eigenständig, nicht Teil von OTA-TEC-Schema v1.5 (FROZEN). Ein Typ-Dossier definiert die technische Wahrheit eines Objekttyps (stabile Eigenschaften). Eine Instanzreferenz beschreibt ein individuelles Exemplar dieses Typs: Zustand, Veränderung, Ereignisse, Biografie. Typ definiert Eigenschaften; Instanz besitzt Zustand.

**Ausgangsfall:** VEX-47-Basistyp (OTA-TEC-0037) vs. Lains individuelle Einheit (OTA-TEC-0037-INST-01) – Alter, Modifikationsgrad, dauerhafter Servo-Defekt und emergentes Verhalten sind zeitabhängige Zustände einer Instanz, keine Typ-Eigenschaften.

---

## Metadaten-Header

```yaml
instanceId: [stabile Instanz-ID, z. B. vex-lain-einheit-01]
typeRef: [objectId des zugehörigen Typ-Dossiers]
canonicalId: [OTA-TEC-XXXX-INST-NN]
```

---

## Struktur (12 Punkte)

```text
1. Identität der Instanz
   - instanceId, canonicalId
   - Seriennummer (falls vorhanden)
   - Bezugstyp (typeRef)
   - Name/Spitzname (falls vom Typ-Namen abweichend)

2. Ausgangszustand / Fertigung
   - Baujahr/Fertigungsdatum dieser konkreten Einheit
   - Werkszustand bei Auslieferung (Referenz auf Typ-Dossier, keine Wiederholung)
   - Erste Zuordnung/Übergabe

3. Eigentümer / Betreiber
   - aktuelle(r) Eigentümer:in/Betreiber:in
   - vorherige Eigentümer:innen (Kette, falls relevant)
   - rechtlicher/organisatorischer Status

4. Standortgeschichte
   - bisherige Einsatzorte in chronologischer Folge
   - aktueller Standort

5. Modifikationen
   - Abweichungen vom Typ-Werkszustand (Delta, nicht Wiederholung der Typ-Beschreibung)
   - wer hat modifiziert, wann, warum
   - Modifikationsgrad (z. B. "% nicht mehr original", falls sinnvoll quantifizierbar)

6. Schäden und Reparaturen
   - dokumentierte Schadensereignisse
   - durchgeführte Reparaturen
   - unreparierte/dauerhafte Defekte

7. Zustandsentwicklung
   - Verlauf über Zeit (Alterung, Leistungsabfall, Verbesserung)
   - Unterschied zu Punkt 13 im Typ-Dossier (dort: erwartbare Störungsklassen:
     hier: tatsächlicher, individueller Verlauf dieser einen Einheit)

8. Besondere Fähigkeiten / Einschränkungen
   - Fähigkeiten, die diese Instanz hat, der Basistyp aber nicht (z. B. durch Modifikation)
   - Einschränkungen, die diese Instanz hat, der Basistyp aber nicht (z. B. Sensorlücken)

9. Relevante Ereignisse
   - narrativ oder historisch bedeutsame Vorfälle, an denen diese Instanz beteiligt war
   - Verweis auf Kapitel/Bände, falls bereits verwendet

10. Narrative Bedeutung
    - Rolle der Instanz in der Erzählung (falls über reines Funktionsobjekt hinausgehend)
    - emotionale/symbolische Bedeutung für Charaktere
    - ausdrücklich getrennt von der technischen Typ-Wahrheit – diese Angaben verändern
      niemals das Typ-Dossier

11. Aktueller Zustand
    - Zustand zum Zeitpunkt der Dossier-Erstellung bzw. zu einem definierten Stichtag
    - funktionsfähig / eingeschränkt / stillgelegt / verschollen

12. Relationen
    - INSTANCE_OF    # Pflichtrelation, verweist auf das Typ-Dossier
    - OWNED_BY
    - OPERATED_BY
    - LOCATED_AT
    - MODIFIED_WITH
    - DAMAGED_IN
    - REPAIRED_IN
    - PARTICIPATED_IN
```

---

## Grundregeln

1. **Keine Duplikation der Typ-Wahrheit.** Eine Instanzreferenz wiederholt nicht die technischen Grundwerte aus dem Typ-Dossier (Energiesystem, Sensor-Grundausstattung, physikalische Grenzen). Sie beschreibt ausschließlich Deltas, Zustand und Geschichte.
2. **Instanz verändert Typ nicht rückwirkend.** Modifikationen, Schäden oder emergente Eigenschaften einer Instanz fließen nicht automatisch in das Typ-Dossier zurück. Falls eine Modifikation so verbreitet wird, dass sie zu einer neuen kanonischen Generation wird, ist das ein bewusster redaktioneller Schritt im Typ-Dossier (Punkt 18, Versionshistorie), nicht eine automatische Ableitung aus einer Instanz.
3. **`INSTANCE_OF` ist Pflicht.** Jede Instanzreferenz muss mindestens diese eine Relation zu ihrem Typ-Dossier führen.
4. **Leichtgewichtig bleiben.** Nicht jede Instanz braucht alle 12 Punkte vollständig ausgefüllt – anders als beim Typ-Dossier (dort sind alle 22 Punkte verbindlich), können hier Punkte mit "nicht dokumentiert" oder "nicht relevant" markiert werden, wenn die narrative Grundlage keine Angabe hergibt.

---

## Offen für später

Die Frage, wie viele Instanzen eines Typs tatsächlich eigene Dossiers verdienen (jedes einzelne Exemplar vs. nur narrativ bedeutsame Exemplare), ist noch nicht entschieden. Vorschlag zur Faustregel: Eine Instanzreferenz wird nur für Exemplare angelegt, die entweder (a) über mehrere Kapitel/Bände hinweg wiederkehren, oder (b) einen dokumentierten Zustand besitzen, der von der Typ-Norm signifikant abweicht. Rein einmalig erwähnte, unveränderte Exemplare brauchen keine eigene Instanzreferenz.
