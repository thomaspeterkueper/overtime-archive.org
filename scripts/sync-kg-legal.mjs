import { mkdir, readFile, writeFile } from 'node:fs/promises';

const KG_REPOSITORY = 'thomaspeterkueper/kueper-knowledge-graph';
const KG_REF = 'main';
const KG_RAW = `https://raw.githubusercontent.com/${KG_REPOSITORY}/${KG_REF}/`;
const KG_API = `https://api.github.com/repos/${KG_REPOSITORY}/contents/`;
const KG_TOKEN = process.env.KG_SYNC_TOKEN?.trim();
const SNAPSHOT_FILE = 'src/data/legal.snapshot.json';

const IDS = {
  imprint: 'DOC:KUE:LEGAL-IMPRINT-DE',
  privacy: 'DOC:KUE:LEGAL-PRIVACY-DE',
  terms: 'DOC:KUE:LEGAL-TERMS-DE',
};

function apiPath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

async function fetchText(path) {
  if (KG_TOKEN) {
    const response = await fetch(`${KG_API}${apiPath(path)}?ref=${encodeURIComponent(KG_REF)}`, {
      headers: {
        Accept: 'application/vnd.github.raw+json',
        Authorization: `Bearer ${KG_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    if (!response.ok) throw new Error(`authenticated KG legal sync failed for ${path}: ${response.status}`);
    return response.text();
  }

  const response = await fetch(`${KG_RAW}${path}`);
  if (!response.ok) throw new Error(`unauthenticated KG legal sync failed for ${path}: ${response.status}`);
  return response.text();
}

function extractStatus(markdown) {
  const match = markdown.match(/^\*\*Status:\*\*\s*`([^`]+)`/m);
  return match?.[1] ?? 'unknown';
}

function interpolate(text, imprint) {
  return text
    .replaceAll('{{ impressum.updated }}', imprint.updated)
    .replaceAll('{{ impressum.responsible.name }}', imprint.responsible.name)
    .replaceAll('{{ impressum.responsible.address }}', imprint.responsible.address)
    .replaceAll('{{ impressum.responsible.email }}', imprint.responsible.email);
}

async function buildRemotePayload() {
  const refs = JSON.parse(await fetchText('exports/document-references-0.1.json'));
  const imprint = JSON.parse(await fetchText('registry/legal/impressum-master.json'));

  const byId = new Map(refs.records.map((record) => [record.id, record]));
  for (const id of Object.values(IDS)) {
    if (!byId.has(id)) throw new Error(`KG legal document reference missing: ${id}`);
  }

  const privacyRef = byId.get(IDS.privacy);
  const termsRef = byId.get(IDS.terms);
  const imprintRef = byId.get(IDS.imprint);
  const privacyRaw = await fetchText(privacyRef.sourcePath);
  const termsRaw = await fetchText(termsRef.sourcePath);

  return {
    sourceSystem: 'SYS:KUEPER:knowledge-graph',
    sourceRepository: KG_REPOSITORY,
    generatedAt: new Date().toISOString(),
    hostingVerified: 'Vercel',
    imprint: {
      id: IDS.imprint,
      status: imprintRef.status,
      updated: imprint.updated,
      responsible: imprint.responsible,
    },
    privacy: {
      id: IDS.privacy,
      status: extractStatus(privacyRaw),
      markdown: interpolate(privacyRaw, imprint),
    },
    terms: {
      id: IDS.terms,
      status: extractStatus(termsRaw),
      markdown: interpolate(termsRaw, imprint),
    },
  };
}

async function loadSnapshotPayload() {
  const snapshot = JSON.parse(await readFile(SNAPSHOT_FILE, 'utf8'));
  if (snapshot?.schema !== 'OTA-KG-LEGAL-SNAPSHOT-0.1' || !snapshot?.payload) {
    throw new Error(`Invalid KG legal fallback snapshot: ${SNAPSHOT_FILE}`);
  }
  return {
    ...snapshot.payload,
    generatedAt: new Date().toISOString(),
  };
}

let payload;
let mode = KG_TOKEN ? 'authenticated KG' : 'public KG';
try {
  payload = await buildRemotePayload();
} catch (error) {
  console.warn(`[legal:sync] ${error.message}`);
  console.warn(`[legal:sync] Falling back to reviewed snapshot ${SNAPSHOT_FILE}.`);
  payload = await loadSnapshotPayload();
  mode = 'versioned snapshot';
}

await mkdir('src/data', { recursive: true });
await writeFile('src/data/legal.generated.json', `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(`KG legal sync (${mode}): ${IDS.imprint}, ${IDS.privacy}, ${IDS.terms}`);
