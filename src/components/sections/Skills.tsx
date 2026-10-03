import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Card, Reveal, Section, Tag } from '@/components/ui';
import { skillGroups } from '@/data/skills';

/** A tag that highlights the matching slice of the skill name. */
function SkillTag({ skill, query }: { skill: string; query: string }) {
  const index = query ? skill.toLowerCase().indexOf(query) : -1;
  if (index === -1) return <Tag>{skill}</Tag>;

  return (
    <span className="inline-flex items-center rounded-md border border-brand-cyan/40 bg-brand-cyan/5 px-2.5 py-1 font-mono text-[11px] leading-none text-muted">
      {skill.slice(0, index)}
      <span className="text-fg">{skill.slice(index, index + query.length)}</span>
      {skill.slice(index + query.length)}
    </span>
  );
}

export function Skills() {
  const [query, setQuery] = useState('');
  const normalised = query.trim().toLowerCase();
  const total = useMemo(() => skillGroups.reduce((count, group) => count + group.skills.length, 0), []);

  const groups = useMemo(() => {
    if (!normalised) return skillGroups;
    return skillGroups
      .map((group) => ({
        ...group,
        skills: group.skills.filter((skill) => skill.toLowerCase().includes(normalised)),
      }))
      .filter((group) => group.skills.length > 0 || group.name.toLowerCase().includes(normalised));
  }, [normalised]);

  const matches = groups.reduce((count, group) => count + group.skills.length, 0);

  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="A stack that spans the whole system"
      accent="whole"
      description={`${total}+ technologies across ${skillGroups.length} groups — from LLM orchestration and durable backends to the pixels in front of them. Search it instead of scrolling.`}
    >
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter skills — try “kafka”, “mcp”, “angular”…"
            aria-label="Filter skills"
            className="w-full rounded-lg border border-line bg-surface py-2.5 pl-10 pr-10 font-mono text-xs text-fg outline-none transition-colors placeholder:text-faint focus:border-line-strong"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear skill filter"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-faint transition-colors hover:text-fg"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <p className="font-mono text-[11px] text-faint" aria-live="polite">
          {normalised ? `${matches} match${matches === 1 ? '' : 'es'} for “${query.trim()}”` : `${total} technologies indexed`}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <Reveal key={group.name} delay={(index % 3) * 0.06}>
            <Card interactive tilt className="h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-brand-cyan">
                  <group.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <h3 className="font-medium text-fg">{group.name}</h3>
                <span className="ml-auto font-mono text-[10px] text-faint">{group.skills.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillTag key={skill} skill={skill} query={normalised} />
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {groups.length === 0 && (
        <Card className="text-center">
          <p className="text-sm text-muted">
            No skill matches “{query.trim()}” — but if it is adjacent to the stack above, it is usually a week of work,
            not a blocker.
          </p>
        </Card>
      )}
    </Section>
  );
}
