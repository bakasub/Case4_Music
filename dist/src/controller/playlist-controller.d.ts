import { Request, Response } from "express";
declare class PlaylistController {
    createPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PlaylistController;
export default _default;
