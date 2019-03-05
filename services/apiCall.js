import axios from 'axios';
import fromPairs from 'lodash/fromPairs';

// in real app I extract it from env
axios.defaults.baseURL = 'http://localhost:3001/api';

const methods = ['get', 'post', 'put', 'delete'];

const apiCall = fromPairs(methods.map(method => [
  method,
  (url, payload = {}, headers = {}) => {
    const config = {
      url,
      method,
      headers,
    };

    if (method === 'get') {
      config.params = payload;
    } else {
      config.data = payload;
    }

    return axios(config)
      .then((response) => {
        const { data: rawData, status, statusText } = response;

        return {
          data: { ...rawData, data: rawData.data },
          status,
          statusText,
        };
      })
      .catch((error) => {
        console.error('API Error: ', error);
        return Promise.resolve({ error });
      });
  },
]));

export default apiCall;
