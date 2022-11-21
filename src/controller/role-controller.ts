import {Request, Response} from "express";
import {Role} from "../model/role";

class RoleController {
    save = async (req: Request, res: Response) => {
        let role = req.body;
        role = await Role.create(role);
        return res.status(201).json(role)

    }

}
export default new RoleController();