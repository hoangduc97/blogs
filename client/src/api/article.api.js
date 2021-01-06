import api, { apiAuth } from '../configs/axios.config';
const { API_POST_PATH } = process.env;

const getAll = () => {
    return api.get(API_POST_PATH);
};

const getDetail = (articleSlug) => {
    return api.get(API_POST_PATH + '/' + articleSlug);
};

const create = (data) => {
    return apiAuth.post(API_POST_PATH, (data = data));
};

const update = (data) => {
    console.log(data);
    return apiAuth.put(API_POST_PATH + '/' + data._id, (data = data));
};

const article = {
    getAll,
    getDetail,
    create,
    update,
};

export default article;
