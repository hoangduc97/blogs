import api from '../configs/axios.config';
const { API_TAG_PATH } = process.env;

const getAll = () => {
    return api.get(API_TAG_PATH);
};

const category = {
    getAll,
};

export default category;
