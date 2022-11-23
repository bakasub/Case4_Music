import {Product} from "../model/product";
import {Request, Response} from "express";

class ProductController {
    create = async (req: Request, res: Response) => {
        await Product.insertMany(req.body)
        return res.status(201).json({
            message: 'Create success'
        })
    }
    show = async (req: Request, res: Response) => {
        let product = await Product.find();
        return res.status(200).json(product)
    }
}
export default new ProductController();