# OTA Foundation Matcher

Updated: 2026-07-08

`tools/ota_foundation_matcher.py` helps OTA curators find possible KUE foundation documents for OTA science documents.

The tool is advisory. It does not modify OTA documents and does not write to `kueper.com`.

## Purpose

OTA follows the two-archive model:

- OTA may reference KUE foundations.
- KUE does not reference OTA.
- Missing KUE foundations must become External Tasks for `kueper.com`.

## Result states

The matcher produces one of four statuses per OTA document:

- `MATCH` — one plausible KUE foundation was found.
- `MULTIPLE` — several candidates have the same score; curator review required.
- `MISSING_FOUNDATION` — no useful candidate found; create a Foundation Request for `kueper.com`.
- `NO_MATCH` — weak signal; review manually.

## KUE index format

The tool expects a JSON file with existing KUE documents.

Example:

```json
{
  "documents": [
    {
      "id": "KUE-SCI-0064",
      "title": "Das Hautmikrobiom",
      "summary": "Systemcharakter, Störbarkeit und Reversibilität des Hautmikrobioms",
      "keywords": "Hautmikrobiom Triclosan antimikrobiell Barrierefunktion",
      "kd": ["KD:BIO-BASIC:N2", "KD:BIO-EVOL:N1"]
    }
  ]
}
```

## Usage

```bash
python tools/ota_foundation_matcher.py --kue-index data/kue-foundations.index.json content --output reports/ota-foundation-matches.md
```

For selected files:

```bash
python tools/ota_foundation_matcher.py --kue-index data/kue-foundations.index.json content/OTA-SCI-0058.md
```

## Curator rule

A reported `MATCH` is not an automatic decision. The curator confirms whether the KUE document is genuinely the scientific foundation.

If no KUE document exists, do not create it in OTA. Create an External Task for `kueper.com`.
