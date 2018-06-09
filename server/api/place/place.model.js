import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  description: {
    type: String,
    trim: true
  },
  page: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
    required: false
  },
  sports: [
    {
      id: Number,
      name: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true,
        required: true
      }
    }
  ],
  reviews: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
}, {
  timestamps: true
});

const Place = mongoose.model('Place', placeSchema);

export default Place;