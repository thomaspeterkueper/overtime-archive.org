---
id: SSF-OTA-REQ-20260830-THARSIS-HUB-EVIDENCE-AUDIT-RESULT
requester: SYS:KUEPER:ssf
target: SYS:KUEPER:ota
priority: high
type: evidence-handoff
created: 2026-08-30
status: open
relates_to: NOX-OTA-REQ-20260830-THARSIS-HUB-PHASE2-OBJECT-DOSSIERS
---

# SSF → OTA: auditierte Evidenz für Tharsis Hub / 497 Personen

Der von NOXIA angeforderte externe Evidenzaudit wurde in SSF abgeschlossen und liegt auf dem SSF-Branch `research/tharsis-evidence-audit-20260830` vor. Nach Merge ist `docs/research/minimum-viable-mars-colony-497.md` v0.2 die SSF-Evidenzbasis; der Detailaudit liegt in `docs/research/tharsis-hub-497-external-evidence-audit.md`.

Bitte diese Rückgabe in Phase 2 berücksichtigen. Sie ersetzt keine OTA-System-/Objektentscheidung.

## Belastbare Übergabe

- Population: 497
- Resilienz: mindestens 30 Tage ohne externen Nachschub
- O₂: SSF-Referenz ~408 kg/Tag; geprüftes Literaturband ~408–418 kg/Tag
- CO₂: konservative SSF-Referenz ~517 kg/Tag; geprüftes Literaturband ~497–517 kg/Tag
- Nahrung: 0,57–0,91 t/Tag; 30-Tage-Vorrat 17–27 t

## Auditierte Korrekturen / Grenzen

### Energie
- NASA Fission Surface Power ist Technologieanker, kein kW/Person-Modell.
- Lineare Hochrechnung kleiner Crew-/FSP-Systeme auf 8–10 MW ist methodisch ungeeignet.
- 3–5 MW Mittel / 5–8 MW Peak bleiben ausschließlich [A]-Startband.
- Phase 2 muss eine Bottom-up-Lastbilanz aus konkreten Anlagen und Betriebszuständen liefern.

### Thermalkontrolle
- Keine universelle Radiatorleistung W/m² und keine pauschale Gesamtfläche übernehmen.
- Fläche je Wärmeniveau aus Temperatur, Emissivität/Absorptivität, Orientierung/Sichtfaktoren, Mars-IR/Solar/Konvektion und Staub bestimmen.
- NASA-Marsstaubtests belegen relevante Degradation; aktive elektrodynamische Staubminderung ist realer Technologiepfad, aber 2026 nur TRL 4.
- Kritische Kühlung redundant/segmentiert und mit Wartungs-/Reinigungskonzept auslegen.

### Habitat
- 25 m³/P ist eine NASA-Deep-Space-Habitat-Designannahme für Mindest-NHV, keine Marsstadt-Norm.
- 80 m³/P war eine Workshop-/Forschungsfrage und kein NASA-Mindestwert; nicht mehr zur direkten Ableitung von 39.760 m³ NHV verwenden.
- Pressurized Volume, Habitable Volume und NHV strikt trennen.
- mehrere isolierbare Druck-/Brand-/Kontaminationsvolumina sind durch Safe-Haven-/Habitatstudien gestützt; keine unbelegte 50–150-Personen-Grenze.
- Segmentgröße aus Hazard-Analyse bestimmen.

### Wasser
- 0,3–0,8 t/Tag bleibt [A]-Nachspeisekapazität für den stark geschlossenen Habitat-/ECLSS-Kern, nicht für die ganze Kolonie.
- Ralphs et al. 2015 ergeben mit breiter Systemgrenze 0,12 kg/h/P = 1,431 t/Tag für 497 Personen; nur als Vergleichs-/Prüfpunkt verwenden.
- Phase 2 muss ECLSS, Pflanzen/Nahrung, Industrie/ISRU, Verluste/Wartung und Chargen/Inventar getrennt bilanzieren.
- externe 385-kg/h-Regolith→7,7-kg/h-Wasser-Angabe nicht als verifiziert übernehmen.
- NASA Water Extraction Rig ist besserer Technologieanker, aber Anlagenzahl bleibt standort-/prozessabhängig.

## Erwartete OTA-Rückgabe

Die bestehenden Phase-2-Anforderungen bleiben bestehen. Insbesondere werden jetzt konkrete Dossiers/Objektgrenzen benötigt, aus denen NOXIA anschließend Startobjekte und Stückzahlen ableiten kann:

1. Energieerzeugung/-verteilung/-speicher und Black Start,
2. Wassergewinnung/-aufbereitung und getrennte Kreisläufe,
3. O₂/CO₂/ECLSS-Prozessstränge,
4. thermische Netze/Radiatoren inklusive Staubmanagement,
5. Habitatcluster, Druck-/Brandsegmente und Safe Haven,
6. kritische Mediennetze und Redundanzdomänen,
7. Werkstatt/Fertigung/Erhaltung,
8. Oberflächenlogistik/Fahrzeugklassen,
9. Sicherheitsabstände und physisch sinnvolle Zusammenlegung bzw. Trennung von Funktionen.

Erst danach soll NOXIA aus den OTA-Objekten das minimale Startlayout ableiten.
