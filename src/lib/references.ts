import type { CollectionEntry } from 'astro:content';
import registry from '../data/reference-registry.json';

export type RelationType =
  | 'references'
  | 'basis'
  | 'prerequisite'
  | 'extends'
  | 'contradicts'
  | 'supersedes'
  | 'clarifies'
  | 'related';

export type ReferenceStatus = 'resolved' | 'unresolved' | 'planned' | 'uncertain';
export type DescriptionStatus = 'explicit' | 'reconstructed' | 'planned' | 'uncertain';

export interface RelationInput {
  target: string;
  relation?: RelationType;
  context?: string;
  title?: string;
  description?: string;
  descriptionStatus?: DescriptionStatus;
}

export interface RegistryEntry {
  target: string;
  title?: string;
  description?: string;
  status?: Exclude<ReferenceStatus, 'resolved'>;
  descriptionStatus?: DescriptionStatus;
  evidence?: Array<{
    source?: string;
    context?: string;
  }>;
}

export interface ResolvedReference {
  target: string;
  signature: string;
  title: string;
  description: string;
  relation: RelationType;
  context?: string;
  status: ReferenceStatus;
  descriptionStatus?: DescriptionStatus;
  slug?: string;
  evidence?: RegistryEntry['evidence'];
}

const registryEntries = registry as RegistryEntry[];

export function normalizeRelation(value: string | RelationInput): RelationInput {
  return typeof value === 'string'
    ? { target: value, relation: 'related' }
    : { relation: 'related', ...value };
}

export function resolveDocumentReferences(
  relations: Array<string | RelationInput> | undefined,
  allDocs: CollectionEntry<'documents'>[],
): ResolvedReference[] {
  return (relations ?? []).map(raw => {
    const rel = normalizeRelation(raw);
    const found = allDocs.find(doc => doc.data.signature === rel.target);

    if (found) {
      return {
        target: rel.target,
        signature: found.data.signature,
        title: found.data.title,
        description: found.data.summary,
        relation: rel.relation ?? 'related',
        context: rel.context,
        status: 'resolved' as const,
        slug: found.slug,
      };
    }

    const registered = registryEntries.find(entry => entry.target === rel.target);
    const description =
      rel.description ??
      registered?.description ??
      rel.context ??
      'Zu diesem referenzierten Dokument liegt derzeit noch keine belastbare Kurzbeschreibung im Archiv vor.';

    return {
      target: rel.target,
      signature: rel.target,
      title: rel.title ?? registered?.title ?? rel.target,
      description,
      relation: rel.relation ?? 'related',
      context: rel.context,
      status: registered?.status ?? 'unresolved',
      descriptionStatus: rel.descriptionStatus ?? registered?.descriptionStatus,
      evidence: registered?.evidence,
    };
  });
}
