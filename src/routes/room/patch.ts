import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import RoomService from "@src/services/RoomService";
import { Handler } from "express";

const joinRoom: Handler = async (req, res) => {
  const { roomId, userId } = req.body;

  let room;
  try {
    room = await RoomService.joinRoom(userId, roomId);
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
  return res.status(HttpStatusCodes.OK).json({ success: true });
};

export default {
  joinRoom,
};
