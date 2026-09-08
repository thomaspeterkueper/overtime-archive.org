import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const OUT_FILE = path.join(ROOT, 'src', 'data', 'epistemic-quality.generated.json');
const MARKERS = ['R', 'H', 'T', 'S', 'I', 'F', 'W'];
const CANONICAL = ['R', 'H', 'T', 'S', 'I', 'F'];

function splitFrontmatter(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  return match ? { frontmatter: match[1], body: raw.slice(match[0].length) } : { frontmatter: '', body: raw };
}

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return '';
  const value = match[1].trim();
  return value.replace(/^['"]|['"]$/g, '');
}

function list(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*\\[(.*?)\\]\\s*$`, 'm'));
  if (!match) return [];
  return match[1].split(',').map(value => value.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
}

function normalize(body) {
  return body.replace(/\\\[/g, '[').replace(/\\\]/g, ']');
}

function counts(body) {
  const result = Object.fromEntries(MARKERS.map(marker => [marker, 0]));
  for (const match of body.matchAll(/\[([RHTSIFW])\]/g)) result[match[1]] += 1;
  return result;
}

function legends(body) {
  const result = [];
  const lines = body.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].replace(/\s+/g, ' ').trim();
    const markers = [...line.matchAll(/\[([RHTSIFW])\]/g)].map(match => match[1]);
    if (!markers.length) continue;
    if (!/(?:=|Real|Empir|Hypoth|Theoret|Spekul|Fikt|Fiction|Interpret|Werk|Welt|World|Framework|Archiv|Quelle|Marker|Legende|Legend|belegt|etabliert|Hayashi)/i.test(line)) continue;
    result.push({ line: index + 1, markers: [...new Set(markers)], text: line.slice(0, 360) });
  }
  return result.slice(0, 30);
}

const files = fs.readdirSync(DOCS_DIR).filter(file => /\.(?:md|mdx)$/i.test(file)).sort();
const documents = [];

for (const file of files) {
  const raw = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8');
  const { frontmatter, body: rawBody } = splitFrontmatter(raw);
  const body = normalize(rawBody);
  const signature = scalar(frontmatter, 'signature') || file.replace(/\.(?:md|mdx)$/i, '');
  const series = scalar(frontmatter, 'series');
  const frontmatterMarkers = list(frontmatter, 'epistemicStatus');
  const markerCounts = counts(body);
  const bodyMarkers = MARKERS.filter(marker => markerCounts[marker] > 0);
  const missingInFrontmatter = CANONICAL.filter(marker => markerCounts[marker] > 0 && !frontmatterMarkers.includes(marker));
  const legendLines = legends(body);
  const flags = [];

  if (missingInFrontmatter.length) flags.push('BODY_MARKERS_MISSING_IN_FRONTMATTER');
  if (frontmatterMarkers.includes('W') || markerCounts.W > 0) flags.push('WORK_SETTING_W_PRESENT');
  if ((frontmatterMarkers.includes('R') || markerCounts.R > 0) && (frontmatterMarkers.includes('F') || markerCounts.F > 0)) flags.push('MIXED_REAL_FICTION');
  if (legendLines.length) flags.push('LOCAL_MARKER_LEGEND');
  if (legendLines.some(item => item.markers.includes('H') && /Hayashi/i.test(item.text))) flags.push('H_HAS_LOCAL_NON_HYPOTHESIS_MEANING');

  const priority = (['SCI', 'FND'].includes(series) ? 4 : 0) + missingInFrontmatter.length * 3 + (flags.includes('WORK_SETTING_W_PRESENT') ? 2 : 0) + (flags.includes('MIXED_REAL_FICTION') ? 2 : 0) + (legendLines.length ? 1 : 0);

  documents.push({ file, signature, series, frontmatterMarkers, bodyMarkers, markerCounts, missingInFrontmatter, legendLines, flags, priority });
}

documents.sort((a, b) => b.priority - a.priority || a.signature.localeCompare(b.signature));

const markerSummary = Object.fromEntries(MARKERS.map(marker => [marker, {
  frontmatterDocuments: documents.filter(document => document.frontmatterMarkers.includes(marker)).length,
  bodyDocuments: documents.filter(document => document.bodyMarkers.includes(marker)).length,
  locallyDefinedDocuments: documents.filter(document => document.legendLines.some(item => item.markers.includes(marker))).length,
}]));

const summary = {
  documents: documents.length,
  sciDocuments: documents.filter(document => document.series === 'SCI').length,
  fndDocuments: documents.filter(document => document.series === 'FND').length,
  documentsWithWorkSettingW: documents.filter(document => document.flags.includes('WORK_SETTING_W_PRESENT')).length,
  documentsWithBodyMarkersMissingInFrontmatter: documents.filter(document => document.missingInFrontmatter.length).length,
  sciFndWithBodyMarkersMissingInFrontmatter: documents.filter(document => ['SCI', 'FND'].includes(document.series) && document.missingInFrontmatter.length).length,
  documentsWithMixedRealFiction: documents.filter(document => document.flags.includes('MIXED_REAL_FICTION')).length,
  documentsWithLocalLegend: documents.filter(document => document.flags.includes('LOCAL_MARKER_LEGEND')).length,
  documentsWhereHHasLocalNonHypothesisMeaning: documents.filter(document => document.flags.includes('H_HAS_LOCAL_NON_HYPOTHESIS_MEANING')).length,
  markerSummary,
};

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, `${JSON.stringify({ generatedAt: new Date().toISOString(), summary, documents }, null, 2)}\n`, 'utf8');

console.log(`Epistemic audit: ${summary.documents} documents`);
console.log(`SCI/FND: ${summary.sciDocuments}/${summary.fndDocuments}`);
console.log(`Werk-Setzung W present: ${summary.documentsWithWorkSettingW}`);
console.log(`Body/frontmatter mismatches: ${summary.documentsWithBodyMarkersMissingInFrontmatter}`);
console.log(`SCI/FND mismatches: ${summary.sciFndWithBodyMarkersMissingInFrontmatter}`);
console.log(`Mixed R/F: ${summary.documentsWithMixedRealFiction}`);
console.log(`Local legends: ${summary.documentsWithLocalLegend}`);
