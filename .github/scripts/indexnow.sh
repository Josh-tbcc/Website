#!/usr/bin/env bash
# Tells Bing / ChatGPT search (and other IndexNow engines) which pages exist or changed.
# Key file: public/c276ae5c4d89e7e10168c4fe2f8805d2.txt (must stay on the live site).
set -euo pipefail
HOST="thebalancedchiro.com.au"
KEY="c276ae5c4d89e7e10168c4fe2f8805d2"
urls=$(curl -fsS "https://$HOST/sitemap-0.xml" | grep -o '<loc>[^<]*</loc>' | sed -e 's#<loc>##' -e 's#</loc>##')
json=$(printf '%s\n' $urls | python3 -c 'import sys,json; print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')
curl -fsS -X POST "https://api.indexnow.org/indexnow" -H 'Content-Type: application/json; charset=utf-8' \
  -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":$json}" -o /dev/null -w "IndexNow: HTTP %{http_code}\n"
