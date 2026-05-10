import { defineCollection, z } from 'astro:content';

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
    relatedDocuments: z.array(z.string()).optional(), // array of signatures
    summary: z.string(),             // 1-2 sentence abstract
    lastAccessed: z.string().optional(),
    redacted: z.boolean().default(false),
    redactedReason: z.string().optional(),
  }),
});

export const collections = { documents };
