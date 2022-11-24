import {Router} from "express";
import ChantController from "../controller/chant-controller";


export const chantRouter = Router();
chantRouter.get('/', ChantController.findAll);
chantRouter.post('/',ChantController.save);
