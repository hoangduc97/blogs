import constants from './category.constant';

const initialState = [];
const category = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.GET_ALL_SUCCESS:
            return [...payload];

        default:
            return state;
    }
};

export default category;
