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
      return Event
        .findById(id)
        .populate({
          path: 'requests peopleJoined', populate: {
            path: 'sender'
          }
        })
        .then(populated => {
          return Promise.resolve(populated);
        });
    },
    create: (event, userId) => {
      event.status = 'active';
      const newEvent = new Event(event);
      newEvent.organizer = userId;

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
    },
    getActiveEvents: () => {
      return Event
        .find({ status: 'active' })
        .populate('organizer');

      Event.find({ status: 'active' }, (err, events) => {
        if (err) {
          return reject(err);
        }

        return resolve(events);
      });
    },
    getAllEvents: () => {
      return new Promise((resolve, reject) => {
        Event.find({}, (err, events) => {
          if (err) {
            return reject(err);
          }

          return resolve(events);
        });
      });
    }
  };
}