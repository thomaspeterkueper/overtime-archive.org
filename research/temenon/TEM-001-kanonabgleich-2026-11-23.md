# TEMENON – Kanonabgleich und Integrationsgrundlage

**Stand:** 23. November 2026  
**Status:** Prüf- und Arbeitsdokument, **keine** Änderung am bestehenden Kanon oder Repository.  
**Geltungsbereich:** Baumeister-Universum / Omnizedenz-Saga / OverTime Archive (OTA) / potentielle NOXIA-Umsetzung.

## 1. Quellen und Belegstatus

**A — Technisches Referenzdokument v2.1**, real erstellt Dezember 2025, in-universe datiert 15.12.2180. Vom Nutzer als Text bereitgestellt (`Eingefügter Text(20261123-202548).txt`, 1.177 Zeilen). Enthält 14 Kapitel, historische Chronologie, Artefakthierarchie, Feldtheorie, Geräte, Gesellschaft und Konflikte.

**B — Hayashi-Okonkwo, „Temenon: Eine Theorie der lokalen Eigenzeit-Homogenisierung in variablen Gravitationsfeldern“**, fiktive Erstausgabe 2142, zweite Auflage 2180. Vom Nutzer als Text bereitgestellt (`Eingefügter Text(20261123-202850).txt`, 641 Zeilen). Die Textkopie enthält Zeichenkodierungsartefakte (Mojibake); sie werden hier sinngemäß gelesen, nicht still in den Quelltext zurückgeschrieben.

**C — OTA:** Der Bibliotheksindex nennt die kanonische **OTA-FND-0025-2026-DE „Temenon-Taxonomie“**, außerdem OTA-MON-0002-2142-DE und weitere TEC/SCI-Verweise. Der **vollständige Inhalt dieser OTA-Primärdateien wurde bei diesem Abgleich nicht eingesehen**. Darum sind OTA-Übereinstimmungen noch nicht validiert.

**D — NOXIA:** GitHub-Suche nach „Temenon“, „Kalethrai“ und „OTA-FND-0025“ lieferte keinen nachweisbaren Treffer in den relevanten Nutzer-Repositories. Das ist **kein Beweis für fehlende Implementierung**; die Integrationsstufe bleibt ungeprüft.

## 2. Gesicherte Schnittmenge zwischen A und B (in-universe)

1. **Temenon** bezeichnet ein technisch erzeugtes lokales Feld zur Kopplung biologischer Prozesse an eine Referenzzeit τ_T, nicht zur globalen Änderung der Raumzeitmetrik oder des kosmischen Takts.
2. **β** ist eine technisch wirksame Kopplungsgröße; gewöhnliche Systeme sollen innerhalb 0 ≤ β ≤ 0,999 bleiben; Artefakte vom Typ Lingai können problematische β>1-Phänomene zeigen.
3. **Kalethrai** sind persönliche, dauerhaft verwendete Träger; **Lingai** unberechenbare historische Artefakte. Diese Gegenüberstellung ist in A ausführlicher erklärt.
4. **Nexus-Pod** bezeichnet zeitlich begrenzte therapeutische Anwendung, anders als permanente Kalethrai.
5. **Yuki Hayashi-Okonkwo** formalisiert die Theorie 2142; Schlüsselstationen 2087 (Mars/Axis-Monolith), 2098 (erste Laboranomalie), 2128 (Ona's Tear), 2135 (β-Regler) sind konsistent.
6. Die ethische Konfliktachse umfasst Freiwilligkeit, Abhängigkeit, soziale Zeitklassen, Zwangssynchronisation und den Kalethra-Krieg (2178–2185).

## 3. Widersprüche und offene Entscheidungen

| ID | Befund | Quellen-/Textbezug | Schwere | Empfehlung ohne Kanonänderung |
|---|---|---|---|---|
| T-01 | **FTB-Grenzwerte**: dτ_cell/dτ_T = R̃(a)/(1+β ΔV/c²) ergibt bei β=0 R̃(a), nicht zwingend gewöhnliche gravitative Dilatation; bei β→1 nicht zwingend 1. | A §3.3; B §3.1/A.1 | Kritisch | Zuerst gewünschte beobachtbare Grenzfälle formal definieren; dann eine passende Interpolationsgleichung herleiten und Einheiten prüfen. |
| T-02 | **Vorzeichenproblem in B, Anhang A.1**: (1−x)^−1≈1+x, aber die FTB hat Nenner (1+x) bzw. 1/(1+x). Die angegebene Ableitung trägt die Schlussform nicht. | B A.1 | Kritisch | Ableitung neu aufsetzen; keine stille Formelkorrektur. |
| T-03 | **Dimension der Stabilitätsformel** β_max=1−(ΔV)²/(2c⁴ τ_T²): ΔV²/c⁴ ist dimensionslos; Division durch τ_T² erzeugt 1/s². | A §3.5; B §3.3 | Kritisch | Explizite dimensionslose Normierung τ_T/τ_ref vorsehen oder neue phänomenologische Stabilitätsfunktion definieren. |
| T-04 | **Sättigungsformel** f_cell=f_T(1−ΔV/c²)(1+β)/(1+αβ²) wird in B als Erratum ergänzt, doch β=1 und α=0,2 bedeutet Faktor 1,667, nicht direkt Homogenisierung mit f_T. | B Errata und A.3; A §3.3 | Hoch | Festlegen, ob f_cell Frequenzverhältnis, Oszillatorantwort oder Alterungsrate beschreibt. |
| T-05 | **Primärmechanismus vs. gesellschaftliche Lebensverlängerung:** Homogenisierung schwacher gravitativer Zeitunterschiede allein erklärt nicht jahrhundertelange Lebensdauer oder starke Zellzyklusänderungen. | A §7; B §5 und §6 | Hoch | Zweiten, fiktionalen biologischen Resonanz-/Prozessmodulationsmechanismus getrennt modellieren; nicht als ART-Folge ausgeben. |
| T-06 | **AVI-Langform und Normierung:** A nennt „Axiomatische Vakuum-Interferenz“, B „Accelerated Variable Inflation“; R(a)=60×[...], B normiert zu R̃(a)=R(a)/R₀. | A Metadaten/§3.2; B §2.2 | Hoch | Begriffsgeschichte und Zuordnung zu den eigentlichen AVI-Primärdokumenten klären. R̃ für dimensionslose Rechnungen bevorzugen, vorbehaltlich Freigabe. |
| T-07 | **Editionsparadox:** B ist als zweite Auflage 2180 datiert, sagt aber, sie sei nach Konfliktende 2185 revidiert; B enthält außerdem eine Ethikrats-Gegenstimme 2183. A datiert auf 2180, verarbeitet Ereignisse 2185, 2187 und 2195. | A Dokumentenkontrolle/§7/§8; B Errata/§6 | Kritisch für Chronologie | Reale Dateiversion, in-universe Druckausgabe und spätere editorische Nachträge explizit unterscheiden. Keine rückwirkende Vermischung. |
| T-08 | **Ceres-Protokoll:** 2158 technische Sicherheitsstandards; 2185 politischer Kompromiss zur Freiwilligkeit. A und B nennen beide „Ceres-Protokoll“, teils ohne Zusatz. | A §3/§7/§8; B Anh. C/§6 | Mittel | Eindeutige Bezeichnungen `Ceres-Sicherheitsprotokoll (2158)` und `Ceres-Autonomieabkommen (2185)` als redaktionellen Vorschlag prüfen. |
| T-09 | **Einführung TEM-Gen-II:** A „Standardausrüstung ... ab 2168“; B „seit 2157 Pflichtausstattung ... für alle interplanetaren Schiffe“. | A §5.1; B §6.2 | Hoch | 2157 als regulatorische Pflicht vs. 2168 als tatsächlich flächendeckende Durchsetzung ist mögliche Lösung, muss aber explizit kanonisiert werden. |
| T-10 | **Energiegrenzen:** A nennt etwa 10^-8 J/m³/s Ertrag und zusätzlich 10^4 J/Tag/Einheit; B nennt typisch 10^-8, Grenzwert 10^-7 J/m³/s. Für 500 m³ beträgt 10^-8 J/m³/s nur 5 µW. | A §3.7/§7/§10; B §4/§6/Anh. C | Hoch | Energiequelle vs. Steuerleistung, Harvesting-Rate vs. Sicherheitsquote separat bilanzieren. Kein plausibler Leistungsnachweis aus Casimir-Effekt behaupten. |
| T-11 | **Experimentelle ΔV-Werte:** A nennt Zentrifuge mit 0,001 c², B 10⁶ m²/s²; beides erfordert Erklärung der fiktiven Versuchsanordnung; B räumt ein, dass 30% Zellzyklusänderung nicht aus ΔV/c² folgt. | A §6.3; B §5.1 | Hoch | Experiment in-universe als kontrollierte Resonanzvariation statt reine Schwerkraftsimulation definieren; Gerätefähigkeit und Kontrollen spezifizieren. |
| T-12 | **Irreversibilität:** B nennt Zeit-Narben >1000 h bei β>0,7; neuronale Irreversibilität >72h bei β>0,95. A stellt dauerhafte Kalethrai als Alltagstechnologie und Zeitmeditation als Sicherheitsmaßnahme dar. | A §4/§7; B §3.4 | Hoch | Sichere Langzeitfenster, individuelle Anpassung und klinische Kontraindikationen definieren; nicht implizieren, dass periodische Meditation alle Risiken aufhebt. |
| T-13 | **Chronologie und Behörden:** B nennt Ceres-Ethikrat-Beschluss 2178, Freiwilligkeitsgarantie 2185 und Phobos-Vorfall 2181. Keine unproblematische Einordnung als Bestandteil eines 2180 gedruckten Werkes. | B Frontmatter/§4/§6 | Hoch | Als spätere historisch-kritische Edition markieren oder zweite Auflage nach 2185 datieren. |
| T-14 | **Metadaten:** A bezeichnet Erfinder als „Thomas Peter Kuepur“; bibliographische DOI/ISBN in B sind ausdrücklich fiktional. | A Metadaten; B Titelseite | Niedrig | Autorenname an Projektstammdaten angleichen, aber Originaledition unverändert archivieren. |

## 4. Vorgeschlagene Dokumentenhierarchie

- **Kanonisch, unverändert archiviert:** A und B als historische Primärtexte; Aussagen bekommen Provenienz (Dokument, Kapitel, in-universe Auflage und Kenntnisstand).
- **OTA – Ontologie/Taxonomie:** Begriffshierarchie Temenon / Proto-Temenon / Kalethrai / Lingai und Artefakt-Zuordnung. Primärtext `OTA-FND-0025-2026-DE` noch direkt prüfen.
- **Technischer Kanon (künftige Ergänzung):** Normierte Parameter, mathematische Modelle, Meßsysteme, Zustandsübergänge, Sicherheitsgrenzen und Testfälle mit klaren Versionsständen.
- **In-universe Wissensstand:** 2142 (Forschung), 2158 (Sicherheit), 2180 (Publikation), 2185 (Autonomie) und spätere editorische Nachträge strikt trennen.
- **NOXIA:** Ableitung in Daten-/Simulationsmodell erst nach Repository-Abgleich; keine vorweg behauptete Implementierung.

## 5. Minimaler NOXIA-Vertragsentwurf (noch keine Implementierung)

**Entitäten:** `TemenonField`, `TemporalReference`, `TemenonSource`, `Artifact` (Subtype `Kalethra`, `Lingai`, `Proto`), `Exposure`, `FieldBoundary`, `Calibration`, `SafetyEvent`, `CanonicalSource`.

**Feldzustand:** räumlicher Wirkbereich, Quelle, Referenztakt, β-Soll/Ist, Gradient, Phasenrauschen, Energieversorgung, Stabilitätsstatus, Aktivierungszeit, Unsicherheit und Provenienz.

**Agenten/Zielsysteme:** organische und künstliche Träger dürfen unterschiedliche Kopplungsantworten haben; biologische Effekte nicht ohne eigenes dokumentiertes Modell aus β ableiten.

**Sicherheitslogik:** Überlappende Quellen und Feldkanten, β-Drift und abruptes Abschalten als Ereignisse; persistente Expositionshistorie; Anomalien als versionierte Simulationseffekte.

**Teststrategie:** (i) β=0 Baseline; (ii) β-Zielwechsel und Randgradient; (iii) zwei kollidierende Felder; (iv) Langzeitexposition und Hysterese; (v) Notabschaltung; (vi) Quellenprovenienz und zeitliche Gültigkeit.

**Abgrenzung:** Dies ist ein Vorschlag für eine **fiktionale Simulation**. Die technischen Effekte und Gleichungen sind nicht durch reale Wissenschaft belegt. Vor Implementierung existierende NOXIA-Feld-/Status-/NPC-/Zeitmodelle suchen und wiederverwenden; keine zweite parallele Systemarchitektur anlegen.

## 6. Priorisierte nächste Aktionen

1. OTA-Originale `OTA-FND-0025-2026-DE`, `OTA-MON-0002-2142-DE`, einschlägige TEC-/SCI-Dokumente lesen und ihre Kanon-Status/Versionsdaten vergleichen.
2. Chronologie- und Editionsfrage lösen, einschließlich 2180/2185 und nachträglicher Ereignisse.
3. FTB und β-Stabilitätsformel als überprüfbares, **dimensionskonsistentes fiktionales** Modell vorschlagen, historische Formeln dabei sichtbar erhalten.
4. Energie-, Zellalterungs- und Langzeitsicherheitsmechanismen voneinander separieren.
5. Relevante NOXIA-Repos/Branches identifizieren und bestehende Simulations-/NPC-/Artefaktmodelle prüfen; erst danach Integrations-PR planen.

**Dieser Abgleich trifft noch keine Kanonentscheidung und schreibt nichts in OTA, GitHub oder NOXIA.**

## 6. Nachtrag: OTA-MON-0002 Editionskonflikt (Information aus anderem Nutzerchat, 23.11.2026)

**Belegstatus:** Die folgenden Metadaten wurden vom Nutzer aus einem anderen Chat übermittelt; eine vollständige direkte Sichtung von `OTA-MON-0002-2142-DE` liegt in dieser Arbeitsfassung nicht vor. Das GitHub-Repository `thomaspeterkueper/overtime-archive.org` ist als verbundenes Repository identifiziert, seine Code-Suche ist aber derzeit nicht indexiert. Keine Änderungen am OTA vorgenommen.

- Nach Nutzerangabe liegt `OTA-MON-0002-2142-DE` seit 07.07.2026 als v1.0, ENTWURF, [R]/[F] im OTA; ca. 30 Referenzdokumente, darunter `OTA-SCI-0084-2163-EN`, `OTA-SCI-0085-2164-EN` und `OTA-TEC-0023-2089-DE`.
- OTA-Fassung: Ceres University Press, 247 Seiten, 2.000 Exemplare; Kapitel I–VIII, Anhänge A, E, F; Widmung an Amara Okonkwo († 2189); Druckfehler auf Seite 110 (`β_min`).
- Neue Monographie: Luna-Hochdruckverlag, 347 Seiten, 2.400 Exemplare; Kapitel 1–6, Anhänge A–D; zusätzliche technische und historische Detailangaben.
- **Kanonpolitik:** Die OTA-v1.0 als unveränderliche Ausgangsversion erhalten; die neue v2.1 als Edition-Kandidat/Variante mit eigener Provenienz und sauber repariertem UTF-8 ablegen. Erst nach vollständigem inhaltlichen Delta und Prüfung eingehender Referenzen den Hauptdatensatz ersetzen oder versioniert auf v2.1 anheben.
- **Chronologie-Sperre:** Eine 2180 erschienene zweite Auflage kann weder eine Widmung für eine 2189 verstorbene Person noch einen Konfliktabschluss von 2185 als zeitgenössischen Text enthalten. Lösung durch klar datierte spätere kommentierte Auflage/Editorennachträge, nicht durch stilles Umdeuten.
- **Kühlungsfrage OTA-SCI-0122:** Die 4,2-K-Kühlanforderung des supraleitenden Niob-Titan-Gitters ist belegt in der zugelieferten Monographie. Magnetokalorische Kühlung als plausible *Forschungsoption* markieren, jedoch weder Leistungsfähigkeit bei 4,2 K noch Systemintegration ohne Kältebudget festschreiben.

### Geordnete Freigabeschritte

1. Existierenden OTA-MON-0002-Volltext und Metadaten direkt lesen.
2. Unterschiede satzweise kategorisieren: Erweiterung, Bibliographie/Edition, Retcon, naturwissenschaftlich-mathematische Inkonsistenz.
3. Umlaute in der importierten Fassung kontrolliert mit Originaltextvergleich korrigieren, Quellrohtext unverändert halten.
4. Verweise und Annahmen der abhängigen SCI/TEC/FND-Dokumente prüfen, insbesondere `OTA-SCI-0084-2163-EN`, `OTA-SCI-0085-2164-EN`, `OTA-SCI-0121`, `OTA-SCI-0122`, `OTA-TEC-0023-2089-DE` und `OTA-FND-0025-2026-DE` (Signaturen nicht abkürzen; `OTA-SCI-0084-2026-DE` ist der andere Text zu kryoporösen Eiswelt-Oberflächen).
5. Separaten Revisionseintrag erstellen; Änderungen nach Review zur Kanon-Freigabe vorschlagen.
6. NOXIA-Schnittstellen erst nach Abgleich mit vorhandenen Implementierungen präzisieren.


## Review-Nachtrag: konkretisierte Gate-G1-Kontrollen (23.11.2026)

Die aus dem anderen OTA-Chat übermittelten Prüfergebnisse werden als **Review-Befunde** aufgenommen, noch nicht als vollständig selbst verifizierter Repo-Stand:

1. `OTA-MON-0002-2142-DE` (v1.0) weist selbst einen Vorwort-Anachronismus auf: Auflage 2180, Ende des Kalethra-Krieges 2185; die Widmung nennt Amara Okonkwo (†2189). Die neue Monographie v2.1 hat ebenfalls ein 2180/2185-Problem.
2. Formale Prüfung bestätigt die unpassenden Grenzwerte der historischen FTB, die inkonsistente Vorzeichenumformung und die dimensionswidrige `β_max`-Formel; diese Aussagen werden nicht still in den historischen Texten ersetzt.
3. Die Phasenkopplung `sin(φ_T−θ_i)` erlaubt in einem einfachen Modell Phasenverriegelung für `|Δω|≤K`; bloße Frequenzmischung nicht.
4. `OTA-SCI-0084-2163-EN` (*Microbiome-Temenon Paradox*) und `OTA-SCI-0085-2164-EN` sind die zu prüfenden Temenon-Arbeiten. `OTA-SCI-0084-2026-DE` handelt dagegen von kryoporösen Oberflächen auf Eiswelten. Magnetokalorik: `OTA-SCI-0121` und `OTA-SCI-0122`.
5. Das neue Tiefenmodell und die Felder `beta_command`/`beta_eff` sind noch nicht als Repo-Implementierung nachgewiesen und bleiben Entwurf.

**G1-Abnahme:** erst nach dokumentierter Primärquellen-Sichtung, vollständigem Versions-/Editionsvergleich und Prüfung der referenzierenden Dokumente.