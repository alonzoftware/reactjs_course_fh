import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/User";
import { generateJWT } from '../helpers';

export const authGet = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
    });

}
export const authPost = async (req: Request, res: Response) => {
    // const { email, password } = req.body;

    // res.status(200).json({
    //     ok: true,
    //     msg: 'login',
    //     email,
    //     password,
    // });

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar JWT
        const token = await generateJWT(user.id, user.name);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}
export const authPostNew = async (req: Request, res: Response) => {

    // const { name, email, password } = req.body;
    // res.status(200).json({
    //     ok: true,
    //     msg: 'registro',
    //     name,
    //     email,
    //     password,
    // });
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        user = new User(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);


        await user.save();

        // Generar JWT
        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
export const authPostRenew = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'renew',
    });
}