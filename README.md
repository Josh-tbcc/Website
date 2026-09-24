# The Balanced Chiropractic Centre: Website

New website for **thebalancedchiro.com.au**, built with [Astro](https://astro.build) and hosted on Netlify.

## Pages

| Page | Address | Purpose |
|---|---|---|
| Home | `/` | Main site: long-term care message, thermography, new patient journey |
| New Patients | `/new-patients` | Visit 1 & 2 explained, intake form, FAQs |
| Thermal Scan | `/thermography` | Thermpix scan explained |
| Who We Help | `/who-we-help` | Families, kids, pregnancy, athletes, chronic issues, wellness |
| About | `/about` | Mission, team, values |
| Contact | `/contact` | Address, hours, map |
| Book Online | `/book` | Zurili booking (new + existing patients) |
| **Meta ad landing page** | `/offer` | $49 Initial Assessment lead form, with no menu so visitors stay on the offer |
| Thank you | `/offer/thank-you` | Shown after a lead submits (fires the Meta `Lead` event) |
| Privacy | `/privacy` | Privacy policy |

## Editing details

Almost everything (phone, hours, booking link, Meta Pixel, video IDs, team bios)
is in **`src/config/site.ts`**. Search that file for `TODO` to see what's still missing.

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
