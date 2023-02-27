import User from "../models/User";
import orm from "./MockOrm";

/**
 * Get all users.
 */
async function getAll(): Promise<User[]> {
	const db = await orm.openDb();
	return db.users;
}

export default { getAll };
