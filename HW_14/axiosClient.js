const axios = require('axios');

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

client.interceptors.request.use((config) => {
  const { method, baseURL, url, data } = config;
  console.log(`[REQUEST] ${method.toUpperCase()} ${baseURL}${url}`);
  if (data) {
    console.log('[REQUEST BODY]', JSON.stringify(data));
  }
  return config;
});

client.interceptors.response.use(
  (response) => {
    const { status, config, data } = response;
    console.log(`[RESPONSE] ${status} ${config.method.toUpperCase()} ${config.url}`);
    const preview = Array.isArray(data)
      ? `Array(${data.length}) — first item: ${JSON.stringify(data[0])}`
      : JSON.stringify(data);
    console.log('[RESPONSE DATA]', preview);
    return response;
  },
  (error) => {
    const { response, config } = error;
    if (response) {
      console.error(`[RESPONSE ERROR] ${response.status} ${config?.method?.toUpperCase()} ${config?.url}`);
    } else {
      console.error('[NETWORK ERROR]', error.message);
    }
    return Promise.reject(error);
  },
);

module.exports = client;
