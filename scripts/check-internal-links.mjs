import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const src = path.join(root, 'src');

function walk(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full, predicate);
    return predicate(full) ? [full] : [];
  });
}

const sourceFiles = walk(src, file => /\.(astro|ts|tsx|js|mjs)$/.test(file));
const legacyRefs = [];
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');

  // The legacy problem concerns Astro content collection entries, where doc.id
  // must be used instead of doc.slug. Client-side <script> blocks consume the
  // search API, whose DTO intentionally exposes a `slug` property populated
  // from doc.id; those occurrences are valid and must not fail CI.
  const serverSideText = file.endsWith('.astro')
    ? text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    : text;

  if (serverSideText.includes('doc.slug')) legacyRefs.push(path.relative(root, file));
}
if (legacyRefs.length) {
  console.error('Legacy Astro content identifier doc.slug found in server-rendered source:');
  legacyRefs.forEach(file => console.error(`  - ${file}`));
  process.exit(1);
}

if (!fs.existsSync(dist)) {
  console.error('dist/ is missing. Run the Astro build before checking links.');
  process.exit(1);
}

const htmlFiles = walk(dist, file => file.endsWith('.html'));
const broken = [];
const checked = new Set();

function existsForPathname(pathname) {
  const decoded = decodeURIComponent(pathname);
  const clean = decoded.replace(/^\/+/, '').replace(/\/$/, '');
  if (!clean) return fs.existsSync(path.join(dist, 'index.html'));

  const direct = path.join(dist, clean);
  const candidates = [
    direct,
    `${direct}.html`,
    path.join(direct, 'index.html'),
  ];
  return candidates.some(candidate => fs.existsSync(candidate));
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');

  // Only validate href attributes that exist in the rendered DOM markup.
  // Client-side scripts may contain HTML template strings such as
  // href="/dokument/${doc.slug}"; these are resolved at runtime from API data
  // and are not literal build-time links. Leaving script contents in the scan
  // produces false positives such as /dokument/${e.slug}.
  const renderedMarkup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(renderedMarkup))) {
    const href = match[1].trim();
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const pathname = href.split('#')[0].split('?')[0];
    if (!pathname || pathname.startsWith('/api/')) continue;

    const key = `${path.relative(dist, file)} -> ${pathname}`;
    if (checked.has(key)) continue;
    checked.add(key);

    if (!existsForPathname(pathname)) broken.push(key);
  }
}

if (broken.length) {
  console.error(`Broken internal links found (${broken.length}):`);
  broken.forEach(item => console.error(`  - ${item}`));
  process.exit(1);
}

console.log(`Internal link check passed: ${htmlFiles.length} HTML files checked.`);
