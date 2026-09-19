import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS = path.join(ROOT, 'src', 'content', 'documents');
const CHECK_ONLY = process.argv.includes('--check');
const REVIEWED_AT = '2026-09-19T18:26:00+02:00';
const REVISION_NOTE = '**Kanonische Markerkorrektur 2026-09-19:** Der Quellenmarker H für Hayashi wurde in HAY umbenannt, um die Kollision mit dem archivweiten epistemischen Marker H = Hypothetisch zu vermeiden. Inhaltliche Aussagen bleiben unverändert.\n\n';

function replaceAll(text, from, to) {
  return text.split(from).join(to);
}

function insertBefore(text, needle, addition) {
  if (text.includes(addition.trim())) return text;
  if (!text.includes(needle)) throw new Error(`Expected insertion anchor not found: ${needle}`);
  return text.replace(needle, `${addition}${needle}`);
}

function migrateMarkers(text) {
  return replaceAll(
    replaceAll(
      replaceAll(text, '\\[H/F\\]', '\\[HAY/F\\]'),
      '\\[F/H\\]', '\\[F/HAY\\]'
    ),
    '\\[H\\]', '\\[HAY\\]'
  );
}

const migrations = [
  {
    file: 'OTA-SCI-0015-2025-DE.md',
    apply(text) {
      if (!text.includes('\\[H\\] Hayashi')) throw new Error('SCI-0015 no longer contains the reviewed Hayashi marker definition.');
      text = migrateMarkers(text);
      text = text.replace('updatedAt: "2026-09-08T09:35:00+02:00"', `updatedAt: "${REVIEWED_AT}"`);
      text = text.replace('reviewedAt: "2026-09-08T09:35:00+02:00"', `reviewedAt: "${REVIEWED_AT}"`);
      text = text.replace('reviewStatus: "metadata-reviewed"', 'reviewStatus: "content-reviewed"');
      return insertBefore(text, 'Revisionsverlauf', REVISION_NOTE);
    },
  },
  {
    file: 'OTA-SCI-0016-2150-DE.md',
    apply(text) {
      if (!text.includes('\\[H\\] Hayashi')) throw new Error('SCI-0016 no longer contains the reviewed Hayashi marker definition.');
      text = migrateMarkers(text);
      text = text.replace('title: "OTA-SCI-0016-2150-DE"', 'title: "Mars EEG Atlas — Neurophysiologische Adaptation"');
      text = text.replace(
        'relatedDocuments: []',
        'relatedDocuments:\n  - target: "OTA-SCI-0015-2025-DE"\n    relation: "basis"\n    context: "Im Dokument als wissenschaftliche Grundlage und verwandtes Dokument ausgewiesen."\n    descriptionStatus: "explicit"\n  - target: "OTA-TEC-0019-2095-DE"\n    relation: "related"\n    context: "Im Abschnitt Verwandte Dokumente ausdrücklich aufgeführt."\n    descriptionStatus: "explicit"\n  - target: "OTA-BIO-0003-2195-EN"\n    relation: "related"\n    context: "Im Abschnitt Verwandte Dokumente ausdrücklich aufgeführt."\n    descriptionStatus: "explicit"'
      );
      const summaryLine = 'summary: "Mars EEG Atlas 2150 — neurologische Kartierung im NOXIA-Universum. Futuristische Forschungsdokumentation [F]."';
      if (!text.includes('updatedAt:')) {
        text = text.replace(
          summaryLine,
          `${summaryLine}\nupdatedAt: "${REVIEWED_AT}"\nprovenance:\n  reviewedAt: "${REVIEWED_AT}"\n  reviewStatus: "content-reviewed"`
        );
      }
      return insertBefore(text, 'Revisionsverlauf', REVISION_NOTE);
    },
  },
];

let changed = 0;
for (const migration of migrations) {
  const filePath = path.join(DOCS, migration.file);
  const before = fs.readFileSync(filePath, 'utf8');
  const alreadyMigrated = before.includes('\\[HAY\\] Hayashi') || before.includes('\\[HAY/F\\]');

  if (alreadyMigrated) {
    if (/\\\[H\\\]\s+Hayashi|\\\[H\/F\\\]|\\\[F\/H\\\]/.test(before)) {
      throw new Error(`${migration.file}: mixed H/HAY migration state`);
    }
    console.log(`${migration.file}: already migrated`);
    continue;
  }

  const after = migration.apply(before);
  if (after === before) throw new Error(`${migration.file}: migration produced no changes`);

  if (CHECK_ONLY) {
    console.log(`${migration.file}: migration plan valid`);
    continue;
  }

  fs.writeFileSync(filePath, after, 'utf8');
  changed += 1;
  console.log(`${migration.file}: migrated`);
}

console.log(CHECK_ONLY ? 'Hayashi migration check complete.' : `Hayashi migration complete: ${changed} file(s) changed.`);
