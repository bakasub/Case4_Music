import {Router} from "express";
import {userRouter} from "./user-router";
import {roleRouter} from "./role-router";
export const router=Router();
router.use('/auth',userRouter);
router.use('',roleRouter);