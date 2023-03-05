import { Router } from "express";
import Paths from "@src/routes/constants/Paths";
import get from "./get";
import post from "./post";
import { body } from "express-validator";
import { handleError } from "@src/middleware/handleError";
import patch from "./patch";

const roomRouter = Router();

roomRouter.get(Paths.Rooms.Get, handleError, get.getOne);
roomRouter.post(
  Paths.Rooms.Add,
  body("name").notEmpty(),
  handleError,
  post.createRoom
);
roomRouter.patch(
  Paths.Rooms.Update,
  body("roomId").notEmpty(),
  body("userId").notEmpty(),
  handleError,
  patch.joinRoom
);

export default roomRouter;
