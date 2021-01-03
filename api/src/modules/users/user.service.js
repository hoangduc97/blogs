import { validationResult } from 'express-validator';
import {
    createAccessToken,
    createRefreshToken,
    getUserRefreshToken,
    setTokenCookie,
} from '../../utils/auth.util';
import { role, status } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.util';
import client from '../../config/redis.config';
import Message from '../../logger/message.data';
import Logger from '../../logger/logger';
import User from './user.model';

const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            Logger.error(errors);
            throw new ErrorHandler(status.BAD_REQUEST, Message[1301], 1301);
        }
        const { email, password } = req.body;
        const existed = await User.exists({ 'account.email': email });
        if (existed) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1303], 1303);
        }

        await User.create({
            role: role.USER,
            account: {
                email: email,
                hash: password,
            },
        })
            .then(async (user) => {
                const accessToken = createAccessToken(user);
                const refreshToken = createRefreshToken(user);
                setTokenCookie(res, refreshToken);

                return res.status(status.CREATED).json({
                    success: true,
                    message: Message[2304],
                    user: {
                        username: user.username,
                        avatar_url: user.avatar_url,
                        bookmark_article: user.bookmark_article,
                        _id: user._id,
                        email: user.account.email,
                    },
                    token: accessToken,
                });
            })
            .catch((error) => {
                Logger.error(error);
                throw new ErrorHandler(status.BAD_REQUEST, Message[1304], 1304);
            });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            Logger.error(errors);
            throw new ErrorHandler(status.BAD_REQUEST, Message[1302], 1302);
        }

        const { email, password } = req.body;
        const user = await User.findOne({ 'account.email': email });
        if (!user) {
            throw new ErrorHandler(status.UNAUTHORIZED, Message[1305], 1305);
        }
        user.account.compareHash(password, (err, isMatch) => {
            if (isMatch && !err) {
                const accessToken = createAccessToken(user);
                const refreshToken = createRefreshToken(user);
                setTokenCookie(res, refreshToken);

                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2305],
                    user: {
                        username: user.username,
                        avatar_url: user.avatar_url,
                        bookmark_article: user.bookmark_article,
                        _id: user._id,
                        email: user.account.email,
                    },
                    token: accessToken,
                });
            }
            throw new ErrorHandler(status.UNAUTHORIZED, Message[1305], 1305);
        });
    } catch (error) {
        next(error);
    }
};

const logout = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        const user = await getUserRefreshToken(refreshToken);
        await client.DEL(user._id + '');
    } catch (error) {}
    res.sendStatus(status.NO_RESPONSE);
};

const refreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;

        const user = await getUserRefreshToken(refreshToken);

        const newAccessToken = createAccessToken(user);
        const newRefreshToken = createRefreshToken(user);
        setTokenCookie(res, newRefreshToken);

        res.status(status.SUCCESS).json({
            success: true,
            message: Message[2101],
            user: {
                username: user.username,
                avatar_url: user.avatar_url,
                bookmark_article: user.bookmark_article,
                _id: user._id,
                email: user.account.email,
            },
            token: newAccessToken,
        });
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        User.find({})
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

const UserService = {
    register,
    login,
    logout,
    getAll,
    refreshToken,
};

export default UserService;
