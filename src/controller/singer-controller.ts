import {Request,Response} from "express";
import {Singer} from "../model/singer";

class SingerController {
    getAll = async (req: Request,res: Response)=> {
        let products = await Singer.find().populate('chant', 'name');
        return res.status(200).json(products)
    }
    save = async (req: Request,res: Response)=>{
        let product = await Singer.create(req.body);
        await product.save()
        return res.status(200).json(product);
    }
    remove = async (req: Request,res: Response)=>{
        let id = req.params.id
        await Singer.deleteOne({_id:id});
        return res.status(200).json({message:`delete false`});

    }
     findIdEdit =  async (req: Request,res: Response)=> {
        let id = req.params.id
         let product = await Singer.find({_id:id});
         return res.status(200).json(product);
     }
    update = async (req: Request,res: Response)=>{
        let id = req.params.id
        await Singer.updateOne({_id:id}, {$set:req.body});
        return res.status(200).json({message:`update success`});
}
}
export default new SingerController();
