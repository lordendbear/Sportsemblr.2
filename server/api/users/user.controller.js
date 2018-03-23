export default (data) => {
    return {
        create: (req, res, next) => {
            const user = req.body;

            if (!user || !user.email || !user.password) {
                return res
                    .sendStatus(400);
            }

            data.findByEmail(user.email)
                .then((existingUser) => {
                    if (existingUser) {
                        return res
                            .sendStatus(400)
                            .send({
                                error: 'User already exists'
                            });
                    }

                    return data.create(user);
                })
                .then(() => {
                    return res
                        .send({
                            email: user.email,
                            name: user.name
                        })
                })
                .catch(err => next(err));
        },
    }
}