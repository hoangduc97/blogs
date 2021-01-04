import api from '../configs/axios.config';
const { API_POST_PATH } = process.env;

const getAll = () => {
    return api.get(API_POST_PATH);
};

const getDetail = (articleSlug) => {
    return api.get(API_POST_PATH + '/' + articleSlug);
};

const article = {
    getAll,
    getDetail,
};

export default article;
