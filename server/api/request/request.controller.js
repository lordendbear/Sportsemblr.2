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
    },
    respondToRequest: (req, res, next) => {
      const eventId = req.params.id;
      const requestId = req.params.requestId;

      const accepted = req.body.accepted;

      let promise;
      if (accepted) {
        promise = data.acceptRequest(requestId);
      } else {
        promise = data.declineRequest(requestId);
      }

      promise
        .then(() => {
          res.sendStatus(200);
        });
    }
  }
}