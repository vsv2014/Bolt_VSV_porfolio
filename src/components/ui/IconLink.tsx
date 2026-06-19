import type { IconType } from '@/types';
import { cn } from '@/lib/utils';

interface IconLinkProps {
  href: string;
  label: string;
  icon: IconType;
  className?: string;
}

export function IconLink({ href, label, icon: Icon, className }: IconLinkProps) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-fg',
        className,
      )}
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}
