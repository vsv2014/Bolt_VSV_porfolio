import { lazy } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Atmosphere } from './components/layout/Atmosphere';
import { Cursor } from './components/layout/Cursor';
import { Intro } from './components/layout/Intro';
import { CommandPalette } from './components/layout/CommandPalette';
import { FloatingSocials } from './components/layout/FloatingSocials';
import { Footer } from './components/layout/Footer';
import { DeferredSection } from './components/layout/DeferredSection';
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
const EngineeringNotes = lazy(() => import('./components/sections/EngineeringNotes').then((m) => ({ default: m.EngineeringNotes })));
const AgentConsole = lazy(() => import('./components/sections/AgentConsole').then((m) => ({ default: m.AgentConsole })));
const Research = lazy(() => import('./components/sections/Research').then((m) => ({ default: m.Research })));
const Awards = lazy(() => import('./components/sections/Awards').then((m) => ({ default: m.Awards })));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="fixed left-4 top-2 z-[100] -translate-y-24 rounded-lg border border-brand-cyan bg-bg px-4 py-2 font-mono text-sm text-fg transition-transform focus:translate-y-0">
        Skip to content
      </a>
      <Atmosphere />
      <Intro />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <FloatingSocials />
      <main id="main-content" tabIndex={-1} className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Impact />
        <DeferredSection id="projects"><Projects /></DeferredSection>
        <DeferredSection id="craft"><FrontendCraft /></DeferredSection>
        <DeferredSection id="notes"><EngineeringNotes /></DeferredSection>
        <DeferredSection id="agent"><AgentConsole /></DeferredSection>
        <DeferredSection id="research"><Research /></DeferredSection>
        <DeferredSection id="awards"><Awards /></DeferredSection>
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
