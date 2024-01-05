import {db} from '../../db'
import { users as userSchema } from '../../db/schema';

export async function getUsers() {
    try {
        return await db.select().from(userSchema);
    } catch (e: unknown) {
      console.error(`Error getting Users: ${e}`);
    }
  }