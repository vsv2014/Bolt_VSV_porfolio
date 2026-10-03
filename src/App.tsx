import { Suspense, lazy } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Atmosphere } from './components/layout/Atmosphere';
import { CommandPalette } from './components/layout/CommandPalette';
import { FloatingSocials } from './components/layout/FloatingSocials';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Impact } from './components/sections/Impact';
import { Contact } from './components/sections/Contact';

/* Below-the-fold sections are code-split so the first paint stays lean — the
   same route/component-level splitting story as the WebSDK work (2.3 MB → 920 KB). */
const Projects = lazy(() => import('./components/sections/Projects').then((m) => ({ default: m.Projects })));
const FrontendCraft = lazy(() => import('./components/sections/FrontendCraft').then((m) => ({ default: m.FrontendCraft })));
const AgentConsole = lazy(() => import('./components/sections/AgentConsole').then((m) => ({ default: m.AgentConsole })));
const Research = lazy(() => import('./components/sections/Research').then((m) => ({ default: m.Research })));
const Awards = lazy(() => import('./components/sections/Awards').then((m) => ({ default: m.Awards })));

/** Shape-matched placeholder so splitting in a section never shifts the layout. */
function SectionFallback() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8">
      <div className="h-44 animate-pulse rounded-2xl border border-line bg-surface" />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Atmosphere />
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <FloatingSocials />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Impact />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
          <FrontendCraft />
          <AgentConsole />
          <Research />
          <Awards />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
