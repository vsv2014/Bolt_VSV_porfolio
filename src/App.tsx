import { FC } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import FloatingContact from './components/layout/FloatingContact';

const App: FC = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <FloatingContact />
    </div>
  );
};

export default App;