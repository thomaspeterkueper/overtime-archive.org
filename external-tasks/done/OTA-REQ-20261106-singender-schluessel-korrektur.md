# OTA-REQ-20261106-001 – OTA-SCI-0080-2026-DE (Der singende Schlüssel): Realgrundlage korrigieren, U/Th-Teil auf Verweis nach KUE-SCI-0174 kürzen

Status: done
Erledigt: 2026-11-10 – umgesetzt in OTA-SCI-0080 v1.4 durch die Begutachtung (ECO-ARC-0038 §3b). Punkt A6 ist nur ein Hinweis ohne benannte Richtung („Kanonisch“ in der Kopftabelle gegen `status: AKTIV`) und wurde nicht geändert – an Thomas gemeldet. Zu A4: Lucas (1948) nicht geprüft, Aussage daher als [H] geführt; in Tabelle V wurde die Lorbeer-Zeile dem gesenkten Marker angeglichen.
Datum: 2026-11-06
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-06-OTA-SCI-0080-2026-DE.md`
Zuordnung: KUE-Gegenstück vorhanden (Gruppe K) – `DOC:KUE:KUE-SCI-0174-2026-DE`. Arsenikbronze, Akustik und Lorbeer bleiben als dienende Werkanker in OTA.
Voraussetzung für Punkt B: KUE-SCI-0174 v0.2 ist in `kueper.com/main` gemergt (Branch `claude/review-2026-11-06`).

## A. Korrekturen der Realgrundlage (Marker R/T)

1. **Quelle Philip:** Levant **23** (1991), 93–104 – nicht Band 13. Der Titel lautet „Tin, Arsenic, Lead: Alloying Practices in Syria-Palestine around 2000 B.C.“; die Zeile „Dreizehn syrisch-palästinische … Prestige-Dolche“ am Quellenzitat in §1.1 prüfen bzw. streichen.
2. **§1.1 Tabelle:** Der Hort von Nahal Mishmar (~3500 v. Chr.) ist **chalkolithisch** und besteht bei den Prestigeobjekten aus Kupfer mit Arsen **und Antimon bzw. Nickel** („complex metals“), im Wachsausschmelzverfahren gegossen. Der Wert „4–12 % As“ ist in der zitierten Literatur nicht belegt. Für die Mittelbronzezeit der Levante sind Waffen aus Zinnbronze (ca. 2–14 % Sn) und Arsenkupfer (ca. 0,5–4,3 % As) nebeneinander belegt; in der Spätbronzezeit dominiert Zinnbronze. Vorschlag: Zeile „Arsengehalt (Prestigeobjekte)“ als „Cu-As-Sb/Ni, Gehalte objektabhängig [R]“ führen, MB-Werte ergänzen. Die kanonische Legierung des Schlüssels (4–6 % As) bleibt [S→F] und unverändert.
3. **§1.2 Thermik:** 380 J/(kg·K) ist für Metalle eine eher **niedrige** spezifische Wärmekapazität; „hohe Trägheit“ entsteht nur über die Masse. Metall fühlt sich bei Erstkontakt **kühler** an (hohe Wärmeeindringzahl), erst nach dem Halten warm, weil es Körperwärme gespeichert hat. „wärmer als Eisen“ ist bei 50–60 W/(m·K) gegenüber rund 80 W/(m·K) für Eisen irreführend. Vorschlag: Konsequenz-Spalte so umformulieren; §2.2 „Was das warme Gefühl realistisch erklärt“ entsprechend schärfen (Verweis KUE-SCI-0174 §IV).
4. **§IV Lorbeer:** Hauptbestandteil des Lorbeerblattöls ist **1,8-Cineol** (rund 30–45 %), daneben α-Terpinylacetat, Methyleugenol, Linalool, Sabinen (5–11 %) und α-Pinen (4–7 %) (Fantasma et al. 2024, Foods 13, 2282, DOI 10.3390/foods13142282). Die Annahme, flüchtige Monoterpene blieben über Jahrtausende in Patinaporen erhalten, ist nicht belegt – Marker von [R/T] auf **[S]** bzw. [H] senken. Die Aussage „Lorbeeröl war als Konservierungsmittel für Metall verbreitet [R]“ an Lucas (1948) prüfen; ohne Beleg [H].
5. **Quellen:** „Asfahani et al. (2019): Radioactive heat production of Syrian territory“ ist nicht verifizierbar. Die Urangehalte bis ~112 ppm stammen aus Asfahani & Abdul-Hadi (2001), Applied Radiation and Isotopes, S. 543–557 (Süd-al-Abter, 43–113 ppm U). Quelle ersetzen oder bibliographisch belegen.
6. **Metadaten (nur Hinweis):** Kopftabelle „Status: Kanonisch“ widerspricht dem Frontmatter `status: AKTIV`; bitte vereinheitlichen.

## B. Kürzung nach ECO-ARC-0038 §3a (nach Merge von KUE-SCI-0174 v0.2)

- §2.1 und §2.2 (Phosphatgeologie, Regionalwerte, Isotopentabelle, Wärmerechnung) ersetzen durch diese Grundinformation:
  > Uran- und Thoriumspuren sind in Erzen und Gesteinen der Region real; syrische Phosphorite enthalten bis etwa 110 ppm Uran, gebunden an Phosphat und organische Substanz, nicht an Monazit. Selbst 200 ppm Uran erzeugen nur rund 20 nW pro Kilogramm – für die Hand nicht spürbar; nach Verhüttung bleibt im Metall noch weniger. `[R/T]` Einzelheiten, Quellen und Rechnung: `DOC:KUE:KUE-SCI-0174-2026-DE`.
- **Vollständig erhalten:** Qatna [R] / Amara [F], die Monazit/Thorit-Setzung [S→F], die kanonische Legierung, KN-1.2, KN-2.2, KN-3.4, Teil III (Akustik) und die Plausibilitätstabelle V (dort „Radioaktive Eigenwärme“ auf Verweis kürzen).
- Versionssprung auf v1.4, Revisionsvermerk „2026-11-06: Realgrundlage korrigiert (Philip, Nahal Mishmar, Thermik, Lorbeer, Quelle Asfahani); U/Th-Realteil nach DOC:KUE:KUE-SCI-0174-2026-DE ausgelagert“. Kennzeichnung nicht stärker als KUE.

## Wirkung

- OTA-TEC-0080-2026-DE (fiktionale Anwendung) nutzt Wärme- und Geruchsbegründung; nach der Korrektur prüfen, ob dort „warm“ und „Lorbeer“ weiter als realer Mechanismus behauptet werden. Kein Kanoneingriff nötig – Eigenwärme bleibt laut KN-2.2 eine mögliche [F]-Setzung.
- Keine anderen Repositories betroffen.
