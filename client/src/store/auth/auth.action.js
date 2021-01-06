import { auth } from '../../api';
import constants from './auth.constant';

const login = (data, cb) => (dispatch) => {
    dispatch({ type: constants.LOGIN_REQUEST });
    auth.login(data)
        .then((res) => {
            dispatch({ type: constants.LOGIN_SUCCESS, payload: res.data });
            if (res.data.user.role == process.env.ROLE_USER) cb('/');
            else cb('/admin');
        })
        .catch((err) =>
            dispatch({
                type: constants.LOGIN_FAILURE,
                payload: err.response.data,
            })
        );
};

const register = (data, cb) => (dispatch) => {
    dispatch({ type: constants.REGISTER_REQUEST });
    auth.register(data)
        .then((res) => {
            dispatch({ type: constants.REGISTER_SUCCESS, payload: res.data });
            if (res.data.user.role == process.env.ROLE_USER) cb('/');
            else cb('/admin/article');
        })
        .catch((err) =>
            dispatch({
                type: constants.REGISTER_FAILURE,
                payload: err.response.data,
            })
        );
};

const refreshToken = () => (dispatch) => {
    dispatch({ type: constants.REFRESH_TOKEN_REQUEST });
    auth.refreshToken()
        .then((res) => {
            dispatch({
                type: constants.REFRESH_TOKEN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: constants.REFRESH_TOKEN_FAILURE,
                payload: err.response.data,
            })
        );
};

const logout = (cb) => (dispatch) => {
    dispatch({ type: constants.LOGOUT_REQUEST });
    auth.logout()
        .then((res) => {
            dispatch({ type: constants.LOGOUT_SUCCESS });
            cb('/');
        })
        .catch((err) =>
            dispatch({
                type: constants.LOGOUT_FAILURE,
                payload: err.response.data,
            })
        );
};

export { login, register, refreshToken, logout };
