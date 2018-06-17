import requester from './requester';

const API_URL = '/api';

class EventApi {
  static getAll() {
    const url = `${API_URL}/events/active`;

    return requester.get(url);
  }

  static getById(id) {
    const url = `${API_URL}/events/${id}`;

    return requester.get(url);
  }

  static saveEvent(event) {
    if (event._id) {
      return this.updateEvent(event);
    }

    return this.createEvent(event);
  }

  static updateEvent(event) {
    const url = `${API_URL}/events/${event._id}`;

    return requester.putAuthorized(url, event);
  }

  static createEvent(event) {
    const url = `${API_URL}/events`;

    return requester.postAuthorized(url, event);
  }

  static joinEvent(event, user) {
    const url = `${API_URL}/events/${event._id}/requests`;

    return requester.postAuthorized(url, { userId: user._id });
  }

  static leaveReview(review, eventId) {
    const url = `${API_URL}/events/${eventId}/reviews`;

    return requester.postAuthorized(url, review);
  }

  static deleteEvent(eventId) {
    const url = `${API_URL}/events/${eventId}`;

    return requester.deleteAuthorized(url);
  }

  static getMessages(eventId) {
    const url = `${API_URL}/events/${eventId}/messages`;

    return requester.getAuthorized(url);
  }
}

export default EventApi;