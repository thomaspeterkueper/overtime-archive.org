import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const docs = await getCollection('documents');

  const index = docs.map(doc => ({
    sig: doc.data.signature,
    title: doc.data.title ?? doc.data.signature,
    summary: doc.data.summary ?? '',
    series: doc.data.series,
    year: doc.data.year,
    lang: doc.data.language,
    epist: doc.data.epistemicStatus ?? [],
    tags: doc.data.tags ?? [],
    domains: (doc.data.knowledge?.domains ?? []).map((d: any) => d.id),
    access: doc.data.accessLevel ?? 0,
    status: doc.data.status,
    slug: doc.id,
    redacted: doc.data.redacted ?? false,
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' }
  });
};
