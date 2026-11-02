---
id: EXT-ENG-OTA-20260925-CYGNUS-CTV-CANONICALIZATION
status: done
resolved: 2026-10-18
resolution: PR #206
source: KUEPER Engineering
target: OTA
---

# Completion — CYGNUS CTV canonicalization

Resolved by merged PR #206.

Canonical decisions:
- CYGNUS remains the reusable crew/cargo cislunar transporter.
- The historical `85 t dry / 180 t loaded / 75 t propellant / 5.2 km/s` set is no longer treated as a simultaneously valid technical configuration.
- 85 t remains a legacy/design target pending structural and tank closure.
- CYGNUS is a depot-supported reusable ferry operated per major cislunar leg, with destination service/refuelling before return.
- Engineering sizing bounds (~85–100 t dry, up to ~20 t payload, ~180–220 t usable propellant, ~285–340 t loaded, ~4.5–4.9 km/s ideal per fill) remain `[T/OFFEN]`, not frozen world values.
- Southern L2 9:2 NRHO remains the Engineering reference proxy; the exact fictional OTA Gateway orbit remains `[OFFEN]` per OTA-TEC-0087.

Updated canonical documents:
- OTA-TEC-0082-2026-DE v1.9
- OTA-TEC-0025-2050-DE v1.3 / internal v3.3

No NOXIA balancing, fleet counts, ticket prices, traffic volumes or PELICAN values were changed.
