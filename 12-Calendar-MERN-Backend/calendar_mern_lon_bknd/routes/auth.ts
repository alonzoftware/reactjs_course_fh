import { Router } from "express";
import { check } from "express-validator";
import { authGet, authPost, authPostNew, authPostRenew } from "../routes-controllers";
import { validateFields } from "../middlewares/validate-fields";
// import { validateJWT, validateFields } from "../middlewares";
// import { authPostLogin, authGetRenew } from '../routes-controllers/auth';

const router = Router();
// router.post('/',[
//     check("uuid", "El ID DEVICE es obligatorio").not().isEmpty(),
//     validateFields,
// ] ,authPostLogin)
// router.get('/renew', validateJWT, authGetRenew);

router.get('/', [], authGet);
router.post('/', [
    check('email', 'EL email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de minimo 6 letras').isLength({ min: 6 }),
    validateFields,
], authPost);
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'EL email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de minimo 6 letras').isLength({ min: 6 }),
    validateFields,
], authPostNew);
router.post('/renew', [], authPostRenew);


export default router;