import { Promise } from 'bluebird';

export default (Request) => {
  return {
    createRequest: (userId, eventId) => {
      let request = new Request();
      request.sentDate = new Date();
      request.sender = userId;
      request.event = eventId;

      return request.save()
        .then((savedRequest) => {
          return Request.populate(savedRequest, { path: 'event sender' });
        })
        .then(populatedRequest => {
          request = populatedRequest;

          request.event.requests.push(request._id);

          return request.event.save();
        })
        .then(() => {
          request.sender.requests.push(request._id);

          return request.sender.save();
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