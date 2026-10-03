export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();
const themeMeta = document.querySelector('meta[name="theme-color"]');

let currentTheme: Theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';

/** True when the visitor has asked the OS for less motion. */
function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('light', theme === 'light');
  // Keep the address-bar colour in sync with the active --color-bg token.
  if (themeMeta) {
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim();
    if (bg) themeMeta.setAttribute('content', bg);
  }
}

/**
 * Apply a theme, persist it and notify subscribers.
 * Where the browser supports it, the change is wrapped in a View Transition so
 * the new theme blooms as a circle from the toggle button (pass `origin`).
 */
export function setTheme(theme: Theme, origin?: { x: number; y: number }): void {
  const previous = currentTheme;
  currentTheme = theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — ignore */
  }

  const canTransition =
    typeof document.startViewTransition === 'function' && !prefersReducedMotion() && previous !== theme;

  if (!canTransition) {
    applyTheme(theme);
    listeners.forEach((notify) => notify());
    return;
  }

  if (origin) {
    document.documentElement.style.setProperty('--vt-x', `${origin.x}px`);
    document.documentElement.style.setProperty('--vt-y', `${origin.y}px`);
  }

  const transition = document.startViewTransition(() => applyTheme(theme));
  transition.finished.finally(() => listeners.forEach((notify) => notify()));
}

export function toggleTheme(origin?: { x: number; y: number }): void {
  setTheme(currentTheme === 'light' ? 'dark' : 'light', origin);
}

export function getTheme(): Theme {
  return currentTheme;
}

export function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

// Follow OS theme changes for visitors who haven't picked one explicitly.
try {
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
    if (!localStorage.getItem(STORAGE_KEY)) setTheme(event.matches ? 'light' : 'dark');
  });
} catch {
  /* matchMedia unavailable — ignore */
}
