import {Router} from "express";
import {playlistRouter} from "./playlist-router";
import {songRouter} from "./song-router";
import {userRouter} from "./user-router";

export const router = Router();
router.use('/playlist',playlistRouter);
router.use('/song',songRouter);
router.use('/user',userRouter);
