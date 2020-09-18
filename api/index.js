// import modules
import express from "express";
import cors from "cors";
import logger from "morgan";
import database from "./src/config/database.config";
import router from "./src/routes";
import session from "./src/config/session.config";
import corsOption from "./src/config/cors.config";

// init server
const app = express();
const PORT = process.env.PORT || 3000;

// add and config middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors(corsOption));
app.use(session)
app.use(router);

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
