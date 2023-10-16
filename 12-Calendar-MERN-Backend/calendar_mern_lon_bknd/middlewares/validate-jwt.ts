
import dotenv from 'dotenv';
import { NextFunction, Response, Request } from "express";
import jwt from 'jsonwebtoken';
import { IGetSetPropsInfoRequest } from '../interfaces/common_interfaces';

export const validateJWT = (req: IGetSetPropsInfoRequest, res: Response, next: NextFunction) => {

    // x-token headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid, name } = jwt.verify(
            token,
            process.env.CALMERN_SECRET_JWT_SEED || "Est03sUnaPrivateKey"
        ) as { uid: string, name: string };

        req.uid = uid;
        req.name = name;


    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    next();
}