import { Request, Response } from "express";

export const authGet = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
    });

}
export const authPost = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'login',
    });
}
export const authPostNew = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'registro'
    });

}
export const authPostRenew = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'renew',
    });
}