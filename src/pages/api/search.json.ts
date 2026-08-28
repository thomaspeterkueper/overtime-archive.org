import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const docs = await getCollection('documents');

  const index = docs.map(doc => {
    const restricted = (doc.data.accessLevel ?? 0) > 0 || doc.data.redacted;

    return {
      sig: doc.data.signature,
      title: restricted ? '[GESPERRT]' : (doc.data.title ?? doc.data.signature),
      summary: restricted ? null : (doc.data.summary ?? ''),
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
    headers: { 'Content-Type': 'application/json' }
  });
};
