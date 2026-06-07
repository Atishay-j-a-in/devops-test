FROM node:24-alpine 

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate


COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

COPY index.js index.js


RUN pnpm install

CMD ["node","index"]
