# OTA-REQ-20261104-001 – OTA-SCI-0064-2026-DE (Hautmikrobiom): Realteil auf Verweis nach KUE-SCI-0064 kürzen

Status: done
Datum: 2026-11-04
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-04-OTA-SCI-0064-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0064-2026-DE` (Kanonisch, gleicher Inhalt in Abschnitten II–VI); Brücke zu OTJIZE bleibt in OTA
Voraussetzung: KUE-SCI-0064 ist bereits in `kueper.com/main`. Für den Wortlaut der Grundinformation die Korrekturen aus `kueper.com/external-tasks/open/KUE-REQ-20261104-sci-0064-hautmikrobiom-belege.md` berücksichtigen (OTA nicht stärker kennzeichnen als KUE).

## Anlass

Abschnitte II–VI und VIII von OTA-SCI-0064 sind eine Parallelfassung von KUE-SCI-0064 (Doppelpflege). Dabei enthalten beide denselben fehlerhaften Beleg: Brumlow et al. 2019 ist eine Studie an Fisch-Hautschleim (*Gambusia affinis*), nicht an menschlicher Haut. DOI und Seiten wurden in OTA direkt korrigiert (Metadaten).

## Gewünschte Änderung (ECO-ARC-0038 §3a)

1. **Abschnitte II–VI und VIII ersetzen** durch eine Grundinformation von wenigen Sätzen, etwa:
   > Das Hautmikrobiom ist ein mit dem Wirt ko-adaptiertes Ökosystem; es stützt Barriere, Immunregulation und Pathogenabwehr und erzeugt den Körpergeruch, weil Hautbakterien geruchlose Sekrete zu flüchtigen Verbindungen umsetzen. Geruch ist deshalb ein früher, wahrnehmbarer Marker seines Zustands. `[R]` Nach Störungen (Antiseptika, Triclosan, Milieuwechsel) erholt es sich oft rasch, aber individuell verschieden; im Modellsystem kehrt die Funktion zurück, ohne dass die ursprüngliche Zusammensetzung wiederhergestellt wird. `[R]` im Modell, `[T]` für menschliche Haut. Belege, Statustabelle und Begriff „partielle Reversibilität“: `DOC:KUE:KUE-SCI-0064-2026-DE` (§§ I–V).
2. **Vollständig erhalten:** Kopf/Metadatentabelle, I. Zusammenfassung (auf die OTJIZE-Funktion des Dokuments kürzen), 3.3-Satz zu Zuvas Körpergeruch als `[R-Anker]`, **VII. Verbindung zu OTJIZE (7.1–7.3)**, die OTJIZE-Zeilen der epistemologischen Zusammenfassung (VIII) und **X. Kuratornotiz** einschließlich Clustertabelle.
3. **IX. Literatur** auf den Verweis auf KUE-SCI-0064 und die im OTA-Teil direkt genutzten Bezüge (OTA-SCI-0057, OTA-SCI-0058) reduzieren.
4. In 5.1 steht bisher für Baur et al. 2021 „vollständige Rückkehr … nach 7 Tagen“ – die Studie zeigt eine annähernde Rückkehr der Zusammensetzung im Mausmodell eine Woche nach Exposition. Falls ein Satz dazu in der Grundinformation bleibt, so formulieren.
5. Versionssprung auf v1.2 (Frontmatter `version` steht noch auf v1.0, Kopf auf 1.1 – angleichen), Revisionsvermerk „2026-11-04: Realteil nach DOC:KUE:KUE-SCI-0064-2026-DE ausgelagert“.
6. Hinweis Metadaten: `knowledge.domains` steht auf `KD:PHYS-THERM:N1` (Thermodynamik); passender wäre `KD:BIO-MICROBIOME:N2` – mit dem Knowledge Graph abklären.

## Wirkung

Keine weitere auf andere Repositories. Abweichungen, die KUE fehlen (unbelegte Aussagen zu dauerhaftem Artenverlust und alternativen stabilen Zuständen), stehen in KUE-REQ-20261104-001 Punkt 6.

## Erledigt

2026-11-04 – nach Freigabe von Thomas umgesetzt (OTA-SCI-0064 v1.2). Punkt 6 (KG-Domain) offen gelassen – Abklärung mit dem Knowledge Graph.
