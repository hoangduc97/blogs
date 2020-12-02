const response = (res, msgSuccess, statusSuccess, msgError, statusError) => ((data) => {
    return res
        .status(statusSuccess)
        .json({
            success: true,
            message: msgSuccess,
            data: data
        });
}).catch((err) => {
    return res
        .status(statusError)
        .json({
            success: false,
            message: msgError,
            error: err
        })
});

export {
    response
};