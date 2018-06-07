import { Promise } from 'bluebird';

export default (Review) => {
  return {
    createReview: (review, eventId, userId) => {
      const newReview = new Review(review);
      newReview.user = userId;
      newReview.event = eventId;

      return newReview.save()
        .then((savedReview) => {
          return Review.populate(savedReview, { path: 'event user' });
        })
        .then((populatedReview) => {
          review = populatedReview;

          review.event.reviews.push(review._id);
          return review.event.save();
        })
        .then(() => {
          review.user.reviews.push(review._id);
          return review.user.save();
        })
        .then(() => {
          return Promise.resolve(review);
        });
    }
  };
}