import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { swaggerUi, swaggerDocs } from './docs/swagger.doc';
import session from "express-session";

import router from './router'

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.configureRoutes();
    }

    private configureRoutes() {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
        this.app.use('/api', router);
    }
}

export default new App().app;
