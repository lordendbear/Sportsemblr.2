import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../api/users/user.model';
import passport from 'passport';

export default function (config) {
    const options = {
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer')
    }

    const jwtVerify = async (payload, done) => {
        await User.findById(payload.sub, (err, user) => {
            if (err) {
                return done(err, false);
            }

            if (user) {
                return done(null, user);
            }

            return done(null, false);
        });
    }

    // passport.serializeUser((user, done) => {
    //     done(null, user.id);
    // });

    // passport.deserializeUser((id, done) => {
    //     User.findById(id, (err, user) => {
    //         done(err, user);
    //     });
    // });

    return {
        passport,
        strategies: { jwt: new JwtStrategy(options, jwtVerify) }
    };
}