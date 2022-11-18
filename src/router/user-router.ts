import {Router} from "express";
import userController from "../controller/user-controller";

export const userRouter = Router();
userRouter.get('/song',userController.getAll);
userRouter.post('/song', userController.addUser);
