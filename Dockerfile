FROM node:20-alpine AS build

RUN apk add --no-cache tzdata

ENV TZ=America/Sao_Paulo

USER node

WORKDIR /app-dev
COPY --chown=node:node package*.json .
RUN npm ci

WORKDIR /app
COPY --chown=node:node package*.json .
RUN npm ci --omit=dev

WORKDIR /app-dev

COPY --chown=node:node . .

RUN npm run build



FROM node:20-alpine AS production

RUN apk add --no-cache tzdata

ENV TZ=America/Sao_Paulo

USER node

WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app-dev/.next ./.next
COPY --chown=node:node . .

CMD ["npm", "run", "start"]
