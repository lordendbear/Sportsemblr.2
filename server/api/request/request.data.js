import { Promise } from 'bluebird';

export default (Request) => {
  return {
    createRequest: (userId, eventId) => {
      const request = new Request();
      request.sentDate = new Date();
      request.sender = userId;
      request.event = eventId;

      return request.save()
        .then((savedRequest) => {
          return Request.populate(savedRequest, { path: 'event sender' });
        })
        .then(populatedRequest => {
          populatedRequest.sender.requests.push(populatedRequest._id);
          populatedRequest.event.requests.push(populatedRequest._id);

          return populatedRequest.save();
        })
        .then((savedRequest) => {
          return Promise.resolve(savedRequest);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
  }
}