# OTA-REQ-20261123-001 – OTA-SCI-0042-2026-DE (Phänomenologische Erdbebentheorie und LOD-Seismizitäts-Brücke): Realteil auf Verweis DOC:KUE:KUE-SCI-0169 kürzen

Status: done
Datum: 2026-11-23
Erledigt: 2026-11-25 – Punkte A–D umgesetzt in OTA-SCI-0042 v1.6 durch die Begutachtung (ECO-ARC-0038 §3b; KUE-SCI-0169 v0.3 in `kueper.com/main`). Abschnitte VII–XIII als II–VIII neu nummeriert, Unterabschnitte 7.x → 2.x; Überschrift „Test T4“ unverändert.
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-23-OTA-SCI-0042-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden – `DOC:KUE:KUE-SCI-0169-2026-DE` (v0.2, begutachtet 2026-11-11) enthält Dumont et al. 2025, Doglioni 2026, Le Mouël et al. (inkl. Fassung v3 vom 20.09.2026) und Guglielmi/Zotov vollständiger und aktueller als OTA. Die Inventur führte das Dokument in Gruppe T („eigene Erdbebentheorie“); die Theorie stammt aber von Guglielmi und Mitarbeitern, eigenes Modell von Thomas ist nur der AVI-Anschluss in §VII – der bleibt.
Voraussetzung: `KUE-SCI-0169-2026-DE` in mindestens v0.2 in `kueper.com/main` – erfüllt (Stand 2026-11-23). Punkte A–D sind umsetzbar. Die Ergänzungen nach KUE (EXT-OTA-KUE-20261123-001) sind keine Voraussetzung.
Erfasst den Punkt zu OTA-SCI-0042 aus `OTA-REQ-20261106-quellenpruefung.md` (Guglielmi et al. 2023, Seiten) durch Streichung der Langliteratur.

## Anlass

Doppelte Pflege: §II–§VI, die Realzeilen von §VIII, Tests T1–T3 in §IX und die Literatur §XI wiederholen KUE-SCI-0169. OTA ist inzwischen hinter KUE zurück (Le-Mouël-Fassung v3 und Doglioni-Details fehlen, Guglielmi et al. 2023 mit falschen Seiten 428–438 statt 428–437). Recherche 2026-11-23: keine neuen Befunde, Kommentare oder Replikationen seit der KUE-Begutachtung.

## Gewünschte Änderung

A. **§I bis §VI ersetzen.** Die Abschnitte „## I. EXECUTIVE SUMMARY“ bis einschließlich „### 6.2 Was Hypothese bleibt [H]“ samt Inhalt entfernen und an ihre Stelle setzen:

   > ## I. REALGRUNDLAGE (KURZFASSUNG)
   >
   > **[R]** Mehrere Arbeiten berichten gemeinsame oder ähnliche Periodizitäten in globaler Seismizität und Tageslänge (LOD): Dumont et al. (2025) finden sieben gemeinsame pseudo-periodische Komponenten zwischen etwa 1 und 65 Jahren; Doglioni (2026) findet bei 18,6 Jahren keine Modulation der Erdbebenzahl, aber eine schwache, zeitlich wechselnde Modulation der seismischen Momentfreisetzung. A. V. Guglielmi, O. D. Zotov und Mitarbeiter beschreiben Erdbebenfolgen phänomenologisch über einen Deaktivierungskoeffizienten σ und eine aus Katalogdaten rekonstruierte Eigenzeit des Herds. **[H]** Ein planetarer oder sonst externer Kausalmechanismus ist nicht nachgewiesen. Einzelheiten, Zahlen, Tests und Quellen: `DOC:KUE:KUE-SCI-0169-2026-DE`.
   >
   > Die belastbare Brücke lautet daher:
   >
   > ```text
   > gemeinsame / überlappende Periodizitäten [R]
   >         ↓
   > mögliche externe oder gekoppelte Ursache [H]
   >         ↓
   > konkreter physikalischer Mechanismus      [OFFEN]
   > ```

   §VII bis §XIII danach als §II bis §VIII neu nummerieren (Unterabschnitte 7.x → 2.x usw.) – Text unverändert, außer B und C.

B. **Epistemologisches Status-Register (bisher §VIII):** Alle Zeilen bis einschließlich „Planetar synchronisierter Solardynamo“ durch eine Zeile ersetzen: „| Reale Befunde (Dumont, Doglioni, Le Mouël, Guglielmi/Zotov) | [R]/[H] | Einordnung in `DOC:KUE:KUE-SCI-0169-2026-DE` |“. Die Zeile „Direkte AVI-Kopplung an LOD oder Seismizität“ bleibt.

C. **Testbare Konsequenzen (bisher §IX):** T1, T2 und T3 durch einen Satz ersetzen: „Tests zur Replikation der Dumont-Zeitreihen, zur Trennung von Erdbebenzahl N(t) und Momentfreisetzung ΣM₀(t) und zur Tohoku-Foreshock-Geometrie: `DOC:KUE:KUE-SCI-0169-2026-DE`.“ T4 („AVI nur konditional“) bleibt wörtlich (Überschrift als „Test T1: AVI nur konditional“ oder unverändert „Test T4“ – unverändert lassen genügt).

D. **Literatur (bisher §XI):** Ersetzen durch:
   > 1. Realgrundlage: `DOC:KUE:KUE-SCI-0169-2026-DE` (dort alle Primärquellen).
   > 2. Guglielmi, A. V. (2025). *Toward a Phenomenological Theory of Earthquakes.* arXiv:2510.26158v1 (für die Eigenzeit-Analogie in Abschnitt II).

   Frontmatter: `version: "v1.6"`; Kopftabelle „Version: 1.6 · Realteil ausgelagert 2026-xx-xx“; Revisionsvermerk „**<Datum>** | v1.6: Realteil nach DOC:KUE:KUE-SCI-0169-2026-DE ausgelagert (OTA-REQ-20261123-001); §I–§VI durch Kurzfassung ersetzt, Register, Tests T1–T3 und Literatur auf Verweis gekürzt.“

Unverändert bleiben: Kopf und Untertitel, §0 (Evidenzaudit und kuratorische Regel), §VII (AVI- und Omnizedenz-Anschluss [S]) vollständig, T4, §X (Zotov-Disambiguierung), §XII (verwandte Dokumente), der bisherige Revisionsverlauf, `summary` und `tags`. Nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261123-001 (Selbstauskunft der Guglielmi-Gruppe, Kontextquellen und Zotov-Disambiguierung nach KUE-SCI-0169).
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0042 aktualisiert.
