import { Room } from "@prisma/client";
import RoomRepo from "@src/repository/RoomRepo";

const getRoom = (id: number): Promise<Room | null> => {
  return RoomRepo.getRoom(id);
};

const createRoom = (name: string): Promise<Room> => {
  return RoomRepo.createRoom(name);
};

const joinRoom = (userId: number, roomId: number): Promise<void> => {
  return RoomRepo.joinRoom(userId, roomId);
};

export default { getRoom, createRoom, joinRoom };
