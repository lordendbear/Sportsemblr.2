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
    create: (place) => {
      const newPlace = new Place({
        name: place.name
      });

      return new Promise((resolve, reject) => {
        newPlace.save((err) => {
          if (err) {
            reject(err);
          }

          resolve(place);
        })
      });
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

          place.name = options.name || place.name;

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