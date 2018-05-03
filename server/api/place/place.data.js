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
    }
  };
}