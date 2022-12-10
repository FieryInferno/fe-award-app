import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {'Content-Type': 'application/json'},
};

const AxiosInstance = axios.create(config);

export const AxiosAuth = axios.create(config);

let store;

export const injectStore = (_store) => store = _store;

AxiosAuth.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${store.getState().auth.user.token}`;

  return config;
});

AxiosAuth.interceptors.response.use((response) => response, (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('userSession');
    localStorage.setItem('lastLocation', window.location.pathname);

    window.location.href = '/login';
  } else {
    return Promise.reject(error);
  }
});

export default AxiosInstance;
