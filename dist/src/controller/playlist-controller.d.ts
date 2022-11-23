import { Request, Response } from "express";
declare class PlaylistController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deletePlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findPlaylist: (req: Request, res: Response) => Promise<void>;
    filterByUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getToken: (req: any) => Promise<any>;
}
declare const _default: PlaylistController;
export default _default;
