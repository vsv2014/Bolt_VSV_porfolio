import { Section, Card, Reveal, Tag } from '@/components/ui';
import { skillGroups } from '@/data/skills';

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="Tools I work with"
      description="A broad toolkit across product engineering, data and machine learning."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={(i % 3) * 0.06}>
            <Card interactive className="h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-brand-cyan">
                  <group.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <h3 className="font-medium text-fg">{group.name}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
