import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import RoomService from "@src/services/RoomService";
import { Handler } from "express";

const createRoom: Handler = async (req, res) => {
  const { name } = req.body;

  let room;
  try {
    room = await RoomService.createRoom(name);
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
  return res.status(HttpStatusCodes.OK).json({ id: room.id });
};

export default {
  createRoom,
};
