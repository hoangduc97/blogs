const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connect_mongo = () => {
    return mongoose.connect(DB_URI, options)
}

module.exports = {
    connect_mongo
};