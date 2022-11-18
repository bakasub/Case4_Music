import { Request, Response } from "express";
declare class UserController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: UserController;
export default _default;
