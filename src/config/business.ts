// ─────────────────────────────────────────────────────────────
//  PARADISE PEST CONTROL SERVICES — Central Business Configuration
//  Update this file to change business details across the whole site.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'Paradise Pest Control Services',
  tagline: 'A Cleaner Space • A Healthier Life',
  phone: '9989844465',
  phoneDisplay: '+91 99898 44465',
  phoneE164: '+919989844465',
  whatsapp: '919989844465',
  email: '', // Add email when confirmed by owner
  website: 'https://paradisepestcontrol.in', // Replace with actual domain once live

  serviceAreas: [
    { city: 'Hanamkonda', state: 'Telangana', country: 'India' },
    { city: 'Warangal', state: 'Telangana', country: 'India' },
    { city: 'Hyderabad', state: 'Telangana', country: 'India' },
  ],

  // Address: Only add a specific street address once confirmed by owner.
  // Do NOT invent an address.
  addressLocality: 'Hanamkonda',
  addressRegion: 'Telangana',
  addressCountry: 'IN',

  // Google Maps — opens a search. Replace with verified Business Profile pin once available.
  googleMapsUrl:
    'https://www.google.com/maps/search/Paradise+Pest+Control+Services+Hanamkonda+Warangal',

  // Social / messaging
  whatsappUrl: 'https://wa.me/919989844465',
  callUrl: 'tel:+919989844465',

  // WhatsApp prefill messages
  whatsappGeneral:
    'https://wa.me/919989844465?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20pest%20control%20services.',
  whatsappTermite:
    'https://wa.me/919989844465?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Termite%20Control%20services.',
  whatsappBedBug:
    'https://wa.me/919989844465?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Bed%20Bug%20Control%20services.',

  copyright: `© ${new Date().getFullYear()} Paradise Pest Control Services. All rights reserved.`,
} as const;

export type BusinessConfig = typeof BUSINESS;
