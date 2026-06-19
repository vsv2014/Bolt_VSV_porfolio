import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className, interactive }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-line bg-surface p-6 transition-colors duration-300',
        interactive && 'hover:border-line-strong hover:bg-surface-hover',
        className,
      )}
    >
      {children}
    </div>
  );
}
