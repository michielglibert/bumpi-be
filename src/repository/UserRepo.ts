import { PrismaClient } from "@prisma/client";
import { User } from ".prisma/client";

const prisma = new PrismaClient();

const getAll = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

const createUser = async (username: string): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      name: username,
    },
  });
  return user;
};

export default { getAll, createUser };
