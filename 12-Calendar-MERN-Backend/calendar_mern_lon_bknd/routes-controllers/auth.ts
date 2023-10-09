import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const authGet = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
    });

}
export const authPost = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
}
export const authPostNew = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;
    res.status(200).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password,
    });

}
export const authPostRenew = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'renew',
    });
}