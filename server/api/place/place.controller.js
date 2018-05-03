export default (data) => {
  return {
    delete: (req, res, next) => {
      const id = req.params.id;

      data.deletePlace(id)
        .then(() => {
          res.sendStatus(204);
        });
    },
    update: (req, res, next) => {
      const id = req.params.id,
        options = req.body;

      data.updatePlace(id, options)
        .then(place => {
          if (!place) {
            return res.sendStatus(404);
          }

          return res.send(place);
        })
        .catch(err => {
          res.send(err)
        });
    },
  }
}