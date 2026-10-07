# Go-Live Guide: moving thebalancedchiro.com.au off Perfect Patients

Your web address **does not change**. We are only changing *where the website lives*.
Think of the domain as your street address and the hosting as the building. We're moving
into a new building and redirecting the street address to it.

Do the steps in order. Nothing goes live until Step 6, and the old site keeps
running untouched until then.

---

## Step 1: Save what you need from Perfect Patients (do this first)

Perfect Patients stores more than the website. Before you give notice:

- [ ] **Export your patient/contact list** from their backend (CSV). Ask support for a full export,
      including email addresses and any tags/segments.
- [ ] **Screenshot or copy every email automation** (welcome sequences, birthday emails,
      reactivation, newsletters) and write down when each one sends. You'll need to rebuild these
      elsewhere (see Step 8).
- [ ] **Copy any blog posts** you want to keep (we can re-add them to the new site).
- [ ] **Write down the current opening hours and phone number** as shown on the site, then update `src/config/site.ts`.
- [ ] **Ask them this exact question:**
      > "Who is the registrant of thebalancedchiro.com.au, which registrar is it with, and who
      > manages the DNS? Please send me the domain's auth/EPP code so I can transfer it into my
      > own account."

## Step 2: Get control of your domain

`.com.au` domains must be registered to an Australian business (your ABN), so the
domain legally belongs to you even if Perfect Patients set it up.

1. Create an account with an Australian registrar. **VentraIP** (ventraip.com.au) or
   **Crazy Domains** are both fine. VentraIP has good Aussie support.
2. Choose **Transfer a domain**, enter `thebalancedchiro.com.au` and the **auth/EPP code** from Perfect Patients.
3. Approve the transfer email that goes to the registrant contact. Transfers usually take 1–5 days.
4. Make sure the registrant contact email is **your** email (josh@thebalancedchiro.com.au) and the ABN is correct.

> ⚠️ **Don't change anything else yet.** During the transfer, keep the existing DNS
> records exactly as they are so your website and email keep working.

**Before changing any DNS, write down every existing DNS record** (screenshot the DNS page).
The critical ones are your **MX records** (Google Workspace email) and any **TXT** records
(Google verification, SPF, DKIM, DMARC). If these are lost, **email stops working**.

## Step 3: Put the code on GitHub (done ✅)

The website code lives in the GitHub repository `josh-tbcc/website`. Every change is saved there.

## Step 4: Create a free Netlify account and connect the site

1. Go to **netlify.com** and sign up with your GitHub account.
2. **Add new site → Import an existing project → GitHub →** pick `josh-tbcc/website`.
3. Choose the main branch (once we merge this work in). Netlify reads the settings from `netlify.toml` automatically.
4. Click **Deploy**. In about a minute you'll get a preview address like
   `balanced-chiro.netlify.app`. **Check every page there first.**
5. In Netlify → **Forms**, turn on form detection. Leads from the `/offer` page will appear
   here. Set up **email notifications** so reception is emailed every new lead
   (Site configuration → Notifications → Form submission notifications).

Cost: Netlify's free plan covers a site this size. Forms include 100 free submissions/month.
Past that, the Forms add-on is about US$19/month. Or connect Google Sheets (Step 7) and
leads also go straight into your existing Facebook leads sheet.

## Step 5: Fill in the missing details

Edit `src/config/site.ts` (in GitHub you can click the file, then the ✏️ pencil icon, then **Commit**).
Netlify republishes automatically within a minute.

| Setting | Where to get it |
|---|---|
| `phone`, `email`, `hours` | Current website |
| `booking.embedCode` | Zurili → Online Booking / website settings → **embed code** (a `<script>` or `<iframe>` snippet). Or copy it from the current booking page: open thebalancedchiro.com.au/book-online-yandina, right-click → **View Page Source**, search for `zurili`, and copy those lines. Never paste API keys into the website. |
| `intakeFormUrl` | Jotform → your new patient form → Publish → copy link |
| `metaPixelId` | Daina / Meta Events Manager → Data sources → Pixel ID (a long number) |
| `videos.*` | Upload each video to YouTube (Unlisted is fine), copy the ID after `v=` in the link |
| `social.*` | Your Facebook, Instagram and Google Reviews links |

Photos: drop them into `public/images/` with the file names shown on the placeholders
(e.g. `hero.jpg`, `team.jpg`, `dr-josh.jpg`, `thermography-scan.jpg`, `logo.png`).
Resize photos to about **2000px wide** first. Your originals are 7–10MB each, which is too slow for phones.

> Booking stays on thebalancedchiro.com.au/book-online-yandina (good for SEO). If Zurili only
> gives you a link rather than embed code, put it in `booking.url` and it shows in a frame on the page.

## Step 6: Point the domain at Netlify (go-live day)

Your DNS is hosted by Perfect Patients (nameservers ns3–ns6.vortala.com), so the switch is done
by moving the nameservers to Netlify DNS. Follow **Stage 2 in `docs/TRANSITION-CHECKLIST.md`**,
using the records in `docs/DNS-RECORDS.md`.

## Step 7: Send website leads into the Google Sheet

There are two lead forms:
- `/offer` landing page, Netlify form **offer-lead** (`lead_type` = "Meta ad – $49 assessment"; counts as a Meta **Lead**)
- the site-wide "Free new patient phone call" swipe pop-up, Netlify form **free-call**
  (`lead_type` = "Website – free phone call", plus `page` = the page it was sent from).
  This one is deliberately **not** sent to Meta as a Lead: it fires custom events
  `WebsiteCallFormOpened` / `WebsiteCallRequest` instead, so ad results stay clean.

Both send these fields:
`first_name`, `last_name`, `email`, `phone`, `reason` (what made them interested in the offer),
`travel` (local / happy to travel / not sure / no), `suburb`, `marketing_consent` ("yes" if ticked).

**Option A: Zapier (recommended if you already use it)**
1. Zapier → Create Zap → Trigger app **Netlify** → event **New Form Submission**.
2. Connect the Netlify account, choose the site and the form **offer-lead**. Make a second Zap
   (or a second trigger) for the form **free-call**.
3. Action app **Google Sheets** → **Create Spreadsheet Row** → the **Facebook – Leads – Yandina**
   sheet, tab `Website Leads` (add column headers matching the fields above first).
4. Map each field to its column, test, and switch the Zap on.

**Option B: no Zapier (free, direct) — in use.** Current script: `docs/LEADS-SHEET-SCRIPT.md`.

1. In the sheet add a tab called `Website Leads`, then **Extensions → Apps Script**, paste this, **Save**:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Website Leads');
  const p = e.parameter;
  sheet.appendRow([new Date(), p.lead_type, p.page, p.first_name, p.last_name, p.email, p.phone,
                   p.reason, p.travel, p.suburb, p.marketing_consent === 'yes' ? 'Yes' : 'No']);
  return ContentService.createTextOutput('ok');
}
```

2. **Deploy → New deployment → Web app**. Execute as: **Me**. Who has access: **Anyone**. Copy the URL.
3. Paste that URL into `offer.sheetWebhook` in `src/config/site.ts`.

Every lead is also stored in Netlify → **Forms → offer-lead** either way, and Netlify can email
you each one (Forms → Form notifications).

## Step 8: Replace the Perfect Patients email automations

Options, simplest first:
- **Zurili**: check whether it has built-in SMS/email reminders and recall campaigns. It's easiest if it does.
- **Mailchimp** or **Klaviyo**: import the contact export from Step 1 and rebuild the sequences.

Only cancel Perfect Patients **after** the new site is live, email is confirmed working, and your
data export is saved somewhere safe.

## Step 9: After launch

- [ ] Google Business Profile → update the website link if needed (it's the same address, so usually nothing to change).
- [ ] Google Search Console → add the site and submit `https://thebalancedchiro.com.au/sitemap-index.xml`.
- [ ] Meta Events Manager → confirm `PageView`, `Lead` and `Schedule` events are firing.
- [ ] Old page addresses: the booking, contact and condition pages keep their old addresses. Others (blog, workshops, referral program) redirect via `public/_redirects`. Check Google Search Console → Pages for any 404s after launch and add them there.

---

## Advertising compliance note (AHPRA)

Chiropractors are regulated health practitioners, so the website must follow the
AHPRA advertising guidelines. The site has been written with this in mind:

- **No patient testimonials** about clinical outcomes on the website. Linking out to your Google reviews is fine.
- **No guarantees** or "cure" language; "individual results vary" disclaimers are included.
- **Thermography** is described as part of a comprehensive assessment, not as a stand-alone diagnostic test.
- **The $49 offer** states it's for new patients and what's included, with no pressure or time-limit language.

Please run any new ad copy or page wording past these rules before publishing.

## SEO checklist (after the domain points to Netlify)

The website itself is set up for search: keyword page titles ("… Chiropractor Yandina"),
descriptions, Google business details (hours, phone, practitioners, suburbs served),
FAQ and breadcrumb data, a sitemap, and permanent redirects from every old page address.
These steps happen outside the website:

1. **Google Search Console** (search.google.com/search-console): open the
   thebalancedchiro.com.au property (it's already verified by the tag on the site),
   go to **Sitemaps** and submit `sitemap-index.xml`. Then use **URL inspection** on the
   home page and click **Request indexing**.
2. **Google Business Profile**: check the website link is `https://thebalancedchiro.com.au`,
   the hours match the site, and add the booking link
   `https://thebalancedchiro.com.au/book-online-yandina`. Post photos and ask happy patients
   for reviews regularly (reviews are the biggest local ranking factor).
3. **Check rich results**: paste a condition page (e.g. /back-pain) into
   search.google.com/test/rich-results to confirm the FAQ and business details are read.
4. **Directories**: make sure the clinic name, address and phone are written exactly the same
   on Facebook, Instagram, HealthEngine, Yellow Pages, True Local and any other listings.
5. Give it 2–6 weeks. Rankings usually wobble briefly after a site move, then settle.

### Showing up in AI assistants (ChatGPT, Claude, Perplexity, Google AI answers)

AI assistants answer "chiropractor near me" questions by searching the web and quoting
sites, reviews and directories they trust. The site is ready for them: plain-English FAQ
answers, clinic facts in Google's structured format, a summary for AI tools at
`/llms.txt`, and `robots.txt` explicitly allowing AI crawlers. To give yourself the best chance:

1. **Bing Webmaster Tools** (bing.com/webmasters): sign in, choose **Import from Google
   Search Console**, and submit the sitemap. ChatGPT's search relies heavily on Bing.
2. **Google reviews**: steady new reviews that mention the suburb and the problem in the
   patient's own words (e.g. "lower back pain", "Nambour") carry the most weight for both
   Google Maps and AI answers. Never offer incentives for reviews (AHPRA).
3. **Consistent listings**: same name, address, phone and website on Google, Apple Maps
   (Apple Business Connect), Bing Places, Facebook, Instagram, HealthEngine, HotDoc,
   Yellow Pages, True Local and Hotfrog.
4. **Local mentions**: a listing or article on local Sunshine Coast sites (community groups,
   Yandina markets, local sports clubs you support) helps AI tools connect your clinic to
   the area.
