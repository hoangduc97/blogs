import api from '../configs/axios.config';
const { API_CATEGORY_PATH } = process.env;

const getAll = () => {
    return api.get(API_CATEGORY_PATH);
};

const category = {
    getAll,
};

export default category;
