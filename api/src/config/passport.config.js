import passport from "passport";
import LocalStrategy from "passport-local";
import FacebookStrategy from "passport-facebook";
import GoogleStrategy from "passport-google";
import TwitterStrategy from "passport-twitter";

// configure passport to use the local strategy
passport.use(
    new LocalStrategy.Strategy(
        { usernameField: "email", passportField: "password" },
        async (email, password, done) => {
            
        }
    )
);
