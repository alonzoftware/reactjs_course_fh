"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPostRenew = exports.authPostNew = exports.authPost = exports.authGet = void 0;
const User_1 = __importDefault(require("../models/User"));
const authGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        ok: true,
    });
});
exports.authGet = authGet;
const authPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
});
exports.authPost = authPost;
const authPostNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let user = yield User_1.default.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }
        user = new User_1.default(req.body);
        // Encriptar contraseña
        // const salt = bcrypt.genSaltSync();
        // user.password = bcrypt.hashSync( password, salt );
        yield user.save();
        // Generar JWT
        // const token = await generarJWT( user.id, user.name );
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            // token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
});
exports.authPostNew = authPostNew;
const authPostRenew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        ok: true,
        msg: 'renew',
    });
});
exports.authPostRenew = authPostRenew;
//# sourceMappingURL=auth.js.map