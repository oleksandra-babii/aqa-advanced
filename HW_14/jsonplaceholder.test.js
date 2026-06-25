const client = require('./axiosClient');

describe('JSONPlaceholder API', () => {
  // ─── GET ───────────────────────────────────────────────────────────────────

  describe('GET /posts', () => {
    let response;

    beforeAll(async () => {
      response = await client.get('/posts');
    });

    it('should return status 200', () => {
      expect(response.status).toBe(200);
    });

    it('should return an array of 100 posts', () => {
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data).toHaveLength(100);
    });

    it('each post should have required fields with correct types', () => {
      response.data.forEach((post) => {
        expect(post).toMatchObject({
          userId: expect.any(Number),
          id: expect.any(Number),
          title: expect.any(String),
          body: expect.any(String),
        });
      });
    });
  });

  // ─── GET /posts/:id ────────────────────────────────────────────────────────

  describe('GET /posts/1', () => {
    let response;

    beforeAll(async () => {
      response = await client.get('/posts/1');
    });

    it('should return status 200', () => {
      expect(response.status).toBe(200);
    });

    it('should return a single post with id 1', () => {
      expect(response.data).toMatchObject({
        userId: expect.any(Number),
        id: 1,
        title: expect.any(String),
        body: expect.any(String),
      });
    });

    it('title should not be empty', () => {
      expect(response.data.title.trim().length).toBeGreaterThan(0);
    });
  });

  // ─── GET /users ────────────────────────────────────────────────────────────

  describe('GET /users', () => {
    let response;

    beforeAll(async () => {
      response = await client.get('/users');
    });

    it('should return status 200', () => {
      expect(response.status).toBe(200);
    });

    it('should return an array of 10 users', () => {
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data).toHaveLength(10);
    });

    it('each user should have required fields', () => {
      response.data.forEach((user) => {
        expect(user).toMatchObject({
          id: expect.any(Number),
          name: expect.any(String),
          username: expect.any(String),
          email: expect.any(String),
          address: expect.objectContaining({
            street: expect.any(String),
            city: expect.any(String),
          }),
        });
      });
    });
  });

  // ─── GET /comments?postId=1 ────────────────────────────────────────────────

  describe('GET /comments?postId=1', () => {
    let response;

    beforeAll(async () => {
      response = await client.get('/comments', { params: { postId: 1 } });
    });

    it('should return status 200', () => {
      expect(response.status).toBe(200);
    });

    it('should return exactly 5 comments for post 1', () => {
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data).toHaveLength(5);
    });

    it('all comments should belong to postId 1 and have valid email', () => {
      response.data.forEach((comment) => {
        expect(comment.postId).toBe(1);
        expect(comment.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        expect(comment.body).toBeTruthy();
      });
    });
  });

  // ─── POST /posts ───────────────────────────────────────────────────────────

  describe('POST /posts', () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post body',
      userId: 1,
    };
    let response;

    beforeAll(async () => {
      response = await client.post('/posts', newPost);
    });

    it('should return status 201', () => {
      expect(response.status).toBe(201);
    });

    it('should return the created post with an assigned id', () => {
      expect(response.data).toMatchObject({
        id: expect.any(Number),
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId,
      });
    });

    it('assigned id should be 101 (JSONPlaceholder convention)', () => {
      expect(response.data.id).toBe(101);
    });
  });
});
