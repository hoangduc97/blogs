const initialState = [];

const HomeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: payload.id,
                    text: payload.text,
                },
            ];
        default:
            return state;
    }
};

export default HomeReducer;
