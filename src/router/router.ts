import {Router} from "express";
import musicController from "../controller/music-controller";
import {categoryRouter} from "./category-router";


export const router = Router();
router.get('/musics', musicController.getAll)
router.post('/musics',musicController.save)
router.delete('/musics/:id',musicController.remove)
router.put('/musics/:id',musicController.update)
router.get('/musics/:id',musicController.findIdEdit)
router.use('/categories', categoryRouter)