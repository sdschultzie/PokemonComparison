# --------------------------------------
# Base development image
# --------------------------------------
FROM node:25 AS dev

# VS Code mounts source code to /workspaces by default when opening in devcontainer
WORKDIR /workspaces

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
EXPOSE 5173

# Default command just keeps container alive for dev
CMD ["/bin/bash"]