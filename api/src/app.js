// import modules
import express from 'express';
import cors from 'cors';
import database from './config/database.config';
import router from './routes';
import corsOption from './config/cors.config';
import passport from './config/passport.config';
import { handleError } from './utils/error.util';
import { logRequest, logError } from './logger/logger';
import './config/redis.config';

const configApp = async () => {
    // init server
    const app = express();
    // add and config middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors(corsOption));
    app.use(passport.initialize());
    app.use(process.env.BASE_PATH, router);
    // connect to database
    await database
        .connect_mongo()
        .then(() => {
            console.log('connect database success!');
        })
        .catch((err) => {
            console.error(err);
        });

    app.use(logRequest);
    app.use(logError);
    app.use((err, req, res, next) => {
        if (err.statusCode === 500) {
            return res.status(500).send();
        }
        handleError(err, res);
    });
    return app;
};
export default configApp;
