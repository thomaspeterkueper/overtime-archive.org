# Living Infrastructure – OTA-Evidenzprofil und Bestandsindex

**OTA-EVIDENCE-LIVING-INFRASTRUCTURE-2026-11 | Evidenzindex | 27.11.2026**  
**Status:** Arbeitsindex, nicht kanonisch. Er verzeichnet vorhandene Evidenz und Lücken; er setzt keine Aussage als Kanon oder Befund.  
**Request:** [`EXT-ECO-OTA-20261114-001`](../../external-tasks/done/EXT-ECO-OTA-20261114-001.md)  
**Programm:** `kueper-ecosystem/docs/programs/living-infrastructure.md` (Programmregistrierung, ECO); Systemvertrag `kueper-engineering/systems/living-infrastructure-conserved-flow-contract-r1.json` (`ENG-LICF-r1`, ENG); Identitäten `kueper-knowledge-graph/exports/ontology-living-infrastructure-0.1.json` (KG).  
**Review:** manuell; nächste Prüfung spätestens 27.05.2027 oder wenn das Mykologie-Dossier (`EXT-NOXIA-OTA-20260925-mycology-soil-ecopoiesis-dossier`) oder `OTA-SCI-0113` (PR #222) gemergt wird.

## 1. Zweck und Grenzen

OTA ist laut Programmregistrierung für **Evidenz** zuständig: Provenienz, Reifegrad, Unsicherheit und Konsolidierung der Forschung zu den sechs Bausteinen der Living Infrastructure. Dieser Index beantwortet je Baustein: Was ist vorhanden, wo, mit welchem Status und welcher Herkunft – und was ist **nicht gefunden**.

Grenzen:

- Der Index referenziert. Source of Truth bleibt das jeweilige Repository (KUE-Realgrundlagen in `kueper.com`, Identitäten im KG, Flüsse und Verträge in ENG, Geschichte/Kultur in NXU, Spielschleifen in NOXIA).
- Reifegrade beschreiben den **Evidenzstand der Quelle**, nicht die technische Machbarkeit einer Siedlung.
- „Nicht gefunden“ heißt: in den durchsuchten Beständen unter den genannten Begriffen nicht gefunden. Es ist **kein Nachweis**, dass frühere Arbeiten nicht existieren (vgl. Programmregistrierung §6).
- Die epistemische Trennung physische Realität ≠ Beobachtung ≠ Schätzung/Modell ≠ Akteurswissen bleibt erhalten.

## 2. Suchprotokoll (27.11.2026)

Durchsucht wurden die `main`/`master`-Stände vom 27.11.2026 folgender Bestände:

| Bestand | Umfang |
|---|---|
| OTA `src/content/documents/` | 341 kanonische Dokumente (Volltext) |
| OTA `docs/`, `research/`, `external-tasks/` | Volltext |
| `kueper.com` `src/content/kue/` | KUE-Dokumente (Volltext) |
| `kueper-knowledge-graph` | `exports/`, `research/candidates/`, `docs/concepts/` |
| `kueper-engineering` | `systems/`, `docs/research/` |
| `noxia-universe`, `noxiagame` | Worldbuilding, `docs/`, `.kueper/outbox/` |
| Google-Drive-Spiegel | `kueper-ecosystem/status/drive-mirror.json` (Altbestand, nur Titel und Beschreibungen) |

Suchbegriffe (deutsch/englisch, ohne Groß-/Kleinschreibung): Myzel, Mycel(ium), Mykologie, Pilz, fungi/fungal, Mykorrhiza/mycorrhiza, radiotroph, Melanin, Bodenökologie, soil ecology, Substrat, Regolith, ECLSS, Lebenserhaltung, life support, bioregenerativ, MELiSSA, BLSS, Landwirtschaft, agriculture, Hydroponik, Gewächshaus, Kompost, Abfall, Recycling, Abwasser, Ecopoiesis/Ökopoese, Terraforming, Geosphäre/Biosphäre, Kaiserling/Amanita, Tschernobyl/Chernobyl, *Cladosporium sphaerospermum*.

Nicht durchsucht: Drive-Inhalte jenseits des Spiegels, Chatverläufe, private Notizen, nicht migrierte Altbestände.

## 3. Reifegradskala dieses Index

| Stufe | Bedeutung |
|---|---|
| **E3** | Begutachtete Primärliteratur oder Übersichtsarbeiten, in einem geprüften KUE-/KG-Dokument belegt |
| **E2** | Laborbefunde/Simulanten oder Missionsdaten mit Quellen, aber nicht unter Zielbedingungen; oder Dokument im Status „Entwurf“/„Reviewfähig“ ohne abgeschlossene Begutachtung |
| **E1** | Forschungsnotiz, Research Candidate (non-canonical) oder Engineering-Baseline ohne externe Validierung |
| **E0** | Worldbuilding, In-Universe-Setzung oder Spekulation – keine Evidenz für reale Aussagen |

## 4. Bestand je Baustein

### 4.1 Mykologie / Bodenökologie

| Fundstelle | Repo | Status / Herkunft | Reife | Inhalt |
|---|---|---|---|---|
| `exports/claims-mycology-soil-ecopoiesis-0.1.json` | KG | canonical (Claim-Shard), 28.09.2026 | E3 | 3 Claims zu Bodenpilzen, Mykorrhiza und AMF-Bakterien-Kontinuum; Quellen Rillig et al. 2026, Duan et al. 2024, Genre et al. 2020 (Nature Reviews Microbiology) |
| `research/candidates/RES-20261010-5681C221.md` | KG | candidate / non-canonical, Score 0,82, Unsicherheit mittel | E2 (Einzelbefunde) / E1 (Gesamtbild) | Perchlorat im Marsregolith, Pilztoleranz in Brines, Bio-Verwitterung, AMF obligat biotroph, Überleben ≠ Gedeihen, Kontaminationsrisiko |
| `docs/concepts/biologisch-integriertes-bauen-myzel.md` | KG | Konzept-/Mappingakte, kein KG-Datensatz, 23.11.2026 | E1 | Myzel als Bindemittel für pflanzliche Reststoffe |
| `docs/research/MYCO-0001-pilzbasierte-baustoffe-materialkreislaeufe.md` | ENG | Forschungsnotiz / explorativ, nächste Prüfung 10.10.2027 | E1 | Myzelkomposit, Prozessparameter ausdrücklich „zu validieren“ |
| `systems/offworld-soil-ecology-architecture-r1.md` (`ENG-SYS-SOILECO-0001`) und `offworld-soil-ecology-contract-r1.json` | ENG | baseline, 27.09.2026 | E1 | Architektur Off-world-Bodenökologie und kontrollierte Ecopoiesis (Systemvertrag, keine Evidenzquelle) |
| `docs/economy/2026-11-20-myzel-baustoffe-bestandsaufnahme.md` | NOXIA | Bestandsaufnahme/Entscheidungsvorlage | E0 (Spielmodell) | Abbildbarkeit einer Myzel-Prozesskette; Parameter bei ENG angefragt |
| `spaces/baumeister/worldbuilding/naturverbundenes-bauen-myzelsysteme.md` | NXU | Worldbuilding-Hypothese, „kein bestätigter historischer Befund“ | E0 | Myzelbau der Uralten |
| `OTA-SCI-0018-60000BCE-DE` (v1.1, `[R, S, F]`), `OTA-FND-0009-2026-DE` (v1.0, `[R, T, S, F]`), `OTA-CUL-0002-60000BCE-DE` (v1.0) | OTA | kanonisch im Archiv, aber werkbezogen | E0 für Living Infrastructure | Pilz-/Myzel-Biotechnologie der fiktiven Uralten; keine Mars- oder Siedlungsaussage |

**Nicht gefunden:** ein OTA-Dossier zu Mykologie/Bodenökologie unter Siedlungsbedingungen (offen als `EXT-NOXIA-OTA-20260925-mycology-soil-ecopoiesis-dossier`); Belege zu radiotrophen/melaninreichen Pilzen und Strahlungsversuchen außerhalb des KG-Candidates (dort nur Melanin bei *R. similis*); die im Request genannte Kaiserling-Beobachtung (*Amanita caesarea*, Sauerland) – in keinem durchsuchten Bestand.

### 4.2 Geschlossene Lebenserhaltung (ECLSS)

| Fundstelle | Repo | Status / Herkunft | Reife | Inhalt |
|---|---|---|---|---|
| `kue-sci-0172-2026-de` | KUE | Reviewfähig, v0.2; Prüfbericht `kueper-ecosystem/reviews/2026-11-13-KUE-SCI-0172-2026-DE.md` | E2–E3 | Regenerative ECLSS im Raumflug, Stoffkreisläufe, Systemgrenzen |
| `kue-sci-0178-2026-de` | KUE | Reviewfähig, v0.3 | E2–E3 | Kabinenatmosphäre, O₂/CO₂-Grenzen, Notfall-Sauerstoff |
| `kue-sci-0004-2026-de` | KUE | Reviewfähig, v1.1 | E2 | Orbitalmechanik und Life Support für permanente LEO-Präsenz |
| `kue-sci-0208-2026-de` | KUE | Entwurf, v0.1 (18.11.2026) | E2 | Realteil zu `OTA-SCI-0112`: ECLSS, Nahrung, ISRU, Energie, Wartung; bioregenerative Tests (BLSS, MELiSSA, LMLSTP, Biosphere 2), ISS-Pflanzenanlagen (Veggie, APH); APH-Kennwerte und MELiSSA-Kompartimente laut Dokument nicht erneut eingesehen |
| `OTA-SCI-0112-2026-DE` (v1.1, `[R, I, H, OFFEN]`) | OTA | Brückendokument, Realteil nach KUE-SCI-0208 ausgelagert | E1 | NOXIA-Regeln: Game-Physics-Sperren (kein 100-%-Recycling), Kalibrierwerte, Closure-Check |
| `OTA-TEC-0093-2026-DE` (v1.5), `OTA-TEC-0096-2026-DE` (v1.1), `OTA-TEC-0038-2026-DE` (v0.2), `OTA-TEC-0119-2026-DE` (v1.0) | OTA | Objektdossiers `[R, H, F, OFFEN]` | E1 (technische Hypothese) mit E0-Anteilen | Life-Support-Kernmodul, ECLSS-Verbund Tharsis Hub, Mindest-Kolonie, Orbitalhabitat |
| `OTA-TEC-0019-2091-DE`, `OTA-TEC-0025-2050-DE`, `OTA-TEC-0015-2082-DE`, `OTA-META-0005-2026-DE` | OTA | Werkobjekte/Kanon-Audit | E0 | In-Universe-ECLSS von Fahrzeugen und Kolonien |

**Nicht gefunden:** ein eigenes OTA-Dossier zu **bioregenerativen** Systemen; die Realgrundlage liegt in KUE-SCI-0208 (Entwurf), deren offene Prüfpunkte (APH-Kennwerte, MELiSSA-Kompartimente, Biosphere 2) übernommen werden müssen, bevor OTA darauf aufbaut. Zu Lunar Palace kein Treffer.

### 4.3 Landwirtschaft

| Fundstelle | Repo | Status / Herkunft | Reife | Inhalt |
|---|---|---|---|---|
| `kue-sci-0208-2026-de` | KUE | Entwurf, v0.1 | E2 | Nahrung als Teil der Stoffstrombilanz; Crop- und BLSS-Befunde, ISS-Pflanzenanlagen; Ergebnis: gekoppelte biologische und physikalisch-chemische Systeme statt rein biologischer Kreisläufe |
| `kue-sci-0186-2026-de` | KUE | Reviewfähig, v0.2 | E2–E3 | Perchlorate auf dem Mars, Toxikologie, Detoxifikation (Randbedingung für Regolith-Anbau) |
| `RES-20261010-5681C221` | KG | non-canonical | E2 | Keimungs- und Wachstumsversuche in Simulanten (Eichler et al. 2021, Oze et al. 2021), Phosphor als Limit |
| `OTA-SCI-0112-2026-DE` §21.2, §24 „Pflanzen“ | OTA | Brückendokument | E1 | Sperre „Nahrung ohne Lichtenergie“, Kalibrierwerte (nicht als Kanonwerte) |
| `ontology-settlement-biogeochemical-flows-0.1.json` | KG | canonical, 28.09.2026 | – (Identitäten) | Flussmodell und Konzepte für Nährstoffkreisläufe |

**Nicht gefunden:** ein eigenständiges OTA- oder KUE-Dokument zu Pflanzenbau in Habitaten (Hydroponik, Gewächshaus, Lichtbedarf je Fläche, Ertragsdaten aus Analogstationen); KUE-SCI-0208 behandelt das nur als Abschnitt eines Übersichtsdokuments.

### 4.4 Abfall / Recycling

| Fundstelle | Repo | Status / Herkunft | Reife | Inhalt |
|---|---|---|---|---|
| `OTA-TEC-0086-2026-DE` (v1.1) | OTA | Objektdossier `[R, H, F, OFFEN]` | E1 | Wasseraufbereitung, geschlossener Koloniekreislauf |
| `OTA-TEC-0089-2026-DE` (v1.2) | OTA | Objektdossier | E1 | Fertigungszentrum, Material- und Reststoffrückführung |
| `OTA-TEC-0091-2026-DE` (v1.1), `OTA-TEC-0105-2026-DE` (v1.1) | OTA | Objektdossiers | E1 | Versorgungstrassen inkl. Abwasser, redundante Mediennetze |
| `OTA-SCI-0112-2026-DE` §21.1, §21.5 | OTA | Brückendokument | E1 | Sperren „100-%-Recycling“ und „Recycling ohne Reststrom“ |
| `kue-sci-0172-2026-de` | KUE | Reviewfähig | E2–E3 | Wasser-/Luftrückgewinnung und Systemgrenzen |

**Nicht gefunden:** Evidenz zur Kompostierung oder pilzlichen Zersetzung ungenießbarer Pflanzenbiomasse in geschlossenen Systemen außer dem Verweis auf Qiao et al. (2025) im KG-Candidate (dort über Sekundärübersicht, nicht im Original geprüft).

### 4.5 Kopplung an Planetare Evolution

| Fundstelle | Repo | Status / Herkunft | Reife | Inhalt |
|---|---|---|---|---|
| `OTA-SCI-0113-2026-DE` (Geosphäre-Biosphäre-Tiefenzeit) | OTA | **nicht gemergt**, offener PR #222 seit 18.10.2026 | – | Dossier zum Request `EXT-NOXIA-OTA-20260925-geosphere-biosphere-deep-time` |
| `systems/planetary-evolution-coupling-authority-r1.md` | ENG | Systemdokument | E1 | Kopplungsautorität Planetare Evolution |
| `OTA-FND-0013`–`0016`, `OTA-INDEX-RKF-2026-DE` | OTA | RKF-Formalismus `[S, T, W]` bzw. In-Universe | E0 | Geosphäre/Biosphäre im spekulativen Resonanzrahmen – keine Evidenz für Living Infrastructure |

**Nicht gefunden:** ein gemergtes OTA-Evidenzdokument zur Geosphäre-Biosphäre-Kopplung auf Mars oder Erde.

### 4.6 Künftige Ecopoiesis

| Fundstelle | Repo | Status / Herkunft | Reife | Inhalt |
|---|---|---|---|---|
| `RES-20261010-5681C221` | KG | non-canonical | E1 | Sukzession als Netz (Cyanobakterien → Biokruste → Pilze/Mykorrhiza), alle Schritte auf Labor-/Simulantenniveau; Biosicherheit und Planetenschutz als Regelfall-Risiko |
| `ENG-SYS-SOILECO-0001` | ENG | baseline | E1 | kontrollierte Ecopoiesis als Architekturrahmen |
| `OTA-CUL-0014-2152-DE`, `OTA-FND-0013B`, `OTA-FND-0016` | OTA | Fiktion/Spekulation `[F, W]` bzw. `[R, F]` | E0 | In-Universe-Terraforming und Kampagnen |

**Nicht gefunden:** Feld- oder Langzeitbefunde zu Ecopoiesis unter Mars-Bedingungen – nach dem KG-Candidate existieren solche Daten derzeit nicht; dieser Befund ist im Mykologie-Dossier an Primärquellen zu bestätigen.

## 5. Frühere Mars-Pilz-Arbeiten

Die Programmregistrierung warnt, dass Repository-Suchen vom 25.09.2026 nichts fanden. Stand dieser Suche:

- **Gefunden (nach dem 25.09.2026 entstanden):** KG-Candidate `RES-20261010-5681C221` (10.10.2026, aus `noxia-universe/external-tasks/open/EXT-ENG-NXU-20260925-fungi-mars-settlement-ecopoiesis.md`), KG-Claim-Shard (28.09.2026), ENG `MYCO-0001` (10.10.2026), KG-Konzeptakte (23.11.2026), NOXIA-Bestandsaufnahme (20.11.2026).
- **Gefunden, aber nicht Mars-bezogen:** Uralten-Myzeltechnik in OTA (`OTA-SCI-0018`, `OTA-FND-0009`, `OTA-CUL-0002`) und NXU-Worldbuilding.
- **Nicht gefunden:** Mars-Pilz-Material, das **vor** dem 25.09.2026 entstanden ist – weder im OTA-Archiv noch im Drive-Spiegel (dort kein Treffer zu Pilz/Myzel; nur `KUE-AST-0002-2026-DE` mit „Lebenserhaltung, Marskolonisation“ als Drive-Altbestand, Request in `kueper.com`).
- **Möglich, aber nicht prüfbar von hier:** externe Chats, Drive-Ordner außerhalb des Spiegels, anders benannte Altbestände. Thomas kann bei Bedarf Fundorte nennen; bis dahin gilt: **unlokalisiert, nicht abwesend**.

## 6. Querschnittliche Unsicherheiten

1. **Überleben ≠ Gedeihen ≠ Funktion:** Pilztoleranz in Perchlorat-Brines oder unter simulierten Marsbedingungen belegt weder Regolith-Detoxifikation noch Bodenbildung (KG-Candidate §2, §6).
2. **Regolith ist kein Boden:** Jeder Anbau- oder Substratpfad braucht Perchlorat-Entfernung, pH-Korrektur und N/P/Organik-Zufuhr (KUE-SCI-0186; KG-Candidate §3).
3. **Kein geschlossener Kreislauf zu 100 %:** Verluste, Reststrom und Ersatzteile sind Pflicht (OTA-SCI-0112 §21).
4. **Biosicherheit und Planetenschutz** sind Randbedingung, kein Nebenaspekt (KG-Candidate §6).
5. **Sekundär übernommene Angaben** im KG-Candidate (Übersicht Oliveira et al. 2026, darin Qiao et al. 2025 und Bioleaching-Werte) sind vor einer Übernahme in KUE an den Originalen zu prüfen.

## 7. Nächste Schritte (ohne Kanonisierung)

- Das Mykologie-Dossier (`EXT-NOXIA-OTA-20260925-mycology-soil-ecopoiesis-dossier`) baut auf §4.1, §4.6 und §5 auf, statt neu zu suchen.
- `OTA-SCI-0113` (PR #222) nach Review in §4.5 eintragen.
- Realwissenschaftliche Inhalte gehören nach KUE (Foundation-Mining-Regel, `kueper-ecosystem/docs/cross-repository-workflow.md` Beispiel D), nicht in diesen Index.
- Die Verknüpfung dieses Profils in der Programmregistrierung ist bei ECO angefragt (Umschlag `.kueper/outbox/20261127-living-infrastructure-evidenzprofil-an-eco.json`).

## Revisionsverlauf

| Datum | Version | Änderung |
|---|---|---|
| 2026-11-27 | 1.0 | Erstfassung nach `EXT-ECO-OTA-20261114-001` (Ökosystem-Kreislauf, Claude) |
