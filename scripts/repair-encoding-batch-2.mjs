import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const CHECK_ONLY = process.argv.includes('--check');
const REVIEWED_AT = '2026-09-25T09:31:12+02:00';

const reviews = [
  {
    signature: 'OTA-SCI-0030-2090-DE',
    title: 'Λ_Struktur und Gold-Geometrie: Korngrenzenkontrollierte χ-Feld-Kopplung',
    epistemicStatus: '["R", "T", "S", "F"]',
    legacyRelations: ['OTA-SCI-0030-2025-DE'],
    explicitRelations: [],
    sentinels: ['Λ_Struktur', 'χ-Feld-Kopplung', 'γ_eff', '± 0.08', 'Λ_max ≈ 2.0–2.5', '§1. Einleitung', '√2-Abstände'],
  },
  {
    signature: 'OTA-CUL-0013-MULTI-DE',
    title: 'Emotionale Lexika — Mars vs. Erde — Unbeschreibliche Sehnsucht über planetare Grenzen hinweg',
    epistemicStatus: '["F", "W"]',
    legacyRelations: [],
    explicitRelations: [],
    sentinels: ['Mars vs. Erde — Unbeschreibliche Sehnsucht', '2065–2091 CE', 'Erde → Mars', 'noχ¹ᐃ-Universum', 'GEFÜHLE', 'Übersetzung'],
  },
  {
    signature: 'OTA-INDEX-RKF-2026-DE',
    title: 'Resonanzklassifikations-Formalismus (RKF) — Vollständiger Dokumentationsindex',
    epistemicStatus: '["W"]',
    legacyRelations: ['OTA-FND-0012-2026-DE', 'OTA-FND-0013-2026-DE', 'OTA-FND-0014-2026-DE', 'OTA-FND-0015-2026-DE'],
    explicitRelations: [],
    sentinels: ['Übersicht', '└──', '↓', 'CH₃', 'ζ_H₂', '×', 'Π-BIO-Addendum', 'Ψ'],
  },
  {
    signature: 'OTA-SCI-0032-2024-DE',
    title: 'GJ 251 c — Die kosmische Nachbarin in der habitablen Zone',
    epistemicStatus: '["R", "T", "S"]',
    legacyRelations: ['OTA-SCI-0031-2024-DE', 'OTA-SCI-0030-2025-DE'],
    explicitRelations: ['OTA-SCI-0019-2025-DE', 'OTA-RED-0012-2171-DE'],
    sentinels: ['existiert – zumindest', 'M☉', 'M⊕', '≈', 'bloßem Auge', '→', 'Äußere Grenze'],
  },
  {
    signature: 'OTA-FND-0013B-2026-DE',
    title: 'Π-BIO-Addendum: Bioenergetische Fenster — SOL-HELIO-01 Kampagne: Europa, Enceladus, Titan',
    epistemicStatus: '["R", "F"]',
    legacyRelations: ['OTA-FND-0013-2026-DE', 'OTA-FND-0013A-2026-DE', 'OTA-FND-0014-2026-DE'],
    explicitRelations: [],
    sentinels: ['Π-BIO-Addendum', 'Φ-Messungen', 'Ψ_growth-Szenarien', 'D→E-Übergang', '10¹⁴ W', '0.2 W/m²', 'η_chem'],
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
      // Preserve the original sequence when it is not valid reversible UTF-8.
    }

    output += chars[i];
  }

  return { text: output, repairs };
}

function recoverMojibake(text) {
  let current = text;
  let repairs = 0;
  for (let pass = 0; pass < 3; pass += 1) {
    const result = recoverOnePass(current);
    current = result.text;
    repairs += result.repairs;
    if (result.repairs === 0) break;
  }
  const residual = recoverOnePass(current);
  if (residual.repairs !== 0) throw new Error('Encoding repair did not converge within three passes');
  return { text: current, repairs };
}

const knownSignatures = new Set(
  fs.readdirSync(DOCS_DIR).map(file => file.replace(/\.(?:md|mdx)$/i, '')),
);

function sameSet(a, b) {
  return a.length === b.length && a.every(value => b.includes(value));
}

function relationYaml(review) {
  const all = [...review.legacyRelations, ...review.explicitRelations];
  if (!all.length) return 'relatedDocuments: []';

  const lines = ['relatedDocuments:'];
  for (const target of review.legacyRelations) {
    lines.push(`  - target: "${target}"`);
    lines.push('    relation: "related"');
    lines.push('    context: "Bereits in der Legacy-Inline-Liste des Ausgangsdokuments als relatedDocuments hinterlegt; beim Encoding-Pass erhalten."');
  }
  for (const target of review.explicitRelations) {
    lines.push(`  - target: "${target}"`);
    lines.push('    relation: "related"');
    lines.push('    context: "Im Dokument ausdrücklich unter den verwandten Dokumenten bzw. Querverweisen aufgeführt."');
    lines.push('    descriptionStatus: "explicit"');
  }
  return lines.join('\n');
}

function parseInlineRelations(frontmatter) {
  const match = frontmatter.match(/^relatedDocuments:\s*\[([^\n]*)\]\s*$/m);
  if (!match) return null;
  return [...match[1].matchAll(/"([^"]+)"/g)].map(result => result[1]);
}

function patchMetadata(raw, review) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error(`${review.signature}: missing frontmatter`);
  let fm = match[1];
  let changed = false;

  const genericTitle = `title: "${review.signature}"`;
  const canonicalTitle = `title: "${review.title}"`;
  if (fm.includes(genericTitle)) {
    fm = fm.replace(genericTitle, canonicalTitle);
    changed = true;
  } else if (!fm.includes(canonicalTitle)) {
    throw new Error(`${review.signature}: unexpected title state`);
  }

  const expectedEpistemic = `epistemicStatus: ${review.epistemicStatus}`;
  if (!fm.includes(expectedEpistemic)) {
    throw new Error(`${review.signature}: epistemicStatus changed since review; refusing to overwrite`);
  }

  const allRelations = [...review.legacyRelations, ...review.explicitRelations];
  const inline = parseInlineRelations(fm);
  if (inline !== null) {
    if (!sameSet(inline, review.legacyRelations)) {
      throw new Error(`${review.signature}: legacy inline relations changed since review; refusing to normalize`);
    }
    const inlineLine = fm.match(/^relatedDocuments:\s*\[[^\n]*\]\s*$/m)?.[0];
    if (!inlineLine) throw new Error(`${review.signature}: inline relation list vanished during normalization`);
    const desired = relationYaml(review);
    if (inlineLine !== desired) {
      fm = fm.replace(inlineLine, desired);
      changed = true;
    }
  } else if (allRelations.length) {
    const relationBlock = fm.match(/^relatedDocuments:\s*\n((?:^[ \t].*(?:\r?\n|$))*)/m);
    if (!relationBlock) throw new Error(`${review.signature}: relatedDocuments is neither reviewed inline list nor normalized block`);
    for (const target of allRelations) {
      if (!relationBlock[0].includes(`target: "${target}"`)) {
        throw new Error(`${review.signature}: normalized relation block missing ${target}`);
      }
    }
  } else if (!/^relatedDocuments:\s*\[\]\s*$/m.test(fm)) {
    throw new Error(`${review.signature}: expected empty relatedDocuments list`);
  }

  if (!/^updatedAt:/m.test(fm)) {
    const marker = '\nkg:';
    if (!fm.includes(marker)) throw new Error(`${review.signature}: kg block marker not found`);
    fm = fm.replace(
      marker,
      `\nupdatedAt: "${REVIEWED_AT}"\nprovenance:\n  reviewedAt: "${REVIEWED_AT}"\n  reviewStatus: "metadata-reviewed"${marker}`,
    );
    changed = true;
  } else if (changed && !fm.includes(`reviewedAt: "${REVIEWED_AT}"`)) {
    throw new Error(`${review.signature}: lifecycle changed since review while repairs are pending; refusing to overwrite`);
  }

  return raw.replace(match[1], fm);
}

function validateReview(review) {
  for (const target of [...review.legacyRelations, ...review.explicitRelations]) {
    if (!knownSignatures.has(target)) {
      throw new Error(`${review.signature}: relation target is not canonical: ${target}`);
    }
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
  for (const target of [...review.legacyRelations, ...review.explicitRelations]) {
    if (!text.includes(`target: "${target}"`)) throw new Error(`${review.signature}: canonical relation missing: ${target}`);
  }
  if (text.includes('�')) throw new Error(`${review.signature}: replacement character remains after repair`);
  const residual = recoverOnePass(text);
  if (residual.repairs !== 0) throw new Error(`${review.signature}: ${residual.repairs} recoverable mojibake sequence(s) remain after repair`);
}

let totalRepairs = 0;
let plannedChanges = 0;
let writtenChanges = 0;

for (const review of reviews) {
  validateReview(review);
  const file = path.join(DOCS_DIR, `${review.signature}.md`);
  if (!fs.existsSync(file)) throw new Error(`${review.signature}: canonical file not found`);

  const raw = fs.readFileSync(file, 'utf8');
  const recovered = recoverMojibake(raw);
  const candidate = patchMetadata(recovered.text, review);
  validateCandidate(candidate, review);

  totalRepairs += recovered.repairs;
  if (candidate === raw) {
    console.log(`Already repaired: ${review.signature}`);
    continue;
  }

  plannedChanges += 1;
  console.log(`${CHECK_ONLY ? 'Validated' : 'Repairing'}: ${review.signature} — ${recovered.repairs} encoding sequence(s), ${review.explicitRelations.length} promoted explicit relation(s)`);
  if (!CHECK_ONLY) {
    fs.writeFileSync(file, candidate, 'utf8');
    writtenChanges += 1;
  }
}

console.log(`Encoding batch 2: ${reviews.length} documents, ${totalRepairs} encoding sequence(s), ${reviews.reduce((sum, review) => sum + review.explicitRelations.length, 0)} promoted explicit relations.`);
console.log(`Planned changes: ${plannedChanges}; written changes: ${writtenChanges}; mode: ${CHECK_ONLY ? 'check' : 'apply'}.`);
