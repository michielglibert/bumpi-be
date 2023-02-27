import jsonfile from "jsonfile";

import User from "../models/User";

// **** Variables **** //

const DB_FILE_NAME = "database.json";

// **** Types **** //

interface Db {
	users: User[];
}

// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<Db> {
	return jsonfile.readFile(__dirname + "/" + DB_FILE_NAME) as Promise<Db>;
}

/**
 * Update the file.
 */
function saveDb(db: Db): Promise<void> {
	return jsonfile.writeFile(__dirname + "/" + DB_FILE_NAME, db);
}

// **** Export default **** //

export default {
	openDb,
	saveDb,
} as const;
