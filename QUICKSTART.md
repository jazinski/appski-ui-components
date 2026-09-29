# 🚀 Quick Start Deployment Guide

## Production Deployment to ui.blancski.me

This guide will help you deploy the Blancski UI Component Library to production
using **Cloudflare Tunnel** (no reverse proxy needed).

---

## 📋 Prerequisites

- Server with Docker installed
- Access to `code-server.jazinski.com` (private Docker registry)
- Cloudflare Tunnel already configured for `ui.blancski.me` → `localhost:3010`

---

## 🎯 Deployment Steps

### 1. On Your Server - Install Docker

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y
```

### 2. Login to Private Docker Registry

```bash
docker login code-server.jazinski.com
# Enter your credentials when prompted
```

### 3. Create Project Directory

```bash
# Create directory for the project
mkdir -p /opt/blancski-ui
cd /opt/blancski-ui
```

### 4. Create docker-compose.yml

```bash
cat > docker-compose.yml <<'EOF'
version: '3.8'

services:
  storybook:
    image: code-server.jazinski.com/blancski-ui-components:latest
    container_name: blancski-ui-storybook
    ports:
      - "127.0.0.1:3010:80"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 128M
        reservations:
          cpus: '0.1'
          memory: 32M
    networks:
      - blancski-network
    labels:
      - "com.blancski.service=ui-storybook"
      - "com.blancski.environment=production"

networks:
  blancski-network:
    driver: bridge
EOF
```

### 5. Start the Container

```bash
# Pull latest image
docker-compose pull

# Start container
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### 6. Verify Deployment

```bash
# Check Docker container
docker ps | grep blancski-ui

# Test endpoint locally
curl http://localhost:3010/health
# Should return: "healthy"

# Test public URL (via Cloudflare Tunnel)
curl https://ui.blancski.me
# Should return HTML content
```

---

## 🔄 Update Deployment

When a new version is released:

```bash
cd /opt/blancski-ui

# Pull latest image
docker-compose pull

# Recreate container with new image
docker-compose up -d --force-recreate

# View logs
docker-compose logs -f

# Check health
curl http://localhost:3010/health
```

---

## 🔍 Monitoring & Troubleshooting

### Check Container Health

```bash
# Container status
docker-compose ps

# View logs
docker-compose logs -f

# Check resource usage
docker stats blancski-ui-storybook

# Container details
docker inspect blancski-ui-storybook
```

### Check Nginx

```bash
# Test configuration
sudo nginx -t

# View access logs
sudo tail -f /var/log/nginx/ui.blancski.me.access.log

# View error logs
sudo tail -f /var/log/nginx/ui.blancski.me.error.log

# Check nginx status
sudo systemctl status nginx
```

### Common Issues

#### Container won't start

```bash
# Check logs
docker-compose logs

# Check if port is in use
sudo netstat -tuln | grep 3010

# Restart container
docker-compose restart
```

#### SSL Certificate issues

```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Check nginx SSL config
sudo nginx -t
```

#### Can't access ui.blancski.me

```bash
# Check DNS
dig ui.blancski.me

# Check firewall
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Check if nginx is running
sudo systemctl status nginx

# Check if container is running
docker ps | grep blancski-ui
```

---

## 🔐 Security Checklist

- [x] Container runs on localhost only (127.0.0.1:3010)
- [x] Nginx reverse proxy handles public traffic
- [x] SSL/TLS enabled via Let's Encrypt
- [x] HTTPS redirect enforced
- [x] Security headers configured
- [x] Resource limits on container
- [x] Auto-restart enabled
- [x] Logs configured

---

## 📊 System Requirements

### Minimum

- 1 CPU core
- 512MB RAM
- 10GB disk space

### Recommended

- 2 CPU cores
- 1GB RAM
- 20GB disk space

### Actual Usage (Storybook Container)

- CPU: ~0.1-0.5 cores
- Memory: 32-128MB
- Disk: ~100MB (image + logs)

---

## 🔄 Backup & Recovery

### Backup Configuration

```bash
# Backup docker-compose.yml
sudo cp /opt/blancski-ui/docker-compose.yml /opt/blancski-ui/docker-compose.yml.backup

# Backup nginx config
sudo cp /etc/nginx/sites-available/ui.blancski.me /root/nginx-backup/

# Backup SSL certificates
sudo cp -r /etc/letsencrypt/live/ui.blancski.me /root/ssl-backup/
```

### Disaster Recovery

```bash
# Stop container
cd /opt/blancski-ui
docker-compose down

# Remove container
docker rm blancski-ui-storybook

# Pull fresh image
docker-compose pull

# Start fresh
docker-compose up -d
```

---

## 📈 Monitoring (Optional)

### Setup Simple Monitoring

```bash
# Create monitoring script
cat > /opt/blancski-ui/monitor.sh <<'EOF'
#!/bin/bash

# Check if container is running
if ! docker ps | grep -q blancski-ui-storybook; then
    echo "Container is down! Restarting..."
    cd /opt/blancski-ui
    docker-compose up -d
    echo "Container restarted at $(date)" >> /var/log/blancski-ui-monitor.log
fi

# Check health endpoint
if ! curl -f http://localhost:3010/health &>/dev/null; then
    echo "Health check failed! Restarting container..."
    cd /opt/blancski-ui
    docker-compose restart
    echo "Health check failed, container restarted at $(date)" >> /var/log/blancski-ui-monitor.log
fi
EOF

# Make executable
chmod +x /opt/blancski-ui/monitor.sh

# Add to crontab (check every 5 minutes)
(crontab -l 2>/dev/null; echo "*/5 * * * * /opt/blancski-ui/monitor.sh") | crontab -
```

---

## 🎉 Success!

Your Blancski UI Component Library is now live at: **https://ui.blancski.me**

You can now:

- ✅ Browse all components interactively
- ✅ View component documentation
- ✅ Test components in light/dark mode
- ✅ Copy code examples
- ✅ Share with your team

---

## 📞 Support

If you encounter issues:

1. Check logs: `docker-compose logs -f`
2. Verify nginx: `sudo nginx -t`
3. Check container: `docker ps`
4. Review this guide
5. Check GitHub Actions for build issues
