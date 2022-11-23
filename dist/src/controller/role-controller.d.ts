import { Request, Response } from "express";
declare class RoleController {
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: RoleController;
export default _default;
