import {Router} from "express";
import {sendMail} from "./rootController.js";

export const rootRouter = new Router();
rootRouter.post("/send-email", sendMail)