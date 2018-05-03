import { Promise } from 'bluebird';

export default (Place) => {
  return {
    deletePlace: (id) => {
      return new Promise((resolve, reject) => {
        Place.remove({
          _id: id
        }, err => {
          if (err) {
            return reject(err);
          }

          return resolve();
        });
      })
    },
    updatePlace: (id, options) => {
      return new Promise((resolve, reject) => {
        Place.findById(id, (err, place) => {
          if (err) {
            reject(err);
          }

          if (!place) {
            return resolve(null);
          }

          place.title = options.title || place.title;

          place.save((err) => {
            if (err) {
              reject(err);
            }

            resolve(place);
          });
        });
      });
    }
  };
}