import { controllers } from './controllers'
import request from 'supertest'
import express from 'express'
import router from '../routes'

const app = express();

app.use(router)

describe('Controllers tests', () => {
  test('Get movie by id', () => {
    const ID = 299536;
    return request(app).get(`/movies/${ID}`).then(res => {
      expect(res.status).toBe(200);
    })
  });
  test('Search movie', () => {
    const NAME = 'Blade Runner';
    return request(app).get(`/search?name=${NAME}`).then(res => {
      expect(res.status).toBe(200);
    })
  });
  test('Sort movies', () => {
    jest.setTimeout(30000)
    const FIELD = 'title', DIRECTION = 'up';
    return request(app).get(`/sort?field=${FIELD}&direction=${DIRECTION}`).then(res => {
      expect(res.status).toBe(200);
    })
  });
  test('Pagination', () => {
    const FROM = 2, TO = 10;
    return request(app).get(`/page?from=${FROM}&to=${TO}`).then(res => {
      expect(res.status).toBe(200);
    })
  });
  test('Get movie by wrong id', () => {
    const ID = 2995363445445123;
    return request(app).get(`/movies/${ID}`).then(res => {
      expect(res.text).toBe("Sorry, no such film");
    })
  });
  test('Search movie(Error)', () => {
    const NAME = 'Blade Runnerdfsdsd';
    return request(app).get(`/search?name=${NAME}`).then(res => {
      expect(res.text).toBe("Sorry, no such film");
    })
  });
  test('Sort movies(Error)', () => {
    jest.setTimeout(30000)
    const FIELD = 666, DIRECTION = 'up';
    return request(app).get(`/sort?field=${FIELD}&direction=${DIRECTION}`).then(res => {
      expect(res.status).toBe(500);
    })
  })
  test('Pagination (Error)', () => {
    const FROM = 'sdf', TO = 10;
    return request(app).get(`/page?from=${FROM}&to=${TO}`).then(res => {
      expect(res.status).toBe(400);
    })
  });
})