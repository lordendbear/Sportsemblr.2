export default (data) => {
  return {
    create: (req, res, next) => {
      const eventId = req.params.id;
      const userId = req.user._id;
      const review = req.body;

      data.createRequest(review, userId, eventId)
        .then((review) => {
          console.log(review);
          res.send(review);
        })
    },
  }
}