// import modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "morgan";
import database from "./src/config/database.config";
import router from "./src/routes";
import corsOption from "./src/config/cors.config";
import passport from "./src/config/passport.config";

// load env
dotenv.config();
// init server
const app = express();
const PORT = process.env.API_PORT || 3000;
const API_ENV = process.env.API_ENV || "prod";

// add and config middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger(API_ENV));
app.use(cors(corsOption));
app.use(passport.initialize());
app.use(router);

// connect to database
database
    .connect_mongo()
    .then(() => {
        console.log("connect database success!");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(`server running with port ${PORT}`);
});
