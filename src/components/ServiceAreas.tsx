import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS } from '../config/business';
import './ServiceAreas.css';

const AREA_DETAILS = [
  {
    city: 'Hanamkonda',
    state: 'Telangana',
    description:
      'Paradise Pest Control Services provides pest control enquiry and treatment services across Hanamkonda. Whether you are dealing with a termite problem in your home, bed bugs in a rental property, or a general pest issue in a commercial space, contact us to discuss your needs.',
    highlights: [
      'Termite inspections and treatment',
      'Bed bug control',
      'Ground and foundation treatment',
      'Residential and commercial properties',
    ],
  },
  {
    city: 'Warangal',
    state: 'Telangana',
    description:
      'We handle pest control enquiries from customers across Warangal. Termites, bed bugs, and other common household pests are a known challenge in many homes and commercial premises in this area. Contact us to arrange a service enquiry.',
    highlights: [
      'Local service enquiries',
      'Termite damage assessment',
      'Bed bug control',
      'Advice tailored to your pest problem',
    ],
  },
  {
    city: 'Hyderabad',
    state: 'Telangana',
    description:
      'Our services extend to Hyderabad. If you are experiencing a pest problem in your home, apartment, or business premises in Hyderabad, contact Paradise Pest Control Services to discuss your situation and arrange an enquiry.',
    highlights: [
      'Apartments and independent homes',
      'Commercial and office premises',
      'Termite and bed bug services',
      'WhatsApp and phone enquiries',
    ],
  },
];

const ServiceAreas: React.FC = () => {
  return (
    <section id="areas" className="section section--alt service-areas" aria-labelledby="areas-title">
      <div className="container">
        <header className="section__header text-center" style={{ margin: '0 auto var(--space-2xl)' }}>
          <span className="section__label">Service Areas</span>
          <h2 className="section__title" id="areas-title">
            Where We Operate
          </h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Paradise Pest Control Services currently accepts enquiries from customers
            in the following areas of Telangana. Contact us if you are unsure whether
            we cover your specific location.
          </p>
        </header>

        {/* Area cards */}
        <div className="areas__grid grid-3">
          {AREA_DETAILS.map((area) => (
            <article
              key={area.city}
              className="area-card card"
              aria-labelledby={`area-${area.city.toLowerCase()}-title`}
            >
              <div className="area-card__header">
                <div className="icon-box" aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3
                    className="area-card__city"
                    id={`area-${area.city.toLowerCase()}-title`}
                  >
                    {area.city}
                  </h3>
                  <span className="area-card__state">{area.state}, India</span>
                </div>
              </div>

              <p className="area-card__desc">{area.description}</p>

              <ul className="area-card__highlights">
                {area.highlights.map((h, i) => (
                  <li key={i} className="area-card__highlight">
                    <span className="area-card__dot" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Maps & coverage note */}
        <div className="areas__map-note">
          <div className="areas__map-note-content">
            <h3>Can't find your area?</h3>
            <p>
              If your location is not listed above, please call or WhatsApp us. We will
              confirm whether we can accommodate your enquiry.
            </p>
            <div className="areas__map-note-btns">
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Find us on Google Maps (opens Google search)"
              >
                <ExternalLink size={15} /> Find on Google Maps
              </a>
              <a href={BUSINESS.callUrl} className="btn btn-primary">
                <MapPin size={15} /> Call to Confirm Coverage
              </a>
            </div>
            <p className="areas__map-disclaimer">
              ⚠️ The Google Maps link above opens a search for our business name.
              Once the verified Google Business listing is available, it will be
              replaced with the direct location pin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
