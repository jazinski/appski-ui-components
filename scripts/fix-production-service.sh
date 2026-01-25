#!/bin/bash
# Production Server Fix Script
# Run this on the production server to update systemd service to use docker-compose.prod.yml

set -e

echo "🔧 Updating Appski UI Storybook systemd service..."
echo ""

# Backup existing service file
echo "📋 Backing up current service file..."
sudo cp /etc/systemd/system/appski-ui-storybook.service /etc/systemd/system/appski-ui-storybook.service.backup

# Create new service file that uses production compose
echo "✏️  Creating updated service file..."
sudo tee /etc/systemd/system/appski-ui-storybook.service > /dev/null <<'EOF'
[Unit]
Description=Appski UI Component Library Storybook
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/opt/appski-ui-components
ExecStartPre=/usr/bin/docker compose -f docker-compose.prod.yml pull
ExecStart=/usr/bin/docker compose -f docker-compose.prod.yml up -d
ExecStop=/usr/bin/docker compose -f docker-compose.prod.yml down
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

echo ""
echo "♻️  Reloading systemd daemon..."
sudo systemctl daemon-reload

echo ""
echo "🔄 Restarting service with new configuration..."
sudo systemctl restart appski-ui-storybook.service

echo ""
echo "⏳ Waiting for container to start..."
sleep 5

echo ""
echo "✅ Checking status..."
sudo systemctl status appski-ui-storybook.service --no-pager -l

echo ""
echo "🐳 Checking Docker container..."
docker ps | grep appski-ui

echo ""
echo "🎉 Done! The service now uses docker-compose.prod.yml with :latest tag from registry."
