const axios = require('axios');

async function fetchWithHeadersAndParams(url, headers = {}, params = {}) {
  const response = await axios.get(url, { headers, params });
  return response.data;
}

module.exports = { fetchWithHeadersAndParams };
