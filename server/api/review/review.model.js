import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  text: {
    type: String,
    maxlength: 250
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }
}, {
    timestamps: true
  });

const Review = mongoose.model('Review', reviewSchema);

export default Review;