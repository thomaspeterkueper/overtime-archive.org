import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'src', 'data', 'archive-quality.generated.json');
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');

if (!fs.existsSync(REPORT)) {
  throw new Error(`Missing archive-quality report: ${REPORT}`);
}

const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
let changed = 0;

for (const doc of report.documents ?? []) {
  if (doc?.titleReview?.tier !== 'A') continue;
  const candidate = doc.titleReview.candidate;
  if (!candidate || doc?.candidates?.title?.safe !== true) continue;

  const filePath = path.join(DOCS_DIR, doc.file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const fm = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!fm) throw new Error(`Missing frontmatter: ${doc.file}`);

  const titleMatch = fm[1].match(/^title:\s*(.+?)\s*$/m);
  if (!titleMatch) throw new Error(`Missing title field: ${doc.file}`);

  const current = titleMatch[1].trim().replace(/^['"]|['"]$/g, '');
  const signature = doc.signature;
  const isGeneric = !current || current === signature || /^OTA-[A-Z]+-[A-Z0-9-]+$/i.test(current);
  if (!isGeneric) continue;

  const replacement = `title: ${JSON.stringify(candidate)}`;
  const nextFrontmatter = fm[1].replace(/^title:\s*.+?\s*$/m, replacement);
  const next = raw.replace(fm[1], nextFrontmatter);
  if (next === raw) continue;

  fs.writeFileSync(filePath, next, 'utf8');
  changed += 1;
  console.log(`${signature}: ${current} -> ${candidate}`);
}

console.log(`Applied ${changed} safe canonical title change(s).`);
