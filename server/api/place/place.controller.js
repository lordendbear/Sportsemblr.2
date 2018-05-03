export default (data) => {
  return {
    delete: (req, res, next) => {
      const id = req.params.id;

      data.deletePlace(id)
        .then(() => {
          res.sendStatus(204);
        });
    }
  }
}