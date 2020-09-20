import jwt from 'jsonwebtoken';

const isValidToken = (token) => {
    jwt.verify(token, process.env.JWT_SECRET_OR_KEY);
};

const retrieveToken = (headers) => {
    if (headers && headers.authorization) {
        const tokens = headers.authorization.split(' ');
        if (tokens && tokens.length === 2) {
            return tokens[1];
        }
    }
    return null;
};

const createToken = (user) => {
    if (user) {
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET_OR_KEY, {
            expiresIn: process.env.JWT_TOKEN_EXPIRATION,
        });
        return `${process.env.JWT_TOKEN_PREFIX} ${token}`;
    }
};
export { isValidToken, retrieveToken, createToken };
