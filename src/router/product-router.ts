import {Router} from "express";
import ProductController from "../controller/product-controller";
import {auth} from "../middleware/auth";

export const productRouter = Router();
productRouter.use(auth)
productRouter.get('/products', ProductController.show);
productRouter.post('/products', ProductController.create);
