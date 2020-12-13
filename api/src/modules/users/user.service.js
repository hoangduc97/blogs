import { validationResult } from 'express-validator';
import { createAccessToken, createRefreshToken } from '../../utils/auth.util';
import { roleConstant, status } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.util';
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
            role: roleConstant.USER,
            account: {
                email: email,
                hash: password,
            },
        })
            .then(async (user) => {
                console.log(user);
                const accessToken = createAccessToken(user);
                const refreshToken = createRefreshToken(user);
                return res.status(status.SUCCESS).json({
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
    getAll,
};

export default UserService;
