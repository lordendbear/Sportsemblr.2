import { Promise } from 'bluebird';

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
    getById: (id) => {
      return new Promise((resolve, reject) => {
        User.findById(id, (err, user) => {
          if (err) {
            reject(err);
          }

          resolve(user);
        });
      });
    },
    updateUser: (id, options) => {
      return new Promise((resolve, reject) => {
        User.findById(id, (err, user) => {
          if (err) {
            reject(err);
          }

          if (!user) {
            return resolve(null);
          }

          user.email = options.email || user.email;
          user.name = options.name || user.name;
          user.picture = options.picture || user.picture;

          user.save((err) => {
            if (err) {
              reject(err);
            }

            resolve(user);
          });
        });
      });
    },
    getAll: () => {
      return User.find({});
    },
    delete: (id) => {
      return User.remove({ _id: id });
    },
    toggleAdmin: (id, makeAdmin) => {
      return User.findById(id)
        .then(user => {
          if (makeAdmin) {
            user.role = 'admin';
          } else {
            user.role = 'user';
          }

          return user.save();
        });
    }
  };
}