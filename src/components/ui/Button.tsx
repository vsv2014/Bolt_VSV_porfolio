import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary: 'bg-fg text-bg hover:bg-fg/90',
  secondary: 'border border-line text-fg hover:border-line-strong hover:bg-surface-hover',
};

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant;
  children: ReactNode;
}

export function ButtonLink({ variant = 'primary', className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
