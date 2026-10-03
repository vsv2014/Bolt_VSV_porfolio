import { agentDocs } from '@/data/agent';
import type { AgentDoc, AgentSource, TraceStep } from '@/types';

/** Returned when a query matches nothing in the index. */
const fallbackDoc: AgentDoc = {
  id: 'out-of-scope',
  source: 'index#no-match',
  keywords: [],
  answer:
    'That one is outside my index — I only answer from Santhosh’s résumé, project and publication data. Try asking about his AI systems, Artemis, the impact numbers, his awards, or how to reach him.',
  tool: { name: 'refuse_out_of_scope', args: 'reason="no_match"', detail: 'no document crossed the similarity floor' },
};

const SIMILARITY_FLOOR = 0.62;

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .split(/[^a-z0-9+.#]+/)
    .filter((token) => token.length > 1);
}

function keywordScore(query: string, tokens: string[], keywords: string[]): number {
  let score = 0;
  for (const keyword of keywords) {
    if (query.includes(keyword)) {
      // Longer phrases are stronger evidence than single tokens.
      score += 1 + keyword.split(/\s+/).length * 0.5;
      continue;
    }
    const hit = tokens.some((token) => token.length > 3 && (keyword.startsWith(token) || token.startsWith(keyword)));
    if (hit) score += 0.35;
  }
  return score;
}

export interface Retrieval {
  doc: AgentDoc;
  sources: AgentSource[];
  /** Top-hit similarity in the 0–1 range, as displayed on the source chips. */
  similarity: number;
  steps: TraceStep[];
}

/**
 * A tiny lexical retriever — deterministic, dependency-free and entirely
 * client-side. It exists to make the console feel like a real RAG pipeline
 * without shipping an API key or a network call.
 */
export function retrieve(query: string): Retrieval {
  const normalised = ` ${query.toLowerCase().trim()} `;
  const tokens = tokenize(query);

  const ranked = agentDocs
    .map((doc) => ({ doc, score: keywordScore(normalised, tokens, doc.keywords) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  const matched = ranked.filter((entry) => entry.score > 0).slice(0, 3);
  const best = top && top.score > 0 ? top : null;
  const similarity = best ? Math.min(0.985, 0.8 + Math.min(best.score, 4) * 0.045) : SIMILARITY_FLOOR;

  const sources: AgentSource[] = matched.map((entry, index) => ({
    id: entry.doc.id,
    score: Number(Math.max(SIMILARITY_FLOOR, similarity - index * 0.06 - 0.01).toFixed(3)),
  }));

  const doc = best?.doc ?? fallbackDoc;

  return { doc, sources: sources.length ? sources : [{ id: doc.id, score: similarity }], similarity, steps: buildTrace(doc, similarity) };
}

function buildTrace(doc: AgentDoc, similarity: number): TraceStep[] {
  const words = doc.answer.split(/\s+/).length;
  return [
    {
      kind: 'embed',
      label: 'embed(query)',
      detail: 'text-embedding-3-large · 1536d · local',
      ms: 360,
    },
    {
      kind: 'retrieve',
      label: 'vector_search(index="vsv_profile", k=3)',
      detail: `cosine similarity · top hit ${similarity.toFixed(3)}`,
      ms: 520,
    },
    {
      kind: 'tool',
      label: `${doc.tool.name}(${doc.tool.args})`,
      detail: doc.tool.detail,
      ms: 460,
    },
    {
      kind: 'compose',
      label: 'compose_answer(grounded=true)',
      detail: `${words} tokens · streaming`,
      ms: 300,
    },
  ];
}

/** Resolve a doc id back to its human citation. */
export function sourceLabel(id: string): string {
  return agentDocs.find((doc) => doc.id === id)?.source ?? 'index#no-match';
}

export const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/* ------------------------------------------------------------------ *
 * Cross-component events (kept dependency-free so the palette, the
 * navbar and the console never need to share React state).
 * ------------------------------------------------------------------ */

/** Open the command palette. */
export const PALETTE_EVENT = 'vsv:open-palette';
export const openPalette = () => window.dispatchEvent(new CustomEvent(PALETTE_EVENT));

/** Ask the in-page agent a question (optionally scrolling its section into view). */
export const ASK_AGENT_EVENT = 'vsv:ask-agent';
export const askAgent = (query: string) => window.dispatchEvent(new CustomEvent(ASK_AGENT_EVENT, { detail: { query } }));
