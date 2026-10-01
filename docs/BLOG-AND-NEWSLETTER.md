# Blog and fortnightly newsletter

## How the blog works

- Posts are Markdown files in `src/content/blog/`. Each has a `date` at the top.
- A post appears on the website (and in the email feed) once its date has passed.
  Twelve posts are written, one per fortnight from September 2026 to February 2027.
- The live site rebuilds itself every morning so new posts go live on the right day.
  **One-time setup:**
  1. Netlify → Site configuration → Build & deploy → **Build hooks** → *Add build hook*
     (name it "Daily publish", branch `main`). Copy the URL.
  2. GitHub → the Website repository → Settings → Secrets and variables → Actions →
     *New repository secret*: name `NETLIFY_BUILD_HOOK`, value = the URL.
  That's it. GitHub runs `.github/workflows/scheduled-publish.yml` at 5:30am every day.

## Fortnightly email to patients (replaces Perfect Patients' newsletter)

Use an email marketing service that supports **RSS-to-email** (sometimes called an
"RSS campaign" or "blog digest"), such as MailerLite, Mailchimp or Brevo. Check the
plan you choose includes RSS campaigns.

1. Create an account and a list (audience) called "Patients".
2. Create an **RSS campaign** using the feed
   `https://thebalancedchiro.com.au/blog/rss.xml`, set to send **every 2 weeks**
   (e.g. Thursday 7am). It will automatically email each new post to the list.
3. Add the clinic logo, address and an unsubscribe link (the service does this).

### Adding patients to the list

Under the **Spam Act 2003** you need consent before emailing someone marketing content.

- Add a tick box to the Jotform intake form: *"Yes, I'd like to receive the fortnightly
  health tips email from The Balanced Chiropractic Centre."* Only add patients who tick it.
- Reception adds new consenting patients to the list (one at a time, or a CSV import
  each week). Only add **name and email**. Never upload health information to the
  email service.
- People who sign up on the website appear in Netlify → **Forms → newsletter**.
  Export them as CSV and import them into the list (or connect the two with Zapier).
- Bulk one-off emails (e.g. holiday hours, workshop reminders) are sent from the same
  service as a normal campaign.

## Adding a new post

Copy an existing file in `src/content/blog/`, change the details at the top and write the
article underneath. Keep posts educational and AHPRA-compliant: no testimonials, no
guarantees, no claims to treat non-musculoskeletal conditions. Or ask Claude to write the
next batch.
