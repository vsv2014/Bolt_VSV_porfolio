import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';
import { Scramble } from './Scramble';

interface SectionProps {
  id: string;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  /** Word inside a string title rendered in the serif-italic gradient accent. */
  accent?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Editorial section header: an oversized outlined numeral, a hairline rule, a
 * mono eyebrow, then a large display title (word-split when it is a plain
 * string) and a readable description.
 */
export function Section({ id, index, eyebrow, title, accent, description, children, className }: SectionProps) {
  const hasHeader = Boolean(eyebrow || title);

  return (
    <section id={id} className={cn('relative py-24 md:py-32', className)}>
      <Container>
        {hasHeader && (
          <Reveal className="mb-12 md:mb-16" variant="rise">
            <div className="flex items-end gap-4 sm:gap-6">
              {index && (
                <span
                  className="text-stroke hidden font-display text-5xl leading-none font-bold tracking-tighter select-none sm:block sm:text-6xl md:text-7xl"
                  aria-hidden
                >
                  {index}
                </span>
              )}
              <div className="min-w-0 flex-1 pb-1.5 sm:pb-2">
                <div className="flex items-center gap-3">
                  {eyebrow && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-lime">
                      <Scramble text={eyebrow} />
                    </p>
                  )}
                  <span className="hairline flex-1" aria-hidden />
                </div>
                {title && (
                  <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] font-semibold tracking-tight text-fg sm:text-5xl lg:text-[3.4rem]">
                    {typeof title === 'string' ? (
                      <SplitWords
                        text={title}
                        wordClassName={(word) =>
                          accent && word.replace(/[^a-z]/gi, '').toLowerCase() === accent.toLowerCase()
                            ? 'font-serif text-[1.12em] font-normal italic text-gradient'
                            : undefined
                        }
                      />
                    ) : (
                      title
                    )}
                  </h2>
                )}
              </div>
            </div>
            {description && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
