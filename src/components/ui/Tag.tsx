import { cn } from '@/lib/utils';

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-line px-2.5 py-1 font-mono text-[11px] leading-none text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
