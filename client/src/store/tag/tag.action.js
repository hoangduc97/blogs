import { tag } from '../../api';
import constants from './tag.constant';

const getAll = () => (dispatch) => {
    dispatch({ type: constants.GET_ALL_REQUEST });
    tag.getAll()
        .then((res) =>
            dispatch({
                type: constants.GET_ALL_SUCCESS,
                payload: res.data.data,
            })
        )
        .catch((err) =>
            dispatch({ type: constants.GET_ALL_FAILURE, payload: err })
        );
};

export { getAll };
