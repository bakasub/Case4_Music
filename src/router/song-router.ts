import {Router} from "express";
import songController from "../controller/song-controller";

export const songRouter = Router();
songRouter.get('/song',songController.getAll);
songRouter.post('/song', songController.addSong);
songRouter.put('/song/:id', songController.editSong);
songRouter.delete('/song/:id', songController.deleteSong);
songRouter.get('/song/:id',songController.findByName);