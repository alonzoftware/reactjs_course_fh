import { IGetSetPropsInfoRequest } from '../interfaces/common_interfaces';
import Event from '../models/Event';
import { Request, Response } from "express";

export const getEvents = async (req: Request, res: Response) => {

    const events = await Event.find()
        .populate('user', 'name');

    res.status(200).json({
        ok: true,
        events,
    });

}

export const createEvent = async (req: IGetSetPropsInfoRequest, res: Response) => {

    const event = new Event(req.body);

    try {


        event.user = req.uid;


        const eventSaved = await event.save();

        res.json({
            ok: true,
            evento: eventSaved
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

export const updateEvent = async (req: IGetSetPropsInfoRequest, res: Response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Event.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Event.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

        res.json({
            ok: true,
            evento: eventoActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

export const removeEvent = async (req: IGetSetPropsInfoRequest, res: Response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Event.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }


        await Event.findByIdAndDelete(eventoId);

        res.json({ ok: true });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}