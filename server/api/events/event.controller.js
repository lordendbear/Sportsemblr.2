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

      data.create(event)
        .then((newEvent) => {
          return res
            .send(newEvent)
        })
        .catch(err => next(err));
    }
  }
}