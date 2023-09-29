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
//SSL-------------------------
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
//----------------------------
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("../routes/auth"));
// import userRoutes from '../routes/user';
// import managpcsRoutes from '../routes/managpcs';
// import servStatusRoutes from '../routes/servstatus';
// import clientsRoutes from '../routes/clients';
// import { Socket, Server as SocketServer } from "socket.io";
// import { socketController } from '../sockets/socket-controller';
// import { db } from '../db/index';
// import { initModels } from './init-models';
// import { convertDateTimeToAppFormat } from "../helpers";
// import { readPORT } from "../helpers/app-config";
class Server {
    constructor() {
        // private io: SocketServer;
        this.apiPaths = {
            userPath: "/api/user",
            authPath: "/api/auth",
            managpcsPath: "/api/managpcs",
            servStatusPath: "/api/servstatus",
            clientsPath: "/api/clients",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.CALMERN_PORT || '8081'; //readPORT();
        this.sslins = process.env.CALMERN_SSLINS || 'false';
        this.sslkey = process.env.CALMERN_SSLKEY || '';
        this.sslcrt = process.env.CALMERN_SSLCRT || '';
        this.sslcab = process.env.CALMERN_SSLCAB || '';
        if (this.sslkey != '' && this.sslins == 'true') {
            this.server = https_1.default
                .createServer({
                key: fs_1.default.readFileSync(this.sslkey),
                cert: fs_1.default.readFileSync(this.sslcrt),
                ca: [
                    fs_1.default.readFileSync(this.sslcab),
                ]
            }, this.app);
            // this.server = https
            //     .createServer(
            //         {
            //             key: fs.readFileSync(process.env.GPONDB_PATH + "ssl/" + this.sslkey),
            //             cert: fs.readFileSync(process.env.GPONDB_PATH + "ssl/" + this.sslcrt),
            //             ca: [
            //                 fs.readFileSync(process.env.GPONDB_PATH + "ssl/" + this.sslcab),
            //             ]
            //         },
            //         this.app
            //     );
        }
        else {
            this.server = http_1.default.createServer(this.app);
        }
        //Sockets
        // this.io = require("socket.io")(this.server);
        //DB Connection
        this.dbMySQLConnection();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
        //Sockets
        this.sockets();
    }
    dbMySQLConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await db.authenticate();
                // initModels(db);
                // console.log(`Database MySQL - ONLINE at : ${convertDateTimeToAppFormat(new Date)}`);
            }
            catch (err) {
                if (err instanceof Error) {
                    // ✅ TypeScript knows err is Error
                    console.log(err.message);
                }
                else {
                    console.log('Unexpected error', err);
                }
            }
        });
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)({ credentials: true, origin: true }));
        //Read and Parse JSON BODY
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(process.env.CALMERN_PATH + 'public'));
    }
    routes() {
        this.app.use(this.apiPaths.authPath, auth_1.default);
        // this.app.use(this.apiPaths.userPath, userRoutes);
        // this.app.use(this.apiPaths.managpcsPath, managpcsRoutes);
        // this.app.use(this.apiPaths.servStatusPath, servStatusRoutes);
        // this.app.use(this.apiPaths.clientsPath, clientsRoutes);
    }
    sockets() {
        // this.io.on("connection", (socket) => socketController(socket, this.io));
        // this.io.on("connection", (socket: Socket) => socketController(socket, this.io));
        // this.app.set('socketSrv', this.io);
    }
    listen() {
        // this.app.listen(this.port, () => {
        //     console.log(`Server running in PORT ${this.port}`);
        // })
        this.server.listen(this.port, () => {
            console.log(`Server running in PORT ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map