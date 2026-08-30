from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "src" / "content" / "documents"


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if new in text:
        return text
    if old not in text:
        raise SystemExit(f"missing expected text for {label}")
    return text.replace(old, new, 1)


def update(path: Path, replacements: list[tuple[str, str, str]], audit_before: str, audit_text: str) -> None:
    text = path.read_text(encoding="utf-8")
    text = replace_once(text, 'version: "v1.0"', 'version: "v1.1"', f"{path.name}:version")
    for old, new, label in replacements:
        text = replace_once(text, old, new, f"{path.name}:{label}")
    if audit_text.strip() not in text:
        if audit_before not in text:
            raise SystemExit(f"missing audit insertion point in {path.name}")
        text = text.replace(audit_before, audit_text + "\n\n---\n\n" + audit_before, 1)
    path.write_text(text, encoding="utf-8")


update(
    DOCS / "OTA-TEC-0034-2026-DE.md",
    [
        (
            '- **[R]** Sublimation: Bei niedrigem Marsdruck (\\~600 Pa) sublimiert Wassereis direkt zu Dampf, ohne flüssige Phase — das vereinfacht die Extraktion, verkompliziert aber die Kondensation.',
            '- **[R]** Sublimation: Beim für große Teile der Marsoberfläche repräsentativen Druck um \\~600 Pa liegt Wasser nahe dem Tripelpunkt (611,7 Pa); Wassereis geht unter typischen Oberflächenbedingungen überwiegend direkt in Dampf über. Das vereinfacht thermische Extraktionspfade, erfordert aber kontrollierte Dampferfassung und Wärmeabfuhr. Die Aussage gilt nicht absolut: Druck, Salzgehalt und lokale Topographie können andere Phasenbedingungen zulassen.',
            'sublimation',
        ),
        (
            '- **[H]** Verfahren: Erhitzung des Regoliths (resistiv, mikrowellenbasiert oder solar-thermisch) auf geschätzt 0–20 °C, wodurch Eis sublimiert; der Dampf wird abgesaugt und in einer Kühlfalle bei deutlich niedrigerer Temperatur wieder resublimiert (Frost) oder kondensiert. *(Temperaturbereich noch nicht wissenschaftlich geprüft, vorläufige Annahme)*',
            '- **[H]** Verfahren: Erhitzung des Regoliths (resistiv, mikrowellenbasiert oder solar-thermisch), sodass Eis sublimiert; der Dampf wird abgesaugt und in einer Kühlfalle resublimiert oder kondensiert. Ein Zielbereich um 0–20 °C ist für reines Eis in einem geschlossenen Niederdruckprozess als niedriger Arbeitsbereich plausibel, aber keine physikalische Obergrenze; höhere Temperaturen können die Kinetik beschleunigen oder für mineralgebundenes Wasser erforderlich werden.',
            'temperature',
        ),
        (
            '- **[H]** Mikrowellen-in-situ-Erhitzung (statt Aushub) wird als effizienteres Verfahren angenommen, spart Transportenergie, ist aber technisch voraussetzungsreicher (gleichmäßige Erwärmung, Eindringtiefe).',
            '- **[H]** Mikrowellen-in-situ-Erhitzung (statt Aushub) ist ein möglicher Systempfad mit Vorteilen bei selektiver/volumetrischer Erwärmung und geringerem Aushubaufwand. Eine generell niedrigere Energie pro kg gewonnenem Wasser ist jedoch nicht belegt; Eindringtiefe, kryogene dielektrische Verluste und Rekondensation des Dampfes können den Vorteil stark reduzieren.',
            'microwave',
        ),
        (
            '- **Grenzen des Systems:** Wirkungsgrad hängt stark vom Eisgehalt des Regoliths ab (real gemessene Werte variieren regional stark; hier als Richtwert 2–40 Gew\\.-% angenommen **[H]**, je nach Fundstelle noch zu verifizieren); bei sehr trockenem Regolith unwirtschaftlich. Energieaufwand pro Liter Wasser steigt mit sinkendem Eisgehalt überproportional **[H]**.',
            '- **Grenzen des Systems:** Wirkungsgrad hängt stark vom Eisgehalt und von der Lagerstättenform ab. **[H]** 2–40 Gew\\.-% bleibt als Designband für poreneishaltigen Regolith brauchbar, deckt aber massive, nahezu reine Eislagerstätten ausdrücklich nicht ab. Feste Wirtschaftlichkeitsgrenzen lassen sich daraus nicht ableiten; Energieaufwand pro Liter Wasser steigt mit sinkendem Eisgehalt deutlich und technologieabhängig.',
            'ice-band',
        ),
        (
            '- **Energie:** geschätzt 15–40 kWh pro m³ gewonnenem Wasser **[H]**, stark abhängig von Eisgehalt und Umgebungstemperatur — Wert noch nicht gegen reale ISRU-Studien geprüft, vor Kanonisierung zu verifizieren',
            '- **Energie:** **[H]** als reales Auslegungsband zunächst etwa **0,9–3,9 kWh pro kg gewonnenem Wasser** (≈ **900–3.900 kWh/m³ Wasser**) für untersuchte thermische Extraktionspfade, stark abhängig von Eisgehalt, Wärmeverlusten und Prozessarchitektur. Der thermodynamische Mindestbedarf für Aufheizung plus Sublimation liegt bereits grob bei **0,83 kWh/kg** (≈ 830 kWh/m³). Frühere 15–40 kWh/m³ waren dimensionswidrig zu niedrig und sind verworfen.',
            'energy',
        ),
        (
            '- **Standortkriterien:** Eisgehalt oberhalb eines noch zu bestätigenden Schwellenwerts (vorläufig angenommen > 5 Gew\\.-% **[H]**), Overburden < 2 m, Zugänglichkeit für Fördertechnik',
            '- **Standortkriterien:** möglichst hoher Eisgehalt und geringe Überdeckung; **[H]** > 5 Gew\\.-% kann als Designorientierung für poreneishaltigen Regolith dienen, ist aber kein naturwissenschaftlich fixer Wirtschaftlichkeitsschwellenwert. Overburden < 2 m bleibt eine plausible Zugänglichkeitspräferenz, keine harte physikalische Grenze.',
            'site-threshold',
        ),
        (
            '- **Ausschlusskriterien:** Trockenregionen unterhalb des Schwellenwerts (vorläufig angenommen < 2 Gew\\.-% Eisgehalt **[H]**), instabiler Untergrund, permanente Staubsturm-Korridore',
            '- **Ausschlusskriterien:** sehr eisarme Standorte können je nach Energie- und Anlagendesign unwirtschaftlich werden; **[H]** < 2 Gew\\.-% ist daher nur eine Szenario-/Designschwelle, kein universeller Ausschlusswert. Weitere Ausschlussgründe: instabiler Untergrund, dauerhaft ungünstige Staub- und Zugangsbedingungen.',
            'exclude-threshold',
        ),
        (
            '- **Effizienz:** sinkt merklich bei Eisgehalt < 5 %, steigt deutlich bei reinen Eislinsen',
            '- **Effizienz:** sinkt mit abnehmendem Eisgehalt deutlich; massive/reine Eislagerstätten sind energetisch und massenlogistisch eine andere Ressourcenklasse als poreneishaltiger Regolith. Die 5-%-Marke ist ein Designindikator, keine feste physikalische Schwelle.',
            'efficiency',
        ),
        (
            '- **Alternative Technologien:** atmosphärische Wassergewinnung (MOXIE-artige Systeme entnehmen real CO₂ aus der Atmosphäre für Sauerstoffgewinnung, nicht primär Wasser **[R]**; eine direkte atmosphärische Wasserextraktion auf Mars ist mangels signifikanten atmosphärischen Wasserdampfs unrealistisch **[H]**, diese Aussage vor Kanonisierung mit aktueller Forschung abzugleichen)',
            '- **Alternative Technologien:** atmosphärische Wassergewinnung (**[R]** MOXIE gewinnt Sauerstoff aus CO₂ und ist kein Wasserextraktor). Direkte Wassergewinnung aus der Marsatmosphäre ist **[H]** technisch möglich, aber ertragsarm, standort-/jahreszeitabhängig und energieintensiv; sie eignet sich eher als dezentrale Reserve- oder Spezialquelle als als primäre Versorgung großer Siedlungen.',
            'atmospheric-water',
        ),
    ],
    '## Dossier-Status',
    '''### Evidenzaudit v1.1 — 2026-08-30

- Energiebezugsgröße von 15–40 kWh/m³ auf literaturgestützte Größenordnung korrigiert.
- 0–20 °C als niedriger Prozessbereich statt als allgemeines Zielmaximum eingeordnet.
- Mikrowellenpfad als System-Trade-off statt pauschal energieeffizienter beschrieben.
- Eisgehalts-/Wirtschaftlichkeitsschwellen als szenarioabhängig markiert.
- Atmosphärische Wassergewinnung von „unrealistisch“ auf technisch möglich, aber niedrig-ertragreich präzisiert.
- NOXIA-Produktionsrate und Balancingwerte unverändert.''',
)

update(
    DOCS / "OTA-TEC-0036-2026-DE.md",
    [
        (
            '- **[R]** Fehlende Atmosphäre bedeutet keine Windlast, aber auch keine konvektive Kühlung — Wärmeabgabe der Elektronik erfolgt ausschließlich per Strahlung, was großflächige Radiatoren erfordert.',
            '- **[R]** Fehlende Atmosphäre bedeutet keine Windlast und keine Wärmeabgabe an eine äußere Atmosphäre durch Konvektion. Intern wird Wärme jedoch weiterhin durch Leitung sowie in der Druckkabine und in Fluidkreisläufen durch Konvektion transportiert; die endgültige passive Abgabe an den Weltraum erfolgt über Radiatoren durch Strahlung, alternativ/ergänzend sind Verdampfungs- oder Sublimationskühler möglich.',
            'thermal',
        ),
        (
            '- **Verschleiß:** Reifen/Räder ohne klassischen Luftdruck (Mesh-Wheel-Bauweise) nutzen sich durch scharfkantigen Regolith ab **[R]**, reale Erfahrung aus Apollo-Missionen belegt dieses Problem',
            '- **Verschleiß:** Reifen/Räder ohne klassischen Luftdruck (Mesh-Wheel-Bauweise) zeigen unter scharfkantigem Regolith abrasiven Verschleiß **[R]**. Apollo-Räder blieben einsatzfähig, Post-Mission-Inspektionen dokumentierten jedoch deutlichen Abrieb insbesondere an Drahtverbindungen.',
            'mesh-wheel',
        ),
        (
            '- **Risiko-Kennzeichnung:** Druckverlust-Risiko **[R]** (reale Problematik jeder Druckkabine im Vakuum), Umkipprisiko bei 1/6 g **[R]** (real dokumentiertes Apollo-LRV-Verhalten), Batterieausfall bei Extremkälte **[H]** (technische Ausgestaltung noch nicht kanonisch geprüft)',
            '- **Risiko-Kennzeichnung:** Druckverlust-Risiko **[R]** (reale Problematik jeder Druckkabine im Vakuum), Kipp-/Stabilitätsrisiko bei 1/6 g **[R]** (durch Dynamik und Terramechanik real, während Apollo Sprung- und Rutschereignisse, aber keinen tatsächlichen LRV-Überschlag dokumentiert), Batterieausfall bei Extremkälte **[H]** (durch Batteriechemie und Thermalkonzept bestimmt).',
            'rollover',
        ),
    ],
    '### 18. Versionshistorie',
    '''### Evidenzaudit v1.1 — 2026-08-30

- Vakuum-Thermik präzisiert: keine externe Gaskonvektion, aber interner Wärmetransport plus radiative bzw. sublimative Endabgabe.
- Apollo-LRV-Befund von tatsächlichem Überschlag getrennt; Sprung-/Rutschverhalten bleibt realer Anker.
- Mesh-Wheel-Verschleiß auf dokumentierten abrasiven Abrieb eingeengt.
- Druckrover- und Batteriekälte-Annahmen bleiben [H] und plausibel; NOXIA-Balancing unverändert.''',
)

update(
    DOCS / "OTA-TEC-0037-2026-DE.md",
    [
        (
            '- **[R]** Sensor-Grundausstattung (optische Kamera, Infrarot, Partikeldetektor, Atmosphärenanalyse) basiert auf real existierenden Sensorprinzipien.',
            '- **[R]** Sensor-Grundausstattung (optische Kamera, Infrarot, Partikeldetektor, Atmosphärenanalyse) basiert auf real existierenden Sensorprinzipien. Die nutzbaren Modi sind umgebungsabhängig: Atmosphärenanalyse entfällt in atmosphärenlosen Asteroidenumgebungen; optische/IR-Systeme benötigen auf Mars bzw. Titan eigene Staub-/Haze- und Spektralstrategien.',
            'sensor-environment',
        ),
        (
            '- **Komponenten:** 4× Casimir-Drift-Emitter (CDE-μ7), optische Kamera (4K, 20× Zoom), Infrarot-Scanner, Atmosphären-Analyseeinheit, Partikeldetektor, Audio-System (Lautsprecher + 360°-Mikrofon-Array)',
            '- **Komponenten:** 4× Casimir-Drift-Emitter (CDE-μ7), optische Kamera (4K, 20× Zoom), Infrarot-Scanner, Atmosphären-Analyseeinheit, Partikeldetektor, Audio-System (Lautsprecher + 360°-Mikrofon-Array). **[R-Anker]** Das Audio-System ist mediumabhängig: im Vakuum kein normaler luftgetragener Schallbetrieb; dort nur Körperschall/Kontaktvibration oder Funk. Mars- und Titanbetrieb nutzen die jeweilige Atmosphäre mit abweichender Schallgeschwindigkeit und Dämpfung.',
            'audio',
        ),
        (
            '- **Atmosphäre / Druck:** funktioniert laut Objektbeschreibung sowohl im Vakuum als auch in extremer Atmosphäre **[F]**',
            '- **Atmosphäre / Druck:** funktioniert laut Objektbeschreibung sowohl im Vakuum als auch in extremer Atmosphäre **[F]**\n- **Sensor-Umweltmodi [R-Anker]:** Mars: dünne CO₂-Atmosphäre, Staub und begrenzte Hochfrequenz-Akustik; Titan: dichte kalte N₂/CH₄-Atmosphäre, Haze und NIR-Fenster; Asteroiden/Vakuum: keine Atmosphärenanalyse und kein Luftschall, optische/thermische/Partikelsensorik bleibt nutzbar.',
            'environment-modes',
        ),
        (
            '- **Temperaturbereich:** -180 bis +120 °C (Herstellerangabe Gehäuse)',
            '- **Temperaturbereich:** -180 bis +120 °C **[W]** (Herstellerangabe Gehäuse; mit Titan-Oberflächentemperaturen und typischen Raumfahrt-Thermozyklen als Plausibilitätsanker vereinbar, aber kein extern verifizierter Leistungswert der fiktiven VEX-47).',
            'temperature-class',
        ),
        (
            '- **Staub / Regolith:** explizites Einsatzszenario (Mars-Staubstürme), gleichzeitig bekannte Schwachstelle der Optik bei Sandstürmen',
            '- **Staub / Regolith:** explizites Einsatzszenario. **[R-Anker]** Marsstaub kann Sicht- und IR-Sensorik durch atmosphärische Opazität und Ablagerung deutlich degradieren; Kalibrierung, Schutzfenster/Abdeckungen und Staubminderung gehören daher zum realen Randbedingungsrahmen.',
            'dust',
        ),
    ],
    '### 18. Versionshistorie',
    '''### Evidenzaudit v1.1 — 2026-08-30

- Reale Sensorik um umgebungsspezifische Betriebsgrenzen für Mars, Titan und Vakuum ergänzt.
- Audio-System im Vakuum auf nicht-luftgetragene Modi begrenzt.
- Titan-Optik/Haze sowie Mars-Staub als reale Sensor-Randbedingungen präzisiert.
- Gehäuse-Temperaturbereich ausdrücklich als fiktive Herstellerangabe [W] markiert.
- Casimir-Drift, Thorium-Mikrozelle, Mantrika, Blackpearl und Vex-Instanzgeschichte unverändert [F]/[W]; NOXIA-Balancing unverändert.''',
)

print('updated OTA-TEC-0034/0036/0037 to v1.1')
