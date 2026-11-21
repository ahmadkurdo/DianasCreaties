# ── Stage 1: build ────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

ARG VITE_SANITY_PROJECT_ID
ARG VITE_SANITY_DATASET=production
ENV VITE_SANITY_PROJECT_ID=$VITE_SANITY_PROJECT_ID
ENV VITE_SANITY_DATASET=$VITE_SANITY_DATASET

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: serve ────────────────────────────────────────
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
