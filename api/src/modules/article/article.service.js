import { validationResult } from 'express-validator';
import { retrieveToken } from '../../utils/auth.util';
import { check_existed } from '../../utils/request.util';
import { status } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.util';
import { convert_slug } from '../../utils/common.util';
import Article from './article.model';
import Message from '../../logger/message.data';
import Logger from '../../logger/logger';

const _getAll = async (req, res, next) => {
    try {
        Article.find({})
            .populate('category')
            .exec()
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

const _getDetail = async (req, res, next) => {
    try {
        const filter = { slug: req.params['slug'] };
        Article.findOne(filter)
            .populate('author')
            .populate('tags')
            .populate('category')
            .exec()
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
            throw new ErrorHandler(status.BAD_REQUEST, Message[1320], 1320);
        }

        const _author = await retrieveToken(req.headers);
        const new_article = {
            author: _author._id,
            title: req.body.title,
            slug: convert_slug(req.body.title),
            content: req.body.content,
            tags: req.body.tags ? [...req.body.tags] : [],
            category: req.body.category,
        };
        const found = await check_existed(Article, {
            slug: new_article.slug,
        });
        if (found) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1321], 1321);
        }
        Article.create(new_article)
            .then((data) => {
                return res.status(status.CREATED).json({
                    success: true,
                    message: Message[2322],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1322], 1322);
            });
    } catch (error) {
        next(error);
    }
};

const _update = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            Logger.error(errors);
            throw new ErrorHandler(status.BAD_REQUEST, Message[1320], 1320);
        }

        // Get filter
        const _author = await retrieveToken(req.headers);
        const filter = {
            _id: req.body['_id'],
            author: _author._id,
        };
        // Check article_id existed
        const found = await check_existed(Article, filter);
        if (!found) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1323], 1323);
        }
        const data_update = {
            author_id: _author._id,
            title: req.body.title,
            slug: convert_slug(req.body.title),
            content: req.body.content,
            tags: req.body.tags ? [...req.body.tags] : [],
            category: req.body.category,
        };
        Article.findOneAndUpdate(filter, data_update, { new: true })
            .then((data) => {
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2324],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1324], 1324);
            });
    } catch (error) {
        next(error);
    }
};

const _delete = async (req, res, next) => {
    try {
        const filter = { _id: req.params['id'] };
        const found = await check_existed(Article, filter);
        if (!found) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1323], 1323);
        }
        Article.findByIdAndDelete(filter)
            .then((data) => {
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2325],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1325], 1325);
            });
    } catch (error) {
        next(error);
    }
};

const ArticleService = {
    _getAll,
    _getDetail,
    _create,
    _update,
    _delete,
};

export default ArticleService;
