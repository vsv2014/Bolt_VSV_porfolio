export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();
const themeMeta = document.querySelector('meta[name="theme-color"]');

let currentTheme: Theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';

/** Apply a theme: toggle the html class, persist it, sync the address-bar colour, notify subscribers. */
export function setTheme(theme: Theme): void {
  currentTheme = theme;
  document.documentElement.classList.toggle('light', theme === 'light');
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — ignore */
  }
  // Keep the address-bar colour in sync with the active --color-bg token (no hardcoded hex).
  if (themeMeta) {
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim();
    if (bg) themeMeta.setAttribute('content', bg);
  }
  listeners.forEach((notify) => notify());
}

export function toggleTheme(): void {
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
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
