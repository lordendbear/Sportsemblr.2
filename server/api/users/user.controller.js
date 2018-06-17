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
    update: (req, res, next) => {
      const id = req.params.id,
        options = req.body;

      data.updateUser(id, options)
        .then(user => {
          if (!user) {
            return res.sendStatus(404);
          }

          return res.send(user);
        })
        .catch(err => {
          res.send(err)
        });
    },
    getProfile: (req, res, next) => {
      const id = req.params.id;

      data
        .getById(id)
        .then(user => {
          if (!user) {
            return res.sendStatus(404);
          }

          return res.send(user);
        });
    },
    getAll: (req, res) => {
      data
        .getAll()
        .then(users => {
          users = users.map(u => {
            u.password = null;
            return u;
          });

          return res.send(users);
        });
    },
    delete: (req, res) => {
      const id = req.params.id;

      data.delete(id)
        .then(() => {
          res.sendStatus(204);
        });
    }
  }
}