import orm from "./MockOrm";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";
import { User } from ".prisma/client";

const prisma = new PrismaClient();

async function getAll(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

async function createUser(username: string): Promise<User> {
  const user = await prisma.user.create({
    data: {
      name: username,
    },
  });
  return user;
}

export default { getAll, createUser };
