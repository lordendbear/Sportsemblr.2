import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
    required: true
  },
  sport: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place'
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'advanced', 'semi-pro', 'pro'],
    required: true
  },
  picture: {
    type: String,
    trim: true,
  },
  peopleNeeded: {
    type: Number,
    required: true
  },
  peopleJoined: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['active', 'started', 'ended']
  },
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  totalPrice: {
    type: Number,
    required: true
  },
  location: {
    lat: Number,
    lng: Number
  },
  requests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request'
  }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const Event = mongoose.model('Event', eventSchema);

export default Event;