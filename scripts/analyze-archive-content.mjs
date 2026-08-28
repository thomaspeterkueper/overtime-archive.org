import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const OUT_FILE = path.join(ROOT, 'src', 'data', 'archive-quality.generated.json');

const files = fs.readdirSync(DOCS_DIR)
  .filter(name => /\.(?:md|mdx)$/i.test(name))
  .sort((a, b) => a.localeCompare(b));

function splitFrontmatter(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  return match ? { frontmatter: match[1], body: raw.slice(match[0].length) } : { frontmatter: '', body: raw };
}

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return '';
  const value = match[1].trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function listBlock(frontmatter, key) {
  const lines = frontmatter.split(/\r?\n/);
  const start = lines.findIndex(line => new RegExp(`^${key}:\\s*`).test(line));
  if (start < 0) return [];
  const first = lines[start].replace(new RegExp(`^${key}:\\s*`), '').trim();
  if (first.startsWith('[') && first.endsWith(']')) {
    return first.slice(1, -1).split(',').map(v => v.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
  }
  const values = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^[A-Za-z][A-Za-z0-9_]*:\s*/.test(line)) break;
    const item = line.match(/^\s*-\s*(?:target:\s*)?["']?([^"']+?)["']?\s*$/);
    if (item) values.push(item[1].trim());
    const target = line.match(/^\s+target:\s*["']?([^"']+?)["']?\s*$/);
    if (target) values.push(target[1].trim());
  }
  return values;
}

function normalizeLine(value) {
  return value.replace(/\\\[/g, '[').replace(/\\\]/g, ']').replace(/\s+/g, ' ').trim();
}

function extractLabeled(body, labels) {
  for (const label of labels) {
    const patterns = [
      new RegExp(`^\\s*\\*\\*${label}\\*\\*\\s+(.*)$`, 'im'),
      new RegExp(`^\\s*${label}\\s*[:：]\\s*(.*)$`, 'im'),
      new RegExp(`^\\s*\\|?\\s*\\*\\*${label}\\*\\*\\s*\\|?\\s*(.*?)\\s*\\|?\\s*$`, 'im'),
    ];
    for (const pattern of patterns) {
      const match = body.match(pattern);
      if (match?.[1]) {
        const value = normalizeLine(match[1]).replace(/^[-|]+|[-|]+$/g, '').trim();
        if (value && value.length < 240) return value;
      }
    }
  }
  return '';
}

function cleanBodyForWords(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[`*_>#|=~\\[\](){}]/g, ' ')
    .replace(/\bOTA-[A-Z]+-[A-Z0-9-]+\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function words(text) {
  return text ? text.split(/\s+/).filter(Boolean) : [];
}

function isGenericSummary(summary, signature) {
  const s = summary.trim();
  if (!s) return true;
  if (s === signature) return true;
  if (/^(?:Wissenschaftliches|Technisches|Historisches|Narratives|Biografisches|Foundational) Dokument\b/i.test(s)) return true;
  if (/^OTA-[A-Z]+-/i.test(s)) return true;
  return words(s).length < 9;
}

function isGenericTitle(title, signature) {
  const t = title.trim();
  return !t || t === signature || /^OTA-[A-Z]+-[A-Z0-9-]+$/i.test(t);
}

function substantiveParagraph(body) {
  const candidates = body
    .split(/\r?\n\s*\r?\n/)
    .map(p => normalizeLine(p))
    .filter(p => p.length >= 90)
    .filter(p => !/^[-| ]+$/.test(p))
    .filter(p => !/^THE OVERTIME ARCHIVE$/i.test(p))
    .filter(p => !/^OTA-[A-Z]+-/i.test(p))
    .filter(p => !/^\*\*(?:DOC-ID|KLASSIFIZIERUNG|SUBJEKT|AUTOR|DATUM|STATUS|EPISTEMOLOGIE|QUERVERWEISE)\*\*/i.test(p));
  const first = candidates[0] ?? '';
  return first.length > 360 ? `${first.slice(0, 357).trim()}…` : first;
}

const documents = files.map(file => {
  const fullPath = path.join(DOCS_DIR, file);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { frontmatter, body } = splitFrontmatter(raw);

  const signature = scalar(frontmatter, 'signature') || file.replace(/\.(?:md|mdx)$/i, '');
  const title = scalar(frontmatter, 'title');
  const summary = scalar(frontmatter, 'summary');
  const series = scalar(frontmatter, 'series');
  const year = scalar(frontmatter, 'year');
  const language = scalar(frontmatter, 'language');
  const related = listBlock(frontmatter, 'relatedDocuments');

  const bodyWordCount = words(cleanBodyForWords(body)).length;
  const headings = (body.match(/^#{1,4}\s+.+$/gm) ?? []).length;
  const images = (body.match(/!\[[^\]]*\]\([^)]*\)/g) ?? []).length + (body.match(/<img\b/gi) ?? []).length;
  const tables = (body.match(/^\s*\|.*\|\s*$/gm) ?? []).length > 1 ? 1 : 0;
  const allRefs = [...body.matchAll(/\bOTA-[A-Z]+-[A-Z0-9-]+\b/g)].map(m => m[0]);
  const referencedTargets = [...new Set(allRefs.filter(ref => ref !== signature))];

  const extractedTitle = extractLabeled(body, ['SUBJEKT', 'TITEL', 'BETREFF', 'THEMA']);
  const extractedAuthor = extractLabeled(body, ['AUTOR', 'AUTORIN', 'VERFASSER', 'VERFASSERIN']);
  const extractedClassification = extractLabeled(body, ['KLASSIFIZIERUNG', 'DOKUMENTTYP', 'TYP']);
  const genericTitle = isGenericTitle(title, signature);
  const genericSummary = isGenericSummary(summary, signature);
  const relationGap = related.length === 0 && referencedTargets.length > 0;

  let substance = 'FRAGMENT';
  if (bodyWordCount >= 1200 || (bodyWordCount >= 700 && headings >= 4)) substance = 'SUBSTANZIELL';
  else if (bodyWordCount >= 350) substance = 'KURZ';

  const flags = [];
  if (genericTitle) flags.push('GENERIC_TITLE');
  if (genericSummary) flags.push('GENERIC_SUMMARY');
  if (relationGap) flags.push('RELATION_GAP');
  if (images === 0) flags.push('NO_VISUAL');
  if (headings === 0) flags.push('NO_HEADINGS');
  if (bodyWordCount < 350) flags.push('LOW_SUBSTANCE');

  let priority = 0;
  if (genericTitle) priority += 4;
  if (genericSummary) priority += 3;
  if (relationGap) priority += 2;
  if (bodyWordCount < 350) priority += 4;
  else if (bodyWordCount < 700) priority += 2;
  if (headings === 0) priority += 1;

  return {
    file,
    signature,
    series,
    year,
    language,
    canonical: { title, summary, relatedCount: related.length },
    extracted: {
      title: extractedTitle || null,
      author: extractedAuthor || null,
      classification: extractedClassification || null,
      excerpt: substantiveParagraph(body) || null,
    },
    metrics: {
      words: bodyWordCount,
      headings,
      images,
      tables,
      inlineReferenceTargets: referencedTargets.length,
    },
    quality: {
      substance,
      genericTitle,
      genericSummary,
      relationGap,
      flags,
      priority,
    },
  };
});

documents.sort((a, b) => b.quality.priority - a.quality.priority || a.signature.localeCompare(b.signature));

const summary = {
  documents: documents.length,
  substantial: documents.filter(d => d.quality.substance === 'SUBSTANZIELL').length,
  short: documents.filter(d => d.quality.substance === 'KURZ').length,
  fragments: documents.filter(d => d.quality.substance === 'FRAGMENT').length,
  genericTitles: documents.filter(d => d.quality.genericTitle).length,
  genericSummaries: documents.filter(d => d.quality.genericSummary).length,
  relationGaps: documents.filter(d => d.quality.relationGap).length,
  withoutVisuals: documents.filter(d => d.metrics.images === 0).length,
};

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, `${JSON.stringify({ generatedAt: new Date().toISOString(), summary, documents }, null, 2)}\n`, 'utf8');

console.log(`Archive quality: ${summary.documents} documents`);
console.log(`  substantial: ${summary.substantial}`);
console.log(`  short: ${summary.short}`);
console.log(`  fragments: ${summary.fragments}`);
console.log(`  generic titles: ${summary.genericTitles}`);
console.log(`  generic summaries: ${summary.genericSummaries}`);
console.log(`  relation gaps: ${summary.relationGaps}`);
