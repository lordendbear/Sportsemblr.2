import axios from "axios";
import AuthApi from './authApi';

const events = [
  {
    _id: 1,
    title: 'best match',
    totalPeople: 12,
    peopleNeeded: 6,
    date: new Date(),
    sport: {
      name: 'Football'
    }

  }
]

const API_URL = 'http://localhost:4040/api';

class EventApi {
  static getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], events));
      }, 1000);
    });
  }

  static saveEvent(event) {
    if (event.id) {
      return this.updateEvent(event);
    }

    return this.createEvent(event);
  }

  static updateEvent(event) {

  }

  static createEvent(event) {
    const config = this.getConfig();

    const url = `${API_URL}/events`;

    return axios.post(url, event, config);
  }

  static getConfig() {
    const token = AuthApi.getToken();

    let config = {
      headers: { 'Authorization': "bearer" + token }
    };

    return config;
  }
}

export default EventApi;