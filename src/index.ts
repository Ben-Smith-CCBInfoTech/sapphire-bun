const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV = process.env.NODE_ENV ?? "development";
import { Elysia } from "elysia";
import usersRoutes from './routes/users';

const app = new Elysia();

app
  .group('/api', (app) => app.use(usersRoutes))
  .listen(PORT || 3049);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
console.log(
  `Database Connection URL is ${process.env.DATABASE_URL}`
)

// import { Elysia, t } from 'elysia'

// new Elysia()
// app
//   .group('/api', (app) => app.use(postsRoutes))
//   .get('/', () => 'get all users')
//   .get('/json', () => ({
//     hello: 'world'
//   }))
//   .post(
//     '/profile',
//     ({ body }) => body,
//     {
//       body: t.Object({
//         username: t.String()
//       })
//     }
//   )
//   .listen(PORT)

// console.log(`[${NODE_ENV}] Serving http://localhost:${PORT}`);
