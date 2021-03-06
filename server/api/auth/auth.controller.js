export default (User, { passwordHasher, tokenManager }) => {
    return {
        login: (req, res) => {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.sendStatus(400);
            }

            User.findOne({ email }, (err, user) => {
                if (err) {
                    return res.send(err);
                }

                if (!user) {
                    return res
                        .sendStatus(404);
                }

                const isMatch = passwordHasher.verifyPassword(user.password, password);

                if (!isMatch) {
                    return res
                        .sendStatus(401);
                }

                const payload = {
                    // exp: moment().add(jwtExpirationInterval, 'minutes').unix(),
                    // iat: moment().unix(),
                    sub: user._id,
                };

                const token = tokenManager.encode(payload);

                delete user.password;

                return res
                    .send({ token, user });
            });
        }
    };
}