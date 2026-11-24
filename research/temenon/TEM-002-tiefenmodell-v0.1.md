# TEMENON – Physikalisch-biologisches Tiefenmodell v0.1

**Datum:** 2026-11-23  
**Status:** Hypothesen- und Revisionsentwurf, **nicht kanonisiert**  
**Anwendungsräume:** Baumeister-Universum, OverTime Archive, NOXIA  
**Quellen:** Technisches Referenzdokument v2.1 (Dezember 2025, 1176 Zeilen); Hayashi-Okonkwo-Monographie (2142/2180, 640 Zeilen); vorheriger Kanonabgleich.

## A. Methodische Trennung

1. **Bestätigte reale Physik:** Eigenzeit der Raumzeitmetrik, gravitative Zeitdilatation, reale biologische Oszillatoren und zirkadiane Entrainment-Phänomene.
2. **Fiktionale Temenon-Hypothese:** Extern stabilisierte Phasenreferenz kann biologische Oszillatoren selektiv koppeln. Keine Veränderung der ART-Metrik oder der kosmischen AVI-Referenz nötig.
3. **Weitere fiktive Hypothese:** Kopplung beeinflusst zusätzlich biologische Schadens-, Reparatur- und Regenerationsprozesse. Diese Ebene folgt nicht automatisch aus gravitativer Zeitdilatation.
4. **Nicht gesicherte Artefakteigenschaften:** Lingai, beta>1, Zeitstürme, Erinnerungspersistenz, Casimir-Harvesting in der beschriebenen Form.

## B. Zwei Zeitbegriffe

- `tau_GR`: tatsächliche Eigenzeit entlang einer Weltlinie; durch die Raumzeitmetrik bestimmt. In diesem Modell unverändert.
- `theta_i`: dimensionslose Phase des biologischen Oszillators i; ihre Ableitung ist eine Phasenrate [rad/s]. Bei Bedarf kann `theta_i/omega_i,0` als effektiver biologischer Phasenzeitstand definiert werden.
- `tau_T`: technisch konstruierte lokale Referenzzeit des TEM-Generators (keine absolute globale Zeit).

Feldstärke und biologische Antwort dürfen nicht mit Eigenzeit gleichgesetzt werden.

## C. Minimaler phänomenologischer Ansatz

Für 0 <= beta_i <= 1:

d(theta_i)/dt = (1 - beta_i) * omega_i,local + beta_i * omega_i,ref

Grenzen: beta_i=0 lokale Oszillation; beta_i=1 Referenz-Phasenrate. **Achtung:** Gleichheit der Frequenz allein garantiert keine Phasenverriegelung. Für echte Synchronisation ist eine Phasenkopplung erforderlich, z.B.:

d(theta_i)/dt = omega_i,local + K_i * sin(phi_T - theta_i)

mit dimensionsrichtigem K_i [rad/s] und phi_T als normierter Referenzphase. Bei |omega_i,local - omega_T| <= K_i kann ein stabiler phasengekoppelter Zustand entstehen (einfaches Ein-Oszillator-Modell); bei komplexen biologischen Netzen sind zusätzliche Wechselwirkungen nötig.

**Kanonentscheidung offen:** Soll beta die Kopplungsrate, ein normalisierter Ordnungsparameter oder die empirisch gemessene Synchronisationsgüte bezeichnen? Diese Rollen sind nicht austauschbar. Vorschlag: `beta_command` für Reglerstellung, `beta_eff` für gemessene Antwort, `coherence` für Synchronisation.

## D. Von Synchronisation zu Alterung

Lebensdauer folgt nicht direkt aus beta. Eigenständiger fiktiver Zustandsvektor je Organismus:

- `damage` D >= 0 (akkumulierte Schädigung)
- `repair_capacity` R >= 0 (Reparatur)
- `bio_age` A >= 0 (funktionales biologisches Alter)
- `phase_coherence` C in [0,1]
- `exposure_dose` H = integral beta_eff * dt
- `hysteresis_state` M (langsamer Gedächtnisparameter)

Vorschlag einer illustrativen, nicht kanonischen Dynamik:

  dD/dt = production(stress, environment) - repair(R, C, energy), mit D >= 0
  dA/dt = base_aging_rate * g(D, R, C, M)

Die Form von g ist durch die bisherigen Texte **nicht** vorgegeben; sie muss anhand der in-universe Klinikergebnisse separat parametrisiert werden. Langlebigkeit ist dadurch ein Modellresultat, keine implizite Wirkung von GR-Korrektur.

## E. FTB-Audit

Dokument-FTB: d(tau_cell)/d(tau_T) = R_tilde(a)/(1 + beta*DeltaV/c^2).

- beta=0 ergibt R_tilde(a), nicht allgemein den beschriebenen GR-Normalfall.
- beta=1 ergibt R_tilde(a)/(1+DeltaV/c^2), nicht allgemein 1.
- B Anhang A.1 benutzt zwei nicht kompatible Vorzeichenumformungen.
- Eine physikalische Zell-Eigenzeit ist keine frei abstimmbare unabhängige Uhr, wenn sie als GR-Eigenzeit gemeint ist.
- Die oben vorgeschlagene `theta_i`-Variable ist bewusst ein **anderer** Begriff; die alte FTB nicht still ersetzen.

## F. Stabilität und Messung

Die Originalform beta_max = 1 - (DeltaV)^2/(2*c^4*tau_T^2) ist wegen [1/s^2] in der Subtraktion dimensionswidrig. Bevor ein Ersatz festgelegt wird, sind normierte Messparameter nötig:

- x = |DeltaV|/c^2 (dimensionslos)
- h = tau_exposure/tau_ref (dimensionslos)
- n = noise/noise_ref (dimensionslos)
- g = field_gradient/gradient_ref (dimensionslos)

Ein künftiger Stabilitäts-Envelope beta_max = F(x,h,n,g,material_state) soll mit Sicherheitsdaten validiert werden; die Funktion F wird **nicht erfunden**, solange die OTA-Quelle keine Kennlinie liefert.

## G. Quantitativer Energie-Audit

Quellenwert 10^-8 J/(m^3*s):

- 100 m^3 Feldvolumen -> 10^-6 W = 1 Mikrowatt.
- 500 m^3 -> 5*10^-6 W = 5 Mikrowatt.
- Die alternative Obergrenze 10^-7 J/(m^3*s) ergibt bei 500 m^3 nur 50 Mikrowatt.
- Ein zusätzliches Limit von 10^4 J/Tag/Einheit beschreibt eine **andere** Schranke; die Zahlen dürfen nicht vermengt werden.

Diese Größenordnungen tragen ohne gesonderte Energiequelle weder ein 4,2-K-Kühlsystem noch einen leistungsfähigen Generator. Vorschlag: klassische/fiktive externe Versorgung für Generator und Kühlung; Vakuum-Harvesting als begrenztes Feld-Biasing oder gesondert zu untersuchende Zusatzfunktion. Dies ist **keine** reale technisch bestätigte Energienutzung aus Casimir-Fluktuationen.

## H. Technischer Gerätebaum

TEM-Gen-II (Quellenbestand): Referenztakt, gravimetrisches Sensorsystem, beta-Regelung, supraleitendes chirales Metamaterialgitter, Casimir-Harvester, dreifache Sicherheitsredundanz.

Zu klärende Schnittstellen:

1. Referenztakt -> phasenstabile Feldanregung.
2. `beta_command` -> `beta_eff` mit Modell von Drift, Rauschen, Verzögerung und Individueneffekten.
3. Gittertemperatur 4,2 K -> thermisches Budget mit Wärmelast, Kältewirkungsgrad, Fehlermodi.
4. Sensoren für biologische Kohärenz -> kontingente, unsichere Schätzung; Rückwirkung bei hohen beta-Werten.
5. Sicherheitscontroller -> Abschaltstrategie mit kontrolliertem Ramp-down statt unbedingter harter Abschaltung; bestehende Dokumente nennen zugleich kritische schnelle beta-Verluste.

## I. Kanon- und Chronologiefragen

- OTA-MON-0002 Archiv-v1.0 ist nach Nutzerinformation ENTWURF; angelieferte Monographie v2.1 ist **nicht** automatisch gleiche Edition.
- In-universe 2180er Druckauflage kann kein Ende eines Kriegs 2185 und keine Todeswidmung für 2189 kennen.
- Technisches Ceres-Protokoll 2158 und politischer Kompromiss 2185 auseinanderhalten.
- 2157 Pflicht zur Ausstattung vs. 2168 Standardausstattung kann Pflicht/Erfüllung unterscheiden, aber nur nach Quellenabgleich kanonisieren.
- K-1 Laborbehauptung 30% Zellzyklusvariation bei beta 0,7 folgt nicht aus DeltaV/c², sondern erfordert die zweite biologische Wirkungsebene.
- Diskrepanz Dauer-Kalethrai vs. irreversible Effekte bei beta>0,95 über 72h offen lassen.

## J. Simulationsvertragsentwurf für NOXIA (keine Code-Änderung)

Die Entitäten sollen **an vorhandene NOXIA-Modelle angeschlossen** werden, nicht neue parallele Zeit- und NPC-Systeme erzeugen:

`TemporalReference`, `ResonanceField`, `FieldSource`, `FieldSample`, `BiologicalOscillator`, `BiologicalResponse`, `ExposureHistory`, `SafetyEvent`, `CanonicalCitation`.

Minimaler Tick:

1. Weltzeit und `tau_GR` aus vorhandener WorldClock/Physik lesen.
2. Quellen und Distanzprofile für Feldstärken und Phasen berechnen.
3. Felder überlagern, Unsicherheiten und Gradienten erfassen.
4. Biologische Oszillatoren integrieren (phase + Kopplung).
5. Organismuszustand (Reparatur/Schäden/Alterungsmarker) separat integrieren.
6. Sicherheitsregeln, Zustandsereignisse und Persistenz schreiben.
7. Jede parametrische Annahme mit Provenienz und Versions-ID speichern.

### Verifikation (erste zehn Tests)

T01: beta=0 reproduziert unveränderten Baseline-Oszillator.  
T02: beta_eff=1 bei stabiler Referenz lockt an Referenzphase (nur im phasengekoppelten Ansatz).  
T03: Änderungen in der Raumzeitmetrik beeinflussen tau_GR, Temenon verändert diese Metrik nicht.  
T04: Kein Effekt auf biologische Alterung allein durch beta ohne explizite biologische Antwortfunktion.  
T05: Feldüberlappung erzeugt nachvollziehbare konstruktive/destruktive Muster.  
T06: Grenzflächen erzeugen modellierte Gradienten und exponierte Randzonen.  
T07: Hysterese bewahrt Vorgeschichte nach gradueller Rückregelung.  
T08: Notabschaltung vs. kontrolliertes Ramp-down führt zu unterschiedlichen Sicherheitsereignissen.  
T09: Zeitlicher Kanon-Filter zeigt 2142 keine Ereignisse aus 2185/2189.  
T10: Energie- und Kältebudget weist eine Unterdeckung aus, wenn allein Casimir-Harvesting verwendet wird.

## K. Freigabe-Gates

**G1 (präzisiert 23.11.2026)** Vollständige Originale und Versionsstände von `OTA-MON-0002-2142-DE`, `OTA-FND-0025-2026-DE`, `OTA-SCI-0084-2163-EN` (*Microbiome-Temenon Paradox*), `OTA-SCI-0085-2164-EN`, `OTA-SCI-0121`, `OTA-SCI-0122` (Magnetokalorik) und `OTA-TEC-0023-2089-DE` lesen. **Nicht verwechseln:** `OTA-SCI-0084-2026-DE` behandelt kryoporöse Oberflächen auf Eiswelten und ist nicht der Temenon-Beleg. Vollständige Signaturen sind Pflicht. G1 ist noch nicht abgeschlossen.  
**G2** Begriffe und FTB-Revisionsentwurf im OTA als neue Variante, nicht als Ersatz ablegen.  
**G3** biologisches Dynamikmodell + Sicherheits- und Energiebilanz parametrisieren.  
**G4** vorhandene NOXIA-Zeit-, Status-, NPC- und Datenbankmodelle gegenlesen.  
**G5** nur dann gezielte Implementation + Test-PR ohne parallele Subsysteme.

**Keine Repository-, Datenbank- oder Kanonänderung mit Erstellung dieses Arbeitsdokuments.**


## Review-Nachtrag 23.11.2026 (Hinweise aus OTA-Abgleich)

- **Implementierung:** Dieses Tiefenmodell ist ein neuer Forschungsentwurf. Die Begriffe `Tiefenmodell`, `beta_command` und `beta_eff` wurden laut externem OTA-Repo-Abgleich nicht gefunden. Daher nicht als bestehender Code oder Kanon behandeln.
- **Editionschronologie / T09:** Auch das archivierte MON-0002-v1.0 enthält bereits den Anachronismus: Vorwort 2180 mit Kenntnis des Kriegsendes 2185; Widmung an Amara Okonkwo (†2189). Der Fehler liegt in beiden Editionen. Solange keine später datierte editorische Schicht dokumentiert ist, bleibt die 2180-Ausgabe chronologisch inkonsistent.
- **FTB und Stabilität:** Nullkopplung und Vollkopplung werden durch die historische FTB nicht getroffen; in Anhang A.1 ist die Vorzeichenumformung unvereinbar; die historische Stabilitätsformel ist nicht dimensionsrein. Änderungen ausschließlich als *neue Modellrevision*, keine stillen Korrekturen der Primärquelle.
- **Phasenkopplung:** Eine additive Frequenzinterpolation allein garantiert keine Phasenverriegelung. Für `dθ/dt=ω+K sin(φ_T−θ)` mit konstantem Referenztakt gilt die einfache Lock-Bedingung `|ω−ω_T|≤|K|`; Stabilität und Rauschen sind zusätzlich zu prüfen.
- **Kühlung:** `10^-8 J/(m³ s)` bedeutet bei 100 m³ `1 µW`; 4,2-K-Kühlung braucht eine separate Energieversorgung. Magnetokalorik in `OTA-SCI-0121` und `OTA-SCI-0122` ist eine offene konstruktive Option, nicht eine bereits validierte 4,2-K-Lösung.