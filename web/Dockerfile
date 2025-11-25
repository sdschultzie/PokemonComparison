# --------------------------------------
# Base development image
# --------------------------------------
FROM node:25 AS dev

# Install common dev tools
RUN apt-get update && apt-get install -y --no-install-recommends \
        bash \
        coreutils \
        curl \
        git \
        make \
        netcat-traditional \
        vim \
    && rm -rf /var/lib/apt/lists/*

# Install Task (easier make)
RUN curl -1sLf 'https://dl.cloudsmith.io/public/task/task/setup.deb.sh' | bash && apt install task

# Expose the vite dev server port in development
EXPOSE 1112

# Default command just keeps container alive for dev
CMD ["sleep", "infinity"]


# --------------------------------------
# Build stage (for production)
# --------------------------------------
FROM dev AS builder
WORKDIR /app

# Copy source code
COPY . .

# Install necessary packages (ci = clean install)
RUN npm ci

# Build the React/Vite app for production.
RUN npm run build


# --------------------------------------
# Run stage (serve static build)
# --------------------------------------
FROM nginx:1.27-alpine AS run

# Copy the production build from the build stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: add a custom nginx config (if you need API proxying or routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for serving the app
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]