import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';
import { subscribe, getTheme, toggleTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

/**
 * Light/dark toggle. State is shared via the theme store, so every mounted
 * instance (desktop + mobile) stays in sync. Initial theme is set pre-paint in index.html.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark' as const);
  const light = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={light}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-fg',
        className,
      )}
    >
      {light ? <Moon className="h-[18px] w-[18px]" strokeWidth={1.75} /> : <Sun className="h-[18px] w-[18px]" strokeWidth={1.75} />}
    </button>
  );
}
