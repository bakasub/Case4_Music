import { Request, Response } from "express";
declare class PlaylistSongsController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addSongToPL: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deletePLSong: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getSongsFromAPL: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PlaylistSongsController;
export default _default;
