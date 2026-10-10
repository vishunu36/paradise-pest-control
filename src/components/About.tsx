import React from 'react';
import { Phone, MessageCircle, Shield, Clock, Users, MapPin } from 'lucide-react';
import { BUSINESS } from '../config/business';
import './About.css';

const BENEFITS = [
  {
    icon: <Phone size={26} />,
    title: 'Easy to Reach',
    description:
      'Contact us directly by phone call or WhatsApp. We respond promptly and help you understand your pest problem before arranging a service.',
  },
  {
    icon: <MessageCircle size={26} />,
    title: 'WhatsApp Enquiries',
    description:
      'Send us a photo of the affected area via WhatsApp at any time. We will advise on the likely pest problem and the most suitable service.',
  },
  {
    icon: <Shield size={26} />,
    title: 'Professional Service',
    description:
      'We carry out targeted treatments based on the type and extent of infestation — not a one-size-fits-all approach. Advice is tailored to your specific situation.',
  },
  {
    icon: <MapPin size={26} />,
    title: 'Local Knowledge',
    description:
      'Serving Hanamkonda, Warangal, and Hyderabad. We understand the pest challenges common to homes and businesses in this region of Telangana.',
  },
  {
    icon: <Clock size={26} />,
    title: 'Responsive Communication',
    description:
      'We aim to respond to all enquiries promptly. Contact us by phone or WhatsApp to discuss availability and arrange a convenient service time.',
  },
  {
    icon: <Users size={26} />,
    title: 'Residential & Commercial',
    description:
      'We handle pest enquiries for private homes, rental properties, offices, and commercial premises. Contact us to discuss your specific requirements.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        {/* ── Why Choose Us header ── */}
        <header className="section__header text-center" style={{ margin: '0 auto var(--space-2xl)' }}>
          <span className="section__label">Why Choose Us</span>
          <h2 className="section__title" id="about-title">
            Professional Pest Control for Your Peace of Mind
          </h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Paradise Pest Control Services is a local pest-control provider serving
            Hanamkonda, Warangal, and Hyderabad. We focus on clear communication,
            practical solutions, and easy enquiry for our customers.
          </p>
        </header>

        {/* Benefits grid */}
        <div className="about__benefits grid-3">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="about__benefit"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="icon-box icon-box--large" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="about__benefit-title">{b.title}</h3>
              <p className="about__benefit-desc">{b.description}</p>
            </div>
          ))}
        </div>

        {/* ── CTA band ── */}
        <div className="about__cta-band">
          <div className="about__cta-band-text">
            <h3>Ready to discuss your pest problem?</h3>
            <p>Call or WhatsApp us to arrange a service enquiry in Hanamkonda, Warangal, or Hyderabad.</p>
          </div>
          <div className="about__cta-band-btns">
            <a href={BUSINESS.callUrl} className="btn btn-white">
              <Phone size={16} /> {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
