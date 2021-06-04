const request = require('supertest');
const app = require('../app');

describe('Get Users', () => {
  test('should respond with the users', () => {
    return request(app)
      .get('/users')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeInstanceOf(Object);
        expect(body).toEqual({
          USERNAME: 'BENN',
          FIRSTNAME: 'BEN',
          LASTNAME: 'EGAN',
          USER_ID: 1,
        });
      });
  });
});
