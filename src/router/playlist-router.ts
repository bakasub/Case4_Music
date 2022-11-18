import {Router} from "express";
import playlistController from "../controller/playlist-controller";

export const playlistRouter = Router();
playlistRouter.post('/create', playlistController.createPlaylist);