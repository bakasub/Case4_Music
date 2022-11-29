import {Router} from "express";
import ChantController from "../controller/song1-controller";


export const song1Router = Router();
song1Router.get('/', ChantController.findAll);
song1Router.post('/',ChantController.save);
