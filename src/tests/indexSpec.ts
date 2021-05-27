import supertest from 'supertest';
import { app, myFunc } from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    });
});

describe('Sample function', () => {
    it('should multiply 5 by 5 and returns 25', () => {
        expect(myFunc(5)).toEqual(25);
    });
});
