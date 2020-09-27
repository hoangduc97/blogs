module.exports = (roles, passport, strategy, opts) => {
    return (req, res, next) => {
        passport.authenticate(strategy, opts, (err, user, info) => {
            console.log(user);
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
