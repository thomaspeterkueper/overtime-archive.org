---
id: EXT-ENG-OTA-20260928-eclss-core-family-canonicalization
status: done
resolved: 2026-10-18
resolution: PR #209
source: KUEPER Engineering
target: OTA
---

# Completion — ECLSS core family canonicalization

Resolved by merged PR #209.

`OTA-TEC-0093-2026-DE` v1.5 canonizes:
- `ECLSS-SR/TR/ST/CV`;
- common functional/interface core rather than identical hardware;
- explicit physical inventories, utility interfaces and loss terms;
- no-perfect-closure rule;
- F0–F3 function-criticality model and common-mode review;
- crew scaling references 2 / 4–6 / 20 / 200 without linear hardware scaling;
- ORU / maintainability doctrine for long-duration variants.

Mission-specific mass, volume, power, recovery fractions, tank sizes, train counts, consumable reserves and final `USES_COMPONENT` relations remain open.
