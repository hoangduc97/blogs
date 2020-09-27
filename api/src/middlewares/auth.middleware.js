import passport from '../config/passport.config';

const authJwt = (roles) => {
    return (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user) => {
            if (err || !user) res.status(403).json({ message: 'forbidden' });
            else {
                if (!roles.length || roles.includes(user.role)) {
                    next();
                } else {
                    res.status(403).json({ message: 'forbidden' });
                }
            }
        })(req, res, next);
    };
};

export { authJwt };
