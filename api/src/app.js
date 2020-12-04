// import modules
import express from 'express';
import cors from 'cors';
import database from './config/database.config';
import router from './routes';
import corsOption from './config/cors.config';
import passport from './config/passport.config';
import logger from 'morgan';
import { handleError } from './utils/error.util';

// init server
const app = express();
const API_ENV = process.env.API_ENV || 'prod';

// add and config middleware
app.use(logger(API_ENV));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOption));
app.use(passport.initialize());
app.use(process.env.BASE_PATH, router);

// connect to database
database
    .connect_mongo()
    .then(() => {
        console.log('connect database success!');
    })
    .catch((err) => {
        console.error(err);
    });

app.use((err, req, res, next) => {
    handleError(err, res);
});
export default app;
