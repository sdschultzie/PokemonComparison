# --------------------------------------
# Base development image
# --------------------------------------
FROM golang:1.25 AS dev

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


# Default command just keeps container alive for dev
EXPOSE 1111
CMD ["/bin/bash"]


# --------------------------------------
# Builder stage
# --------------------------------------
FROM dev AS builder
WORKDIR /build

# Copy source code
COPY . .

# Build application
RUN go build -o ./bin/main main.go


# --------------------------------------
# Prod stage
# --------------------------------------
FROM debian:bookworm-slim AS prod
WORKDIR /app

# Copy over the binary from the builder stage
COPY --from=builder /build/bin/main .

# Run just the binary
EXPOSE 1111
CMD ["./main"]
