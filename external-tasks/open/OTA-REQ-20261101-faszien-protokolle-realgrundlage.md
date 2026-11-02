# OTA-REQ-20261101-004 – OTA-LSC-0007-2026-DE (8-Wochen-Protokolle): Evidenzstatus und Sicherheitshinweis

Status: open
Datum: 2026-11-01
Quelle: Begutachtung nach ECO-ARC-0037 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-01-OTA-LSC-0007-2026-DE.md`
Claude-Status: wartet auf Thomas (nur Punkt 5 – EIQM-Kontraindikationen)
Betrifft: [R]-Kennzeichnungen der Protokolle A und B, Kopfbereich. Λ-FSS-Anpassungen [S→F] und EIQM-Setzung bleiben unberührt.

## Befunde und Änderungsvorschlag

1. **Protokoll A (Vibration) als [R→T] mit „Protokollparameter [R]“:** Es gibt kein Standardprotokoll für Ganzkörpervibration. Die Umbrella-Review von Petrigna et al. (2024), *J. Funct. Morphol. Kinesiol.* 9(2), 100, nennt Parameter ausdrücklich nur als zu prüfende Hypothese (z. B. Kraft: > 20 Hz, < 1 g; 2–3×/Woche; Sätze à ~60 s mit 60 s Pause; mind. 6 Wochen; beaufsichtigt) und bemängelt schlecht beschriebene Protokolle. Vorschlag: Parameter als [T] bzw. `rekonstruktion` kennzeichnen, Review als Quelle nennen; Hinweis, dass < 20 Hz Beschwerden (Brust, Kopf, Kiefer) auslösen kann und knielockere Haltung die Übertragung zum Kopf mindert.
2. **„Biphasisches Mechanohormesis-Prinzip [R]“ (A.0):** für Vibration nicht belegt → [T] (vgl. OTA-REQ-20261101-003, Punkt 6).
3. **Protokoll B (Photobiomodulation), „Grundparameter [R]“:** Quellen ergänzen – Zein, Selting & Hamblin (2018), „Review of light parameters and photobiomodulation efficacy: dive into complexity“, *J. Biomed. Opt.* 23(12), 120901; Huang et al. (2009), *Dose-Response* 7, 358–383 (biphasische Dosis-Wirkung). „nie über 40 J/cm²“ ist unbelegt – streichen oder belegen. Bereiche als `forschung` mit großer Streuung kennzeichnen.
4. **Sicherheitshinweis fehlt:** Das Dokument liest sich wie eine Trainings- und Therapieanleitung. Vorschlag: sichtbarer Kasten im Kopf – „In-universe-Protokoll des EIQM 2031; keine Therapie- oder Trainingsempfehlung; Ganzkörpervibration und Lichttherapie nur nach ärztlicher Abklärung“.
5. **Kontraindikationen „Haloperidol, Sulthiame“ (Variantentabelle):** reale Wirkstoffe als EIQM-Kontraindikation ohne Beleg – Leser könnten das als reale medizinische Aussage lesen. Vorschlag: als [F] kennzeichnen oder realen Beleg nennen. – Entscheidung Thomas.

## Wirkung

Nur OTA-intern. Keine Wirkung auf andere Repositories.
