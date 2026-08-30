import { mkdir, writeFile } from 'node:fs/promises';

const KG_RAW = 'https://raw.githubusercontent.com/thomaspeterkueper/kueper-knowledge-graph/main/';
const IDS = {
  imprint: 'DOC:KUE:LEGAL-IMPRINT-DE',
  privacy: 'DOC:KUE:LEGAL-PRIVACY-DE',
  terms: 'DOC:KUE:LEGAL-TERMS-DE',
};

async function fetchText(path) {
  const response = await fetch(`${KG_RAW}${path}`);
  if (!response.ok) throw new Error(`KG legal sync failed for ${path}: ${response.status}`);
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

const payload = {
  sourceSystem: 'SYS:KUEPER:knowledge-graph',
  sourceRepository: 'thomaspeterkueper/kueper-knowledge-graph',
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

await mkdir('src/data', { recursive: true });
await writeFile('src/data/legal.generated.json', `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(`KG legal sync: ${IDS.imprint}, ${IDS.privacy}, ${IDS.terms}`);
