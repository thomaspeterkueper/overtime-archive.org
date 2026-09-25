import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const CHECK_ONLY = process.argv.includes('--check');
const REVIEWED_AT = '2026-09-25T09:39:24+02:00';

const reviews = [
  {
    signature: 'OTA-SCI-0010-2025-DE',
    title: 'VON DER STRATIGRAPHIE ZUR FREQUENZANALYSE',
    epistemicStatus: '["R", "T", "S", "F"]',
    legacyRelations: [],
    promotedRelations: [
      { target: 'OTA-SCI-0009-2025-DE', relation: 'related', evidence: 'explicit-related-section' },
      { target: 'OTA-OBS-0001-2025-DE', relation: 'related', evidence: 'explicit-related-section' },
      { target: 'OTA-FND-0002-2025-DE', relation: 'related', evidence: 'explicit-related-section' },
    ],
    sentinels: ['Wissenschaftliche Übersicht / Methodenhandbuch', 'Gegenwärtig → Prospektiv', '1800–1950', 'Maßbänder', 'N(t) = N₀ · e^(-λt)', '⁴⁰K → ⁴⁰Ar'],
  },
  {
    signature: 'OTA-SCI-0019-2025-DE',
    title: 'DIE FÜNF EPOCHEN DES GEHIRNS',
    epistemicStatus: '["R", "S"]',
    legacyRelations: [],
    promotedRelations: [
      { target: 'OTA-SCI-0018-60000BCE-DE', relation: 'related', evidence: 'explicit-related-section' },
      { target: 'OTA-CUL-0002-60000BCE-DE', relation: 'related', evidence: 'explicit-related-section' },
      { target: 'OTA-BIO-0001-2025-DE', relation: 'related', evidence: 'explicit-related-section' },
    ],
    orphanReplacements: [
      ['œ', 'Ü'],
      ['Ÿ', 'ß'],
      ['—”', '—'],
      ['—“', '—'],
    ],
    forbiddenAfterRepair: ['œ', 'Ÿ', '—”', '—“'],
    sentinels: ['DIE FÜNF EPOCHEN DES GEHIRNS', 'noχ¹ᐃ', 'große Diffusions-MRT-Kohorten', 'weißen Substanz', 'Überproduktion von Synapsen', 'größte Verschiebung', '— T.P.K.'],
  },
  {
    signature: 'OTA-SCI-0023-2025-DE',
    title: 'Schwefel, Quellen und Bewusstsein: Neurotoxikologische und geochemische Grundlagen hydrothermaler Dämpfe',
    epistemicStatus: '["R", "I", "S"]',
    legacyRelations: ['OTA-SCI-0022-2025-DE', 'OTA-SCI-0061-2026-DE'],
    promotedRelations: [
      { target: 'OTA-SCI-0019-2025-DE', relation: 'related', evidence: 'explicit-related-section' },
      { target: 'OTA-BIO-0001-2025-DE', relation: 'related', evidence: 'explicit-related-section' },
    ],
    sentinels: ['hydrothermaler Dämpfe', 'Thomas Peter Küper', 'H₂S', 'SO₂', 'CO₂', 'Ca²⁺', 'noχ¹ᐃ-Philosophie', '— T.P.K.'],
  },
  {
    signature: 'OTA-SCI-0044-2026-DE',
    title: 'Extragalaktische organische Chemie: JWST-Befunde in IRAS 07251-0248',
    epistemicStatus: '["R", "T"]',
    legacyRelations: ['OTA-SCI-0022-2025-DE'],
    promotedRelations: [
      { target: 'OTA-SCI-0035-2026-DE', relation: 'related', evidence: 'explicit-related-section' },
      { target: 'OTA-SCI-0030-2025-DE', relation: 'related', evidence: 'explicit-related-section' },
    ],
    sentinels: ['CH₃', 'außerhalb der Milchstraße', 'z ≈ 0.08', '10¹² L☉', '10⁶ cm⁻³', '3–5 µm', '✓', '2–10×'],
  },
  {
    signature: 'OTA-FND-0013-2026-DE',
    title: 'Resonanzklassifikations-Formalismus (RKF)',
    epistemicStatus: '["S", "T", "W"]',
    legacyRelations: ['OTA-FND-0014-2026-DE'],
    promotedRelations: [
      { target: 'OTA-SCI-0044-2026-DE', relation: 'basis', evidence: 'explicit-basis-label', context: 'Quelle: OTA-SCI-0044-2026-DE' },
      { target: 'OTA-FND-0012-2026-DE', relation: 'basis', evidence: 'explicit-basis-label', context: 'Quelle: OTA-FND-0012-2026-DE' },
    ],
    sentinels: ['Skala × Resonanz × AVI-Kopplung', 'SxRy-Π', 'R₀', 'ε', 'ω', 'φ', 'χ = √(Ori × AVI × Reso × Kran × Ira × Numa)', 'Ψ', 'm³', 'S0–S5'],
  },
];

const cp1252Special = new Map([
  ['€', 0x80], ['‚', 0x82], ['ƒ', 0x83], ['„', 0x84], ['…', 0x85],
  ['†', 0x86], ['‡', 0x87], ['ˆ', 0x88], ['‰', 0x89], ['Š', 0x8a],
  ['‹', 0x8b], ['Œ', 0x8c], ['Ž', 0x8e], ['‘', 0x91], ['’', 0x92],
  ['“', 0x93], ['”', 0x94], ['•', 0x95], ['–', 0x96], ['—', 0x97],
  ['˜', 0x98], ['™', 0x99], ['š', 0x9a], ['›', 0x9b], ['œ', 0x9c],
  ['ž', 0x9e], ['Ÿ', 0x9f],
]);

function byteForMojibakeChar(ch) {
  if (cp1252Special.has(ch)) return cp1252Special.get(ch);
  const cp = ch.codePointAt(0);
  if (cp <= 0x7f) return cp;
  if (cp >= 0x80 && cp <= 0x9f) return cp;
  if (cp >= 0xa0 && cp <= 0xff) return cp;
  return null;
}

function utf8SequenceLength(firstByte) {
  if (firstByte >= 0xc2 && firstByte <= 0xdf) return 2;
  if (firstByte >= 0xe0 && firstByte <= 0xef) return 3;
  if (firstByte >= 0xf0 && firstByte <= 0xf4) return 4;
  return 0;
}

function recoverOnePass(text) {
  const chars = Array.from(text);
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let output = '';
  let repairs = 0;

  for (let i = 0; i < chars.length; i += 1) {
    const firstByte = byteForMojibakeChar(chars[i]);
    const length = firstByte === null ? 0 : utf8SequenceLength(firstByte);
    if (!length || i + length > chars.length) {
      output += chars[i];
      continue;
    }

    const bytes = [firstByte];
    let valid = true;
    for (let j = 1; j < length; j += 1) {
      const byte = byteForMojibakeChar(chars[i + j]);
      if (byte === null || byte < 0x80 || byte > 0xbf) {
        valid = false;
        break;
      }
      bytes.push(byte);
    }

    if (!valid) {
      output += chars[i];
      continue;
    }

    try {
      const decoded = decoder.decode(Uint8Array.from(bytes));
      const original = chars.slice(i, i + length).join('');
      if (decoded !== original && !decoded.includes('�')) {
        output += decoded;
        repairs += 1;
        i += length - 1;
        continue;
      }
    } catch {
      // Preserve source when reverse byte mapping is not valid UTF-8.
    }

    output += chars[i];
  }

  return { text: output, repairs };
}

function recoverMojibake(text, review) {
  let current = text;
  let repairs = 0;
  for (let pass = 0; pass < 3; pass += 1) {
    const result = recoverOnePass(current);
    current = result.text;
    repairs += result.repairs;
    if (result.repairs === 0) break;
  }
  const residual = recoverOnePass(current);
  if (residual.repairs !== 0) throw new Error(`${review.signature}: encoding repair did not converge within three passes`);

  let orphanRepairs = 0;
  for (const [from, to] of review.orphanReplacements || []) {
    const count = current.split(from).length - 1;
    if (count > 0) {
      current = current.split(from).join(to);
      orphanRepairs += count;
    }
  }

  return { text: current, repairs, orphanRepairs };
}

const knownSignatures = new Set(
  fs.readdirSync(DOCS_DIR).map(file => file.replace(/\.(?:md|mdx)$/i, '')),
);

function sameSet(a, b) {
  return a.length === b.length && a.every(value => b.includes(value));
}

function parseInlineRelations(frontmatter) {
  const match = frontmatter.match(/^relatedDocuments:\s*\[([^\n]*)\]\s*$/m);
  if (!match) return null;
  return [...match[1].matchAll(/"([^"]+)"/g)].map(result => result[1]);
}

function relationYaml(review) {
  const lines = ['relatedDocuments:'];
  for (const target of review.legacyRelations) {
    lines.push(`  - target: "${target}"`);
    lines.push('    relation: "related"');
    lines.push('    context: "Bereits in der Legacy-Inline-Liste des Ausgangsdokuments als relatedDocuments hinterlegt; beim Encoding-Pass erhalten."');
  }
  for (const item of review.promotedRelations) {
    lines.push(`  - target: "${item.target}"`);
    lines.push(`    relation: "${item.relation}"`);
    lines.push(`    context: "${item.context || 'Im Dokument ausdrücklich unter den verwandten Dokumenten bzw. Querverweisen aufgeführt.'}"`);
    lines.push('    descriptionStatus: "explicit"');
  }
  return lines.join('\n');
}

function patchMetadata(raw, review) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error(`${review.signature}: missing frontmatter`);
  let fm = match[1];
  let changed = false;

  const expectedTitle = `title: "${review.title}"`;
  if (!fm.includes(expectedTitle)) throw new Error(`${review.signature}: title changed since review; refusing to overwrite`);

  const expectedEpistemic = `epistemicStatus: ${review.epistemicStatus}`;
  if (!fm.includes(expectedEpistemic)) throw new Error(`${review.signature}: epistemicStatus changed since review; refusing to overwrite`);

  const allTargets = [...review.legacyRelations, ...review.promotedRelations.map(item => item.target)];
  const inline = parseInlineRelations(fm);
  if (inline !== null) {
    if (!sameSet(inline, review.legacyRelations)) {
      throw new Error(`${review.signature}: legacy inline relations changed since review; refusing to normalize`);
    }
    const inlineLine = fm.match(/^relatedDocuments:\s*\[[^\n]*\]\s*$/m)?.[0];
    if (!inlineLine) throw new Error(`${review.signature}: inline relation list vanished during normalization`);
    fm = fm.replace(inlineLine, relationYaml(review));
    changed = true;
  } else {
    const relationBlock = fm.match(/^relatedDocuments:\s*\n((?:^[ \t].*(?:\r?\n|$))*)/m);
    if (!relationBlock) throw new Error(`${review.signature}: relatedDocuments is neither reviewed inline list nor normalized block`);
    for (const target of allTargets) {
      if (!relationBlock[0].includes(`target: "${target}"`)) throw new Error(`${review.signature}: normalized relation block missing ${target}`);
    }
    for (const item of review.promotedRelations) {
      const targetPos = relationBlock[0].indexOf(`target: "${item.target}"`);
      const nextTargetPos = relationBlock[0].indexOf('  - target:', targetPos + 1);
      const entry = relationBlock[0].slice(targetPos, nextTargetPos === -1 ? undefined : nextTargetPos);
      if (!entry.includes(`relation: "${item.relation}"`)) throw new Error(`${review.signature}: ${item.target} has wrong relation type`);
    }
  }

  if (!/^updatedAt:/m.test(fm)) {
    const marker = '\nkg:';
    if (!fm.includes(marker)) throw new Error(`${review.signature}: kg block marker not found`);
    fm = fm.replace(marker, `\nupdatedAt: "${REVIEWED_AT}"\nprovenance:\n  reviewedAt: "${REVIEWED_AT}"\n  reviewStatus: "metadata-reviewed"${marker}`);
    changed = true;
  } else if (changed && !fm.includes(`reviewedAt: "${REVIEWED_AT}"`)) {
    throw new Error(`${review.signature}: lifecycle changed since review while repairs are pending; refusing to overwrite`);
  }

  return raw.replace(match[1], fm);
}

function validateReview(review) {
  for (const target of [...review.legacyRelations, ...review.promotedRelations.map(item => item.target)]) {
    if (!knownSignatures.has(target)) throw new Error(`${review.signature}: relation target is not canonical: ${target}`);
  }
}

function validateCandidate(text, review) {
  const required = [
    `title: "${review.title}"`,
    `epistemicStatus: ${review.epistemicStatus}`,
    `reviewedAt: "${REVIEWED_AT}"`,
    ...review.sentinels,
  ];
  for (const marker of required) {
    if (!text.includes(marker)) throw new Error(`${review.signature}: repaired candidate missing sentinel: ${marker}`);
  }
  for (const item of review.promotedRelations) {
    if (!text.includes(`target: "${item.target}"`)) throw new Error(`${review.signature}: canonical relation missing: ${item.target}`);
    const start = text.indexOf(`target: "${item.target}"`);
    const next = text.indexOf('  - target:', start + 1);
    const entry = text.slice(start, next === -1 ? undefined : next);
    if (!entry.includes(`relation: "${item.relation}"`)) throw new Error(`${review.signature}: promoted relation type mismatch for ${item.target}`);
  }
  if (text.includes('�')) throw new Error(`${review.signature}: replacement character remains after repair`);
  for (const forbidden of review.forbiddenAfterRepair || []) {
    if (text.includes(forbidden)) throw new Error(`${review.signature}: orphan mojibake marker remains after repair: ${forbidden}`);
  }
  const residual = recoverOnePass(text);
  if (residual.repairs !== 0) throw new Error(`${review.signature}: ${residual.repairs} recoverable mojibake sequence(s) remain after repair`);
}

let totalRepairs = 0;
let totalOrphanRepairs = 0;
let plannedChanges = 0;
let writtenChanges = 0;

for (const review of reviews) {
  validateReview(review);
  const file = path.join(DOCS_DIR, `${review.signature}.md`);
  if (!fs.existsSync(file)) throw new Error(`${review.signature}: canonical file not found`);

  const raw = fs.readFileSync(file, 'utf8');
  const recovered = recoverMojibake(raw, review);
  const candidate = patchMetadata(recovered.text, review);
  validateCandidate(candidate, review);

  totalRepairs += recovered.repairs;
  totalOrphanRepairs += recovered.orphanRepairs;
  if (candidate === raw) {
    console.log(`Already repaired: ${review.signature}`);
    continue;
  }

  plannedChanges += 1;
  console.log(`${CHECK_ONLY ? 'Validated' : 'Repairing'}: ${review.signature} — ${recovered.repairs} reversible encoding sequence(s), ${recovered.orphanRepairs} reviewed orphan repair(s), ${review.promotedRelations.length} promoted relation(s)`);
  if (!CHECK_ONLY) {
    fs.writeFileSync(file, candidate, 'utf8');
    writtenChanges += 1;
  }
}

console.log(`Encoding batch 3: ${reviews.length} documents, ${totalRepairs} reversible encoding sequence(s), ${totalOrphanRepairs} reviewed orphan repair(s), ${reviews.reduce((sum, review) => sum + review.promotedRelations.length, 0)} promoted relations.`);
console.log(`Planned changes: ${plannedChanges}; written changes: ${writtenChanges}; mode: ${CHECK_ONLY ? 'check' : 'apply'}.`);
