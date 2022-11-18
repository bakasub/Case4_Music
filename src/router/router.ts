import {Router} from "express";
import productController from "../controller/music-controller";

export const router = Router();
router.get('/musics', productController.getAll)
router.post('/musics',productController.save)
router.delete('/musics/:id',productController.remove)
router.put('/musics/:id',productController.update)
router.get('/musics/:id',productController.findIdEdit)