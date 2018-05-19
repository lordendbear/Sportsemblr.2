export default (data) => {
  return {
    delete: (req, res, next) => {
      const id = req.params.id;

      data.deleteEvent(id)
        .then(() => {
          res.sendStatus(204);
        });
    },
    details: (req, res, next) => {
      const id = req.params.id;

      data
        .getById(id)
        .then(event => {
          if (!event) {
            return res.sendStatus(404);
          }

          return res.send(event);
        });
    },
    create: (req, res, next) => {
      const event = req.body;

      if (!event || !event.title) {
        return res
          .sendStatus(400);
      }

      const userId = req.user._id;

      data.create(event, userId)
        .then((newEvent) => {
          return res
            .send(newEvent);
        })
        .catch(err => next(err));
    },
    update: (req, res, next) => {
      const id = req.params.id,
        options = req.body;

      data.updateEvent(id, options)
        .then(event => {
          if (!event) {
            return res.sendStatus(404);
          }

          return res.send(event);
        })
        .catch(err => {
          res.send(err)
        });
    },
    getActive: (req, res, next) => {
      data.getActiveEvents()
        .then(events => {
          res.send({ events });
        })
        .catch(err => {
          next(err);
        })
    },
    getAll: (req, res, next) => {
      data.getAllEvents()
        .then(events => {
          res.send({ events });
        })
        .catch(err => {
          next(err);
        })
    }
  }
}