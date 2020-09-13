const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME
const DB_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connect_mongo = () => {
    console.log(DB_URI);
    return mongoose.connect(DB_URI, options)
}

module.exports = {
    connect_mongo
};