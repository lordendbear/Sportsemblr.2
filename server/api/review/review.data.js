import { Promise } from 'bluebird';

export default (Review) => {
  return {
    createReview: (review, eventId, userId) => {
      const newReview = new Review(review);
      newReview.user = userId;
      newReview.event = eventId;

      return newReview.save();
    }
  };
}