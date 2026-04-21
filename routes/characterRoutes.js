import { Router } from "express";
import {charactersGet} from "../controllers/characterController.js";

const characterRouter = Router();

characterRouter.get("/", charactersGet);


export default characterRouter;