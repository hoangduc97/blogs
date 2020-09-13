// import modules
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const database = require('./src/config/database.config');

// init server
const app = express();
// init port
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(logger('dev'));

app.get("/", (req, res) => {
    return res.json({
        hello: "duc",
    });
});
// connect to database
database.connect_mongo()
    .then(() => {
        console.log('connect database success');
    })
    .catch((err) => {
        console.error(err);
    })

app.listen(PORT, () => {
    console.log(`server running with port ${PORT}`);
});