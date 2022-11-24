import { Request, Response } from "express";
declare class SongController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addSong: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editSong: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteSong: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    filterSongByID: (req: Request, res: Response) => Promise<void>;
    findByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: SongController;
export default _default;
