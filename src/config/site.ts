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
  email: 'yandina@thebalancedchiro.com.au',
  address: {
    street: 'Shop 5, 18 Farrell St',
    suburb: 'Yandina',
    state: 'QLD',
    postcode: '4561',
  },
  directions: 'Next door to Lawn Espresso, a short walk from Yandina Station.',
  mapsUrl: 'https://maps.google.com/maps?cid=11232953959727105599', // Google Business Profile
  geo: { lat: -26.5608631, lng: 152.9569166 },
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

  // Online booking (Zurili), shown inside /book-online-yandina so patients
  // stay on thebalancedchiro.com.au. Never put API keys in this file —
  // the website is public.
  booking: {
    // Optional: Zurili embed snippet (takes priority over `url` if set).
    embedCode: ``,
    // Zurili booking page, shown in a frame on our own page (same as the old site).
    url: 'https://app.zurili.com/home/site/647fb02a8af8ff2940bd050a',
    embed: true, // false = open the booking link in a new tab instead
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
  // Carried over from the old website so reporting and ad conversions keep working
  google: {
    analyticsId: 'G-FJ2HLLB4CW',
    adsIds: ['AW-17082728725', 'AW-18002778320'],
    conversions: {
      bookingPage: 'AW-17082728725/sda7CLHf7c0aEJWC19E_', // someone opens the booking page
      phoneClick: 'AW-17082728725/vtAsCLTf7c0aEJWC19E_',  // someone taps the phone number
      phoneCalls: 'AW-17082728725/3OP8CN6W8M0aEJWC19E_',  // Google call tracking number swap
    },
    siteVerification: 'FyXMmglyjM-CvcYUw9WajstrFkisKs7XKRxmD94XKr0', // Search Console
  },

  // Videos live in public/videos (<name>.mp4 + <name>.jpg cover, optional .vtt captions)
  videos: {
    welcome: 'new-patient-welcome',        // Dr Josh: what to expect at your first visit
    thermography: 'inflammation-scanner',  // Dr Josh explains the ThermPix scanner
    thorough: 'thorough-care',             // how we investigate and plan long-term care
    brandStory: 'brand-story',             // why Dr Josh opened the clinic
    david: 'dr-david',                     // Dr David introduction (add public/videos/dr-david.mp4)
    offer: 'three-technologies',           // 3 technologies (offer section cut out)
  },

  social: {
    facebook: 'https://www.facebook.com/people/The-Balanced-Chiropractic-Centre-Yandina/100092608928255/',
    instagram: 'https://www.instagram.com/thebalancedchiropracticcentre/',
    googleReviews: 'https://maps.google.com/maps?cid=11232953959727105599'
  },
};

export const team = [
  {
    name: 'Dr Joshua Kassis',
    role: 'Principal Chiropractor & Founder',
    credentials: 'B.Chiro, M.Chiro (Macquarie University)',
    photo: '/images/dr-josh.jpg',
    bio: 'Josh founded The Balanced Chiropractic Centre to give the Yandina community a different kind of chiropractic: one that measures before it treats and works to correct the underlying pattern, not just the symptom of the day. He is passionate about family wellness and educating people on how their nervous system shapes their health.',
  },
  {
    name: 'Dr David Rowan',
    role: 'Chiropractor',
    credentials: 'B.Chiro Sc, M.Chiro (CQU)',
    photo: '/images/dr-david.jpg',
    page: '/dr-david-rowan',
    bio: 'A former Glasgow police officer turned chiropractor, Dr David is known for his friendly, relatable manner and the time he takes to understand each person. Meet him and the first thing you’ll notice is the Scottish accent. Then how easy he is to talk to.',
  },
];
