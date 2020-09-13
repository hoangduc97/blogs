// import modules
const express = require("express");
const cors = require("cors");
const {
    log,
    ExpressAPILogMiddleware
} = require("@rama41222/node-logger");
const database = require('./src/config/database.config');

// init server
const app = express();
const logger = log({
    console: true,
    file: false,
    label: "blogs",
});
// init port
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, {
    request: true,
}));

app.get("/", (req, res) => {
    return res.json({
        hello: "duc",
    });
});

database.connect_mongo(() => {
    console.log('connect db success');
});

app.listen(PORT, () => {
    console.log(`server running with port ${PORT}`);
});