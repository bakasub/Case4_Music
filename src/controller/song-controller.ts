import {Request, Response} from "express";
import {Song} from "../model/song";


class SongController {
    getAll = async (req: Request, res: Response) => {
        let songs = await
            Song.find().populate("user");
        return res.status(200).json(songs);
    }

    addSong = async (req: Request, res: Response) => {
        await Song.insertMany(req.body);
        return res.status(200).json({
            message: "add success"
        })
    }

    editSong = async (req: Request, res: Response) => {
        await Song.updateMany({_id: req.params.id}, req.body);
        return res.status(200).json({
            message: "edit success"
        })
    }

    deleteSong = async (req: Request, res: Response) => {
        await Song.deleteOne({_id: req.params.id});
        return res.status(200).json({
            message: "delete success"
        })
    }

    filterSongByID = async (req: Request, res: Response) => {
        let song = await Song.findById(req.params.id);
        res.status(200).json(song)

    }

    findByName = async (req: Request , res: Response) => {
        let findSong = await Song.find({
            $or: [
                {name: new RegExp(req.body.keyWord, 'i')},
                {artist: new RegExp(req.body.keyWord, 'i')}
            ]
        })
        return res.status(201).json(
            findSong
        )
    }
}


export default new SongController();