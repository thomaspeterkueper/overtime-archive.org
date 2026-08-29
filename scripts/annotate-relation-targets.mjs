import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const QUALITY_FILE = path.join(ROOT, 'src', 'data', 'archive-quality.generated.json');

function splitFrontmatter(raw) {
  const m = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  return m ? m[1] : '';
}

function scalar(frontmatter, key) {
  const m = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!m) return '';
  const value = m[1].trim();
  return ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
    ? value.slice(1, -1)
    : value;
}

const files = fs.readdirSync(DOCS_DIR)
  .filter(name => /\.(?:md|mdx)$/i.test(name))
  .sort((a, b) => a.localeCompare(b));

const canonicalSignatures = new Set(files.map(file => {
  const raw = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8');
  const frontmatter = splitFrontmatter(raw);
  return scalar(frontmatter, 'signature') || file.replace(/\.(?:md|mdx)$/i, '');
}));

const report = JSON.parse(fs.readFileSync(QUALITY_FILE, 'utf8'));
const candidates = [];

for (const document of report.documents ?? []) {
  for (const relation of document?.candidates?.relations ?? []) {
    const targetExists = canonicalSignatures.has(relation.target);
    relation.targetExists = targetExists;
    relation.targetStatus = targetExists ? 'canonical' : 'unresolved';
    candidates.push(relation);
  }
}

report.summary ??= {};
report.summary.canonicalRelationTargets = candidates.filter(r => r.targetExists).length;
report.summary.unresolvedRelationTargets = candidates.filter(r => !r.targetExists).length;
report.summary.explicitCanonicalRelationCandidates = candidates.filter(r => r.evidence === 'explicit-cross-reference' && r.targetExists).length;
report.summary.explicitUnresolvedRelationCandidates = candidates.filter(r => r.evidence === 'explicit-cross-reference' && !r.targetExists).length;

fs.writeFileSync(QUALITY_FILE, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

console.log(`Relation target resolution: ${candidates.length} candidates`);
console.log(`  canonical targets: ${report.summary.canonicalRelationTargets}`);
console.log(`  unresolved targets: ${report.summary.unresolvedRelationTargets}`);
console.log(`  explicit cross-reference + canonical target: ${report.summary.explicitCanonicalRelationCandidates}`);
console.log(`  explicit cross-reference + unresolved target: ${report.summary.explicitUnresolvedRelationCandidates}`);
