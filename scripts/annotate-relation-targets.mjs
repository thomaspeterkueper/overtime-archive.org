import fs from 'node:fs';
import path from 'node:path';
import { loadReferenceRegistry, classifyTarget, referenceStatus } from './reference-resolution.mjs';

const ROOT = process.cwd();
const QUALITY_FILE = path.join(ROOT, 'src', 'data', 'archive-quality.generated.json');

// Use the same authoritative resolution scheme as the reference index
// (scripts/build-reference-index.mjs): exact canonical signatures resolve,
// and language-suffix shorthands and base identifiers resolve mechanically,
// while temporal variants, ambiguous bases and genuinely missing targets keep
// distinct labels instead of being collapsed into a single 'unresolved' bin.
const registry = loadReferenceRegistry();

const report = JSON.parse(fs.readFileSync(QUALITY_FILE, 'utf8'));
const candidates = [];

for (const document of report.documents ?? []) {
  for (const relation of document?.candidates?.relations ?? []) {
    const analysis = classifyTarget(registry, relation.target);
    // A document mentioning its own base identifier or language shorthand
    // (e.g. OTA-KARTE-0002 inside OTA-KARTE-0002-Epochen-g-Profile-DE) is not
    // a related-document gap: the target resolves to the document itself.
    // analyze-archive-content.mjs only excludes exact signature matches, so
    // these self-resolving forms are labelled here and kept out of both the
    // resolved and the open candidate counts.
    const selfReference = analysis.resolvedTarget === document.signature;
    const resolved = !selfReference && analysis.resolvedTarget !== null;
    relation.targetExists = resolved;
    relation.targetStatus = selfReference
      ? 'self-reference'
      : referenceStatus(analysis.classification, registry.registryByTarget.get(relation.target));
    relation.targetClassification = selfReference ? 'self-reference' : analysis.classification;
    relation.resolvedTarget = analysis.resolvedTarget;
    candidates.push(relation);
  }
}

const resolvedCandidates = candidates.filter(r => r.targetExists);
const openCandidates = candidates.filter(r => !r.targetExists && r.targetClassification !== 'self-reference');
const classificationCounts = Object.fromEntries(
  [...new Set(candidates.map(r => r.targetClassification))].sort()
    .map(kind => [kind, candidates.filter(r => r.targetClassification === kind).length])
);

report.summary ??= {};
report.summary.canonicalRelationTargets = resolvedCandidates.length;
report.summary.unresolvedRelationTargets = openCandidates.length;
report.summary.explicitCanonicalRelationCandidates = candidates.filter(r => r.evidence === 'explicit-cross-reference' && r.targetExists).length;
report.summary.explicitUnresolvedRelationCandidates = candidates.filter(r => r.evidence === 'explicit-cross-reference' && !r.targetExists && r.targetClassification !== 'self-reference').length;
report.summary.relationTargetClassifications = classificationCounts;

fs.writeFileSync(QUALITY_FILE, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

console.log(`Relation target resolution: ${candidates.length} candidates`);
console.log(`  resolved targets: ${resolvedCandidates.length}`);
console.log(`    exact canonical: ${classificationCounts.existing ?? 0}`);
console.log(`    language-suffix shorthand: ${classificationCounts['shorthand-resolved'] ?? 0}`);
console.log(`    base identifier: ${classificationCounts['base-id-resolved'] ?? 0}`);
console.log(`  open targets: ${openCandidates.length}`);
console.log(`  self-references excluded: ${classificationCounts['self-reference'] ?? 0}`);
for (const kind of Object.keys(classificationCounts).filter(kind => !['existing', 'shorthand-resolved', 'base-id-resolved'].includes(kind))) {
  console.log(`    ${kind}: ${classificationCounts[kind]}`);
}
console.log(`  explicit cross-reference + resolved target: ${report.summary.explicitCanonicalRelationCandidates}`);
console.log(`  explicit cross-reference + open target: ${report.summary.explicitUnresolvedRelationCandidates}`);
