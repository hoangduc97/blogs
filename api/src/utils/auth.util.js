import jwt from 'jsonwebtoken';

const retrieveToken = (headers) => {
    if (headers && headers.authorization) {
        const tokens = headers.authorization.split(' ');
        if (tokens && tokens.length === 2) {
            return jwt.verify(tokens[1], process.env.JWT_SECRET_OR_KEY);
        }
    }
    return null;
};

const createToken = (user) => {
    if (user) {
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_OR_KEY,
            {
                expiresIn: process.env.JWT_TOKEN_EXPIRATION,
            }
        );
        return `${process.env.JWT_TOKEN_PREFIX} ${token}`;
    }
};
export { retrieveToken, createToken };
