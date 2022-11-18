import {Request,Response} from "express";
import {Music} from "../model/music";

class MusicController {
    getAll = async (req: Request,res: Response)=> {
        let products = await Music.find();
        return res.status(200).json(products)
    }
    save = async (req: Request,res: Response)=>{
        let product = await Music.create(req.body);
        await product.save()
        return res.status(200).json(product);
    }
    remove = async (req: Request,res: Response)=>{
        let id = req.params.id
        await Music.deleteOne({_id:id});
        return res.status(200).json({message:`delete false`});

    }
     findIdEdit =  async (req: Request,res: Response)=> {
         let id = req.params.id
         let product = await Music.findById({id});
         return res.status(200).json(product);
     }
    update = async (req: Request,res: Response)=>{
        let id = req.params.id
        await Music.updateOne({_id:id}, {$set:req.body});
        console.log(id)
        return res.status(200).json({message:`update success`});

}
}
export default new MusicController();
