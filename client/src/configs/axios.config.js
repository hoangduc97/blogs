import axios from 'axios';

const { CLIENT_ENV, API_LOCAL, API_PROD, API_PREFIX } = process.env;
const BASE_URL = (CLIENT_ENV == 'dev' ? API_LOCAL : API_PROD) + API_PREFIX;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export const apiAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
    },
    withCredentials: true,
});

export default api;
