import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import UserService from "@src/services/UserService";
import { Handler } from "express";

const createUser: Handler = async (req, res) => {
  const { username } = req.body;
  try {
    await UserService.createUser(username);
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
  return res.status(HttpStatusCodes.OK).json({ success: true });
};

export default {
  createUser,
};
