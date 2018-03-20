export default (User, { passwordHasher }) => {
    return {
        create: (user) => {
            const hashedPassword = passwordHasher.hashPassword(user.password);

            const newUser = new User({
                email: user.email,
                name: user.name,
                password: hashedPassword
            });

            return new Promise((resolve, reject) => {
                newUser.save((err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(user);
                })
            });
        },
        findByEmail: (email) => {
            return new Promise((resolve, reject) => {
                User.findOne({
                    email
                }, (err, user) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(user);
                });
            });
        },
    };
}