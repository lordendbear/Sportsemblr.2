import axios from 'axios';
import AuthApi from './authApi';

const getConfig = () => {
  const token = AuthApi.getToken();

  let config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };

  return config;
}

const requester = {
  getAuthorized: (url) => {
    return axios.get(url, getConfig());
  },
  get: (url) => {
    return axios.get(url);
  },
  postAuthorized: (url, body) => {
    return axios.post(url, body, getConfig());
  },
  post: (url, body) => {
    return axios.post(url, body);
  },
  putAuthorized: (url, body) => {
    return axios.put(url, body, getConfig());
  },
  deleteAuthorized: (url, body) => {
    return axios.delete(url, getConfig());
  }
}

export default requester;