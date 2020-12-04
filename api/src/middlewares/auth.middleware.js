import passport from '../config/passport.config';

const authJwt = (roles) => {
    return (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user) => {
            if (err || !user)
                return res.status(403).json({ message: 'forbidden' });
            else {
                if (!roles.length || roles.includes(user.role)) {
                    
                } else {
                    return res.status(403).json({ message: 'forbidden' });
                }
            }
        })(req, res, next);
    };
};

export { authJwt };
