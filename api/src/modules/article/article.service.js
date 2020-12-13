import { validationResult } from 'express-validator';
import { retrieveToken } from '../../utils/auth.util';
import { check_existed } from '../../utils/request.util';
import { status } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.util';
import { convert_slug } from '../../utils/common.util';
import Post from './article.model';

const _getAll = async (req, res, next) => {
    try {
        Post.find({})
            .populate('author_id')
            .populate('tags')
            .populate('categories')
            .exec()
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
};

const _create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(status.CREATE_FAILURE).json({
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
            slug: convert_slug(req.body.title),
            summary: req.body.summary,
            content: req.body.content,
            tags: req.body.tags ? [...req.body.tags] : null,
            categories: req.body.categories ? [...req.body.categories] : null,
        };
        await Post.create(new_post)
            .then((data) => {
                return res.status(status.GET_SUCCESS).json({
                    success: true,
                    message: 'Created Successfull',
                    data: data,
                });
            })
            .catch((err) => {
                console.log(err);

                throw new ErrorHandler(
                    status.GET_FAILURE,
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
        return res.status(status.UPDATE_FAILURE).json({
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
        const found = await check_existed(Post, filter);
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
                    return res.status(status.UPDATE_SUCCESS).json({
                        success: true,
                        message: 'Updated Successfull',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        status.UPDATE_FAILURE,
                        'Invalid Social Type',
                        1303
                    );
                });
        } else {
            throw new ErrorHandler(
                status.UPDATE_FAILURE,
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
        const found = await check_existed(Post, filter);
        if (found) {
            Post.findByIdAndDelete(filter)
                .then((data) => {
                    return res.status(status.DELETE_SUCCESS).json({
                        success: true,
                        message: 'Deleted Successfull',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        status.DELETE_FAILURE,
                        'Invalid Social Type',
                        1303
                    );
                });
        } else {
            throw new ErrorHandler(
                status.DELETE_FAILURE,
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
