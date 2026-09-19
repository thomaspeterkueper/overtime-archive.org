import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const CHECK_ONLY = process.argv.includes('--check');
const REVIEWED_AT = '2026-09-19T18:41:25+02:00';

const reviews = [
  {
    signature: 'OTA-NAR-0002-2025-DE',
    title: 'Saga-Integrationsnotizen — Au₂Hₓ / Gold-AVI in der NOXIA-Saga',
    relations: [
      'OTA-SCI-0017-2025-DE',
      'OTA-TEC-0021-2025-DE',
      'OTA-SCI-0014-2025-DE',
      'OTA-RED-0019-2091-DE',
      'OTA-NAR-0001-2087-DE',
    ],
  },
  {
    signature: 'OTA-BIO-0010-2025-DE',
    title: 'Keiko Nakamura — Die Navigatorin zwischen den Welten',
    relations: [
      'OTA-BIO-0011-2091-DE',
      'OTA-BIO-0012-2087-DE',
      'OTA-BIO-0006-2025-DE',
      'OTA-SCI-0014-2025-DE',
    ],
  },
  {
    signature: 'OTA-RED-0016-2091-DE',
    title: 'Das 432-FREQ-ECHO-Signal — Unidentifizierte Transmission an Lena Kowalski',
    relations: [
      'OTA-SCI-0009-2025-DE',
      'OTA-NAR-0001-2087-DE',
      'OTA-BIO-0006-2025-DE',
      'OTA-RED-0017-2091-DE',
    ],
  },
  {
    signature: 'OTA-RED-0017-2091-DE',
    title: 'Die vier Ausfälle — Untersuchungsbericht zum Solar Student Exchange Program 2091',
    relations: [
      'OTA-SCI-0012-2188-DE',
      'OTA-BIO-0006-2025-DE',
      'OTA-RED-0016-2091-DE',
      'OTA-SCI-0013-2025-DE',
    ],
  },
  {
    signature: 'OTA-RED-0018-2091-DE',
    title: 'STUFE-OMEGA — Auditive Kontamination & Frequenz-Exposition',
    relations: [
      'OTA-HIS-0003-2087-DE',
      'OTA-SCI-0014-2025-DE',
      'OTA-RED-0017-2091-DE',
      'OTA-BIO-0006-2025-DE',
    ],
  },
  {
    signature: 'OTA-TEC-0019-2095-DE',
    title: 'Künstliche Schumann-Generatoren — Technische Spezifikation',
    relations: [
      'OTA-SCI-0015-2025-DE',
      'OTA-SCI-0009-2025-DE',
      'OTA-SCI-0016-2150-DE',
    ],
  },
];

const knownFiles = new Set(fs.readdirSync(DOCS_DIR));
const knownSignatures = new Set([...knownFiles].map(file => file.replace(/\.(?:md|mdx)$/i, '')));

function relationEntries(targets) {
  const lines = [];
  for (const target of targets) {
    lines.push(`  - target: "${target}"`);
    lines.push('    relation: "related"');
    lines.push('    context: "Im Dokument ausdrücklich unter den verwandten Dokumenten bzw. Querverweisen aufgeführt."');
    lines.push('    descriptionStatus: "explicit"');
  }
  return lines.join('\n');
}

function addRelations(frontmatter, review) {
  for (const target of review.relations) {
    if (!knownSignatures.has(target)) {
      throw new Error(`${review.signature}: relation target is not canonical: ${target}`);
    }
  }

  const missingTargets = review.relations.filter(target => !frontmatter.includes(`target: "${target}"`));
  if (!missingTargets.length) return { frontmatter, changed: false };

  if (frontmatter.includes('relatedDocuments: []')) {
    return {
      frontmatter: frontmatter.replace('relatedDocuments: []', `relatedDocuments:\n${relationEntries(missingTargets)}`),
      changed: true,
    };
  }

  const relationBlock = frontmatter.match(/^relatedDocuments:\s*\n((?:^[ \t].*(?:\r?\n|$))*)/m);
  if (!relationBlock) {
    throw new Error(`${review.signature}: relatedDocuments block missing or malformed`);
  }

  const replacement = `${relationBlock[0].replace(/\s+$/, '')}\n${relationEntries(missingTargets)}\n`;
  return {
    frontmatter: frontmatter.replace(relationBlock[0], replacement),
    changed: true,
  };
}

function patchFrontmatter(raw, review) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error(`${review.signature}: missing frontmatter`);

  let fm = match[1];
  let semanticChanged = false;
  const genericTitle = `title: "${review.signature}"`;
  const canonicalTitle = `title: "${review.title}"`;

  if (fm.includes(genericTitle)) {
    fm = fm.replace(genericTitle, canonicalTitle);
    semanticChanged = true;
  } else if (!fm.includes(canonicalTitle)) {
    throw new Error(`${review.signature}: unexpected title state`);
  }

  const relationResult = addRelations(fm, review);
  fm = relationResult.frontmatter;
  semanticChanged ||= relationResult.changed;

  if (!/^updatedAt:/m.test(fm)) {
    const marker = '\nkg:';
    if (!fm.includes(marker)) throw new Error(`${review.signature}: kg block marker not found`);
    fm = fm.replace(marker, `\nupdatedAt: "${REVIEWED_AT}"\nprovenance:\n  reviewedAt: "${REVIEWED_AT}"\n  reviewStatus: "metadata-reviewed"${marker}`);
  } else if (semanticChanged && !fm.includes(`reviewedAt: "${REVIEWED_AT}"`)) {
    throw new Error(`${review.signature}: lifecycle changed since review while semantic changes are still pending; refusing to overwrite`);
  }

  return raw.replace(match[1], fm);
}

let plannedChanges = 0;
let writtenChanges = 0;

for (const review of reviews) {
  const file = path.join(DOCS_DIR, `${review.signature}.md`);
  if (!fs.existsSync(file)) throw new Error(`${review.signature}: canonical file not found`);

  const raw = fs.readFileSync(file, 'utf8');
  const patched = patchFrontmatter(raw, review);
  if (patched === raw) {
    console.log(`Already curated: ${review.signature}`);
    continue;
  }

  plannedChanges += 1;
  console.log(`${CHECK_ONLY ? 'Validated' : 'Curating'}: ${review.signature} → ${review.title} (${review.relations.length} explicit relations)`);
  if (!CHECK_ONLY) {
    fs.writeFileSync(file, patched, 'utf8');
    writtenChanges += 1;
  }
}

console.log(`Reviewed cross-series metadata: ${reviews.length} documents, ${reviews.reduce((sum, review) => sum + review.relations.length, 0)} explicit relations.`);
console.log(`Planned changes: ${plannedChanges}; written changes: ${writtenChanges}; mode: ${CHECK_ONLY ? 'check' : 'apply'}.`);
