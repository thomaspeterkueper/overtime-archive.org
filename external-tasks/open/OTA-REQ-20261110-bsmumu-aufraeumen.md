# OTA-REQ-20261110-002 – OTA-SCI-0105-2026-DE (Seltene b→sμμ-Zerfälle): Realteil nach KUE auslagern, AVI-P-Einordnung behalten

Status: open
Datum: 2026-11-10
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-10-OTA-SCI-0105-2026-DE.md`
Zuordnung: Teile nach KUE – Provenienz, Messgegenstand, Beobachtung und Reichweite, Erklärungen und Gegenprüfungen (Realteil) nach `kueper.com/external-tasks/open/EXT-OTA-KUE-20261110-002.md`; „Einordnung in AVI-P“ und das Beobachtungsschema bleiben in OTA. Die Inventur führte das Dokument in Gruppe K mit KUE-SCI-0195 – dort steht aber nur ein Abgrenzungssatz, kein Gegenstück.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261110-002 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen.

## Anlass

Die Notiz stützt sich nur auf Pressetexte und benennt die Primäranalysen nicht. Inzwischen identifiziert: CMS-PAS-BPH-24-005 (Run-3-Daten 2022–2024, sechs Kanäle, Verzweigungsverhältnisse systematisch unter mehreren Theorievorhersagen, Isospin-Asymmetrien mit dem SM verträglich; CMS-News 17.09.2026) und LHCb arXiv:2608.12215 (12.08.2026, 8,4 fb⁻¹ Run 1+2, modellunabhängige Transversitätsamplituden von B⁰→K*⁰μ⁺μ⁻, Abweichung des effektiven Wilson-Koeffizienten C₉ vom SM 4,3–4,8σ je nach q²-Binning). Die Zahlen und Kennungen gehören ins KUE-Dokument; OTA übernimmt danach nur die Grundinformation. Die Aussagen der Notiz sind inhaltlich zutreffend und eher vorsichtig formuliert – nichts ist widerlegt.

## Gewünschte Änderung (ECO-ARC-0038 §3a)

A. **Abschnitte „Provenienz“, „Messgegenstand“, „Beobachtung und Reichweite“ und „Erklärungen und Gegenprüfungen“ ersetzen** durch diese Grundinformation (Abschnittstitel „Realgrundlage (Kurzfassung)“):
   > Zerfälle vom Typ b → s μ⁺μ⁻ sind im Standardmodell stark unterdrückt und deshalb empfindlich für mögliche neue Teilchen. CMS fand 2026 in sechs solchen Zerfallskanälen durchweg etwas kleinere Raten als vorhergesagt, LHCb in Winkelverteilungen von B⁰ → K*⁰ μ⁺μ⁻ eine Abweichung, die einer Verschiebung des Koeffizienten C₉ um gut 4σ entspricht. `[R]` Ob dahinter neue Physik oder unterschätzte hadronische Effekte (Formfaktoren, Charm-Schleifen) stehen, ist offen; eine Entdeckung ist das nicht. `[I]`/`[OFFEN]` Analysen, Zahlen und Quellen: `DOC:KUE:KUE-SCI-NNNN-2026-DE`.
B. **Erhalten (unverändert):** Kopfzeile „Stand/Status“, „Einordnung in AVI-P“ (T1–T4, Folge), „Beobachtungs- und Qualitätsschema“, „Status der Ableitung“.
C. **Frontmatter:** `summary` auf die Brückenfunktion umstellen („AVI-P-Einordnung seltener b→sμμ-Zerfälle; Realteil in KUE-SCI-NNNN“). Versionssprung auf v1.1, Revisionsvermerk (neuer Abschnitt am Ende) „2026-11-10: Realteil nach DOC:KUE:KUE-SCI-NNNN-2026-DE ausgelagert (OTA-REQ-20261110-002)“. Kennzeichnung nicht stärker als im KUE-Dokument.

## Nicht Teil dieses Requests

Die AVI-P-Bewertung (T1–T4: jeweils „Nein“) ist Thomas' Modellrahmen und bleibt wörtlich; sie bleibt auch mit den neuen Zahlen gültig (C₉-Verschiebung ist eine lokale effektive Kopplung, keine globale Größe).

## Wirkung

- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Gruppe K → tatsächlich „Teile nach KUE“ (bei der Zeile vermerkt).
- `KUE-SCI-0195-2026-DE` verweist auf OTA-SCI-0105; nach Anlage des KUE-Dokuments den Verweis dort auf KUE-SCI-NNNN umstellen (im KUE-Request genannt).
