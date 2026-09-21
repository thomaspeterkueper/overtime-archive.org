import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const TARGET_SIGNATURE = 'OTA-RED-0022-MULTI-DE';
const TARGET_FILE = path.join(DOCS_DIR, `${TARGET_SIGNATURE}.md`);
const CHECK_ONLY = process.argv.includes('--check');
const REVIEWED_AT = '2026-09-21T12:10:45+02:00';
const CANONICAL_TITLE = 'AVI und Quantengravitation: Formale Grundlagen';
const LEGACY_RELATIONS = 'relatedDocuments: ["OTA-SCI-0036-2026-DE", "OTA-FND-0030-2026-DE"]';

const relations = [
  {
    target: 'OTA-SCI-0036-2026-DE',
    context: 'Bereits im Frontmatter des Ausgangsdokuments als relatedDocuments hinterlegt; im Reparaturpass erhalten.',
    explicit: false,
  },
  {
    target: 'OTA-FND-0030-2026-DE',
    context: 'Bereits im Frontmatter des Ausgangsdokuments als relatedDocuments hinterlegt; im Reparaturpass erhalten.',
    explicit: false,
  },
  {
    target: 'OTA-RED-0012-2171-DE',
    context: 'Im Dokument ausdrücklich unter VERWANDTE DOKUMENTE aufgeführt.',
    explicit: true,
  },
  {
    target: 'OTA-SCI-0019-2025-DE',
    context: 'Im Dokument ausdrücklich unter VERWANDTE DOKUMENTE aufgeführt.',
    explicit: true,
  },
  {
    target: 'OTA-SCI-0035-2026-DE',
    context: 'Im Dokument ausdrücklich unter VERWANDTE DOKUMENTE aufgeführt.',
    explicit: true,
  },
  {
    target: 'OTA-SCI-0030-2025-DE',
    context: 'Im Dokument ausdrücklich unter VERWANDTE DOKUMENTE aufgeführt.',
    explicit: true,
  },
  {
    target: 'OTA-FND-0002-2025-DE',
    context: 'Im Dokument ausdrücklich unter VERWANDTE DOKUMENTE aufgeführt.',
    explicit: true,
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
  // Preserve the C1 controls that can appear when UTF-8 bytes were decoded
  // through a Latin-1/Windows-1252-like path (e.g. the final ᐃ marker).
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

function recoverMojibake(text) {
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
      if (decoded !== original && !decoded.includes('\uFFFD')) {
        output += decoded;
        repairs += 1;
        i += length - 1;
        continue;
      }
    } catch {
      // Not a valid UTF-8 sequence after reverse byte mapping: keep source.
    }

    output += chars[i];
  }

  return { text: output, repairs };
}

function relationYaml() {
  const lines = ['relatedDocuments:'];
  for (const relation of relations) {
    lines.push(`  - target: "${relation.target}"`);
    lines.push('    relation: "related"');
    lines.push(`    context: "${relation.context}"`);
    if (relation.explicit) lines.push('    descriptionStatus: "explicit"');
  }
  return lines.join('\n');
}

function patchMetadata(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error(`${TARGET_SIGNATURE}: missing frontmatter`);

  let fm = match[1];
  let changed = false;
  const genericTitle = `title: "${TARGET_SIGNATURE}"`;
  const canonicalTitle = `title: "${CANONICAL_TITLE}"`;

  if (fm.includes(genericTitle)) {
    fm = fm.replace(genericTitle, canonicalTitle);
    changed = true;
  } else if (!fm.includes(canonicalTitle)) {
    throw new Error(`${TARGET_SIGNATURE}: unexpected title state`);
  }

  const desiredRelations = relationYaml();
  if (fm.includes(LEGACY_RELATIONS)) {
    fm = fm.replace(LEGACY_RELATIONS, desiredRelations);
    changed = true;
  } else if (!relations.every(relation => fm.includes(`target: "${relation.target}"`))) {
    throw new Error(`${TARGET_SIGNATURE}: relatedDocuments changed since review; refusing to overwrite`);
  }

  if (!/^updatedAt:/m.test(fm)) {
    const marker = '\nkg:';
    if (!fm.includes(marker)) throw new Error(`${TARGET_SIGNATURE}: kg block marker not found`);
    fm = fm.replace(
      marker,
      `\nupdatedAt: "${REVIEWED_AT}"\nprovenance:\n  reviewedAt: "${REVIEWED_AT}"\n  reviewStatus: "metadata-reviewed"${marker}`,
    );
    changed = true;
  } else if (changed && !fm.includes(`reviewedAt: "${REVIEWED_AT}"`)) {
    throw new Error(`${TARGET_SIGNATURE}: lifecycle changed since review while repairs are pending; refusing to overwrite`);
  }

  return { text: raw.replace(match[1], fm), changed };
}

function validateCanonicalTargets() {
  const knownSignatures = new Set(
    fs.readdirSync(DOCS_DIR).map(file => file.replace(/\.(?:md|mdx)$/i, '')),
  );
  for (const relation of relations) {
    if (!knownSignatures.has(relation.target)) {
      throw new Error(`${TARGET_SIGNATURE}: relation target is not canonical: ${relation.target}`);
    }
  }
}

function validateCandidate(text) {
  const required = [
    `title: "${CANONICAL_TITLE}"`,
    'epistemicStatus: ["R", "T", "S", "F"]',
    'Terrestrische Quellen, 2024–2026',
    'χ-Felder',
    'Ψ',
    'Gaztañaga',
    '— ENDE DOKUMENT —',
    'ᐃ',
    'OTA-FND-0001-noxia', // unresolved legacy body reference stays visible
  ];
  for (const marker of required) {
    if (!text.includes(marker)) throw new Error(`${TARGET_SIGNATURE}: repaired candidate missing sentinel: ${marker}`);
  }

  const forbidden = ['â€“', 'â€”', 'â†', 'Ï‡', 'Î¨', 'GaztaÃ±aga', 'áƒ', '\uFFFD'];
  for (const marker of forbidden) {
    if (text.includes(marker)) throw new Error(`${TARGET_SIGNATURE}: mojibake remains after repair: ${marker}`);
  }

  if (text.includes(LEGACY_RELATIONS)) {
    throw new Error(`${TARGET_SIGNATURE}: legacy inline relatedDocuments remains after repair`);
  }

  for (const relation of relations) {
    if (!text.includes(`target: "${relation.target}"`)) {
      throw new Error(`${TARGET_SIGNATURE}: canonical relation missing after repair: ${relation.target}`);
    }
  }
}

if (!fs.existsSync(TARGET_FILE)) throw new Error(`${TARGET_SIGNATURE}: canonical file not found`);
validateCanonicalTargets();

const raw = fs.readFileSync(TARGET_FILE, 'utf8');
const recovered = recoverMojibake(raw);
const metadata = patchMetadata(recovered.text);
const candidate = metadata.text;
validateCandidate(candidate);

if (candidate === raw) {
  console.log(`Already repaired: ${TARGET_SIGNATURE}`);
  process.exit(0);
}

console.log(
  `${CHECK_ONLY ? 'Validated' : 'Repairing'} ${TARGET_SIGNATURE}: ${recovered.repairs} encoding sequence(s); ` +
  `${relations.length} canonical relations; title/lifecycle normalization checked.`,
);

if (!CHECK_ONLY) fs.writeFileSync(TARGET_FILE, candidate, 'utf8');
