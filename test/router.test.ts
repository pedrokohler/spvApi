import request from 'supertest';
import app from '../src/server';

function post(url: string, body: object) {
  const httpRequest = request(app).post(url);
  httpRequest.send(body);
  httpRequest.set('Accept', 'application/json');
  httpRequest.set('Origin', 'http://localhost:3000');
  return httpRequest;
}

describe('Api test', () => {
  it('Suceeds on summing', async (done) => {
    const response = await post('/sum', { numbers: [1, 2, 3] })
      .expect(200);
    expect(response.body.sum).toBe(6);
    done();
  });

  it('Suceeds on taking the average', async (done) => {
    const response = await post('/average', { numbers: [6, 4, 2] })
      .expect(200);
    expect(response.body.average).toBe(4);
    done();
  });
});
