import React from 'react';
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../config/services';
import './Services.css';

const ServiceCard: React.FC<{ service: (typeof SERVICES)[0]; index: number }> = ({ service, index }) => {
  return (
    <article
      className="service-card card"
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Service image */}
      <div className="service-card__img-wrap">
        <img
          src={service.image}
          alt={`${service.name} — Paradise Pest Control Services`}
          className="service-card__img"
          loading="lazy"
          width="400"
          height="250"
        />
        <div className="service-card__img-badge">
          <span aria-hidden="true">{service.icon}</span> {service.name}
        </div>
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title" id={`${service.id}-title`}>
          {service.name}
        </h3>
        <p className="service-card__desc">{service.description}</p>

        {/* Signs */}
        <div className="service-card__signs">
          <h4 className="service-card__signs-title">Common signs to look for:</h4>
          <ul className="service-card__signs-list">
            {service.signs.map((sign, i) => (
              <li key={i} className="service-card__sign">
                <CheckCircle2 size={15} className="service-card__check" aria-hidden="true" />
                {sign}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="service-card__ctas">
          <a
            href={`tel:+919989844465`}
            className="btn btn-primary btn-sm"
            aria-label={`Call to enquire about ${service.name}`}
          >
            <Phone size={14} /> Call to Enquire
          </a>
          <a
            href={service.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            aria-label={`WhatsApp enquiry for ${service.name}`}
          >
            <MessageCircle size={14} /> WhatsApp Enquiry
          </a>
        </div>
      </div>
    </article>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section section--alt services" aria-labelledby="services-title">
      <div className="container">
        <header className="section__header text-center" style={{ margin: '0 auto var(--space-2xl)' }}>
          <span className="section__label">Our Services</span>
          <h2 className="section__title" id="services-title">
            Professional Pest Control Solutions
          </h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            We provide targeted pest-control services for homes and businesses across
            Hanamkonda, Warangal, and Hyderabad. Contact us to discuss your specific
            pest problem and get professional advice.
          </p>
        </header>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Other services note */}
        <div className="services__note">
          <p>
            Looking for a service not listed above? Contact us to discuss your pest problem.
          </p>
          <a
            href="https://wa.me/919989844465?text=Hello%2C%20I%20have%20a%20pest%20problem%20and%20would%20like%20to%20discuss%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={16} /> Enquire via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
