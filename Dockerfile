# FROM oven/bun
FROM imbios/bun-node
WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
COPY prisma ./prisma/
RUN bun install
RUN bun run generate
COPY . .

ENV NODE_ENV production

CMD [ "bun", "start" ]