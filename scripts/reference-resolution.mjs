// Shared OTA reference-target resolution.
//
// build-reference-index.mjs and annotate-relation-targets.mjs both classify
// referenced OTA signatures against the canonical document set. Keeping the
// classification in one place guarantees that both pipelines agree on
// whether a target exists and how a non-exact reference resolves (language
// shorthands, base identifiers, temporal variants), instead of maintaining
// two conflicting resolution schemes.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const REGISTRY_PATH = path.join(ROOT, 'src', 'data', 'reference-registry.json');
const baseIdPattern = /^OTA-[A-Z]+-[0-9]{4}$/;

export function baseSignature(signature) {
  const parts = signature.split('-');
  if (parts.length <= 3) return signature;
  const language = parts.at(-1);
  const temporal = language && /^(?:DE|EN|MULTI)$/.test(language) ? parts.at(-2) : parts.at(-1);
  const hasLanguage = /^(?:DE|EN|MULTI)$/.test(language ?? '');
  if (/^(?:[0-9]{4}|[0-9]+BCE)$/.test(temporal ?? '')) {
    return parts.slice(0, hasLanguage ? -2 : -1).join('-');
  }
  return signature;
}

export function baseId(signature) {
  return signature.match(/^(OTA-[A-Z]+-[0-9]{4})(?:-|$)/)?.[1] ?? null;
}

export function stripLanguage(signature) {
  return signature.replace(/-(?:DE|EN|MULTI)$/, '');
}

export function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

export function frontmatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---/);
  return m?.[1] ?? '';
}

export function field(fm, key) {
  const re = new RegExp(`^${key}:\\s*(.+)$`, 'm');
  const m = fm.match(re);
  if (!m) return undefined;
  return m[1].trim().replace(/^['"]|['"]$/g, '');
}

// Indexes every canonical document in src/content/documents plus the manual
// reference registry of known-but-not-yet-present targets.
export function loadReferenceRegistry() {
  const files = walk(DOCS_DIR).filter(file => /\.(md|mdx)$/i.test(file));
  const documents = [];
  const bySignature = new Map();
  const byBaseSignature = new Map();
  const byBaseId = new Map();

  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    const fm = frontmatter(text);
    const signature = field(fm, 'signature');
    if (!signature) continue;
    const doc = {
      signature,
      title: field(fm, 'title') ?? signature,
      summary: field(fm, 'summary') ?? '',
      file: path.relative(ROOT, file).replaceAll('\\', '/'),
    };
    documents.push(doc);
    bySignature.set(signature, doc);

    const base = baseSignature(signature);
    if (!byBaseSignature.has(base)) byBaseSignature.set(base, []);
    byBaseSignature.get(base).push(doc);

    const id = baseId(signature);
    if (id) {
      if (!byBaseId.has(id)) byBaseId.set(id, []);
      byBaseId.get(id).push(doc);
    }
  }

  let registry = [];
  if (fs.existsSync(REGISTRY_PATH)) registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  const registryByTarget = new Map(registry.map(entry => [entry.target, entry]));

  return { documents, bySignature, byBaseSignature, byBaseId, registryByTarget };
}

// Classifies a referenced target against the canonical document set. The
// returned classification is the single authoritative label used by both the
// reference index and the archive quality report.
export function classifyTarget(registry, target) {
  const { bySignature, byBaseSignature, byBaseId } = registry;
  const reg = registry.registryByTarget.get(target);

  if (bySignature.has(target)) {
    return { classification: 'existing', candidates: [], resolvedTarget: target };
  }
  if (reg?.status === 'planned') return { classification: 'planned', candidates: [], resolvedTarget: null };
  if (reg?.status === 'uncertain') return { classification: 'uncertain', candidates: [], resolvedTarget: null };

  // A reference that is otherwise a complete signature but omits only the
  // language suffix can be resolved mechanically when exactly one concrete
  // language version exists. This is deliberately dynamic: if a second
  // language version appears later, the shorthand becomes ambiguous again.
  const languageExtensions = ['DE', 'EN', 'MULTI']
    .map(language => bySignature.get(`${target}-${language}`))
    .filter(Boolean);
  if (languageExtensions.length === 1) {
    return {
      classification: 'shorthand-resolved',
      candidates: languageExtensions,
      resolvedTarget: languageExtensions[0].signature,
    };
  }
  if (languageExtensions.length > 1) {
    return {
      classification: 'language-ambiguous',
      candidates: languageExtensions,
      resolvedTarget: null,
    };
  }

  // Bare OTA series/number references (for example OTA-SCI-0045) are common
  // in the archive. Match them against the stable series/number prefix, not
  // against temporal suffix stripping: the four-digit series number itself
  // must never be mistaken for a year.
  if (baseIdPattern.test(target)) {
    const idCandidates = (byBaseId.get(target) ?? [])
      .filter(doc => doc.signature !== target)
      .map(doc => ({ signature: doc.signature, title: doc.title, file: doc.file }));
    if (idCandidates.length === 1) {
      return {
        classification: 'base-id-resolved',
        candidates: idCandidates,
        resolvedTarget: idCandidates[0].signature,
      };
    }
    if (idCandidates.length > 1) {
      return {
        classification: 'base-id-ambiguous',
        candidates: idCandidates,
        resolvedTarget: null,
      };
    }
  }

  const candidates = (byBaseSignature.get(baseSignature(target)) ?? [])
    .filter(doc => doc.signature !== target)
    .map(doc => ({ signature: doc.signature, title: doc.title, file: doc.file }));

  if (candidates.length) {
    const sameTemporalDifferentLanguage = candidates.filter(candidate =>
      stripLanguage(candidate.signature) === stripLanguage(target)
    );
    if (sameTemporalDifferentLanguage.length) {
      return {
        classification: 'translation-missing',
        candidates,
        resolvedTarget: null,
      };
    }

    const targetHasTemporalMarker = /-(?:[0-9]{4}|[0-9]+BCE)-(?:DE|EN|MULTI)$/.test(target);
    if (targetHasTemporalMarker) {
      return {
        classification: candidates.length === 1 ? 'temporal-mismatch' : 'temporal-ambiguous',
        candidates,
        resolvedTarget: null,
      };
    }

    return {
      classification: candidates.length === 1 ? 'underspecified' : 'ambiguous-base',
      candidates,
      resolvedTarget: null,
    };
  }

  return { classification: 'missing', candidates: [], resolvedTarget: null };
}

// Status vocabulary shared with the reference index. Resolved statuses mean
// the target resolves to a canonical document; everything else keeps the
// registry status (planned/uncertain) or falls back to 'unresolved'.
export function referenceStatus(classification, reg) {
  if (classification === 'existing') return 'resolved';
  if (classification === 'base-id-resolved') return 'resolved-base-id';
  if (classification === 'shorthand-resolved') return 'resolved-shorthand';
  return reg?.status ?? 'unresolved';
}
