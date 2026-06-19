import { MotionConfig } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { FloatingSocials } from './components/layout/FloatingSocials';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Research } from './components/sections/Research';
import { Awards } from './components/sections/Awards';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <FloatingSocials />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
