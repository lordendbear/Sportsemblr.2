import requester from './requester';

const API_URL = 'http://localhost:4040/api';

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
    const url = `${API_URL}/events/${event._id}/join`;

    return requester.postAuthorized(url, { userId: user._id });
  }
}

export default EventApi;