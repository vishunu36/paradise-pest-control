import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { SERVICES } from '../config/services';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'Services',      href: '#services' },
  { label: 'Our Work',      href: '#gallery' },
  { label: 'About Us',      href: '#about' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact',       href: '#contact' },
  { label: 'FAQ',           href: '#faq' },
];

const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__grid">

        {/* ── Brand column ── */}
        <div className="footer__brand">
          {/* Logo placeholder — replace with actual logo img when available */}
          <div className="footer__logo-placeholder" aria-label="Paradise Pest Control Services logo">
            <span aria-hidden="true">🐛</span>
            <span className="footer__logo-text">Paradise Pest Control Services</span>
          </div>
          <p className="footer__tagline">{BUSINESS.tagline}</p>
          <p className="footer__brand-desc">
            Professional pest control services for homes and businesses across
            Hanamkonda, Warangal, and Hyderabad, Telangana.
          </p>
          <div className="footer__contact-links">
            <a href={BUSINESS.callUrl} className="footer__contact-link">
              <Phone size={15} aria-hidden="true" /> {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link footer__contact-link--whatsapp"
            >
              <MessageCircle size={15} aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── Navigation column ── */}
        <nav className="footer__col" aria-label="Footer navigation">
          <h3 className="footer__col-title">Quick Links</h3>
          <ul className="footer__link-list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="footer__link"
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Services column ── */}
        <div className="footer__col">
          <h3 className="footer__col-title">Our Services</h3>
          <ul className="footer__link-list">
            {SERVICES.map(s => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="footer__link"
                  onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  {s.icon} {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Areas column ── */}
        <div className="footer__col">
          <h3 className="footer__col-title">Service Areas</h3>
          <ul className="footer__link-list">
            {BUSINESS.serviceAreas.map(area => (
              <li key={area.city}>
                <a
                  href="#areas"
                  className="footer__link"
                  onClick={e => { e.preventDefault(); scrollTo('#areas'); }}
                >
                  📍 {area.city}, {area.state}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer__cta-block" style={{ marginTop: 'var(--space-lg)' }}>
            <a href={BUSINESS.callUrl} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">{BUSINESS.copyright}</p>
          <div className="footer__bottom-links">
            {/* Privacy policy link — uncomment once a policy page exists */}
            {/* <a href="/privacy" className="footer__bottom-link">Privacy Policy</a> */}
            <span className="footer__bottom-link">
              Serving Hanamkonda • Warangal • Hyderabad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
