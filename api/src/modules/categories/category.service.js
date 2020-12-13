import { status } from '../../utils/constants';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../../utils/error.util';
import { convert_slug } from '../../utils/common.util';
import { check_existed } from '../../utils/request.util';
import Category from './category.model';
import Message from '../../logger/message.data';
import Logger from '../../logger/logger';

const _getAll = async (req, res, next) => {
    try {
        Category.find({})
            .then((data) => {
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2100],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1100], 1100);
            });
    } catch (error) {
        next(error);
    }
};

const _getOne = async (req, res, next) => {
    try {
        const filter = { _id: req.params['id'] };
        Category.find(filter)
            .then((data) => {
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2100],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1100], 1100);
            });
    } catch (error) {
        next(error);
    }
};

const _create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            Logger.error(errors);
            throw new ErrorHandler(status.BAD_REQUEST, Message[1308], 1308);
        }
        const new_category = {
            title: req.body.title,
            slug: convert_slug(req.body.title),
        };
        const filter_existed = {
            slug: new_category.slug,
        };
        const found = await check_existed(Category, filter_existed);
        if (found) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1309], 1309);
        } else {
            Category.create(new_category)
                .then((data) => {
                    return res.status(status.CREATED).json({
                        success: true,
                        message: Message[2310],
                        data: data,
                    });
                })
                .catch((error) => {
                    Logger.error(error);
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1310],
                        1310
                    );
                });
        }
    } catch (error) {
        next(error);
    }
};

const _update = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            Logger.error(errors);
            throw new ErrorHandler(status.BAD_REQUEST, Message[1308], 1308);
        }
        const update = {
            title: req.body.title,
            slug: convert_slug(req.body.title),
        };
        const filter = { _id: req.params['id'] };
        const found = await check_existed(Category, filter);
        if (found) {
            Category.findOneAndUpdate(filter, update, { new: true })
                .then((data) => {
                    return res.status(status.SUCCESS).json({
                        success: true,
                        message: Message[2311],
                        data: data,
                    });
                })
                .catch((error) => {
                    Logger.error(error);
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1311],
                        1311
                    );
                });
        } else {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1312], 1312);
        }
    } catch (error) {
        next(error);
    }
};

const _delete = async (req, res, next) => {
    try {
        const filter = { _id: req.param['id'] };
        const found = await check_existed(Category, filter);
        if (found) {
            Category.findByIdAndDelete(filter)
                .then((data) => {
                    return res.status(status.SUCCESS).json({
                        success: true,
                        message: Message[2313],
                        data: data,
                    });
                })
                .catch((error) => {
                    Logger.error(error);
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1313],
                        1313
                    );
                });
        } else {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1312], 1312);
        }
    } catch (error) {
        next(error);
    }
};

const CategoryService = { _getAll, _getOne, _create, _update, _delete };
export default CategoryService;
