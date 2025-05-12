const request = require('supertest');
const app = require('../app');

beforeEach(() => {
  app.locals.users.length = 0;
  app.locals.users.push(
    { id: 1, name: 'Afolabi' },
    { id: 2, name: 'Shyllon' },
    { id: 3, name: 'Great' }
  );
});

describe('GET /users', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('POST /users', () => {
  it('should add a new user to the list', async () => {
    const res = await request(app).post('/users').send({ name: 'New User' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('New User');
  });
});

describe('DELETE /users/:id', () => {
  it('should delete a user by ID', async () => {
    const res = await request(app).delete('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Afolabi');
  });

  it('should return 404 if user does not exist', async () => {
    const res = await request(app).delete('/users/999');
    expect(res.statusCode).toEqual(404);
  });
});

describe('POST /users duplicate name check', () => {
  it('should return 409 for duplicate names', async () => {
    await request(app).post('/users').send({ name: 'Duplicate' });
    const res = await request(app).post('/users').send({ name: 'Duplicate' });
    expect(res.statusCode).toEqual(409);
    expect(res.body.error).toBe('User with this name already exists');
  });
});
