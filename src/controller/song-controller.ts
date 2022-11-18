import {Request, Response} from "express";
import {Song} from "../model/song";
import {User} from "../model/user";
class SongController{
    getAll =async (req:Request,res:Response)=>{
        let songs = await 
    Song.find().populate("User");
        console.log(songs);

        return res.status(200).json(songs);
    }
    addSong = async (req:Request,res:Response)=>{
        await Song.insertMany(req.body);
        return res.status(200).json({
            message: "add success"
        })
    }
    editSong = async (req:Request,res:Response)=>{
        await Song.updateMany({_id:req.params.id}, req.body);
        return res.status(200).json({
            message: "edit success"
        })
    }
    deleteSong = async (req:Request,res:Response)=>{
        await Song.deleteOne({_id:req.params.id},req.body);
        return res.status(200).json({
            message: "delete success"
        })
    }
    findByNameSong= async (req:Request,res:Response)=> {
        let song = await Song.findById(req.params.id);
        res.status(200).json(song)

    }
}
export default new SongController();