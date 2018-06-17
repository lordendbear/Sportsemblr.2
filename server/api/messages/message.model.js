import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  room: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
}, {
    timestamps: true
  });

const Message = mongoose.model('Message', messageSchema);

export default Message;