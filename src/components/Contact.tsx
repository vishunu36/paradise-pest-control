import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { BUSINESS } from '../config/business';
import './Contact.css';

interface FormData {
  name: string;
  phone: string;
  location: string;
  pestProblem: string;
  message: string;
}

const INITIAL: FormData = { name: '', phone: '', location: '', pestProblem: '', message: '' };

const PEST_OPTIONS = [
  'Termites (wood/furniture)',
  'Termites (ground/foundation)',
  'Bed Bugs',
  'Cockroaches',
  'Rodents / Rats',
  'Mosquitoes',
  'Ants',
  'Other / Not sure',
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!/^[0-9\s\+\-]{7,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number.';
    if (!form.location.trim()) e.location = 'Please enter your area or city.';
    if (!form.pestProblem) e.pestProblem = 'Please select the type of pest problem.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // WhatsApp fallback — composes a prefilled WhatsApp message
  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Paradise Pest Control Services,\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nPest Problem: ${form.pestProblem}${form.message ? `\nAdditional info: ${form.message}` : ''}\n\nPlease let me know how to arrange a service enquiry. Thank you.`
    );
    return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // No server configured — route enquiry through WhatsApp
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setForm(INITIAL);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section__header text-center" style={{ margin: '0 auto var(--space-2xl)' }}>
          <span className="section__label">Contact Us</span>
          <h2 className="section__title" id="contact-title">Get in Touch</h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Call, WhatsApp, or fill out the enquiry form below.
            We will respond to all messages as soon as possible.
          </p>
        </header>

        <div className="contact__layout">
          {/* ── Contact info panel ── */}
          <aside className="contact__info">
            <h3 className="contact__info-title">Contact Details</h3>

            <div className="contact__detail">
              <div className="icon-box" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div>
                <p className="contact__detail-label">Phone</p>
                <a href={BUSINESS.callUrl} className="contact__detail-value contact__detail-value--link">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="icon-box" style={{ background: '#e6faf0', color: '#25D366' }} aria-hidden="true">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="contact__detail-label">WhatsApp</p>
                <a
                  href={BUSINESS.whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail-value contact__detail-value--link"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="icon-box" aria-hidden="true">
                <span style={{ fontSize: '1.1rem' }}>📍</span>
              </div>
              <div>
                <p className="contact__detail-label">Service Areas</p>
                <p className="contact__detail-value">
                  Hanamkonda, Warangal &amp; Hyderabad<br />
                  Telangana, India
                </p>
              </div>
            </div>

            <div className="contact__quick-btns">
              <a href={BUSINESS.callUrl} className="btn btn-primary">
                <Phone size={16} /> Call Now
              </a>
              <a
                href={BUSINESS.whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            <div className="contact__form-note">
              <AlertCircle size={15} aria-hidden="true" />
              <p>
                This enquiry form opens WhatsApp with your details prefilled.
                No data is stored on this website.
              </p>
            </div>
          </aside>

          {/* ── Enquiry form ── */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success" role="status" aria-live="polite">
                <CheckCircle size={48} className="contact__success-icon" />
                <h3>Enquiry Opened in WhatsApp!</h3>
                <p>
                  Your enquiry has been prefilled in WhatsApp. Simply send the message
                  to reach Paradise Pest Control Services directly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Service enquiry form"
              >
                <h3 className="contact__form-title">Service Enquiry Form</h3>
                <p className="contact__form-subtitle">
                  Fill in your details and we will open WhatsApp with your enquiry prefilled.
                </p>

                {/* Name */}
                <div className={`form-field${errors.name ? ' form-field--error' : ''}`}>
                  <label htmlFor="contact-name" className="form-label">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div className={`form-field${errors.phone ? ' form-field--error' : ''}`}>
                  <label htmlFor="contact-phone" className="form-label">
                    Phone Number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your mobile number"
                    autoComplete="tel"
                    required
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="form-error" role="alert">{errors.phone}</span>
                  )}
                </div>

                {/* Location */}
                <div className={`form-field${errors.location ? ' form-field--error' : ''}`}>
                  <label htmlFor="contact-location" className="form-label">
                    Your Area / City <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-location"
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Hanamkonda, Warangal, Hyderabad"
                    autoComplete="address-level2"
                    required
                    aria-describedby={errors.location ? 'location-error' : undefined}
                    aria-invalid={!!errors.location}
                  />
                  {errors.location && (
                    <span id="location-error" className="form-error" role="alert">{errors.location}</span>
                  )}
                </div>

                {/* Pest problem */}
                <div className={`form-field${errors.pestProblem ? ' form-field--error' : ''}`}>
                  <label htmlFor="contact-pest" className="form-label">
                    Type of Pest Problem <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-pest"
                    name="pestProblem"
                    value={form.pestProblem}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                    aria-describedby={errors.pestProblem ? 'pest-error' : undefined}
                    aria-invalid={!!errors.pestProblem}
                  >
                    <option value="">— Select pest problem —</option>
                    {PEST_OPTIONS.map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {errors.pestProblem && (
                    <span id="pest-error" className="form-error" role="alert">{errors.pestProblem}</span>
                  )}
                </div>

                {/* Message */}
                <div className="form-field">
                  <label htmlFor="contact-message" className="form-label">
                    Additional Information <span className="form-label--optional">(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Describe the issue in more detail, or share where in the property you have noticed the problem…"
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact__submit" id="contact-submit-btn">
                  <Send size={16} /> Send Enquiry via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
