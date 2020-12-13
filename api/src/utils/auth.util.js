import jwt from 'jsonwebtoken';
import { stringify } from 'uuid';
import client from '../config/redis.config';

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
            (err, reply) => {
                if (err) throw Error(err);
                return `${process.env.JWT_TOKEN_PREFIX} ${refreshToken}`;
            }
        );
    }
};

const retrieveRefreshToken = (headers) => {
    if (headers && headers.authorization) {
        const tokens = headers.authorization.split(' ');
        if (tokens && tokens.length === 2) {
            return jwt.verify(
                tokens[1],
                process.env.JWT_SECRET_OR_KEY,
                (err, payload) => {
                    if (err) throw Error(err.responseText).status(500);
                    client.GET(payload.id, (err, result) => {
                        if (err) {
                            console.log(err.message);
                            return;
                        }
                        if (refreshToken === result) return payload.id;
                        throw Error(err.responseText).status(500);
                    });
                }
            );
        }
    }
    return null;
};

export {
    retrieveToken,
    retrieveRefreshToken,
    createAccessToken,
    createRefreshToken,
};
