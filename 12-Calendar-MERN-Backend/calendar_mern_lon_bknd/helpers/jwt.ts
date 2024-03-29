import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const generateJWT = (uid: String, name: String) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(payload, process.env.CALMERN_SECRET_JWT_SEED || '1234567', {
            expiresIn: '2h'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve(token);

        })


    })
}