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
    create: (req, res, next) => {
      const place = req.body;

      if (!place || !place.name) {
        return res
          .sendStatus(400);
      }

      const userId = req.user._id;

      data.create(place, userId)
        .then((newPlace) => {
          return res
            .send(newPlace)
        })
        .catch(err => next(err));
    },
    getAll: (req, res, next) => {
      data.getAllPlaces()
        .then(places => {
          res.send({ places });
        })
        .catch(err => {
          next(err);
        })
    }
  }
}