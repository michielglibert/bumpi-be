import { Router } from "express";
import Paths from "./constants/Paths";
import RoomRouter from "./room/RoomRouter";
import UserRouter from "./user/UserRoutes";

const apiRouter = Router();

apiRouter.use(Paths.Users.Base, UserRouter);
apiRouter.use(Paths.Rooms.Base, RoomRouter);

export default apiRouter;
