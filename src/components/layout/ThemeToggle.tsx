import { useRef, useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';
import { subscribe, getTheme, toggleTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

/**
 * Light/dark toggle. State is shared via the theme store, so every mounted
 * instance (desktop + mobile) stays in sync. The initial theme is set pre-paint
 * in index.html; changing it here blooms a View Transition from the button.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark' as const);
  const light = theme === 'light';

  function onClick() {
    const rect = ref.current?.getBoundingClientRect();
    const origin = rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : undefined;
    toggleTheme(origin);
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={light}
      className={cn(
        'group inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-fg',
        className,
      )}
    >
      <span className="relative block h-[18px] w-[18px]">
        <Sun
          className={cn(
            'absolute inset-0 h-[18px] w-[18px] transition-all duration-500',
            light ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0',
          )}
          strokeWidth={1.75}
        />
        <Moon
          className={cn(
            'absolute inset-0 h-[18px] w-[18px] transition-all duration-500',
            light ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100',
          )}
          strokeWidth={1.75}
        />
      </span>
    </button>
  );
}
