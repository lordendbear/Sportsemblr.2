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
    },
    updateEvent: (id, options) => {
      return new Promise((resolve, reject) => {
        Event.findById(id, (err, event) => {
          if (err) {
            reject(err);
          }

          if (!event) {
            return resolve(null);
          }

          event.title = options.title || event.title;
          event.sport = options.sport || event.sport;
          event.difficulty = options.difficulty || event.difficulty;
          event.peopleNeeded = options.peopleNeeded || event.peopleNeeded;
          event.date = options.date || event.date;
          event.totalPrice = options.totalPrice || event.totalPrice;
          event.sport = options.sport || event.sport;

          event.save((err) => {
            if (err) {
              reject(err);
            }

            resolve(event);
          });
        });
      });
    }
  };
}