import { ArrowUpRight, FileText } from 'lucide-react';
import { Section, Card, Reveal } from '@/components/ui';
import { publications } from '@/data/publications';

export function Research() {
  return (
    <Section
      id="research"
      index="06"
      eyebrow="Research"
      title="Published work"
      description="Data-driven environmental science from IIIT Hyderabad's Lab for Spatial Informatics."
    >
      <div className="grid gap-4">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.06}>
            <Card interactive>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-brand-cyan">
                  <FileText className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-medium leading-snug text-fg">{pub.title}</h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    {pub.venue} · {pub.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{pub.description}</p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                    >
                      Read paper <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
