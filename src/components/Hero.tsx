import React from 'react';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { BUSINESS } from '../config/business';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Homepage hero">
      {/* Background image layer */}
      <div className="hero__bg" aria-hidden="true">
        {/* Full-cover background photo */}
        <div
          className="hero__bg-img"
          style={{ backgroundImage: 'url(/images/hero-watermark.jpg)' }}
          aria-hidden="true"
        />
        {/* Dark overlay so text stays readable */}
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Serving Hanamkonda • Warangal • Hyderabad
        </div>

        <h1 className="hero__title">
          Protect Your Home.<br />
          <span className="hero__title-highlight">Keep Pests Away.</span>
        </h1>

        <p className="hero__subtitle">
          Explore professional pest-control solutions for homes and businesses.
          Contact Paradise Pest Control Services to discuss your pest problem
          and arrange a service enquiry.
        </p>

        <div className="hero__actions">
          <a
            href={BUSINESS.callUrl}
            className="btn btn-primary"
            id="hero-call-btn"
            aria-label={`Call us at ${BUSINESS.phoneDisplay}`}
          >
            <Phone size={18} />
            Call Now: {BUSINESS.phoneDisplay}
          </a>

          <a
            href={BUSINESS.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            id="hero-whatsapp-btn"
            aria-label="Send us a WhatsApp message"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>

          <button
            className="btn btn-white"
            id="hero-services-btn"
            onClick={() => scrollTo('services')}
            aria-label="Explore our pest control services"
          >
            Explore Our Services
          </button>
        </div>

        {/* Trust indicators — only factual */}
        <div className="hero__trust">
          <div className="hero__trust-item">
            <span aria-hidden="true">📞</span> Call or WhatsApp to enquire
          </div>
          <div className="hero__trust-item">
            <span aria-hidden="true">🏡</span> Residential &amp; Commercial
          </div>
          <div className="hero__trust-item">
            <span aria-hidden="true">📍</span> Local Telangana Service
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll"
        onClick={() => scrollTo('services')}
        aria-label="Scroll down to services"
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
};

export default Hero;
