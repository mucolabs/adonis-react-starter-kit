ARG NODE_VERSION=24.11.0
ARG ALPINE_VERSION=3.22
ARG LITESTREAM_VERSION=0.5.2

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base

LABEL fly_launch_runtime="Node.js"


FROM base AS tools
ARG LITESTREAM_VERSION
RUN apk add --no-cache --virtual .build-deps curl && \
    curl -fsSL "https://github.com/benbjohnson/litestream/releases/download/v${LITESTREAM_VERSION}/litestream-${LITESTREAM_VERSION}-linux-x86_64.tar.gz" -o /tmp/litestream.tar.gz && \
    tar -C /usr/local/bin -xzf /tmp/litestream.tar.gz && \
    rm /tmp/litestream.tar.gz && \
    apk del .build-deps

# All deps stage
FROM base AS deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci

# Production only deps stage
FROM base AS production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

# Build stage
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN node ace build

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /app
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app

COPY --from=tools /usr/local/bin/litestream /usr/local/bin/litestream
COPY .fly/litestream.yml /etc/litestream.yml
COPY .fly/start.sh ./start.sh

RUN chmod +x ./start.sh

EXPOSE 8080

ENTRYPOINT ["./start.sh"]
