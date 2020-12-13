const winston = require('winston');
const consoleTransport = new winston.transports.Console();
const fileTransport = [
    new winston.transports.File({ filename: './error.log', level: 'error' }),
    new winston.transports.File({ filename: './rest.log' }),
];
const myWinstonOptions = {
    transports: [
        process.env.API_ENV == 'dev' ? consoleTransport : fileTransport,
    ],
};
const logger = new winston.createLogger(myWinstonOptions);

function logRequest(req, res, next) {
    logger.info(req.url);
    next(res);
}
function logError(err, req, res, next) {
    logger.error(err);
    next(err);
}

export { logRequest, logError };

export default logger;
