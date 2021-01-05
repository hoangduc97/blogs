import passport from 'passport';
import JwtStrategy from 'passport-jwt';
import User from '../modules/users/user.model';

const cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) token = req.cookies['refreshToken'];
    return token;
};

const jwtOptions = {
    jwtFromRequest:
        cookieExtractor() ||
        JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_OR_KEY,
    algorithms: ['HS256'],
};

// configure passport to use the local strategy
passport.use(
    new JwtStrategy.Strategy(jwtOptions, (jwt_payload, done) => {
        User.findOne({ _id: jwt_payload._id }, (err, user) => {
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
