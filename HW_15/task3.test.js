const axios = require('axios');
const { getUser, createUser, deleteUser } = require('./task3');

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

test('should return user data on successful GET request', async () => {
  const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };
  axios.get.mockResolvedValue({ data: mockUser });

  const result = await getUser(1);

  expect(result).toEqual(mockUser);
  expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
});

test('should throw an error when user is not found', async () => {
  axios.get.mockRejectedValue(new Error('User not found'));

  await expect(getUser(999)).rejects.toThrow('User not found');
});

test('should create a user and return created data', async () => {
  const newUser = { name: 'Jane Doe', email: 'jane@example.com' };
  const createdUser = { id: 2, ...newUser };
  axios.post.mockResolvedValue({ data: createdUser });

  const result = await createUser(newUser);

  expect(result).toEqual(createdUser);
  expect(axios.post).toHaveBeenCalledWith('https://api.example.com/users', newUser);
});

test('should throw an error when creating user fails', async () => {
  axios.post.mockRejectedValue(new Error('Validation failed'));

  await expect(createUser({ name: 'Invalid' })).rejects.toThrow('Validation failed');
});

test('should delete a user and return success message', async () => {
  axios.delete.mockResolvedValue({ data: { message: 'User deleted' } });

  const result = await deleteUser(1);

  expect(result).toEqual({ message: 'User deleted' });
  expect(axios.delete).toHaveBeenCalledWith('https://api.example.com/users/1');
});

test('should throw an error when user to delete is not found', async () => {
  axios.delete.mockRejectedValue(new Error('User not found'));

  await expect(deleteUser(999)).rejects.toThrow('User not found');
});
