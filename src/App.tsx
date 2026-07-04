import { useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      <main>
        <Hero onCtaClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} />
        <Problem id="problema" />
        <Solution id="solucion" />
        <Benefits id="beneficios" />
        <Calculator />
        <HowItWorks id="como-funciona" />
        <FAQ id="faq" />
        <CTA id="contacto" onSubmit={handleFormSubmit} success={formSuccess} />
      </main>
      <Footer />
    </div>
  );
}

export default App;