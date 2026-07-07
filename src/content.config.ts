import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const documents = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/documents' }),
  schema: z.object({
    signature: z.string(),
    title: z.string(),
    series: z.string(),
    seriesNumber: z.number(),
    year: z.number(),
    language: z.enum(['DE', 'EN']),
    version: z.string().default('v1.0'),
    status: z.enum(['AKTIV', 'ARCHIVIERT', 'ENTWURF', 'GESPERRT']).default('AKTIV'),
    accessLevel: z.number().min(0).max(4).default(0),
    epistemicStatus: z.array(z.string()),
    universe: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    relatedDocuments: z.array(z.string()).optional(),
    summary: z.string(),
    kg: z.object({
      schema: z.string().optional(),
      master: z.string().optional(),
      documentId: z.string().optional(),
      graphId: z.string().optional(),
      system: z.string().optional(),
      sourceOfTruth: z.boolean().optional(),
    }).optional(),
    knowledge: z.object({
      domains: z.array(z.object({
        id: z.string(),
        level: z.string().optional(),
        purpose: z.string().optional(),
      })).optional(),
    }).optional(),
    lastAccessed: z.string().optional(),
    redacted: z.boolean().default(false),
    redactedReason: z.string().optional(),
  }),
});

export const collections = { documents };
