import {Router} from "express";
import {songRouter} from "./song-router";
import {userRouter} from "./user-router";


export const router = Router();
router.use('', songRouter);
router.use('',userRouter);
