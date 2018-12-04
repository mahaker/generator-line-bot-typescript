import request, { Response }from 'supertest';
import app from '../src/app';

describe('GET /', () => {
    test('respond', async () => {
        const response: Response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.text).toBe('Hello world.');
    });
});