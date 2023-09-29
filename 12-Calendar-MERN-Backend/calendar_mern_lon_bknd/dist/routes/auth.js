"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_controllers_1 = require("../routes-controllers");
// import { validateJWT, validateFields } from "../middlewares";
// import { authPostLogin, authGetRenew } from '../routes-controllers/auth';
const router = (0, express_1.Router)();
// router.post('/',[
//     check("uuid", "El ID DEVICE es obligatorio").not().isEmpty(),
//     validateFields,
// ] ,authPostLogin)
// router.get('/renew', validateJWT, authGetRenew);
router.get('/', [], routes_controllers_1.authGet);
router.post('/', [], routes_controllers_1.authPost);
router.post('/new', [], routes_controllers_1.authPostNew);
router.post('/renew', [], routes_controllers_1.authPostRenew);
exports.default = router;
//# sourceMappingURL=auth.js.map