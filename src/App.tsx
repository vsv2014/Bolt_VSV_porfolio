import { FC } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Awards from './components/sections/Awards';
import Contact from './components/sections/Contact';
import Navbar from './components/layout/Navbar';
import FloatingContact from './components/layout/FloatingContact';

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Research />
        <Awards />
        <Contact />
      </main>
      <FloatingContact />
    </div>
  );
};

export default App;