import constants from './article.constant';

const initialState = {};
const article = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.GET_ALL_SUCCESS:
            return {
                ...state,
                articlesInfo: [...payload],
            };
        case constants.GET_DETAIL_SUCCESS:
            return {
                ...state,
                articleDetail: payload,
            };
        default:
            return state;
    }
};

export default article;
