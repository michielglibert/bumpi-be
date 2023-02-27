import { Router } from "express";
import Paths from "./constants/Paths";
import TestRouter from "./test/TestRoutes";

const apiRouter = Router();

apiRouter.use(Paths.Test.Base, TestRouter);

export default apiRouter;
