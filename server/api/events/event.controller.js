export default (data) => {
  return {
    delete: (req, res, next) => {
      const id = req.params.id;

      data.deleteEvent(id)
        .then(() => {
          res.sendStatus(204);
        });
    },
    getById: (req, res, next) => {
      const id = req.params.id;

      data
        .getById(id)
        .then(event => {
          if (!event) {
            return res.sendStatus(404);
          }

          return res.send(event);
        });
    }
  }
}