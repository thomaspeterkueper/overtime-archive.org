import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const CHECK_ONLY = process.argv.includes('--check');
const SIGNATURE = 'OTA-SCI-0048-NACHTRAG-2026-DE';
const TITLE = 'Λ-Haplogruppe: Drei Ergänzungsmodule — UPE-FSS-Detektionsprotokoll · LHON/FSS-Differentialdiagnose · Zweiter-Schlag-Pharmakologie';
const REVIEWED_AT = '2026-09-25T09:16:33+02:00';

const legacyRelations = [
  'OTA-SCI-0048-2031-DE',
  'OTA-LSC-0004-2026-DE',
];

const explicitRelations = [
  'OTA-LSC-0003-2026-DE',
  'OTA-TEC-0032-2091-DE',
  'OTA-SCI-0045-2026-DE',
  'OTA-BIO-0020-2026-DE',
];

const allRelations = [...legacyRelations, ...explicitRelations];
const knownSignatures = new Set(
  fs.readdirSync(DOCS_DIR).map(file => file.replace(/\.(?:md|mdx)$/i, '')),
);

for (const target of allRelations) {
  if (!knownSignatures.has(target)) {
    throw new Error(`${SIGNATURE}: relation target is not canonical: ${target}`);
  }
}

function relationEntries() {
  return allRelations.flatMap(target => {
    const legacy = legacyRelations.includes(target);
    return [
      `  - target: "${target}"`,
      '    relation: "related"',
      legacy
        ? '    context: "Bereits in der Legacy-Inline-Liste des Ausgangsdokuments als relatedDocuments hinterlegt; bei der Normalisierung erhalten."'
        : '    context: "Im Dokument ausdrücklich unter den verwandten Dokumenten bzw. Querverweisen aufgeführt."',
      ...(legacy ? [] : ['    descriptionStatus: "explicit"']),
    ];
  }).join('\n');
}

function sameSet(a, b) {
  return a.length === b.length && a.every(value => b.includes(value));
}

function patchDocument(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error(`${SIGNATURE}: missing frontmatter`);

  let fm = match[1];
  let semanticChanged = false;

  const genericTitle = `title: "${SIGNATURE}"`;
  const canonicalTitle = `title: "${TITLE}"`;
  if (fm.includes(genericTitle)) {
    fm = fm.replace(genericTitle, canonicalTitle);
    semanticChanged = true;
  } else if (!fm.includes(canonicalTitle)) {
    throw new Error(`${SIGNATURE}: unexpected title state`);
  }

  const inlineMatch = fm.match(/^relatedDocuments:\s*\[([^\n]*)\]\s*$/m);
  if (inlineMatch) {
    const values = [...inlineMatch[1].matchAll(/"([^"]+)"/g)].map(match => match[1]);
    if (!sameSet(values, legacyRelations)) {
      throw new Error(`${SIGNATURE}: legacy inline relations changed since review; refusing to normalize`);
    }
    fm = fm.replace(inlineMatch[0], `relatedDocuments:\n${relationEntries()}`);
    semanticChanged = true;
  } else {
    const relationBlock = fm.match(/^relatedDocuments:\s*\n((?:^[ \t].*(?:\r?\n|$))*)/m);
    if (!relationBlock) throw new Error(`${SIGNATURE}: relatedDocuments state is neither reviewed legacy list nor normalized block`);
    for (const target of allRelations) {
      if (!relationBlock[0].includes(`target: "${target}"`)) {
        throw new Error(`${SIGNATURE}: normalized relation block is missing ${target}`);
      }
    }
  }

  if (!/^updatedAt:/m.test(fm)) {
    const marker = '\nkg:';
    if (!fm.includes(marker)) throw new Error(`${SIGNATURE}: kg block marker not found`);
    fm = fm.replace(
      marker,
      `\nupdatedAt: "${REVIEWED_AT}"\nprovenance:\n  reviewedAt: "${REVIEWED_AT}"\n  reviewStatus: "metadata-reviewed"${marker}`,
    );
  } else if (semanticChanged && !fm.includes(`reviewedAt: "${REVIEWED_AT}"`)) {
    throw new Error(`${SIGNATURE}: lifecycle changed since review while semantic changes are still pending; refusing to overwrite`);
  }

  return raw.replace(match[1], fm);
}

const file = path.join(DOCS_DIR, `${SIGNATURE}.md`);
if (!fs.existsSync(file)) throw new Error(`${SIGNATURE}: canonical file not found`);

const raw = fs.readFileSync(file, 'utf8');
const patched = patchDocument(raw);

if (patched === raw) {
  console.log(`Already normalized: ${SIGNATURE}`);
} else if (CHECK_ONLY) {
  console.log(`Validated SCI-0048 Nachtrag legacy normalization: ${SIGNATURE} → ${TITLE} (${allRelations.length} canonical relations)`);
} else {
  fs.writeFileSync(file, patched, 'utf8');
  console.log(`Normalized SCI-0048 Nachtrag legacy metadata: ${SIGNATURE} → ${TITLE} (${allRelations.length} canonical relations)`);
}
