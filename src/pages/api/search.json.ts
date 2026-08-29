import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

function cleanInline(value: string): string {
  return value.replace(/\\\[/g, '[').replace(/\\\]/g, ']').replace(/\s+/g, ' ').replace(/^[-|: ]+|[-|: ]+$/g, '').trim();
}

function explicitDocumentTitle(raw: string): string {
  const labels = ['SUBJEKT', 'TITEL', 'BETREFF', 'THEMA'];
  for (const label of labels) {
    const patterns = [
      new RegExp(`^\\s*\\*\\*${label}\\*\\*\\s*[:：]?\\s+(.+?)\\s*$`, 'im'),
      new RegExp(`^\\s*${label}\\s*[:：]\\s*(.+?)\\s*$`, 'im'),
      new RegExp(`^\\s*\\|?\\s*\\*\\*${label}\\*\\*\\s*\\|?\\s*(.*?)\\s*\\|?\\s*$`, 'im'),
      new RegExp(`^\\s*\\*\\*${label}\\*\\*\\s{2,}(.+?)\\s*$`, 'im'),
    ];
    for (const pattern of patterns) {
      const match = raw.match(pattern);
      if (!match?.[1]) continue;
      const candidate = cleanInline(match[1]);
      if (candidate.length >= 4 && candidate.length <= 180 && !/^OTA-[A-Z]+-/i.test(candidate)) return candidate;
    }
  }
  return '';
}

function searchableBody(raw: string): string {
  return raw
    .replace(/^---[\s\S]*?---\s*/m, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~|\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 20000);
}

export const GET: APIRoute = async () => {
  const docs = await getCollection('documents');

  const index = docs.map(doc => {
    const restricted = (doc.data.accessLevel ?? 0) > 0 || doc.data.redacted;
    const rawBody = typeof (doc as any).body === 'string' ? (doc as any).body : '';
    const canonicalTitle = doc.data.title ?? doc.data.signature;
    const genericTitle = canonicalTitle === doc.data.signature || /^OTA-[A-Z]+-[A-Z0-9-]+$/i.test(canonicalTitle);
    const extractedTitle = genericTitle ? explicitDocumentTitle(rawBody) : '';
    const displayTitle = extractedTitle || canonicalTitle;

    return {
      sig: doc.data.signature,
      title: restricted ? '[GESPERRT]' : canonicalTitle,
      displayTitle: restricted ? '[GESPERRT]' : displayTitle,
      titleEvidence: restricted ? null : (extractedTitle ? 'explicit-labeled-field' : 'canonical'),
      summary: restricted ? null : (doc.data.summary ?? ''),
      text: restricted ? '' : searchableBody(rawBody),
      series: doc.data.series,
      year: doc.data.year,
      lang: doc.data.language,
      epist: restricted ? [] : (doc.data.epistemicStatus ?? []),
      tags: restricted ? [] : (doc.data.tags ?? []),
      domains: restricted ? [] : ((doc.data.knowledge?.domains ?? []).map((d: any) => d.id)),
      access: doc.data.accessLevel ?? 0,
      status: doc.data.status,
      slug: doc.id,
      restricted,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300'
    }
  });
};
