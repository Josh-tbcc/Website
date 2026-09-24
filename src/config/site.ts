// ─────────────────────────────────────────────────────────────
//  SITE SETTINGS — edit this one file to update details across
//  every page. Anything marked TODO still needs a real value.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'The Balanced Chiropractic Centre',
  shortName: 'Balanced Chiro',
  url: 'https://thebalancedchiro.com.au',
  tagline: 'Health from within',
  description:
    'Family chiropractic in Yandina on the Sunshine Coast. Thermal nerve scans, in-house X-ray and a clear plan to correct the cause — not just chase the pain.',

  // Contact
  phone: '07 3496 9345',
  email: 'yadina@thebalancedchiro.com.au',
  address: {
    street: 'Centre 5/18 Farrell St',
    suburb: 'Yandina',
    state: 'QLD',
    postcode: '4561',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5%2F18+Farrell+St+Yandina+QLD+4561',
  mapsEmbed:
    'https://www.google.com/maps?q=5%2F18+Farrell+St+Yandina+QLD+4561&output=embed',

  hours: [
    { days: 'Monday', time: '2:30pm – 6:00pm' },
    { days: 'Tuesday', time: '7:00am – 10:00am, 2:30pm – 6:00pm' },
    { days: 'Wednesday', time: '2:30pm – 6:00pm' },
    { days: 'Thursday', time: '7:00am – 10:00am, 2:30pm – 6:00pm' },
    { days: 'Friday', time: '7:00am – 10:00am' },
    { days: 'Saturday', time: 'Closed' },
    { days: 'Sunday', time: 'Closed' },
  ],

  // Online booking (Zurili). Use the PUBLIC booking page link —
  // never put API keys in this file, the website is public.
  booking: {
    url: '', // TODO: Zurili public booking link, e.g. https://book.zurili.com/…
    embed: true, // show the booking page inside /book (set false to just link out)
    newPatientLabel: 'New Patient Consultation (30 min)',
  },

  // Online intake form (Jotform)
  intakeFormUrl: 'https://form.jotform.com/262209246859062',

  // $49 Meta ad offer
  offer: {
    price: '$49',
    name: 'Initial Assessment',
    includes: [
      'In-depth health history and consultation',
      'Thermography nerve scan with AI-assisted analysis',
      'Full spinal and postural assessment',
      'Neurological and orthopaedic tests',
      'X-rays in-house if clinically required',
    ],
    // Where lead-form submissions go. Netlify Forms captures them
    // automatically. Optionally also POST to a Google Sheet
    // (see docs/GO-LIVE.md → "Send leads to Google Sheets").
    sheetWebhook: '', // optional Google Apps Script web-app URL
  },

  // Tracking
  metaPixelId: '', // TODO: from Daina / Meta Events Manager
  googleAnalyticsId: '', // optional, e.g. G-XXXXXXX

  // Videos — paste YouTube video IDs (the part after v=)
  videos: {
    patientJourney: '', // TODO: "Journey of patient in our office"
    thermography: '', // TODO: thermal scan explainer
    intro: '', // optional: welcome video from Dr Josh
  },

  social: {
    facebook: '', // TODO
    instagram: '', // TODO
    googleReviews: '', // TODO: Google Business Profile reviews link
  },
};

export const team = [
  {
    name: 'Dr Joshua Kassis',
    role: 'Principal Chiropractor & Founder',
    photo: '/images/dr-josh.jpg',
    bio: 'Josh founded The Balanced Chiropractic Centre to give the Yandina community a different kind of chiropractic: one that measures before it treats and works to correct the underlying pattern, not just the symptom of the day. He is passionate about family wellness and educating people on how their nervous system shapes their health.',
  },
  {
    name: 'Dr David',
    role: 'Chiropractor',
    photo: '/images/dr-david.jpg',
    bio: 'TODO: David’s bio — background, study, what he loves about chiropractic and life outside the clinic.',
  },
];
