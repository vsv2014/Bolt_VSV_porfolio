import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, Search, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons';
import { ThemeToggle } from './ThemeToggle';
import { navLinks, profile, socials } from '@/data/site';
import { openPalette } from '@/lib/agent';
import { cn } from '@/lib/utils';

const sectionIds = ['home', ...navLinks.map((l) => l.id)];
const github = socials.find((s) => s.label === 'GitHub')!;
const linkedin = socials.find((s) => s.label === 'LinkedIn')!;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -55% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-line bg-bg/70 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Back to top">
          <span className="font-mono text-sm font-semibold tracking-tight text-fg">
            {profile.initials}
            <span className="text-brand-cyan">.</span>
          </span>
          <span className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-muted xl:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
            {profile.rank} · India
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'relative block rounded-md px-2 py-2 text-[12.5px] transition-colors xl:px-2.5',
                  active === link.id ? 'text-fg' : 'text-muted hover:text-fg',
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-surface"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            onClick={openPalette}
            className="mr-1 inline-flex items-center gap-2 rounded-lg border border-line px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-line-strong hover:text-fg"
            aria-label="Open command palette"
          >
            <Search className="h-3.5 w-3.5" />
            <kbd className="hidden text-[10px] xl:inline">⌘K</kbd>
          </button>
          <a href={github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted transition-colors hover:text-fg">
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted transition-colors hover:text-fg">
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={openPalette}
            aria-label="Open command palette"
            className="p-2 text-muted transition-colors hover:text-fg"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 text-fg"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-3 py-2.5 text-base transition-colors',
                      active === link.id ? 'bg-surface text-fg' : 'text-muted hover:text-fg',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openPalette();
                  }}
                  className="flex w-full items-center gap-2 rounded-md border border-line px-3 py-2.5 font-mono text-xs text-muted"
                >
                  <Search className="h-3.5 w-3.5" /> Search & ask the agent
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
