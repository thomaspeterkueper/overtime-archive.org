import { defineCollection, z } from 'astro:content';

const relationType = z.enum([
  'references',
  'basis',
  'prerequisite',
  'extends',
  'contradicts',
  'supersedes',
  'clarifies',
  'related',
]);

const documentRelation = z.object({
  target: z.string(),
  relation: relationType.default('related'),
  context: z.string().optional(),
  // Only use these fallback fields when the target document is not yet present.
  title: z.string().optional(),
  description: z.string().optional(),
  descriptionStatus: z.enum(['explicit', 'reconstructed', 'planned', 'uncertain']).optional(),
});

const documents = defineCollection({
  type: 'content',
  schema: z.object({
    signature: z.string(),           // OTA-SCI-0001-2026-DE
    title: z.string(),
    series: z.string(),              // SCI, TEC, FND, BIO, etc.
    seriesNumber: z.number(),
    year: z.number(),
    language: z.enum(['DE', 'EN']),
    version: z.string().default('v1.0'),
    status: z.enum(['AKTIV', 'ARCHIVIERT', 'ENTWURF', 'GESPERRT']).default('AKTIV'),
    accessLevel: z.number().min(0).max(4).default(0), // 0=public, 4=restricted
    epistemicStatus: z.array(z.enum(['R', 'T', 'H', 'S', 'F', 'R-Anker', 'I', 'OFFEN'])),
    universe: z.array(z.string()).optional(), // NOXIA, NALGAE, HSS, etc.
    tags: z.array(z.string()).optional(),
    // Backward compatible: old documents may still contain simple signature strings.
    relatedDocuments: z.array(z.union([z.string(), documentRelation])).optional(),
    summary: z.string(),             // 1-2 sentence abstract
    lastAccessed: z.string().optional(),
    redacted: z.boolean().default(false),
    redactedReason: z.string().optional(),
    knowledge: z.object({
      domains: z.array(z.object({
        id: z.string(),
        level: z.string().optional(),
      })).optional(),
    }).optional(),
  }),
});

export const collections = { documents };
