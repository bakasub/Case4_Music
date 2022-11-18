import { Request, Response } from "express";
declare class ProductController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findIdEdit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ProductController;
export default _default;
