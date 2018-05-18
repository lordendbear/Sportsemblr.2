import { Promise } from 'bluebird';

export default (Request) => {
  return {
    createRequest: (userId, eventId) => {
      return new Promise((resolve, reject) => {
        const request = new Request();
        request.sentDate = new Date();
        request.sender = userId;
        request.event = eventId;

        request.save((err, savedRequest) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(savedRequest);
          }
        });
      });
    }
  }
}