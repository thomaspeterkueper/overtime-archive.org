import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const contentRoot = path.join(root, 'src', 'content', 'documents');
const reportPath = path.join(root, 'src', 'data', 'missing-media.generated.json');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function isExternal(ref) {
  return /^(?:[a-z]+:|\/\/|#)/i.test(ref);
}

function resolveLocalRef(file, ref) {
  const clean = ref.split('#')[0].split('?')[0];
  if (!clean || isExternal(clean) || clean.startsWith('/')) return null;
  return path.resolve(path.dirname(file), decodeURIComponent(clean));
}

const files = walk(contentRoot).filter(file => /\.mdx?$/.test(file));
const originals = new Map();
const missing = [];

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  let text = original;

  // Markdown images: ![alt](relative/path.ext "optional title")
  text = text.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g, (full, alt, ref) => {
    const resolved = resolveLocalRef(file, ref);
    if (!resolved || fs.existsSync(resolved)) return full;

    missing.push({
      source: path.relative(root, file).replaceAll('\\', '/'),
      reference: ref,
      alt: alt || null,
      status: 'missing',
    });

    const label = alt ? `Bild: ${alt}` : 'Bildreferenz';
    return `> **${label}** — Quelldatei derzeit nicht im Repository: \`${ref}\``;
  });

  // HTML images with relative src values.
  text = text.replace(/<img\b([^>]*?)\bsrc=["']([^"']+)["']([^>]*)>/gi, (full, before, ref) => {
    const resolved = resolveLocalRef(file, ref);
    if (!resolved || fs.existsSync(resolved)) return full;

    missing.push({
      source: path.relative(root, file).replaceAll('\\', '/'),
      reference: ref,
      alt: null,
      status: 'missing',
    });

    return `<span class="missing-media-reference">[Bildquelle derzeit nicht im Repository: ${ref}]</span>`;
  });

  if (text !== original) {
    originals.set(file, original);
    fs.writeFileSync(file, text, 'utf8');
  }
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify({
  generatedAt: new Date().toISOString(),
  count: missing.length,
  references: missing,
}, null, 2) + '\n', 'utf8');

if (missing.length) {
  console.warn(`Missing local media references detected: ${missing.length}.`);
  for (const item of missing) console.warn(`  - ${item.source} -> ${item.reference}`);
  console.warn('The references are preserved as explicit placeholders for this build and recorded in src/data/missing-media.generated.json.');
}

let result;
try {
  const astroBin = path.join(root, 'node_modules', '.bin', process.platform === 'win32' ? 'astro.cmd' : 'astro');
  result = spawnSync(astroBin, ['build'], { stdio: 'inherit', cwd: root });
} finally {
  for (const [file, original] of originals) fs.writeFileSync(file, original, 'utf8');
}

if (!result || result.error) {
  if (result?.error) console.error(result.error);
  process.exit(1);
}
process.exit(result.status ?? 1);
