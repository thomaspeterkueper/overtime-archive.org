# OTA → KG Request: Cellular maintenance and autophagy claims

Origin: OTA-SCI-0102-2026-DE
Date: 2026-10-06
Priority: high
Status: candidate claims for KG review

## Scope

Review the following evidence-bounded candidate claims for possible registration in the KUEPER Knowledge Graph. OTA does not assign canonical KG claim or relation IDs.

## Candidate claims

1. **Human autophagic flux is not uniformly reduced by chronological aging.**
   - Evidence: direct functional human flux measurements.
   - Constraint: effects differ by cell type, sex and physiological context.
   - Primary source: Moreno et al., Aging Cell 2026, DOI 10.1111/acel.70734.

2. **Autophagy-related transcription is not a reliable substitute for direct autophagic-flux measurement.**
   - Evidence: paired transcriptomic and functional measurements in human cells.
   - Primary source: Moreno et al. 2026.

3. **Higher autophagic flux is not intrinsically equivalent to better cellular maintenance.**
   - Evidence basis: in adults >70 years, higher PBMC flux was associated with poorer physical function; earlier human blood data also allow a compensatory-stress interpretation.
   - Status: interpretation constrained by human observational evidence, not a universal causal rule.

4. **Moderate dietary protein reduction from 20% to 10% of energy for four weeks, under energy balance, did not increase blood/PBMC autophagic flux in healthy young adults.**
   - Evidence: randomized crossover human trial.
   - Source: Singh et al., Clinical Nutrition 2026, DOI 10.1016/j.clnu.2026.106778.
   - Scope must remain population-, duration-, tissue- and intervention-specific.

5. **Age-related decline in chaperone-mediated autophagy can impair senescent-cell immune clearance in experimental systems.**
   - Evidence: mechanistic cell and mouse data.
   - Source: Sereda et al., Nature Aging 2026, DOI 10.1038/s43587-026-01240-w.
   - Do not promote pharmacological CMA activation to an established human anti-aging intervention.

6. **Mitochondrial oxidative stress, lysosomal function and autophagic/mitophagic flux can form a coupled quality-control axis in human cellular models.**
   - Evidence: primary human fibroblast model carrying APOE4.
   - Source: Niño et al. 2026, DOI 10.1016/j.bbadis.2026.168211.
   - Constraint: cellular model, not clinical efficacy evidence.

## Modeling recommendation

Keep separate nodes/relations for:
- direct functional flux measurements;
- transcript/protein/static-marker proxies;
- cell type and tissue;
- sex and age;
- physiological/clinical context;
- damage/stress load;
- lysosomal capacity;
- intervention exposure;
- animal/mechanistic evidence versus human observational/interventional evidence.

Do not encode a scalar rule such as "more autophagy = healthier". A flux value requires context about cargo/damage load and downstream lysosomal capacity.
