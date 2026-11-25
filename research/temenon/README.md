# TEM – Forschungsregister / Research Index
Stand: 2026-11-24 · Status: **Arbeitsfassungen / nicht-kanonisch**

## Identität und Regeln
- `TEM-###` ist die stabile, **repoübergreifende Forschungskennung** für Temenon-Arbeiten. Keine OTA-Signatur, keine automatische Tech-/Product-Freigabe.
- OTA-MON-0002, OTA-SCI-0084-2163-EN, OTA-SCI-0085-2164-EN und OTA-SCI-0121/0122 sind eigenständige Archivsignaturen; niemals aus `TEM-###` ableiten oder umbenennen.
- Versionsgeschichte und Widersprüche erhalten; keine stillschweigende Überschreibung historischer Editionen.
- OTA owns archival research copies; noχ¹ᐃ owns executable simulation/Runtime; KG owns shared knowledge records. Reviews/external tasks statt cross-repository direkten Änderungen.
- **Forschung ist nicht Kanon.** Alle experimentellen Temenon-Modelle beschreiben eine fiktive Wechselwirkung; Tests sind Simulationsverifikation, keine reale Physik.

## Forschungsdossiers (GitHub-Branch `research/temenon-tem-dossiers-20261124`)
| Kennung | Thema | Drive |
|---|---|---|
| TEM-001 | Kanonabgleich, FTB-Audit, Editionsanomalien | https://docs.google.com/document/d/1VTCXuIm96ydaTUOr8WWqDgVKWb5lusSyJV1gwESWibU/edit |
| TEM-002 | Physikalisch-biologisches Tiefenmodell v0.1 | https://docs.google.com/document/d/1EmpoF_ty5G4iKayo61IAOLJG1mdIrZfT4EtK5PC7g6I/edit |
| TEM-003 | Materialforschung v0.2 | https://docs.google.com/document/d/1t8c1g1tmDcRNKt-vHaiqBPFcSNVSS5_HVT8v-8Rgulc/edit |
| TEM-025 | Resonanz-Feldsensor, isolierter Prototyp | https://docs.google.com/document/d/1ewRWHTZaIa_iJV9P-5rhSBqVMLORruuZQnTtagCaj2o/edit |
| TEM-026 | Blindmessung / Forschungsfortsetzung | https://docs.google.com/document/d/1J5hLsngfHb8BZO6hCdGlcSgo8-0n3cXxM9h1QhN4x1s/edit |
| TEM-027 | Scheinkorrelation bei gemeinsamem Zeitgeber | https://docs.google.com/document/d/1tp-ZgJO6n4FvUFLS0h9YDSnQdn2jGh5ijNtAqIZqABo/edit |
| TEM-028 | Zweikanal-Intervention, gemeinsame Störursachen | https://docs.google.com/document/d/13rcUZ5AMTaYFqZ2CiyyE60x9VYgS_Djt1oJNekGwlsY/edit |

Drive-Sammelordner: https://drive.google.com/drive/folders/1NTHoNwJboWQiDur6BDoGp-VtEEoxA-Zm

## Code und Testreferenzen
- noχ¹ᐃ Draft-PR #921: https://github.com/thomaspeterkueper/noxiagame/pull/921 — tatsächlicher TEM-026 Schätzer und Tests + TEM-027 Forschungsnotiz.
- noχ¹ᐃ Issue #920: https://github.com/thomaspeterkueper/noxiagame/issues/920 — Temenon-Institut, Wissenschaftler-/Erfinder-/Techniker-NPCs, TEM-025 Spezifikation und Produkt-Pipeline.
- TEM-025-Quellcode und Tests sind auf NOXIA-Forschungsbranch PR #921 gesichert.
- TEM-SIM-v0.1-Quellcode ist als eigenständiger Forschungsprototyp auf NOXIA PR #921 gesichert. Die vollständigen ZIP-Snapshots von TEM-025, TEM-SIM-v0.1 und TEM-028 liegen im Drive-Sammelordner.
- TEM-028 Code und Tests liegen auf NOXIA PR #921; lokale Testserie: 13/13 bestanden, 400 Fälle über vier synthetische Klassen, darunter 100/100 falsche positive bei gekoppeltem Störmechanismus.
- Keine Fertigungs- oder Live-Freigabe, keine DB-Migration.

## Schutz vor Doppellungen
- Bestehende OTA-Monographie und Word-Referenzen in Drive nicht duplizieren oder ersetzen.
- Bestehende Arbeiten `OTA-SCI-0084-2163-EN`, `OTA-SCI-0085-2164-EN`, `OTA-SCI-0121`, `OTA-SCI-0122` nur referenzieren.
- TEM-001/002/003 sind **neue Registerkennungen für bestehende November-Entwürfe**, keine rückdatierte offizielle OTA-Klassifikation.

## Offene Arbeit
1. Die gebackupten Quellcodes und ZIPs in PR #921 auf Build- und Review-Kompatibilität prüfen.
2. OTA-Originalfassungen/FTB- und Editionsfehler G1 vollumfänglich abgleichen.
3. TEM-029: verblindete Mehrgeräte-Interventionen, Sham-Kontrollen und unabhängig variierte gemeinsame Störursachen.
4. NOXIA Core G0: Inventar/Prototypherstellung/Forschung/NPC-Rollen/Autorität und Persistenz integrieren, erst danach produktives Gerät.
