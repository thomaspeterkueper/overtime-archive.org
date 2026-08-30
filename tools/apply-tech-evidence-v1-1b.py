from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "src" / "content" / "documents"


def line_replace(text: str, starts: str, new: str, label: str) -> str:
    if new in text:
        return text
    lines = text.splitlines()
    hits = [i for i, line in enumerate(lines) if line.startswith(starts)]
    if len(hits) != 1:
        raise SystemExit(f"{label}: expected one line starting {starts!r}, got {len(hits)}")
    lines[hits[0]] = new
    return "\n".join(lines) + ("\n" if text.endswith("\n") else "")


def add_audit(text: str, before: str, audit: str) -> str:
    if audit.splitlines()[0] in text:
        return text
    if before not in text:
        raise SystemExit(f"missing audit insertion point {before}")
    return text.replace(before, audit + "\n\n---\n\n" + before, 1)


def load(name: str) -> tuple[Path, str]:
    p = DOCS / name
    return p, p.read_text(encoding="utf-8")


def save(p: Path, text: str) -> None:
    text = re.sub(r'^version: "v1\.0"$', 'version: "v1.1"', text, count=1, flags=re.M)
    p.write_text(text, encoding="utf-8")

p, t = load("OTA-TEC-0034-2026-DE.md")
t = line_replace(t, '- **[R]** Sublimation:', '- **[R]** Sublimation: Beim für große Teile der Marsoberfläche repräsentativen Druck um ~600 Pa liegt Wasser nahe dem Tripelpunkt (611,7 Pa); Wassereis geht unter typischen Oberflächenbedingungen überwiegend direkt in Dampf über. Das vereinfacht thermische Extraktionspfade, erfordert aber kontrollierte Dampferfassung und Wärmeabfuhr. Die Aussage gilt nicht absolut: Druck, Salzgehalt und lokale Topographie können andere Phasenbedingungen zulassen.', '0034 sublimation')
t = line_replace(t, '- **[H]** Verfahren:', '- **[H]** Verfahren: Erhitzung des Regoliths (resistiv, mikrowellenbasiert oder solar-thermisch), sodass Eis sublimiert; der Dampf wird abgesaugt und in einer Kühlfalle resublimiert oder kondensiert. Ein Zielbereich um 0–20 °C ist für reines Eis in einem geschlossenen Niederdruckprozess als niedriger Arbeitsbereich plausibel, aber keine physikalische Obergrenze; höhere Temperaturen können die Kinetik beschleunigen oder für mineralgebundenes Wasser erforderlich werden.', '0034 temperature')
t = line_replace(t, '- **[H]** Mikrowellen-in-situ-Erhitzung', '- **[H]** Mikrowellen-in-situ-Erhitzung (statt Aushub) ist ein möglicher Systempfad mit Vorteilen bei selektiver/volumetrischer Erwärmung und geringerem Aushubaufwand. Eine generell niedrigere Energie pro kg gewonnenem Wasser ist jedoch nicht belegt; Eindringtiefe, kryogene dielektrische Verluste und Rekondensation des Dampfes können den Vorteil stark reduzieren.', '0034 microwave')
t = line_replace(t, '- **Grenzen des Systems:** Wirkungsgrad hängt stark vom Eisgehalt', '- **Grenzen des Systems:** Wirkungsgrad hängt stark vom Eisgehalt und von der Lagerstättenform ab. **[H]** 2–40 Gew.-% bleibt als Designband für poreneishaltigen Regolith brauchbar, deckt aber massive, nahezu reine Eislagerstätten ausdrücklich nicht ab. Feste Wirtschaftlichkeitsgrenzen lassen sich daraus nicht ableiten; Energieaufwand pro Liter Wasser steigt mit sinkendem Eisgehalt deutlich und technologieabhängig.', '0034 ice band')
t = line_replace(t, '- **Energie:** geschätzt 15–40 kWh', '- **Energie:** **[H]** als reales Auslegungsband zunächst etwa **0,9–3,9 kWh pro kg gewonnenem Wasser** (≈ **900–3.900 kWh/m³ Wasser**) für untersuchte thermische Extraktionspfade, stark abhängig von Eisgehalt, Wärmeverlusten und Prozessarchitektur. Der thermodynamische Mindestbedarf für Aufheizung plus Sublimation liegt bereits grob bei **0,83 kWh/kg** (≈ 830 kWh/m³). Frühere 15–40 kWh/m³ waren dimensionswidrig zu niedrig und sind verworfen.', '0034 energy')
t = line_replace(t, '- **Standortkriterien:** Eisgehalt oberhalb', '- **Standortkriterien:** möglichst hoher Eisgehalt und geringe Überdeckung; **[H]** > 5 Gew.-% kann als Designorientierung für poreneishaltigen Regolith dienen, ist aber kein naturwissenschaftlich fixer Wirtschaftlichkeitsschwellenwert. Overburden < 2 m bleibt eine plausible Zugänglichkeitspräferenz, keine harte physikalische Grenze.', '0034 site threshold')
t = line_replace(t, '- **Ausschlusskriterien:** Trockenregionen', '- **Ausschlusskriterien:** sehr eisarme Standorte können je nach Energie- und Anlagendesign unwirtschaftlich werden; **[H]** < 2 Gew.-% ist daher nur eine Szenario-/Designschwelle, kein universeller Ausschlusswert. Weitere Ausschlussgründe: instabiler Untergrund, dauerhaft ungünstige Staub- und Zugangsbedingungen.', '0034 exclusion threshold')
t = line_replace(t, '- **Effizienz:** sinkt merklich bei Eisgehalt', '- **Effizienz:** sinkt mit abnehmendem Eisgehalt deutlich; massive/reine Eislagerstätten sind energetisch und massenlogistisch eine andere Ressourcenklasse als poreneishaltiger Regolith. Die 5-%-Marke ist ein Designindikator, keine feste physikalische Schwelle.', '0034 efficiency')
t = line_replace(t, '- **Alternative Technologien:** atmosphärische Wassergewinnung', '- **Alternative Technologien:** atmosphärische Wassergewinnung (**[R]** MOXIE gewinnt Sauerstoff aus CO₂ und ist kein Wasserextraktor). Direkte Wassergewinnung aus der Marsatmosphäre ist **[H]** technisch möglich, aber ertragsarm, standort-/jahreszeitabhängig und energieintensiv; sie eignet sich eher als dezentrale Reserve- oder Spezialquelle als als primäre Versorgung großer Siedlungen.', '0034 atmospheric water')
t = add_audit(t, '## Dossier-Status', '''### Evidenzaudit v1.1 — 2026-08-30

- Energiebezugsgröße von 15–40 kWh/m³ auf literaturgestützte Größenordnung korrigiert.
- 0–20 °C als niedriger Prozessbereich statt als allgemeines Zielmaximum eingeordnet.
- Mikrowellenpfad als System-Trade-off statt pauschal energieeffizienter beschrieben.
- Eisgehalts-/Wirtschaftlichkeitsschwellen als szenarioabhängig markiert.
- Atmosphärische Wassergewinnung von „unrealistisch“ auf technisch möglich, aber niedrig-ertragreich präzisiert.
- NOXIA-Produktionsrate und Balancingwerte unverändert.''')
save(p, t)

p, t = load("OTA-TEC-0036-2026-DE.md")
t = line_replace(t, '- **[R]** Fehlende Atmosphäre bedeutet', '- **[R]** Fehlende Atmosphäre bedeutet keine Windlast und keine Wärmeabgabe an eine äußere Atmosphäre durch Konvektion. Intern wird Wärme jedoch weiterhin durch Leitung sowie in der Druckkabine und in Fluidkreisläufen durch Konvektion transportiert; die endgültige passive Abgabe an den Weltraum erfolgt über Radiatoren durch Strahlung, alternativ/ergänzend sind Verdampfungs- oder Sublimationskühler möglich.', '0036 thermal')
t = line_replace(t, '- **Verschleiß:** Reifen/Räder ohne klassischen Luftdruck', '- **Verschleiß:** Reifen/Räder ohne klassischen Luftdruck (Mesh-Wheel-Bauweise) zeigen unter scharfkantigem Regolith abrasiven Verschleiß **[R]**. Apollo-Räder blieben einsatzfähig, Post-Mission-Inspektionen dokumentierten jedoch deutlichen Abrieb insbesondere an Drahtverbindungen.', '0036 wheels')
t = line_replace(t, '- **Risiko-Kennzeichnung:** Druckverlust-Risiko', '- **Risiko-Kennzeichnung:** Druckverlust-Risiko **[R]** (reale Problematik jeder Druckkabine im Vakuum), Kipp-/Stabilitätsrisiko bei 1/6 g **[R]** (durch Dynamik und Terramechanik real, während Apollo Sprung- und Rutschereignisse, aber keinen tatsächlichen LRV-Überschlag dokumentiert), Batterieausfall bei Extremkälte **[H]** (durch Batteriechemie und Thermalkonzept bestimmt).', '0036 risk')
t = add_audit(t, '### 18. Versionshistorie', '''### Evidenzaudit v1.1 — 2026-08-30

- Vakuum-Thermik präzisiert: keine externe Gaskonvektion, aber interner Wärmetransport plus radiative bzw. sublimative Endabgabe.
- Apollo-LRV-Befund von tatsächlichem Überschlag getrennt; Sprung-/Rutschverhalten bleibt realer Anker.
- Mesh-Wheel-Verschleiß auf dokumentierten abrasiven Abrieb eingeengt.
- Druckrover- und Batteriekälte-Annahmen bleiben [H] und plausibel; NOXIA-Balancing unverändert.''')
save(p, t)

p, t = load("OTA-TEC-0037-2026-DE.md")
t = line_replace(t, '- **[R]** Sensor-Grundausstattung', '- **[R]** Sensor-Grundausstattung (optische Kamera, Infrarot, Partikeldetektor, Atmosphärenanalyse) basiert auf real existierenden Sensorprinzipien. Die nutzbaren Modi sind umgebungsabhängig: Atmosphärenanalyse entfällt in atmosphärenlosen Asteroidenumgebungen; optische/IR-Systeme benötigen auf Mars bzw. Titan eigene Staub-/Haze- und Spektralstrategien.', '0037 sensors')
t = line_replace(t, '- **Komponenten:** 4× Casimir-Drift-Emitter', '- **Komponenten:** 4× Casimir-Drift-Emitter (CDE-μ7), optische Kamera (4K, 20× Zoom), Infrarot-Scanner, Atmosphären-Analyseeinheit, Partikeldetektor, Audio-System (Lautsprecher + 360°-Mikrofon-Array). **[R-Anker]** Das Audio-System ist mediumabhängig: im Vakuum kein normaler luftgetragener Schallbetrieb; dort nur Körperschall/Kontaktvibration oder Funk. Mars- und Titanbetrieb nutzen die jeweilige Atmosphäre mit abweichender Schallgeschwindigkeit und Dämpfung.', '0037 audio')
if '- **Sensor-Umweltmodi [R-Anker]:' not in t:
    t = line_replace(t, '- **Atmosphäre / Druck:**', '- **Atmosphäre / Druck:** funktioniert laut Objektbeschreibung sowohl im Vakuum als auch in extremer Atmosphäre **[F]**\n- **Sensor-Umweltmodi [R-Anker]:** Mars: dünne CO₂-Atmosphäre, Staub und begrenzte Hochfrequenz-Akustik; Titan: dichte kalte N₂/CH₄-Atmosphäre, Haze und NIR-Fenster; Asteroiden/Vakuum: keine Atmosphärenanalyse und kein Luftschall, optische/thermische/Partikelsensorik bleibt nutzbar.', '0037 environment')
t = line_replace(t, '- **Temperaturbereich:** -180 bis +120 °C', '- **Temperaturbereich:** -180 bis +120 °C **[W]** (Herstellerangabe Gehäuse; mit Titan-Oberflächentemperaturen und typischen Raumfahrt-Thermozyklen als Plausibilitätsanker vereinbar, aber kein extern verifizierter Leistungswert der fiktiven VEX-47).', '0037 temperature')
t = line_replace(t, '- **Staub / Regolith:** explizites Einsatzszenario', '- **Staub / Regolith:** explizites Einsatzszenario. **[R-Anker]** Marsstaub kann Sicht- und IR-Sensorik durch atmosphärische Opazität und Ablagerung deutlich degradieren; Kalibrierung, Schutzfenster/Abdeckungen und Staubminderung gehören daher zum realen Randbedingungsrahmen.', '0037 dust')
t = add_audit(t, '### 18. Versionshistorie', '''### Evidenzaudit v1.1 — 2026-08-30

- Reale Sensorik um umgebungsspezifische Betriebsgrenzen für Mars, Titan und Vakuum ergänzt.
- Audio-System im Vakuum auf nicht-luftgetragene Modi begrenzt.
- Titan-Optik/Haze sowie Mars-Staub als reale Sensor-Randbedingungen präzisiert.
- Gehäuse-Temperaturbereich ausdrücklich als fiktive Herstellerangabe [W] markiert.
- Casimir-Drift, Thorium-Mikrozelle, Mantrika, Blackpearl und Vex-Instanzgeschichte unverändert [F]/[W]; NOXIA-Balancing unverändert.''')
save(p, t)

print('updated OTA-TEC-0034/0036/0037 to v1.1')
