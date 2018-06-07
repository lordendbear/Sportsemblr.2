export default (data) => {
  return {
    create: (req, res, next) => {
      const eventId = req.params.id;
      const userId = req.user._id;
      const review = req.body;

      data.createReview(review, userId, eventId)
        .then((review) => {
          res.send(review);
        })
    },
  }
}