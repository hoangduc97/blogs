import constants from './auth.constant';

const initialState = {};
const category = (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case constants.LOGIN_SUCCESS:
        case constants.REGISTER_SUCCESS:
        case constants.REFRESH_TOKEN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                user: payload.user,
                token: payload.token,
            };
        case constants.LOGOUT_SUCCESS:
            localStorage.clear();
            return initialState;

        case constants.LOGIN_FAILURE:
            return {
                loginError: payload.message,
            };
        case constants.REGISTER_FAILURE:
            return {
                resisterError: payload.message,
            };
        default:
            return state;
    }
};

export default category;
