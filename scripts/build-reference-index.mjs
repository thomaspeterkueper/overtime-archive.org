import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docsDir = path.join(root, 'src', 'content', 'documents');
const registryPath = path.join(root, 'src', 'data', 'reference-registry.json');
const outputPath = path.join(root, 'src', 'data', 'internal-references.generated.json');

const signaturePattern = /\bOTA-[A-Z]+-[0-9]{4}(?:-[A-Z0-9]+)*(?:-[0-9]{4}|-[0-9]+BCE)?(?:-[A-Z]{2}|-MULTI)?\b/g;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function frontmatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---/);
  return m?.[1] ?? '';
}

function field(fm, key) {
  const re = new RegExp(`^${key}:\\s*(.+)$`, 'm');
  const m = fm.match(re);
  if (!m) return undefined;
  return m[1].trim().replace(/^['"]|['"]$/g, '');
}

function contextFor(text, index, length) {
  const start = Math.max(0, index - 110);
  const end = Math.min(text.length, index + length + 150);
  return text.slice(start, end).replace(/\s+/g, ' ').trim();
}

function baseSignature(signature) {
  return signature.replace(/-(?:[0-9]{4}|[0-9]+BCE)(?:-(?:[A-Z]{2}|MULTI))?$/, '');
}

const files = walk(docsDir).filter(file => /\.(md|mdx)$/i.test(file));
const documents = [];
const bySignature = new Map();
const byBaseSignature = new Map();

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = frontmatter(text);
  const signature = field(fm, 'signature');
  if (!signature) continue;
  const doc = {
    signature,
    title: field(fm, 'title') ?? signature,
    summary: field(fm, 'summary') ?? '',
    file: path.relative(root, file).replaceAll('\\', '/'),
  };
  documents.push(doc);
  bySignature.set(signature, doc);
  const base = baseSignature(signature);
  if (!byBaseSignature.has(base)) byBaseSignature.set(base, []);
  byBaseSignature.get(base).push(doc);
}

let registry = [];
if (fs.existsSync(registryPath)) registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const registryByTarget = new Map(registry.map(entry => [entry.target, entry]));

const refs = new Map();
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = frontmatter(text);
  const sourceSignature = field(fm, 'signature') ?? path.basename(file);
  for (const match of text.matchAll(signaturePattern)) {
    const target = match[0];
    if (target === sourceSignature) continue;
    const key = `${sourceSignature}=>${target}`;
    if (!refs.has(key)) refs.set(key, { source: sourceSignature, target, contexts: [] });
    const entry = refs.get(key);
    const context = contextFor(text, match.index ?? 0, target.length);
    if (!entry.contexts.includes(context)) entry.contexts.push(context);
  }
}

const sourceCountByTarget = new Map();
for (const ref of refs.values()) {
  if (!sourceCountByTarget.has(ref.target)) sourceCountByTarget.set(ref.target, new Set());
  sourceCountByTarget.get(ref.target).add(ref.source);
}

function classify(target, reg) {
  if (bySignature.has(target)) return { classification: 'existing', candidates: [] };
  if (reg?.status === 'planned') return { classification: 'planned', candidates: [] };
  if (reg?.status === 'uncertain') return { classification: 'uncertain', candidates: [] };
  const candidates = (byBaseSignature.get(baseSignature(target)) ?? [])
    .filter(doc => doc.signature !== target)
    .map(doc => ({ signature: doc.signature, title: doc.title, file: doc.file }));
  if (candidates.length) return { classification: 'variant-candidate', candidates };
  return { classification: 'missing', candidates: [] };
}

const references = [...refs.values()].map(ref => {
  const targetDoc = bySignature.get(ref.target);
  const reg = registryByTarget.get(ref.target);
  const analysis = classify(ref.target, reg);
  const sourceCount = sourceCountByTarget.get(ref.target)?.size ?? 0;
  return {
    ...ref,
    status: targetDoc ? 'resolved' : (reg?.status ?? 'unresolved'),
    classification: analysis.classification,
    candidates: analysis.candidates,
    sourceCount,
    priority: targetDoc ? 0 : sourceCount,
    title: targetDoc?.title ?? reg?.title ?? ref.target,
    description: targetDoc?.summary ?? reg?.description ?? '',
    descriptionStatus: targetDoc ? 'canonical' : (reg?.descriptionStatus ?? null),
    targetFile: targetDoc?.file ?? null,
  };
}).sort((a, b) => b.priority - a.priority || a.target.localeCompare(b.target) || a.source.localeCompare(b.source));

const openTargets = [...new Set(references.filter(ref => ref.status !== 'resolved').map(ref => ref.target))];
const classificationCounts = Object.fromEntries(
  ['missing', 'variant-candidate', 'planned', 'uncertain'].map(kind => [kind, openTargets.filter(target => references.find(ref => ref.target === target)?.classification === kind).length])
);

const output = {
  generatedAt: new Date().toISOString(),
  documents: documents.sort((a, b) => a.signature.localeCompare(b.signature)),
  summary: {
    referenceCount: references.length,
    openReferenceCount: references.filter(ref => ref.status !== 'resolved').length,
    openTargetCount: openTargets.length,
    classifications: classificationCounts,
  },
  references,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
console.log(`Reference index generated: ${documents.length} documents, ${references.length} references, ${openTargets.length} open targets.`);
console.log(`Open targets: ${classificationCounts.missing} missing, ${classificationCounts['variant-candidate']} variant candidates, ${classificationCounts.planned} planned, ${classificationCounts.uncertain} uncertain.`);
