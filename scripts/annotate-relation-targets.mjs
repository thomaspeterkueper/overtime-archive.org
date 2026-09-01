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

// Self-references must not survive into triage data: a document whose only
// relation candidate resolves to itself (OTA-KARTE-0001 inside
// OTA-KARTE-0001-Gehirn-Epochen) is not a related-document gap. Drop the
// entries and recompute the per-document fields that
// analyze-archive-content.mjs derived from the unfiltered candidate list
// (relationGap, RELATION_GAP flag, candidates.count, priority) with the same
// formulas, so document-level triage data and the summary counters agree.
for (const document of report.documents ?? []) {
  const relations = document?.candidates?.relations ?? [];
  const kept = relations.filter(relation => relation.targetClassification !== 'self-reference');
  if (kept.length === relations.length) continue;
  const removed = relations.length - kept.length;
  document.candidates.relations = kept;
  document.candidates.count -= removed;
  const relationGap = kept.length > 0;
  document.quality.relationGap = relationGap;
  if (!relationGap) {
    document.quality.flags = document.quality.flags.filter(flag => flag !== 'RELATION_GAP');
  }
  const { genericTitle, genericSummary } = document.quality;
  const { words, headings } = document.metrics;
  document.quality.priority = (genericTitle ? 4 : 0) + (genericSummary ? 3 : 0) + (relationGap ? 2 : 0) + (words < 350 ? 4 : words < 700 ? 2 : 0) + (headings === 0 ? 1 : 0);
}
// Priorities changed for documents whose only candidates were self-references;
// restore the analyze step's ordering (priority desc, then signature).
report.documents.sort((a, b) => b.quality.priority - a.quality.priority || a.signature.localeCompare(b.signature));

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

// Recompute the counters analyze-archive-content.mjs derived from the
// unfiltered relation list so they reflect the filtered candidates:
// relationCandidates and its evidence split, safeRelationCandidates and the
// number of documents that still carry a relation gap.
const keptRelations = (report.documents ?? []).flatMap(document => document.candidates?.relations ?? []);
report.summary.relationCandidates = keptRelations.length;
report.summary.explicitCrossReferenceCandidates = keptRelations.filter(r => r.evidence === 'explicit-cross-reference').length;
report.summary.bibliographyRelationCandidates = keptRelations.filter(r => r.evidence === 'bibliography').length;
report.summary.inlineRelationCandidates = keptRelations.filter(r => r.evidence === 'inline').length;
report.summary.safeRelationCandidates = keptRelations.filter(r => r.safe).length;
report.summary.relationGaps = (report.documents ?? []).filter(document => document.quality.relationGap).length;

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
