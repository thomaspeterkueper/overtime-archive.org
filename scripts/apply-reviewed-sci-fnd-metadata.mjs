import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const CHECK_ONLY = process.argv.includes('--check');
const REVIEWED_AT = '2026-09-08T09:35:00+02:00';

const reviews = [
  {
    signature: 'OTA-FND-0005-2025-DE',
    title: 'AVI-Modell — Axiomatisches Vakuum-Integral',
    relations: [
      'OTA-FND-0002-2025-DE',
      'OTA-SCI-0012-2188-DE',
    ],
  },
  {
    signature: 'OTA-FND-0006-2025-DE',
    title: 'Das noχ¹ᐃ-Universum — Serienarchitektur & kanonische Struktur',
    relations: [],
  },
  {
    signature: 'OTA-SCI-0013-2025-DE',
    title: 'Frequenz-Sensitivität bei Mars-Kindern der zweiten Generation',
    relations: [
      'OTA-RED-0017-2091-DE',
      'OTA-SCI-0009-2025-DE',
      'OTA-BIO-0006-2025-DE',
      'OTA-SCI-0008-2096-DE',
    ],
  },
  {
    signature: 'OTA-SCI-0014-2025-DE',
    title: 'Harmonische Frequenzsysteme in Baumeister-Strukturen',
    relations: [
      'OTA-SCI-0008-2096-DE',
      'OTA-SCI-0009-2025-DE',
      'OTA-RED-0016-2091-DE',
      'OTA-BIO-0012-2087-DE',
    ],
  },
  {
    signature: 'OTA-SCI-0015-2025-DE',
    title: 'Schumann-Resonanz: Biologische Relevanz und ISS-Referenzdaten',
    relations: [
      'OTA-SCI-0009-2025-DE',
      'OTA-SCI-0014-2025-DE',
      'OTA-TEC-0019-2095-DE',
      'OTA-SCI-0016-2150-DE',
    ],
  },
  {
    signature: 'OTA-SCI-0024-2026-DE',
    title: 'Ein skalares Feldmediator-Modell für Neutrino-Dunkle-Materie-Wechselwirkungen',
    relations: [
      'OTA-SCI-0024-2026-EN',
      'OTA-FND-0010-2026-DE',
      'OTA-SCI-0009-2025-DE',
    ],
  },
  {
    signature: 'OTA-SCI-0025-2091-DE',
    title: 'Solare Demographie 2091 — Kanonische Bevölkerungszahlen des Sonnensystems',
    reviewedAt: '2026-09-19T18:41:25+02:00',
    relations: [
      'OTA-ORG-0005-2090-DE',
      'OTA-TEC-0025-2050-DE',
      'OTA-ORG-0002-2091-DE',
    ],
  },
  {
    signature: 'OTA-SCI-0026-2026-DE',
    title: 'Interstellare Schwefelchemie — Die Entdeckung von 2,5-Cyclohexadien-1-thion',
    reviewedAt: '2026-09-19T18:41:25+02:00',
    relations: [
      'OTA-SCI-0009-2025-DE',
      'OTA-SCI-0010-2025-DE',
      'OTA-FND-0002-2025-DE',
    ],
  },
  {
    signature: 'OTA-SCI-0009-2025-DE',
    title: 'Planetare Schumann-Resonanzen und AVI-Kopplung',
    reviewedAt: '2026-09-19T18:41:25+02:00',
    relations: [
      'OTA-FND-0002-2025-DE',
      'OTA-FND-0004-2025-DE',
      'OTA-MON-0002-2142-DE',
      'OTA-SCI-0008-2096-DE',
      'OTA-RED-0012-2171-DE',
      'OTA-TEC-0001-2196-DE',
    ],
  },
  {
    signature: 'OTA-FND-0009-2026-DE',
    title: 'Biotechnologie vs. Metallurgie — Zwei paradigmatische Pfade der Zivilisation',
    reviewedAt: '2026-09-19T18:41:25+02:00',
    relations: [
      'OTA-SCI-0018-60000BCE-DE',
      'OTA-CUL-0002-60000BCE-DE',
      'OTA-OBS-0002-2026-DE',
      'OTA-FND-0001-2025-DE',
    ],
  },
  {
    signature: 'OTA-FND-0010-2026-DE',
    title: 'Das χ-Feld als Präkursor-Theorie',
    reviewedAt: '2026-09-19T18:41:25+02:00',
    expectedEpistemicStatus: ['T', 'H', 'S', 'W'],
    epistemicStatus: ['I', 'S'],
    relations: [
      'OTA-SCI-0024-2026-EN',
      'OTA-SCI-0024-2026-DE',
      'OTA-SCI-0009-2025-DE',
      'OTA-TEC-0001-2196-DE',
    ],
  },
];

const knownFiles = new Set(fs.readdirSync(DOCS_DIR));
const knownSignatures = new Set([...knownFiles].map(file => file.replace(/\.(?:md|mdx)$/i, '')));

function relationYaml(targets) {
  if (!targets.length) return 'relatedDocuments: []';
  const lines = ['relatedDocuments:'];
  for (const target of targets) {
    lines.push(`  - target: "${target}"`);
    lines.push('    relation: "related"');
    lines.push('    context: "Im Dokument ausdrücklich unter den verwandten Dokumenten bzw. Querverweisen aufgeführt."');
    lines.push('    descriptionStatus: "explicit"');
  }
  return lines.join('\n');
}

function epistemicYaml(values) {
  return `epistemicStatus: [${values.map(value => `"${value}"`).join(', ')}]`;
}

function patchFrontmatter(raw, review) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error(`${review.signature}: missing frontmatter`);

  let fm = match[1];
  let semanticChanged = false;
  const reviewedAt = review.reviewedAt || REVIEWED_AT;
  const genericTitle = `title: "${review.signature}"`;
  const canonicalTitle = `title: "${review.title}"`;

  if (fm.includes(genericTitle)) {
    fm = fm.replace(genericTitle, canonicalTitle);
    semanticChanged = true;
  } else if (!fm.includes(canonicalTitle)) {
    throw new Error(`${review.signature}: unexpected title state`);
  }

  if (review.epistemicStatus) {
    const expectedLine = epistemicYaml(review.expectedEpistemicStatus || []);
    const desiredLine = epistemicYaml(review.epistemicStatus);
    if (fm.includes(expectedLine)) {
      fm = fm.replace(expectedLine, desiredLine);
      semanticChanged = true;
    } else if (!fm.includes(desiredLine)) {
      throw new Error(`${review.signature}: epistemicStatus changed since review; refusing to overwrite`);
    }
  }

  if (review.relations.length) {
    for (const target of review.relations) {
      if (!knownSignatures.has(target)) {
        throw new Error(`${review.signature}: relation target is not canonical: ${target}`);
      }
    }

    const desiredRelations = relationYaml(review.relations);
    if (fm.includes('relatedDocuments: []')) {
      fm = fm.replace('relatedDocuments: []', desiredRelations);
      semanticChanged = true;
    } else if (!review.relations.every(target => fm.includes(`target: "${target}"`))) {
      throw new Error(`${review.signature}: relatedDocuments changed since review; refusing to overwrite`);
    }
  }

  if (!/^updatedAt:/m.test(fm)) {
    const marker = '\nkg:';
    if (!fm.includes(marker)) throw new Error(`${review.signature}: kg block marker not found`);
    fm = fm.replace(marker, `\nupdatedAt: "${reviewedAt}"\nprovenance:\n  reviewedAt: "${reviewedAt}"\n  reviewStatus: "metadata-reviewed"${marker}`);
  } else if (semanticChanged && !fm.includes(`reviewedAt: "${reviewedAt}"`)) {
    throw new Error(`${review.signature}: lifecycle changed since review while semantic changes are still pending; refusing to overwrite`);
  }

  return raw.replace(match[1], fm);
}

let plannedChanges = 0;
let writtenChanges = 0;

for (const review of reviews) {
  const filename = `${review.signature}.md`;
  const file = path.join(DOCS_DIR, filename);
  if (!fs.existsSync(file)) throw new Error(`${review.signature}: canonical file not found`);

  const raw = fs.readFileSync(file, 'utf8');
  const patched = patchFrontmatter(raw, review);
  if (patched === raw) {
    console.log(`Already curated: ${review.signature}`);
    continue;
  }

  plannedChanges += 1;
  const epistemicNote = review.epistemicStatus ? `; epistemicStatus → ${review.epistemicStatus.join('/')}` : '';
  console.log(`${CHECK_ONLY ? 'Validated' : 'Curating'}: ${review.signature} → ${review.title} (${review.relations.length} explicit relations${epistemicNote})`);
  if (!CHECK_ONLY) {
    fs.writeFileSync(file, patched, 'utf8');
    writtenChanges += 1;
  }
}

console.log(`Reviewed SCI/FND metadata: ${reviews.length} documents, ${reviews.reduce((n, r) => n + r.relations.length, 0)} explicit relations.`);
console.log(`Planned changes: ${plannedChanges}; written changes: ${writtenChanges}; mode: ${CHECK_ONLY ? 'check' : 'apply'}.`);
