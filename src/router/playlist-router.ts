import {Router} from "express";
import PlaylistSongsController from "../controller/playlistSongs-controller";
import playlistController from "../controller/playlist-controller";
import playlistSongsController from "../controller/playlistSongs-controller";

export const playlistRouter = Router()

playlistRouter.get('/song',playlistSongsController.findAll);
playlistRouter.post('/song',playlistSongsController.addSong);
playlistRouter.get('/',playlistController.getAll);
playlistRouter.post('/', playlistController.createPlaylist);
playlistRouter.put('/:id',playlistController.editPlaylist);
playlistRouter.delete('/:id',playlistController.deletePlaylist);
playlistRouter.get('/:id',playlistController.findPlaylist);
