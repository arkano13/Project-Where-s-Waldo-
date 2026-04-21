import { Router } from "express";
import {postInitTimeController, postFinalTimeController, playersGet} from "../controllers/playerController.js";

const playerRouter = Router();

playerRouter.get("/", playersGet);
playerRouter.post("/init-time", postInitTimeController);
playerRouter.post("/final-time", postFinalTimeController);

export default playerRouter