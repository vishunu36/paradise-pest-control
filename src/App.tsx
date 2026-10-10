import React from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { BUSINESS } from './config/business';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      {/* Accessibility: skip navigation */}
      <a href="#main-content" className="skip-to-main">Skip to main content</a>

      <Header />

      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <ServiceAreas />
        <Contact />
        <FAQ />
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={BUSINESS.whatsappGeneral}
        target="_blank"
        rel="noopener noreferrer"
        className="float-whatsapp"
        aria-label="Open WhatsApp chat with Paradise Pest Control Services"
        title="WhatsApp us"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
};

export default App;
