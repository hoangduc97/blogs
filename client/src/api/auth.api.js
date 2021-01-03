import api from '../configs/axios.config';
const {
    API_USER_PATH,
    API_REGISTER_PATH,
    API_LOGIN_PATH,
    API_LOGOUT_PATH,
    API_REFRESH_TOKEN_PATH,
} = process.env;

const login = (data) => {
    return api.post(API_USER_PATH + API_LOGIN_PATH, (data = { ...data }));
};

const register = (data) => {
    return api.post(API_USER_PATH + API_REGISTER_PATH, (data = { ...data }));
};

const logout = () => {
    return api.delete(API_USER_PATH + API_LOGOUT_PATH);
};

const refreshToken = () => {
    return api.post(API_USER_PATH + API_REFRESH_TOKEN_PATH);
};

const auth = { login, register, logout, refreshToken };
export default auth;
