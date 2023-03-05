import RoomService from "@src/services/RoomService";
import { Handler } from "express";

const getOne: Handler = async (req, res) => {
  const { id } = req.params;
  const room = await RoomService.getRoom(Number(id));
  return res.json(room);
};

export default {
  getOne,
};
