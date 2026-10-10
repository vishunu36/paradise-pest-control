import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS } from '../config/business';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'Our Work',     href: '#gallery' },
  { label: 'About Us',     href: '#about' },
  { label: 'Service Areas',href: '#areas' },
  { label: 'Contact',      href: '#contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">

        {/* ── Logo ── */}
        <a
          href="#home"
          className="header__logo"
          onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
          aria-label="Paradise Pest Control Services — Home"
        >
          <div className="header__logo-img-wrap">
            <img
              src="/images/logo.jpg"
              alt="Paradise Pest Control Services"
              className="header__logo-img"
            />
          </div>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`header__nav-link${active === link.href.slice(1) ? ' header__nav-link--active' : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── CTA buttons ── */}
        <div className="header__ctas">
          <a
            href={BUSINESS.callUrl}
            className="btn btn-primary btn-sm"
            id="header-call-btn"
            aria-label={`Call Paradise Pest Control Services at ${BUSINESS.phoneDisplay}`}
          >
            <Phone size={15} />
            Call Now
          </a>
          <a
            href={BUSINESS.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            id="header-whatsapp-btn"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="header__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`header__mobile${menuOpen ? ' header__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="header__mobile-list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`header__mobile-link${active === link.href.slice(1) ? ' header__mobile-link--active' : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__mobile-ctas">
          <a href={BUSINESS.callUrl} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Phone size={16} /> Call: {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
