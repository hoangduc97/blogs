import { status } from '../../utils/constants';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../../utils/error.util';
import { check_existed } from '../../utils/request.util';
import { retrieveToken } from '../../utils/auth.util';
import Comment from './comment.model';
import Article from '../article/article.model';
import Message from '../../logger/message.data';
import Logger from '../../logger/message.data';

const _getAllByArticle = async (req, res, next) => {
    try {
        const filter = { article: req.params['article'] };
        Comment.find(filter)
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
            throw new ErrorHandler(status.BAD_REQUEST, Message[1326], 1326);
        }
        const _author = await retrieveToken(req.headers);
        const new_comment = {
            article: req.params['article'],
            parent: req.body.parent,
            author: _author._id,
            content: req.body.content,
        };
        Comment.create(new_comment)
            .then((data) => {
                return res.status(status.CREATED).json({
                    success: true,
                    message: Message[2327],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1323], 1323);
            });
    } catch (error) {
        next(error);
    }
};

const _update = async (req, res, next) => {
    try {
        const update = {
            parent: req.body.parent,
            content: req.body.content,
        };
        const filter = { _id: req.params['id'] };
        const found = await check_existed(Comment, filter);
        if (found) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1328], 1328);
        }
        Comment.findOneAndUpdate(filter, update, { new: true })
            .then((data) => {
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2329],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1329], 1329);
            });
    } catch (error) {
        next(error);
    }
};

const _delete = async (req, res, next) => {
    try {
        const filter = { _id: req.param['id'] };
        const found = await check_existed(Comment, filter);
        if (found) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1328], 1328);
        }
        Comment.findByIdAndDelete(filter)
            .then((data) => {
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2330],
                    data: data,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1330], 1330);
            });
    } catch (error) {
        next(error);
    }
};

const CommentService = { _getAllByArticle, _create, _update, _delete };
export default CommentService;
