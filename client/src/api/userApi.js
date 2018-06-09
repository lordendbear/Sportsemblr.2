import requester from './requester';
const API_URL = 'http://localhost:4040/api';

class UserApi {
  static getUserProfile(id) {
    const url = `${API_URL}/users/${id}`;

    return requester.get(url);
  }

  static editProfile(id, profile) {
    const url = `${API_URL}/users/${id}`;

    return requester.putAuthorized(url, profile);
  }
}

export default UserApi;