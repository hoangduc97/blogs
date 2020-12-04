class ErrorHandler extends Error {
    constructor(statusCode, message, errorCode) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.errorCode = errorCode;
    }
}

const handleError = (err, res) => {
    const { statusCode, message, errorCode } = err;
    return res.status(statusCode).json({
        success: false,
        message: message,
        error_code: errorCode,
    });
};

export { ErrorHandler, handleError };
