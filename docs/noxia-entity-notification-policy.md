# NOXIA Entity Notification Policy

**Status:** operativ  
**Quelle:** `SYS:KUEPER:ota`  
**Ziel:** `thomaspeterkueper/noxiagame`

## Grundregel

Nicht jede OTA-Datei ist automatisch ein NOXIA-Spielobjekt. **Jede OTA-Entität mit explizitem NOXIA-Bezug** soll NOXIA jedoch als Existenz-/Discovery-Hinweis gemeldet werden.

Ein NOXIA-Bezug liegt insbesondere vor, wenn mindestens eines gilt:

- `contexts` enthält `noxia`;
- ein `mappings.noxia`-Block existiert;
- das Dossier ist mit `NOXIA` getaggt und besitzt eine technisch/narrativ spielrelevante Entität;
- ein OTA-/KG-/Engineering-Request nennt NOXIA ausdrücklich als nachgelagertes Zielsystem.

## Inhalt eines Entity Notice

Der Hinweis an NOXIA enthält mindestens:

- OTA-Signatur;
- Dokumentpfad;
- `canonicalId`, soweit vorhanden;
- `objectId`, soweit vorhanden;
- Entitäts-/Rollenklasse, z. B. `buildable`, `component`, `infrastructure`, `technology`, `reference`;
- OTA-Status (`AKTIV`, `ENTWURF`, `ARCHIVIERT` usw.);
- epistemischen Hinweis, wenn technische Werte noch `[OFFEN]` sind;
- relevante KG-/Research-/Engineering-Verknüpfungen;
- Hinweis, ob nur **Existenz/Discovery** oder bereits eine belastbare Gameplay-Ableitung möglich ist.

## Source-of-Truth-Grenze

Ein Entity Notice bedeutet **nicht**, dass NOXIA:

- OTA-Kennwerte ungeprüft als Spielwerte übernehmen soll;
- `[R]`, `[H]`, `[F]` oder `[OFFEN]` vermischen darf;
- Kosten, Unlocks, Produktionsraten oder Balancing aus OTA automatisch erzeugen soll;
- den OTA-/KG-Kanon ändern darf.

NOXIA bleibt Source of Truth für Gameplay, Runtime, Kosten, Unlocks und Balancing. OTA meldet nur, dass eine relevante Entität existiert, welche Identität sie besitzt und welche fachlichen Grenzen gelten.

## Batch statt Request-Spam

Entity Notices dürfen gebündelt werden. Bevorzugt wird ein thematischer oder zeitlicher Batch, solange jede Entität einzeln mit ID, Rolle, Status und Quelle aufgeführt ist.

Einzelrequests sind nur nötig, wenn eine Entität sofortige Implementierungsarbeit oder einen konkreten Konflikt im Spiel auslöst.

## Lebenszyklus

1. OTA legt oder ändert eine NOXIA-relevante Entität an.
2. OTA/KG-Evidenz wird soweit nötig geklärt.
3. Falls echte technische Auslegung offen ist, geht ein Request an KUEPER Engineering.
4. OTA sendet bzw. ergänzt den NOXIA Entity Notice.
5. NOXIA entscheidet selbst, ob und wann daraus ein Runtime-/Gameplay-Objekt, eine Technologie, ein Unlock, ein Informationsknoten oder nur ein Referenzdatensatz wird.
6. Spätere Canonicalization-Returns aus Engineering erzeugen bei spielrelevanten Änderungen einen neuen bzw. aktualisierten Entity Notice.

Diese Regel gilt ab 2026-09-06 für alle neuen oder wesentlich geänderten NOXIA-relevanten OTA-Entitäten.