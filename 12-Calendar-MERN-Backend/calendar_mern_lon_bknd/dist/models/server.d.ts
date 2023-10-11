declare class Server {
    private app;
    private port;
    private sslins;
    private sslkey;
    private sslcrt;
    private sslcab;
    private server;
    private apiPaths;
    constructor();
    connectDatabase(): Promise<void>;
    middlewares(): void;
    routes(): void;
    sockets(): void;
    listen(): void;
}
export default Server;
