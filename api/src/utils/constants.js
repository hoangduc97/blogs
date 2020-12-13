const role = {
    MANAGER: 0,
    WRITER: 1,
    USER: 2,
};

const status = {
    SUCCESS: 200,
    CREATED: 201,
    NO_RESPONSE: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,

    FORBIDDEN: 403,
    NOTFOUND: 404,
    INTERNAL_ERROR: 500,
};

export { role, status };
