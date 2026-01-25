# 📦 Deployment Guide

## Overview

This project uses **Docker-only distribution** to keep everything private:

1. **Docker Container** → Private Docker Registry (for Storybook UI at
   ui.appski.me)
2. **Component Library** → Git repository (for code consumption in other
   projects)

**NO public npm packages** - Everything stays private on your infrastructure.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  GitHub Repository (PRIVATE)                                │
│  ├─ Source Code (@appski/ui components)                    │
│  ├─ GitHub Actions (CI/CD)                                 │
│  └─ Storybook Documentation                                │
└─────────────────────────────────────────────────────────────┘
                      │
                      ├──────────────┬──────────────┐
                      ▼              ▼              ▼
          ┌─────────────────┐  ┌──────────────┐  ┌─────────────────────┐
          │   Git Install   │  │    Docker    │  │  Private Registry   │
          │  (consumers)    │  │   (Storybook)│  │ code-server.jazinski│
          │  bun add git+.. │  │              │  │    (Docker images)  │
          └─────────────────┘  └──────────────┘  └─────────────────────┘
                                                           │
                                                           ▼
                                               ┌─────────────────────┐
                                               │  Your Host Server   │
                                               │  Cloudflare Tunnel  │
                                               │  ui.appski.me       │
                                               └─────────────────────┘
```

---

## 🔐 Authentication Setup

### Private Docker Registry Credentials

You need to add these as GitHub Secrets for CI/CD:

1. Go to:
   https://github.com/jazinski/appski-ui-components/settings/secrets/actions
2. Add secrets:
   - `DOCKER_REGISTRY_USERNAME` - Your username for code-server.jazinski.com
   - `DOCKER_REGISTRY_PASSWORD` - Your password/token for
     code-server.jazinski.com

---

## 🐳 Docker Image Distribution

### What Happens Automatically

When you create a GitHub release, the CI/CD pipeline:

1. Builds the Storybook static site
2. Creates a Docker image (Alpine-based, ~50MB)
3. Pushes to your private registry:
   `code-server.jazinski.com/appski-ui-components`

### Image Tags

- `latest` - Most recent release
- `v0.1.0` - Specific version tag

---

## 🚀 Deploying to Your Server

### Option 1: Docker Compose (Recommended)

Create `docker-compose.yml` on your host server:

```yaml
version: "3.8"

services:
  appski-ui-storybook:
    image: code-server.jazinski.com/appski-ui-components:latest
    container_name: appski-ui-storybook
    ports:
      - "3010:80"
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 128M
    networks:
      - appski-network

networks:
  appski-network:
    driver: bridge
```

Deploy:

```bash
# On your host server
docker-compose pull
docker-compose up -d
```

### Option 2: Direct Docker Run

```bash
# On your host server
# Login to your private registry
docker login code-server.jazinski.com

# Pull latest image
docker pull code-server.jazinski.com/appski-ui-components:latest

# Run container
docker run -d \
  --name appski-ui-storybook \
  -p 3010:80 \
  --restart unless-stopped \
  --cpus="0.5" \
  --memory="128m" \
  code-server.jazinski.com/appski-ui-components:latest
```

### Option 3: Using Caddy (Even Lighter - 40MB)

```bash
# Build with Caddy
docker build -f Dockerfile.caddy -t code-server.jazinski.com/appski-ui-components:caddy .
docker push code-server.jazinski.com/appski-ui-components:caddy

# Run on server
docker run -d \
  --name appski-ui-caddy \
  -p 3011:80 \
  --restart unless-stopped \
  code-server.jazinski.com/appski-ui-components:caddy
```

---

## 🔄 Update Workflow

When you want to deploy a new version:

```bash
# 1. On development machine
git add .
git commit -m "feat: add new components"
git push origin main

# 2. Create new version
npm version minor  # 0.1.0 -> 0.2.0
git push origin main --tags

# 3. Create GitHub Release
# Go to: https://github.com/jazinski/appski-ui-components/releases/new
# - Select the new tag
# - Add release notes
# - Publish release

# 4. GitHub Actions automatically:
# - Publishes npm package
# - Builds & pushes Docker image to your registry

# 5. On your host server
docker-compose pull
docker-compose up -d
# Or
docker pull code-server.jazinski.com/appski-ui-components:latest
docker restart appski-ui-storybook
```

---

## 📥 Installing Package in Other Projects

### Setup Authentication (One-time)

Create `.npmrc` in your project root:

```bash
@jazinski:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install

```bash
bun add @jazinski/ui
# or
npm install @jazinski/ui
```

### Import

```tsx
import { Button, Card, Input } from "@jazinski/ui";
import "@jazinski/ui/styles.css";
```

---

## 🌐 Accessing Storybook UI

**Production URL:** https://ui.appski.me

After deployment on your server:

- Direct: `http://your-server-ip:3010`
- Production: `https://ui.appski.me` (configured with reverse proxy + SSL)

### Nginx Reverse Proxy Configuration

Create `/etc/nginx/sites-available/ui.appski.me`:

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name ui.appski.me;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name ui.appski.me;

    # SSL certificates (use certbot for Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/ui.appski.me/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ui.appski.me/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Docker container
    location / {
        proxy_pass http://localhost:3010;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
    
    # Access logs
    access_log /var/log/nginx/ui.appski.me.access.log;
    error_log /var/log/nginx/ui.appski.me.error.log;
}
```

Enable the site:

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/ui.appski.me /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### Setup SSL with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d ui.appski.me

# Auto-renewal is set up by default
# Test renewal
sudo certbot renew --dry-run
```

}

````
---

## 🔧 Docker Registry Configuration

### On Your Private Registry (code-server.jazinski.com)

Ensure your Docker registry is accessible:

```bash
# Test login
docker login code-server.jazinski.com

# List images (if you have access)
curl -u username:password https://code-server.jazinski.com/v2/_catalog
````

### GitHub Secrets Required

In GitHub repo settings → Secrets → Actions:

- `DOCKER_REGISTRY_USERNAME`
- `DOCKER_REGISTRY_PASSWORD`
- `GITHUB_TOKEN` (automatically provided)

---

## 🎯 Image Size Comparison

| Option         | Base Image            | Final Size | Memory Usage |
| -------------- | --------------------- | ---------- | ------------ |
| Nginx Alpine   | `alpine:3.19` + nginx | ~50MB      | ~32-64MB     |
| Caddy Alpine   | `caddy:2-alpine`      | ~40MB      | ~32-64MB     |
| Nginx Official | `nginx:alpine`        | ~45MB      | ~32-64MB     |

**Recommendation:** Use the main `Dockerfile` (Alpine + Nginx) for best balance
of size and familiarity.

---

## 🚨 Troubleshooting

### Docker Registry Authentication Failed

```bash
# Check credentials
docker login code-server.jazinski.com

# Verify GitHub secrets are set correctly
# Go to: repo settings → Secrets → Actions
```

### Can't Pull from Private Registry

```bash
# On your host server, login first
docker login code-server.jazinski.com

# Then pull
docker pull code-server.jazinski.com/appski-ui-components:latest
```

### Image Not Found

```bash
# List available tags
docker pull code-server.jazinski.com/appski-ui-components:latest

# Check GitHub Actions logs
# Go to: Actions tab → Latest workflow run
```

### Port Already in Use

```bash
# Check what's using the port
netstat -tuln | grep 3010

# Stop conflicting container
docker stop $(docker ps -q --filter "publish=3010")

# Or use a different port
docker run -p 3011:80 ...
```

---

## 📊 Monitoring & Maintenance

### Check Container Health

```bash
# View logs
docker logs appski-ui-storybook

# Check health status
docker inspect appski-ui-storybook | grep -A 5 Health

# Container stats
docker stats appski-ui-storybook
```

### Update Image

```bash
# Pull latest
docker pull code-server.jazinski.com/appski-ui-components:latest

# Recreate container
docker-compose up -d --force-recreate
```

### Cleanup Old Images

```bash
# Remove old images
docker image prune -a

# Remove specific old version
docker rmi code-server.jazinski.com/appski-ui-components:v0.0.1
```

---

## 📚 Additional Resources

- [GitHub Packages Documentation](https://docs.github.com/en/packages)
- [Docker Registry Documentation](https://docs.docker.com/registry/)
- [Alpine Linux](https://alpinelinux.org/)
- [Nginx Docker](https://hub.docker.com/_/nginx)
- [Caddy Server](https://caddyserver.com/)
