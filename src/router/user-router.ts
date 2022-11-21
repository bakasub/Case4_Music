import {Router} from "express";
import userController from "../controller/user-controller";

export const userRouter = Router();
userRouter.get('/user',userController.getAll);
userRouter.post('/user', userController.addUser);
