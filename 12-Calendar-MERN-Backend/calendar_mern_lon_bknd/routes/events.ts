/*
    Event Routes
    /api/events
*/
import { Router } from 'express';
import { check } from 'express-validator';

import { isDate } from '../helpers/isDate';
import { validateFields } from '../middlewares/validate-fields';
import { validateJWT } from '../middlewares/validate-jwt';
import { getEvents, createEvent, updateEvent, removeEvent } from '../routes-controllers/events';

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validateJWT);


// Obtener eventos 
router.get('/', getEvents);

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validateFields
    ],
    createEvent
);

// Actualizar Evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        createEvent
    ],
    updateEvent
);

// Borrar evento
router.delete('/:id', removeEvent);

export default router;