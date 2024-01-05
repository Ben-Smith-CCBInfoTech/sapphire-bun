import {
    mysqlTable,
    serial,
    uniqueIndex,
    varchar,
  } from 'drizzle-orm/mysql-core';


  export const users = mysqlTable('Users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 256 }),
    password: varchar('password', { length: 256 }),
  }, (users) => ({
    usernameIndex: uniqueIndex('username_idx').on(users.username),
  }));