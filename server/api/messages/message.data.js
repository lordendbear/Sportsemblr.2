import { Promise } from 'bluebird';

export default (Message) => {
  return {
    addMessage: (message) => {
      const newMessage = new Message(message);

      return newMessage
        .save()
        .then(savedMessage => {
          return Message.populate(savedMessage, { path: 'user' });
        });
    },
    getMessages: (room) => {
      return Message.find({ room })
        .populate('user');
    }
  }
}