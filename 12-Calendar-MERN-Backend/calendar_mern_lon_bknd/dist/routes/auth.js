"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const routes_controllers_1 = require("../routes-controllers");
const validate_fields_1 = require("../middlewares/validate-fields");
// import { validateJWT, validateFields } from "../middlewares";
// import { authPostLogin, authGetRenew } from '../routes-controllers/auth';
const router = (0, express_1.Router)();
// router.post('/',[
//     check("uuid", "El ID DEVICE es obligatorio").not().isEmpty(),
//     validateFields,
// ] ,authPostLogin)
// router.get('/renew', validateJWT, authGetRenew);
router.get('/', [], routes_controllers_1.authGet);
router.post('/', [
    (0, express_validator_1.check)('email', 'EL email es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe ser de minimo 6 letras').isLength({ min: 6 }),
    validate_fields_1.validateFields,
], routes_controllers_1.authPost);
router.post('/new', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'EL email es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe ser de minimo 6 letras').isLength({ min: 6 }),
    validate_fields_1.validateFields,
], routes_controllers_1.authPostNew);
router.post('/renew', [], routes_controllers_1.authPostRenew);
exports.default = router;
//# sourceMappingURL=auth.js.map