# Production stage - serve pre-built Storybook with nginx
FROM alpine:3.19

# Install only nginx (no extras)
# Note: nginx package creates the nginx user automatically
RUN apk add --no-cache nginx && \
    mkdir -p /var/log/nginx /var/lib/nginx/tmp && \
    chown -R nginx:nginx /var/log/nginx /var/lib/nginx

# Copy custom nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy pre-built Storybook static files (built in CI)
COPY storybook-static /usr/share/nginx/html

# Set ownership
RUN chown -R nginx:nginx /usr/share/nginx/html

# Add healthcheck (using nc instead of wget for smaller size)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD nc -z localhost 80 || exit 1

# Expose port 80
EXPOSE 80

# Labels for metadata
LABEL org.opencontainers.image.source="https://github.com/jazinski/appski-ui-components"
LABEL org.opencontainers.image.description="Appski UI Component Library - Storybook Documentation"
LABEL org.opencontainers.image.licenses="MIT"

# Switch to non-root user
USER nginx

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
