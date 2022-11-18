import {Router} from "express";
import {playlistRouter} from "./playlist-router";

export const router = Router();
router.use('',playlistRouter)