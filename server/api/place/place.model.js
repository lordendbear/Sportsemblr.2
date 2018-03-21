import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({}, {
    timestamps: true
});

const Place = mongoose.model('Place', placeSchema);

export default Place;