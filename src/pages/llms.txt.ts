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

## Conditions and people we commonly help
${conditions.map((c) => `- [${c.name}](${u('/' + c.slug)}): ${c.metaDescription}`).join('\n')}
- [Families, kids, pregnancy, athletes and wellness](${u('/who-we-help')})

## Services
- [Thermography / inflammation scan](${u('/thermography')}): Thermpix thermal imaging with AI-assisted analysis.
- [In-house X-ray](${u('/in-house-x-ray')}): full-spine and motion X-rays when clinically required.
- [New patients](${u('/new-patients')}): what happens at the first two visits.
- [Free wellness workshops](${u('/wellness-workshops')}): first Wednesday of every month at 6pm, about 30 minutes, families welcome.

## More
- [About the clinic and team](${u('/about')})
- [Dr David Rowan](${u('/dr-david-rowan')})
- [Chiropractor near Nambour](${u('/chiropractor-nambour')})
- [Areas we serve](${u('/areas-we-serve')})
- [Contact and directions](${u('/contact-us')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
