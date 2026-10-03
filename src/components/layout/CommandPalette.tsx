import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  CornerDownLeft,
  FileText,
  Mail,
  Moon,
  Search,
  Sparkles,
  Sun,
  ArrowRight,
} from 'lucide-react';
import { navLinks, profile, socials } from '@/data/site';
import { projects } from '@/data/projects';
import { suggestedPrompts } from '@/data/agent';
import { askAgent, PALETTE_EVENT } from '@/lib/agent';
import { getTheme, subscribe, toggleTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';
import type { IconType } from '@/types';

interface Command {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: IconType;
  keywords?: string;
  action: () => void;
}

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

function close() {
  window.dispatchEvent(new CustomEvent('vsv:close-palette'));
}

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Static commands that don't depend on React state. */
const baseCommands: Command[] = [
  ...navLinks.map<Command>((link, index) => ({
    id: `nav-${link.id}`,
    group: 'Jump to',
    label: link.label,
    hint: `#${link.id}`,
    icon: ArrowRight,
    keywords: `${link.id} section ${index}`,
    action: () => goTo(link.id),
  })),
  ...projects.slice(0, 10).map<Command>((project) => ({
    id: `project-${project.title}`,
    group: 'Work',
    label: project.title,
    hint: project.category,
    icon: FileText,
    keywords: `${project.stack.join(' ')} ${project.description}`,
    action: () => goTo('projects'),
  })),
  ...socials.map<Command>((social) => ({
    id: `social-${social.label}`,
    group: 'Links',
    label: social.label,
    hint: social.href.replace(/^mailto:/, '').replace(/^https?:\/\/(www\.)?/, ''),
    icon: social.icon,
    action: () => {
      if (social.href.startsWith('http')) window.open(social.href, '_blank', 'noopener,noreferrer');
      else window.location.href = social.href;
    },
  })),
  {
    id: 'resume',
    group: 'Links',
    label: 'Download résumé (PDF)',
    hint: 'resume.pdf',
    icon: FileText,
    action: () => window.open(resumeHref, '_blank', 'noopener,noreferrer'),
  },
  {
    id: 'copy-email',
    group: 'Actions',
    label: 'Copy email address',
    hint: profile.email,
    icon: Mail,
    keywords: 'mail contact copy',
    action: () => {
      navigator.clipboard?.writeText(profile.email).catch(() => undefined);
    },
  },
];

function score(command: Command, query: string): number {
  if (!query) return 1;
  const haystack = `${command.label} ${command.keywords ?? ''} ${command.group}`.toLowerCase();
  const label = command.label.toLowerCase();
  if (label.startsWith(query)) return 4;
  if (label.includes(query)) return 3;
  if (haystack.includes(query)) return 2;
  // multi-word: every token must appear somewhere
  const tokens = query.split(/\s+/).filter(Boolean);
  return tokens.length > 1 && tokens.every((token) => haystack.includes(token)) ? 1 : 0;
}

/**
 * ⌘K / Ctrl+K command palette: jump anywhere, open any link, ask the AI console
 * a question — all keyboard driven, no dependencies.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark' as const);

  // Global shortcuts: ⌘K / Ctrl+K toggles, "/" opens, Esc closes.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        // Clear the previous search on both open and close so the palette always starts fresh.
        setQuery('');
        setActiveIndex(0);
        setOpen((value) => !value);
        return;
      }
      if (event.key === '/' && !typing) {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') close();
    };

    const onOpen = () => setOpen(true);
    const onClose = () => {
      setQuery('');
      setActiveIndex(0);
      setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener(PALETTE_EVENT, onOpen);
    window.addEventListener('vsv:close-palette', onClose);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener(PALETTE_EVENT, onOpen);
      window.removeEventListener('vsv:close-palette', onClose);
    };
  }, []);

  // Lock the page behind the overlay and focus the input when opening.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focus = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previous;
      cancelAnimationFrame(focus);
    };
  }, [open]);

  const commands = useMemo<Command[]>(() => {
    const themeCommand: Command = {
      id: 'toggle-theme',
      group: 'Actions',
      label: theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme',
      icon: theme === 'light' ? Moon : Sun,
      keywords: 'theme dark light mode appearance',
      action: toggleTheme,
    };
    return [...baseCommands, themeCommand];
  }, [theme]);

  const groups = useMemo(() => {
    const normalised = query.trim().toLowerCase();
    const matches = commands
      .map((command) => ({ command, value: score(command, normalised) }))
      .filter((entry) => entry.value > 0)
      .sort((a, b) => b.value - a.value)
      .map((entry) => entry.command);

    const result: { group: string; items: Command[] }[] = [];
    const askItems: Command[] = [];

    if (normalised.length > 2) {
      askItems.push({
        id: 'ask-agent',
        group: 'Ask the agent',
        label: `Ask the AI console: “${query.trim()}”`,
        hint: 'runs in your browser',
        icon: Sparkles,
        action: () => {
          goTo('agent');
          window.setTimeout(() => askAgent(query.trim()), 420);
        },
      });
    } else {
      suggestedPrompts.slice(0, 3).forEach((prompt) => {
        askItems.push({
          id: `ask-${prompt}`,
          group: 'Ask the agent',
          label: prompt,
          hint: 'demo query',
          icon: Sparkles,
          action: () => {
            goTo('agent');
            window.setTimeout(() => askAgent(prompt), 420);
          },
        });
      });
    }

    result.push({ group: 'Ask the agent', items: askItems });

    const byGroup = new Map<string, Command[]>();
    for (const command of matches) {
      const bucket = byGroup.get(command.group) ?? [];
      if (bucket.length < 6) bucket.push(command);
      byGroup.set(command.group, bucket);
    }
    for (const [group, items] of byGroup) result.push({ group, items });
    return result.filter((entry) => entry.items.length > 0);
  }, [commands, query]);

  const flat = useMemo(() => groups.flatMap((group) => group.items), [groups]);
  const safeIndex = Math.min(activeIndex, Math.max(flat.length - 1, 0));

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((value) => (value + 1) % Math.max(flat.length, 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((value) => (value - 1 + flat.length) % Math.max(flat.length, 1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const command = flat[safeIndex];
      if (command) {
        command.action();
        close();
      }
    }
  }

  let cursor = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button
            type="button"
            aria-label="Close command palette"
            onClick={close}
            className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative w-full max-w-xl overflow-hidden rounded-2xl border border-line-strong shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search sections, projects, links — or ask the agent…"
                aria-label="Search commands"
                className="w-full bg-transparent font-mono text-sm text-fg outline-none placeholder:text-faint"
              />
              <kbd className="hidden shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint sm:block">esc</kbd>
            </div>

            <div className="scrollbar-thin max-h-[58vh] overflow-y-auto p-2">
              {groups.map((group) => (
                <div key={group.group} className="mb-1">
                  <p className="px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{group.group}</p>
                  <ul>
                    {group.items.map((command) => {
                      cursor += 1;
                      const index = cursor;
                      const isActive = index === safeIndex;
                      return (
                        <li key={command.id}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => {
                              command.action();
                              close();
                            }}
                            className={cn(
                              'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors',
                              isActive ? 'bg-surface-hover text-fg' : 'text-muted hover:bg-surface',
                            )}
                          >
                            <command.icon className="h-4 w-4 shrink-0 text-brand-cyan" strokeWidth={1.75} />
                            <span className="min-w-0 flex-1 truncate text-sm">{command.label}</span>
                            {command.hint && (
                              <span className="hidden max-w-[14rem] truncate font-mono text-[11px] text-faint sm:block">{command.hint}</span>
                            )}
                            {isActive && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-faint" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {flat.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-faint">
                  No matches. Try “impact”, “ABL”, “awards” or “contact”.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-line px-4 py-2 font-mono text-[10px] text-faint">
              <span>↑↓ navigate · ↵ select · esc close</span>
              <span className="inline-flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" /> {profile.initials} palette v1
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
