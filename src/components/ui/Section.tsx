import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, index, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 md:py-32', className)}>
      <Container>
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            {eyebrow && (
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-brand-cyan">
                {index && <span className="text-faint">{index}</span>}
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-4 leading-relaxed text-muted">{description}</p>}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
