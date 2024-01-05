FROM oven/bun
WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
RUN bun install
COPY . .

ENV NODE_ENV production

RUN bun run drizzle:generate
RUN bun run drizzle:push

CMD [ "bun", "start" ]