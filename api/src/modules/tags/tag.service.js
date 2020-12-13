import { validationResult } from 'express-validator';
import { status } from '../../utils/constants';
import { check_existed } from '../../utils/request.util';
import { convert_slug } from '../../utils/common.util';
import { ErrorHandler } from '../../utils/error.util';
import Tag from './tag.model';

const _getAll = async (req, res, next) => {
    try {
        Tag.find({})
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
        Tag.find(filter)
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
        throw new ErrorHandler(
            status.CREATE_FAILURE,
            'Invalid Social Type',
            1303
        );
    }
    try {
        const new_tag = {
            tag_name: req.body.tag_name,
            slug: convert_slug(req.body.tag_name),
            content: req.body.content,
            categories: req.body.categories,
        };
        const filter_existed = {
            slug: new_tag.slug,
            categories: new_tag.categories,
        };
        const found = await check_existed(Tag, filter_existed);
        if (found) {
            throw new ErrorHandler(
                status.CREATE_FAILURE,
                `Tag ${new_tag.tag_name} has exist in category ${new_tag.categories}`,
                1303
            );
        } else {
            await Tag.create(new_tag)
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
        }
    } catch (error) {
        next(error);
    }
};

const _update = async (req, res, next) => {
    try {
        const update = {
            tag_name: req.body.tag_name,
            slug: convert_slug(req.body.tag_name),
            content: req.body.content,
            categories: req.body.categories,
        };
        const filter = { _id: req.params['id'] };
        const found = await check_existed(Tag, filter);
        if (found) {
            Tag.findOneAndUpdate(filter, update)
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
                `Tag ${update.tag_name} not exist in category ${update.categories}`,
                1303
            );
        }
    } catch (error) {
        next(error);
    }
};

const _delete = async (req, res, next) => {
    try {
        const filter = { _id: req.param['id'] };
        const found = await check_existed(Tag, filter);
        if (found) {
            Tag.findByIdAndDelete(filter)
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
};

const TagService = { _getAll, _getOne, _create, _update, _delete };
export default TagService;
