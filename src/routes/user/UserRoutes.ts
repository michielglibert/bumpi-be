import { Router } from "express";
import Paths from "@src/routes/constants/Paths";
import get from "./get";
import post from "./post";
import { body } from "express-validator";
import { handleError } from "@src/middleware/handleError";

const userRouter = Router();

userRouter.get(Paths.Users.Get, get.getAll);
userRouter.post(
  Paths.Users.Add,
  body("username").notEmpty(),
  handleError,
  post.createUser
);

export default userRouter;
