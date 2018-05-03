import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
    required: true
  }
}, {
    timestamps: true
  });

const Place = mongoose.model('Place', placeSchema);

export default Place;