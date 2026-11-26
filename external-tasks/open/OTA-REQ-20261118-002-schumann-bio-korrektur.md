# OTA-REQ-20261118-002 – OTA-SCI-0015-2025-DE (Schumann-Resonanz: Biologische Relevanz und ISS-Referenzdaten): Realteil korrigieren und nach KUE-Umzug kürzen

Status: open
Datum: 2026-11-18
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-18-OTA-SCI-0015-2025-DE.md`
Zuordnung: Teile nach KUE (Inventur Gruppe B bestätigt). Realteile §I (Bio-Hypothesen und Evidenz) und §II (ISS- und Antarktisdaten) gehen in das neue KUE-Dokument aus `kueper.com/external-tasks/open/EXT-OTA-KUE-20261118-001.md`. Hayashi-Rahmen [HAY] (§III), Kuratornotizen und Werkbezug bleiben in OTA.
Voraussetzung: Punkte A–C erst, wenn das neue KUE-Dokument aus EXT-OTA-KUE-20261118-001 in `kueper.com/main` gemergt ist (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`).
KUE-Dokument: `KUE-SCI-0223-2026-DE` (Schumann-Resonanzen Mars, Erdorbit, biologische Evidenz; `kueper.com/src/content/kue/sci/kue-sci-0223-2026-de.md`, in `main`) – Signatur eingetragen am 2026-11-26 (EXT-KUE-OTA-20261125-004).
Teilweise erledigt: 2026-11-26 – Punkte A–C umgesetzt in OTA-SCI-0015 v1.1 durch die Begutachtung (ECO-ARC-0038 §3b; KUE-SCI-0223-2026-DE v0.1 in `kueper.com/main`, `KUE-SCI-NNNN` = KUE-SCI-0223). Offen bleibt nur Punkt D (wartet auf Thomas).
Bezug: Die drei Befunde zu OTA-SCI-0015 aus `OTA-REQ-20261106-quellenpruefung.md` (Wever, Barger, Basner) sind hier mit erfasst.

## Anlass

Geprüft 2026-11-18. Mehrere als [R] („Peer-Reviewed“) gekennzeichnete Angaben sind falsch oder nicht belegt:

- Barger et al. 2014 erschien in **Lancet Neurology** 13(9), 904–912 (nicht JAMA 311(17)); Stichprobe 64 Shuttle- und 21 ISS-Astronauten. Die Tabelle in §2.1 (Effizienz 76/82 %, Schlafmittel Erde 10 %, „schlechte Qualität“ 52/16 %) ist so nicht belegt.
- Stahn et al. 2019 (NEJM 381, 2273–2275): **9** Teilnehmende an der **Neumayer-Station III**, 14 Monate; Gyrus dentatus kleiner, BDNF gesunken. Die Arbeit enthält **keine EEG-Daten** – „EEG-Alpha keine Veränderung, Theta +12 %“, „Concordia“ und „N = 8“ sind falsch.
- Wever (1974) Chronobiologia 1(1) ist falsch; belegt ist Wever 1971 in Menaker (Hg.), Biochronometry, S. 117–133.
- Basner et al. (2021) Sci. Rep. 11, 10144 ist nicht auffindbar.
- §II „ISS-Astronauten leben außerhalb der Schumann-Resonanz (Orbit 400 km, oberhalb der Ionosphäre)“: Die ISS fliegt in der F-Schicht der Ionosphäre, und Schumann-Resonanzen wurden vom Satelliten C/NOFS in 400–800 km Höhe in fast jedem Orbit gemessen (Simões et al. 2011, GRL 38(22)).

## Gewünschte Änderung

A. **§I (1.1–1.4) und §II (2.1–2.4) ersetzen** durch einen Abschnitt „I. Realgrundlage (Kurzfassung)“ mit genau diesem Text:
   > [R] Ob die Schumann-Resonanz (Grundmode etwa 7,8 Hz) biologisch wirkt, ist nicht belegt: Es gibt einzelne kleine Korrelationsstudien, aber keinen gesicherten Mechanismus. [R] Auf Raumflügen schlafen Astronauten im Mittel etwa sechs Stunden, und Schlafmittel sind häufig; als Ursachen gelten Licht, Lärm, Arbeitslast und Mikrogravitation – eine Rolle fehlender Schumann-Felder wurde nie untersucht. Schumann-Signale sind zudem auch in 400–800 km Höhe messbar, also nicht einfach „abwesend“. Einzelheiten und Quellen: `DOC:KUE:KUE-SCI-0223-2026-DE`.
   Abstract-Satz „Zusätzlich werden ISS-Raumfahrtdaten (N=85+ Astronauten) als natürliches Experiment für elektromagnetische Entkopplung analysiert.“ ersetzen durch „Die Realgrundlage (Evidenzlage, Raumfahrtdaten) steht in DOC:KUE:KUE-SCI-0223-2026-DE.“
B. **Referenzliste [R]** ersetzen durch: „Quellen im KUE-Dokument `DOC:KUE:KUE-SCI-0223-2026-DE`.“ Die Liste [HAY] bleibt unverändert.
C. **Frontmatter und Revision:** `summary` ersetzen durch „Brücke: Hayashi-Frequenzhierarchie und Mars-Szenarien auf Basis der (schwachen) realen Evidenz zu Schumann-Bioeffekten; Realteil in KUE-SCI-0223-2026-DE.“ `relatedDocuments` um `DOC:KUE:KUE-SCI-0223-2026-DE` ergänzen. Versionssprung auf v1.1, Revisionsvermerk: „<Datum>: Realteil §I/§II nach DOC:KUE:KUE-SCI-0223-2026-DE ausgelagert und Realangaben korrigiert (OTA-REQ-20261118-002); Langfassung über Git v1.0.“ Nicht archivieren. Kennzeichnung nicht stärker als im KUE-Dokument.
D. **Claude-Status: wartet auf Thomas** – Folgende Punkte berühren Kuratornotizen oder Weltlogik:
   1. [KN-00] nennt die ISS-Daten „das beste verfügbare natürliche Experiment“ für elektromagnetische Entkopplung; [KN-01] sagt, auf der ISS fehle „nur die spezifische 7.83 Hz Frequenz“. Nach Simões et al. 2011 ist das Schumann-Signal auch im Orbit messbar (schwächer, verändert). Vorschlag: [KN-01] um einen Satz ergänzen („Satellitenmessungen zeigen Schumann-Signale auch in 400–800 km Höhe; die Entkopplung auf der ISS ist also nur teilweise.“) – oder unverändert lassen.
   2. Weltlogik §III/[KN-02]: Die Hierarchie setzt voraus, dass der Mars „keine natürliche Schumann-Resonanz“ hat. Real sagen Modelle eine schwache Mars-Resonanz bei etwa 9–14 Hz voraus (siehe OTA-SCI-0009). Ob die Setzung das aufnimmt (z. B. „schwach und unregelmäßig“) oder bewusst davon abweicht, entscheidet Thomas; ggf. Eintrag im Widerspruchsregister.

## Wirkung

- `kueper-ecosystem/status/ota-kue-zuordnung.md`: Zeile OTA-SCI-0015 aktualisiert.
- Querverweise aus OTA-SCI-0016-2150 (Mars EEG Atlas) und OTA-TEC-0019-2095 bleiben gültig.
