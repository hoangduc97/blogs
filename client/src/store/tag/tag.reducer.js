import constants from './tag.constant';

const initialState = [];
const tag = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.GET_ALL_SUCCESS:
            return [...payload];

        default:
            return state;
    }
};

export default tag;
