const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV = process.env.NODE_ENV ?? "development";

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/', () => 'Hello World')
  .get('/json', () => ({
    hello: 'world'
  }))
  .post(
    '/profile',
    ({ body }) => body,
    {
      body: t.Object({
        username: t.String()
      })
    }
  )
  .listen(PORT)

console.log(`[${NODE_ENV}] Serving http://localhost:${PORT}`);
