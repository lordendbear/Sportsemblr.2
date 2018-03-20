export default (User, { passwordHasher }) => {
    return {
        create: (user) => {
            return new Promise((resolve, reject) => {

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