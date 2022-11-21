import {Request, Response} from "express";
import {PlaylistSongs} from "../model/songList-playlist";

class PlaylistSongsController {
    findAll = async (req: Request, res: Response) => {
        let songList = await PlaylistSongs.find().populate("user")
            .populate("playlist")
            .populate("song")
        return res.status(200).json(songList)
    }
    addSong = async (req:Request,res:Response)=>{
        await PlaylistSongs.insertMany(req.body);
        return res.status(200).json({
            message: "add success"
        })
    }
}

export default new PlaylistSongsController()