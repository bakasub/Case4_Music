import {Router} from "express";
import songController from "../controller/song-controller";

export const songRouter = Router();
songRouter.get('/',songController.getAll);
songRouter.post('/', songController.addSong);
songRouter.get('/search',songController.findByName)
songRouter.put('/:id', songController.editSong);
songRouter.delete('/:id', songController.deleteSong);
songRouter.get('/:id',songController.filterSongByID);