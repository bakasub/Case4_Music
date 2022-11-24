import {Request, Response} from "express";
import {Chant} from "../model/chant";


class ChantController {
    findAll = async (req: Request, res: Response) => {
        let categories = await Chant.find();
        return res.status(200).json(categories);
    }

    save = async (req: Request, res: Response) => {
        let category = req.body;
        category = await Chant.create(category);
        return res.status(201).json(category);
    }

}
export default new ChantController();