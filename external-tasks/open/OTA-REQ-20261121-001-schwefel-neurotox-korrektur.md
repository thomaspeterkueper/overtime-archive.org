# OTA-REQ-20261121-001 – OTA-SCI-0023-2025-DE (Schwefel, Quellen und Bewusstsein): Quellen und Mechanismus korrigieren, Realteil nach KUE kürzen

Status: open
Datum: 2026-11-21
Quelle: Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038 §2 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-21-OTA-SCI-0023-2025-DE.md`
Zuordnung: Teile nach KUE – die [R]-Blöcke in §I (Geochemie) und §II (Neurotoxikologie H₂S/SO₂, Gasotransmitter) werden per `kueper.com/external-tasks/open/EXT-OTA-KUE-20261121-001.md` zu einem KUE-Dokument. Alle [I]-Blöcke, §III–§IV (Kaia, GANDHAKA, Omega-Schwefel-Modul), die Kuratoranmerkung und KN-5.1 bleiben in OTA.
Voraussetzung: Punkt A sofort umsetzbar. Punkt C erst, wenn das neue KUE-Dokument aus EXT-OTA-KUE-20261121-001 in `kueper.com/main` gemergt ist (Signatur dort vergeben, im Folgenden `KUE-SCI-NNNN`). Punkt B wartet auf Thomas.
Erfasst die Punkte zu OTA-SCI-0023 aus `OTA-REQ-20261106-quellenpruefung.md` (Rumbeiha 2016, Hirsch 2002, Zare Mehrjerdi 2020/2018, Anantharam 2017, Jin 2013).

## Anlass

Der Abgleich mit den Primärquellen am 2026-11-21 ergab fehlerhafte Fundstellen und eine falsch wiedergegebene Mechanismus-Aussage zu Kim et al. 2023 (Abstract und Methoden, PMC10109532):

- Kim et al. untersuchten in vivo eine Exposition mit **1000 ppm** H₂S (Maus, EEG-Unterdrückung); die Schwelle „> 5 ppm Sulfid“ bezieht sich auf die Sulfidkonzentration **in der Zellkultur** (Na₂S, in vitro), nicht auf Atemluft.
- Nicht „H₂S aktiviert TRP-Kanäle, besonders L-Typ-Ca²⁺-Kanäle“ (L-Typ-Kanäle sind keine TRP-Kanäle): Hemmstoffe von L-Typ-spannungsabhängigen Ca²⁺-Kanälen und von TRP-Kanälen **verhinderten** die Unterdrückung synchroner Ca²⁺-Oszillationen; Hemmstoffe von NMDA-/AMPA-Rezeptoren **verstärkten** sie. 2-APB minderte die Unterdrückung der MEA-Aktivität und den Zelltod.
- Seitenzahlen Kim et al.: 247–264 (nicht 247–261); Erstautor Kim, D.-S.

## Gewünschte Änderung

A. **Quellen und [R]-Angaben korrigieren (sofort umsetzbar):**
   1. §2.1 und §VI, Rumbeiha: „Rumbeiha, W., Whitley, E., Anantharam, P., Kim, D.-S. & Kanthasamy, A. (2016). Acute hydrogen sulfide–induced neuropathology and neurological sequelae: challenges for translational neuroprotective research. *Annals of the New York Academy of Sciences* 1378(1), 5–16. PMID 27442775.“ (Zeitschrift und Titel sicher belegt; Band/Seiten am PubMed-Eintrag bestätigen.)
   2. §2.1, §2.3 und §VI, Kim: „Kim, D.-S., Pessah, I. N., Santana, C. M., Purnell, B. S., Li, R., Buchanan, G. F. & Rumbeiha, W. K. (2023). Investigations into hydrogen sulfide-induced suppression of neuronal activity in vivo and calcium dysregulation in vitro. *Toxicological Sciences* 192(2), 247–264. DOI 10.1093/toxsci/kfad022.“
   3. §2.3, Block „Mechanismus“ ersetzen durch:
      - „In Kultur aus kortikalen Neuronen unterdrückt Sulfid (Na₂S) synchrone Ca²⁺-Oszillationen; Hemmstoffe von L-Typ-spannungsabhängigen Ca²⁺-Kanälen und von TRP-Kanälen verhindern das, Hemmstoffe von NMDA-/AMPA-Rezeptoren verstärken es.“
      - „2-APB (u. a. TRP-Kanal-Hemmstoff) mindert die Unterdrückung der Netzwerkaktivität und den Zelltod.“
      Block „Neuronale Netzwerkeffekte“, dritter Punkt ersetzen durch: „Dosisabhängig: Ab etwa 5 ppm Sulfid im Kulturmedium (in vitro) wird die Netzwerkaktivität deutlich unterdrückt; in vivo wurde mit 1000 ppm H₂S in der Atemluft exponiert.“ Der Untertitel „[R] Real — Neue Forschung 2023“ bleibt.
   4. §2.2 und §VI, Hirsch: Die beiden Angaben widersprechen sich (*Hum Exp Toxicol* 21(1) bzw. *Archives of Environmental Health*). Vorschlag: „Hirsch, A. R. (2002). Hydrogen sulfide exposure without loss of consciousness: chronic effects in four cases. *Toxicology and Industrial Health* 18(2), 51–61.“ mit dem Zusatz „(Fundstelle nicht online bestätigt)“, bis der PubMed-Eintrag geprüft ist.
   5. §2.5 und §VI, „Zare Mehrjerdi F, et al. (2020/2018)“ ersetzen durch: „Ghasemi, E., Afkhami Aghda, F., Rezvani, M. E., Shahrokhi Raeini, A., Hafizibarjin, Z. & Zare Mehrjerdi, F. (2020). Effect of endogenous sulfur dioxide on spatial learning and memory and hippocampal damages in the experimental model of chronic cerebral hypoperfusion. *J Basic Clin Physiol Pharmacol* 31(3). DOI 10.1515/jbcpp-2019-0227.“
   6. §VI, Anantharam 2017: Ein Titel „Hydrogen sulfide neurotoxicity mechanisms“ in *Toxicology* ist nicht auffindbar. Ersetzen durch „Anantharam, P. et al. (2017). Characterizing a mouse model for evaluation of countermeasures against hydrogen sulfide-induced neurotoxicity and neurological sequelae. *Ann. N. Y. Acad. Sci.* 1400, 46–64. DOI 10.1111/nyas.13419.“ mit Zusatz „(Fundstelle nicht online bestätigt)“ – oder streichen, da im Text nicht verwendet.
   7. §2.5 und §VI, „Jin HF, et al. (2013) … *Physiol Res* 62(Suppl 1)“: nicht auffindbar. Eintrag streichen; die Aussage „Schlaganfall-Modelle zeigen Verbesserung von Lernen/Gedächtnis nach SO₂-Behandlung“ stützt sich dann auf Ghasemi et al. 2020 (Hypoperfusionsmodell, endogenes SO₂).
   Versionssprung v1.2 (Kopf: „Version 1.2“), Revisionsvermerk „<Datum>: Quellen und Mechanismus-Aussage zu Kim et al. 2023 korrigiert (OTA-REQ-20261121-001 A).“ [I]-Blöcke, §III–§IV und Kuratornotizen bleiben unverändert.

B. **Claude-Status: wartet auf Thomas** – berührt Kuratornotizen bzw. Zusammenfassung mit Werkbezug:
   1. §V Kernaussage 3 „5 ppm H₂S → Angst, kognitive Desorganisation, DMN-Aktivierung“: DMN-Aktivierung ist für Schwefelgase nicht gezeigt (das Dokument sagt selbst in v1.1, sie sei eine Extrapolation). Vorschlag: „5 ppm H₂S → Geruchsbelästigung, leichte Angst- und Konzentrationssymptome [R]; DMN-Aktivierung als Extrapolation [I]“.
   2. KN-5.1 „In niedrigen Dosen: Gasotransmitter, neuroprotektiv, bewusstseinserweiternd“: „bewusstseinserweiternd“ ist durch keine der Quellen gedeckt (Gasotransmitter-Effekte betreffen körpereigene, sehr niedrige Konzentrationen, nicht eingeatmete Dämpfe). Vorschlag: Wort als Setzung kenntlich machen oder streichen – Entscheidung Thomas.
   3. KN-5.1 „H₂S-Spitzen (20–50 ppm) → TRP-Kanal-Aktivierung → Ca²⁺-Dysregulation“: nach Punkt A.3 ist die Kette so nicht belegt (in vivo 1000 ppm; TRP-Hemmung schützt, „Aktivierung“ ist nicht gemessen). Formulierung anpassen oder als [I] kennzeichnen.

C. **Mit KUE-Dokument (ECO-ARC-0038 §3a):** Die [R]-Blöcke in §1.1, §1.2, §2.1, §2.2, §2.3, §2.4 und §2.5 (jeweils Untertitel „[R] Real …“ mit Text und „Quelle:“-Zeilen) entfernen und an den Anfang von §I einen Abschnitt „Realgrundlage (Kurzfassung)“ mit genau diesem Text setzen:
   > [R] Hydrothermale Felder geben neben Wasserdampf vor allem CO₂, H₂S und SO₂ ab; die Zusammensetzung hängt von Tiefe, Temperatur und Oxidationszustand ab, Druckschwankungen erzeugen pulsierende Dampfstöße. H₂S hemmt in hohen Konzentrationen die Cytochrom-c-Oxidase und führt zu histotoxischer Hypoxie bis zur Bewusstlosigkeit; schon wenige ppm verursachen bei gesunden Menschen Geruchsbelästigung und leichte Beschwerden. SO₂ ist vor allem ein Atemwegsreizgas; im Tierversuch schädigt chronische Exposition den Hippocampus. In sehr niedrigen, körpereigenen Konzentrationen wirken beide Stoffe auch als Signalmoleküle (Gasotransmitter). Einzelheiten und Quellen: `DOC:KUE:KUE-SCI-NNNN`.
   Alle [I]-Blöcke („Für GANDHAKA-Szenen“, „[I] Interpretation — …“) bleiben wörtlich an ihrer Stelle unter den bisherigen Zwischenüberschriften. §VI Quellennachweis: die drei [R]-Listen durch „Realgrundlage: `DOC:KUE:KUE-SCI-NNNN`“ ersetzen; „Verwandte OTA-Dokumente“ bleibt. Versionssprung v1.3, Revisionsvermerk „<Datum>: Realteil nach DOC:KUE:KUE-SCI-NNNN ausgelagert (OTA-REQ-20261121-001 C).“ Nicht stärker kennzeichnen als KUE.

## Wirkung

- `kueper.com`: EXT-OTA-KUE-20261121-001 (neues Dokument).
- `OTA-LSC-0002-2026-DE` (Schwefel im Bewusstsein) und `OTA-SCI-0022-2025-DE` verweisen thematisch auf dasselbe Feld; bei ihrer Begutachtung auf denselben KUE-Verweis prüfen.
- `status/ota-kue-zuordnung.md` (kueper-ecosystem): Zeile OTA-SCI-0023 aktualisiert.
