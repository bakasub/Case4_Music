import { Request, Response } from "express";
declare class Song1Controller {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: Song1Controller;
export default _default;
