import User from "../models/User";
import orm from "./MockOrm";
import { v4 as uuidv4 } from "uuid";

async function getAll(): Promise<User[]> {
  const db = await orm.openDb();
  return db.users;
}

async function createUser(username: string): Promise<void> {
  const db = await orm.openDb();
  db.users.push(new User(username, uuidv4()));
  return orm.saveDb(db);
}

export default { getAll, createUser };
