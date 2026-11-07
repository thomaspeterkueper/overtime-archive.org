# OTA-REQ-20261102-001 – OTA-SCI-0113-2026-DE (GW250114): Realteil auf Verweis nach KUE-SCI-0196 kürzen

Status: done
Erledigt: 2026-11-07 (Umsetzung durch die Begutachtung nach ECO-ARC-0038 §3b)
Datum: 2026-11-02
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-02-OTA-SCI-0113-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0196-2026-DE`
Voraussetzung: KUE-SCI-0196 v0.2 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-02`). Erst danach umsetzen.

## Anlass

OTA-SCI-0113 ist fast vollständig ein Realdossier (Abschnitte 1–4). Die Realangaben – Eckdaten des Ereignisses, Flächensatz-Test, LVK-Spektroskopie 2026, Nature-Horizontsignal, Grenzen, Ein-Ereignis-Vorbehalt – stehen seit v0.2 in KUE-SCI-0196 §4, dort mit Quellen und Belastbarkeitsstufen.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

1. **Abschnitte 1–4 ersetzen** durch eine kurze Grundinformation, z. B.:
   > GW250114 (14. Januar 2025, LIGO, Signal-Rausch-Verhältnis etwa 80) ist das bisher klarste Signal zweier verschmelzender Schwarzer Löcher. Es bestätigt den klassischen Hawking-Flächensatz mit hoher Glaubwürdigkeit, und das Nachschwingen passt zur Kerr-Vorhersage. Hawking-Strahlung oder Quantengravitation sind damit nicht nachgewiesen; alle Analysen beruhen auf demselben Ereignis. Belege und Einzelheiten: `DOC:KUE:KUE-SCI-0196-2026-DE`.
2. **Vollständig erhalten:** Abschnitt 5 (AVI-P-Filter T1–T4 mit Urteil „kein Reaktivierungstrigger“) und Abschnitt 6 (KG/SSF/SCION-Übergabe, Ereignis-Reconciliation-Test). In Abschnitt 6 den KUEPER.COM-Punkt auf „erledigt: KUE-SCI-0196“ setzen.
3. **Nicht stärker kennzeichnen als KUE:** Die Nature-Arbeit (Lu u. a. 2026) führt KUE als [H]; in OTA nicht unter einer [R]-Überschrift belassen.
4. Versionssprung auf v1.1, Revisionsvermerk „2026-11-02: Realteil nach DOC:KUE:KUE-SCI-0196-2026-DE ausgelagert“; `summary` entsprechend kürzen.

## Wirkung

Keine auf andere Repositories; OTA-SCI-0114 verweist bereits auf OTA-SCI-0113 (Rückverweis heute ergänzt).
