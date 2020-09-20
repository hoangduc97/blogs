// import modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import database from './config/database.config';
import router from './routes';
import corsOption from './config/cors.config';
import passport from './config/passport.config';

// load env
dotenv.config();
// init server
const app = express();

// add and config middleware
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

export default app;
