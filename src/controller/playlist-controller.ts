import {Request, Response} from "express";
import {Playlist} from "../model/playlist";

class PlaylistController {
    getAll = async (req:Request,res:Response)=>{
        let allPlaylist = await Playlist.find().populate("user")
        return res.status(200).json(allPlaylist);
    }

    createPlaylist = async (req: Request, res: Response) => {
        await Playlist.insertMany(req.body)
        return res.status(201).json({
            message: "add success"
        })
    }

    editPlaylist = async (req:Request,res:Response)=>{
        await Playlist.updateOne({_id:req.params.id}, req.body);
        return res.status(200).json({
            message: "edit success"
        })
    }

    deletePlaylist = async (req:Request,res:Response)=>{
        await Playlist.deleteOne({_id:req.params.id});
        return res.status(200).json({
            message: "delete success"
        })
    }

    findPlaylist = async (req:Request,res:Response)=> {
        let playlist = await Playlist.findById(req.params.id);
        res.status(200).json(playlist)
    }

    filterByUser = async (req: Request, res: Response) => {
        let userPlaylist = await Playlist.find({
            user: req.params.idUser
        })
        return res.status(200).json(userPlaylist)
    }

}
export default new PlaylistController();