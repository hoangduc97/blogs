import { article } from '../../api';
import constants from './article.constant';

const getAll = () => (dispatch) => {
    dispatch({ type: constants.GET_ALL_REQUEST });
    article
        .getAll()
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

const getDetail = (articleSlug) => (dispatch) => {
    dispatch({ type: constants.GET_DETAIL_REQUEST });
    article
        .getDetail(articleSlug)
        .then((res) =>
            dispatch({
                type: constants.GET_DETAIL_SUCCESS,
                payload: res.data.data,
            })
        )
        .catch((err) =>
            dispatch({ type: constants.GET_DETAIL_FAILURE, payload: err })
        );
};

export { getAll, getDetail };
