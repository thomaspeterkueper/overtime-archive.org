# OTA-REQ-20261115-002 – OTA-SCI-0108-2026-DE (Ultrakompakte Doppel-Weiße-Zwerge): nach Umzug nach KUE zum schlanken Brückendokument kürzen

Status: open
Datum: 2026-11-15
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-15-OTA-SCI-0108-2026-DE.md`
Zuordnung: ganz nach KUE (Inventur Gruppe A). Reines astrophysikalisches Realdossier ([R]/[I]/[H]) ohne Werkbezug (`universe: []`, keine [F]/[W]/[S]); einzige Verknüpfung OTA-SCI-0093. Neues KUE-Dokument per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261115-002.md`.
Voraussetzung: das neue KUE-Dokument aus EXT-OTA-KUE-20261115-002 ist in `kueper.com/main` gemergt (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Erst danach umsetzen (Punkte A–C).

## Anlass

Abgleich am 2026-11-15 mit Sharma et al. 2026 (ApJL 1007, L7; arXiv:2608.09341): P = 374,15013(2) s, Ṗ = −4,7(1) × 10⁻¹¹ s/s und Chirp-Masse ≈ 0,43 M☉ stimmen. Das Paper nennt die Chirp-Masse aber eine Obergrenze und hält neben Direct Impact das Unipolar-Inductor-Modell für möglich (bei 1–2 kpc konsistent); die OTA-Fassung stellt Direct Impact zu stark dar. Zudem sind die Formeln in §2, §3, §5, §6 durch verlorene LaTeX-Backslashes zerstört. Diese Punkte korrigiert das KUE-Dokument.

## Gewünschte Änderung (ECO-ARC-0038 §3a, vollständiger Umzug)

A. **Abschnitte 1–10 ersetzen** durch einen Abschnitt „1. Realgrundlage (Kurzfassung)“:
   > eRASSU J060839.5-704014 ist ein ultrakompaktes Doppelsystem aus zwei Weißen Zwergen (AM-CVn-Klasse) im Vordergrund der Großen Magellanschen Wolke mit einer Orbitalperiode von 374,15 s, die messbar abnimmt (Ṗ ≈ −4,7 × 10⁻¹¹ s/s). `[R]` Unter der Annahme eines überwiegend gravitationswellengetriebenen Zerfalls folgt eine Chirp-Masse von höchstens etwa 0,43 M☉; Akkretionsgeometrie (Direct Impact oder Unipolar Inductor), Einzelmassen und Entfernung sind offen. `[I/H]` Das System gilt als künftige Verifikationsquelle für LISA und ist noch nicht in Gravitationswellen nachgewiesen. `[R]` Befunde, Quellen und Modellgrenzen: `DOC:KUE:KUE-SCI-NNNN`.
B. **Abschnitt 2 „Werkbezug“** neu, ein Satz: „Derzeit kein Werkbezug; das Dokument bleibt als Brückenknoten für künftige Verwendung in den Romanwelten und für den Verweis aus OTA-SCI-0093 bestehen.“
C. **Frontmatter und Kopf:** `summary` ersetzen durch „Brückendokument: eRASSU J060839.5-704014 als Realanker für ultrakompakte Doppel-Weiße-Zwerge; Realteil in KUE-SCI-NNNN.“ `relatedDocuments` und `review` bleiben; `epistemicStatus` auf ["R", "I", "H"] (den nicht standardisierten Marker „OFFEN“ entfernen, offene Größen stehen im Text). Versionssprung auf v1.1, Stand auf das Umsetzungsdatum, Revisionsvermerk am Ende: „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261115-002); Langfassung über Git v1.0.“ Nicht archivieren. Kennzeichnung nicht stärker als im KUE-Dokument.

## Wirkung

- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0108 aktualisiert.
- `OTA-SCI-0093-2026-DE` verweist auf 0108; der Verweis bleibt gültig.
