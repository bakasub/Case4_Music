import { Request, Response } from "express";
declare class PlaylistSongsController {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addSong: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PlaylistSongsController;
export default _default;
