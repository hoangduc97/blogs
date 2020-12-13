import passport from '../config/passport.config';
import { status } from '../utils/constants';

const authJwt = (roles) => {
    return (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user) => {
            if (err || !user)
                return res
                    .status(status.FORBIDDEN)
                    .json({ message: 'forbidden' });
            else {
                if (roles.includes(user.role)) {
                    next();
                } else {
                    return res
                        .status(status.FORBIDDEN)
                        .json({ message: 'forbidden' });
                }
            }
        })(req, res, next);
    };
};

export { authJwt };
