import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const CHECK_ONLY = process.argv.includes('--check');
const TARGET_SIGNATURE = 'OTA-SCI-0031-2024-DE';
const TARGET_FILE = path.join(DOCS_DIR, `${TARGET_SIGNATURE}.md`);
const REVIEWED_AT = '2026-10-18T14:14:00+02:00';
const CANONICAL_TITLE = 'Gliese-12b — Die stille Exo-Venus';
const EXPECTED_VERSION = 'v1.0';
const CANONICAL_VERSION = 'v1.1';
const EXPECTED_EPISTEMIC = 'epistemicStatus: ["R", "T", "S"]';
const LEGACY_RELATIONS = ['OTA-SCI-0044-2026-DE'];
const EXPLICIT_RELATIONS = [
  'OTA-SCI-0030-2025-DE',
  'OTA-SCI-0007-2026-Cuancoa',
  'OTA-SCI-0019-2025-DE',
  'OTA-RED-0012-2171-DE',
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

function recoverMojibake(text) {
  let current = text;
  let reversibleRepairs = 0;

  for (let pass = 0; pass < 3; pass += 1) {
    const result = recoverOnePass(current);
    current = result.text;
    reversibleRepairs += result.repairs;
    if (result.repairs === 0) break;
  }

  if (recoverOnePass(current).repairs !== 0) {
    throw new Error(`${TARGET_SIGNATURE}: reversible encoding repair did not converge`);
  }

  const orphanRules = [
    ['Ÿ', 'ß'],
    ['—“', '–'],
    ['—”', '—'],
  ];
  let orphanRepairs = 0;
  for (const [from, to] of orphanRules) {
    const count = current.split(from).length - 1;
    if (count > 0) {
      current = current.split(from).join(to);
      orphanRepairs += count;
    }
  }

  return { text: current, reversibleRepairs, orphanRepairs };
}

function parseInlineRelations(frontmatter) {
  const match = frontmatter.match(/^relatedDocuments:\s*\[([^\n]*)\]\s*$/m);
  if (!match) return null;
  return [...match[1].matchAll(/"([^"]+)"/g)].map(result => result[1]);
}

function sameSet(a, b) {
  return a.length === b.length && a.every(value => b.includes(value));
}

function relationYaml() {
  const lines = ['relatedDocuments:'];
  for (const target of LEGACY_RELATIONS) {
    lines.push(`  - target: "${target}"`);
    lines.push('    relation: "related"');
    lines.push('    context: "Bereits in der Legacy-Inline-Liste des Ausgangsdokuments als relatedDocuments hinterlegt; im SCI-0031-Reparaturpass erhalten."');
  }
  for (const target of EXPLICIT_RELATIONS) {
    lines.push(`  - target: "${target}"`);
    lines.push('    relation: "related"');
    lines.push('    context: "Im Dokument ausdrücklich unter VERWANDTE DOKUMENTE aufgeführt."');
    lines.push('    descriptionStatus: "explicit"');
  }
  return lines.join('\n');
}

function patchMetadata(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error(`${TARGET_SIGNATURE}: missing frontmatter`);
  let fm = match[1];
  let changed = false;

  const genericTitle = `title: "${TARGET_SIGNATURE}"`;
  const desiredTitle = `title: "${CANONICAL_TITLE}"`;
  if (fm.includes(genericTitle)) {
    fm = fm.replace(genericTitle, desiredTitle);
    changed = true;
  } else if (!fm.includes(desiredTitle)) {
    throw new Error(`${TARGET_SIGNATURE}: unexpected title state`);
  }

  const expectedVersion = `version: "${EXPECTED_VERSION}"`;
  const desiredVersion = `version: "${CANONICAL_VERSION}"`;
  if (fm.includes(expectedVersion)) {
    fm = fm.replace(expectedVersion, desiredVersion);
    changed = true;
  } else if (!fm.includes(desiredVersion)) {
    throw new Error(`${TARGET_SIGNATURE}: version changed since review; refusing to overwrite`);
  }

  if (!fm.includes(EXPECTED_EPISTEMIC)) {
    throw new Error(`${TARGET_SIGNATURE}: epistemicStatus changed since review; refusing to overwrite`);
  }

  const inline = parseInlineRelations(fm);
  const allTargets = [...LEGACY_RELATIONS, ...EXPLICIT_RELATIONS];
  if (inline !== null) {
    if (!sameSet(inline, LEGACY_RELATIONS)) {
      throw new Error(`${TARGET_SIGNATURE}: legacy inline relations changed since review; refusing to normalize`);
    }
    const inlineLine = fm.match(/^relatedDocuments:\s*\[[^\n]*\]\s*$/m)?.[0];
    if (!inlineLine) throw new Error(`${TARGET_SIGNATURE}: reviewed inline relation list vanished`);
    fm = fm.replace(inlineLine, relationYaml());
    changed = true;
  } else {
    const relationBlock = fm.match(/^relatedDocuments:\s*\n((?:^[ \t].*(?:\r?\n|$))*)/m);
    if (!relationBlock) throw new Error(`${TARGET_SIGNATURE}: relatedDocuments is neither reviewed inline list nor normalized block`);
    for (const target of allTargets) {
      if (!relationBlock[0].includes(`target: "${target}"`)) {
        throw new Error(`${TARGET_SIGNATURE}: normalized relation block missing ${target}`);
      }
    }
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

  return raw.replace(match[1], fm);
}

function validateTargets() {
  const knownSignatures = new Set(
    fs.readdirSync(DOCS_DIR).map(file => file.replace(/\.(?:md|mdx)$/i, '')),
  );
  for (const target of [...LEGACY_RELATIONS, ...EXPLICIT_RELATIONS]) {
    if (!knownSignatures.has(target)) {
      throw new Error(`${TARGET_SIGNATURE}: relation target is not canonical: ${target}`);
    }
  }
}

function validateCandidate(text) {
  const required = [
    `title: "${CANONICAL_TITLE}"`,
    `version: "${CANONICAL_VERSION}"`,
    EXPECTED_EPISTEMIC,
    `reviewedAt: "${REVIEWED_AT}"`,
    'Größe vergleichbar mit der Venus',
    'außergewöhnlich',
    'R☉',
    'M⊕',
    'O₂',
    'χ-Feld-Theorie',
    '0,71–0,95 M⊕',
    '— ENDE DOKUMENT —',
    'ᐃ',
  ];
  for (const marker of required) {
    if (!text.includes(marker)) throw new Error(`${TARGET_SIGNATURE}: repaired candidate missing sentinel: ${marker}`);
  }

  for (const target of [...LEGACY_RELATIONS, ...EXPLICIT_RELATIONS]) {
    if (!text.includes(`target: "${target}"`)) {
      throw new Error(`${TARGET_SIGNATURE}: canonical relation missing after repair: ${target}`);
    }
  }

  const forbidden = ['�', 'â', 'Ï', 'áƒ', 'Ÿ', '—“', '—”'];
  for (const marker of forbidden) {
    if (text.includes(marker)) throw new Error(`${TARGET_SIGNATURE}: mojibake remains after repair: ${marker}`);
  }

  if (recoverOnePass(text).repairs !== 0) {
    throw new Error(`${TARGET_SIGNATURE}: recoverable mojibake remains after repair`);
  }

  if (text.includes('target: "OTA-SCI-0032-2024-DE"')) {
    throw new Error(`${TARGET_SIGNATURE}: unreviewed year correction for SCI-0032 must not be inferred`);
  }
}

if (!fs.existsSync(TARGET_FILE)) throw new Error(`${TARGET_SIGNATURE}: canonical file not found`);
validateTargets();

const raw = fs.readFileSync(TARGET_FILE, 'utf8');
const recovered = recoverMojibake(raw);
const candidate = patchMetadata(recovered.text);
validateCandidate(candidate);

if (candidate === raw) {
  console.log(`Already repaired: ${TARGET_SIGNATURE}`);
  process.exit(0);
}

console.log(
  `${CHECK_ONLY ? 'Validated' : 'Repairing'} ${TARGET_SIGNATURE}: ` +
  `${recovered.reversibleRepairs} reversible encoding sequence(s), ` +
  `${recovered.orphanRepairs} reviewed orphan repair(s), ` +
  `${EXPLICIT_RELATIONS.length} promoted explicit relation(s), version → ${CANONICAL_VERSION}.`,
);

if (!CHECK_ONLY) fs.writeFileSync(TARGET_FILE, candidate, 'utf8');
