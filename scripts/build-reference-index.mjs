import fs from 'node:fs';
import path from 'node:path';
import {
  loadReferenceRegistry,
  classifyTarget,
  referenceStatus,
  walk,
  frontmatter,
  field,
} from './reference-resolution.mjs';

const root = process.cwd();
const docsDir = path.join(root, 'src', 'content', 'documents');
const outputPath = path.join(root, 'src', 'data', 'internal-references.generated.json');

const signaturePattern = /\bOTA-[A-Z]+-[0-9]{4}(?:-[A-Z0-9]+)*(?:-[0-9]{4}|-[0-9]+BCE)?(?:-[A-Z]{2}|-MULTI)?\b/g;

const registry = loadReferenceRegistry();
const { documents, bySignature, registryByTarget } = registry;

function contextFor(text, index, length) {
  const start = Math.max(0, index - 110);
  const end = Math.min(text.length, index + length + 150);
  return text.slice(start, end).replace(/\s+/g, ' ').trim();
}

const files = walk(docsDir).filter(file => /\.(md|mdx)$/i.test(file));

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

const references = [...refs.values()].map(ref => {
  const reg = registryByTarget.get(ref.target);
  const analysis = classifyTarget(registry, ref.target);
  const resolvedDoc = analysis.resolvedTarget ? bySignature.get(analysis.resolvedTarget) : undefined;
  const sourceCount = sourceCountByTarget.get(ref.target)?.size ?? 0;
  const status = referenceStatus(analysis.classification, reg);

  return {
    ...ref,
    status,
    classification: analysis.classification,
    candidates: analysis.candidates,
    resolvedTarget: analysis.resolvedTarget,
    sourceCount,
    priority: resolvedDoc ? 0 : sourceCount,
    title: resolvedDoc?.title ?? reg?.title ?? ref.target,
    description: resolvedDoc?.summary ?? reg?.description ?? '',
    descriptionStatus: resolvedDoc ? 'canonical' : (reg?.descriptionStatus ?? null),
    targetFile: resolvedDoc?.file ?? null,
  };
}).sort((a, b) => b.priority - a.priority || a.target.localeCompare(b.target) || a.source.localeCompare(b.source));

const openTargets = [...new Set(references.filter(ref => !ref.status.startsWith('resolved')).map(ref => ref.target))];
const allClassifications = [
  'missing',
  'shorthand-resolved',
  'base-id-resolved',
  'base-id-ambiguous',
  'language-ambiguous',
  'translation-missing',
  'temporal-mismatch',
  'temporal-ambiguous',
  'underspecified',
  'ambiguous-base',
  'planned',
  'uncertain',
];
const classificationCounts = Object.fromEntries(
  allClassifications.map(kind => [kind, [...new Set(references.filter(ref => ref.classification === kind).map(ref => ref.target))].length])
);

const output = {
  generatedAt: new Date().toISOString(),
  documents: documents.sort((a, b) => a.signature.localeCompare(b.signature)),
  summary: {
    referenceCount: references.length,
    openReferenceCount: references.filter(ref => !ref.status.startsWith('resolved')).length,
    openTargetCount: openTargets.length,
    classifications: classificationCounts,
  },
  references,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
console.log(`Reference index generated: ${documents.length} documents, ${references.length} references, ${openTargets.length} open targets.`);
console.log(`Mechanically resolved targets: ${classificationCounts['shorthand-resolved']} language-suffix shorthands, ${classificationCounts['base-id-resolved']} base identifiers.`);
console.log(`Open targets: ${classificationCounts.missing} missing, ${classificationCounts['base-id-ambiguous']} base-id-ambiguous, ${classificationCounts['language-ambiguous']} language-ambiguous, ${classificationCounts['translation-missing']} translation-missing, ${classificationCounts['temporal-mismatch']} temporal-mismatch, ${classificationCounts['temporal-ambiguous']} temporal-ambiguous, ${classificationCounts.underspecified} underspecified, ${classificationCounts['ambiguous-base']} ambiguous-base, ${classificationCounts.planned} planned, ${classificationCounts.uncertain} uncertain.`);

const reviewTargets = [...new Set(references.filter(ref => !ref.status.startsWith('resolved')).map(ref => ref.target))]
  .map(target => references.find(ref => ref.target === target))
  .filter(Boolean)
  .sort((a, b) => (b?.priority ?? 0) - (a?.priority ?? 0) || a.target.localeCompare(b.target));

if (reviewTargets.length) {
  console.log('Open reference review queue:');
  for (const ref of reviewTargets) {
    const sources = [...new Set(references.filter(item => item.target === ref.target).map(item => item.source))];
    const candidates = ref.candidates.map(candidate => `${candidate.signature} :: ${candidate.title}`).join(' | ');
    console.log(`REVIEW\t${ref.classification}\t${ref.target}\tpriority=${ref.priority}\tsources=${sources.join(',')}\tcandidates=${candidates}`);
  }
}
