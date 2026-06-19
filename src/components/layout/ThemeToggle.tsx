import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Light/dark toggle. Persists to localStorage; initial state is set pre-paint in index.html. */
export function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('light'),
  );

  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark');
    } catch {
      /* storage unavailable — ignore */
    }
  }, [light]);

  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
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
