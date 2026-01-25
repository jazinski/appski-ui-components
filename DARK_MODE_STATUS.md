# Dark Mode Deployment - Current Status

## What We Found

### ✅ The Code is Perfect

- Dark mode configuration is correct in `.storybook/manager.ts`
- Commit hash injection works perfectly (bash script)
- Logo files removed successfully
- **Local build works 100%** - dark mode, no logos, commit hash displayed

### ✅ The CI/CD Pipeline Works

- Build job executes bash script: `✅ Storybook built with commit: 94c05a3`
- Docker image contains correct files (verified)
- Image pushed to registry successfully
- All jobs green checkmarks

### ✅ The Docker Images Are Correct

**Verified for both commits:**

#### Image: `94c05a3`

```bash
docker run --rm code-server.jazinski.com/appski-ui-components:94c05a3 \
  cat /usr/share/nginx/html/sb-addons/storybook-13/manager-bundle.js | grep 'var i='
# Result: var i="94c05a3"  ✅
```

#### Image: `3bde0b8` (latest)

```bash
docker run --rm code-server.jazinski.com/appski-ui-components:3bde0b8 \
  cat /usr/share/nginx/html/sb-addons/storybook-13/manager-bundle.js | grep 'var i='
# Result: var i="3bde0b8"  ✅
```

Both images:

- ❌ **NO** logo files
- ✅ Correct commit hash injected
- ✅ Dark theme: `base:"dark"`

---

## ❌ The Root Problem: Production Server Configuration

### Issue

The **systemd service** on the production server uses the **wrong Docker Compose
file**.

**Current systemd service (`/etc/systemd/system/appski-ui-storybook.service`):**

```systemd
ExecStart=/usr/bin/docker compose up -d
```

This uses `docker-compose.yml` which has:

```yaml
services:
  storybook-nginx:
    build:
      context: .
      dockerfile: Dockerfile
```

**Problems:**

1. Uses `build:` instead of `image:` - builds locally, doesn't pull from
   registry
2. Doesn't specify commit SHA tag
3. Falls back to `:latest` tag which may be stale

### What Actually Happens

```
CI/CD: "I built and pushed 3bde0b8 to registry! ✅"
       ↓
Deployment workflow: "I copied docker-compose.prod.yml and pulled 3bde0b8! ✅"
       ↓
Systemd service: "Restarting..." 
       ↓ (reads OLD service file)
       ↓
Docker Compose: "Using docker-compose.yml with build: directive"
       ↓
       "Ignoring registry, using local build or :latest"
       ↓
Production: **STILL SHOWS OLD VERSION** ❌
```

---

## ✅ The Solution

### Step 1: Run Fix Script on Production Server

**SSH to production server:**

```bash
ssh user@10.15.10.9
```

**Run the fix script:**

```bash
cd /opt/appski-ui-components

# Copy from the repo (if you have it)
# OR manually create the file with contents from:
# scripts/fix-production-service.sh

chmod +x scripts/fix-production-service.sh
sudo ./scripts/fix-production-service.sh
```

### Step 2: Verify Fix

**Check service file:**

```bash
cat /etc/systemd/system/appski-ui-storybook.service | grep ExecStart
# Should show: ExecStart=/usr/bin/docker compose -f docker-compose.prod.yml up -d
```

**Check running container:**

```bash
docker ps --format "table {{.Image}}\t{{.Status}}" | grep appski
# Should show commit-tagged image, not :latest
```

### Step 3: Deploy Specific Version

**Manual deployment of commit `94c05a3` (dark mode):**

```bash
cd /opt/appski-ui-components
export COMMIT_SHA=94c05a3
sudo systemctl restart appski-ui-storybook.service
```

**Or use the latest commit:**

```bash
cd /opt/appski-ui-components
export COMMIT_SHA=3bde0b8
sudo systemctl restart appski-ui-storybook.service
```

---

## ✅ Verification Steps

After running the fix script and deploying `94c05a3`:

### 1. Check Container Image

```bash
docker ps --format "{{.Image}}" | grep appski
# Expected: code-server.jazinski.com/appski-ui-components:94c05a3
```

### 2. Check Commit Hash in Running Container

```bash
docker exec appski-ui-storybook cat /usr/share/nginx/html/sb-addons/storybook-13/manager-bundle.js | grep -o 'var i="[^"]*"'
# Expected: var i="94c05a3"
```

### 3. Check for Logo Files

```bash
docker exec appski-ui-storybook ls /usr/share/nginx/html/*.jpg 2>&1
# Expected: "No such file or directory"
```

### 4. Test in Browser

```bash
# Clear browser cache first (Ctrl+Shift+R or Cmd+Shift+R)
curl -I https://ui.appski.me
# Then visit in browser - should see DARK MODE
```

### 5. Use Playwright to Verify

```bash
cd ~/projects/appski-ui-components
bun playwright test --grep "verify dark mode deployment"
```

---

## 📋 What We Committed

### Commit: `3bde0b8` - "fix: use production compose file with commit-tagged images"

**Files Changed:**

1. **`docker-compose.prod.yml`** (NEW)
   - Uses `image:` with `${COMMIT_SHA}` variable
   - Pulls from registry instead of building locally
   - Production-ready configuration

2. **`.github/workflows/ci.yml`**
   - Added checkout step for production compose file
   - Export `COMMIT_SHA` environment variable
   - Use `docker-compose.prod.yml` in deployment
   - Display image tag in logs

3. **`DEPLOYMENT.md`**
   - Documented the root cause issue
   - Added troubleshooting section
   - Updated status and next steps

4. **`scripts/fix-production-service.sh`** (NEW)
   - Automated script to update systemd service
   - Backs up old service file
   - Creates new service file with docker-compose.prod.yml
   - Restarts service and verifies

---

## 🎯 Expected Outcome

Once the systemd service is fixed and `94c05a3` is deployed:

### Production (https://ui.appski.me) Should Show:

✅ **DARK MODE**

- Background: `rgb(15, 23, 42)` (slate-900)
- Sidebar: `rgb(30, 41, 59)` (slate-800)
- Text: Light colors

✅ **NO LOGO IMAGES**

- `/logo.jpg` - 404
- `/logo-light.jpg` - 404
- `/logo-dark.jpg` - 404

✅ **TEXT-ONLY BRANDING**

- "Appski UI" text in sidebar
- No image elements

✅ **COMMIT HASH DISPLAYED**

- "commit: 94c05a3" visible below branding
- Confirms exact deployed version

---

## 🚀 Future Deployments

Once the systemd service is fixed, **all future deployments will work
automatically**:

1. Push to `main` branch
2. CI/CD builds image with commit SHA (e.g., `abc1234`)
3. CI/CD pushes image to registry as `:abc1234`
4. Deployment workflow:
   - Copies `docker-compose.prod.yml` to server
   - Sets `COMMIT_SHA=abc1234`
   - Pulls `code-server.jazinski.com/appski-ui-components:abc1234`
   - Restarts systemd service
5. Systemd service:
   - Uses `docker-compose.prod.yml`
   - Respects `COMMIT_SHA` environment variable
   - Starts container with exact commit-tagged image

**No more "it worked in CI but not in production" issues! 🎉**

---

## 📞 Next Action Required

**MANUAL STEP NEEDED:**

Someone with SSH access to the production server (`10.15.10.9`) needs to:

1. Run `/opt/appski-ui-components/scripts/fix-production-service.sh`
2. Deploy dark mode:
   `export COMMIT_SHA=94c05a3 && sudo systemctl restart appski-ui-storybook.service`
3. Verify: Visit https://ui.appski.me and confirm dark mode

**That's it!** After this one-time fix, everything will work automatically.

---

**Status:** ⏳ **WAITING FOR MANUAL SERVER FIX**\
**Blocker:** Systemd service uses old compose file\
**ETA:** < 5 minutes once someone SSH's to production server
