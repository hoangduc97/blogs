import api from '../configs/axios.config';
const { API_POST_PATH } = process.env;

const getAll = () => {
    return api.get(API_POST_PATH);
};

const getOne = (articleId) => {
    return api.get(API_POST_PATH + '/' + articleId);
};

const article = {
    getAll,
    getOne,
};

export default article;
