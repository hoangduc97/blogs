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

const apiStatus = {
    CREATE_SUCCESS: 201,
    CREATE_FAILURE: 404,

    GET_SUCCESS: 200,
    GET_FAILURE: 404,

    UPDATE_SUCCESS: 200,
    UPDATE_FAILURE: 404,

    DELETE_SUCCESS: 200,
    DELETE_FAILURE: 404
}

export { modelConstant, roleConstant, apiStatus };
