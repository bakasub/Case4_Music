import { Request, Response } from "express";
declare class SongController {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: SongController;
export default _default;
