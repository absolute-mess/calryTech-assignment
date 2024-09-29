
import http, { Server as HttpServer } from 'http';
import dotenv from 'dotenv';
import app from './index';

dotenv.config();

export class Server {
    private app: typeof app;
    private server: HttpServer;
    private port: string | number;

    constructor() {
        this.app = app;
        this.port = process.env.PORT || 3000;
        this.server = http.createServer(this.app);
    }

    public async start(): Promise<void> {
        this.server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
        this.handleShutdown();
    }

    private handleShutdown(): void {
        process.on('SIGINT', () => {
            console.log('Shutting down the server...');
            this.server.close(async () => {
                console.log('HTTP Server shut down successfully.');
                console.log('Kafka Producer disconnected.');

                process.exit(0);
            });
        });
    }
}
const server = new Server();
server.start();