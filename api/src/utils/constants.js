const modelConstant = {
    EMAIL_TOKEN_LENGTH: {
        MIN: 100000,
        MAX: 999999,
    },
};

const roleConstant = {
    MANAGER: 0,
    WRITER: 1,
    USER: 2,
};

const status = {
    SUCCESS: 200,
    CREATED: 201,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,

    FORBIDDEN: 403,
    NOTFOUND: 404,
    INTERNAL_ERROR: 500
}

export { modelConstant, roleConstant, status };
