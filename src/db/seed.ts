import { db } from '.';
import { users as userSchema, users } from './schema';

const hash = await Bun.password.hash("password1");
let res = await db.insert(users).values([{ username: 'blsmit3+drizzle@gmail.com', password: hash }])//.catch()