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
});

const Request = mongoose.model('Request', requestSchema);

export default Request;