import {Request, Response} from "express";
import {PlaylistSongs} from "../model/songList-playlist";

class PlaylistSongsController {
    getAll = async (req: Request, res: Response) => {
        let songList = await PlaylistSongs.find().populate("playlist")
            .populate("song")
        return res.status(200).json(songList)
    }

    addSongToPL = async (req:Request, res:Response)=>{
        await PlaylistSongs.insertMany(req.body);
        return res.status(200).json({
            message: "add success"
        })
    }

    deletePLSong = async (req:Request,res:Response)=>{
        await PlaylistSongs.deleteOne({_id:req.params.id});
        return res.status(200).json({
            message: "delete success"
        })
    }

    getSongsFromAPL = async (req: Request,res: Response) => {
        let songList = await PlaylistSongs.find({
            playlist: req.params.id
        })
        return res.status(200).json(songList)
    }
}

export default new PlaylistSongsController()