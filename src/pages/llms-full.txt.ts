// Full plain-text version of the clinic's key information for AI assistants.
// Generated from the same settings and condition pages as the website.
import type { APIRoute } from 'astro';
import { site, team } from '../config/site';
import { conditions } from '../config/conditions';
import { publishedPosts } from '../utils/posts';

const strip = (s: string) => s.replace(/<[^>]+>/g, '');

export const GET: APIRoute = async () => {
  const a = site.address;
  const u = (p: string) => `${site.url}${p}`;
  const posts = await publishedPosts();
  const body = `# ${site.name}: full details

${site.description}

## Clinic
- Name: ${site.name} (also known as Balanced Chiro)
- Type: family chiropractic clinic
- Address: ${a.street}, ${a.suburb} ${a.state} ${a.postcode}, Australia. ${site.directions}
- Map: ${site.mapsUrl}
- Phone: ${site.phone}
- Email: ${site.email}
- Book online: ${u('/book-online-yandina')}
- Opening hours:
${site.hours.map((h) => `  - ${h.days}: ${h.time}`).join('\n')}
- Areas served: ${site.areaServed.join(', ')}
- No referral needed. New patients welcome, including children and pregnant women.

## Chiropractors
${team.map((m) => `- ${m.name}, ${m.credentials}. ${u(m.page ?? '/about')}`).join('\n')}

## How a first visit works
1. Comprehensive assessment (about 30 minutes): health history, Thermpix thermography (thermal nerve) scan with AI-assisted analysis, spinal palpation, neurological and orthopaedic tests, and in-house X-rays with motion studies only if clinically required.
2. Report of findings: results explained in plain English, with a staged care plan and progress re-checks.
More: ${u('/new-patients')}

## Conditions
${conditions.map((c) => `### ${c.name}
Page: ${u('/' + c.slug)}
${strip(c.intro)}

Common signs:
${c.signs.map((s) => `- ${s}`).join('\n')}

Our approach:
${c.focus.map((s) => `- ${s}`).join('\n')}

Questions:
${c.faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join('\n')}
`).join('\n')}
## Blog
${posts.map((p) => `- [${p.data.title}](${u('/blog/' + p.id)}): ${p.data.description}`).join('\n')}

Individual results vary. Care is tailored to each person after a history and examination.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
