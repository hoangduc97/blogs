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

const create = (data, cb) => (dispatch) => {
    dispatch({ type: constants.CREATE_REQUEST });
    article
        .create(data)
        .then((res) => {
            dispatch({
                type: constants.CREATE_SUCCESS,
                payload: res.data.data,
            });
            cb('/admin/article');
        })
        .catch((err) =>
            dispatch({ type: constants.CREATE_FAILURE, payload: err })
        );
};

const update = (data, cb) => (dispatch) => {
    dispatch({ type: constants.UPDATE_REQUEST });
    article
        .update(data)
        .then((res) => {
            dispatch({
                type: constants.UPDATE_SUCCESS,
                payload: res.data.data,
            });
            cb('/admin/article');
        })
        .catch((err) =>
            dispatch({ type: constants.UPDATE_FAILURE, payload: err })
        );
};

export { getAll, getDetail, create, update };
