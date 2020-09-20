import passport from 'passport';
import JwtStrategy from 'passport-jwt';
import Account from '../modules/users/account.model';

const jwtOptions = {
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: process.env.JWT_SECRET_OR_KEY,
};

// configure passport to use the local strategy
passport.use(
    new JwtStrategy.Strategy(jwtOptions, (jwt_payload, done) => {
        Account.findOne({ id: jwt_payload.id }, (err, user) => {
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

export const auth = passport.authenticate('jwt', {
    session: false,
});

export default passport;
