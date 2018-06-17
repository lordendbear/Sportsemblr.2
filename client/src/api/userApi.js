import requester from './requester';
const API_URL = '/api';

class UserApi {
  static getUserProfile(id) {
    const url = `${API_URL}/users/${id}`;

    return requester.get(url);
  }

  static updateProfile(id, profile) {
    const url = `${API_URL}/users/${id}`;

    return requester.putAuthorized(url, profile);
  }
}

export default UserApi;