# DNS records for thebalancedchiro.com.au

Captured 2 October 2026 from the Perfect Patients (Vortala) nameservers
(ns3–ns6.vortala.com), before moving DNS to Netlify.

## Website (replaced by Netlify)

| Type | Name | Old value (Perfect Patients) | New value |
|---|---|---|---|
| A | @ | 99.84.132.27 / .83 / .4 / .88 (Amazon CloudFront) | Created automatically by Netlify DNS |
| CNAME | www | thebalancedchiro.com.au | Created automatically by Netlify DNS |

## Email: Google Workspace (copy exactly)

| Type | Name | Priority | Value |
|---|---|---|---|
| MX | @ | 1 | aspmx.l.google.com |
| MX | @ | 5 | alt1.aspmx.l.google.com |
| MX | @ | 5 | alt2.aspmx.l.google.com |
| MX | @ | 10 | alt3.aspmx.l.google.com |
| MX | @ | 10 | alt4.aspmx.l.google.com |

## TXT records (copy exactly)

| Type | Name | Value |
|---|---|---|
| TXT | @ | `v=spf1 include:_spf.google.com ~all` |
| TXT | @ | `google-site-verification=18LSnmUS-GMUcmv6qtO3ZS0DlcD5rudni6dOiuYlX28` |
| TXT | _dmarc | `v=DMARC1; p=none` |
| TXT | google._domainkey | see below |

DKIM (`google._domainkey`), one line, no spaces:

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjilM9mSeu2RSAgNxeJFcufdE5F9GaxpLpV7T5re8mCzGuCkFj2J+qTAIxw6NYLfj33cZo+uGYsCbG7P+9MCKrN4vEsZbLcm2zOoGLbOUGAvU1A7VEijL0HDyez/0e5Xpf6fpYh+q9Lf1qYkp/IbLGwOMATURfh9UJl6QZ9W9KZfdF3dT3aiGBhdgRzxGNqy4IP1BGxwcZiU/CqQWsvJuqw/9Ew7oD6obXrC6tiYPydZfM6qzK5ggyGSS1hmae62x2RmHa6cnAFfoVY+giVmnpbD1mE2cwIcPlnuFbjTy5APcfZxgxkEPKALpddVcGN9outSETyGUjvgIb7i2S1teBwIDAQAB
```

If Perfect Patients' zone export shows any other records (e.g. subdomains), add those too.
