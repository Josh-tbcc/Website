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
| `booking.url` | Zurili → Online Booking settings → your **public booking page link**. (We don't need API keys. Please **don't** paste API keys into the website, because anything on a website is public.) |
| `intakeFormUrl` | Jotform → your new patient form → Publish → copy link |
| `metaPixelId` | Daina / Meta Events Manager → Data sources → Pixel ID (a long number) |
| `videos.*` | Upload each video to YouTube (Unlisted is fine), copy the ID after `v=` in the link |
| `social.*` | Your Facebook, Instagram and Google Reviews links |

Photos: drop them into `public/images/` with the file names shown on the placeholders
(e.g. `hero.jpg`, `team.jpg`, `dr-josh.jpg`, `thermography-scan.jpg`, `logo.png`).
Resize photos to about **2000px wide** first. Your originals are 7–10MB each, which is too slow for phones.

> If Zurili's booking page refuses to load inside the site (some systems block that),
> set `booking.embed` to `false` and the Book button will open Zurili in a new tab instead.

## Step 6: Point the domain at Netlify (go-live day)

1. In Netlify → **Domain management → Add a domain** → `thebalancedchiro.com.au`. Also add `www.thebalancedchiro.com.au`.
2. Netlify will show you the DNS records to add. At your registrar (VentraIP etc.) → DNS:
   - **A record** for `@` (the bare domain) → `75.2.60.5` (Netlify's load balancer. Use whatever Netlify shows you if it differs.)
   - **CNAME** for `www` → `your-site-name.netlify.app`
   - **Delete only** the old A / CNAME records that pointed at Perfect Patients.
   - **Leave MX and TXT records alone** (that's your email).
3. Wait 15 minutes to a few hours. Netlify issues a free HTTPS certificate automatically.
4. Test: open the site on your phone (on 4G, not the clinic wifi), send yourself an email,
   submit a test lead, make a test booking.

Choose a quiet time (e.g. Sunday evening). If anything goes wrong, putting the old A record
back restores the Perfect Patients site.

## Step 7 (optional): Send leads straight into your Google Sheet

1. Open the **Facebook – Leads – Yandina** sheet → add a tab called `Website Leads`.
2. **Extensions → Apps Script**, paste this, then **Save**:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Website Leads');
  const p = e.parameter;
  sheet.appendRow([new Date(), p.name, p.phone, p.email, p.concern, p.location,
                   p.utm_source, p.utm_campaign, p.utm_content]);
  return ContentService.createTextOutput('ok');
}
```

3. **Deploy → New deployment → Web app**. Execute as: **Me**. Who has access: **Anyone**. Copy the URL.
4. Paste that URL into `offer.sheetWebhook` in `src/config/site.ts`.

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
- [ ] Old Perfect Patients page links: send Claude the list of old URLs and we'll add redirects so Google traffic isn't lost.

---

## Advertising compliance note (AHPRA)

Chiropractors are regulated health practitioners, so the website must follow the
AHPRA advertising guidelines. The site has been written with this in mind:

- **No patient testimonials** about clinical outcomes on the website. Linking out to your Google reviews is fine.
- **No guarantees** or "cure" language; "individual results vary" disclaimers are included.
- **Thermography** is described as part of a comprehensive assessment, not as a stand-alone diagnostic test.
- **The $49 offer** states it's for new patients and what's included, with no pressure or time-limit language.

Please run any new ad copy or page wording past these rules before publishing.
