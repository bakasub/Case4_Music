import { Request, Response } from "express";
export declare class AccountController {
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: AccountController;
export default _default;
