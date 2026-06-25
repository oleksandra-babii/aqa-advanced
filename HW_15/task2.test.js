const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { fetchWithHeadersAndParams } = require('./task2');

const BASE_URL = 'https://api.example.com/data';

let mock;

beforeEach(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.restore();
});

test('should send correct headers in the request', async () => {
  const headers = { Authorization: 'Bearer token123', 'X-Api-Key': 'secret-key' };

  mock.onGet(BASE_URL).reply(200, { success: true });

  await fetchWithHeadersAndParams(BASE_URL, headers, {});

  expect(mock.history.get[0].headers['Authorization']).toBe('Bearer token123');
  expect(mock.history.get[0].headers['X-Api-Key']).toBe('secret-key');
});

test('should send correct params in the request', async () => {
  const params = { page: 2, limit: 20 };

  mock.onGet(BASE_URL).reply(200, { results: [] });

  await fetchWithHeadersAndParams(BASE_URL, {}, params);

  expect(mock.history.get[0].params).toEqual(params);
});

test('should return data from the server', async () => {
  const mockData = { id: 1, name: 'Test' };

  mock.onGet(BASE_URL).reply(200, mockData);

  const result = await fetchWithHeadersAndParams(BASE_URL, {}, {});

  expect(result).toEqual(mockData);
});
