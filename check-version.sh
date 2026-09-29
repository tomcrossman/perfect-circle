#!/bin/sh
# The service worker serves from its cache until the cache name changes, so a
# release that forgets to bump it hands phones the old game. Keep them level.
app=$(grep -o "APP_VERSION = '[^']*'" index.html | cut -d"'" -f2)
sw=$(grep -o "perfect-circle-[^']*" sw.js | head -1 | sed 's/perfect-circle-//')
if [ "$app" = "$sw" ]; then echo "ok: both $app"; else echo "MISMATCH: app $app, sw cache $sw"; exit 1; fi
