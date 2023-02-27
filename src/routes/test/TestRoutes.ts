import { Router } from "express";
import Paths from "@src/routes/constants/Paths";
import get from "./get";

const testRouter = Router();

testRouter.get(Paths.Test.Get, get.getAll);

export default testRouter;
