import jwt from 'jsonwebtoken';
import client from '../config/redis.config';
import Message from '../logger/message.data';
import { ErrorHandler } from './error.util';
import { status } from './constants';

const retrieveToken = (headers) => {
    if (headers && headers.authorization) {
        const tokens = headers.authorization.split(' ');
        if (tokens && tokens.length === 2) {
            return jwt.verify(tokens[1], process.env.JWT_SECRET_OR_KEY);
        }
    }
    return null;
};

const createAccessToken = (user) => {
    if (user) {
        const accessToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_OR_KEY,
            {
                expiresIn: process.env.JWT_TOKEN_EXPIRATION,
            }
        );
        return `${process.env.JWT_TOKEN_PREFIX} ${accessToken}`;
    }
};

const createRefreshToken = (user) => {
    if (user) {
        const refreshToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_OR_KEY,
            {
                expiresIn: '1y',
            }
        );
        client.SET(
            user._id + '',
            refreshToken,
            'EX',
            365 * 24 * 60 * 60,
            (err) => {
                if (err) throw new Error(err);
            }
        );
        return `${process.env.JWT_TOKEN_PREFIX} ${refreshToken}`;
    }
};

const retrieveRefreshToken = (refreshToken) => {
    const token = refreshToken.split(' ');

    return jwt.verify(
        token[1],
        process.env.JWT_SECRET_OR_KEY,
        async (err, payload) => {
            if (err) {
                throw new ErrorHandler(status.BAD_REQUEST, Message[1307], 1307);
            }
            await client.GET(payload.id, (err) => {
                if (err) {
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1307],
                        1307
                    );
                }
            });
            return payload.id;
        }
    );
};

export {
    retrieveToken,
    retrieveRefreshToken,
    createAccessToken,
    createRefreshToken,
};
