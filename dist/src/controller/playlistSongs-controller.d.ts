import { Request, Response } from "express";
declare class PlaylistSongsController {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addPLSong: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deletePLSong: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PlaylistSongsController;
export default _default;
