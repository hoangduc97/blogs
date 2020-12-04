import { validationResult } from 'express-validator';
import { retrieveToken } from '../../utils/auth.util';
import { check_existed } from '../../utils/request.util';
import { apiStatus } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.util';
import { convert_slug } from '../../utils/common.util';
import Post from './post.model';

const _getAll = async (req, res, next) => {
    try {
        Post.find({})
            .then((data) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: data,
                });
            })
            .catch((err) => {
                throw new ErrorHandler(
                    apiStatus.GET_FAILURE,
                    'Not Found',
                    1105
                );
            });
    } catch (error) {
        next(error);
    }
};

const _getOne = async (req, res, next) => {
    try {
        const filter = { _id: req.params['id'] };
        Post.findOne(filter)
            .populate('UserProfile')
            .populate('Comment')
            .populate('Tag')
            .populate('Category')
            .populate('PostMeta')
            .exec()
            .then((data) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: data,
                });
            })
            .catch((err) => {
                throw new ErrorHandler(
                    apiStatus.GET_FAILURE,
                    'Not Found',
                    1105
                );
            });
    } catch (error) {
        next(error);
    }
};

const _create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(apiStatus.CREATE_FAILURE).json({
            success: false,
            errors: errors.array(),
        });
    }

    try {
        const _author = await retrieveToken(req.headers);
        const new_post = {
            author_id: _author.id,
            parent_id: req.body.parent_id,
            title: req.body.title,
            slug: req.body.title
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ|Đ/g, 'd')
                .replace(/ /g, '-')
                .toLowerCase(),
            summary: req.body.summary,
            content: req.body.content,
            tags: req.body.tags ? [...req.body.tags] : null,
            categories: req.body.categories ? [...req.body.categories] : null,
        };
        await Post.create(new_post)
            .then((data) => {
                console.log(data);
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Created Successfull',
                    data: data,
                });
            })
            .catch((err) => {
                console.log(err);

                throw new ErrorHandler(
                    apiStatus.GET_FAILURE,
                    'Invalid Social Type',
                    1303
                );
            });
    } catch (error) {
        console.log('error');
        next(error);
    }
};

const _update = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(apiStatus.UPDATE_FAILURE).json({
            success: false,
            errors: errors.array(),
        });
    }

    try {
        // Get filter
        const _author = await retrieveToken(req.headers);
        const filter = {
            _id: req.body['_id'],
            author_id: _author.id,
        };
        // Check post_id existed
        const found = await check_existed(filter);
        console.log('run 2');
        if (found) {
            const data_update = {
                author_id: _author.id,
                parent_id: req.body.parent_id,
                title: req.body.title,
                slug: req.body.slug,
                summary: req.body.summary,
                content: req.body.content,
                tags: [...req.body.tags],
                categories: [...req.body.categories],
            };
            Post.findOneAndUpdate(filter, data_update)
                .then((data) => {
                    return res.status(apiStatus.UPDATE_SUCCESS).json({
                        success: true,
                        message: 'Updated Successfull',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        apiStatus.UPDATE_FAILURE,
                        'Invalid Social Type',
                        1303
                    );
                });
        } else {
            throw new ErrorHandler(
                apiStatus.UPDATE_FAILURE,
                'Post _id not existed.',
                1303
            );
        }
    } catch (error) {
        next(error);
    }
};

const _delete = async (req, res, next) => {
    try {
        const filter = { _id: req.params['id'] };
        const found = await check_existed(filter);
        if (found) {
            Post.findByIdAndDelete(filter)
                .then((data) => {
                    return res.status(apiStatus.DELETE_SUCCESS).json({
                        success: true,
                        message: 'Deleted Successfull',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        apiStatus.DELETE_FAILURE,
                        'Invalid Social Type',
                        1303
                    );
                });
        } else {
            throw new ErrorHandler(
                apiStatus.DELETE_FAILURE,
                'Post _id not existed',
                1303
            );
        }
    } catch (error) {
        next(error);
    }
};

const PostService = {
    _getAll,
    _getOne,
    _create,
    _update,
    _delete,
};

export default PostService;
