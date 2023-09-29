import { Router } from "express";
import { check } from "express-validator";
import { authGet, authPost, authPostNew, authPostRenew } from "../routes-controllers";
// import { validateJWT, validateFields } from "../middlewares";
// import { authPostLogin, authGetRenew } from '../routes-controllers/auth';

const router = Router();
// router.post('/',[
//     check("uuid", "El ID DEVICE es obligatorio").not().isEmpty(),
//     validateFields,
// ] ,authPostLogin)
// router.get('/renew', validateJWT, authGetRenew);

router.get('/', [], authGet);
router.post('/', [], authPost);
router.post('/new', [], authPostNew);
router.post('/renew', [], authPostRenew);


export default router;