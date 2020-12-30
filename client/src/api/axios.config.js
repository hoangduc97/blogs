import axios from 'axios';

const { CLIENT_ENV, API_LOCAL, API_PROD, API_PREFIX } = process.env;
const BASE_URL = (CLIENT_ENV == 'dev' ? API_LOCAL : API_PROD) + API_PREFIX;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? token : '';
    return config;
});
export default api;
