import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: 'Event'
  },
  sentDate: Date,
  isAnwered: {
    type: Boolean,
    default: false
  }
});

const Request = mongoose.model('Request', requestSchema);

export default Request;