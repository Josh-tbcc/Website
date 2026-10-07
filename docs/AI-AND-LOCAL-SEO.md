# AI search and local SEO checklist

The website side is done (see "What's built in" at the bottom). For searches like
"chiropractor near me", "chiro for lower back pain" or "best chiropractor near me",
Google, ChatGPT, Perplexity, Gemini and Siri also lean heavily on things **outside** the
website. These are the steps, in order of impact.

> **AHPRA:** never call the clinic "the best", and don't copy reviews or testimonials onto
> the website, ads or social posts. You *can* ask patients to leave a Google review and you
> can reply to reviews. "Best chiropractor near me" results are driven by review count,
> rating and how consistent your details are everywhere, which is all allowed.

Use these exact details everywhere (name, address and phone must match character for character):

```
The Balanced Chiropractic Centre
Shop 5, 18 Farrell St, Yandina QLD 4561
07 3496 9345
https://thebalancedchiro.com.au
```

## 1. Google Business Profile (biggest single factor for "near me")
- [ ] Primary category **Chiropractor**. Website: `https://thebalancedchiro.com.au`.
      Appointment link: `https://thebalancedchiro.com.au/book-online-yandina`.
- [ ] Services: add one per condition page (Lower back pain, Neck pain, Headaches, Sciatica,
      Hip pain, Knee pain, Shoulder pain, Upper back pain, Whiplash, Sports, Jaw pain/TMJ,
      Arthritis, Posture, Stress, Pregnancy chiropractic, Thermography scan, In-house X-ray).
- [ ] Description (750 characters): family chiropractor in Yandina near Nambour, thermal scans,
      in-house X-ray if clinically required, kids and pregnancy welcome, suburbs served.
- [ ] Hours match the website. Add holiday hours when they change.
- [ ] Photos: upload the professional shoot now, then 2–3 new photos a month.
- [ ] Posts: share each fortnightly blog post as a Google post (copy the email intro + link).
- [ ] Reviews: ask every happy patient (QR code at reception, link in the post-visit SMS).
      No discounts or incentives. Reply to every review within a few days.

## 2. Bing (ChatGPT search, Microsoft Copilot and DuckDuckGo use Bing's index)
- [ ] Bing Places for Business → import from Google Business Profile.
- [ ] Bing Webmaster Tools → sign in → import the site from Google Search Console →
      submit `https://thebalancedchiro.com.au/sitemap-index.xml`.
- [ ] After go-live, switch on IndexNow so Bing hears about every change straight away:
      GitHub → repository → Settings → Secrets and variables → Actions → **Variables** →
      New variable `INDEXNOW_ENABLED` = `true`.

## 3. Google Search Console
- [ ] Add the domain property, then submit `https://thebalancedchiro.com.au/sitemap-index.xml`.
- [ ] After go-live, use URL Inspection → Request indexing on the homepage and top condition pages.

## 4. Apple (Siri, Apple Maps, Apple Intelligence)
- [ ] Apple Business Connect (businessconnect.apple.com): claim the listing, same details,
      add photos, hours and the booking link.

## 5. Directories and mentions (AI assistants cross-check these)
Same name, address and phone on each:
- [ ] HealthEngine and/or HotDoc profile
- [ ] Healthshare
- [ ] Chiropractic Australia / Australian Chiropractors Association "find a chiropractor"
- [ ] Yellow Pages, True Local, Hotfrog, Yelp, StartLocal
- [ ] Facebook and Instagram: address, phone and website in the About/bio
- [ ] Local mentions: Yandina community groups, the Yandina Country Markets page, local news
      when you run a workshop or community event

## 6. Every month (15 minutes)
- [ ] Ask ChatGPT, Perplexity, Gemini and Google: "chiropractor near Yandina for lower back
      pain", "chiropractor Nambour", "chiro near me Sunshine Coast hinterland". Note what comes up.
- [ ] Search Console → Performance: which questions bring people in? Turn the top ones into blog posts.
- [ ] Check the Google Business Profile for new questions and reviews to answer.

## What's built in (website side)
- One page per condition, each with a "Is there a chiropractor near me for …?" answer,
  FAQ markup, and medical page markup reviewed by Dr Joshua Kassis (`contentReviewed`
  in `src/config/site.ts`; update the date when the condition pages are reviewed).
- Clinic structured data: address, map, coordinates, hours, phone, services, conditions,
  chiropractors and qualifications, suburbs served, booking link, social profiles.
- Area pages: Areas We Serve and Chiropractor Nambour.
- Homepage FAQ covering "near me", choosing a chiropractor, early and after-work hours, nearby suburbs.
- `/llms.txt` (summary) and `/llms-full.txt` (full detail) for AI assistants.
- `robots.txt` allows Google, Bing, ChatGPT, Claude, Perplexity, Apple, Meta and DuckDuckGo crawlers.
- Sitemap, canonical URLs, location meta tags, fast static pages, fortnightly blog.
- IndexNow (Bing) ready to switch on after go-live (step 2).
