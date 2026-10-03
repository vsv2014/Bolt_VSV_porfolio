import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-fg text-bg hover:shadow-[0_0_30px_-6px_var(--color-brand-purple)] hover:-translate-y-0.5',
  secondary:
    'border border-line text-fg hover:border-brand-purple/60 hover:bg-surface-hover hover:-translate-y-0.5',
  ghost: 'border border-transparent text-muted hover:text-fg',
};

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant;
  children: ReactNode;
}

export function ButtonLink({ variant = 'primary', className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {variant !== 'ghost' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </a>
  );
}
