import { Elysia } from 'elysia';
import {getUsers} from './handlers'
const usersRoutes = new Elysia({ prefix: '/users' })
  .get('/', () => getUsers())
 // .get('/:id', () => 'get user by id')
 // .post('/', () => 'create user')
 // .patch('/:id', () => 'update user')
 // .delete('/', () => 'delete user');

export default usersRoutes;