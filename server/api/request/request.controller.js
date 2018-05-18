export default (data) => {
  return {
    create: (req, res, next) => {
      const eventId = req.params.id;
      const userId = req.user._id;

      if (!userId.equals(req.body.userId)) {
        return res.sendStatus(401);
      }

      data.createRequest(userId, eventId)
        .then((request) => {
          res.send(request);
        })
    }
  }
}