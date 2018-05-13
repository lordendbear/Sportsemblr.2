import axios from 'axios';

const API_URL = 'http://localhost:4040/api';

class UserApi {
  static getUserProfile(id) {
    return axios.get(`${API_URL}/users/${id}`);
  }
}

export default UserApi;