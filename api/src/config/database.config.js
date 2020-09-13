import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

const connect_mongo = () => {
    return mongoose.connect(DB_URI, options);
};

const database = {
    connect_mongo,
};

export default database;
