# Google Sheet lead script (Apps Script)

Sheet: **Facebook – Leads – Yandina** · tabs `Website Leads` and `Lead Tracking`
(the script creates `Lead Tracking` and both header rows itself if they're missing).

- `Website Leads`: the patient's details only (what you call back from).
- `Lead Tracking`: where each lead came from, for retargeting and reporting. Join the two
  tabs on **Lead ID**. These fields never appear in the Netlify notification emails.

Update: Extensions → Apps Script → paste → Save → Deploy → **Manage deployments** → ✏️ →
Version: **New version** → Deploy (keeps the same web-app URL, so the website needs no change).

```js
function doPost(e) {
  var lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.getActive(), p = e.parameter, now = new Date();
    var v = function (k) { return p[k] || ''; };

    var leads = ss.getSheetByName('Website Leads') || ss.insertSheet('Website Leads');
    if (leads.getLastRow() === 0) leads.appendRow(['Received','Lead type','Page','First name','Last name',
      'Email','Phone','Reason','Travel to Yandina','Suburb','Marketing OK','Lead ID']);
    leads.appendRow([now, v('lead_type'), v('page'), v('first_name'), v('last_name'), v('email'), v('phone'),
      v('reason'), v('travel'), v('suburb'), p.marketing_consent === 'yes' ? 'Yes' : 'No', v('lead_id')]);

    var track = ss.getSheetByName('Lead Tracking') || ss.insertSheet('Lead Tracking');
    if (track.getLastRow() === 0) track.appendRow(['Received','Lead ID','Lead type','Sent from page',
      'utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid',
      'Landing page','First visit','Referring site']);
    track.appendRow([now, v('lead_id'), v('lead_type'), v('page'), v('utm_source'), v('utm_medium'),
      v('utm_campaign'), v('utm_content'), v('utm_term'), v('fbclid'), v('gclid'),
      v('landing_page'), v('first_seen'), v('referrer')]);

    return ContentService.createTextOutput('ok');
  } finally { lock.releaseLock(); }
}
```

What the tracking means:
- **utm_*** – the tags on the ad link (e.g. `utm_source=facebook&utm_campaign=49-assessment`).
  The latest ad the person clicked wins; if none, the tags from their first visit.
- **fbclid / gclid** – Facebook / Google click IDs (used to match leads back to ads).
- **Landing page** – the page their ad sent them to. **Sent from page** – where they filled in the form.
- **First visit** – when they first came to the site. **Referring site** – e.g. google.com, facebook.com.
