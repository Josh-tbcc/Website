# The Balanced Chiropractic Centre: Website

New website for **thebalancedchiro.com.au**, built with [Astro](https://astro.build) and hosted on Netlify.

## Pages

| Page | Address | Purpose |
|---|---|---|
| Home | `/` | Main site: long-term care message, thermography, new patient process |
| New Patients | `/new-patients` | Visit 1 & 2 explained, intake form, FAQs |
| Thermal Scan | `/thermography` | Thermpix scan explained |
| X-Ray | `/in-house-x-ray` | In-house full-spine and motion X-ray explained |
| Who We Help | `/who-we-help` | Families, kids, pregnancy, athletes, chronic issues, wellness |
| Workshops | `/wellness-workshops` | Monthly wellness workshop (first Wednesday, 6pm) with RSVP form |
| About | `/about` | Mission, team, values |
| Contact | `/contact-us` | Address, hours, map |
| Book Online | `/book-online-yandina` | Zurili booking embedded on our own page (new + existing patients) |
| Condition pages | `/back-pain`, `/neck-pain`, `/headaches`, `/sciatica`, `/hip-pain`, `/arthritis`, `/poor-posture`, `/stress`, `/pregnancy-chiropractic` | Local SEO pages at the same addresses as the old site. Content lives in `src/config/conditions.ts` |
| **Meta ad landing page** | `/offer` | $49 Initial Assessment lead form, with no menu so visitors stay on the offer |
| Thank you | `/offer/thank-you` | Shown after a lead submits (fires the Meta `Lead` event) |
| Privacy | `/privacy` | Privacy policy |

## Editing details

Almost everything (phone, hours, booking embed, Meta Pixel, videos, team bios)
is in **`src/config/site.ts`**. Search that file for `TODO` to see what's still missing.

Old website addresses that no longer exist are redirected in **`public/_redirects`**.

Videos live in **`public/videos/`** (`name.mp4` plus a `name.jpg` cover image and optional `name.vtt` captions) and are chosen in the `videos` section of `src/config/site.ts`. Keep them compressed (720p, a few MB each).

Photos go in **`public/images/`**. Each grey placeholder on the site shows the exact file name it's waiting for.

## Going live

See **[docs/GO-LIVE.md](docs/GO-LIVE.md)** for the step-by-step guide: domain transfer from
Perfect Patients, Netlify setup, DNS (without breaking email), and lead capture.

## For developers

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build to dist/
```
