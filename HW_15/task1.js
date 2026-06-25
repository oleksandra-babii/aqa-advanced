const axios = require('axios');

const WRONG_URL = 'http://this-url-does-not-exist.invalid/api/data';

async function fetchFromWrongUrl() {
  try {
    const response = await axios.get(WRONG_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
}

module.exports = { fetchFromWrongUrl, WRONG_URL };
