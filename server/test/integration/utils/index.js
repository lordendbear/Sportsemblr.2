import mongoose from 'mongoose';

export function dropDatabase(done) {
    mongoose.connection.db.dropDatabase()
        .then(() => {
            return mongoose.connection.close();
        })
        .then(() => {
            done();
        })
        .catch(err => {
            done(err);
        });
}