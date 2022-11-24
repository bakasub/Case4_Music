import {Router} from "express";
import {chantRouter} from "./chant-router";
import singerController from "../controller/singer-controller";


export const singerRouter = Router();
singerRouter.get('/musics',singerController.getAll)
singerRouter.post('/musics',singerController.save)
singerRouter.delete('/musics/:id',singerController.remove)
singerRouter.put('/musics/:id',singerController.update)
singerRouter.get('/musics/:id',singerController.findIdEdit)
singerRouter.use('/categories', chantRouter)