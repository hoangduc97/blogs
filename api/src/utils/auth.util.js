import jwt from 'jsonwebtoken';
import User from '../modules/users/user.model';
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
            { _id: user._id, role: user.role },
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
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET_OR_KEY,
            {
                expiresIn: '30d',
            }
        );
        client.SET(
            user._id + '',
            refreshToken,
            'EX',
            30 * 24 * 60 * 60,
            (err) => {
                if (err) throw new Error(err);
            }
        );
        return `${process.env.JWT_TOKEN_PREFIX} ${refreshToken}`;
    }
};

const retrieveRefreshToken = async (refreshToken) => {
    const token = refreshToken.split(' ');
    const user = jwt.verify(token[1], process.env.JWT_SECRET_OR_KEY);

    return new Promise((res, rej) => {
        client.GET(user._id + '', (err, reply) => {
            if (err || !reply) {
                rej(err);
                return;
            }
            res(user);
        });
    });
};

async function getUserRefreshToken(token) {
    try {
        const user = await retrieveRefreshToken(token);
        const newUser = await User.findById(user._id);
        if (!newUser) throw new Error();
        return newUser;
    } catch (error) {
        throw new ErrorHandler(status.BAD_REQUEST, Message[1307], 1307);
    }
}

function setTokenCookie(res, token) {
    const cookieOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + 304 * 60 * 60 * 1000),
    };
    res.cookie('refreshToken', token, cookieOptions);
}

export {
    retrieveToken,
    retrieveRefreshToken,
    createAccessToken,
    createRefreshToken,
    setTokenCookie,
    getUserRefreshToken,
};
