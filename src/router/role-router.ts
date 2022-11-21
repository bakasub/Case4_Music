import {Router} from "express";
import RoleController from "../controller/role-controller";
export const roleRouter = Router();
roleRouter.post('/role', RoleController.save);
