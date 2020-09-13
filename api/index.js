// import modules
import express from "express";
import cors from "cors";
import logger from "morgan";
import database from "./src/config/database.config";
import Router from "./src/routes";

// init server
const app = express();
// init port
const PORT = process.env.PORT || 3000;

// config app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));
app.use(Router);

// connect to database
database
    .connect_mongo()
    .then(() => {
        console.log("connect database success");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(`server running with port ${PORT}`);
});
