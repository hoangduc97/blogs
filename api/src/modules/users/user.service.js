import { validationResult } from 'express-validator';
import {
    createAccessToken,
    createRefreshToken,
    retrieveRefreshToken,
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
                return res.status(status.CREATED).json({
                    success: true,
                    message: Message[2304],
                    data: { accessToken, refreshToken },
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
                return res.status(status.SUCCESS).json({
                    success: true,
                    message: Message[2305],
                    data: { accessToken, refreshToken },
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
        const { refreshToken } = req.body;
        if (!refreshToken) {
            throw new ErrorHandler(status.BAD_REQUEST, Message[1306], 1306);
        }

        const userId = await retrieveRefreshToken(refreshToken);
        client.DEL(userId + '', (err, val) => {
            if (err) {
                throw new ErrorHandler(
                    status.INTERNAL_ERROR,
                    Message[5000],
                    5000
                );
            }
            res.sendStatus(status.NO_RESPONSE);
        });
    } catch (error) {
        next(error);
    }
};

const refreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken)
            throw new ErrorHandler(status.BAD_REQUEST, Message[1306], 1306);

        const newAccessToken = createAccessToken(req.headers);
        const newRefreshToken = signRefreshToken(req.headers);
        res.status(status.SUCCESS).json({
            success: true,
            message: Message[2101],
            data: {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            },
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
