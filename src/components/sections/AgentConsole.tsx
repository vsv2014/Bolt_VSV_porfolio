import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import {
  Binary,
  CircleStop,
  CornerDownLeft,
  Database,
  Layers,
  Search,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import { Section, Reveal } from '@/components/ui';
import { agentDocs, suggestedPrompts } from '@/data/agent';
import { ASK_AGENT_EVENT, retrieve, sleep, sourceLabel } from '@/lib/agent';
import { cn } from '@/lib/utils';
import type { AgentSource, TraceKind, TraceStep } from '@/types';

interface Message {
  id: number;
  role: 'user' | 'agent';
  text: string;
  /** Number of words revealed so far (agent messages only). */
  visible?: number;
  trace?: TraceStep[];
  sources?: AgentSource[];
  similarity?: number;
  pending?: boolean;
}

const stageIcons: Record<TraceKind, typeof Search> = {
  embed: Binary,
  retrieve: Search,
  tool: Wrench,
  compose: Sparkles,
};

const pipeline: { kind: TraceKind; name: string; detail: string }[] = [
  { kind: 'embed', name: 'embed', detail: 'query → 1536-d vector' },
  { kind: 'retrieve', name: 'retrieve', detail: 'cosine top-k over the index' },
  { kind: 'tool', name: 'tool', detail: 'structured fact lookup' },
  { kind: 'compose', name: 'compose', detail: 'grounded answer, streamed' },
];

let messageId = 0;
const nextId = () => ++messageId;

function patch(messages: Message[], id: number, update: (message: Message) => Message): Message[] {
  return messages.map((message) => (message.id === id ? update(message) : message));
}

/** Finalise any message still streaming (used when a new query interrupts or the user stops). */
function finalise(messages: Message[]): Message[] {
  return messages.map((message) =>
    message.pending ? { ...message, pending: false, visible: message.text.split(' ').length } : message,
  );
}

/**
 * "Ask my agent" — a fully client-side simulation of a RAG agent: embed →
 * retrieve → tool call → streamed grounded answer, with citations and latency.
 * No API key, no network request, nothing leaves the browser.
 */
export function AgentConsole() {
  const reduceMotion = useReducedMotion();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const generation = useRef(0);
  const booted = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(sectionRef, { once: true, margin: '0px 0px -30% 0px' });

  const run = useCallback(
    async (raw: string) => {
      const query = raw.trim();
      if (!query) return;

      const id = ++generation.current;
      const answerId = nextId();
      const { doc, sources, similarity, steps } = retrieve(query);
      const words = doc.answer.split(' ');

      setBusy(true);
      setInput('');
      setMessages((previous) => [
        ...finalise(previous),
        { id: nextId(), role: 'user', text: query },
        { id: answerId, role: 'agent', text: doc.answer, visible: 0, trace: [], sources, similarity, pending: true },
      ]);

      for (const step of steps) {
        if (!reduceMotion) await sleep(step.ms);
        if (id !== generation.current) return;
        setMessages((previous) => patch(previous, answerId, (message) => ({ ...message, trace: [...(message.trace ?? []), step] })));
      }

      const batch = reduceMotion ? words.length : 3;
      for (let count = batch; count < words.length + batch; count += batch) {
        if (!reduceMotion) await sleep(34 + Math.random() * 42);
        if (id !== generation.current) return;
        const revealed = Math.min(count, words.length);
        setMessages((previous) => patch(previous, answerId, (message) => ({ ...message, visible: revealed })));
      }

      if (id !== generation.current) return;
      setMessages((previous) => patch(previous, answerId, (message) => ({ ...message, visible: words.length, pending: false })));
      setBusy(false);
    },
    [reduceMotion],
  );

  // Opening the console runs a demo query so the pipeline is never empty.
  useEffect(() => {
    if (inView && !booted.current) {
      booted.current = true;
      void run(suggestedPrompts[0]);
    }
  }, [inView, run]);

  // The palette can dispatch a question here from anywhere on the page.
  useEffect(() => {
    const handler = (event: Event) => {
      const query = (event as CustomEvent<{ query?: string }>).detail?.query;
      if (!query) return;
      booted.current = true;
      void run(query);
    };
    window.addEventListener(ASK_AGENT_EVENT, handler);
    return () => window.removeEventListener(ASK_AGENT_EVENT, handler);
  }, [run]);

  // Keep the newest message in view while streaming.
  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages]);

  const stop = () => {
    generation.current += 1;
    setBusy(false);
    setMessages((previous) => finalise(previous));
  };

  const lastAgent = useMemo(() => [...messages].reverse().find((message) => message.role === 'agent'), [messages]);
  const completed = useMemo(() => (lastAgent?.trace ?? []).map((step) => step.kind), [lastAgent]);

  return (
    <Section
      id="agent"
      index="07"
      eyebrow="Ask my agent"
      title={
        <>
          Don’t read the résumé — <span className="text-gradient-animated">interrogate it</span>
        </>
      }
      description="A working demo of the pattern I ship: embed, retrieve, call a tool, then stream a grounded answer with citations. It runs entirely in your browser — no API key, no backend, nothing leaves this tab."
    >
      <span ref={sectionRef} className="block h-px w-px" aria-hidden />

      <Reveal>
        <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
          {/* Console */}
          <div className="glass overflow-hidden rounded-2xl border border-line-strong">
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-brand-pink/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-lime/70" />
              </span>
              <p className="flex-1 truncate font-mono text-[11px] text-faint">
                vsv-agent · rag-console <span className="hidden sm:inline">· in-browser simulation</span>
              </p>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider',
                  busy ? 'border-brand-cyan/40 text-brand-cyan' : 'border-line text-faint',
                )}
              >
                <span className={cn('h-1.5 w-1.5 rounded-full', busy ? 'animate-pulse bg-brand-cyan' : 'bg-brand-lime')} />
                {busy ? 'thinking' : 'ready'}
              </span>
            </div>

            <div ref={scrollRef} className="scrollbar-thin h-[27rem] space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
              {messages.length === 0 && (
                <p className="font-mono text-xs text-faint">
                  <Terminal className="mr-2 inline h-3.5 w-3.5" />
                  Booting index: {agentDocs.length} documents, 1536-d embeddings… ask anything.
                </p>
              )}

              <AnimatePresence initial={false}>
                {messages.map((message) =>
                  message.role === 'user' ? (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-end"
                    >
                      <p className="max-w-[85%] rounded-2xl rounded-br-sm border border-line bg-surface px-4 py-2.5 text-sm text-fg">
                        {message.text}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      {/* Reasoning trace */}
                      {message.trace && message.trace.length > 0 && (
                        <ul className="space-y-1.5 border-l border-line pl-3">
                          {message.trace.map((step, index) => {
                            const Icon = stageIcons[step.kind];
                            const isLast = index === message.trace!.length - 1;
                            return (
                              <motion.li
                                key={`${message.id}-${step.kind}-${index}`}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.22 }}
                                className="flex items-baseline gap-2 font-mono text-[11px] leading-relaxed"
                              >
                                <Icon className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-brand-purple" strokeWidth={2} />
                                <span className="text-brand-cyan">{step.label}</span>
                                <span className="truncate text-faint">{step.detail}</span>
                                {isLast && message.pending && (
                                  <span className="ml-auto h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brand-cyan" />
                                )}
                              </motion.li>
                            );
                          })}
                        </ul>
                      )}

                      {/* Answer */}
                      <div className="rounded-2xl rounded-tl-sm border border-line bg-bg-soft/70 px-4 py-3.5">
                        {(message.visible ?? 0) === 0 ? (
                          <span className="font-mono text-[11px] text-faint">streaming…</span>
                        ) : (
                          <p className="text-sm leading-relaxed text-fg">
                            {message.text.split(' ').slice(0, message.visible).join(' ')}
                            {message.pending && <span className="ml-0.5 inline-block h-3.5 w-[6px] animate-blink bg-brand-cyan align-middle" />}
                          </p>
                        )}

                        {!message.pending && message.sources && (
                          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-line pt-3">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-faint">sources</span>
                            {message.sources.map((source) => (
                              <span
                                key={source.id}
                                title={`similarity ${source.score}`}
                                className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-0.5 font-mono text-[10px] text-muted"
                              >
                                <Database className="h-3 w-3 text-brand-cyan" />
                                {sourceLabel(source.id)}
                                <span className="text-faint">{source.score.toFixed(2)}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ),
                )}
              </AnimatePresence>
            </div>

            {/* Prompt chips */}
            <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
              {suggestedPrompts.slice(0, 4).map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={busy}
                  onClick={() => void run(prompt)}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted transition-colors hover:border-line-strong hover:text-fg disabled:opacity-40"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Composer */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void run(input);
              }}
              className="flex items-center gap-2 border-t border-line bg-bg/40 px-3 py-2.5"
            >
              <CornerDownLeft className="h-4 w-4 shrink-0 text-faint" />
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={busy ? 'streaming… press stop or ask again' : 'Ask about his AI work, impact numbers, awards, availability…'}
                aria-label="Ask the agent"
                className="w-full bg-transparent font-mono text-xs text-fg outline-none placeholder:text-faint"
              />
              {busy ? (
                <button
                  type="button"
                  onClick={stop}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:text-fg"
                >
                  <CircleStop className="h-3.5 w-3.5" /> stop
                </button>
              ) : (
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-fg px-3.5 py-1.5 font-mono text-[11px] font-medium text-bg transition-opacity hover:opacity-90"
                >
                  run →
                </button>
              )}
            </form>
          </div>

          {/* Pipeline + index panel */}
          <div className="space-y-4">
            <div className="glass rounded-2xl border border-line p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">agent pipeline</p>
              <ol className="mt-4 space-y-3">
                {pipeline.map((stage) => {
                  const done = completed.includes(stage.kind);
                  const active = lastAgent?.pending && lastAgent.trace?.at(-1)?.kind === stage.kind;
                  const Icon = stageIcons[stage.kind];
                  return (
                    <li key={stage.kind} className="flex items-start gap-3">
                      <span
                        className={cn(
                          'relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors',
                          active
                            ? 'border-brand-cyan/60 text-brand-cyan'
                            : done
                              ? 'border-line-strong text-fg'
                              : 'border-line text-faint',
                        )}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                        {active && <span className="absolute inset-0 animate-pulse-ring rounded-lg border border-brand-cyan" aria-hidden />}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs text-fg">{stage.name}()</span>
                        <span className="block text-[11px] leading-relaxed text-faint">{stage.detail}</span>
                      </span>
                      <span className="ml-auto shrink-0 font-mono text-[10px] text-faint">{done ? '200 OK' : '—'}</span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="glass rounded-2xl border border-line p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">index</p>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { label: 'documents', value: String(agentDocs.length) },
                  { label: 'dimensions', value: '1536' },
                  { label: 'retriever', value: 'lexical + cosine' },
                  { label: 'egress', value: 'none · local' },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">{item.label}</dt>
                    <dd className="mt-0.5 font-display text-sm text-fg">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex items-start gap-2 border-t border-line pt-4 text-[11px] leading-relaxed text-muted">
                <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-purple" />
                The same embed → retrieve → tool → compose loop I build in production with real LLMs, MCP tools and
                durable execution — here it is scripted so it costs nothing to run.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
