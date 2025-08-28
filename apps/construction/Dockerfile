# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /workspace

# Enable pnpm via corepack
RUN corepack enable

# Copy root-level manifests first for better layer caching
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml ./

# Copy the rest of the repository (Nx workspace)
COPY . .

# Install dependencies at the workspace root
RUN pnpm install --frozen-lockfile

# Build the construction app
WORKDIR /workspace/apps/construction
RUN pnpm run build

# Stage 2: Serve static files with Nginx on port 8080
FROM nginx:alpine AS runner

# Copy custom Nginx config to listen on 8080 and SPA fallback
COPY apps/construction/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the builder stage
COPY --from=builder /workspace/apps/construction/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"] 