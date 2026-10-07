# Perfect Patients → new website: transition checklist

**Key dates**
- Cancellation form submitted → Perfect Patients (PP) takedown requested for **1 November 2026**.
- PP's **20 October** payment still goes through (it falls inside the 30-day notice).
- The domain switch (stage 2) **must happen before 1 November**, ideally mid-October, so email never breaks.

Preview site: https://balanced-chiro.netlify.app
DNS records to copy: `docs/DNS-RECORDS.md` (confirmed against PP's own export).

---

## Stage 1 · Before the switch (this week)

**Netlify setup**
- [ ] Netlify → Forms → make sure form detection is **on**. You should see 4 forms:
      `offer-lead` ($49 ad page), `free-call` (swipe bar), `workshop-rsvp`, `newsletter`.
- [ ] Forms → Form notifications → **Email notification** for each of the 4 forms → your email.
- [ ] Blog auto-publishing: Netlify → Site configuration → Build & deploy → Build hooks →
      *Add build hook* ("Blog publish", branch `main`) → copy the URL → GitHub → repository →
      Settings → Secrets and variables → Actions → *New repository secret*
      `NETLIFY_BUILD_HOOK` = the URL.

**Leads into the Google Sheet** (pick ONE, not both)
- [ ] Option A, Zapier: Netlify "New Form Submission" → Google Sheets "Create Row", one Zap for
      `offer-lead` and one for `free-call`, into a `Website Leads` tab.
- [ ] Option B, free: Apps Script in the sheet (see `docs/GO-LIVE.md` step 7) → send the web-app
      URL to Claude to connect.
- [ ] The `lead_type` column separates **"Meta ad – $49 assessment"** from **"Website – free phone call"**.

**Test everything on the preview site** (use your own details, then delete the test rows)
- [ ] $49 page: swipe → form → submit → thank-you page → email notification → sheet row.
- [ ] Free phone call swipe bar (any page) → submit → thank-you → notification → sheet row.
- [ ] Workshop RSVP and newsletter sign-up.
- [ ] Book Online opens Zurili and a test booking works.
- [ ] Read every page once on your phone: hours, team bios, photos (consent for anyone shown).

**Data and accounts**
- [ ] PP Dashboard → Subscribers → Export. Note anyone **unsubscribed** → mark "no marketing" in
      Spinalogic → delete the export file.
- [ ] Google Workspace (admin.google.com → Users): **suspend Michelle and Suzi**; transfer anything
      you need from their mailboxes; add their addresses as aliases if you still want their mail.
- [ ] GoDaddy: change your password (it was shared by email) and turn on 2-step verification.
      Check the domain's **auto-renew is on** and note the expiry date.
- [ ] Ask PP: do they hold any Google Analytics, Search Console, Google Business Profile or
      Facebook access for you? Make sure **you are the owner** of each, then remove their access
      after go-live.

---

## Stage 2 · Switch day (a quiet evening, mid-October, ~30 min + waiting)

- [ ] Netlify → Domain management → **Add a domain** → `thebalancedchiro.com.au` → choose
      **Netlify DNS**.
- [ ] Netlify DNS → add the email records from `docs/DNS-RECORDS.md` exactly:
      5 × MX (Google), TXT SPF, TXT google-site-verification, TXT `_dmarc`, TXT `google._domainkey`
      (use the single-line DKIM key in that file).
- [ ] Netlify shows 4 nameservers → GoDaddy → the domain → **Nameservers** → *Change* →
      *I'll use my own nameservers* → paste Netlify's 4.
- [ ] Wait (usually under an hour, up to 24 h). Netlify issues the free HTTPS certificate itself.
- [ ] Netlify → set **thebalancedchiro.com.au** as the primary domain (www redirects to it).
- [ ] **Test**, on your phone using 4G (not clinic wifi):
  - [ ] https://thebalancedchiro.com.au loads the new site with the padlock
  - [ ] Email **in and out** works (send from Gmail on your phone to your clinic address and back)
  - [ ] All forms submit (as in stage 1)
  - [ ] An old PP link redirects, e.g. `/contact` → Contact page

If anything goes wrong with email, check the MX records first. Putting PP's nameservers back
(ns3–ns6.vortala.com) restores everything while PP is still active.

---

## Stage 3 · First week after the switch

**Search engines and AI**
- [ ] Google Search Console: the site is already verified by a tag on the new site → submit
      `https://thebalancedchiro.com.au/sitemap-index.xml` → URL Inspection → *Request indexing*
      for the homepage and the main condition pages.
- [ ] Bing Webmaster Tools → import from Search Console → submit the same sitemap.
- [ ] Turn on IndexNow: GitHub → Settings → Secrets and variables → Actions → **Variables** →
      `INDEXNOW_ENABLED` = `true`.
- [ ] Google Business Profile: website + appointment link (`/book-online-yandina`), services list,
      new photos. Full list: `docs/AI-AND-LOCAL-SEO.md`.
- [ ] Bing Places (import from Google) and Apple Business Connect.

**Ads and tracking**
- [ ] Meta Business Settings → Brand safety → **Domains** → add and verify
      `thebalancedchiro.com.au` (Meta gives a TXT record → add it in Netlify DNS).
- [ ] Daina: update ad links to `https://thebalancedchiro.com.au/offer?utm_source=facebook&...`;
      Events Manager → Test events → check **Lead** fires.
- [ ] Google Ads: check each ad's final URL still works (old PP page paths redirect, but point
      them at the real new pages).
- [ ] Google Analytics: check real-time visitors show up.

**Update links everywhere**
- [ ] Facebook page and Instagram bio (website + booking link)
- [ ] Email signature, Zurili booking confirmations, Jotform intake form, any QR codes or flyers
- [ ] Directories (HealthEngine/HotDoc, Yellow Pages etc.) with exactly the same name, address, phone

---

## Stage 4 · Replace what Perfect Patients did (automations)

**Fortnightly blog** (12 posts already written and scheduled, Sep 2026 – Feb 2027)
- [ ] Automatic: each post goes live on its date at about 10:15am (needs the build hook from stage 1).
- [ ] Each post day, ~15 min:
  - [ ] Email it to patients from **Spinalogic** using the ready-made email in `docs/NEWSLETTER-EMAILS.md`
        (only to patients who've agreed to receive emails).
  - [ ] Share it as a **Google Business Profile post**.
  - [ ] Facebook/Instagram (or automate below).
- [ ] January 2027: ask Claude for the next batch of posts (Feb–Aug 2027).

**Facebook and Instagram automation**
- [ ] Auto-post each new blog: Zapier **RSS by Zapier** (feed `https://thebalancedchiro.com.au/blog/rss.xml`)
      → **Facebook Pages** "Create Page Post" (and Instagram if wanted). Or, free: schedule all
      12 posts in advance in **Meta Business Suite → Planner** on their publish dates.
- [ ] Meta Business Suite → Inbox → **Automations**: instant reply with the booking link and phone,
      away message outside hours, FAQ replies (hours, location, "do I need a referral?").
- [ ] Meta lead ads (if Daina runs instant forms): keep the existing Zap into the
      "Facebook – Leads – Yandina" sheet.

**Leads and follow-up**
- [ ] Every website or ad lead → email notification → call **same or next business day** →
      record the outcome in the sheet (booked / no answer / not suitable).
- [ ] Monthly with Daina: upload old leads as a Meta Custom Audience; retarget people who opened
      the $49 form but didn't submit. Email/SMS offers only to people who ticked the opt-in box.

**Reviews, reminders, workshops**
- [ ] After a patient's visit: SMS with your Google review link (no incentives; don't repost reviews
      on the website or ads, as AHPRA prohibits testimonials).
- [ ] Appointment reminders and recalls: Zurili / Spinalogic.
- [ ] Wellness workshop (first Wednesday, 6pm): RSVPs arrive by email → send a reminder SMS the day before.

---

## Stage 5 · After 1 November

- [ ] Check the PP site is gone and **no further PP charges** after the final billing period;
      ask PP for the final invoice in writing.
- [ ] GoDaddy → Account → **Delegate Access** → remove Anthony Sarkis / PP access.
- [ ] Remove PP's access from Google Business Profile, Analytics, Search Console and Facebook (if any).
- [ ] Netlify → Usage: check credits after the first full month (stay on $9 or drop to free).

## Every month (20 min)
- [ ] Netlify: form spam and usage. Search Console: top searches → ideas for blog posts.
- [ ] Google Business Profile: 2–3 new photos, answer questions and reviews.
- [ ] Ask ChatGPT / Perplexity / Google "chiropractor near Yandina for lower back pain" and note the results.
