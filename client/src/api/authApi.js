import axios from 'axios';

const API_URL = 'http://localhost:4040/api';

class AuthApi {
    static register(user) {
        return axios.post(API_URL + '/users', user);
    }
}

export default AuthApi;