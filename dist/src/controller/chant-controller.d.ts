import { Request, Response } from "express";
declare class ChantController {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ChantController;
export default _default;
