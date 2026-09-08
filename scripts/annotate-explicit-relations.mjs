import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const REPORT_FILE = path.join(ROOT, 'src', 'data', 'archive-quality.generated.json');
const OTA_ID = /\bOTA-[A-Z]+-[A-Z0-9-]+\b/g;

function splitFrontmatter(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  return match
    ? { frontmatter: match[1], body: raw.slice(match[0].length) }
    : { frontmatter: '', body: raw };
}

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return '';
  const value = match[1].trim();
  return ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
    ? value.slice(1, -1)
    : value;
}

function unique(values) {
  return [...new Set(values)];
}

function signatures(text) {
  return unique([...text.matchAll(OTA_ID)].map(match => match[0]));
}

function explicitCandidates(body, ownSignature) {
  const candidates = new Map();
  const lines = body.split(/\r?\n/);

  function add(target, evidence, suggestedRelation, context) {
    if (!target || target === ownSignature) return;
    const rank = evidence === 'explicit-basis-label' ? 3 : evidence === 'explicit-related-section' ? 2 : 1;
    const current = candidates.get(target);
    if (!current || rank > current.rank) {
      candidates.set(target, {
        target,
        evidence,
        safe: true,
        suggestedRelation,
        context,
        rank,
      });
    }
  }

  for (const line of lines) {
    const labelMatch = line.match(/^\s*(?:\*\*)?(Quelle|Basis|Vollständige Dokumentation|Source|Primary source)(?:\*\*)?\s*:\s*(.*)$/i);
    if (!labelMatch) continue;
    const [, label, rest] = labelMatch;
    const relation = /basis|quelle|source/i.test(label) ? 'basis' : 'references';
    for (const target of signatures(rest)) {
      add(target, 'explicit-basis-label', relation, `${label.trim()}: ${target}`);
    }
  }

  let inRelatedSection = false;
  for (const line of lines) {
    const normalized = line.replace(/[*_#]/g, '').trim();
    if (/^(Verwandte Dokumente|Related Documents|Related documents|Querverweise|Cross-references)$/i.test(normalized)) {
      inRelatedSection = true;
      continue;
    }
    if (!inRelatedSection) continue;

    if (/^━━━━━━━━|^={3,}|^-{8,}/.test(normalized)) {
      if (normalized) continue;
    }
    if (/^(Revisionsverlauf|Revision History|ENDE DOKUMENT|END DOCUMENT|Anhang|Appendix)\b/i.test(normalized)) {
      inRelatedSection = false;
      continue;
    }

    for (const target of signatures(line)) {
      add(target, 'explicit-related-section', 'related', `Explicitly listed under related/cross-reference section: ${target}`);
    }
  }

  return [...candidates.values()].map(({ rank, ...candidate }) => candidate);
}

if (!fs.existsSync(REPORT_FILE)) {
  throw new Error(`Quality report not found: ${REPORT_FILE}`);
}

const report = JSON.parse(fs.readFileSync(REPORT_FILE, 'utf8'));
const reportBySignature = new Map(report.documents.map(document => [document.signature, document]));
const knownSignatures = new Set(report.documents.map(document => document.signature));

let explicitCandidatesTotal = 0;
let safeCandidatesTotal = 0;
let documentsWithExplicitCandidates = 0;

for (const file of fs.readdirSync(DOCS_DIR).filter(name => /\.(?:md|mdx)$/i.test(name))) {
  const raw = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8');
  const { frontmatter, body } = splitFrontmatter(raw);
  const signature = scalar(frontmatter, 'signature') || file.replace(/\.(?:md|mdx)$/i, '');
  const document = reportBySignature.get(signature);
  if (!document) continue;

  const candidates = explicitCandidates(body, signature).filter(candidate => knownSignatures.has(candidate.target));
  if (!candidates.length) continue;

  const byTarget = new Map(document.candidates.relations.map(candidate => [candidate.target, candidate]));
  let applied = 0;

  for (const candidate of candidates) {
    const existing = byTarget.get(candidate.target);
    if (!existing) continue;
    Object.assign(existing, candidate);
    applied += 1;
  }

  if (applied) {
    documentsWithExplicitCandidates += 1;
    explicitCandidatesTotal += applied;
  }
}

for (const document of report.documents) {
  safeCandidatesTotal += document.candidates.relations.filter(candidate => candidate.safe).length;
}

report.summary.explicitRelationCandidates = explicitCandidatesTotal;
report.summary.documentsWithExplicitRelationCandidates = documentsWithExplicitCandidates;
report.summary.safeRelationCandidates = safeCandidatesTotal;
report.relationAnalysis = {
  mode: 'explicit-evidence-only',
  safeEvidence: ['explicit-basis-label', 'explicit-related-section'],
  note: 'safe=true means safe for editorial review/curation, not automatic canonical mutation',
};

fs.writeFileSync(REPORT_FILE, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(`Explicit relation candidates: ${explicitCandidatesTotal}`);
console.log(`Documents with explicit relation candidates: ${documentsWithExplicitCandidates}`);
console.log(`Safe relation candidates: ${safeCandidatesTotal}`);
