---
signature: "OTA-SCI-0048-NACHTRAG-2026-DE"
title: "OTA-SCI-0048-NACHTRAG-2026-DE"
series: "SCI"
seriesNumber: 48
year: 2026
language: "DE"
version: "v1.0"
status: "AKTIV"
accessLevel: 0
epistemicStatus: ["R", "T", "S", "F"]
tags: ["Lambda-Haplogruppe", "FSS", "UPE", "LHON", "Differentialdiagnose", "Pharmakologie", "Nachtrag"]
relatedDocuments: ["OTA-SCI-0048-2031-DE", "OTA-LSC-0004-2026-DE"]
summary: "Drei Ergänzungsmodule zu OTA-SCI-0048: UPE-FSS-Detektionsprotokoll, LHON/FSS-Differentialdiagnose, Zweiter-Schlag-Pharmakologie. Reale medizinische Grundlagen mit Lambda-FSS-Anwendung."
kg:
  schema: KXF-0.2
  master: kueper-knowledge-graph
  documentId: "OTA-SCI-0048-NACHTRAG-2026-DE"
  graphId: "DOC:OTA:OTA-SCI-0048-NACHTRAG-2026-DE"
  system: SYS:OTA:overtimearchive
  sourceOfTruth: false
knowledge:
  domains:
    - id: "KD:PHYS-THERM:N1"
      level: "N1"
      purpose: read
---

**OVERTIME ARCHIVE**

Scientific Document Series · Nachtrag

**OTA-SCI-0048-NACHTRAG-2026-DE**

**Λ-HAPLOGRUPPE: DREI ERGÄNZUNGSMODULE**

UPE-FSS-Detektionsprotokoll · LHON/FSS-Differentialdiagnose · Zweiter-Schlag-Pharmakologie

Nachtrag zu OTA-SCI-0048-2031-DE

---

| **Feld**           | **Inhalt**                                                                                       |
|--------------------|--------------------------------------------------------------------------------------------------|
| Dokument-ID        | OTA-SCI-0048-NACHTRAG-2026-DE                                                                   |
| Version            | v1.0                                                                                             |
| Erstellt           | 2026-02-28                                                                                       |
| Kategorie          | SCI — Scientific Document Series · Nachtrag                                                     |
| Ergänzt            | OTA-SCI-0048-2031-DE (Λ-Haplogruppe: Klinische Kodierung 2031)                                 |
| Epistemologie      | Modul A: [R→T→S] · Modul B: [R] LHON + [S→F] FSS · Modul C: [R] LHON + [T→S] FSS-Übertragung |
| Voraussetzungen    | OTA-SCI-0048 · OTA-LSC-0003 · OTA-TEC-0032                                                     |

---

> **[KURATORISCHE VORBEMERKUNG]**
>
> OTA-SCI-0048 hat das EIQM-Bulletin 2031 kuratorisch eingebettet und das FSS/DS-Staging
> als kanonisch etabliert. Drei Lücken blieben offen:
>
> (1) Das UPE-Detektionsprotokoll war in OTA-SCI-0048 als Werkzeug erwähnt, aber
> nie mit konkreten Parametern spezifiziert. OTA-LSC-0003 hat die biophysikalischen
> Grundlagen, OTA-TEC-0032 die Geräte für 2091 — aber die FSS-spezifische Metrologie
> für 2031 fehlte.
>
> (2) LHON wurde als genetischer Anker für die Λ-Sequenz-Platzierung benannt,
> aber nie differentialdiagnostisch abgegrenzt. Der EIQM-Arzt 2031 muss wissen,
> was FSS von LHON unterscheidet — das Archiv muss das ebenso wissen.
>
> (3) Die Medikamenteninteraktionen im Λ-System fehlten vollständig. Der
> Sulthiame-LHON-Fall von 2021 ist echter publizierter Befund und der eleganteste
> real-wissenschaftliche Anker für das "Zweiter-Schlag"-Prinzip im Λ-System.
>
> Alle drei Module werden hier als Nachträge zu OTA-SCI-0048 archiviert.
>
> — T.P.K., Kurator OTA, 2026-02-28

---

## MODUL A: UPE-FSS-DETEKTIONSPROTOKOLL [R→T→S]

*Biophysikalischer Marker: von der Messtechnik zur FSS-Signatur*

---

### A.1 Realweltlicher Sockel [R]

Ultra-schwache Photonenemission ist heute mit gekühlten EMCCD-/ICCD-Kameras
oder Photomultipliern in abgeschirmten Setups messbar — als Ganzkörper- oder
Kopfscanning mit anatomisch reproduzierbaren Verteilungsmustern. Brain-UPE/pEEG-
Protokolle zeigen, dass Gehirn-UPE spektral und entropisch vom Hintergrund
unterscheidbar ist, auf Stimulation reagiert und mit EEG-Rhythmen korreliert.

**Realweltliche Basisparameter [R]:**

| Parameter | Normwert (Literatur) | Messtechnik |
|-----------|---------------------|-------------|
| Gesamtintensität Kopf | ~200–800 Photonen/s·cm² | EMCCD, abgedunkelter Raum |
| Kopfanteil an Körper-UPE | ~28–32% | Anatomische Verteilungsstudie |
| Spektrale FWHM | ~60–80 nm (450–650 nm Band) | Breitband-Filter |
| Photon-Count-Entropie (Ruhe) | 0,85–0,92 (normiert) | Zeitreihenanalyse |

### A.2 FSS-spezifische UPE-Signatur [T→S]

Λ-Mitochondrien (reduziertes ROS-Profil, erhöhte ETC-Kohärenz) erzeugen ein
messbares UPE-Muster, das sich von der Normpopulation durch Kombination aus
Intensität, räumlichem Muster und spektraler Entropie unterscheidet — nicht
durch einen einzelnen Parameter allein.

**FSS-Staging durch UPE-Parameter [T→S]:**

| Parameter | FSS-0/I | FSS-II | FSS-III | FSS-IV |
|-----------|---------|--------|---------|--------|
| Kopfanteil an Körper-UPE | 30–33% | 35–38% | 42–47% | >48% |
| Spektrale FWHM (Kopf) | Norm (60–80 nm) | 45–60 nm | 20–35 nm | <20 nm |
| Photon-Count-Entropie (Ruhe) | Norm | leicht reduziert | 0,55–0,70 | <0,55 |
| Entropie-Shift bei 422,8 Hz-Provokation | <0,05 | 0,05–0,12 | 0,15–0,30 | >0,30 |
| Kohärenzlänge UPE-Emission | ~310 nm (Norm) | 400–550 nm | 650–900 nm | >900 nm |

> **[KN-A.1] Kuratorische Notiz: χ-Frequenz-Ankerpunkt [F↔T]**
>
> Die Provokationsfrequenz 422,8 Hz (440 Hz × 0,961 = χ-Justierung) ist im
> UPE-Protokoll kein Zufall — sie ist universumsinterner Konsistenz-Engineering.
> Das EIQM wählt diese Frequenz, weil sie in der RESONANZ-Studie die stärkste
> reproduzierbare Differenz zwischen Λ und Nicht-Λ zeigte. Das Warum kennen
> die EIQM-Forscher 2031 noch nicht. Das Archiv weiß es: χ-Parameter.
> Das ist die eleganteste Verschränkung zwischen dem Frequenz-System des OTA
> und dem klinischen Protokoll.
>
> — T.P.K.

### A.3 Praktisches Detektionsprotokoll für 2031 [S/F]

```
SCHRITT 1: BASELINE-UPE-SCAN (15 min)
  Setup:     Dunkler Raum · EMCCD-Kopf-Scan · Wellenlängenfenster 450–650 nm
  Messen:    Gesamtintensität · Kopfanteil (%) · Spektrale FWHM · Entropie

SCHRITT 2: PROVOKATIONSTEST (20 min)
  Protokoll: Ruhe (5 min) → 422,8 Hz-Exposition (10 min) → Erholung (5 min)
  Messen:    Entropie-Shift · Kohärenz-Änderung · Zeitkonstante der Normalisierung

SCHRITT 3: INTEGRATIVE KLASSIFIKATION
  FSS-0/I:   Leichte Abweichungen in Kohärenz/Spektrum, keine klare Task-Response
  FSS-II:    Deutliche, intermittierende UPE-Änderungen nur unter Provokation
  FSS-III:   Stabiler, reproduzierbarer Fingerprint (Kopfdominanz, klare Entropie-Signatur)
  FSS-IV:    Kopfanteil >48%, Kohärenzlänge >900 nm, möglicherweise messbare EM-Emission
```

**Kuratorische Klarstellung: UPE ist Begleitmarker, nicht Primärdiagnose [F]**

FSS wird primär über Λ-piRNA + mtDNA + Klinik definiert (OTA-SCI-0048, Stufen 1–3).
UPE liefert die optische "Resonanzspur" — zeigt, wie stark und wie geordnet das
mitochondriale System schwingt. Es ist der biophysikalische Fingerabdruck,
der die Diagnose stützt und in der narrativen Praxis oft das Erste ist,
was ein Arzt sieht, bevor er die molekulare Bestätigung hat.

---

## MODUL B: LHON vs. FSS — DIFFERENTIALDIAGNOSE [R + S/F]

*Zwei verschiedene Wege, wie mtDNA und Komplex I in Erscheinung treten können*

---

> **[KN-B.0] Kuratorische Vorbemerkung: Warum diese Differentialdiagnose existiert**
>
> OTA-SCI-0048 hat die Λ-Varianten m.11778G>A und m.13708G>A als echte LHON-assoziierte
> Sequenzpositionen markiert. Das war bewusstes Verankerungsengineering. Die Konsequenz:
> Ein EIQM-Arzt 2031 — und ein Leser des Archivs — muss in der Lage sein zu erklären,
> warum Λ-FSS nicht LHON ist, obwohl sie auf denselben mtDNA-Positionen sitzen.
> Die Antwort liegt im Phänotyp: LHON zerstört, FSS amplifiziert. Beide starten
> an Komplex I. Sie gehen in entgegengesetzte Richtungen.
>
> — T.P.K.

### B.1 Pathophysiologischer Kernunterschied [R + T]

| Dimension | LHON [R] | FSS / Λ-System [T→S] |
|-----------|----------|---------------------|
| Grundprinzip | Defektmutation → Energieverlust | Fein-Haplogruppe → Resonanz-Feintuning |
| Komplex-I-Wirkung | Dysfunktion: ATP-Mangel + ROS-Stress ↑↑ | Modulation: ROS ↓22%, Tunneling +18% |
| Phänotypische Richtung | **Verlustfunktion** → Degeneration | **Gain-Phänomen** → Überempfindlichkeit |
| Zielgewebe | Retinale Ganglienzellen, Nervus opticus | Systemisch: neuronale Schwellen, mitochondriale Kohärenz |
| Endpunkt unbehandelt | Erblindung | DS-Grad IV (reversibel bei Intervention) |

### B.2 Klinische Differentialdiagnostik [R + F]

| Merkmal | LHON | FSS |
|---------|------|-----|
| **Leitsymptom** | Subakuter, schmerzloser Visusverlust (erst ein Auge, dann bilateral) | Frequenz-Hypersensitivität, neurovegetative Symptome — **kein** progressiver Visusverlust |
| **Zeitverlauf** | Asymptomatisch → Subakut (<6 Mo.) → Chronisch | FSS-I→II→III langsam über Jahre; episodische DS-Krisen |
| **Ophthalmologischer Befund** | Papillenbefund pathologisch, Zentralskotom, Rot-Grün-Störung, OCT auffällig | **Standard-Augenbefund unauffällig** (außer bei Zufallskoinzidenz Λ + echte LHON-Mutation) |
| **Geschlechtspenetranz** | Männer 40–50%, Frauen 10–15% | Frauen häufiger manifest (12,3% vs. 4,1% männliche Λ-Träger, RESONANZ-Studie) |
| **Diagnostik** | Ophthalmoskopie, OCT, VEP, Gesichtsfeld, mtDNA-Test (ND1/4/6-Primärmutationen) | Λ-piRNA-Panel, mtDNA-Λ-Signatur (andere Varianten-Kombination), UPE, Neurofrequenz-Provokation |
| **Therapeutisches Ziel** | Sehnerv schützen, Visusverlust verlangsamen | Mitochondriale Resonanz stabilisieren, Überempfindlichkeit regulieren |
| **Primäre Pharmakotherapie** | Idebenon (zugelassen), CoQ10 | Mg²⁺ i.v., CoQ10, NAC bei DS-Grad II+ |

### B.3 Koinzidenz-Szenario [T→S]

Es sind Figuren denkbar, bei denen Λ-FSS und eine echte LHON-Mutation zusammentreffen.
Das wäre klinisch das komplexeste Bild: Frequenz-Amplifikation (Λ) plus fokaler
Optikusschaden (LHON) — zwei verschiedene Ebenen derselben mtDNA-Topologie,
die sich gegenseitig beeinflussen. Kuratorischer Status: Slot offen, kein
bestehender Charakterkanon.

---

## MODUL C: ZWEITER-SCHLAG-PHARMAKOLOGIE [R + T→S]

*Medikamente, die auf feinkalibrierten Λ-Mitochondrien unverhältnismäßig wirken*

---

> **[KN-C.0] Das Zweiter-Schlag-Prinzip [R→T]**
>
> Ein "zweiter Schlag" auf kompromittierte Mitochondrien ist klinisch dokumentiert:
> Substanzen, die auf normale Mitochondrien kaum wirken, können in einem bereits
> feinbalancierten oder defekten ETC-System ein kritisches Energiegleichgewicht kippen.
> Der beste realweltliche Beleg: Sulthiame bei LHON (2021, publiziert).
> Das Archiv überträgt dieses Prinzip auf das Λ-System: Nicht alle Λ-Träger
> sind gleich vulnerabel, aber FSS-III+-Träger mit vorbelastetem Frequenzmilieu
> reagieren auf dieselben Substanzen empfindlicher als Norm-Population.
>
> — T.P.K.

### C.1 Sulthiame-LHON: Der Anker [R]

2021 wurden zwei Kinder (8 und 11 Jahre) mit fokaler Epilepsie beschrieben,
die kurz nach Beginn von Sulthiame (STM) einen akuten Visusverlust entwickelten.
In beiden Fällen lag eine LHON-Mutation vor. In-vitro: STM reduzierte die
Sauerstoffverbrauchsrate in LHON-Fibroblasten drastisch, in Kontrollfibroblasten
kaum messbar. Das ist der mechanistische Beweis für selektive Mito-Toxizität
bei vorbelasteten Mitochondrien.

**Epistemologie: [R] — publizierter klinischer Befund, peer-reviewed.**

### C.2 Substanzkategorien mit Λ-Relevanz [R für LHON / T→S für FSS-Übertragung]

| Kategorie | Substanzen (Auswahl) | LHON-Status [R] | FSS-Λ-Relevanz [T→S] |
|-----------|---------------------|-----------------|----------------------|
| **Antiepileptika** | Sulthiame, Valproinsäure | Dokumentierter LHON-Trigger | DS-Risiko-Verstärker bei FSS-III+ |
| **Antibiotika (mito-toxisch)** | Ethambutol, Linezolid, Chloramphenicol | LHON-Manifestions-Trigger | Können Λ-ETC-Kohärenz destabilisieren |
| **Komplex-I-Inhibitoren** | Amiodaron, Metformin, Rosiglitazon, Haloperidol | Komplex-I-Hemmung dokumentiert | FSS: Tunneling-Profil-Störung theoretisch |
| **Komplex-III/IV/V** | Tamoxifen, Chlorpromazin | Atmungsketten-Hemmung | Sekundäre Kohärenz-Destabilisierung |
| **Entkoppler** | Diclofenac, Fluoxetin, Propofol | OXPHOS-Entkopplung | Protonengradient-Störung = ETC-Resonanzverlust |
| **NRTI-Antiretrovirale** | Stavudin, Didanosin (alt) | mtDNA-Depletion | Bei Λ: irreversibler Sequenzschaden theoretisch möglich |
| **Anthrazykline** | Doxorubicin, Epirubicin | Membran + mtDNA-Schaden | Höchste Λ-Vulnerabilität — nur bei vital indizierter Therapie |

> **[KN-C.1] Narrative Konsequenz für EIQM 2031 [F]**
>
> Im EIQM-Setting (OTA-SCI-0048) gibt es ab 2031 eine Kontraindikationsliste
> für Λ-FSS-III+-Träger. Haloperidol ist bei akuter DS-Eskalation doppelt
> problematisch: als Komplex-I-Inhibitor verstärkt es genau den Mechanismus,
> den es beruhigen soll. Diese Falle — Psychiatrie behandelt Symptom,
> verschlimmert Ursache — ist ein narrativ nutzbarer Fehler in der
> institutionellen Praxis, bevor das EIQM 2028–2031 den Standard setzt.
>
> — T.P.K.

### C.3 Protektive Substanzen [R]

Dieselbe realweltliche Evidenz benennt Schutzsubstanzen: CoQ10 und Riboflavin
(Komplex-I-Bypass und Elektronentransfer-Stabilisierung), Vitamin B12 und
Folsäure (mitochondriale Ein-Kohlenstoff-Metabolismus), Magnesium (ETC-
Komplex-I-Stabilisierung, klinisch validiert). Alle sind bereits im EIQM-
Akutprotokoll (OTA-SCI-0048, Abschnitt 5.2) enthalten. Der Nachtrag
bestätigt ihre [R]-Basis.

---

## QUERVERWEISE

| Dokument | Verbindung |
|----------|------------|
| OTA-SCI-0048-2031-DE | Primärdokument: EIQM-Bulletin, FSS-Staging, DS-Grading |
| OTA-LSC-0003-2026-DE | UPE-Grundlagen: Biophysik, Messtechnik, realweltliche Evidenz |
| OTA-TEC-0032-2091-DE | UPE-Geräte 2091: Lichthelm, Redox-Atlas — Weiterentwicklung des hier beschriebenen Protokolls |
| OTA-SCI-0045-2026-DE | Λ-Grundlagendokument: Drei-Schichten-Modell |
| OTA-BIO-0020-2026-DE | Zhì Án: ASD-Profil — FSS-III mit erhöhtem Kopfanteil-UPE klinisch konsistent |

---

| **Version** | **Datum**   | **Beschreibung** | **Autor** |
|-------------|-------------|------------------|-----------|
| v1.0 | 2026-02-28 | Erstfassung. Drei Module: UPE-FSS-Protokoll mit Parametertabelle, LHON/FSS-Differentialdiagnose, Zweiter-Schlag-Pharmakologie mit Sulthiame-Anker [R]. | T.P.Küper / OTA-Kurator |

---

OTA-SCI-0048-NACHTRAG-2026-DE — Ende des Dokuments

**■ LHON zerstört. FSS amplifiziert. Beide starten an Komplex I. ■**

Overtime Archive · Kurator: T.P.Küper · overtimearchive.org · CC BY-NC 4.0
