const request = require('supertest');
const app = require('./server');

describe('Pruebas de la API', () => {
    it('Debería devolver status OK en /api/status', async () => {
        const res = await request(app).get('/api/status');
        expect(res.statusCode).toEqual(500);
        expect(res.body.status).toBe('OK');
    });
});
