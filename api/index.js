// import modules
import logger from 'morgan';
import http from 'http';
import app from './src/app';

// init server
const PORT = process.env.API_PORT || 3000;
const API_ENV = process.env.API_ENV || 'prod';

app.use(logger(API_ENV));
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server running with port ${PORT}`);
});
