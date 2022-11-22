import { Request, Response } from "express";
declare class ProductController {
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    show: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ProductController;
export default _default;
