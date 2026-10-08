// Local "chiropractor near ..." pages, one per nearby town.
// Each becomes /chiropractor-<slug>. Drive times are approximate.

export interface Area {
  slug: string;
  name: string;
  /** Approximate drive time from the clinic, e.g. "About 10 minutes" */
  time: string;
  /** Neighbouring suburbs that come to us from the same direction */
  nearby: string[];
  /** One or two sentences on getting to the clinic from this town */
  travel: string;
  /** Opening paragraph under the page heading */
  lead: string;
}

export const areas: Area[] = [
  {
    slug: 'nambour',
    name: 'Nambour',
    time: 'About 10 minutes',
    nearby: ['Kulangoor', 'Coes Creek', 'Burnside'],
    travel: 'It’s around a 10-minute drive north of Nambour, and Yandina Station is a short walk away if you’re coming by train.',
    lead: 'The Balanced Chiropractic Centre is around 10 minutes’ drive north of Nambour, in the heart of Yandina. Families from Nambour, Kulangoor, Coes Creek and Burnside come to us for thorough assessments and a clear plan.',
  },
  {
    slug: 'eumundi',
    name: 'Eumundi',
    time: 'About 10–15 minutes',
    nearby: ['Doonan', 'Verrierdale', 'North Arm'],
    travel: 'From Eumundi it’s a short run south down the Bruce Highway, about 10 to 15 minutes. Yandina Station is on the same train line as Eumundi.',
    lead: 'Our clinic in Yandina is a short drive south of Eumundi. People from Eumundi, Doonan, Verrierdale and North Arm come to us for a thorough first assessment and a plan that’s explained in plain English.',
  },
  {
    slug: 'bli-bli',
    name: 'Bli Bli',
    time: 'About 15 minutes',
    nearby: ['Maroochy River', 'Valdora', 'Pacific Paradise'],
    travel: 'From Bli Bli it’s about a 15-minute drive inland to Yandina, with easy parking close to the clinic.',
    lead: 'The Balanced Chiropractic Centre in Yandina is about 15 minutes from Bli Bli. Families from Bli Bli, the Maroochy River area and Valdora come to us for measured assessments and care for the whole family.',
  },
  {
    slug: 'coolum-beach',
    name: 'Coolum Beach',
    time: 'About 20 minutes',
    nearby: ['Peregian Beach', 'Yaroomba', 'Mount Coolum'],
    travel: 'From Coolum it’s about 20 minutes over the hill on the Yandina–Coolum Road, straight into the centre of Yandina.',
    lead: 'Our Yandina clinic is about 20 minutes from Coolum Beach, straight up the Yandina–Coolum Road. People from Coolum, Peregian, Yaroomba and Mount Coolum make the trip for our thorough assessments and early-morning appointments.',
  },
  {
    slug: 'cooroy',
    name: 'Cooroy',
    time: 'About 20 minutes',
    nearby: ['Pomona', 'Cooran', 'Lake Macdonald'],
    travel: 'From Cooroy it’s an easy 20-minute run south down the Bruce Highway. Yandina Station is on the same train line as Cooroy and Pomona.',
    lead: 'The Balanced Chiropractic Centre is about 20 minutes south of Cooroy, just off the Bruce Highway in Yandina. Families from Cooroy, Pomona and Cooran come to us for thorough assessments and care for all ages.',
  },
  {
    slug: 'maroochydore',
    name: 'Maroochydore',
    time: 'About 20–25 minutes',
    nearby: ['Buderim', 'Kuluin', 'Bli Bli'],
    travel: 'From Maroochydore it’s about 20 to 25 minutes inland to Yandina. Parking is easy and you’re away from the busy coastal traffic.',
    lead: 'Our clinic is in Yandina, about 20 to 25 minutes inland from Maroochydore. People from Maroochydore, Buderim and Kuluin make the drive for a thorough, measured first assessment and a clear plan.',
  },
];
