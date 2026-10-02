# Blog and fortnightly newsletter

## How the blog works

- Posts are Markdown files in `src/content/blog/`. Each has a `date` at the top.
- A post appears on the website (and in the email feed) once its date has passed.
  Twelve posts are written, one per fortnight from September 2026 to February 2027.
- On the morning a post is due, the live site rebuilds itself so the post goes live that day
  (about 10:15am). On days with no post nothing runs, which keeps Netlify usage low.
  **One-time setup:**
  1. Netlify → Site configuration → Build & deploy → **Build hooks** → *Add build hook*
     (name it "Blog publish", branch `main`). Copy the URL.
  2. GitHub → the Website repository → Settings → Secrets and variables → Actions →
     *New repository secret*: name `NETLIFY_BUILD_HOOK`, value = the URL.
  That's it. GitHub checks `.github/workflows/scheduled-publish.yml` each morning and only
  triggers a build when a post is dated today.

## Fortnightly email to patients (sent from Spinalogic)

Spinalogic's **Email marketing** feature emails patients straight from your patient list,
so there's nothing extra to set up or upload.

1. In Spinalogic, create a patient group for the newsletter (e.g. patients who have
   agreed to emails).
2. Every fortnight, when a new post goes live, send the ready-made email for that post
   from `docs/NEWSLETTER-EMAILS.md`. Each one has the subject line, a short intro and the
   link to the full article. It takes a couple of minutes.
3. Use the same feature for one-off bulk emails (holiday hours, workshop reminders,
   reactivation emails to patients you haven't seen in a while).

### Consent

Under the **Spam Act 2003** you need consent before emailing someone marketing content,
and every email needs an unsubscribe option.

- Add a tick box to the intake form: *"Yes, I'd like to receive the fortnightly health
  tips email from The Balanced Chiropractic Centre."* Only include patients who tick it.
- People who sign up on the website (not yet patients) appear in Netlify →
  **Forms → newsletter**. Reception can add them in Spinalogic if it allows non-patient
  contacts, or reply to them directly.

## Adding a new post

Copy an existing file in `src/content/blog/`, change the details at the top and write the
article underneath. Keep posts educational and AHPRA-compliant: no testimonials, no
guarantees, no claims to treat non-musculoskeletal conditions. Or ask Claude to write the
next batch.
