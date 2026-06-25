const axios = require('axios');

async function getUser(userId) {
  const response = await axios.get(`https://api.example.com/users/${userId}`);
  return response.data;
}

async function createUser(userData) {
  const response = await axios.post('https://api.example.com/users', userData);
  return response.data;
}

async function deleteUser(userId) {
  const response = await axios.delete(`https://api.example.com/users/${userId}`);
  return response.data;
}

module.exports = { getUser, createUser, deleteUser };
