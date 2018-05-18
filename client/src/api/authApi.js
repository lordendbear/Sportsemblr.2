import axios from 'axios';

const API_URL = 'http://localhost:4040/api';

// How about naming those services? 
class AuthApi {
    static register(user) {
        return axios.post(API_URL + '/users', user);
    }

    static login(user) {
        return axios.post(API_URL + '/login', user);
    }

    static isLoggedIn() {
        return !!this.getToken();
    }

    static logOut() {
        localStorage.removeItem('auth');
    }

    static getCurrentUser() {
        const auth = this.getAuth();

        if (auth) {
            return auth.user;
        }
    }

    static getToken() {
        const auth = this.getAuth();

        if (auth) {
            return auth.token;
        }
    }

    static getAuth() {
        const auth = localStorage.getItem('auth');

        if (auth) {
            let parsed;
            try {
                parsed = JSON.parse(auth);
            }
            catch (error) {
                // TODO: catch error
            }
            // TODO: checks for expired
            return parsed;
        }
    }
}

export default AuthApi;