export default function (passport) {
    return (req, res, next) => {
        return passport.authenticate('jwt', { session: false })(req, res, next);
    }
}