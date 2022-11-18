import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import {Playlist} from "../model/playlist";

class PlaylistController {
    createPlaylist = async (req: Request, res: Response) => {
        let playlist = req.body;
        playlist = await Playlist.create(playlist);
        return res.status(200).json(playlist);
    }
}
export default new PlaylistController();