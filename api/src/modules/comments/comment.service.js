import Comment from './comment.model';
import Article from '../article/article.model';
import {status} from "../../utils/constants";
import {validationResult} from "express-validator";
import {ErrorHandler} from '../../utils/error.util';
import {check_existed} from "../../utils/request.util";
import {retrieveToken} from "../../utils/auth.util";

const _getAll = async (req, res, next) => {
    try {
        Comment.find({})
            .then((data) => {
                return res.status(status.GET_SUCCESS).json({
                    success: true,
                    message: 'Data found',
                    data: data
                })
            })
            .catch((err) => {
                throw new ErrorHandler(
                    status.GET_FAILURE,
                    'Not Found',
                    1105
                )
            });
    } catch (error) {
        next(error);
    }
}

const _getOne = async (req, res, next) => {
    try {
        const filter = {_id: req.params['id']};
        Comment.find(filter)
            .then((data) => {
                return res.status(status.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: data,
                });
            })
            .catch((err) => {
                throw new ErrorHandler(
                    status.GET_FAILURE,
                    'Not Found',
                    1105
                );
            });
    } catch (error) {
        next(error);
    }
}

const _create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            status.CREATE_FAILURE,
            'Invalid Social Type',
            1303
        );
    }
    try {
        const _author = await retrieveToken(req.headers);
        const new_comment = {
            article_id: req.body.article_id,
            parent_id: req.body.parent_id ? req.body.parent_id : null,
            author_id: _author.id,
            content: req.body.content,
        };
        const found = await Article.findByIdAndUpdate(
            {_id: new_comment.article_id},
            {$push: new_comment.article_id}).count();
        if (found) {
            await Comment.create(new_comment)
                .then((data) => {
                    return res.status(status.CREATE_SUCCESS).json({
                        success: true,
                        message: 'Created successfully',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        status.CREATE_FAILURE,
                        'Invalid Social Type',
                        1105
                    );
                });
        } else {
            throw new ErrorHandler(
                status.CREATE_FAILURE,
                'Article _id not existed',
                1105);
        }

    } catch (error) {
        next(error);
    }
}

const _update = async (req, res, next) => {
    try {
        const update = {
            parent_id: req.body.parent_id ? req.body.parent_id : null,
            content: req.body.content,
        };
        const filter = {_id: req.params['id']};
        const found = await check_existed(Comment, filter);
        if (found) {
            Comment.findOneAndUpdate(filter, update)
                .then((data) => {
                    return res.status(status.UPDATE_SUCCESS).json({
                        success: true,
                        message: 'Updated successfully',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        status.UPDATE_FAILURE,
                        'Invalid Social Type',
                        1105
                    );
                });
        } else {
            throw new ErrorHandler(
                status.UPDATE_FAILURE,
                `Comment ${update.category_name} not exist`,
                1303
            );
        }
    } catch (error) {
        next(error);
    }
}

const _delete = async (req, res, next) => {
    try {
        const filter = {_id: req.param['id']};
        const found = await check_existed(Comment, filter);
        if (found) {
            Comment.findByIdAndDelete(filter)
                .then((data) => {
                    return res.status(status.DELETE_SUCCESS).json({
                        success: true,
                        message: 'Deleted successfully',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        status.DELETE_FAILURE,
                        'Invalid Social Type',
                        1105
                    );
                });
        } else {
            throw new ErrorHandler(
                status.DELETE_FAILURE,
                'Tag not existed',
                1303
            );
        }
    } catch (error) {
        next(error);
    }
}

const CommentService = {_getAll, _getOne, _create, _update, _delete};
export default CommentService;