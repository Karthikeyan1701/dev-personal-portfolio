import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About'
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;