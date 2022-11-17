import axios from 'axios';

const settings = {
  baseURL: 'https://www.anapioficeandfire.com/api/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json,text/plain,*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
};

const instance = axios.create(settings);

export default {
  get(url, request) {
    return instance
      .get(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  post(url, request) {
    return instance
      .post(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => {
        if (error.response) {
          return Promise.reject(error.response);
        }
        return Promise.reject(error);
      });
  },
  put(url, request) {
  return instance
      .put(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  patch(url, request) {
    return instance
      .patch(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  delete(url, request) {
    return instance
      .delete(url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
};

