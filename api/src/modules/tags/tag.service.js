import { validationResult } from 'express-validator';
import { check_existed } from '../../utils/request.util';
import { convert_slug } from '../../utils/common.util';
import { ErrorHandler } from '../../utils/error.util';
import { status } from '../../utils/constants';
import Tag from './tag.model';
import Message from '../../logger/message.data';
import Logger from '../../logger/logger';

const _getAll = async (req, res, next) => {
    try {
        Tag.find({})
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
        Tag.find(filter)
            .then((data) => {
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2100],
                    data: data,
                });
            })
            .catch((err) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1100], 1100);
            });
    } catch (error) {
        next(error);
    }
};

const _create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        Logger.error(errors);
        throw new ErrorHandler(status.BAD_REQUEST, Message[1314], 1314);
    }
    try {
        const new_tag = {
            title: req.body.title,
            slug: convert_slug(req.body.title),
        };
        const filter_existed = {
            slug: new_tag.slug,
        };
        const found = await check_existed(Tag, filter_existed);
        if (found) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1315], 1315);
        } else {
            Tag.create(new_tag)
                .then((data) => {
                    return res.status(status.CREATED).json({
                        success: true,
                        message: Message[2316],
                        data: data,
                    });
                })
                .catch((error) => {
                    Logger.error(error);
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1316],
                        1316
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
            title: req.body.title,
            slug: convert_slug(req.body.title),
        };
        const filter = { _id: req.params['id'] };
        const found = await check_existed(Tag, filter);
        if (found) {
            Tag.findOneAndUpdate(filter, update, { new: true })
                .then((data) => {
                    return res.status(status.SUCCESS).json({
                        success: true,
                        message: Message[2317],
                        data: data,
                    });
                })
                .catch((error) => {
                    Logger.error(error);
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1317],
                        1317
                    );
                });
        } else {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1318], 1318);
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
                    return res.status(status.SUCCESS).json({
                        success: true,
                        message: Message[2319],
                        data: data,
                    });
                })
                .catch((error) => {
                    Logger.error(error);
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1319],
                        1319
                    );
                });
        } else {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1318], 1318);
        }
    } catch (error) {
        next(error);
    }
};

const TagService = { _getAll, _getOne, _create, _update, _delete };
export default TagService;
