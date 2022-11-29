import {Request, Response} from "express";
import {Song1} from "../model/song1";


class Song1Controller {
    findAll = async (req: Request, res: Response) => {
        let categories = await Song1.find();
        return res.status(200).json(categories);
    }

    save = async (req: Request, res: Response) => {
        let category = req.body;
        category = await Song1.create(category);
        return res.status(201).json(category);
    }

}
export default new Song1Controller();