import { Room } from ".prisma/client";
import prisma from "@src/constants/Prisma";

const getRoom = async (id: number): Promise<Room | null> => {
  const room = await prisma.room.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });
  return room;
};

const createRoom = async (name: string): Promise<Room> => {
  const room = await prisma.room.create({
    data: {
      name,
    },
  });
  return room;
};

const joinRoom = async (userId: number, roomId: number): Promise<void> => {
  await prisma.room.update({
    where: {
      id: roomId,
    },
    data: {
      users: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

export default { getRoom, createRoom, joinRoom };
