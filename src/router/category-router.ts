import {Router} from "express";
import CategoryController from "../controller/category-controller";

export const categoryRouter = Router();
categoryRouter.get('/', CategoryController.findAll);
categoryRouter.post('/', CategoryController.save);