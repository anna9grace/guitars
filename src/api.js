import axios from 'axios';

const URL = 'https://guitars-5a1bb-default-rtdb.europe-west1.firebasedatabase.app/guitars.json';
const REQUEST_TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw new Error(err.response);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
