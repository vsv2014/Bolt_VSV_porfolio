import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Awards from './components/sections/Awards';
import Contact from './components/sections/Contact';
import FloatingContact from './components/layout/FloatingContact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="space-y-16 sm:space-y-24 md:space-y-32">
        <Hero />
        <Experience />
        <Education />
        <Skills />
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