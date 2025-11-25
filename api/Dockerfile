# --------------------------------------
# Base development image
# --------------------------------------
FROM golang:1.25 AS dev

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

# Expose the api server port
EXPOSE 1111

# Default command just keeps container alive for dev
CMD ["sleep", "infinity"]


# --------------------------------------
# Builder stage
# --------------------------------------
FROM dev AS builder
WORKDIR /app

# Copy source code
COPY . .

# Build application
RUN go build -o ./bin/main main.go


# --------------------------------------
# Prod stage
# --------------------------------------
FROM debian:bookworm-slim AS run
WORKDIR /app

# Copy over the binary from the builder stage
COPY --from=builder /app/bin/main .

# Run just the binary
EXPOSE 1111
CMD ["./main"]
