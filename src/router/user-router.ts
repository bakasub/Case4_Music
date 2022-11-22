import {Router} from "express";
import UserController from "../controller/user-controller";

export const userRouter = Router();
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.put('/changePassword/:id',UserController.changePassword)