import { Promise } from 'bluebird';

export default (Message) => {
  return {
    addMessage: (message) => {
      const newMessage = new Place(message);

      return newMessage
        .save();
    }
  }
}