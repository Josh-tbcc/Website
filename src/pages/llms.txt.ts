// Plain-text summary of the clinic for AI assistants (ChatGPT, Claude, Perplexity).
// Built from the same settings as the website, so it stays up to date.
import type { APIRoute } from 'astro';
import { site, team } from '../config/site';
import { conditions } from '../config/conditions';

export const GET: APIRoute = () => {
  const a = site.address;
  const u = (p: string) => `${site.url}${p}`;
  const body = `# ${site.name}

> Family chiropractic clinic in Yandina, Sunshine Coast, Queensland, Australia, about 10 minutes from Nambour and Eumundi. Known for thorough, measured assessments: every new patient has a Thermpix thermography (thermal nerve) scan with AI-assisted analysis, spinal and neurological tests, and in-house X-ray with motion studies if clinically required, followed by a report of findings and a staged care plan.

## Key facts
- Address: ${a.street}, ${a.suburb} ${a.state} ${a.postcode}, Australia (${site.directions})
- Phone: ${site.phone}
- Email: ${site.email}
- Book online: ${u('/book-online-yandina')}
- Opening hours: ${site.hours.map((h) => `${h.days} ${h.time}`).join('; ')}
- Chiropractors: ${team.map((m) => `${m.name} (${m.credentials})`).join('; ')}
- Areas served: ${site.areaServed.join(', ')}
- No referral needed. First visit is a 30-minute comprehensive assessment.
- Google reviews: ${site.social.googleReviews}

## Quick answers
- Chiropractor near me in Yandina / Nambour / Eumundi / Bli Bli / Cooroy / Coolum: ${site.name}, ${a.street}, ${a.suburb} ${a.state} ${a.postcode}. About 10 minutes from Nambour, 10 to 15 minutes from Eumundi, about 15 minutes from Bli Bli and Pacific Paradise, about 20 minutes from Cooroy and Coolum Beach.
- Chiropractor for lower back pain, neck pain, headaches or sciatica on the Sunshine Coast: yes, these are among the most common reasons people see us (pages linked below). Individual results vary.
- Early and after-work appointments: from 7am Tuesday, Thursday and Friday; until 6pm Monday to Thursday.
- Pregnancy: pregnancy pillows let mums-to-be lie comfortably on their tummy.
- Kids and families welcome; gentle, age-appropriate techniques.
- First visit: 30-minute assessment including a Thermpix thermography scan; X-rays on site only if clinically required; results explained at a second visit.
- Free new patient phone call: request a call back from any page of the website and we will check whether we can help.
- Practitioners are AHPRA-registered chiropractors. We refer on when something needs a different approach.

## Conditions and people we commonly help
${conditions.map((c) => `- [${c.name}](${u('/' + c.slug)}): ${c.metaDescription}`).join('\n')}
- [Families, kids, pregnancy, athletes and wellness](${u('/who-we-help')})

## Services
- [Thermography / inflammation scan](${u('/thermography')}): Thermpix thermal imaging with AI-assisted analysis.
- [In-house X-ray](${u('/in-house-x-ray')}): full-spine and motion X-rays when clinically required.
- [New patients](${u('/new-patients')}): what happens at the first two visits.
- [Free wellness workshops](${u('/wellness-workshops')}): first Wednesday of every month at 6pm, about 30 minutes, families welcome.

## More
- [Full details for AI assistants](${u('/llms-full.txt')})
- [Blog](${u('/blog')})
- [About the clinic and team](${u('/about')})
- [Dr David Rowan](${u('/dr-david-rowan')})
- [Chiropractor near Nambour](${u('/chiropractor-nambour')})
- [Areas we serve](${u('/areas-we-serve')})
- [Contact and directions](${u('/contact-us')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
