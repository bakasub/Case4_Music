import {Router} from "express";
import UserController from "../controller/user-controller";
import {auth} from "../middleware/auth";

export const userRouter = Router();
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.get('/user', UserController.findAll);
userRouter.put('/changePassword/:id',UserController.changePassword)
