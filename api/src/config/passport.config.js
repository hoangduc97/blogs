import passport from "passport";
import JwtStrategy from "passport-jwt";

const jwtOptions = {
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_OR_KEY
};

// configure passport to use the local strategy
passport.use(
    new JwtStrategy.Strategy(
        jwtOptions,
        async (jwt_payload, next) => {
            
        }
    )
);

export default passport;
