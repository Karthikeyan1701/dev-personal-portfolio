import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Insights from './components/sections/Insights';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Timeline from './components/sections/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Timeline />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;