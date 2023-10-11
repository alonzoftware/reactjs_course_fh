//SSL-------------------------
import https from "https";
import http from "http";
import fs from "fs";
//----------------------------
import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from '../routes/auth';
import { dbMONGOConnection } from "../database/config";
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
    private app: Application;
    private port: string;
    private sslins: string;
    private sslkey: string;
    private sslcrt: string;
    private sslcab: string;
    private server;
    // private io: SocketServer;
    private apiPaths = {
        userPath: "/api/user",
        authPath: "/api/auth",
        managpcsPath: "/api/managpcs",
        servStatusPath: "/api/servstatus",
        clientsPath: "/api/clients",
    }

    constructor() {

        this.app = express();
        this.port = process.env.CALMERN_PORT || '8081'//readPORT();
        this.sslins = process.env.CALMERN_SSLINS || 'false'
        this.sslkey = process.env.CALMERN_SSLKEY || '';
        this.sslcrt = process.env.CALMERN_SSLCRT || '';
        this.sslcab = process.env.CALMERN_SSLCAB || '';

        if (this.sslkey != '' && this.sslins == 'true') {
            this.server = https
                .createServer(
                    {
                        key: fs.readFileSync(this.sslkey),
                        cert: fs.readFileSync(this.sslcrt),
                        ca: [
                            fs.readFileSync(this.sslcab),
                        ]
                    },
                    this.app
                );
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

        } else {
            this.server = http.createServer(
                this.app
            );
        }

        //Sockets
        // this.io = require("socket.io")(this.server);
        //DB Connection
        // this.dbMySQLConnection();
        this.connectDatabase();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
        //Sockets
        this.sockets();

    }
    async connectDatabase() {
        await dbMONGOConnection();
    }
    // async dbMySQLConnection() {
    //     try {
    //         // await db.authenticate();

    //         // initModels(db);
    //         // console.log(`Database MySQL - ONLINE at : ${convertDateTimeToAppFormat(new Date)}`);

    //     } catch (err) {
    //         if (err instanceof Error) {
    //             // ✅ TypeScript knows err is Error
    //             console.log(err.message);
    //         } else {
    //             console.log('Unexpected error', err);
    //         }
    //     }
    // }
    middlewares() {
        //cors
        this.app.use(cors({ credentials: true, origin: true }));
        //Read and Parse JSON BODY
        this.app.use(express.json());

        this.app.use(express.static(process.env.CALMERN_PATH + 'public'));
    }

    routes() {
        this.app.use(this.apiPaths.authPath, authRoutes);
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

export default Server;