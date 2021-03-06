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
        .then(() => {
          return Promise.resolve(request);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    acceptRequest: (requestId) => {
      let request;

      return Request
        .findById(requestId)
        .populate({
          path: 'event sender', populate: {
            path: 'requests'
          }
        })
        .then(populated => {
          request = populated;
          let eventRequest = request.event.requests.find(r => r._id.equals(request._id));

          request.event.requests.splice(eventRequest, 1);
          request.event.peopleJoined.push(request.sender);
          if (request.event.peopleNeeded > 0) {
            request.event.peopleNeeded -= 1;
          } else {
            throw new Error('No more places in event');
          }

          return request.event.save();
        })
        .then(res => {
          let senderRequest = request.sender.requests.find(r => r._id.equals(request._id));

          request.sender.requests.splice(senderRequest, 1);
          request.sender.events.push(request.event);

          return request.sender.save()
        });
    },
    declineRequest: (requestId) => {
      let request;

      return Request
        .findById(requestId)
        .populate({
          path: 'event sender', populate: {
            path: 'requests'
          }
        })
        .then(populated => {
          request = populated;
          let eventRequest = request.event.requests.find(r => r._id.equals(request._id));

          request.event.requests.splice(eventRequest, 1);

          return request.event.save()
        })
        .then(res => {
          let senderRequest = request.sender.requests.find(r => r._id.equals(request._id));

          request.sender.requests.splice(senderRequest, 1);

          return request.sender.save()
        })
        .then(() => {
          return Request.remove({ _id: requestId });
        });
    }
  }
}