const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { fetchFromWrongUrl, WRONG_URL } = require('./task1');

let mock;

beforeEach(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.restore();
});

test('should throw an error on network failure', async () => {
  mock.onGet(WRONG_URL).networkError();

  await expect(fetchFromWrongUrl()).rejects.toThrow('Request failed:');
});

test('should throw an error on 404 response', async () => {
  mock.onGet(WRONG_URL).reply(404);

  await expect(fetchFromWrongUrl()).rejects.toThrow('Request failed:');
});

test('should throw an error on 500 response', async () => {
  mock.onGet(WRONG_URL).reply(500);

  await expect(fetchFromWrongUrl()).rejects.toThrow('Request failed:');
});
