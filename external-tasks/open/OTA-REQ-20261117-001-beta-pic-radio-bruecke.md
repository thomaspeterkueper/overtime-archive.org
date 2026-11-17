# OTA-REQ-20261117-001 – OTA-SCI-0111-2026-DE (β Pictoris b im Radio): nach Umzug nach KUE zum Brückendokument kürzen

Status: open
Datum: 2026-11-17
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-17-OTA-SCI-0111-2026-DE.md`
Zuordnung: ganz nach KUE (Realteil; Inventur Gruppe A). Werkneutrales Preprint-Audit ([R]/[I]/[H]), `universe: []`, keine [F]/[W]/[S]. In OTA bleiben das NOXIA-Beobachtungsmodell, das SSF-Evidenzset, die Observatoriumsskizze und die Archivregel. Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261117-001.md`.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261117-001 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen (Punkte A–D).

## Anlass

Abgleich am 2026-11-17: Preprint arXiv:2609.16720 weiterhin nur v1 ohne Journal-Fassung; Kernzahlen (0,85–3,5 GHz, Astrometrie, B ≳ 1,25 kG) bestätigt. Beobachtungsepochen, Polarisationsgrade, L-Band-Grenze (≳ 600 G), Rotationsperiode, verworfene Alternativen und der im Juli 2026 entdeckte Planet β Pictoris d ergänzt das KUE-Dokument.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **Abschnitte 1–12, 15, 17 und 18 ersetzen** durch einen Abschnitt „1. Realgrundlage (Kurzfassung)“ (Archivregel-Zitat im Kopf bleibt):
   > Ein Preprint vom September 2026 (Ortiz Ceballos, Berger & Cendes, arXiv:2609.16720, noch ohne Journal-Fassung) berichtet mit MeerKAT Radioemission bei 0,85–3,5 GHz, deren Position astrometrisch zu β Pictoris b passt und den Stern sowie β Pictoris c ausschließt. `[R, Preprint]` Die Autoren deuten die stark zirkular polarisierten Bursts als Elektron-Zyklotron-Maser-Emission und leiten daraus eine lokale Feldstärke von mindestens etwa 1,25 kG im Emissionsgebiet ab. `[I]` Befunde, Einschränkungen und Quellen: `DOC:KUE:KUE-SCI-NNNN`.
B. **Unverändert bleiben:** §13 „Prozedurales Beobachtungsmodell für NOXIA“ (Schritte 1–8), §14 „Evidenzset für ein SSF-Modul“, §16 „Relevanz für zukünftige Observatorien“ und §19 „Archivregel“. Nummerierung fortlaufend anpassen. In §13 Schritt 7 nur die beschädigte Formel als Satzfehler korrigieren: `B ~ ν / (2,8 MHz/G)` (bisher zerfallen in „[ B sim / u/(2{,}8,mathrm{MHz/G}) ]“); sonst unverändert.
C. **Quellen:** durch den Satz „Quellen im KUE-Dokument `DOC:KUE:KUE-SCI-NNNN`; Primärquelle: arXiv:2609.16720.“ ersetzen.
D. **Frontmatter und Kopf:** `summary` ersetzen durch „Brückendokument: NOXIA-Beobachtungsmodell, SSF-Lernpunkte und Archivregel zur Radioemission von β Pictoris b; Realteil (Preprint-Audit, ECMI-Deutung, Magnetfeld-Untergrenze) in KUE-SCI-NNNN.“ `relatedDocuments` um `DOC:KUE:KUE-SCI-NNNN` ergänzen; `tags` und `review` bleiben; `epistemicStatus` auf ["R", "I", "H"] (den nicht standardisierten Marker „OFFEN“ entfernen). Versionssprung auf v1.1, „Stand“ auf das Umsetzungsdatum, Revisionsvermerk in §20: „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261117-001); Langfassung über Git v1.0.“ Nicht archivieren. Kennzeichnung nicht stärker als im KUE-Dokument.

## Wirkung

- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0111 aktualisiert.
- `noxiagame`/`solarsciencefoundation`: Verweise auf OTA-SCI-0111 bleiben gültig; für Realaussagen auf die KUE-Signatur verweisen (über EXT-OTA-KUE-20261117-001 gemeldet).
