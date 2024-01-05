import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2';

// Create the connection
const poolConnection = mysql.createPool(process.env.DATABASE_URL as string);

export const db = drizzle(poolConnection);
