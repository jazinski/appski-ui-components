# CLOUDFLARE CACHE ISSUE!

## The Real Problem

The production server (http://10.15.10.9:6606) **HAS THE CORRECT VERSION**:

- ✅ Dark mode: `base:"dark"`
- ✅ Commit hash: `f9480ba`
- ✅ No logos: 404 on `/logo-light.jpg`

But Cloudflare is caching the OLD version:

- ❌ https://ui.appski.me/logo-light.jpg returns 200 (cached)
- ❌ Browser sees old JavaScript bundles (cached)

## Solution: Purge Cloudflare Cache

### Option 1: Cloudflare Dashboard

1. Go to https://dash.cloudflare.com
2. Select your domain
3. Go to **Caching** → **Configuration**
4. Click **Purge Everything**
5. Wait 30 seconds
6. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Option 2: Cloudflare API (if you have API token)

```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \
  -H "Authorization: Bearer {api_token}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
```

### Option 3: Purge Specific Files

```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \
  -H "Authorization: Bearer {api_token}" \
  -H "Content-Type: application/json" \
  --data '{
    "files": [
      "https://ui.appski.me/logo-light.jpg",
      "https://ui.appski.me/logo-dark.jpg",
      "https://ui.appski.me/logo.jpg",
      "https://ui.appski.me/sb-addons/storybook-13/manager-bundle.js"
    ]
  }'
```

## Verification

After purging cache:

```bash
# Should return 404 now
curl -I https://ui.appski.me/logo-light.jpg

# Should show f9480ba
curl -s https://ui.appski.me/sb-addons/storybook-13/manager-bundle.js | grep -o 'var i="[^"]*"'
```

Then visit https://ui.appski.me and hard refresh (Ctrl+Shift+R).

## Why This Happened

Cloudflare caches static assets (JS, images, CSS) for performance. When we
deployed new version:

1. ✅ New Docker image deployed to server
2. ✅ Server serves new files
3. ❌ Cloudflare still serves cached old files to browsers
4. ❌ Browsers also cache the old files

## Prevention for Future

Add cache control headers or set up cache purge webhook in CI/CD.
