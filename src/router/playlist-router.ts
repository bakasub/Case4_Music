import {Router} from "express";
import playlistController from "../controller/playlist-controller";
import playlistSongsController from "../controller/playlistSongs-controller";
export const playlistRouter = Router()

playlistRouter.get('/song',playlistSongsController.getAll);
playlistRouter.post('/song',playlistSongsController.addSongToPL);
playlistRouter.delete('/song/:id',playlistSongsController.deletePLSong);
playlistRouter.get('/user/:idUser',playlistController.filterByUser);
playlistRouter.get('/',playlistController.getAll);
playlistRouter.post('/', playlistController.createPlaylist);
playlistRouter.put('/:id',playlistController.editPlaylist);
playlistRouter.delete('/:id',playlistController.deletePlaylist);
playlistRouter.get('/detail/:id',playlistSongsController.getSongsFromAPL);
