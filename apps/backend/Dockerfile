FROM node:20-bookworm-slim AS deps

WORKDIR /app

ENV CI=true

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ ca-certificates \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./
COPY apps/backend/package.json apps/backend/package.json
COPY apps/storefront/package.json apps/storefront/package.json

RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

FROM deps AS builder

ARG DATABASE_URL=postgres://medusa_user:password@postgres:5432/medusa-invincible-store
ARG STORE_CORS=https://sklep.invinciblepolska.pl
ARG ADMIN_CORS=https://api-sklep.invinciblepolska.pl
ARG AUTH_CORS=https://api-sklep.invinciblepolska.pl,https://sklep.invinciblepolska.pl
ARG JWT_SECRET=build_dummy_jwt_secret
ARG COOKIE_SECRET=build_dummy_cookie_secret
ARG REDIS_URL=redis://redis:6379

ENV NODE_ENV=production
ENV DATABASE_URL=$DATABASE_URL
ENV STORE_CORS=$STORE_CORS
ENV ADMIN_CORS=$ADMIN_CORS
ENV AUTH_CORS=$AUTH_CORS
ENV JWT_SECRET=$JWT_SECRET
ENV COOKIE_SECRET=$COOKIE_SECRET
ENV REDIS_URL=$REDIS_URL

COPY . .

RUN npm run build --workspace=@dtc/backend

FROM node:20-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=9000

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app /app

WORKDIR /app/apps/backend/.medusa/server

EXPOSE 9000

CMD ["npm", "run", "start"]
