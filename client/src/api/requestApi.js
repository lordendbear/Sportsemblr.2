import requester from './requester';

const API_URL = '/api';

class RequestApi {
  static respondToRequest(eventId, requestId, accepted) {
    const url = `${API_URL}/events/${eventId}/requests/${requestId}`;

    return requester.putAuthorized(url, { requestId, accepted });
  }
}

export default RequestApi;