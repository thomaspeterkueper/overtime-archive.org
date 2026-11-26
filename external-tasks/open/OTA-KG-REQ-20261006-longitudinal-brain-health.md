# OTA → KG Request: Longitudinal brain health claims

Origin: OTA-SCI-0103-2026-DE
Date: 2026-10-06
Priority: high
Status: candidate claims for KG review

## Scope

Review the following evidence-bounded claims for possible registration in the KUEPER Knowledge Graph. OTA does not assign canonical KG claim, risk-model or relation IDs.

## Candidate claims

1. **The 2024 Lancet Commission identifies 14 potentially modifiable dementia risk factors across the life course.**
   - New in 2024: high midlife LDL cholesterol and untreated late-life vision loss.
   - The combined approximately 45% estimate is a population-attributable fraction, not an individual prediction.
   - Source: Livingston et al., Lancet 2024, DOI 10.1016/S0140-6736(24)01296-0.

2. **WHO 2026 dementia risk-reduction guidance uses a life-course, integrated and multidomain framework.**
   - Includes healthy behaviours, management of cardiometabolic conditions, environmental exposure reduction and tailored multidomain interventions.
   - Source: WHO 2026, ISBN 978-92-4-012355-7.

3. **Population-attributable fractions must not be encoded as additive individual risk-reduction percentages.**
   - Preserve population, prevalence, overlap, geography and model assumptions.
   - Status: methodological constraint derived from the epidemiological meaning of PAF.

4. **Sleep disturbance is relevant longitudinal evidence but is not one of the Lancet 2024 fourteen factors.**
   - Current meta-analyses show associations with cognitive decline/dementia, with heterogeneity and reverse-causation concerns.
   - A 2026 umbrella review rates much of the certainty as low.
   - Model as supplementary/emerging risk evidence unless a later canonical review changes status.

5. **Speech and voice features are emerging non-invasive digital biomarkers for MCI/Alzheimer classification, not established causal risk factors.**
   - 2025 MCI meta-analysis: moderate classification performance.
   - 2026 AI voice/speech review: promising performance but limited by small/single-center data and insufficient external validation.
   - Do not infer diagnosis or causal prevention effects from a speech score alone.

6. **Cellular-maintenance markers such as autophagic flux are mechanistic/emerging brain-health context, not established dementia-risk scores.**
   - Link to OTA-SCI-0102-2026-DE.
   - Peripheral blood flux must not be treated as equivalent to neuronal flux.

## Modeling recommendations

Represent separately:
- life stage;
- exposure interval and duration;
- population/geography;
- socioeconomic and care-access context;
- epidemiological association;
- intervention evidence;
- mechanistic evidence;
- biomarker evidence;
- functional/cognitive outcome;
- measurement method and uncertainty.

Do not construct an individual "dementia percentage" by summing Lancet PAFs.

## Hinweis 2026-11-15 (Begutachtung nach ECO-ARC-0037/0038)

OTA-SCI-0103-2026-DE zieht nach kueper.com um (`kueper.com/external-tasks/open/EXT-OTA-KUE-20261115-001.md`; OTA-Kürzung `OTA-REQ-20261115-001`). Die Kandidatenclaims sollen danach auf das neue KUE-Dokument als Quelle zeigen. Präzisierungen aus der Begutachtung: Erstautor der J-Neurol-Metaanalyse zu Schlafstörungen ist Zhang J. (nicht Liu Y.); die WHO-Leitlinien 2026 halten die Evidenz für Interventionen bei Sehverlust und Schlaf-Wach-Störungen für unzureichend – das stützt Claim 4 (Schlaf relevant, aber kein Lancet-Faktor und keine WHO-Empfehlung). Prüfbericht: `kueper-ecosystem/reviews/2026-11-15-OTA-SCI-0103-2026-DE.md`.

## Hinweis 2026-11-26 (Realgrundlage in KUE)

Der Umzug ist erfolgt: Realgrundlage der Kandidatenclaims 1–6 ist jetzt `DOC:KUE:KUE-SCI-0220-2026-DE` (kueper.com, `src/content/kue/sci/kue-sci-0220-2026-de.md`). OTA-SCI-0103-2026-DE ist seit v1.1 Brückendokument und verweist dorthin (OTA-REQ-20261115-001, erledigt). Für die KG-Prüfung gelten Quellen und Evidenzgrenzen des KUE-Dokuments; die Primärquellen oben bleiben als Fundstellen stehen. Umsetzung von EXT-KUE-OTA-20261125-001.
