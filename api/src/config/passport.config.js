import passport from 'passport';
import JwtStrategy from 'passport-jwt';
import User from '../modules/users/user.model';

const jwtOptions = {
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: process.env.JWT_SECRET_OR_KEY,
};

// configure passport to use the local strategy
passport.use(
    new JwtStrategy.Strategy(jwtOptions, (jwt_payload, done) => {
        User.findOne({ _id: jwt_payload.id }, (err, user) => {
            if (err) {
                done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    })
);

export default passport;
