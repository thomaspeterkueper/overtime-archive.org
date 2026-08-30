import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
  title: z.string().optional(),
  description: z.string().optional(),
  descriptionStatus: z.enum(['explicit', 'reconstructed', 'planned', 'uncertain']).optional(),
});

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
    accessLevel: z.number().int().min(0).max(5).default(0),
    epistemicStatus: z.array(z.string()),
    universe: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    relatedDocuments: z.array(z.union([z.string(), documentRelation])).optional(),
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
    // Dossier-specific fields for OTA-TEC technical object dossiers
    // (docs/ota-tec-object-dossier-schema.md). Declared additively so astro
    // build validates their structure and exposes them on entry.data;
    // presence is a dossier-authoring (governance) requirement, not
    // machine-required, because legacy TEC documents predate the schema.
    objectClass: z.enum(['device', 'building', 'vehicle', 'plant', 'infrastructure']).optional(),
    time: z.object({
      context: z.string(),
    }).optional(),
    externalRefs: z.object({
      noxiaObjects: z.array(z.string()),
      noxiaUnlocks: z.array(z.string()),
      ssfLearningModules: z.array(z.string()),
    }).optional(),
    entities: z.object({
      mentions: z.array(z.string()),
    }).optional(),
    relations: z.object({
      requires: z.array(z.string()),
      teaches: z.array(z.string()),
      expands: z.array(z.string()),
      cites: z.array(z.string()),
    }).optional(),
    sync: z.object({
      graphVersion: z.string(),
      graphUpdated: z.string(),
      exportedFrom: z.string(),
    }).optional(),
  }),
});

export const collections = { documents };
