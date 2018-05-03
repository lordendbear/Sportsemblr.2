import { Promise } from 'bluebird';

export default (Event) => {
  return {
    deleteEvent: (id) => {
      return new Promise((resolve, reject) => {
        Event.remove({
          _id: id
        }, err => {
          if (err) {
            return reject(err);
          }

          return resolve();
        });
      })
    },
    getById: (id) => {
      return new Promise((resolve, reject) => {
        Event.findById(id, (err, event) => {
          if (err) {
            reject(err);
          }

          resolve(event);
        });
      });
    },
    create: (event) => {
      const newEvent = new Event(event);

      return new Promise((resolve, reject) => {
        newEvent.save((err) => {
          if (err) {
            reject(err);
          }

          resolve(newEvent);
        })
      });
    }
  };
}