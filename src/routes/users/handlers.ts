import db from '../../db'

export async function getUsers() {
    try {
      return await db.users.findMany({ select: {username: true}, orderBy: { id: 'asc' } });
    } catch (e: unknown) {
      console.error(`Error getting Users: ${e}`);
    }
  }